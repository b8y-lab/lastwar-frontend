import UserHeader from '@/app/profile/_components/UserHeader.tsx';
import { CONTAINER_CLASS } from '@/constants/layout';
import { BG_IMAGES, createBackgroundStyle } from '@/utils/styles';

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
          className={`w-full ${CONTAINER_CLASS} aspect-[450/770] mt-[40px]`}
          style={createBackgroundStyle(BG_IMAGES.PROFILE_BG)}
        >
          <div className="justify-between w-full flex flex-row items-center">
            <button className="button rounded-full w-40 h-40 inline-block ml-[0px!important]">
              Avatar
            </button>
            <button className="button w-60 h-30 inline-block">Name</button>
            <div className="w-40 flex flex-col items-center">
              <button className="button w-full h-20">Rating Position</button>
              <button className="button w-full h-20">Rating Points</button>
            </div>
          </div>

          <div className="justify-between w-full flex flex-col items-center">
            <button className="button w-full py-15">
              Connect Telegarm Wallet
            </button>
            <button className="button w-full py-3">Referral Program</button>
            <button className="button w-full py-15">
              Get Reward for Invited Friend
            </button>
            <button className="button w-full py-15">Awards / Progress</button>
            {/*<Link href="/auth" className="button w-full py-5 flex items-center justify-around">Sign Out</Link>*/}
          </div>
        </div>
      </div>
    </div>
  );
}
