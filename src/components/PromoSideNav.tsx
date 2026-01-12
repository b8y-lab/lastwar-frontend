import PromoModal from "@/app/shop/_components/PromoModal.tsx";
import BoostModal from "@/app/shop/_components/BoostModal.tsx";

export default function PromoSideNav()
{
    return (

        <div className="w-10 h-45 flex flex-col top-15 right-2 items-center justify-around z-1 absolute bg-black">

            <div className="border w-full h-10 m-2 flex justify-around items-center"><PromoModal /></div>
            <div className="border w-full h-10 m-2 flex justify-around items-center"><PromoModal /></div>
            <div className="border w-full h-10 m-2 flex justify-around items-center"><BoostModal /></div>

        </div>
    )
}