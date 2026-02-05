'use client';

import { useState } from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function CarParamModal({ id }: { id: number }) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="button w-[80px] h-[80px] flex items-center justify-around"
        disabled
        style={{
          backgroundImage: 'url("/assets/heroes/hero/equip-item-bg.svg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        CarParam
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-2">
          <DialogPanel className="w-full flex flex-col items-center  space-y-4 border bg-black p-5 relative pb-10">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-5 cursor-pointer"
            >
              <XMarkIcon className="size-7" />
            </button>

            <DialogTitle className="text-[20px]">Param #{id}</DialogTitle>

            <div className="w-full flex flex-row items-center justify-between">
              <button className="button w-1/2 h-55 ml-[0!important]">
                Param
                <br />
                Icon
              </button>

              <div className="w-1/2 items-center justify-between ">
                <button className="button w-full h-10 mx-[0!important]">
                  Health
                </button>
                <button className="button w-full h-10 mx-[0!important]">
                  Damage
                </button>
                <button className="button w-full h-10 mx-[0!important]">
                  Defense
                </button>
                <button className="button w-full h-10 mx-[0!important]">
                  Dodging
                </button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
