import Avatar from "./Avatar";

interface HeaderProps {
  user: UserType | null;
}

export default function Header({ user }: HeaderProps) {
  return (
    <header className="flex items-center p-4 border-b">
      <div className="flex items-center space-x-4">
        <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
          <Avatar
            alt={`${user?.name} avatar.`}
            size="40"
            src={user?.avatar_url}
          />
        </span>
        <h1 className="text-xl font-bold">{user?.name}</h1>
      </div>
    </header>
  );
}
