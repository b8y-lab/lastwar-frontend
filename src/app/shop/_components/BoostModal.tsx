'use client';

import { useState } from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function BoostModal() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="cursor-pointer">
        AD
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-5">
          <DialogPanel className="w-full flex flex-col items-center space-y-4 border bg-black p-5 relative pb-10">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-5 cursor-pointer"
            >
              <XMarkIcon className="size-7" />
            </button>

            <DialogTitle className="text-[24px] w-full flex justify-around items-center">
              Economic Boost
            </DialogTitle>

            <div className="text-[16px] w-full flex justify-around items-center text-center">
              Accelerate all supply mining <br />
              up to +20%!
            </div>

            <div className="flex flex-row justify-around items-center w-full h-80 border px-[2vw]">
              <button className="button w-1/4 h-20">5%</button>
              <button className="button w-1/4 h-30">10%</button>
              <button className="button w-1/4 h-40">15%</button>
              <button className="button w-1/4 h-50">20%</button>
            </div>

            <button className="button w-1/2 h-20">Activate Boost!</button>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
