import Avatar from "./Avatar";

interface MessageProps {
  message: MessageType;
}

export default function Message({ message }: MessageProps) {
  return message.type === "sent" ? (
    <div className="flex flex-col gap-4 my-2">
      <div className="rounded-lg bg-gray-100 p-4 text-sm max-w-[85%] self-start">
        {message.content}
      </div>
    </div>
  ) : (
    <div className="flex items-center gap-4 my-2">
      <Avatar
        alt={message.user.name + " avatar."}
        size="30"
        src={message.user.avatar_url}
      />
      <div className="flex-1">
        <div className="rounded-lg border p-4 text-sm">{message.content}</div>
      </div>
    </div>
  );
}
