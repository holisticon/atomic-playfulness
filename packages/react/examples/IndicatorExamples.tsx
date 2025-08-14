import "@holisticon/hap-foundation/atomic-playfulness.css";
import { Indicator } from "../src/index.js";

/**
 * Basic usage examples for the Indicator component
 */
export function IndicatorExamples() {
  return (
    <div
      style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <h2>Indicator Component Examples</h2>

      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <span>Default with number:</span>
        <Indicator number="5" />
      </div>

      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <span>Default with large number:</span>
        <Indicator number="123" />
      </div>

      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <span>Small variant:</span>
        <Indicator variant="small" />
      </div>

      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <span>Small variant with number (number will be hidden):</span>
        <Indicator variant="small" number="99" />
      </div>

      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <span>With custom className:</span>
        <Indicator number="1" className="my-custom-indicator" />
      </div>

      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <span>With additional props:</span>
        <Indicator
          number="42"
          aria-label="42 new notifications"
          title="You have 42 new messages"
        />
      </div>
    </div>
  );
}

export default IndicatorExamples;
