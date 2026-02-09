'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { createBackgroundStyle, BG_IMAGES } from '@/utils/styles';

export default function QuestHeader() {
  const pathname = usePathname();
  const cssName = 'button w-full h-[84px] flex items-center justify-around';
  const cssActive = ' text-[#ffac00!important] border-[#ffac00!important]';

  const getClassName = (path: string): string => {
    return cssName + (path === pathname ? cssActive : '');
  };

  const getBackgroundStyle = (path: string) => {
    const image =
      path === pathname
        ? BG_IMAGES.QUEST_NAV_BTN_ACTIVE
        : BG_IMAGES.QUEST_NAV_BTN;
    return createBackgroundStyle(image);
  };

  return (
    <div className="w-full flex flex-row items-center justify-between relative my-5 gap-[5px]">
      <Link
        href="/quest/day"
        className={getClassName('/quest/day')}
        style={getBackgroundStyle('/quest/day')}
      >
        Daily
      </Link>

      <Link
        href="/quest/week"
        className={getClassName('/quest/week')}
        style={getBackgroundStyle('/quest/week')}
      >
        Weekly
      </Link>

      <Link
        href="/quest/season"
        className={getClassName('/quest/season')}
        style={getBackgroundStyle('/quest/season')}
      >
        Seasonal
      </Link>

      <Link
        href="/quest/rewards"
        className={getClassName('/quest/rewards')}
        style={getBackgroundStyle('/quest/rewards')}
      >
        Rewards
      </Link>
    </div>
  );
}
