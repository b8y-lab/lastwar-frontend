'use client';

import { useState } from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function FactoryModal() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="button w-1/3 h-40 flex justify-around items-center"
      >
        Gear Factory
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
              Gear Factory
              <br />
              Level 1
            </DialogTitle>

            <div className="flex flex-row justify-between items-center w-full h-30 my-5">
              <button className="flex flex-col justify-between items-center w-1/2 h-30 border-1 p-2 m-2">
                <div className="w-full text-left">1h production:</div>
                <div className="flex flex-row justify-between items-center w-full h-20">
                  <div className="border-1 rounded-full w-20 h-20 flex flex-row justify-around items-center">
                    Gear
                    <br />
                    Icon
                  </div>
                  <div>
                    999K
                    <br />
                    (+2K)
                  </div>
                </div>
              </button>

              <button className="flex flex-col justify-between items-center w-1/2 h-30 border-1 p-2 m-2">
                <div className="w-full text-left">Stacking Time:</div>
                <div className="flex flex-row justify-between items-center w-full h-20">
                  <div className="border-1 rounded-full w-20 h-20 flex flex-row justify-around items-center">
                    Clock
                    <br />
                    Icon
                  </div>
                  <div>
                    2hours
                    <br />
                    (+30m)
                  </div>
                </div>
              </button>
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
