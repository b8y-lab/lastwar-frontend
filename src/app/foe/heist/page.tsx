import FoeHeader from '@/app/foe/_components/FoeHeader.tsx';
import HeistRewardModal from '@/app/reward/_components/HeistRewardModal.tsx';
import { CONTAINER_CLASS } from '@/constants/layout';
import { createBackgroundStyle, BG_IMAGES } from '@/utils/styles';

export default function Page() {
  return (
    <div
      className={`flex flex-col items-center justify-start ${CONTAINER_CLASS} h-screen mx-auto w-full px-4`}
      style={createBackgroundStyle(BG_IMAGES.HEIST_BG)}
    >
      <FoeHeader />

      <div className="w-full flex flex-row items-center justify-center py-5">
        <div className="w-1/2 h-40 border flex flex-col items-center justify-center">
          <span className="mb-10">Main Building</span>
          <HeistRewardModal />
        </div>
      </div>

      <div className="justify-around w-full flex flex-row items-center">
        <div className="w-1/3 h-40 border flex flex-col items-center justify-center">
          <span className="mb-10">Gear Factory</span>
          <HeistRewardModal />
        </div>

        <div className="w-1/3 h-40 border flex flex-col items-center justify-center">
          Academy
        </div>
      </div>

      <div className="justify-around w-full flex flex-row items-center py-5">
        <div className="w-1/3 h-40 border flex flex-col items-center justify-center">
          Academy
        </div>

        <div className="w-1/3 h-40 border flex flex-col items-center justify-center">
          Gear Factory
        </div>
      </div>
    </div>
  );
}
