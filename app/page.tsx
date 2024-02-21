"use client";

import Header from "@/components/Header";
import InputField from "@/components/InputField";
import Message from "@/components/Message";
import SendButton from "@/components/SendButton";
import { messageData } from "@/data/db";
import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState<MessageType[]>([...messageData]);

  return (
    <div className="flex flex-col w-full max-w-sm border border-gray-200 rounded-lg overflow-hidden">
      <Header />
      <div className="flex flex-col p-4 overflow-hidden">
        <Message message={messages[0]} />
        <Message message={messages[1]} />
        <Message message={messages[2]} />
        <Message message={messages[0]} />
        <Message message={messages[1]} />
        <Message message={messages[2]} />
        <Message message={messages[0]} />
        <Message message={messages[1]} />
        <Message message={messages[2]} />
        <form className="flex items-center gap-4 border-t p-4">
          <InputField />
          <SendButton />
        </form>
      </div>
    </div>
  );
}
