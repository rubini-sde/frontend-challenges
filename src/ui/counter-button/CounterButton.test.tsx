import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CounterButton from "./CounterButton";

describe("CounterButton", () => {
  it("renders with an initial count of 0 by default", () => {
    render(<CounterButton />);
    expect(screen.getByRole("button")).toHaveTextContent("Clicks: 0");
  });

  it("renders with the provided initialCount", () => {
    render(<CounterButton initialCount={5} />);
    expect(screen.getByRole("button")).toHaveTextContent("Clicks: 5");
  });

  it("initialCount of 0 is respected", () => {
    render(<CounterButton initialCount={0} />);
    expect(screen.getByRole("button")).toHaveTextContent("Clicks: 0");
  });

  it("increments the count on each click", () => {
    render(<CounterButton />);
    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(button).toHaveTextContent("Clicks: 1");

    fireEvent.click(button);
    expect(button).toHaveTextContent("Clicks: 2");
  });

  it("updates the aria-label to reflect the current count", () => {
    render(<CounterButton />);
    const button = screen.getByRole("button");

    expect(button).toHaveAccessibleName("Counter button, current count is 0");

    fireEvent.click(button);
    expect(button).toHaveAccessibleName("Counter button, current count is 1");
  });
});
