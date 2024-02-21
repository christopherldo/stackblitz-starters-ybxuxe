type MessageType = {
  id: string;
  user_id: string;
  time: Date;
  type: "sent" | "received";
  content: string;
};
