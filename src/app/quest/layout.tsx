import { ReactNode } from 'react';
import TitleHeader from '@/components/TitleHeader.tsx';
import QuestHeader from '@/app/quest/_components/QuestHeader.tsx';
import { headers } from 'next/headers';
import { CONTAINER_CLASS } from '@/constants/layout';

export default async function QuestLayout({
  children,
}: {
  children: ReactNode;
}) {
  const headersList = await headers();
  const referer = headersList.get('referer') as string;

  return (
    <div className={`flex flex-col items-center justify-start h-screen ${CONTAINER_CLASS} mx-auto w-full px-4`} style={{
        backgroundImage: 'url("/assets/quests/quest-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <TitleHeader title="Weekly Quests" back={referer} />
      <QuestHeader />

      {/* TODO: Переделать фон */}
      <div className={`h-screen ${CONTAINER_CLASS} w-full`} style={{
        backgroundImage: 'url("/assets/quests/quest-list-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        {children}
      </div>
    </div>
  );
}
