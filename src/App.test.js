import { render, screen } from "@testing-library/react";
import App from "./App";
// window.scrollTo = jest.fn();

test("renders header test", () => {
  render(<App />);
  const linkElement = screen.getByText(/Search/i);
  expect(linkElement).toBeInTheDocument();
});

it("renders without crashing", () => {
  window.scrollTo = jest.fn();
});

test("Thumbnail should render test text", () => {
  const component = render(<App />);
  const thumbEl = component.getByTestId("test");
  expect(thumbEl.textContent).toBe("Test");
});
