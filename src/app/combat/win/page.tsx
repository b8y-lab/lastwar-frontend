import TitleHeader from "@/components/TitleHeader.tsx";

export default function Page()
{
    return (

        <div className="flex flex-col items-center justify-start h-screen w-full">

            <TitleHeader title="Win" />
            
            <div className="w-full flex flex-row items-center justify-center py-15">
                <button className="button w-1/2 h-60 inline-block">Hero Progress</button>
            </div>

            <div className="justify-around w-full flex flex-row items-center py-15">
                <button className="button w-1/2 py-15">Rewards</button>
            </div>

            <button className="button w-full py-5">Get Reward</button>

        </div>
    )
}