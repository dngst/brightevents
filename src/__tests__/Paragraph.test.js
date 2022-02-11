import { render } from "@testing-library/react";
import Paragraph from "components/Paragraph";

it("works", () => {
  const { container } = render(<Paragraph />);
  expect(container.firstChild).toMatchSnapshot();
});

it("applies default styles", () => {
  const { container } = render(<Paragraph />);
  expect(container.firstChild).toHaveStyleRule("line-height", "1.5");
  expect(container.firstChild).toHaveStyleRule("font-size", undefined);
});

it("applies default styles according to passed props", () => {
  const { container } = render(<Paragraph justify break capitalize />);
  expect(container.firstChild).toHaveStyleRule("text-align", "justify");
  expect(container.firstChild).toHaveStyleRule("word-break", "break-all");
  expect(container.firstChild).toHaveStyleRule("text-transform", "capitalize");
});
