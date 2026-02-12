import { CONTAINER_CLASS } from '@/constants/layout';

export default function HeroAllLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-start min-h-dvh w-full bg-black">
      <div className={`${CONTAINER_CLASS}`}>{children}</div>
    </div>
  );
}
