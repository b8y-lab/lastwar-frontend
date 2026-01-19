'use client';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  getGameArray,
  getReelsRandomArray,
  getResultBySymbols,
  RewardResult,
  SpinResult,
} from '@/utils/slot/symbols.ts';
import BuySpinModal from '@/app/shop/_components/BuySpinModal.tsx';
import { Generator } from './Partials/Generator';
import { Reward } from './Partials/Reward';

const SlotReel = dynamic(() => import('@/components/SlotReel'), { ssr: false });

export default function SlotMachine() {
  const router = useRouter();
  const [spins, setSpins] = useState(1);
  const [reels, setReels] = useState(['🪙', '🎁', '⚔️']);
  const [rolling, setRolling] = useState(false);
  const [reward, setReward] = useState<null | RewardResult>(null);

  useEffect(() => {
    getSpins();
  }, []);

  const getSpins = async () => {
    const response = await fetch('/api/spin');
    const data = await response.json();

    if (response.ok) setSpins(data.spins);
  };

  const updateSpins = async () => {
    const response = await fetch('/api/spin', {
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ spins: spins - 1 }),
      method: 'POST',
    });
    const data = await response.json();

    if (response.ok) setSpins(data.spins);
  };

  const handleFlop = (results: string[]) => {
    updateSpins();

    setTimeout(() => {
      setRolling(false);
      const result = getResultBySymbols(results);

      if (result.type === 'reward') {
        setReward(result);
        return;
      }

      if (result.type === 'fight') {
        router.push('/foe/attack');
        return;
      }

      if (result.type === 'heist') {
        router.push('/foe/heist');
        return;
      }
    }, 1000);
  };

  const spin = () => {
    if (rolling) return;
    setRolling(true);

    const weightedArray = getGameArray();

    // NOTE: Reels animation and its interval
    const spinInterval = setInterval(() => {
      setReels(getReelsRandomArray());
    }, 100);

    // NOTE: Timeout for a delay before redirect (to see the result combination)
    setTimeout(() => {
      clearInterval(spinInterval);
      setReels(weightedArray);
      handleFlop(weightedArray);
    }, 500);
  };

  return (
    <div className="relative flex flex-col items-center justify-center z-2 relative">
      <div
        className="flex flex-col justify-start items-center w-[490px] h-[630px]"
        style={{
          backgroundImage: 'url("/assets/slot/slot-house.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex m-[250px] gap-[10px]">
          <SlotReel symbol={reels[0]} spinning={rolling} />
          <SlotReel symbol={reels[1]} spinning={rolling} />
          <SlotReel symbol={reels[2]} spinning={rolling} />
        </div>
      </div>

      <div className="absolute bottom-[13px] left-0">
        <Generator />
      </div>

      {spins > 0 ? (
        <button
          onClick={spin}
          disabled={rolling}
          className="spin-button button w-[225px] h-[140px] absolute -bottom-20"
        ></button>
      ) : (
        <div className="flex flew-row justify-around items-center w-full h-15 mt-2">
          <button className="button p-3 w-1/2 h-15">
            Buy 50 Spins <br />
            for 25 Diam.
          </button>
          <BuySpinModal />
        </div>
      )}

      {reward && (
        <Reward
          rewardType={reward.rewardType}
          onClose={() => setReward(null)}
        />
      )}
    </div>
  );
}
