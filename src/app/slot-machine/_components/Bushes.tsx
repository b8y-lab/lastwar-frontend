import { createBackgroundStyle, BG_IMAGES } from '@/utils/styles';

export const Bushes = () => (
  <div
    className="absolute -bottom-6 left-0 right-0 w-full max-w-[420px] h-[92px] z-10 pointer-events-none mx-auto"
    style={createBackgroundStyle(BG_IMAGES.SLOT_BUSHES)}
  />
);
