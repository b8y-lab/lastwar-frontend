'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const clouds = [
  '/assets/slot/cloud1.png',
  '/assets/slot/cloud2.png',
  '/assets/slot/cloud3.png',
];

function getRandom(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

type Cloud = {
  id: number;
  src: string;
  top: number;
  scale: number;
  duration: number;
  direction: number;
  startX: string;
};

export default function CloudsLayer() {
  const [generatedClouds, setGeneratedClouds] = useState<Cloud[]>([]);

  useEffect(() => {
    const cloudsData = Array.from({ length: 5 }).map((_, i) => {
      const direction = Math.random() > 0.5 ? 1 : -1;

      return {
        id: i,
        src: clouds[i % clouds.length],
        top: getRandom(10, 90),
        scale: getRandom(0.35, 0.7),
        duration: getRandom(20, 40),
        direction,
        startX:
          direction === 1
            ? `${getRandom(-100, 0)}%`
            : `${getRandom(100, 200)}%`,
      };
    });

    setGeneratedClouds(cloudsData);
  }, []);

  if (generatedClouds.length === 0) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-[250px] overflow-hidden pointer-events-none z-0">
      {generatedClouds.map((cloud) => (
        <motion.img
          key={cloud.id}
          src={cloud.src}
          alt="cloud"
          className="absolute select-none w-[300px]"
          style={{
            top: cloud.top,
            scale: cloud.scale,
          }}
          initial={{
            x: cloud.startX,
          }}
          animate={{
            x: cloud.direction === 1 ? '130%' : '-30%',
            y: [0, -6, 0],
          }}
          transition={{
            duration: cloud.duration,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
