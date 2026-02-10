import Image from 'next/image';

export const SettingsButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button onClick={onClick} className="cursor-pointer">
      <Image
        width={65}
        height={65}
        src="/assets/settings/settings-btn.svg"
        alt=""
      />
    </button>
  );
};
