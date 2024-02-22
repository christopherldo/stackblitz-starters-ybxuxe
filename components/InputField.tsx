import { Dispatch, SetStateAction } from "react";

interface InputFieldProps {
  inputMessage: string;
  setInputMessage: Dispatch<SetStateAction<string>>;
  onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

export default function InputField({
  inputMessage,
  setInputMessage,
  onKeyDown,
}: InputFieldProps) {
  return (
    <textarea
      className="flex h-10 w-full min-w-0 flex-1 resize-none rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      placeholder="Digite sua mensagem aqui..."
      value={inputMessage}
      onChange={(e) => setInputMessage(e.target.value)}
      onKeyDown={onKeyDown}
    />
  );
}
