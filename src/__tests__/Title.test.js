import { render } from "@testing-library/react";
import Title from "components/Title";

it("works", () => {
  const { container } = render(<Title />);
  expect(container.firstChild).toMatchSnapshot();
});

it("applies default styles", () => {
  const { container } = render(<Title />);
  expect(container.firstChild).toHaveStyleRule("text-transform", "capitalize");
  expect(container.firstChild).toHaveStyleRule("font-size", undefined);
});
