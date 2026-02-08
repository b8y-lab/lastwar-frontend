import Image from 'next/image';

export const Header = () => {
  return (
    <div
      className="w-full h-31 z-10 absolute top-0"
      style={{
        backgroundImage: 'url("/assets/slot/header.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    ></div>
  );
};
