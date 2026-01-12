import UserHeader from "@/app/profile/_components/UserHeader.tsx";
import TitleHeader from "@/components/TitleHeader.tsx";

export default function Page()
{
    return (

        <div className="flex flex-col items-center h-screen w-full">

            <UserHeader />
            <TitleHeader title="New Facility" />

            <div className="w-full flex flex-row justify-between items-center h-50">

                <button className="button w-1/3 h-42 ml-[0!important]">Facility <br/>Image</button>

                <div className="w-2/3 flex flex-col justify-between items-center">
                    
                    <div className="w-full h-20 flex flex-col justify-around items-center border-1 mb-2">
                        Facility Description
                    </div>
                    
                    <div className="w-full h-20 flex flex-col justify-around items-center border-1">
                        <span>Cost1 / Cost2</span>
                        <button className="button w-3/4 h-8">Build</button>
                    </div>
                </div>

            </div>

            <div className="w-full flex flex-row justify-between items-center h-50">

                <button className="button w-1/3 h-42 ml-[0!important]">Facility <br/>Image</button>

                <div className="w-2/3 flex flex-col justify-between items-center">

                    <div className="w-full h-20 flex flex-col justify-around items-center border-1 mb-2">
                        Facility Description
                    </div>

                    <div className="w-full h-20 flex flex-col justify-around items-center border-1">
                        <span>Cost1 / Cost2</span>
                        <button className="button w-3/4 h-8">Build</button>
                    </div>
                </div>

            </div>

            <div className="w-full flex flex-row justify-between items-center h-50">

                <button className="button w-1/3 h-42 ml-[0!important]">Facility <br/>Image</button>

                <div className="w-2/3 flex flex-col justify-between items-center">

                    <div className="w-full h-20 flex flex-col justify-around items-center border-1 mb-2">
                        Facility Description
                    </div>

                    <div className="w-full h-20 flex flex-col justify-around items-center border-1">
                        <span>Cost1 / Cost2</span>
                        <button className="button w-3/4 h-8">Build</button>
                    </div>
                </div>

            </div>

            <div className="w-full flex flex-row justify-between items-center h-50">

                <button className="button w-1/3 h-42 ml-[0!important]">Facility <br/>Image</button>

                <div className="w-2/3 flex flex-col justify-between items-center">

                    <div className="w-full h-20 flex flex-col justify-around items-center border-1 mb-2">
                        Facility Description
                    </div>

                    <div className="w-full h-20 flex flex-col justify-around items-center border-1">
                        <span>Cost1 / Cost2</span>
                        <button className="button w-3/4 h-8">Build</button>
                    </div>
                </div>

            </div>


        </div>
    )
}