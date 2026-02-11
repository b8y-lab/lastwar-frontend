import TitleHeader from '@/components/TitleHeader.tsx';
import FooterNav from '@/components/FooterNav.tsx';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-start min-h-dvh w-full">
      <TitleHeader title="Chapter #1" />

      <div className="w-full flex flex-row items-center justify-center py-5">
        <button className="button w-3/4 h-25 inline-block">
          Chapter Rewards
        </button>
      </div>

      <div className="justify-around w-3/4 flex flex-row items-center">
        <div className="justify-around w-1/2 flex flex-col items-center py-5">
          <Link href="/combat/mission?mid=5">
            <button className="button rounded-full w-30 h-30 py-5">5</button>
          </Link>

          <Link href="/combat/mission?mid=4">
            <button className="button rounded-full w-30 h-30 py-5">3</button>
          </Link>

          <Link href="/combat/mission?mid=3">
            <button className="button rounded-full w-30 h-30 py-5">1</button>
          </Link>
        </div>

        <div className="justify-around w-1/2 flex flex-col items-center py-5">
          <Link href="/combat/mission?mid=2">
            <button className="button rounded-full w-30 h-30 py-5">4</button>
          </Link>

          <Link href="/combat/mission?mid=1">
            <button className="button rounded-full w-30 h-30 py-5">2</button>
          </Link>
        </div>
      </div>

      <FooterNav />
    </div>
  );
}
