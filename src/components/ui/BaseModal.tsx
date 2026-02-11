'use client';

import { ReactNode } from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: ReactNode;
  children: ReactNode;
  className?: string;
  showCloseButton?: boolean;
}

export default function BaseModal({
  isOpen,
  onClose,
  title,
  children,
  className = '',
  showCloseButton = true,
}: BaseModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 flex w-full items-center justify-center px-4">
        <DialogPanel
          className={`w-full flex flex-col items-center space-y-4 border bg-black p-5 relative pb-10 ${className}`}
        >
          {showCloseButton && (
            <button
              onClick={onClose}
              className="absolute right-5 cursor-pointer"
            >
              <XMarkIcon className="size-7" />
            </button>
          )}

          <DialogTitle className="text-[24px] w-full flex justify-around items-center text-center">
            {title}
          </DialogTitle>

          {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
}
