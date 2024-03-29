"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Header from "@/components/Header";
import MessageForm from "@/components/MessageForm";
import MessageList from "@/components/MessageList";

import { usersData } from "@/data/db";

export default function UserChatPage({
  params,
}: {
  params: { username: string };
}) {
  const router = useRouter();

  const [messages, setMessages] = useState<MessageType[]>([]);
  const [user, setUser] = useState<UserType>();
  const [loading, setLoading] = useState<boolean>(true);

  const sendMessage = (message: string) => {
    setMessages([
      ...messages,
      {
        id: crypto.randomUUID(),
        user_id: "7552da7f-ae25-46ff-a1eb-baa0fa3270fd",
        time: new Date(),
        type: "sent",
        content: message,
      },
    ]);
  };

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
        setLoading(false);
      } else {
        router.replace("/");
      }
    };

    const filterMessagesFirstInit = (messages: MessageType[]) => {
      setMessages([...messages]);
    };

    const filterUserFirstInit = (user: UserType) => {
      setUser(user);
    };

    filterUserData();
  }, [params.username, router]);

  return (
    <div className="flex h-full w-full max-w-sm flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
      {!loading && (
        <>
          <Header user={user} />
          <MessageList messages={messages} user={user} />
          <MessageForm sendMessage={sendMessage} />
        </>
      )}
    </div>
  );
}
