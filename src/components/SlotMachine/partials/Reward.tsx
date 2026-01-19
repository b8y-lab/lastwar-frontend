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
      <div className='flex flex-col'>
        <div className="w-[400px] h-[400px] relative">
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

        <button className="w-[325px] h-[109px] button text-white text-[30px]" onClick={onClose} style={{
            backgroundImage: 'url("/assets/slot/reward/rewardButton.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            WebkitTextStroke: '1px black',
          }}>
          ЗАБРАТЬ НАГРАДУ
        </button>
      </div>
      </div>
    </div>
  );
};
