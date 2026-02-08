import dynamic from 'next/dynamic';

const SlotReel = dynamic(
  () => import('@/app/slot-machine/_components/SlotReel'),
  { ssr: false }
);

interface SlotReelsProps {
  reels: string[];
  rolling: boolean;
}

export const SlotReels = ({ reels, rolling }: SlotReelsProps) => (
  <div className="flex m-[205px]">
    <SlotReel symbol={reels[0]} spinning={rolling} />
    <SlotReel symbol={reels[1]} spinning={rolling} />
    <SlotReel symbol={reels[2]} spinning={rolling} />
  </div>
);
