"use client";

import { messageData } from "@/data/db";
import { useState } from "react";
import Message from "./Message";

export default function MessageList() {
  const [messages, setMessages] = useState<MessageType[]>([...messageData]);

  return messages.map((message, index) => (
    <Message key={index} message={message} />
  ));
}
