'use client';

import { BackButton } from '@/components/ui/BackButton';
import { SettingsButton } from '@/components/ui/SettingsButton';
import { BG_IMAGES, createBackgroundStyle } from '@/utils/styles';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-start min-h-dvh w-full bg-black">
      <div
        className="w-full max-w-[460px] mx-auto flex flex-col items-center min-h-dvh pt-5"
        style={{
          ...createBackgroundStyle(BG_IMAGES.HERO_PARCHMENT_BG),
          backgroundSize: '175%',
        }}
      >
        <div
          className="relative w-full max-w-[450px] mt-[40px] p-[5%] pb-[7%]"
          style={{
            ...createBackgroundStyle(BG_IMAGES.PROFILE_BG),
            backgroundSize: '100% 100%',
          }}
        >
          <div className="absolute right-4 top-3 flex items-center gap-1">
            <SettingsButton onClick={() => console.log('Settings clicked')} />
            <BackButton onClick={() => console.log('Back button')} />
          </div>
          <h3 className="text-center pt-1">Профиль</h3>

          <div className="flex items-center gap-[2%] mt-[12%]">
            <button
              className="button rounded-full w-[30%] aspect-square shrink-0 cursor-pointer"
              style={createBackgroundStyle(BG_IMAGES.PROFILE_AVATAR)}
            />
            <div className="flex flex-col gap-[5%] flex-1 min-w-0">
              <div
                className="flex items-center justify-center w-full aspect-[2/1]"
                style={createBackgroundStyle(BG_IMAGES.PROFILE_NICKNAME_BG)}
              >
                Name
              </div>
              <button
                className="w-full aspect-[290/126] cursor-pointer"
                style={createBackgroundStyle(BG_IMAGES.PROFILE_CHANGE_NAME_BTN)}
              >
                Изменить ник
              </button>
            </div>
            <div
              className="w-[38%] aspect-[416/278] shrink-0 flex flex-col items-center"
              style={createBackgroundStyle(BG_IMAGES.PROFILE_RATING_PLATE)}
            >
              <button className="w-full flex-1">Rating Position</button>
              <button className="w-full flex-1">Rating Points</button>
            </div>
          </div>

          <div className="pt-[8%] flex flex-col gap-[2.5%]">
            <button
              className="block w-full aspect-[1050/202] cursor-pointer"
              style={createBackgroundStyle(BG_IMAGES.PROFILE_CONNECT_WALLET_BTN)}
            >
              Connect Telegram Wallet
            </button>
            <button
              className="button w-full aspect-[1055/140] mt-3"
              style={createBackgroundStyle(BG_IMAGES.PROFILE_REF_SYSTEM_BG)}
            >
              Referral Program
            </button>
            <div
              className="w-full flex flex-col justify-between p-[5%] mt-3"
              style={{
                ...createBackgroundStyle(BG_IMAGES.PROFILE_INVITE_PLATE),
                backgroundSize: '100% 100%',
              }}
            >
              <div>
                <h3 className="text-center">
                  Награда за каждого приглашенного друга!
                </h3>
                <div className="flex items-center justify-center gap-5 mt-5">
                  <div className="flex flex-col gap-1 justify-center items-center shrink-0">
                    <p>💎</p>
                    <p style={{ color: 'orange' }}>10</p>
                  </div>
                  <p>
                    Ты и твой друг получите награду как только он построит на
                    базе свою первую лесопилку!
                  </p>
                </div>
              </div>
              <button
                className="w-[45%] aspect-[530/202] mx-auto mt-3"
                style={createBackgroundStyle(BG_IMAGES.PROFILE_INVITE_BTN)}
              >
                Пригласить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
