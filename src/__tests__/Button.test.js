import { render } from "@testing-library/react";
import Button from "components/Button";

it("works", () => {
  const { container } = render(<Button />);
  expect(container.firstChild).toMatchSnapshot();
});

it("applies default styles", () => {
  const { container } = render(<Button />);
  expect(container.firstChild).toHaveStyleRule("text-transform", "uppercase");
  expect(container.firstChild).toHaveStyleRule("border-radius", "0");
  expect(container.firstChild).toHaveStyleRule("font-size", "0.9em");
  expect(container.firstChild).toHaveStyleRule("font-weight", "bold");
  expect(container.firstChild).toHaveStyleRule("width", "max-content");
  expect(container.firstChild).toHaveStyleRule("border", "1px solid");
});

