'use client';

import { useState } from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { Cog6ToothIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { createBackgroundStyle, BG_IMAGES } from '@/utils/styles';

interface ToggleButtonProps {
  isEnabled: boolean;
  onToggle: () => void;
}

function ToggleButton({ isEnabled, onToggle }: ToggleButtonProps) {
  return (
    <div className="flex flex-row items-center justify-center gap-4">
      <button
        onClick={() => !isEnabled && onToggle()}
        className="w-[117px] h-[50px] button flex items-center justify-center cursor-pointer"
        style={createBackgroundStyle(
          isEnabled ? BG_IMAGES.SETTINGS_GREEN_BTN : BG_IMAGES.SETTINGS_GRAY_BTN
        )}
      >
        Вкл
      </button>
      <button
        onClick={() => isEnabled && onToggle()}
        className="w-[117px] h-[50px] button flex items-center justify-center cursor-pointer"
        style={createBackgroundStyle(
          !isEnabled ? BG_IMAGES.SETTINGS_GREEN_BTN : BG_IMAGES.SETTINGS_GRAY_BTN
        )}
      >
        Выкл
      </button>
    </div>
  );
}

export default function SettingsModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [musicEnabled, setMusicEnabled] = useState(true);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="cursor-pointer">
        <Cog6ToothIcon className="size-6 mt-1" />
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex items-center justify-center">
          <DialogPanel
            className="w-[310px] h-[310px] relative p-3.5"
            style={createBackgroundStyle(BG_IMAGES.SETTINGS_BG)}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-2 top-3 cursor-pointer"
            >
              <Image
                width={40}
                height={40}
                src="/assets/settings/close-btn.svg"
                alt=""
              />
            </button>

            <DialogTitle className="text-[20px] text-center">
              Настройки
            </DialogTitle>

            <div className="flex flex-row items-center justify-around mt-6.5">
              Звуки
            </div>
            <div className="mt-3">
              <ToggleButton
                isEnabled={soundEnabled}
                onToggle={() => setSoundEnabled(!soundEnabled)}
              />
            </div>

            <div className="flex flex-row items-center justify-center gap-4 mt-6">
              Музыка
            </div>
            <div className="mt-3">
              <ToggleButton
                isEnabled={musicEnabled}
                onToggle={() => setMusicEnabled(!musicEnabled)}
              />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
