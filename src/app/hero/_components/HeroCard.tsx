import Link from 'next/link';
import Image from 'next/image';

interface IHeroCard {
  id: string;
  url: string;
  mid?: string;
  heroImage?: string;
  rating?: number;
  level?: number;
  isEmpty?: boolean;
  slotNumber?: number;
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
}: IHeroCard) {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <span key={i}>
          <Image
            width={16}
            height={16}
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
        className="flex flex-col items-center justify-center w-full h-80"
        style={{
          backgroundImage: 'url("/assets/heroes/hero-card-bg-empty.svg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Link href={url + '?hid=' + id + '&mid=' + mid}>
          <button
            className="text-white font-bold py-2 px-3 rounded text-sm cursor-pointer"
            style={{
              backgroundImage: 'url("/assets/heroes/button.svg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
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
        className="flex flex-col items-center justify-start relative w-full h-80"
        style={{
          backgroundImage: 'url("/assets/heroes/hero-card-bg.svg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="mt-15 w-[80%] aspect-[100/120] mx-auto"
          style={{
            backgroundImage: `url("${heroImage}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        <div
          className="absolute bottom-[6px] left-[6px] right-[6px] aspect-[212/90]"
          style={{
            backgroundImage: 'url("/assets/heroes/hero-card-bar.svg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute bottom-[51px] left-[23%] flex gap-0.5 text-sm z-10">
            {renderStars()}
          </div>
        </div>
      </div>
    </Link>
  );
}
