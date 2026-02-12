'use client';

import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { MODAL_CLASS } from '@/constants/layout';
import { ROUTES } from '@/constants/routes';
import { createBackgroundStyle, BG_IMAGES } from '@/utils/styles';

interface QuestModalProps {
  children: ReactNode;
  onClose?: () => void;
}

export const QuestModal = ({ children, onClose }: QuestModalProps) => {
  const router = useRouter();

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      router.push(ROUTES.SLOT_MACHINE);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999] px-4"
      onClick={handleClose}
    >
      <div
        className={`relative ${MODAL_CLASS} max-h-[90dvh] overflow-auto`}
        onClick={(e) => e.stopPropagation()}
        style={createBackgroundStyle(BG_IMAGES.QUEST_WINDOW)}
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
