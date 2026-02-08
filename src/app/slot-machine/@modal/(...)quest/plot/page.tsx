'use client';

import { QuestModal } from '@/app/slot-machine/_components/QuestModal.tsx';
import QuestHeader from '@/app/quest/_components/QuestHeader.tsx';

export default function QuestPlotModal() {
  return (
    <QuestModal>
      <div className="flex flex-col items-center justify-start h-full w-full p-4">
        <h1 className="text-2xl font-bold mb-4 text-white">Story Quests</h1>
        <QuestHeader />

        <div className="flex-1 w-full overflow-auto">
          <div className="flex flex-col justify-between items-center w-full">
            <div className="flex flex-row text-[16px] justify-around items-center w-full h-15 mt-5 mb-2">
              <b>Economic Campaign</b>
            </div>

            <div className="flex flex-row justify-between items-center w-full h-15 border-t pl-5 my-2">
              <span className="w-15">Economic Quest</span>
              <span className="border-1 px-5 w-35">Progress 3/5</span>
              <span>Icon</span>
              <button className="button w-20 h-10">Get</button>
            </div>

            <div className="flex flex-row justify-between items-center w-full h-15 border-t pl-5 my-2">
              <span className="w-15">Economic Quest</span>
              <span className="border-1 px-5 w-35">Progress 3/5</span>
              <span>Icon</span>
              <button className="button w-20 h-10">Get</button>
            </div>
          </div>

          <div className="flex flex-col justify-between items-center w-full">
            <div className="flex flex-row text-[16px] justify-around items-center w-full h-15 mt-5 mb-2">
              <b>War Campaign</b>
            </div>

            <div className="flex flex-row justify-between items-center w-full h-15 border-t pl-5 my-2">
              <span className="w-15">War Quest</span>
              <span className="border-1 px-5 w-35">Progress 3/5</span>
              <span>Icon</span>
              <button className="button w-20 h-10">Get</button>
            </div>

            <div className="flex flex-row justify-between items-center w-full h-15 border-t pl-5 my-2">
              <span className="w-15">War Quest</span>
              <span className="border-1 px-5 w-35">Progress 3/5</span>
              <span>Icon</span>
              <button className="button w-20 h-10">Get</button>
            </div>
          </div>

          <div className="flex flex-col justify-between items-center w-full">
            <div className="flex flex-row text-[16px] justify-around items-center w-full h-15 mt-5 mb-2">
              <b>Social Campaign</b>
            </div>

            <div className="flex flex-row justify-between items-center w-full h-15 border-t pl-5 my-2">
              <span className="w-15">Social Quest</span>
              <span className="border-1 px-5 w-35">Progress 3/5</span>
              <span>Icon</span>
              <button className="button w-20 h-10">Get</button>
            </div>

            <div className="flex flex-row justify-between items-center w-full h-15 border-t pl-5 my-2">
              <span className="w-15">Social Quest</span>
              <span className="border-1 px-5 w-35">Progress 3/5</span>
              <span>Icon</span>
              <button className="button w-20 h-10">Get</button>
            </div>
          </div>
        </div>
      </div>
    </QuestModal>
  );
}
