'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const cloudImages = [
  '/assets/slot/cloud1.png',
  '/assets/slot/cloud2.png',
  '/assets/slot/cloud3.png',
];

const CLOUD_WIDTH = 200;

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function CloudsLayer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [clouds, setClouds] = useState<any[]>([]);
  const [containerWidth, setContainerWidth] = useState(500);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
    setClouds(Array.from({ length: 6 }).map((_, i) => createCloud(i)));
  }, []);

  function createCloud(id: number) {
    return {
      id,
      src: cloudImages[id % cloudImages.length],
      top: random(10, 80),
      scale: random(0.25, 0.45),
      duration: random(35, 60),
      direction: Math.random() > 0.5 ? 1 : -1,
    };
  }

  return (
    <div ref={containerRef} className="absolute top-0 w-full h-[250px] overflow-hidden pointer-events-none z-0">
      {clouds.map((cloud) => {
        const fromX =
          cloud.direction === 1 ? -CLOUD_WIDTH : containerWidth + CLOUD_WIDTH;

        const toX =
          cloud.direction === 1 ? containerWidth + CLOUD_WIDTH : -CLOUD_WIDTH;

        return (
          <motion.img
            key={cloud.id}
            src={cloud.src}
            alt="cloud"
            className="absolute select-none w-[200px]"
            style={{
              top: `${cloud.top}%`,
              scale: cloud.scale,
              opacity: 1,
            }}
            initial={{ x: fromX }}
            animate={{
              x: toX,
              y: [0, -4, 0],
            }}
            transition={{
              duration: cloud.duration,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        );
      })}
    </div>
  );
}
