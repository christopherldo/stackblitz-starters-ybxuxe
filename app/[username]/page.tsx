"use client";

import { useEffect, useState } from "react";

import Header from "@/components/Header";
import MessageForm from "@/components/MessageForm";
import MessageList from "@/components/MessageList";

import { usersData } from "@/data/db";

export default function UserChatPage({
  params,
}: {
  params: { username: string };
}) {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    const filterUserData = () => {
      const userData = usersData[params.username];

      if (userData) {
        const userMessages = userData.messages;

        filterMessagesFirstInit(userMessages);
        filterUserFirstInit({
          ...userData,
          username: params.username,
        });
      }
    };

    const filterMessagesFirstInit = (messages: MessageType[]) => {
      setMessages([...messages]);
    };

    const filterUserFirstInit = (user: UserType) => {
      setUser(user);
    };

    filterUserData();
  }, []);

  return (
    <div className="flex flex-col w-full max-w-sm border border-gray-200 rounded-lg overflow-hidden">
      <Header user={user} />
      <MessageList messages={messages} user={user} />
      <MessageForm setMessages={setMessages} />
    </div>
  );
}
