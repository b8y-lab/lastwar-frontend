export default function Page() {
  return (
    <div className="flex flex-col items-center justify-start min-h-dvh w-full">
      <div className="w-full h-10 text-center leading-10 border-1 m-5">
        Promo Name
      </div>

      <div className="w-full">
        <div className="flex flex-row justify-around items-center w-full h-40">
          <button className="button w-1/3 h-40">Good 1</button>
          <button className="button w-1/3 h-40">Good 2</button>
          <button className="button w-1/3 h-40">Good 3</button>
        </div>

        <div className="flex flex-row justify-around items-center w-full h-40 my-5">
          <button className="button w-1/3 h-40">Good 4</button>
          <button className="button w-1/3 h-40">Good 5</button>
          <button className="button w-1/3 h-40">Good 6</button>
        </div>
      </div>

      <button className="button w-1/2 h-15 p-5 flex justify-around">
        10 TON
      </button>
    </div>
  );
}
