'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function QuestHeader() {
  const cssName = 'button w-1/4 h-10 flex items-center justify-around';
  const cssActive = ' text-[#ffac00!important] border-[#ffac00!important]';

  const getClassName = (path: string): string => {
    return cssName + (path == usePathname() ? cssActive : '');
  };

  return (
    <div className="w-full flex flex-row items-center justify-between relative border-b my-5">
      <Link href="/quest/day" className={getClassName('/quest/day')}>
        Daily
      </Link>

      <Link href="/quest/week" className={getClassName('/quest/week')}>
        Weekly
      </Link>

      <Link href="/quest/season" className={getClassName('/quest/season')}>
        Seasonal
      </Link>

      <Link href="/quest/rewards" className={getClassName('/quest/rewards')}>
        Rewards
      </Link>
    </div>
  );
}
