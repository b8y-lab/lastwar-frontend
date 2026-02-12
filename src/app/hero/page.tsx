import Link from 'next/link';
import CarParamModal from '@/app/hero/_components/CarParamModal.tsx';
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
        <div
          className="w-[55%] aspect-[706/138] flex items-center justify-center"
          style={createBackgroundStyle(BG_IMAGES.HERO_NAMEBAR)}
        >
          {hero.name || 'Hero #' + hid}
        </div>

        <div className="w-full flex flex-row items-start justify-between gap-[2%] px-[4%] pt-[4%]">
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
            className="flex-1 aspect-[668/1016] items-center flex flex-col p-[4%]"
            style={createBackgroundStyle(BG_IMAGES.HERO_EQUIP_BG)}
          >
            <Link
              href="/hero"
              className="button w-[95%] aspect-[544/210] items-end flex flex-col justify-around mt-[15%]"
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

        <div className="w-full flex flex-row items-start justify-center gap-[1%] mt-3">
          <div
            className="w-[45%] aspect-[526/540] flex flex-col items-center gap-2 justify-center"
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
              className="w-[67%] aspect-[344/136] cursor-pointer"
              style={createBackgroundStyle(BG_IMAGES.HERO_UPRANK_BTN)}
            >
              Повысить ур/ранг
            </button>
          </div>

          <div
            className="w-[54%] aspect-[668/804]"
            style={createBackgroundStyle(BG_IMAGES.HERO_SKILL_BG)}
          >
            <h3 className="text-center pt-[6%]">Умение</h3>
            <p className="text-center pt-[12%]">Описание умения</p>
          </div>
        </div>

        <div
          className="w-full aspect-[1228/512] -mt-20 relative"
          style={createBackgroundStyle(BG_IMAGES.HERO_PARAMS_BG)}
        >
          <button
            className="w-[16%] aspect-[194/170] absolute right-[2%] bottom-[5%] cursor-pointer"
            style={createBackgroundStyle(BG_IMAGES.HERO_EXPAND_BTN)}
          ></button>
          <h3 className="text-center absolute bottom-[15%] left-1/3">
            Параметры героя
          </h3>

          <div className="flex mt-[10%] ml-[5%]">
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
