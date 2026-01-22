export default function Page() {
  return (
    <div className="flex flex-col items-center justify-start h-screen w-full">
      <div className="flex flex-row justify-around items-center w-full h-20 my-10">
        <button className="button w-20 h-20">Icon</button>
        <button className="button w-20 h-20 rounded-full">
          <span>Progress</span>
        </button>
        <button className="button w-20 h-20">Icon</button>
        <button className="button w-20 h-20">Icon</button>
      </div>

      <div className="flex flex-row justify-around items-center w-full h-20 my-10">
        <button className="button w-20 h-20">Icon</button>
        <button className="button w-20 h-20 rounded-full relative">
          <span className="absolute w-0 h-20 border-l-1 top-[-105%] left-1/2"></span>
          <span>Progress</span>
        </button>
        <button className="button w-20 h-20">Icon</button>
        <button className="button w-20 h-20">Icon</button>
      </div>

      <div className="flex flex-row justify-around items-center w-full h-20 my-10">
        <button className="button w-20 h-20">Icon</button>
        <button className="button w-20 h-20 rounded-full relative">
          <span className="absolute w-0 h-20 border-l-1 top-[-105%] left-1/2"></span>
          <span>Progress</span>
        </button>
        <button className="button w-20 h-20">Icon</button>
        <button className="button w-20 h-20">Icon</button>
      </div>

      <button className="button w-full h-15 p-5">
        Buy Seasonal Access for 10TON
      </button>
    </div>
  );
}
