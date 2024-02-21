import Header from "@/components/Header";
import MessageForm from "@/components/MessageForm";
import MessageList from "@/components/MessageList";

export default function Home() {
  return (
    <div className="flex flex-col w-full max-w-sm border border-gray-200 rounded-lg overflow-hidden">
      <Header />
      <MessageList />
      <MessageForm />
    </div>
  );
}
