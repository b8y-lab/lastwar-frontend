import Link from 'next/link';
import Image from 'next/image';

interface IHeroLink {
  id: string;
  url: string;
  mid?: string;
  heroImage?: string;
  rating?: number;
  level?: number;
  isEmpty?: boolean;
  slotNumber?: number;
}

export default function HeroLink({
  id,
  url,
  mid,
  heroImage = '/assets/heroes/duck.svg',
  rating = 0,
  level = 1,
  isEmpty = false,
  slotNumber = 0
}: IHeroLink) {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <span key={i}>
          <Image width={11} height={11} src="/assets/heroes/star.svg" alt='Star Rating' style={{ zIndex: 10 }} />
        </span>
      );
    }
    return stars;
  };

  if (isEmpty) {
    return (
      <div className='flex flex-col items-center justify-center relative w-[120px] aspect-[130/202]' style={{
          backgroundImage: 'url("/assets/heroes/hero-card-bg-empty.svg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <Link href={url + '?hid=' + id + '&mid=' + mid}>
            <button className='text-white font-bold py-2 px-3 rounded text-sm cursor-pointer'style={{
          backgroundImage: 'url("/assets/heroes/button.svg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
              Герой {slotNumber}
            </button>
          </Link>
      </div>
    );
  }

  return (
    <Link
      href={url + '?hid=' + id + '&mid=' + mid}
    >
      <div className='flex flex-col items-center justify-start relative w-[120px] aspect-[130/202]' style={{
          backgroundImage: 'url("/assets/heroes/hero-card-bg.svg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>

          {/* <div className='absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded z-10'>
            Lv.{level}
          </div> */}

          <div className='mt-6 w-[100px] aspect-[100/120] mx-auto' style={{
            backgroundImage: `url("${heroImage}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          </div>

          <div className='absolute bottom-[6px] left-[6px] w-[105px] aspect-[212/90]' style={{
            backgroundImage: 'url("/assets/heroes/hero-card-bar.svg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
            <div className='absolute bottom-[28px] left-[22px] flex gap-0.5 text-sm z-10'>
            {renderStars()}
          </div>
          </div>
      </div>
    </Link>
  );
}
