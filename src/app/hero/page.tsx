import FooterNav from '@/components/FooterNav.tsx';
import UserHeader from '@/app/profile/_components/UserHeader.tsx';
import TitleHeader from '@/components/TitleHeader.tsx';
import Link from 'next/link';
import SkillModal from '@/app/hero/_components/SkillModal.tsx';
import CarParamModal from '@/app/hero/_components/CarParamModal.tsx';
import ParamsModal from '@/app/hero/_components/ParamsModal.tsx';
import HeroCard from '@/app/hero/_components/HeroCard.tsx';
import { CONTAINER_CLASS } from '@/constants/layout';
import Image from 'next/image';

interface IProps {
  searchParams: Promise<{
    hid?: number;
  }>;
}

export default async function Page({ searchParams }: IProps) {
  const { hid } = await searchParams;

  return (
    <div className="flex flex-col items-center justify-start h-screen w-full bg-black">
      <div
        className={`w-full ${CONTAINER_CLASS} flex flex-col items-center h-screen pt-5`}
        style={{
          backgroundImage: 'url("/assets/heroes/parchment-bg.svg")',
          backgroundSize: '175%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* <UserHeader /> */}
        {/* <TitleHeader title={'Hero #' + hid} /> */}

        <div
          className="w-[255px] h-[50px] flex items-center justify-center"
          style={{
            backgroundImage: 'url("/assets/heroes/hero/namebar.svg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {'Hero #' + hid}
        </div>

        <div className="w-full flex flex-row items-start justify-between gap-3 px-4 pt-5">
          <div className="flex-1">
            <HeroCard
              id={String(hid || 1)}
              url="/hero"
              rating={5}
              level={25}
              heroImage="/assets/heroes/dog.svg"
            />
          </div>

          <div
            className="flex-1 h-84 items-center flex flex-col p-3"
            style={{
              backgroundImage: 'url("/assets/heroes/hero/equip-bg.svg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <Link
              href="/hero/cars"
              className="button w-[95%] h-17 items-end flex flex-col justify-around mt-10"
              style={{
                backgroundImage: 'url("/assets/heroes/hero/cart-btn.svg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <span className="p-3 pr-5">
                Телега <br /> 16УР
              </span>
            </Link>
            <div className="mt-1">
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

        <div className="w-full flex flex-row items-start justify-center gap-2 mt-3">
          <div
            className="w-[200px] h-[200px] flex flex-col items-center gap-2 justify-center"
            style={{
              backgroundImage: 'url("/assets/heroes/hero/uprank-bg.svg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="w-full flex flex-col gap-1">
              <div className="flex items-center justify-center gap-3">
                <Image
                  width={50}
                  height={50}
                  src={'/assets/heroes/hero/money.svg'}
                  alt=""
                />
                <span>999К</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Image
                  width={50}
                  height={50}
                  src={'/assets/heroes/hero/crystals.svg'}
                  alt=""
                />
                <span>999К</span>
              </div>
            </div>
            <button
              className="w-[135px] h-[53px] cursor-pointer"
              style={{
                backgroundImage: 'url("/assets/heroes/hero/uprank-btn.svg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              Повысить ур/ранг
            </button>
          </div>

          <div
            className="w-[240px] h-[290px]"
            style={{
              backgroundImage: 'url("/assets/heroes/hero/skill-bg.svg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <h3 className="text-center pt-5">Умение</h3>
            <p className="text-center pt-10">Описание умения</p>
          </div>
        </div>

        <div
          className="h-[180px] w-[445px] -mt-20 relative"
          style={{
            backgroundImage: 'url("/assets/heroes/hero/params-bg.svg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <button
            className="h-[60px] w-[70px] absolute right-3 bottom-3 cursor-pointer"
            style={{
              backgroundImage: 'url("/assets/heroes/hero/expand-btn.svg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          ></button>
          <h3 className="text-center absolute bottom-8 left-1/3">
            Параметры героя
          </h3>

          <div className="flex mt-7 ml-5">
            <div className="flex flex-col items-center">
              <div
                className="flex items-center justify-center w-[50px] h-[50px]"
                style={{
                  backgroundImage:
                    'url("/assets/heroes/hero/param-item-bg.svg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <Image
                  width={35}
                  height={35}
                  src={'/assets/heroes/hero/heart.svg'}
                  alt=""
                />
              </div>
              <p>999К</p>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="flex items-center justify-center w-[50px] h-[50px]"
                style={{
                  backgroundImage:
                    'url("/assets/heroes/hero/param-item-bg.svg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <Image
                  width={35}
                  height={35}
                  src={'/assets/heroes/hero/sword.svg'}
                  alt=""
                />
              </div>
              <p>999К</p>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="flex items-center justify-center w-[50px] h-[50px]"
                style={{
                  backgroundImage:
                    'url("/assets/heroes/hero/param-item-bg.svg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <Image
                  width={35}
                  height={35}
                  src={'/assets/heroes/hero/shield.svg'}
                  alt=""
                />
              </div>
              <p>999К</p>
            </div>
          </div>
        </div>

        {/* <FooterNav /> */}
      </div>
    </div>
  );
}
