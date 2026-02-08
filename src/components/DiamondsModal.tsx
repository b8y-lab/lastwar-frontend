'use client';

import { useState } from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import Image from 'next/image';

interface DiamondsModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'insufficient' | 'confirm';
  missingAmount?: number;
  diamondsToUse?: number;
  onContinue: () => void;
}

export default function DiamondsModal({
  isOpen,
  onClose,
  type,
  missingAmount,
  diamondsToUse,
  onContinue
}: DiamondsModalProps) {
  const [dontAskAgain, setDontAskAgain] = useState(false);

  const handleContinue = () => {
    onContinue();
    if (type === 'confirm' && dontAskAgain) {
      // Здесь можно сохранить настройку "Больше не спрашивать"
      console.log('Сохранено: Больше не спрашивать');
    }
  };

  const isInsufficient = type === 'insufficient';
  const backgroundImage = isInsufficient
    ? '/assets/diamonds/insuff-diamonds-bg.svg'
    : '/assets/diamonds/use-diamonds-bg.svg';

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex items-center justify-center">
        <DialogPanel
          className="w-[310px] h-[410px] relative p-3.5 flex flex-col"
          style={{
            backgroundImage: `url("${backgroundImage}")`,
            backgroundSize: "cover",
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <button
            onClick={onClose}
            className="absolute right-2 top-3 cursor-pointer"
          >
            <Image width={40} height={40} src="/assets/settings/close-btn.svg" alt='' />
          </button>

          <DialogTitle className="text-[20px] text-center font-bold">
            {isInsufficient ? 'Недостаточно Алмазов' : 'Подтверждение'}
          </DialogTitle>

          <div className="flex flex-col items-center gap-3 mt-6">
            {isInsufficient ? (
              <>
                <div className="text-center">
                  Вам не хватает {missingAmount} алмазов
                </div>

                <div className="text-center">
                  Хотите зайти в магазин?
                </div>
              </>
            ) : (
              <div className="text-center">
                Использовать {diamondsToUse} алмазов?
              </div>
            )}

            <div className="my-4">
              <div className='flex items-center justify-center' style={{
                width: 130,
                height: 130,
                backgroundImage: `url("/assets/diamonds/gold-frame.svg")`,
                backgroundSize: "cover",
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}>
                <div style={{
                width: 85,
                height: 80,
                backgroundImage: `url("/assets/diamonds/diamond.svg")`,
                backgroundSize: "cover",
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}>

              </div>
              </div>
            </div>

            <button
              onClick={onContinue}
              className="cursor-pointer"
              style={{
                width: 155,
                height: 60,
                backgroundImage: 'url("/assets/diamonds/next-btn.svg")',
                backgroundSize: "cover",
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              Продолжить
            </button>

            {!isInsufficient && (
              <div
                className='flex items-center gap-4 cursor-pointer'
                onClick={() => setDontAskAgain(!dontAskAgain)}
              >
                <Image
                  width={30}
                  height={30}
                  src={`/assets/diamonds/dont-ask-btn-${dontAskAgain ? 'active' : 'inactive'}.svg`}
                  alt=''
                />
                <p>Больше не спрашивать</p>
              </div>
            )}
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}