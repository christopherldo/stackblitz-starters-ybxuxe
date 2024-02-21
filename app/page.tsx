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
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
        <form className="flex items-center gap-4 border-t p-4">
          <InputField />
          <SendButton />
        </form>
      </div>
    </div>
  );
}
