import { Dispatch, SetStateAction } from "react";

import InputField from "./InputField";
import SendButton from "./SendButton";

interface MessageFormProps {
  setMessages: Dispatch<SetStateAction<MessageType[]>>;
}

export default function MessageForm({ setMessages }: MessageFormProps) {
  return (
    <form className="flex items-center gap-4 border-t p-4 mx-4">
      <InputField />
      <SendButton />
    </form>
  );
}
