import { fireEvent, render } from "@testing-library/react";
import Avatar from "./Avatar";

describe("Avatar", () => {
  const mockSrc = "/images/avatars/default.jpg";
  const mockAlt = "Default avatar photo";
  const mockSize = 100;
  const defaultSize = 40;

  it("should render with default props", () => {
    const { getByAltText } = render(
      <Avatar src={mockSrc} alt={mockAlt} size={mockSize} />,
    );

    const imgElement = getByAltText(mockAlt);

    expect(imgElement).toBeInTheDocument();
    expect(imgElement.getAttribute("src")).toBeDefined();
    expect(imgElement.getAttribute("src")).toContain(
      encodeURIComponent(mockSrc),
    );
    expect(imgElement).toHaveProperty("width", mockSize);
    expect(imgElement).toHaveProperty("height", mockSize);
  });

  it("should contain the given src", () => {
    const { getByAltText } = render(
      <Avatar src={mockSrc} alt={mockAlt} size={mockSize} />,
    );

    const imgElement = getByAltText(mockAlt);

    expect(imgElement.getAttribute("src")).toBeDefined();
    expect(imgElement.getAttribute("src")).toContain(
      encodeURIComponent(mockSrc),
    );
  });

  it("should contain the given alt text", () => {
    const { getByAltText } = render(<Avatar src={mockSrc} alt={mockAlt} />);

    const imgElement = getByAltText(mockAlt);

    expect(imgElement).toHaveProperty("alt", mockAlt);
  });

  it("should have default size", () => {
    const { getByAltText } = render(<Avatar src={mockSrc} alt={mockAlt} />);

    const imgElement = getByAltText(mockAlt);

    expect(imgElement).toHaveProperty("width", defaultSize);
    expect(imgElement).toHaveProperty("height", defaultSize);
  });

  it("should have custom size", () => {
    const { getByAltText } = render(
      <Avatar src={mockSrc} alt={mockAlt} size={mockSize} />,
    );

    const imgElement = getByAltText(mockAlt);

    expect(imgElement).toHaveProperty("width", mockSize);
    expect(imgElement).toHaveProperty("height", mockSize);
  });

  it("should have correct styles", () => {
    const { getByAltText } = render(
      <Avatar src={mockSrc} alt={mockAlt} size={mockSize} />,
    );

    const imgElement = getByAltText(mockAlt);

    expect(imgElement.classList).toBeDefined();
    expect(imgElement.classList.contains("rounded-full")).toBe(true);
    expect(imgElement.style.aspectRatio).toBe("40/40");
    expect(imgElement.style.objectFit).toBe("cover");
  });

  it("should render alt text when src is not found", async () => {
    const { getByAltText } = render(
      <Avatar src={"/404.jpg"} alt={mockAlt} size={mockSize} />,
    );

    const imgElement = getByAltText(mockAlt);

    fireEvent.error(imgElement);

    expect(imgElement).toBeInTheDocument();
  });
});
