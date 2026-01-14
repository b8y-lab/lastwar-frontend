import React from 'react';

export default function SlotReel({symbol}: {symbol: string}) 
{
    return (
        <div className="flex justify-around items-center h-[200px] w-[90px] text-6xl">
            { symbol }
        </div>
    );
};