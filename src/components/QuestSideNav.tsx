import Image from "next/image";
import Link from "next/link";

export default function QuestSideNav()
{
    return (

        <div className="flex flex-col gap-5 top-15 left-2 items-center justify-around z-3 absolute">

            <Link href="/quest/day" className="flex items-center justify-around shadow-lg">
                <Image src="/assets/slot/menu/map.png" alt="" width={65} height={175} />
            </Link>
            
            <Link href="/quest/plot" className="flex items-center justify-center shadow-lg">
                <Image src="/assets/slot/menu/map.png" alt="" width={65} height={175} />
            </Link>
            
            <Link href="/#" className="flex items-center justify-center shadow-lg">
                <Image src="/assets/slot/menu/map.png" alt="" width={65} height={175} />
            </Link>
            
        </div>
    )
}