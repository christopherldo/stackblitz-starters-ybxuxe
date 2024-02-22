import { render, fireEvent } from "@testing-library/react";
import MessageForm from "@/components/MessageForm";

describe("MessageForm", () => {
  const mockSendMessage = jest.fn();
  const mockMessage = "Test message";

  it("calls sendMessage on form submit", () => {
    const { getByPlaceholderText, getByRole } = render(
      <MessageForm sendMessage={mockSendMessage} />,
    );

    fireEvent.change(getByPlaceholderText("Digite sua mensagem aqui..."), {
      target: { value: mockMessage },
    });
    fireEvent.click(getByRole("button"));

    expect(mockSendMessage).toHaveBeenCalledWith(mockMessage);
  });

  it("calls sendMessage on Enter key press", () => {
    const { getByPlaceholderText } = render(
      <MessageForm sendMessage={mockSendMessage} />,
    );

    fireEvent.change(getByPlaceholderText("Digite sua mensagem aqui..."), {
      target: { value: mockMessage },
    });
    fireEvent.keyDown(getByPlaceholderText("Digite sua mensagem aqui..."), {
      key: "Enter",
      code: "Enter",
    });

    expect(mockSendMessage).toHaveBeenCalledWith(mockMessage);
  });

  it("clears the input field after a message is sent", () => {
    const { getByPlaceholderText, getByRole } = render(
      <MessageForm sendMessage={mockSendMessage} />,
    );

    const inputField = getByPlaceholderText(
      "Digite sua mensagem aqui...",
    ) as HTMLTextAreaElement;

    fireEvent.change(inputField, { target: { value: mockMessage } });
    fireEvent.click(getByRole("button"));

    expect(inputField.value).toBe("");
  });
});
