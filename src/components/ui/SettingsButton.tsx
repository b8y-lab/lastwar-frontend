import Image from 'next/image';

export const SettingsButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button onClick={onClick} className="cursor-pointer">
      <Image
        width={55}
        height={55}
        src="/assets/settings/settings-btn.svg"
        alt=""
      />
    </button>
  );
};
