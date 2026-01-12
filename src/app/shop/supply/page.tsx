export default function Page()
{
    return (

        <div className="flex flex-col items-center justify-start h-screen w-full">

            <div className="w-full h-10 text-center leading-10 border-1 mt-5">Diamonds</div>

            <div className="flex flex-row justify-around items-center w-full h-40 mt-5">
                <button className="button w-1/3 h-40">Good</button>
                <button className="button w-1/3 h-40">Good</button>
                <button className="button w-1/3 h-40">Good</button>
            </div>

            <div className="flex flex-row justify-around items-center w-full h-40 mt-5">
                <button className="button w-1/3 h-40">Good</button>
                <button className="button w-1/3 h-40">Good</button>
                <button className="button w-1/3 h-40">Good</button>
            </div>

            <div className="w-full h-10 text-center leading-10 border-1 mt-5">Misc</div>

            <div className="flex flex-row justify-around items-center w-full h-40 mt-5">
                <button className="button w-1/3 h-40">Good</button>
                <button className="button w-1/3 h-40">Good</button>
                <button className="button w-1/3 h-40">Good</button>
            </div>

        </div>
    )
}