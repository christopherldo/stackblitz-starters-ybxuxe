import Message from "./Message";

interface MessageListProps {
  messages: MessageType[];
  user?: UserType;
}

export default function MessageList({ messages, user }: MessageListProps) {
  return (
    <div className="p-4">
      {messages.map((message) => (
        <Message key={message.id} message={message} user={user} />
      ))}
    </div>
  );
}
