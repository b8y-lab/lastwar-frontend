'use client';

import { ReactNode } from 'react';
import { MODAL_CLASS } from '@/constants/layout';

interface QuestModalProps {
  children: ReactNode;
  onClose?: () => void;
}

export const QuestModal = ({ children, onClose }: QuestModalProps) => {
  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      window.location.href = '/slot-machine';
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999] px-4"
      onClick={handleClose}
    >
      <div
        className={`relative ${MODAL_CLASS} max-w-full h-[840px] overflow-auto`}
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
