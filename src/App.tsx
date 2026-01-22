import UserHeader from '@/app/profile/_components/UserHeader.tsx';
import QuestSideNav from '@/components/QuestSideNav.tsx';
import PromoSideNav from '@/components/PromoSideNav.tsx';
import SlotMachine from '@/components/SlotMachine/SlotMachine';
import FooterNav from '@/components/FooterNav.tsx';
import CloudsLayer from './components/CloudsLayer';

export default function App() {
  return (
    <div
      id="app"
      className="flex flex-col max-w-[550px] relative"
      style={{
        backgroundImage: 'url("/assets/slot/slot-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <CloudsLayer />
      <div className='absolute top-0 left-0 z-3'>
        <QuestSideNav />
      </div>
      {/* <PromoSideNav /> */}
      <SlotMachine />
    </div>
  );
}
