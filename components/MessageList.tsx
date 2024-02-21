import Image from "next/image";
import Message from "./Message";

interface MessageListProps {
  messages: MessageType[];
  user?: UserType;
}

export default function MessageList({ messages, user }: MessageListProps) {
  return (
    <div className="flex flex-1 flex-col overflow-y-auto p-4">
      {messages.map((message) => (
        <Message key={message.id} message={message} user={user} />
      ))}
      {messages.length === 0 && (
        <div className="flex flex-1 flex-col items-center justify-center gap-4">
          <Image
            src="/assets/sad-face.png"
            alt="Rosto triste"
            width={100}
            height={100}
            className="select-none opacity-50"
            draggable="false"
          />
          <span className="w-52 text-center font-light">
            Parece que ainda não há mensagens por aqui
          </span>
        </div>
      )}
    </div>
  );
}
