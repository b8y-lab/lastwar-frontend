import Link from 'next/link';
import Image from 'next/image';
import { createBackgroundStyle, BG_IMAGES } from '@/utils/styles';

type HeroCardVariant = 'card' | 'link';

interface IHeroCard {
  id: string;
  url: string;
  mid?: string;
  heroImage?: string;
  rating?: number;
  level?: number;
  isEmpty?: boolean;
  slotNumber?: number;
  variant?: HeroCardVariant;
}

export default function HeroCard({
  id,
  url,
  mid,
  heroImage = '/assets/heroes/duck.svg',
  rating = 0,
  level = 1,
  isEmpty = false,
  slotNumber = 0,
  variant = 'card',
}: IHeroCard) {
  const isCard = variant === 'card';

  // Размеры в зависимости от варианта
  const containerClass = isCard
    ? 'flex flex-col items-center justify-center w-full h-80'
    : 'flex flex-col items-center justify-center relative w-[120px] aspect-[130/202]';

  const containerFullClass = isCard
    ? 'flex flex-col items-center justify-start relative w-full h-80'
    : 'flex flex-col items-center justify-start relative w-[120px] aspect-[130/202]';

  const imageClass = isCard
    ? 'mt-15 w-[80%] aspect-[100/120] mx-auto'
    : 'mt-6 w-[100px] aspect-[100/120] mx-auto';

  const barClass = isCard
    ? 'absolute bottom-[6px] left-[6px] right-[6px] aspect-[212/90]'
    : 'absolute bottom-[6px] left-[6px] w-[105px] aspect-[212/90]';

  const starPosition = isCard
    ? 'absolute bottom-[51px] left-[23%] flex gap-0.5 text-sm z-10'
    : 'absolute bottom-[28px] left-[22px] flex gap-0.5 text-sm z-10';

  const starSize = isCard ? 16 : 11;

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <span key={i}>
          <Image
            width={starSize}
            height={starSize}
            src="/assets/heroes/star.svg"
            alt="Star Rating"
            style={{ zIndex: 10 }}
          />
        </span>
      );
    }
    return stars;
  };

  if (isEmpty) {
    return (
      <div
        className={containerClass}
        style={createBackgroundStyle(BG_IMAGES.HERO_CARD_BG_EMPTY)}
      >
        <Link href={url + '?hid=' + id + '&mid=' + mid}>
          <button
            className="text-white font-bold py-2 px-3 rounded text-sm cursor-pointer"
            style={createBackgroundStyle(BG_IMAGES.HERO_BUTTON)}
          >
            Герой {slotNumber}
          </button>
        </Link>
      </div>
    );
  }

  return (
    <Link href={url + '?hid=' + id + '&mid=' + mid}>
      <div
        className={containerFullClass}
        style={createBackgroundStyle(BG_IMAGES.HERO_CARD_BG)}
      >
        <div
          className={imageClass}
          style={createBackgroundStyle(heroImage)}
        ></div>

        <div
          className={barClass}
          style={createBackgroundStyle(BG_IMAGES.HERO_CARD_BAR)}
        >
          <div className={starPosition}>{renderStars()}</div>
        </div>
      </div>
    </Link>
  );
}
