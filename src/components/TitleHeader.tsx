import BackButton from '@/components/BackButton.tsx';
import SettingsModal from '@/components/SettingsModal.tsx';

interface ITitleHeader {
  title: string;
  back?: string;
}

export default function TitleHeader({ title, back }: ITitleHeader) {
  return (
    <div className="w-full h-15 flex flex-row items-center justify-around relative p-5">
      <div className="w-1/4">
        <SettingsModal />
      </div>

      {/* TODO: fix padding top title */}
      <h1 className="w-1/2 text-[20px] text-center pt-[20px]">{title}</h1>

      <div className="w-1/4 flex justify-end">
        <BackButton back={back} />
      </div>
    </div>
  );
}
