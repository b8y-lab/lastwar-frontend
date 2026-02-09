'use client';

import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import Image from 'next/image';
import { createBackgroundStyle, BG_IMAGES } from '@/utils/styles';
import { CloseButton } from './ui/CloseButton';

interface InsufficientDiamondsModalProps {
  isOpen: boolean;
  onClose: () => void;
  missingAmount: number;
  onContinue: () => void;
}

export default function InsufficientDiamondsModal({
  isOpen,
  onClose,
  missingAmount,
  onContinue,
}: InsufficientDiamondsModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 flex items-center justify-center">
        <DialogPanel
          className="w-[310px] h-[410px] relative p-3.5 flex flex-col items-center justify-center"
          style={createBackgroundStyle(BG_IMAGES.DIAMONDS_INSUFF_BG)}
        >
          <CloseButton onClick={onClose} />

          <DialogTitle className="text-[20px] text-center font-bold">
            Недостаточно Алмазов
          </DialogTitle>

          <div className="flex flex-col items-center gap-3">
            <div className="text-center">
              Вам не хватает {missingAmount} алмазов
            </div>

            <div className="text-center">Хотите зайти в магазин?</div>

            <div className="my-4">
              <Image
                width={130}
                height={130}
                src="/assets/diamonds/gold-frame.svg"
                alt="Алмаз"
              />
            </div>

            <button
              onClick={onContinue}
              className="cursor-pointer"
              style={{
                ...createBackgroundStyle(BG_IMAGES.DIAMONDS_NEXT_BTN),
                width: 155,
                height: 60,
              }}
            >
              Продолжить
            </button>

            <div className="flex items-center gap-4 cursor-pointer">
              <Image
                width={30}
                height={30}
                src="/assets/diamonds/dont-ask-btn-active.svg"
                alt=""
              />
              <p>Больше не спрашивать</p>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
