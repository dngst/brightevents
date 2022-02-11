import { render } from "@testing-library/react";
import { Nav } from "components/nav/Navbar";

it("works", () => {
  const { container } = render(<Nav />);
  expect(container.firstChild).toMatchSnapshot();
});

it("applies default styles", () => {
  const { container } = render(<Nav />);
  expect(container.firstChild).toHaveStyleRule("position", "absolute");
  expect(container.firstChild).toHaveStyleRule("display", "flex");
  expect(container.firstChild).toHaveStyleRule("justify-content", "space-between");
});
