import { render } from "@testing-library/react";
import Card from "components/Card";

it("works", () => {
  const { container } = render(<Card />);
  expect(container.firstChild).toMatchSnapshot();
});

it("applies default styles", () => {
  const { container } = render(<Card />);
  expect(container.firstChild).toHaveStyleRule("text-align", "left");
  expect(container.firstChild).toHaveStyleRule("border", "2px dashed");
  expect(container.firstChild).toHaveStyleRule("height", "100%");
});
