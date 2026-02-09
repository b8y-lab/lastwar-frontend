'use client';

import { useState } from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { ComponentType } from 'react';
import { ROUTES } from '@/constants/routes';

interface Reward {
  icon: ComponentType<{ className?: string }>;
  amount: number;
}

interface RewardModalProps {
  buttonText: string;
  title: string;
  rewards: Reward[];
  redirectUrl?: string;
}

export default function RewardModal({
  buttonText,
  title,
  rewards,
  redirectUrl = ROUTES.HOME,
}: RewardModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="cursor-pointer button w-1/3 h-10"
      >
        <span>{buttonText}</span>
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

            <DialogTitle className="text-[20px] w-full flex justify-around items-center text-center">
              {title}
            </DialogTitle>

            <div className="flex flex-wrap justify-around items-center w-full h-40 border px-[3vw]">
              {rewards.map((reward, index) => (
                <div
                  key={index}
                  className="w-1/3 h-20 flex flex-col justify-around items-center"
                >
                  <reward.icon className="size-10" />
                  <br />
                  <span>{reward.amount}</span>
                </div>
              ))}
            </div>

            <Link
              href={redirectUrl}
              className="button w-1/2 h-15 flex justify-around items-center"
            >
              Get Reward
            </Link>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
