import Avatar from "./Avatar";

interface MessageProps {
  message: MessageType;
  user?: UserType;
}

export default function Message({ message, user }: MessageProps) {
  return message.type === "sent" ? (
    <div className="my-2 flex flex-col gap-4">
      <div className="flex max-w-[85%] rounded-lg bg-gray-100 p-4 text-sm">
        {message.content}
      </div>
    </div>
  ) : (
    <div className="my-2 flex items-center gap-4">
      <Avatar alt={`${user?.name} avatar.`} size={30} src={user?.avatar_url} />
      <div className="flex-1">
        <div className="rounded-lg border p-4 text-sm">{message.content}</div>
      </div>
    </div>
  );
}
