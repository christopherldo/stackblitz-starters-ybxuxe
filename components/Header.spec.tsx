import { render } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  const mockUser = {
    id: "test-id",
    name: "Test User",
    username: "testuser",
    avatar_url: "/images/avatars/default.jpg",
  };

  it("renders the user name and avatar", () => {
    const { getByText, getByAltText } = render(<Header user={mockUser} />);

    expect(getByText(mockUser.name)).toBeInTheDocument();
    expect(
      getByAltText(`${mockUser.name} avatar.`).getAttribute("src"),
    ).toContain(encodeURIComponent(mockUser.avatar_url));
  });

  it("renders the return button with correct href and aria-label", () => {
    const { getByLabelText } = render(<Header user={mockUser} />);

    const linkElement = getByLabelText("Botão de retorno para o início.");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/");
  });
});
