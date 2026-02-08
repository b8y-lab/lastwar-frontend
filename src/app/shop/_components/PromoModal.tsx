'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import {
  PercentBadgeIcon,
  XMarkIcon,
  AcademicCapIcon,
  BuildingLibraryIcon,
  BoltIcon,
  BeakerIcon,
  Cog8ToothIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

export default function PromoModal() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="cursor-pointer">
        <Image
          src="/assets/slot-machine/rewardbtn.svg"
          alt=""
          width={65}
          height={175}
        />
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

            <DialogTitle className="text-[24px] w-full flex justify-around items-center text-center">
              "Rookie Kit"
              <br />
              Don't miss it!
            </DialogTitle>

            <div className="text-[16px] w-full flex justify-around items-center">
              Remaining time:
              <br />6 hours 30 min
            </div>

            <div className="flex flex-wrap justify-around items-center w-full h-70 border px-[3vw]">
              <div className="w-1/3 h-20 flex flex-col justify-around items-center">
                <AcademicCapIcon className="size-10" />
                <br />
                <span>10</span>
              </div>
              <div className="w-1/3 h-20 flex flex-col justify-around items-center">
                <BuildingLibraryIcon className="size-10" />
                <br />
                <span>30</span>
              </div>
              <div className="w-1/3 h-20 flex flex-col justify-around items-center">
                <BoltIcon className="size-10" />
                <br />
                <span>20</span>
              </div>
              <div className="w-1/3 h-20 flex flex-col justify-around items-center">
                <BeakerIcon className="size-10" />
                <br />
                <span>50</span>
              </div>
              <div className="w-1/3 h-20 flex flex-col justify-around items-center">
                <Cog8ToothIcon className="size-10" />
                <br />
                <span>40</span>
              </div>
              <div className="w-1/3 h-20 flex flex-col justify-around items-center">
                <WrenchScrewdriverIcon className="size-10" />
                <br />
                <span>100</span>
              </div>
            </div>

            <button className="button w-1/2 h-20">10 TON (-60%)</button>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
