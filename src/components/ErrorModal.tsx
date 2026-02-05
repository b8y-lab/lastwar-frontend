'use client';

import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import Image from 'next/image';

interface ErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
  errorMessage: string;
}

export default function ErrorModal({ isOpen, onClose, errorMessage }: ErrorModalProps) {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex items-center justify-center">
        <DialogPanel
          className="w-[310px] h-[310px] relative p-3.5 flex-col items-center justify-center"
          style={{
            backgroundImage: 'url("/assets/errors/error-bg.svg")',
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
          
          <DialogTitle className="text-[20px] text-center">Настройки</DialogTitle>
          
          <div className="text-center px-6 mt-25">
            {errorMessage}
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
