import React from 'react';

export default function SlotReel({symbol}: {symbol: string}) 
{
    return (
        <div className="flex justify-around items-center border w-1/3 h-40 text-6xl">
            { symbol }
        </div>
    );
};