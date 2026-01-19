import { UserCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function UserHeader() {
  return (
    <div className="w-full top-0">
      <div className="w-full h-15 fixed flex flex-row top-0 items-center justify-around z-1 pl-2 bg-black border-b">
        <Link href="/profile">
          <UserCircleIcon className="size-8" />
        </Link>

        <button className="button w-1/4 py-1">Balance1</button>
        <button className="button w-1/4 py-1">Balance2</button>
        <button className="button w-1/4 py-1">Balance3</button>
      </div>

      <div className="w-full top-0 h-15"></div>
    </div>
  );
}
