'use client';

import { useState } from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function HeroModal() {
  let [isOpen, setIsOpen] = useState(false);
  let [hid, setHid] = useState(1);

  const heroes = [...Array(9)].map((_, i) => (
    <button
      key={i}
      onClick={() => handleClick(i)}
      className="button w-1/4 h-30 flex items-center justify-around"
    >
      Hero {i}
    </button>
  ));

  function handleClick(id: number) {
    setIsOpen(false);
    setHid(id);
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="button w-1/3 h-50 flex items-center justify-around"
      >
        Your Hero <br />
        (Hero #{hid})
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-2">
          <DialogPanel className="w-full space-y-4 border bg-black p-5 relative pb-10">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-5 cursor-pointer"
            >
              <XMarkIcon className="size-7" />
            </button>

            <DialogTitle className="text-[20px]">Choose Hero</DialogTitle>

            <div className="w-full flex flex-wrap items-center justify-between">
              {heroes}
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
