import FooterNav from '@/components/FooterNav.tsx';
import UserHeader from '@/app/profile/_components/UserHeader.tsx';
import TitleHeader from '@/components/TitleHeader.tsx';
import Link from 'next/link';
import SkillModal from '@/app/hero/_components/SkillModal.tsx';
import CarParamModal from '@/app/hero/_components/CarParamModal.tsx';
import ParamsModal from '@/app/hero/_components/ParamsModal.tsx';
import HeroCard from '@/app/hero/_components/HeroCard.tsx';
import { CONTAINER_CLASS } from '@/constants/layout';

interface IProps {
  searchParams: Promise<{
    hid?: number;
  }>;
}

export default async function Page({ searchParams }: IProps) {
  const { hid } = await searchParams;

  return (
    <div className="flex flex-col items-center justify-start h-screen w-full bg-black">
      <div className={`w-full ${CONTAINER_CLASS} flex flex-col items-center h-screen`} style={{
          backgroundImage: 'url("/assets/heroes/parchment-bg.svg")',
          backgroundSize: "175%",
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
        <UserHeader />
        {/* <TitleHeader title={'Hero #' + hid} /> */}

        <div className='w-[255px] h-[50px] flex items-center justify-center' style={{
          backgroundImage: 'url("/assets/heroes/hero/namebar.svg")',
          backgroundSize: "cover",
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>{'Hero #' + hid}</div>

        <div className="w-full flex flex-row items-start justify-between gap-3 px-5 pt-5">
        <div className="flex-1">
          <HeroCard
            id={String(hid || 1)}
            url="/hero"
            rating={5}
            level={25}
            heroImage="/assets/heroes/dog.svg"
          />
        </div>

        <div className="flex-1 h-80 items-center flex flex-col p-3" style={{
          backgroundImage: 'url("/assets/heroes/hero/equip-bg.svg")',
          backgroundSize: "cover",
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
          <Link
            href="/hero/cars"
            className="button w-[95%] h-17 items-end flex flex-col justify-around mt-10"
            style={{
          backgroundImage: 'url("/assets/heroes/hero/cart-btn.svg")',
          backgroundSize: "cover",
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
          >
            <span className='p-3 pr-5'>Телега <br /> 16УР</span>
          </Link>
          <div className='mt-1'>
          
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <CarParamModal id={1} />
              <CarParamModal id={2} />
            </div>

            <div className="flex gap-4">
              <CarParamModal id={3} />
              <CarParamModal id={4} />
            </div>
          </div>
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
    </div>
  );
}
