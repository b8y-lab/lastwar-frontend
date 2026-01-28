'use client';

import { useState } from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function SkillModal() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="button w-1/2 h-35 flex items-center justify-around"
      >
        Skill
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

            <DialogTitle className="text-[20px]">Skill Name</DialogTitle>

            <div className="w-full flex flex-row items-center justify-between">
              <button className="button w-1/2 h-55 ml-[0!important]">
                Skill
                <br />
                Icon
              </button>

              <div className="w-1/2 items-center justify-between ">
                <button className="button w-full h-10 mx-[0!important]">
                  Skill Level
                </button>
                <button className="button w-full h-10 mx-[0!important]">
                  Refresh
                </button>
                <button className="button w-full h-10 mx-[0!important]">
                  Type
                </button>
                <button className="button w-full h-10 mx-[0!important]">
                  Applied to
                </button>
              </div>
            </div>

            <div className="w-full h-20 flex flex-row items-center justify-around px-10 border-1">
              Skill Description
            </div>

            <br />

            <button className="button w-1/2 flex flex-col h-18 p-5">
              <span>Level Upgrade</span>
              <small>Academy Required</small>
            </button>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
