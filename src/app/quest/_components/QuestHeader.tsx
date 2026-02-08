'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function QuestHeader() {
  const pathname = usePathname();
  const cssName = 'button w-full h-[84px] flex items-center justify-around';
  const cssActive = ' text-[#ffac00!important] border-[#ffac00!important]';

  const getClassName = (path: string): string => {
    return cssName + (path == pathname ? cssActive : '');
  };

  const getBackgroundImage = (path: string): string => {
    return path === pathname
      ? 'url("/assets/quests/questsnavbtnactive.svg")'
      : 'url("/assets/quests/questsnavbtn.svg")';
  };

  return (
    <div className="w-full flex flex-row items-center justify-between relative my-5 gap-[5px]">
      <Link
        href="/quest/day"
        className={getClassName('/quest/day')}
        style={{
          backgroundImage: getBackgroundImage('/quest/day'),
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        Daily
      </Link>

      <Link
        href="/quest/week"
        className={getClassName('/quest/week')}
        style={{
          backgroundImage: getBackgroundImage('/quest/week'),
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        Weekly
      </Link>

      <Link
        href="/quest/season"
        className={getClassName('/quest/season')}
        style={{
          backgroundImage: getBackgroundImage('/quest/season'),
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        Seasonal
      </Link>

      <Link
        href="/quest/rewards"
        className={getClassName('/quest/rewards')}
        style={{
          backgroundImage: getBackgroundImage('/quest/rewards'),
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        Rewards
      </Link>
    </div>
  );
}
