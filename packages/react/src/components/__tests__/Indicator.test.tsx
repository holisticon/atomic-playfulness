import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Indicator } from "../Indicator.js";

describe("Indicator", () => {
  it("renders with default variant", () => {
    render(<Indicator />);
    const indicator = screen.getByRole("generic");
    expect(indicator).toHaveClass("hap-indicator");
    expect(indicator).not.toHaveClass("small");
  });

  it("renders with small variant", () => {
    render(<Indicator variant="small" />);
    const indicator = screen.getByRole("generic");
    expect(indicator).toHaveClass("hap-indicator", "small");
  });

  it("renders with number", () => {
    render(<Indicator number="123" />);
    expect(screen.getByText("123")).toBeInTheDocument();
    expect(screen.getByText("123")).toHaveClass("hap-indicator-number");
  });

  it("does not render number span when number is not provided", () => {
    render(<Indicator />);
    expect(screen.queryByText("hap-indicator-number")).not.toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Indicator className="custom-class" />);
    const indicator = screen.getByRole("generic");
    expect(indicator).toHaveClass("hap-indicator", "custom-class");
  });

  it("forwards additional props to div element", () => {
    render(
      <Indicator data-testid="custom-indicator" aria-label="notification" />,
    );
    const indicator = screen.getByTestId("custom-indicator");
    expect(indicator).toHaveAttribute("aria-label", "notification");
  });

  it("forwards ref to div element", () => {
    const ref = { current: null };
    render(<Indicator ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
