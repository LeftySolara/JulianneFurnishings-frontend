import { render, screen } from "@testing-library/react";

import { App } from "./App";

describe("App", () => {
  it("renders 'Root'", () => {
    render(<App />);

    const heading = screen.getByText("Root");
    expect(heading).toBeInTheDocument();
  });
});
