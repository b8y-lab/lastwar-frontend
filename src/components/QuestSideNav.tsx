import Link from "next/link";

export default function QuestSideNav()
{
    return (

        <div className="w-10 h-45 flex flex-col top-15 left-2 items-center justify-around z-1 absolute bg-black">

            <Link href="/quest/day" className="button w-full h-15 flex items-center justify-around">
                Qsts
            </Link>
            
            <Link href="/quest/plot" className="button w-full h-15 flex items-center justify-around">
                Plot
            </Link>
            
            <Link href="/#" className="button w-full h-15 flex items-center justify-around">
                Mnpl
            </Link>
            
        </div>
    )
}