'use client';

import { QuestModal } from '@/app/slot-machine/_components/QuestModal.tsx';
import QuestHeader from '@/app/quest/_components/QuestHeader.tsx';

export default function QuestSeasonModal() {
  const quests = [...Array(8)].map((_, i) => (
    <div
      key={i}
      className="flex flex-row justify-between items-center w-full h-15 border-t pl-5 my-2"
    >
      <span className="w-15">
        Season <br />
        Quest
      </span>
      <span className="border-1 px-5 w-35">Progress 3/5</span>
      <span>Icon</span>
      <button className="button w-20 h-10">Get</button>
    </div>
  ));

  return (
    <QuestModal>
      <div className="flex flex-col items-center justify-start h-full w-full p-4">
        <h1 className="text-2xl font-bold mb-4 text-white">Seasonal Quests</h1>
        <QuestHeader />

        <div
          className="flex-1 w-full overflow-auto"
          style={{
            backgroundImage: 'url("/assets/quests/quest-list-bg.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {quests}

          <div className="flex flex-row justify-between items-center w-full h-20 pl-5 my-5">
            <span>Quests are refreshing in 27 day(s)</span>
            <button className="button w-30 h-15">Get All</button>
          </div>
        </div>
      </div>
    </QuestModal>
  );
}
