import type { Meta, StoryObj } from "@storybook/react";
import { ProgressIndicator } from "./progress-indicator.js";

const meta: Meta<typeof ProgressIndicator> = {
  title: "Components/ProgressIndicator",
  component: ProgressIndicator,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    value: 50,
    max: 100,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Empty: Story = {
  args: {
    value: 0,
  },
};

export const Complete: Story = {
  args: {
    value: 100,
  },
};

export const CustomMax: Story = {
  args: {
    value: 7,
    max: 10,
  },
};

export const ProgressSteps: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        width: "300px",
      }}
    >
      <div>
        <div style={{ marginBottom: "0.5rem" }}>0% Complete</div>
        <ProgressIndicator value={0} />
      </div>
      <div>
        <div style={{ marginBottom: "0.5rem" }}>25% Complete</div>
        <ProgressIndicator value={25} />
      </div>
      <div>
        <div style={{ marginBottom: "0.5rem" }}>50% Complete</div>
        <ProgressIndicator value={50} />
      </div>
      <div>
        <div style={{ marginBottom: "0.5rem" }}>75% Complete</div>
        <ProgressIndicator value={75} />
      </div>
      <div>
        <div style={{ marginBottom: "0.5rem" }}>100% Complete</div>
        <ProgressIndicator value={100} />
      </div>
    </div>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        width: "400px",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "0.5rem",
          }}
        >
          <span>Uploading files...</span>
          <span>3/7</span>
        </div>
        <ProgressIndicator value={3} max={7} />
      </div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "0.5rem",
          }}
        >
          <span>Download progress</span>
          <span>67%</span>
        </div>
        <ProgressIndicator value={67} />
      </div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "0.5rem",
          }}
        >
          <span>Installation</span>
          <span>Complete</span>
        </div>
        <ProgressIndicator value={100} />
      </div>
    </div>
  ),
};
