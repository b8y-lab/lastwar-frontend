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
import { getHeroById } from '@/data/heroes';
import { createBackgroundStyle, BG_IMAGES } from '@/utils/styles';

interface IProps {
  searchParams: Promise<{
    hid?: string;
  }>;
}

export default async function Page({ searchParams }: IProps) {
  const { hid } = await searchParams;
  const hero = hid ? getHeroById(hid) : null;

  if (!hero) {
    return (
      <div className="flex flex-col items-center justify-center min-h-dvh w-full bg-black">
        <div className={`${CONTAINER_CLASS} flex flex-col items-center`}>
          <p className="text-white">Герой не найден</p>
          <Link href="/hero/all" className="text-blue-500 mt-4">
            Вернуться к списку героев
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-dvh w-full bg-black">
      <div
        className={`${CONTAINER_CLASS} flex flex-col items-center min-h-dvh pt-5`}
        style={{
          ...createBackgroundStyle(BG_IMAGES.HERO_PARCHMENT_BG),
          backgroundSize: '175%',
        }}
      >
        {/* <UserHeader /> */}
        {/* <TitleHeader title={'Hero #' + hid} /> */}

        <div
          className="w-full max-w-[255px] h-[50px] flex items-center justify-center"
          style={createBackgroundStyle(BG_IMAGES.HERO_NAMEBAR)}
        >
          {hero.name || 'Hero #' + hid}
        </div>

        <div className="w-full flex flex-row items-start justify-between gap-3 px-4 pt-5">
          <div className="flex-1">
            <HeroCard
              id={hero.id}
              url="/hero"
              rating={hero.rating}
              level={hero.level}
              heroImage={hero.heroImage}
            />
          </div>

          <div
            className="flex-1 h-84 items-center flex flex-col p-3"
            style={createBackgroundStyle(BG_IMAGES.HERO_EQUIP_BG)}
          >
            <Link
              href="/hero/cars"
              className="button w-[95%] h-17 items-end flex flex-col justify-around mt-10"
              style={createBackgroundStyle(BG_IMAGES.HERO_CART_BTN)}
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
            style={createBackgroundStyle(BG_IMAGES.HERO_UPRANK_BG)}
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
              style={createBackgroundStyle(BG_IMAGES.HERO_UPRANK_BTN)}
            >
              Повысить ур/ранг
            </button>
          </div>

          <div
            className="w-[240px] h-[290px]"
            style={createBackgroundStyle(BG_IMAGES.HERO_SKILL_BG)}
          >
            <h3 className="text-center pt-5">Умение</h3>
            <p className="text-center pt-10">Описание умения</p>
          </div>
        </div>

        <div
          className="h-[180px] w-full max-w-[445px] -mt-20 relative"
          style={createBackgroundStyle(BG_IMAGES.HERO_PARAMS_BG)}
        >
          <button
            className="h-[60px] w-[70px] absolute right-3 bottom-3 cursor-pointer"
            style={createBackgroundStyle(BG_IMAGES.HERO_EXPAND_BTN)}
          ></button>
          <h3 className="text-center absolute bottom-8 left-1/3">
            Параметры героя
          </h3>

          <div className="flex mt-7 ml-5">
            <div className="flex flex-col items-center">
              <div
                className="flex items-center justify-center w-[50px] h-[50px]"
                style={createBackgroundStyle(BG_IMAGES.HERO_PARAM_ITEM_BG)}
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
                style={createBackgroundStyle(BG_IMAGES.HERO_PARAM_ITEM_BG)}
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
                style={createBackgroundStyle(BG_IMAGES.HERO_PARAM_ITEM_BG)}
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
