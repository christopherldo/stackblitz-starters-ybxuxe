import { render, fireEvent } from "@testing-library/react";
import InputField from "@/components/InputField";

describe("InputField", () => {
  const mockSetInputMessage = jest.fn();
  const mockOnKeyDown = jest.fn();
  const mockInputMessage = "Test message";

  it("renders the textarea with the correct value", () => {
    const { getByPlaceholderText } = render(
      <InputField
        inputMessage={mockInputMessage}
        setInputMessage={mockSetInputMessage}
        onKeyDown={mockOnKeyDown}
      />,
    );

    const textareaElement = getByPlaceholderText(
      "Digite sua mensagem aqui...",
    ) as HTMLTextAreaElement;
    expect(textareaElement).toBeInTheDocument();
    expect(textareaElement.value).toBe(mockInputMessage);
  });

  it("calls setInputMessage on change", () => {
    const { getByPlaceholderText } = render(
      <InputField
        inputMessage={mockInputMessage}
        setInputMessage={mockSetInputMessage}
        onKeyDown={mockOnKeyDown}
      />,
    );

    const textareaElement = getByPlaceholderText("Digite sua mensagem aqui...");
    fireEvent.change(textareaElement, { target: { value: "New message" } });

    expect(mockSetInputMessage).toHaveBeenCalledWith("New message");
  });

  it("calls onKeyDown on key down", () => {
    const { getByPlaceholderText } = render(
      <InputField
        inputMessage={mockInputMessage}
        setInputMessage={mockSetInputMessage}
        onKeyDown={mockOnKeyDown}
      />,
    );

    const textareaElement = getByPlaceholderText("Digite sua mensagem aqui...");
    fireEvent.keyDown(textareaElement, { key: "Enter", code: "Enter" });

    expect(mockOnKeyDown).toHaveBeenCalled();
  });
});
