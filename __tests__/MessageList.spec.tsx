import { render, screen } from "@testing-library/react";
import MessageList from "@/components/MessageList";

describe("MessageList", () => {
  const mockMessages = [
    {
      id: "1",
      user_id: "test-id",
      time: new Date(),
      type: "sent",
      content: "Test message 1",
    },
    {
      id: "2",
      user_id: "test-id",
      time: new Date(),
      type: "received",
      content: "Test message 2",
    },
  ] as MessageType[];

  const mockUser = {
    id: "test-id",
    name: "Test User",
    username: "test-user",
    avatar_url: "/images/avatars/default.jpg",
  };

  it("renders the messages correctly", () => {
    render(<MessageList messages={mockMessages} user={mockUser} />);

    expect(screen.getByText(mockMessages[0].content)).toBeInTheDocument();
    expect(screen.getByText(mockMessages[1].content)).toBeInTheDocument();
  });

  it("renders the empty state correctly", () => {
    render(<MessageList messages={[]} user={mockUser} />);

    expect(
      screen.getByText("Parece que ainda não há mensagens por aqui"),
    ).toBeInTheDocument();
  });
});
