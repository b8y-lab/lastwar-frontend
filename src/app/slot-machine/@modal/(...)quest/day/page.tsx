'use client';

import { QuestModal } from '@/app/slot-machine/_components/QuestModal.tsx';
import QuestHeader from '@/app/quest/_components/QuestHeader.tsx';
import { createBackgroundStyle, BG_IMAGES } from '@/utils/styles';

export default function QuestDayModal() {
  const quests = [...Array(8)].map((_, i) => {
    // NOTE: random progress for demo: 1-5
    const current = (i % 5) + 1;
    const total = 5;
    const progressPercent = (current / total) * 100;

    return (
      <div
        key={i}
        className="flex flex-row justify-between items-center w-full h-15 px-2 my-2 gap-2"
      >
        <span className="w-15">
          Собери
          <br />
          100к монет
        </span>
        <div className="relative" style={{ width: 100, height: 28 }}>
          <div
            className="absolute inset-0"
            style={createBackgroundStyle(BG_IMAGES.QUEST_EMPTY_BAR)}
          />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${progressPercent}%` }}
          >
            <div
              style={{
                ...createBackgroundStyle(BG_IMAGES.QUEST_FILLED_BAR),
                width: 100,
                height: 28,
              }}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-sm font-bold">
            {current}/{total}
          </div>
        </div>
        <span
          className="w-[30px] h-[28px] flex items-center justify-center"
          style={createBackgroundStyle(BG_IMAGES.QUEST_TOKEN)}
        ></span>
        <button
          className="button w-[60px] h-[32px] cursor-pointer flex items-center justify-center"
          style={createBackgroundStyle(BG_IMAGES.QUEST_TAKE_GREEN_BTN)}
        >
          Забрать
        </button>
      </div>
    );
  });

  return (
    <QuestModal>
      <div className="flex flex-col items-center justify-start h-full w-full p-4">
        <h1 className="text-2xl font-bold mb-4 text-white">Daily Quests</h1>
        <QuestHeader />

        <div className="flex-1 w-full overflow-auto">{quests}</div>
        <div className="flex flex-row justify-between items-center w-full h-20 px-2 my-5 gap-2">
          <span>До конца сезона осталось 36 дней</span>
          <button
            className="button w-30 h-15 cursor-pointer"
            style={createBackgroundStyle(BG_IMAGES.QUEST_TAKE_GREEN_BTN)}
          >
            Забрать все
          </button>
        </div>
      </div>
    </QuestModal>
  );
}
