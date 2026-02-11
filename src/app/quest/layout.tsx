import { ReactNode } from 'react';
import TitleHeader from '@/components/TitleHeader.tsx';
import QuestHeader from '@/app/quest/_components/QuestHeader.tsx';
import { headers } from 'next/headers';
import { CONTAINER_CLASS } from '@/constants/layout';
import { createBackgroundStyle, BG_IMAGES } from '@/utils/styles';

export default async function QuestLayout({
  children,
}: {
  children: ReactNode;
}) {
  const headersList = await headers();
  const referer = headersList.get('referer') as string;

  return (
    <div
      className={`flex flex-col items-center justify-start min-h-dvh ${CONTAINER_CLASS} px-4`}
      style={createBackgroundStyle(BG_IMAGES.QUEST_BG)}
    >
      <TitleHeader title="Weekly Quests" back={referer} />
      <QuestHeader />

      {/* TODO: Переделать фон */}
      <div
        className={`flex-1 ${CONTAINER_CLASS}`}
        style={createBackgroundStyle(BG_IMAGES.QUEST_LIST_BG)}
      >
        {children}
      </div>
    </div>
  );
}
