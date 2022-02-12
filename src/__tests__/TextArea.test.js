import { render } from "@testing-library/react";
import { TextArea } from "components/Input";

it("works", () => {
  const { container } = render(<TextArea />);
  expect(container.firstChild).toMatchSnapshot();
});

it("applies default styles", () => {
  const { container } = render(<TextArea />);
  expect(container.firstChild).toHaveStyleRule("border", "none");
  expect(container.firstChild).toHaveStyleRule("text-transform", "capitalize");
  expect(container.firstChild).toHaveStyleRule("overflow", "auto");
  expect(container.firstChild).toHaveStyleRule("resize", "none");
  expect(container.firstChild).toHaveStyleRule("outline", "none", {
    modifier: "&:focus",
  });
});
