import { ReactNode } from "react";
import ShopHeader from "@/app/shop/_components/ShopHeader.tsx";
import UserHeader from "@/app/profile/_components/UserHeader.tsx";
import FooterNav from "@/components/FooterNav.tsx";

export default function QuestLayout({ children }: { children: ReactNode })
{
    return (
        <div className="flex flex-col items-center justify-start h-screen w-full">

            <UserHeader />
            <ShopHeader />

            { children }

            <FooterNav />

        </div>
    );
}