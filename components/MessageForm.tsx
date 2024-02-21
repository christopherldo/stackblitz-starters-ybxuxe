import { Dispatch, SetStateAction, useState } from "react";

import InputField from "./InputField";
import SendButton from "./SendButton";

interface MessageFormProps {
  sendMessage: (message: string) => void;
}

export default function MessageForm({ sendMessage }: MessageFormProps) {
  const [inputMessage, setInputMessage] = useState<string>("");

  const handleSubmitMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputMessage) sendMessage(inputMessage);
    setInputMessage("");
  };

  return (
    <form
      className="mx-4 flex items-center gap-4 border-t p-4"
      onSubmit={handleSubmitMessage}
    >
      <InputField
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
      />
      <SendButton />
    </form>
  );
}
