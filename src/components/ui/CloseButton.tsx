import Image from 'next/image';

export const CloseButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button onClick={onClick} className="absolute right-2 top-3 cursor-pointer">
      <Image
        width={40}
        height={40}
        src="/assets/settings/close-btn.svg"
        alt=""
      />
    </button>
  );
};
