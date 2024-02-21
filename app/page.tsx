"use client";

import Header from "@/components/Header";
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
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 min-w-0"
            placeholder="Digite sua mensagem aqui..."
          />
          <SendButton />
        </form>
        H
      </div>
    </div>
  );
}
