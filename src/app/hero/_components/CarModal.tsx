'use client'

import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function CarModal({id}: {id: number})
{
    let [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(true)} className="button w-1/4 h-20 flex items-center justify-around">
                Car {id}
            </button>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">

                <div className="fixed inset-0 flex w-screen items-center justify-center p-2">

                    <DialogPanel className="w-full flex flex-col items-center  space-y-4 border bg-black p-5 relative pb-10">

                        <button onClick={() => setIsOpen(false)} className="absolute right-5 cursor-pointer">
                            <XMarkIcon className="size-7" />
                        </button>

                        <DialogTitle className="text-[20px]">Car #{id}</DialogTitle>

                        <div className="w-full flex flex-row items-center justify-between">

                            <button className="button w-1/2 h-55 ml-[0!important]">Car<br/>Icon</button>

                            <div className="w-1/2 items-center justify-between ">
                                <button className="button w-full h-10 mx-[0!important]">Health Points</button>
                                <button className="button w-full h-10 mx-[0!important]">Basic Damage</button>
                                <button className="button w-full h-10 mx-[0!important]">Defense</button>
                                <button className="button w-full h-10 mx-[0!important]">Dodging</button>
                            </div>

                        </div>

                        <br/>

                        <div className="w-3/4 h-35 items-center text-center border-1 p-5">
                            <div className="border-1 w-full mb-5 p-2 flex flex-row items-center justify-around">
                                <span>99K Gear</span> <span>99K Gold</span>
                            </div>
                            <button className="button w-full h-10 m-[0!important]">Level Upgrade</button>
                        </div>

                        <button className="button w-1/2 h-10">Get Car</button>

                    </DialogPanel>

                </div>
            </Dialog>
        </>
    )
}