import { motion } from 'framer-motion';
import { createBackgroundStyle, BG_IMAGES } from '@/utils/styles';

interface RewardModalProps {
  rewardType: string;
  onClose: () => void;
}

export const Reward = ({ rewardType, onClose }: RewardModalProps) => {
  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999]"
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      <div className="flex flex-col items-center px-4">
        <div className="w-full max-w-[400px] aspect-square relative">
          <motion.div
            className="absolute inset-0"
            style={createBackgroundStyle(BG_IMAGES.SLOT_REWARD_EFFECT)}
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: 'linear',
            }}
          />

          <div
            className="
      w-[150px] h-[150px]
      absolute top-1/2 left-1/2
      -translate-x-1/2 -translate-y-1/2
      z-10
    "
            style={createBackgroundStyle(BG_IMAGES.SLOT_REWARD_CHEST)}
          />
        </div>

        <div className="p-6 rounded-xl text-center">
          <p>You received: {rewardType}</p>

          <button
            className="w-full max-w-[325px] aspect-[325/109] button text-white text-[clamp(20px,6vw,30px)]"
            onClick={onClose}
            style={{
              ...createBackgroundStyle(BG_IMAGES.SLOT_REWARD_BUTTON),
              WebkitTextStroke: '1px black',
            }}
          >
            ЗАБРАТЬ НАГРАДУ
          </button>
        </div>
      </div>
    </div>
  );
};
