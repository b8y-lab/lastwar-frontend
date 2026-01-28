'use client';

import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

interface QuestModalProps {
  children: ReactNode;
}

export const QuestModal = ({ children }: QuestModalProps) => {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999]"
      onClick={handleClose}
    >
      <div
        className="relative w-[380px] h-[800px] overflow-auto"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundImage: 'url("/assets/quests/window.svg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center cursor-pointer"
        >
          <img src="/assets/quests/backbtn.svg" alt="" />
        </button>
        {children}
      </div>
    </div>
  );
};
