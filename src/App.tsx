import UserHeader from "@/app/profile/_components/UserHeader.tsx";
import QuestSideNav from "@/components/QuestSideNav.tsx";
import PromoSideNav from "@/components/PromoSideNav.tsx";
import SlotMachine from "@/components/SlotMachine.tsx";
import FooterNav from "@/components/FooterNav.tsx";

export default function App()
{
    return (
        <div id="app" className="flex flex-col justify-start items-center">
            <UserHeader />
            <QuestSideNav />
            <PromoSideNav />
            <SlotMachine />
            <FooterNav />
        </div>
    );
}