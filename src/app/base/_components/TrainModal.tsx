'use client';

import { useState } from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function TrainModal()
{
    let [isOpen, setIsOpen] = useState(false);
    let [hid, setHid] = useState(0);

    const heroes = [...Array(9)].map((_, i) => (
        <button key={i} onClick={() => handleClick(i)} className="button w-1/4 h-30 flex items-center justify-around">
            Hero {i}
        </button>
    ));

    function handleClick(id: number) {
        setIsOpen(false);
        setHid(id);
    }

    return (
        <>
            <button onClick={() => setIsOpen(true)} 
                    className="flex flex-col justify-between items-center w-1/2 h-35 border-1 p-2 m-2">
                
                <div className="w-full text-left">
                    { hid > 0 ? "Training:" : "Training (none):" }
                </div>
                
                <div className="flex flex-row justify-between items-center w-full h-20">
                    <div className="border-1 rounded-full w-20 h-20 flex flex-row justify-around items-center">
                        { hid > 0 ? "Icon" : "" }
                    </div>
                    <div>{ hid > 0 ? `Hero #${hid}` : "Train Hero" }</div>
                </div>
                <div className="w-full h-10 flex flex-row justify-start items-center mt-2">
                    { hid > 0 ? "Stop Training" : "" }
                </div>
                
            </button>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">

                <div className="fixed inset-0 flex w-screen items-center justify-center p-2">

                    <DialogPanel className="w-full space-y-4 border bg-black p-5 relative pb-10">

                        <button onClick={() => setIsOpen(false)} className="absolute right-5 cursor-pointer">
                            <XMarkIcon className="size-7" />
                        </button>

                        <DialogTitle className="text-[20px]">Choose Hero</DialogTitle>

                        <div className="w-full flex flex-wrap items-center justify-between">
                            { heroes }
                        </div>

                    </DialogPanel>

                </div>
            </Dialog>
        </>
    )
}