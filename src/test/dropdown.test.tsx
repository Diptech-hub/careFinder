import DropdownMenu from "../components/dropDown"
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("DropdownMenu", () => {
  test("should toggle the menu when the button is clicked", () => {
    const { getByText, queryByText } = render(<DropdownMenu />);
    const button = getByText("Admin");

    expect(queryByText("Login")).toBeNull();
    expect(queryByText("Sign Up")).toBeNull();

    fireEvent.click(button);

    expect(getByText("Login")).toBeTruthy();
    expect(queryByText("Login")).toBeFalsy();

    fireEvent.click(button);

    expect(queryByText("Login")).toBeNull();
    expect(queryByText("Sign Up")).toBeNull();
  });
});