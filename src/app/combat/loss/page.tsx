import TitleHeader from '@/components/TitleHeader.tsx';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-start min-h-dvh w-full">
      <TitleHeader title="Defeat" />

      <div className="w-full flex flex-row items-center justify-center py-15">
        <button className="button w-1/2 h-60 inline-block">
          Hero Progress
        </button>
      </div>

      <div className="justify-between w-2/3 flex flex-col items-center py-5 border-1">
        <h1 className="w-full justify-center text-center">Advisory</h1>
        <button className="button w-2/3 py-2">Try another hero &rarr;</button>
        <button className="button w-2/3 py-2">Upgrade hero &rarr;</button>
        <button className="button w-2/3 py-2">
          Upgrade hero skills &rarr;
        </button>
      </div>

      <br />
      <br />
      <br />

      <button className="button w-full py-5">Exit</button>
    </div>
  );
}
