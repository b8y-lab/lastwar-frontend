'use client';

import { useState } from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function ParamsModal() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="button w-full h-15 flex items-center justify-around"
      >
        Params
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-2">
          <DialogPanel className="w-full h-3/5 overflow-scroll flex flex-col items-center space-y-4 border bg-black p-5 relative pb-10">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-5 cursor-pointer"
            >
              <XMarkIcon className="size-7" />
            </button>

            <DialogTitle className="text-[20px]">Parameters</DialogTitle>

            <div className="w-full flex flex-col items-center justify-between">
              <button className="button w-full h-10">Param1</button>
              <button className="button w-full h-10">Param2</button>
              <button className="button w-full h-10">Param3</button>
              <button className="button w-full h-10">Param4</button>
              <button className="button w-full h-10">Param5</button>
              <button className="button w-full h-10">Param6</button>
              <button className="button w-full h-10">Param7</button>
              <button className="button w-full h-10">Param8</button>
              <button className="button w-full h-10">Param9</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
