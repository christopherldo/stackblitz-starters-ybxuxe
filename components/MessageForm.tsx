import InputField from "./InputField";
import SendButton from "./SendButton";

export default function MessageForm() {
  return (
    <form className="flex items-center gap-4 border-t p-4 mx-4">
      <InputField />
      <SendButton />
    </form>
  );
}
