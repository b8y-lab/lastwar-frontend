import Link from "next/link";

interface IHeroLink {
    id: string;
    url: string;
    mid?: string;
}

export default function HeroLink({id, url, mid}: IHeroLink)
{
    return (
        <Link href={url + '?hid=' + id + '&mid=' + mid} className="button w-1/3 h-50 flex items-center justify-around">
            Hero {id}
        </Link>
    );
}