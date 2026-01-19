import TitleHeader from '@/components/TitleHeader.tsx';
import UserHeader from '@/app/profile/_components/UserHeader.tsx';
import FooterNav from '@/components/FooterNav.tsx';
import CarLink from '@/app/hero/_components/CarLink.tsx';
import CarModal from '@/app/hero/_components/CarModal.tsx';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-start h-screen w-full">
      <UserHeader />
      <TitleHeader title="Cars" />

      <br />

      <div className="w-full flex flex-row items-center justify-around">
        <CarModal id={1} />
        <CarModal id={2} />
        <CarModal id={3} />
        <CarModal id={4} />
      </div>

      <div className="w-full flex flex-row items-center justify-around">
        <CarModal id={5} />
        <CarModal id={6} />
        <CarModal id={7} />
        <CarModal id={8} />
      </div>

      <div className="w-full flex flex-row items-center justify-around">
        <CarModal id={9} />
        <CarModal id={10} />
        <CarModal id={11} />
        <CarModal id={12} />
      </div>

      <FooterNav />
    </div>
  );
}
