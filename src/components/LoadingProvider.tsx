'use client';

import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useRef, useState } from 'react';

const LOADING_TIMEOUT = 5000;

function waitForImages(container: HTMLElement): Promise<void> {
  const promises: Promise<void>[] = [];

  // Wait for <img> elements to load
  container.querySelectorAll<HTMLImageElement>('img').forEach((img) => {
    if (!img.complete) {
      promises.push(
        new Promise<void>((resolve) => {
          img.addEventListener('load', () => resolve(), { once: true });
          img.addEventListener('error', () => resolve(), { once: true });
        })
      );
    }
  });

  // Preload background images set via inline styles
  const bgUrls = new Set<string>();
  const extractBgUrls = (el: HTMLElement) => {
    const bg = el.style.backgroundImage;
    if (bg) {
      for (const match of bg.matchAll(/url\(["']?([^"')]+)["']?\)/g)) {
        bgUrls.add(match[1]);
      }
    }
  };
  extractBgUrls(container);
  container.querySelectorAll<HTMLElement>('[style]').forEach(extractBgUrls);

  bgUrls.forEach((url) => {
    promises.push(
      new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve();
        img.src = url;
      })
    );
  });

  if (promises.length === 0) return Promise.resolve();

  return new Promise<void>((resolve) => {
    const timeout = setTimeout(resolve, LOADING_TIMEOUT);
    Promise.all(promises).then(() => {
      clearTimeout(timeout);
      resolve();
    });
  });
}

export default function LoadingProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip initial mount to avoid flash on SSR hydration
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    let cancelled = false;
    setIsLoading(true);

    requestAnimationFrame(() => {
      if (cancelled) return;

      const container = contentRef.current;
      if (!container) {
        setIsLoading(false);
        return;
      }

      waitForImages(container).then(() => {
        if (!cancelled) setIsLoading(false);
      });
    });

    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="text-white text-2xl">Загрузка...</div>
        </div>
      )}
      <div ref={contentRef} className={isLoading ? 'invisible' : ''}>
        {children}
      </div>
    </>
  );
}
