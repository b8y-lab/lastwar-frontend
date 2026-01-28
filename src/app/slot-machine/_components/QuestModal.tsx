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
        className="relative max-w-[550px] w-full h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundImage: 'url("/assets/quests/quest-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white text-2xl font-bold z-10 bg-black/50 rounded-full hover:bg-black/70"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};
