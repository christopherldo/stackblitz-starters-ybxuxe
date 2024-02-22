import { render } from "@testing-library/react";
import Message from "@/components/Message";

describe("Message", () => {
  const mockMessageSent = {
    id: "test-id",
    user_id: "test-id",
    time: new Date(),
    type: "sent",
    content: "Test message sent",
  } as MessageType;

  const mockMessageReceived = {
    ...mockMessageSent,
    type: "received",
  } as MessageType;

  const mockUser = {
    id: "test-id",
    name: "Test User",
    username: "test-user",
    avatar_url: "https://test.com/avatar.jpg",
  };

  it("renders the sent message correctly", () => {
    const { getByText } = render(<Message message={mockMessageSent} />);

    expect(getByText(mockMessageSent.content)).toBeInTheDocument();
  });

  it("renders the received message with user avatar and name correctly", () => {
    const { getByText, getByAltText } = render(
      <Message message={mockMessageReceived} user={mockUser} />,
    );

    expect(getByText(mockMessageReceived.content)).toBeInTheDocument();
    expect(
      getByAltText(`${mockUser.name} avatar.`).getAttribute("src"),
    ).toContain(encodeURIComponent(mockUser.avatar_url));
  });
});
