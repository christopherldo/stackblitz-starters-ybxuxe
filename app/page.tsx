"use client";

import { useState } from "react";

import Header from "@/components/Header";
import MessageForm from "@/components/MessageForm";
import MessageList from "@/components/MessageList";

import { messageData } from "@/data/db";

export default function Home() {
  const [messages, setMessages] = useState<MessageType[]>([...messageData]);
  const [user, setUser] = useState<UserType | null>(null);

  return (
    <div className="flex flex-col w-full max-w-sm border border-gray-200 rounded-lg overflow-hidden">
      <Header user={user} />
      <MessageList messages={messages} />
      <MessageForm setMessages={setMessages} />
    </div>
  );
}
