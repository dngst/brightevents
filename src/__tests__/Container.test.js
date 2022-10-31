import { render } from "@testing-library/react";
import Container from "components/container/Container";

it("works", () => {
  const { container } = render(<Container />);
  expect(container.firstChild).toMatchSnapshot();
});

it("applies default styles", () => {
  const { container } = render(<Container />);
  expect(container.firstChild).toHaveStyleRule("text-align", "center");
  expect(container.firstChild).toHaveStyleRule("margin", "4% auto");
  expect(container.firstChild).toHaveStyleRule("width", "55%");
  expect(container.firstChild).toHaveStyleRule("width", "95%", {
    media: "(max-width: 768px)",
  });
});

it("applies default styles according to passed props", () => {
  const { container } = render(<Container md />);
  expect(container.firstChild).toHaveStyleRule("width", "30%");
});
