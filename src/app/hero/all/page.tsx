'use client';

import { useState } from 'react';
import TitleHeader from '@/components/TitleHeader.tsx';
import FooterNav from '@/components/FooterNav.tsx';
import HeroLink from '@/app/hero/_components/HeroLink.tsx';
import { CONTAINER_CLASS } from '@/constants/layout';
import DiamondsModal from '@/components/DiamondsModal';

interface HeroSlot {
  id: string;
  rating?: number;
  level?: number;
  heroImage?: string;
  isEmpty?: boolean;
  slotNumber?: number;
}

const mockHeroes: HeroSlot[] = [
  { id: '1', rating: 5, level: 25, heroImage: '/assets/heroes/dog.svg' },
  { id: '2', rating: 4, level: 20, heroImage: '/assets/heroes/cat.svg' },
  { id: '3', rating: 3, level: 15, heroImage: '/assets/heroes/duck.svg' },
];

const TOTAL_SLOTS = 9;

const allSlots: HeroSlot[] = [...mockHeroes];
for (let i = mockHeroes.length + 1; i <= TOTAL_SLOTS; i++) {
  allSlots.push({
    id: String(i),
    isEmpty: true,
    slotNumber: i,
  });
}

export default function Page() {
  const [isDiamondsModalOpen, setIsDiamondsModalOpen] = useState(true);
  const [modalType, setModalType] = useState<'insufficient' | 'confirm'>('insufficient');

  const handleContinue = () => {
    setIsDiamondsModalOpen(false);
    console.log('Действие подтверждено');
  };

  return (
    <div className='w-full h-screen overflow-hidden' style={{
          backgroundImage: 'url("/assets/heroes/parchment-bg.svg")',
          backgroundSize: "160%",
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
      <div className={`w-full ${CONTAINER_CLASS} aspect-[450/770] mt-[40px]`} style={{
          backgroundImage: 'url("/assets/heroes/bg.svg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>

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
