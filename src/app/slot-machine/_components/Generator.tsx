import { motion, type MotionStyle, type Transition } from 'framer-motion';
import { createBackgroundStyle, BG_IMAGES } from '@/utils/styles';

const GENERATOR_STYLE: MotionStyle = {
  width: 130,
  height: 120,
  ...createBackgroundStyle(BG_IMAGES.SLOT_GENERATOR),
};

const GENERATOR_TRANSITION: Transition = {
  duration: 0.3,
  repeat: Infinity,
  ease: 'linear',
};

const GENERATOR_ANIMATE = {
  x: [0, -0.8, 0.6, -0.4, 0],
  y: [0, 0.4, -0.3, 0.2, 0],
  rotate: [0, -0.4, 0.3, -0.2, 0],
};

export const Generator = () => (
  <motion.div
    style={GENERATOR_STYLE}
    animate={GENERATOR_ANIMATE}
    transition={GENERATOR_TRANSITION}
  />
);
