type UsersDataType = {
  [username: string]: {
    messages: MessageType[];
    id: string;
    avatar_url: string;
    name: string;
  };
};
