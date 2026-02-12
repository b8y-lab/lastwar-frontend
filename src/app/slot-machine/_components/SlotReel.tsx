'use client';

import { animate } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import {
  REEL_SYMBOLS,
  SYMBOL_IMAGE_MAP,
  type ReelSymbol,
} from '@/utils/slot/symbols';

const REEL_REPEAT_COUNT = 9;
const REEL_STRIP: ReelSymbol[] = Array.from(
  { length: REEL_REPEAT_COUNT },
  () => [...REEL_SYMBOLS]
).flat();

const SYMBOL_HEIGHT = 170;
const STRIP_HEIGHT = REEL_STRIP.length * SYMBOL_HEIGHT;

export default function SlotReel({
  symbol,
  spinning,
}: {
  symbol: ReelSymbol;
  spinning: boolean;
}) {
  const reelRef = useRef<HTMLDivElement>(null);
  const position = useRef(0);
  const spinAnim = useRef<ReturnType<typeof animate> | null>(null);
  const lastSymbol = useRef(symbol);

  useEffect(() => {
    if (!spinning) return;

    spinAnim.current?.stop();

    spinAnim.current = animate(
      position.current,
      position.current - STRIP_HEIGHT,
      {
        duration: 0.5,
        ease: 'linear',
        repeat: Infinity,
        onUpdate: (v) => {
          position.current = v % STRIP_HEIGHT;
          if (reelRef.current) {
            reelRef.current.style.transform = `translateY(${position.current}px)`;
            reelRef.current.style.filter = 'blur(2px)';
          }
        },
      }
    );
  }, [spinning]);

  useEffect(() => {
    if (symbol === lastSymbol.current) return;
    lastSymbol.current = symbol;

    if (!spinAnim.current) return;

    spinAnim.current.stop();

    const index = REEL_STRIP.lastIndexOf(symbol);
    const target = -(index * SYMBOL_HEIGHT);

    animate(position.current, target - 40, {
      duration: 0.6,
      ease: 'easeOut',
      onUpdate: (v) => {
        if (reelRef.current) {
          reelRef.current.style.transform = `translateY(${v}px)`;
        }
      },
      onComplete: () => {
        animate(target - 40, target, {
          duration: 0.25,
          ease: [0.22, 1.2, 0.36, 1],
          onUpdate: (v) => {
            if (reelRef.current) {
              reelRef.current.style.transform = `translateY(${v}px)`;
              reelRef.current.style.filter = 'blur(0px)';
            }
          },
          onComplete: () => {
            position.current = target;
          },
        });
      },
    });
  }, [symbol]);

  // TODO: fix slot reels height
  return (
    <div className="relative overflow-hidden w-[80px] h-[190px]">
      <div ref={reelRef}>
        {REEL_STRIP.map((sym, i) => (
          <div
            key={i}
            className="flex items-center justify-center"
            style={{ height: SYMBOL_HEIGHT }}
          >
            <Image src={SYMBOL_IMAGE_MAP[sym]} alt={sym} width={48} height={48} />
          </div>
        ))}
      </div>
    </div>
  );
}
