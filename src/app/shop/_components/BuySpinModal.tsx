import { useState } from 'react';
import { Dialog, DialogPanel, DialogTitle} from '@headlessui/react'
import { XMarkIcon, BoltIcon } from '@heroicons/react/24/outline'

export default function BuySpinModal()
{
    let [isOpen, setIsOpen] = useState(false);
    
    const addSpins = async () =>
    {
        try {
            await fetch('/api/spin', {
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({spins: 15}),
                method: 'POST'
            });
            window.location.reload();
        }
        catch(e) {
            console.error("addSpins:error", JSON.stringify(e));
        }
    }

    return (
        <>
            <button onClick={() => setIsOpen(true)} className="button p-3 w-1/2 h-15">
                Get 15 Spins <br/>AD
            </button>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">

                <div className="fixed inset-0 flex w-screen items-center justify-center p-5">

                    <DialogPanel className="w-full flex flex-col items-center space-y-4 border bg-black p-5 relative pb-10">

                        <button onClick={() => setIsOpen(false)} className="absolute right-5 cursor-pointer">
                            <XMarkIcon className="size-7" />
                        </button>

                        <DialogTitle className="text-[24px] w-full flex justify-around items-center text-center">
                            Get Free Spins
                        </DialogTitle>

                        <div className="flex flex-wrap justify-around items-center w-full h-40 border px-[3vw]">

                            <div className="w-1/3 h-20 flex flex-col justify-around items-center">
                                <BoltIcon className="size-10" /><br/>
                                <span className="text-2xl">15</span>
                            </div>

                        </div>

                        <button onClick={addSpins} className="button w-1/2 h-15">Add Spins</button>

                    </DialogPanel>

                </div>
            </Dialog>
        </>
    )
}