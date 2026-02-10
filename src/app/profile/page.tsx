'use client';

import UserHeader from '@/app/profile/_components/UserHeader.tsx';
import { BackButton } from '@/components/ui/BackButton';
import { SettingsButton } from '@/components/ui/SettingsButton';
import { CONTAINER_CLASS } from '@/constants/layout';
import { BG_IMAGES, createBackgroundStyle } from '@/utils/styles';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-start h-screen w-full bg-black">
      <div
        className={`w-full ${CONTAINER_CLASS} flex flex-col items-center h-screen pt-5`}
        style={{
          ...createBackgroundStyle(BG_IMAGES.HERO_PARCHMENT_BG),
          backgroundSize: '175%',
        }}
      >
        {/* <UserHeader /> */}

        <div
          className={`relative w-full ${CONTAINER_CLASS} aspect-[450/770] mt-[40px] p-5`}
          style={createBackgroundStyle(BG_IMAGES.PROFILE_BG)}
        >
          <div className='absolute right-1 top-4 flex items-center gap-1'>
            <SettingsButton onClick={() => console.log('Settings clicked')} />
            <BackButton onClick={() => console.log('Back button')} />
          </div>
          <h3 className='text-center pt-4'>Профиль</h3>
          <div className="flex items-center gap-3 mt-15">
            <button className="button rounded-full w-35 h-30 inline-block ml-[0px!important] cursor-pointer" style={createBackgroundStyle(BG_IMAGES.PROFILE_AVATAR)}>
            </button>
            <div className='flex flex-col gap-2 flex-1/3'>
              <div className="flex items-center justify-center w-full h-15" style={createBackgroundStyle(BG_IMAGES.PROFILE_NICKNAME_BG)}>Name</div>
              <button className="inline-block w-full h-13 cursor-pointer" style={createBackgroundStyle(BG_IMAGES.PROFILE_CHANGE_NAME_BTN)}>Изменить ник</button>
            </div>
            <div className="w-45 h-26 flex flex-col items-center" style={createBackgroundStyle(BG_IMAGES.PROFILE_RATING_PLATE)}>
              <button className="w-full h-20">Rating Position</button>
              <button className="w-full h-20">Rating Points</button>
            </div>
          </div>

          <div className="pt-10">
            <button className="block w-full h-20 cursor-pointer" style={createBackgroundStyle(BG_IMAGES.PROFILE_CONNECT_WALLET_BTN)}>
              Connect Telegarm Wallet
            </button>
            <button className="button w-full py-3 h-14 mt-3" style={createBackgroundStyle(BG_IMAGES.PROFILE_REF_SYSTEM_BG)}>Referral Program</button>
            <div className="w-full flex flex-col justify-between h-72 mt-3 p-5" style={createBackgroundStyle(BG_IMAGES.PROFILE_INVITE_PLATE)}>
              <div>
                <h3 className='text-center'>Награда за каждого приглашенного друга!</h3>
                <div className='flex items-center justify-center gap-5 mt-5'>
                  <div className='flex flex-col gap-1 justify-center items-center'>
                    <p>💎</p>
                    <p style={{ color: 'orange' }}>10</p>
                  </div>
                  <p>Ты и твой друг получите награду как только он построит на базе свою первую лесопилку!</p>
                </div>
              </div>
              <button className='w-full max-w-[200px] h-19 mx-auto mb-3' style={createBackgroundStyle(BG_IMAGES.PROFILE_INVITE_BTN)}>Пригласить</button>
            </div>
            {/* <button className="button w-full py-15">Awards / Progress</button> */}
            {/*<Link href="/auth" className="button w-full py-5 flex items-center justify-around">Sign Out</Link>*/}
          </div>
        </div>
      </div>
    </div>
  );
}
