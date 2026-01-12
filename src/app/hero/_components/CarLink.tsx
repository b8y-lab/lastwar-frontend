import Link from "next/link";

interface ICarLink {
    id: string;
}

export default function CarLink({id}: ICarLink)
{
    return (
        <Link href={'/hero/car?id=' + id} className="button w-1/4 h-20 flex items-center justify-around">
            Car {id}
        </Link>
    );
}