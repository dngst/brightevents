import { render } from "@testing-library/react";
import { Input } from "components/Input";

it("works", () => {
  const { container } = render(<Input />);
  expect(container.firstChild).toMatchSnapshot();
});

it("applies default styles", () => {
  const { container } = render(<Input />);
  expect(container.firstChild).toHaveStyleRule("border", "none");
  expect(container.firstChild).toHaveStyleRule("box-sizing", "border-box");
  expect(container.firstChild).toHaveStyleRule("outline", "none", {
    modifier: "&:focus",
  });
});
