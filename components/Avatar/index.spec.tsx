import { render } from "@testing-library/react";

import Avatar from ".";

describe("<Avatar>", () => {
  it("should render avatar component", () => {
    const { baseElement } = render(
      <Avatar src="https://picsum.photos/500" alt="" />,
    );
    expect(baseElement).toBeDefined();
  });

  // it("should render an image", () => {
  //   const { getByAltText } = render(
  //     <Avatar src="https://picsum.photos/500" alt="Image fallback" />,
  //   );

  //   expect(getByAltText("Image fallback")).not.toBeDefined();
  // });
});
