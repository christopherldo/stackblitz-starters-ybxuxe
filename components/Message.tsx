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
      <img
        alt="Avatar"
        className="rounded-full"
        height="30"
        src="/logo.png"
        style={{ aspectRatio: "40/40", objectFit: "cover" }}
        width="30"
      />
      <div className="flex-1">
        <div className="rounded-lg border p-4 text-sm">{message.content}</div>
      </div>
    </div>
  );
}
