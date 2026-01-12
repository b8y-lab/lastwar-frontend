import { ReactNode } from "react";
import TitleHeader from "@/components/TitleHeader.tsx";
import QuestHeader from "@/app/quest/_components/QuestHeader.tsx";
import { headers } from 'next/headers';

export default async function QuestLayout({ children }: { children: ReactNode }) 
{
    const headersList = await headers();
    const referer = headersList.get('referer') as string;
    
    return (
        <div className="flex flex-col items-center justify-start h-screen w-full">

            <TitleHeader title="Weekly Quests" back={referer} />
            <QuestHeader />

            { children }

        </div>
    );
}