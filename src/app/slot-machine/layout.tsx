import QuestSideNav from '@/components/QuestSideNav.tsx';
import PromoSideNav from '@/components/PromoSideNav.tsx';
import CloudsLayer from '@/components/CloudsLayer';
import { CONTAINER_CLASS } from '@/constants/layout';

export default function SlotMachineLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen overflow-x-hidden pb-10"
      style={{
        backgroundImage: 'url("/assets/slot-machine/bg.svg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div id="slot-machine-page" className="flex flex-col relative">
        <CloudsLayer />
        <div className={`${CONTAINER_CLASS} w-full px-4`}>
          <div className="mt-20">
            <div className="absolute top-35 left-5 z-3">
              <QuestSideNav />
            </div>
            <div className="absolute top-35 right-5 z-3">
              <PromoSideNav />
            </div>
          </div>
          {children}
        </div>
      </div>
      {modal}
    </div>
  );
}
