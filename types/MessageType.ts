type MessageType = {
  id: string;
  user: Partial<UserType>;
  time: Date;
  type: "sent" | "received";
  content: string;
};
