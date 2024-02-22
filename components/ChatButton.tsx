import Link from "next/link";
import Avatar from "./Avatar";

interface ChatButtonProps {
  user: UserType;
}

export default function ChatButton({ user }: ChatButtonProps) {
  return (
    <Link
      href={`user/${user.username}`}
      aria-label={`Iniciar chat com ${user.name}`}
    >
      <div className="flex items-center border-b-[1px] border-[#272e3f] bg-slate-100 p-4 transition-all hover:bg-slate-200">
        <Avatar alt={`${user.name} avatar.`} size={50} src={user.avatar_url} />
        <div className="ml-4 border-l-2 border-[#272e3f] pl-4">{user.name}</div>
      </div>
    </Link>
  );
}
