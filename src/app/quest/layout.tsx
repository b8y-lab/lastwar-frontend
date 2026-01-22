import { ReactNode } from 'react';
import TitleHeader from '@/components/TitleHeader.tsx';
import QuestHeader from '@/app/quest/_components/QuestHeader.tsx';
import { headers } from 'next/headers';

export default async function QuestLayout({
  children,
}: {
  children: ReactNode;
}) {
  const headersList = await headers();
  const referer = headersList.get('referer') as string;

  return (
    <div className="flex flex-col items-center justify-start h-screen max-w-[550px] mx-auto" style={{
        backgroundImage: 'url("/assets/quests/quest-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <TitleHeader title="Weekly Quests" back={referer} />
      <QuestHeader />

      {/* TODO: Переделать фон */}
      <div className='h-screen max-w-[550px]' style={{
        backgroundImage: 'url("/assets/quests/quest-list-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        {children}
      </div>
    </div>
  );
}
