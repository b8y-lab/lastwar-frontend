'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ShopHeader()
{
    const cssName = "button w-1/4 h-10 flex items-center justify-around";
    const cssActive = " text-[#ffac00!important] border-[#ffac00!important]";

    const getClassName = (path: string): string =>
    {
        return cssName + (path == usePathname() ? cssActive : "");
    }
    
    return (
        
        <div className="w-full flex flex-row items-center justify-between relative border-b-1 mb-5">

            <Link href="/shop/promo" className={getClassName('/shop/promo')}>
                Promo
            </Link>

            <Link href="/shop/kit" className={getClassName('/shop/kit')}>
                Kits
            </Link>

            <Link href="/shop/supply" className={getClassName('/shop/supply')}>
                Supply
            </Link>

            <Link href="/shop/nft" className={getClassName('/shop/nft')}>
                NFT
            </Link>

        </div>
    )
}