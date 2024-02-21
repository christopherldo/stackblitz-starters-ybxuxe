import Header from "@/components/Header";
import InputField from "@/components/InputField";
import MessageList from "@/components/MessageList";
import SendButton from "@/components/SendButton";

export default function Home() {
  return (
    <div className="flex flex-col w-full max-w-sm border border-gray-200 rounded-lg overflow-hidden">
      <Header />
      <MessageList />
      <form className="flex items-center gap-4 border-t p-4 mx-4">
        <InputField />
        <SendButton />
      </form>
    </div>
  );
}
