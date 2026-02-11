'use client';

import { useState } from 'react';
import TitleHeader from '@/components/TitleHeader.tsx';
import FooterNav from '@/components/FooterNav.tsx';
import HeroLink from '@/app/hero/_components/HeroLink.tsx';
import { CONTAINER_CLASS } from '@/constants/layout';
import DiamondsModal from '@/components/DiamondsModal';
import { HEROES_DATA } from '@/data/heroes';
import { createBackgroundStyle, BG_IMAGES } from '@/utils/styles';

interface HeroSlot {
  id: string;
  rating?: number;
  level?: number;
  heroImage?: string;
  isEmpty?: boolean;
  slotNumber?: number;
}

const TOTAL_SLOTS = 9;

const mockHeroes: HeroSlot[] = Object.values(HEROES_DATA).map((hero) => ({
  id: hero.id,
  rating: hero.rating,
  level: hero.level,
  heroImage: hero.heroImage,
}));

const allSlots: HeroSlot[] = [...mockHeroes];
for (let i = mockHeroes.length + 1; i <= TOTAL_SLOTS; i++) {
  allSlots.push({
    id: String(i),
    isEmpty: true,
    slotNumber: i,
  });
}

export default function Page() {
  return (
    <div
      className="w-full min-h-dvh overflow-hidden"
      style={{
        ...createBackgroundStyle(BG_IMAGES.HERO_PARCHMENT_BG),
        backgroundSize: '160%',
      }}
    >
      <div
        className={`${CONTAINER_CLASS} aspect-[450/770] mt-[40px]`}
        style={createBackgroundStyle(BG_IMAGES.HERO_BG)}
      >
        <TitleHeader title="Герои" />

        <div className="flex gap-[5px] items-center justify-center flex-wrap p-[10px] pt-[50px] pb-[50px]">
          {allSlots.map((slot) => (
            <HeroLink
              key={slot.id}
              id={slot.id}
              url="/hero"
              rating={slot.rating}
              level={slot.level}
              heroImage={slot.heroImage}
              isEmpty={slot.isEmpty}
              slotNumber={slot.slotNumber}
            />
          ))}
        </div>

        {/* <FooterNav /> */}
      </div>
    </div>
  );
}
