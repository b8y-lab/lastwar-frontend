'use client';

import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle} from '@headlessui/react'
import { XMarkIcon, BeakerIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';

export default function HeistRewardModal()
{
    let [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(true)} className="cursor-pointer button w-1/3 h-10">
                <span>Grab</span>
            </button>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">

                <div className="fixed inset-0 flex w-screen items-center justify-center p-5">

                    <DialogPanel className="w-full flex flex-col items-center space-y-4 border bg-black p-5 relative pb-10">

                        <button onClick={() => setIsOpen(false)} className="absolute right-5 cursor-pointer">
                            <XMarkIcon className="size-7" />
                        </button>

                        <DialogTitle className="text-[20px] w-full flex justify-around items-center text-center">
                            Nice Heist!
                        </DialogTitle>

                        <div className="flex flex-wrap justify-around items-center w-full h-40 border px-[3vw]">

                            <div className="w-1/3 h-20 flex flex-col justify-around items-center">
                                <BeakerIcon className="size-10" /><br/>
                                <span>50</span>
                            </div>
                            <div className="w-1/3 h-20 flex flex-col justify-around items-center">
                                <WrenchScrewdriverIcon className="size-10" /><br/>
                                <span>100</span>
                            </div>

                        </div>

                        <Link href="/" className="button w-1/2 h-15 flex justify-around items-center">Get Reward</Link>

                    </DialogPanel>

                </div>
            </Dialog>
        </>
    )
}