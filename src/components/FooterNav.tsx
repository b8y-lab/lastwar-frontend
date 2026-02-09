'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ROUTES } from '@/constants/routes';

export default function FooterNav() {
  const pathname = usePathname();
  const cssName = 'button w-1/5 h-15 flex items-center justify-around';
  const cssActive = ' text-[#ffac00!important] border-[#ffac00!important]';

  const getClassName = (path: string): string => {
    const classActive = cssName + cssActive;

    if (path === '/' && pathname === '/') return classActive;
    if (path !== '/' && pathname.includes(path)) return classActive;

    return cssName;
  };

  return (
    <div className="w-full bottom-0">
      <div className="w-full bottom-0 h-20"></div>

      <div className="fixed w-full flex flex-row items-center justify-around h-20 bottom-0 border-t-1 mt-10 bg-black">
        <Link href={ROUTES.BASE} className={getClassName('/base')}>
          Base
        </Link>

        <Link href={ROUTES.HERO} className={getClassName('/hero')}>
          Hero
        </Link>

        <Link href={ROUTES.HOME} className={getClassName('/')}>
          Spin
        </Link>

        <Link href={ROUTES.COMBAT_CHAPTER} className={getClassName('/combat')}>
          Combat
        </Link>

        <Link href={ROUTES.SHOP_PROMO} className={getClassName('/shop')}>
          Shop
        </Link>
      </div>
    </div>
  );
}
