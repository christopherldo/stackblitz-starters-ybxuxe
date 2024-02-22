import { render, fireEvent } from "@testing-library/react";
import SendButton from "./SendButton";

describe("SendButton", () => {
  it("calls form onSubmit when clicked", () => {
    const mockSubmit = jest.fn();

    const { getByRole } = render(
      <form onSubmit={mockSubmit}>
        <SendButton />
      </form>,
    );

    fireEvent.click(getByRole("button"));

    expect(mockSubmit).toHaveBeenCalled();
  });

  it("renders the button correctly", () => {
    const { getByRole } = render(<SendButton />);

    expect(getByRole("button")).toBeInTheDocument();
  });
});
