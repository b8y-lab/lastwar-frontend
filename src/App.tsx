import UserHeader from '@/app/profile/_components/UserHeader.tsx';
import QuestSideNav from '@/components/QuestSideNav.tsx';
import PromoSideNav from '@/components/PromoSideNav.tsx';
import SlotMachine from '@/components/SlotMachine/SlotMachine';
import FooterNav from '@/components/FooterNav.tsx';
import CloudsLayer from '@/components/CloudsLayer';
import { Header } from '@/components/SlotMachine/partials/Header';

export default function App() {
  return (
    <div
      id="app"
      className="flex flex-col relative"
      style={{
        backgroundImage: 'url("/assets/slot/slot-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <CloudsLayer />
      {/* <Header /> */}
      <div className='max-w-[550px]'>
        <div className="mt-10">
          <div className='absolute top-40 left-10 z-3'>
            <QuestSideNav />
          </div>
          <div className='absolute top-40 right-10 z-3'>
            <PromoSideNav />
          </div>
        </div>
        <SlotMachine />
      </div>
    </div>
  );
}
