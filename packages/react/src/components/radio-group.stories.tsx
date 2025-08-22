import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { RadioGroup } from "./radio-group.js";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    name: "example",
    legend: "Choose an option",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    value: "option2",
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
    errorMessage: "Please select an option to continue.",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "option1",
  },
};

export const WithDisabledOptions: Story = {
  args: {
    name: "disabled-options",
    legend: "Some options disabled",
    options: [
      { value: "available1", label: "Available Option 1" },
      { value: "disabled1", label: "Disabled Option", disabled: true },
      { value: "available2", label: "Available Option 2" },
      { value: "disabled2", label: "Another Disabled", disabled: true },
    ],
    value: "available1",
  },
};

export const WithoutLegend: Story = {
  args: {
    name: "without-legend",
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState<string>("medium");

    return (
      <RadioGroup
        name="interactive"
        legend="Select size"
        options={[
          { value: "small", label: "Small" },
          { value: "medium", label: "Medium" },
          { value: "large", label: "Large" },
        ]}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const FormExample: Story = {
  render: () => (
    <form style={{ maxWidth: "400px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <RadioGroup
          name="experience"
          legend="How was your experience?"
          options={[
            { value: "excellent", label: "Excellent" },
            { value: "good", label: "Good" },
            { value: "fair", label: "Fair" },
            { value: "poor", label: "Poor" },
          ]}
        />

        <RadioGroup
          name="recommendation"
          legend="Would you recommend us?"
          options={[
            { value: "definitely", label: "Definitely" },
            { value: "probably", label: "Probably" },
            { value: "maybe", label: "Maybe" },
            { value: "probably-not", label: "Probably not" },
            { value: "definitely-not", label: "Definitely not" },
          ]}
        />

        <button type="submit" style={{ alignSelf: "flex-start" }}>
          Submit Feedback
        </button>
      </div>
    </form>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        maxWidth: "400px",
      }}
    >
      <RadioGroup
        name="default"
        legend="Default State"
        options={[
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
        ]}
      />

      <RadioGroup
        name="selected"
        legend="With Selection"
        options={[
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
        ]}
        value="option1"
      />

      <RadioGroup
        name="invalid"
        legend="Invalid State"
        options={[
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
        ]}
        invalid
        errorMessage="This field is required"
      />

      <RadioGroup
        name="disabled"
        legend="Disabled State"
        options={[
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
        ]}
        disabled
        value="option1"
      />
    </div>
  ),
};
