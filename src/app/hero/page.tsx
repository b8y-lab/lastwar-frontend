import FooterNav from '@/components/FooterNav.tsx';
import UserHeader from '@/app/profile/_components/UserHeader.tsx';
import TitleHeader from '@/components/TitleHeader.tsx';
import Link from 'next/link';
import SkillModal from '@/app/hero/_components/SkillModal.tsx';
import CarParamModal from '@/app/hero/_components/CarParamModal.tsx';
import ParamsModal from '@/app/hero/_components/ParamsModal.tsx';

interface IProps {
  searchParams: Promise<{
    hid?: number;
  }>;
}

export default async function Page({ searchParams }: IProps) {
  const { hid } = await searchParams;

  return (
    <div className="flex flex-col items-center justify-start h-screen w-full">
      <UserHeader />
      <TitleHeader title={'Hero #' + hid} />

      <div className="w-full flex flex-row items-center justify-between px-5 pt-5">
        <button className="button w-1/2 h-60">Hero</button>

        <div className="w-1/2 h-60 items-center flex flex-col justify-between border m-3">
          <Link
            href="/hero/cars"
            className="button w-full h-20 items-center flex flex-col justify-around mask-x-from-50%"
          >
            Car
          </Link>

          <div className="w-full flex flex-row items-center justify-between">
            <CarParamModal id={1} />
            <CarParamModal id={2} />
          </div>

          <div className="w-full flex flex-row items-center justify-between">
            <CarParamModal id={3} />
            <CarParamModal id={4} />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-row items-center justify-between px-5">
        <div className="w-1/2 flex flex-col items-center justify-around m-3">
          <button className="button w-full h-15">Level</button>
          <ParamsModal />
        </div>

        <SkillModal />
      </div>

      <FooterNav />
    </div>
  );
}
