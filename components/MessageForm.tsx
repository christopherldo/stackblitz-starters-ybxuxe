import { useState } from "react";

import InputField from "./InputField";
import SendButton from "./SendButton";

interface MessageFormProps {
  sendMessage: (message: string) => void;
}

export default function MessageForm({ sendMessage }: MessageFormProps) {
  const [inputMessage, setInputMessage] = useState<string>("");

  const handleSubmitMessage = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    if (inputMessage.trim()) sendMessage(inputMessage.trim());
    setInputMessage("");
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key == "Enter" && e.shiftKey == false) {
      e.preventDefault();
      handleSubmitMessage();
    }
  };

  return (
    <form
      className="mx-4 flex items-center gap-4 border-t p-4"
      onSubmit={handleSubmitMessage}
    >
      <InputField
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        onKeyDown={onKeyDown}
      />
      <SendButton />
    </form>
  );
}
