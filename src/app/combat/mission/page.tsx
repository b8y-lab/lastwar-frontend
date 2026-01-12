'use server'

import TitleHeader from "@/components/TitleHeader.tsx";
import Link from "next/link";

import HeroModal from "@/app/hero/_components/HeroModal.tsx";

interface IMissionProps {
    searchParams: Promise<{
        mid?: string,
        hid?: string,
        fid?: string
    }>
}

export default async function Page({searchParams}: IMissionProps)
{
    const { mid, hid, fid } = await searchParams;
    
    return (

        <div className="flex flex-col items-center justify-start h-screen w-full">

            <TitleHeader title={"Mission #" + mid} />


            <div className="w-full flex flex-row items-center justify-around pt-5">

                <HeroModal />

                <div className="w-1/3 h-50 flex items-center justify-around border-1 m-3">
                    Foe Hero <br/>(Hero #{fid})
                </div>
                
            </div>

            <div className="justify-around w-full flex flex-col items-center px-10">
                <div className="justify-around w-full flex flex-row items-center py-10">
                    <button className="button w-full py-15 m-[0!important]">Awards</button>
                </div>
    
                <Link href="/combat/round" className="button w-full py-5 flex items-center justify-around">
                    Start
                </Link>
            </div>

        </div>
    )
}