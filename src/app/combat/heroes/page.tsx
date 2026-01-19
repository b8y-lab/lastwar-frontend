import TitleHeader from '@/components/TitleHeader.tsx';
import HeroLink from '@/app/hero/_components/HeroLink.tsx';

interface IHeroesProps {
  searchParams: Promise<{ mid?: string }>;
}

export default async function Page({ searchParams }: IHeroesProps) {
  const { mid } = await searchParams;

  return (
    <div className="flex flex-col items-center justify-start h-screen w-full">
      <TitleHeader title="Choose Hero" />

      <div className="w-full flex flex-row items-center justify-around py-5">
        <HeroLink id="1" mid={mid} url="/combat/mission" />
        <HeroLink id="2" mid={mid} url="/combat/mission" />
        <HeroLink id="3" mid={mid} url="/combat/mission" />
      </div>

      <div className="w-full flex flex-row items-center justify-around py-5">
        <HeroLink id="4" mid={mid} url="/combat/mission" />
        <HeroLink id="5" mid={mid} url="/combat/mission" />
        <HeroLink id="6" mid={mid} url="/combat/mission" />
      </div>

      <div className="w-full flex flex-row items-center justify-around py-5">
        <HeroLink id="7" mid={mid} url="/combat/mission" />
        <HeroLink id="8" mid={mid} url="/combat/mission" />
        <HeroLink id="9" mid={mid} url="/combat/mission" />
      </div>
    </div>
  );
}
