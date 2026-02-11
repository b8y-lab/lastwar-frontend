'use client';

import { createBackgroundStyle, BG_IMAGES } from '@/utils/styles';
import { Reward } from '@/app/slot-machine/_components/Reward.tsx';
import { Bushes } from '@/app/slot-machine/_components/Bushes.tsx';
import { SlotReels } from '@/app/slot-machine/_components/SlotReels.tsx';
import { SmokeAnimation } from '@/app/slot-machine/_components/SmokeAnimation.tsx';
import { GeneratorVideo } from '@/app/slot-machine/_components/GeneratorVideo.tsx';
import { FortuneWheel } from '@/app/slot-machine/_components/FortuneWheel.tsx';
import { SpinButton } from '@/app/slot-machine/_components/SpinButton.tsx';
import { useSlotMachine } from '@/app/slot-machine/_hooks/useSlotMachine';

export default function SlotMachinePage() {
  const { spins, reels, rolling, reward, spin, clearReward } =
    useSlotMachine();

  return (
    <div className="relative flex flex-col items-center justify-center z-2 w-full">
      <div
        className="flex flex-col justify-start items-center w-full max-w-[410px] h-[470px]"
        style={createBackgroundStyle(BG_IMAGES.SLOT_MACHINE)}
      >
        <div
          className="absolute top-16 left-0 right-0 h-[84px] mx-auto max-w-[320px]"
          style={createBackgroundStyle(BG_IMAGES.SLOT_SNOW_ON_ROOF)}
        ></div>
        <SmokeAnimation />
        <SlotReels reels={reels} rolling={rolling} />
      </div>

      <Bushes />
      <GeneratorVideo />
      <FortuneWheel />

      <SpinButton spins={spins} rolling={rolling} onSpin={spin} />

      {reward && (
        <Reward rewardType={reward.rewardType} onClose={clearReward} />
      )}
    </div>
  );
}
