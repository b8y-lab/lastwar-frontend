import NewFacilityLink from "@/app/base/_components/NewFacilityLink.tsx";
import UserHeader from "@/app/profile/_components/UserHeader.tsx";
import FooterNav from "@/components/FooterNav.tsx";
import Link from "next/link";
import AcademyModal from "@/app/base/_components/AcademyModal.tsx";
import FactoryModal from "@/app/base/_components/FactoryModal.tsx";
import ForehouseModal from "@/app/base/_components/ForehouseModal.tsx";
import MillModal from "@/app/base/_components/MillModal.tsx";
import DestroyedModal from "@/app/base/_components/DestroyedModal.tsx";
import ConstructionModal from "@/app/base/_components/ConstructionModal.tsx";
import QuestSideNav from "@/components/QuestSideNav.tsx";
import PromoSideNav from "@/components/PromoSideNav.tsx";

export default function Page()
{
    return (

        <div className="flex flex-col items-center h-screen w-full">

            <UserHeader />
            <QuestSideNav />
            <PromoSideNav />
            
            <br/>

            <div className="w-full flex flex-row justify-between items-center">

                <ConstructionModal />
                <ForehouseModal />
                <FactoryModal />

            </div>

            <div className="w-full flex flex-row justify-between items-center">

                <FactoryModal />
                <DestroyedModal />
                <AcademyModal />

            </div>

            <div className="w-full flex flex-row justify-between items-center">

                <MillModal />
                
                <NewFacilityLink />
                <NewFacilityLink />

            </div>

            <FooterNav />

        </div>
    )
}