import { UserCircleIcon } from '@heroicons/react/24/outline';

export default function UserHeader() {
  return (
    <div className="w-full flex flex-row top-0 items-center justify-between pl-2 border-b">
      <UserCircleIcon className="size-10 text-white" />
      <span className="button px-10 py-1">Enemy Name</span>

      <button className="button px-10 py-1">Balance</button>
    </div>
  );
}
