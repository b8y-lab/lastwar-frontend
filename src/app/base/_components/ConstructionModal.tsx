'use client';

import { useState } from 'react';
import BaseModal from '@/components/ui/BaseModal';

export default function ConstructionModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="button w-1/3 h-40 flex justify-around items-center"
      >
        Under
        <br />
        Construction
      </button>

      <BaseModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={
          <>
            Facility
            <br />
            Level 1 &rarr; 2
          </>
        }
      >
        <div className="flex flex-row justify-around items-center w-full h-30 m-5">
          Remaining construction time: 47 min
        </div>

        <div className="flex flex-col justify-between items-center w-full h-52 p-5 mt-20">
          <div className="flex flex-col justify-around items-center w-full h-35 border-1 p-5">
            <div className="flex flex-row justify-around items-center w-full h-15">
              <span className="border-1 p-2">999 Gold</span>
            </div>
            <button className="button flex flex-col justify-around items-center w-1/2 h-15">
              Accelerate
            </button>
          </div>
        </div>
      </BaseModal>
    </>
  );
}
