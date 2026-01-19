'use client';

import { useState } from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function ForehouseModal() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="button w-1/3 h-40 flex justify-around items-center"
      >
        Forehouse
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center">
          <DialogPanel className="w-full flex flex-col items-center space-y-4 border bg-black p-5 relative pb-10">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-5 cursor-pointer"
            >
              <XMarkIcon className="size-7" />
            </button>

            <DialogTitle className="text-[24px] w-full flex justify-around items-center text-center">
              Forehouse
              <br />
              Level 1
            </DialogTitle>

            <div className="flex flex-row justify-around items-center w-full h-30 m-5">
              Maximum number of facilities = 1 (+1)
            </div>

            <div className="flex flex-col justify-between items-center w-full h-52 p-5 mt-20">
              <div className="w-full text-left border-1 mb-2 p-2 pl-5">
                Time to upgrade: <b>8</b> hours
              </div>
              <div className="flex flex-col justify-around items-center w-full h-30 border-1">
                <div className="flex flex-row justify-around items-center w-full h-15">
                  <span className="border-1 p-2">999 Gold</span>
                  <span className="border-1 p-2">999 Wood</span>
                  <span className="border-1 p-2">999 Iron</span>
                </div>
                <button className="button flex flex-col justify-around items-center w-1/2 h-10">
                  Upgrade
                </button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
