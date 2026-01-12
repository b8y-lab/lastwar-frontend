'use client';

import { useRouter } from 'next/navigation';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';

interface IBackButton {
    back?: string;
}

export default function BackButton({ back }: IBackButton) 
{
    const router = useRouter();

    const handleClick = () => 
    {
        if (back) router.push(back);
        else router.back();
    };

    return (
        <ArrowUturnLeftIcon className="size-5 cursor-pointer" onClick={ handleClick } />
    );
}