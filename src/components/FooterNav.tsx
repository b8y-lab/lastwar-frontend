'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function FooterNav() {
  const cssName = 'button w-1/5 h-15 flex items-center justify-around';
  const cssActive = ' text-[#ffac00!important] border-[#ffac00!important]';

  const getClassName = (path: string): string => {
    const classActive = cssName + cssActive;

    if (path == '/') {
      if (usePathname() == '/') return classActive;
    } else if (usePathname().includes(path)) return classActive;

    return cssName;
  };

  return (
    <div className="w-full bottom-0">
      <div className="w-full bottom-0 h-20"></div>

      <div className="fixed w-full flex flex-row items-center justify-around h-20 bottom-0 border-t-1 mt-10 bg-black">
        <Link href="/base" className={getClassName('/base')}>
          Base
        </Link>

        <Link href="/hero/all" className={getClassName('/hero')}>
          Hero
        </Link>

        <Link href="/" className={getClassName('/')}>
          Spin
        </Link>

        <Link href="/combat/chapter" className={getClassName('/combat')}>
          Combat
        </Link>

        <Link href="/shop/promo" className={getClassName('/shop')}>
          Shop
        </Link>
      </div>
    </div>
  );
}
