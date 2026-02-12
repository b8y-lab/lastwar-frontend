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
  // Link: 30% ширины родителя, aspect по SVG (335×525)
  // Card: на всю ширину, aspect по SVG
  const containerClass = isCard
    ? 'flex flex-col items-center justify-center w-full aspect-[335/525]'
    : 'flex flex-col items-center justify-center relative w-[30%] aspect-[335/525]';

  const containerFullClass = isCard
    ? 'flex flex-col items-center justify-start relative w-full aspect-[335/525]'
    : 'flex flex-col items-center justify-start relative w-[30%] aspect-[335/525]';

  const imageClass = isCard
    ? 'mt-[10%] w-[80%] aspect-[100/120] mx-auto'
    : 'mt-[10%] w-[83%] aspect-[100/120] mx-auto';

  const barClass = isCard
    ? 'absolute bottom-[3%] left-[3%] right-[3%] aspect-[449/192]'
    : 'absolute bottom-[3%] left-[5%] w-[87%] aspect-[449/192]';

  const starPosition = isCard
    ? 'absolute bottom-[15%] left-[23%] flex gap-0.5 text-sm z-10'
    : 'absolute bottom-[15%] left-[18%] flex gap-0.5 text-sm z-10';

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
    <Link
      href={url + '?hid=' + id + '&mid=' + mid}
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
    </Link>
  );
}
