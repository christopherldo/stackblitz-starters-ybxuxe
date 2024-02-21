import Link from "next/link";
import Avatar from "./Avatar";

interface HeaderProps {
  user?: UserType;
}

export default function Header({ user }: HeaderProps) {
  return (
    <header className="flex flex-col">
      <Link href="/" aria-label="Botão de retorno para o início.">
        <div className="flex bg-[#272e3f] p-4 text-white hover:underline">
          {"<-"} Retornar
        </div>
      </Link>
      <div className="flex items-center border-b p-4">
        <div className="flex space-x-4">
          <span className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full">
            <Avatar
              alt={`${user?.name} avatar.`}
              size="40"
              src={user?.avatar_url}
            />
          </span>
          <h1 className="text-xl font-bold">{user?.name}</h1>
        </div>
      </div>
    </header>
  );
}
