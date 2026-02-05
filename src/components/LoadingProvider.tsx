'use client';

import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

export default function LoadingProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Показываем загрузку при смене маршрута
    setIsLoading(true);

    // Даем время на загрузку контента, затем скрываем экран загрузки
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300); // Минимальная задержка для плавности

    return () => clearTimeout(timer);
  }, [pathname]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <div className="text-white text-2xl">Загрузка...</div>
      </div>
    );
  }

  return <>{children}</>;
}
