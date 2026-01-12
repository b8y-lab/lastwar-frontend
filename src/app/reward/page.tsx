import { AcademicCapIcon, BoltIcon, BuildingLibraryIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Page()
{
    return (

        <div className="flex flex-col items-center justify-start h-screen w-full">

            <div className="w-full flex flex-row items-center justify-center pt-10 pb-5">
                <button className="button w-60 h-60 rounded-full inline-block">
                    <b className="text-xl">Huge Win!</b><br/><br/>
                    Reward<br/>Icon
                </button>
            </div>

            <div className="justify-around w-3/4 flex flex-row items-center border py-5">
                <div className="w-1/3 h-20 flex flex-col justify-around items-center">
                    <AcademicCapIcon className="size-10" /><br/>
                    <span>10</span>
                </div>
                <div className="w-1/3 h-20 flex flex-col justify-around items-center">
                    <BuildingLibraryIcon className="size-10" /><br/>
                    <span>30</span>
                </div>
                <div className="w-1/3 h-20 flex flex-col justify-around items-center">
                    <BoltIcon className="size-10" /><br/>
                    <span>20</span>
                </div>
            </div>

            <Link href="/" className="button w-3/4 py-5 flex justify-around items-center">Get Reward</Link>

        </div>
    )
}