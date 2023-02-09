import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@pages/index";

describe("Home", () => {
  it("Displays 'Hello World'", () => {
    render(<Home />);

    const hello = screen.getByText(/Hello World/i);
    expect(hello).toBeInTheDocument();
  });
});
