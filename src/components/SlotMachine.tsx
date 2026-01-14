'use client';

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getGameArray, getReelsRandomArray, getRouteByResults } from "@/utils/slot/symbols.ts";
import BuySpinModal from "@/app/shop/_components/BuySpinModal.tsx";
import { BoltIcon } from "@heroicons/react/24/outline";

const SlotReel = dynamic(() => import('@/components/SlotReel'), { ssr: false });

export default function SlotMachine()
{
    const router = useRouter();
    const [spins, setSpins] = useState(1);
    const [reels, setReels] = useState(['🪙', '🎁', '⚔️']);
    const [rolling, setRolling] = useState(false);
    
    useEffect(() => {
        getSpins();
    }, []);

    const getSpins = async () =>
    {
        const response = await fetch('/api/spin');
        const data = await response.json();

        if (response.ok)
            setSpins(data.spins);
    }

    const updateSpins = async () =>
    {
        const response = await fetch('/api/spin', {
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({spins: spins - 1}),
            method: 'POST',
        });
        const data = await response.json();

        if (response.ok)
            setSpins(data.spins);
    }
    
    const handleFlop = (results: string[]) => 
    {
        updateSpins();

        // NOTE: Timeout for a delay before reward window (to see the combination)
        setTimeout(() => {
            setRolling(false);
            router.push(getRouteByResults(results));
        }, 1000);
    }
    
    
    const spin = () => 
    {
        if (rolling) return;
        setRolling(true);

        const weightedArray = getGameArray();
        
        // NOTE: Reels animation and its interval
        const spinInterval = setInterval(() => {
            setReels(getReelsRandomArray());
        }, 100);

        // NOTE: Timeout for a delay before redirect (to see the result combination)
        setTimeout(() => 
        {
            clearInterval(spinInterval);
            setReels(weightedArray);
            handleFlop(weightedArray);

        }, 1000);
    };

    return (

        <div className="flex flex-col items-center justify-center gap-[50px]">
            <div className="flex flex-col justify-start items-center w-[530px] h-[630px]" style={{
            backgroundImage: 'url("/assets/slot/slot-house.png")',
            backgroundSize: 'cover',     
            backgroundPosition: 'center',
        }}>

            <div className="w-1/2 h-15 relative flex flex-wrap items-center justify-center border py-2 pl-5 mb-2">
                <BoltIcon className="size-5 absolute left-1/7"/> 
                { spins } / 50
            </div>
            
            <div className="flex m-[260px] gap-[10px]">
                <SlotReel symbol={reels[0]} spinning={rolling} />
                <SlotReel symbol={reels[1]} spinning={rolling} />
                <SlotReel symbol={reels[2]} spinning={rolling} />
            </div>

        </div>

        { spins > 0 ? (
                <button onClick={spin} disabled={rolling} className="button w-[260px] h-[160px]" style={{
                    backgroundImage: 'url("/assets/slot/spinButton.png")',
                    backgroundSize: 'cover',     
                    backgroundPosition: 'center',
                }}>
                </button>
            ) : (
                <div className="flex flew-row justify-around items-center w-full h-15 mt-2">
                    <button className="button p-3 w-1/2 h-15">
                        Buy 50 Spins <br/>for 25 Diam.
                    </button>
                    <BuySpinModal />
                </div>
            ) }
        </div>
    );
};