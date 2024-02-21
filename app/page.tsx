"use client";

import Message from "@/components/Message";
import SendButton from "@/components/SendButton";
import { messageData } from "@/data/db";
import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState<MessageType[]>([...messageData]);

  return (
    <div className="flex flex-col w-full max-w-sm border border-gray-200 rounded-lg overflow-hidden">
      <header className="flex items-center p-4 border-b">
        <div className="flex items-center space-x-4">
          <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
            <img
              alt="Logo"
              height="40"
              src="/logo.png"
              style={{ aspectRatio: "40/40", objectFit: "cover" }}
              width="40"
            />
          </span>
          <h1 className="text-xl font-bold">Mateus Mendes</h1>
        </div>
      </header>
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
      </div>
    </div>
  );
}
