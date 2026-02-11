import Image from 'next/image';

export const BackButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button onClick={onClick} className="cursor-pointer">
      <Image
        width={55}
        height={55}
        src="/assets/buttons/back-btn.svg"
        alt=""
      />
    </button>
  );
};
