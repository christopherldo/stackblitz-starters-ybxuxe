import { render } from "@testing-library/react";
import ChatButton from "./ChatButton";

describe("ChatButton", () => {
  const user = {
    id: "test-id",
    username: "testuser",
    name: "Test User",
    avatar_url: "/images/avatars/default.jpg",
  };

  it("renders without crashing", () => {
    render(<ChatButton user={user} />);
  });

  it("renders the correct user name", () => {
    const { getByText } = render(<ChatButton user={user} />);

    expect(getByText(user.name)).toBeInTheDocument();
  });

  it("renders the correct avatar", () => {
    const { getByAltText } = render(<ChatButton user={user} />);
    const avatar = getByAltText(`${user.name} avatar.`);

    expect(avatar).toBeInTheDocument();
    expect(avatar.getAttribute("src")).toContain(
      encodeURIComponent(user.avatar_url),
    );
  });

  it("has the correct link", () => {
    const { getByRole } = render(<ChatButton user={user} />);

    const link = getByRole("link");

    expect(link.getAttribute("href")).toContain(`user/${user.username}`);
  });
});
