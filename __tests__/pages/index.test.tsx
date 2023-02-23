import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@pages/index";

describe("Home", () => {
  it("Displays Login and Logout links", () => {
    render(<Home />);

    const login = screen.getByText(/Login/i);
    expect(login).toBeInTheDocument();

    const logout = screen.getByText(/Logout/i);
    expect(logout).toBeInTheDocument();
  });
});
