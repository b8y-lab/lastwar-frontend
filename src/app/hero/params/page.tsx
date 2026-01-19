import FooterNav from '@/components/FooterNav.tsx';
import UserHeader from '@/app/profile/_components/UserHeader.tsx';
import TitleHeader from '@/components/TitleHeader.tsx';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-start h-screen w-full">
      <UserHeader />
      <TitleHeader title="Parameters" />

      <button className="button w-full h-10">Param1</button>
      <button className="button w-full h-10">Param2</button>
      <button className="button w-full h-10">Param3</button>
      <button className="button w-full h-10">Param4</button>
      <button className="button w-full h-10">Param5</button>
      <button className="button w-full h-10">Param6</button>
      <button className="button w-full h-10">Param7</button>
      <button className="button w-full h-10">Param8</button>
      <button className="button w-full h-10">Param9</button>

      <FooterNav />
    </div>
  );
}
