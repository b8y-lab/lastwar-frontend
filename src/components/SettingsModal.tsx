'use client';

import { useState } from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { Cog6ToothIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function SettingsModal() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="cursor-pointer">
        <Cog6ToothIcon className="size-6 mt-1" />
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-5">
          <DialogPanel className="w-full space-y-4 border bg-black p-5 relative pb-10">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-5 cursor-pointer"
            >
              <XMarkIcon className="size-7" />
            </button>

            <DialogTitle className="text-[20px]">Settings</DialogTitle>

            <div className="w-full flex flex-row items-center justify-around">
              Sound Effects
            </div>
            <div className="w-full flex flex-row items-center justify-between">
              <button className="button w-1/3 h-30 flex items-center justify-around">
                On
              </button>
              <button className="button w-1/3 h-30 flex items-center justify-around">
                Off
              </button>
            </div>

            <div className="w-full flex flex-row items-center justify-around">
              Music
            </div>
            <div className="w-full flex flex-row items-center justify-between">
              <button className="button w-1/3 h-30 flex items-center justify-around">
                On
              </button>
              <button className="button w-1/3 h-30 flex items-center justify-around">
                Off
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
