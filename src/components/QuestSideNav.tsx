import Image from 'next/image';
import Link from 'next/link';

export default function QuestSideNav() {
  return (
    <div className="flex flex-col gap-5 z-3">
      <Link
        href="/quest/day"
        className="flex items-center justify-around shadow-lg"
      >
        <Image src="/assets/slot/menu/quests.png" alt="" width={65} height={175} />
      </Link>

      <Link
        href="/quest/plot"
        className="flex items-center justify-center shadow-lg"
      >
        <Image src="/assets/slot/menu/quests2.png" alt="" width={65} height={175} />
      </Link>

      <Link href="/#" className="flex items-center justify-center shadow-lg">
        <Image src="/assets/slot/menu/monopoly.png" alt="" width={65} height={175} />
      </Link>
    </div>
  );
}
