export default function Page() {
  return (
    <div className="flex flex-col items-center justify-start min-h-dvh w-full">
      <div className="w-full flex flex-row items-center justify-between py-5">
        <button className="button w-1/2 h-10 inline-block">
          Health Points 20/50
        </button>
        <button className="button w-1/2 h-10 inline-block">
          Enemy HP 130/200
        </button>
      </div>

      <div className="w-full h-20 flex flex-row items-center justify-around py-5">
        <button className="button w-full h-20">Combat Logs</button>
      </div>

      <div className="w-full flex flex-row items-center justify-around pt-5">
        <button className="button w-1/2 h-50 inline-block">Hero 3D</button>
        <button className="button w-1/2 h-50 inline-block">Enemy 3D</button>
      </div>

      <div className="w-full flex flex-row items-center justify-between">
        <div className="w-2/3 flex flex-col items-center justify-between pl-3">
          <div className="w-full flex flex-row items-center justify-around py-2">
            <button className="button w-30 h-10">Att. Type</button>
            <button className="button w-10 h-10 rounded-full m-[2px!important]">
              1
            </button>
            <button className="button w-10 h-10 rounded-full m-[2px!important]">
              2
            </button>
            <button className="button w-10 h-10 rounded-full m-[2px!important]">
              3
            </button>
            <button className="button w-10 h-10 rounded-full m-[2px!important]">
              4
            </button>
          </div>

          <div className="w-full flex flex-row items-center justify-around py-2">
            <button className="button w-30 h-10">Def. Type</button>
            <button className="button w-10 h-10 rounded-full m-[2px!important]">
              1
            </button>
            <button className="button w-10 h-10 rounded-full m-[2px!important]">
              2
            </button>
            <button className="button w-10 h-10 rounded-full m-[2px!important]">
              3
            </button>
            <button className="button w-10 h-10 rounded-full m-[2px!important]">
              4
            </button>
          </div>
        </div>

        <div className="w-1/3 flex flex-col items-center justify-around py-5">
          <button className="button w-20 h-20 rounded-full">Skill</button>
          <button className="button w-20 h-20 rounded-full">Strike</button>
        </div>
      </div>
    </div>
  );
}
