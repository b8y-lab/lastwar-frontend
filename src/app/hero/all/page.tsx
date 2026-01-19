import TitleHeader from '@/components/TitleHeader.tsx';
import FooterNav from '@/components/FooterNav.tsx';
import HeroLink from '@/app/hero/_components/HeroLink.tsx';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-start h-screen w-full">
      <TitleHeader title="Heroes" />

      <br />

      <div className="w-full flex flex-row items-center justify-around">
        <HeroLink id="1" url="/hero" />
        <HeroLink id="2" url="/hero" />
        <HeroLink id="3" url="/hero" />
      </div>

      <div className="w-full flex flex-row items-center justify-around">
        <HeroLink id="4" url="/hero" />
        <HeroLink id="5" url="/hero" />
        <HeroLink id="6" url="/hero" />
      </div>

      <div className="w-full flex flex-row items-center justify-around">
        <HeroLink id="7" url="/hero" />
        <HeroLink id="8" url="/hero" />
        <HeroLink id="9" url="/hero" />
      </div>

      <FooterNav />
    </div>
  );
}
