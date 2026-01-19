interface RewardModalProps {
  rewardType: string;
  onClose: () => void;
}

import { motion } from 'framer-motion';

export const Reward = ({ rewardType, onClose }: RewardModalProps) => {
  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-100"
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      <div className="w-[500px] h-[500px] relative">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/assets/slot/reward/reward-effect.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
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
          style={{
            backgroundImage: 'url("/assets/slot/reward/chest.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      <div className="p-6 rounded-xl  text-center">
        <h2 className="text-xl font-bold mb-4"></h2>
        <p>You received: {rewardType}</p>

        <button className="mt-6 button" onClick={onClose}>
          Collect
        </button>
      </div>
    </div>
  );
};
