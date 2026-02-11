import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  getGameArray,
  getReelsRandomArray,
  getResultBySymbols,
  REEL_SYMBOLS,
  type ReelSymbol,
  type RewardResult,
} from '@/utils/slot/symbols';
import { SpinResponse } from '@/types/api';
import { ROUTES } from '@/constants/routes';

const INITIAL_REELS: ReelSymbol[] = [...REEL_SYMBOLS.slice(0, 3)];
const SPIN_ANIMATION_INTERVAL_MS = 100;
const SPIN_DURATION_MS = 500;
const RESULT_DELAY_MS = 1000;

async function fetchSpins(): Promise<number | null> {
  try {
    const response = await fetch('/api/spin');
    if (!response.ok) return null;
    const data: SpinResponse = await response.json();
    return data.spins;
  } catch {
    return null;
  }
}

async function postSpinUpdate(newSpins: number): Promise<number | null> {
  try {
    const response = await fetch('/api/spin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ spins: newSpins }),
    });
    if (!response.ok) return null;
    const data: SpinResponse = await response.json();
    return data.spins;
  } catch {
    return null;
  }
}

export function useSlotMachine() {
  const router = useRouter();
  const [spins, setSpins] = useState(1);
  const [reels, setReels] = useState<ReelSymbol[]>(INITIAL_REELS);
  const [rolling, setRolling] = useState(false);
  const [reward, setReward] = useState<RewardResult | null>(null);

  const spinIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const spinTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resultTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    fetchSpins().then((count) => {
      if (count !== null) setSpins(count);
    });
  }, []);

  useEffect(() => {
    return () => {
      if (spinIntervalRef.current) clearInterval(spinIntervalRef.current);
      if (spinTimeoutRef.current) clearTimeout(spinTimeoutRef.current);
      if (resultTimeoutRef.current) clearTimeout(resultTimeoutRef.current);
    };
  }, []);

  const handleResult = useCallback(
    (results: string[]) => {
      postSpinUpdate(spins - 1).then((count) => {
        if (count !== null) setSpins(count);
      });

      resultTimeoutRef.current = setTimeout(() => {
        setRolling(false);
        const result = getResultBySymbols(results);

        if (result.type === 'reward') {
          setReward(result);
          return;
        }

        if (result.type === 'fight') {
          router.push(ROUTES.FOE_ATTACK);
          return;
        }

        if (result.type === 'heist') {
          router.push(ROUTES.FOE_HEIST);
        }
      }, RESULT_DELAY_MS);
    },
    [spins, router]
  );

  const spin = useCallback(() => {
    if (rolling) return;
    setRolling(true);

    const weightedArray = getGameArray();

    spinIntervalRef.current = setInterval(() => {
      setReels(getReelsRandomArray());
    }, SPIN_ANIMATION_INTERVAL_MS);

    spinTimeoutRef.current = setTimeout(() => {
      if (spinIntervalRef.current) clearInterval(spinIntervalRef.current);
      setReels(weightedArray);
      handleResult(weightedArray);
    }, SPIN_DURATION_MS);
  }, [rolling, handleResult]);

  const clearReward = useCallback(() => setReward(null), []);

  return { spins, reels, rolling, reward, spin, clearReward };
}
