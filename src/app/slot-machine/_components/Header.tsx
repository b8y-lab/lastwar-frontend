import Image from 'next/image';
import { createBackgroundStyle, BG_IMAGES } from '@/utils/styles';

export const Header = () => {
  return (
    <div
      className="w-full h-31 z-10 absolute top-0"
      style={createBackgroundStyle(BG_IMAGES.SLOT_HEADER)}
    ></div>
  );
};
