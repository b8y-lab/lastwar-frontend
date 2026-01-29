'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  getGameArray,
  getReelsRandomArray,
  getResultBySymbols,
  RewardResult,
} from '@/utils/slot/symbols.ts';
import { Reward } from '@/app/slot-machine/_components/Reward.tsx';
import { Bushes } from '@/app/slot-machine/_components/Bushes.tsx';
import { SlotReels } from '@/app/slot-machine/_components/SlotReels.tsx';
import { SmokeAnimation } from '@/app/slot-machine/_components/SmokeAnimation.tsx';
import { GeneratorVideo } from '@/app/slot-machine/_components/GeneratorVideo.tsx';
import { FortuneWheel } from '@/app/slot-machine/_components/FortuneWheel.tsx';
import { SpinButton } from '@/app/slot-machine/_components/SpinButton.tsx';

export default function SlotMachinePage() {
  const router = useRouter();
  const [spins, setSpins] = useState(1);
  const [reels, setReels] = useState(['🪙', '🎁', '⚔️', '💎', "⚡️"]);
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
    <div className="relative flex flex-col items-center justify-center z-2 w-full">
      <div
        className="flex flex-col justify-start items-center w-full max-w-[410px] h-[470px]"
        style={{
          backgroundImage: 'url("/assets/slot-machine/slotmachine.svg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='absolute top-16 left-0 right-0 h-[84px] mx-auto max-w-[320px]' style={{
          backgroundImage: 'url("/assets/slot-machine/snowonroof.svg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>
        <SmokeAnimation />
        <SlotReels reels={reels} rolling={rolling} />
      </div>

      <Bushes />
      <GeneratorVideo />
      <FortuneWheel />

      <SpinButton spins={spins} rolling={rolling} onSpin={spin} />

      {reward && (
        <Reward
          rewardType={reward.rewardType}
          onClose={() => setReward(null)}
        />
      )}

      
    </div>
  );
}
