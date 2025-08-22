import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownLabel,
  DropdownSeparator,
  DropdownTrigger,
} from "./dropdown.js";

const meta = {
  title: "Elements/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <DropdownTrigger>Select a fruit...</DropdownTrigger>
        <DropdownContent>
          <DropdownItem value="apple">Apple</DropdownItem>
          <DropdownItem value="banana">Banana</DropdownItem>
          <DropdownItem value="orange">Orange</DropdownItem>
          <DropdownItem value="grape">Grape</DropdownItem>
          <DropdownItem value="strawberry">Strawberry</DropdownItem>
        </DropdownContent>
      </>
    ),
  },
};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: "banana",
    children: (
      <>
        <DropdownTrigger>Select a fruit...</DropdownTrigger>
        <DropdownContent>
          <DropdownItem value="apple">Apple</DropdownItem>
          <DropdownItem value="banana">Banana</DropdownItem>
          <DropdownItem value="orange">Orange</DropdownItem>
          <DropdownItem value="grape">Grape</DropdownItem>
          <DropdownItem value="strawberry">Strawberry</DropdownItem>
        </DropdownContent>
      </>
    ),
  },
};

export const WithGroups: Story = {
  args: {
    children: (
      <>
        <DropdownTrigger>Select an item...</DropdownTrigger>
        <DropdownContent>
          <DropdownLabel>Fruits</DropdownLabel>
          <DropdownItem value="apple">Apple</DropdownItem>
          <DropdownItem value="banana">Banana</DropdownItem>
          <DropdownItem value="orange">Orange</DropdownItem>
          <DropdownSeparator />
          <DropdownLabel>Vegetables</DropdownLabel>
          <DropdownItem value="carrot">Carrot</DropdownItem>
          <DropdownItem value="broccoli">Broccoli</DropdownItem>
          <DropdownItem value="spinach">Spinach</DropdownItem>
        </DropdownContent>
      </>
    ),
  },
};

export const WithDisabledItems: Story = {
  args: {
    children: (
      <>
        <DropdownTrigger>Select a status...</DropdownTrigger>
        <DropdownContent>
          <DropdownItem value="draft">Draft</DropdownItem>
          <DropdownItem value="published">Published</DropdownItem>
          <DropdownItem value="archived" disabled>
            Archived (disabled)
          </DropdownItem>
          <DropdownItem value="deleted" disabled>
            Deleted (disabled)
          </DropdownItem>
        </DropdownContent>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <DropdownTrigger>Disabled dropdown</DropdownTrigger>
        <DropdownContent>
          <DropdownItem value="item1">Item 1</DropdownItem>
          <DropdownItem value="item2">Item 2</DropdownItem>
          <DropdownItem value="item3">Item 3</DropdownItem>
        </DropdownContent>
      </>
    ),
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState("apple");

    return (
      <div className="space-y-4">
        <div>
          Selected value: <strong>{value}</strong>
        </div>
        <Dropdown value={value} onValueChange={setValue}>
          <DropdownTrigger>Select a fruit...</DropdownTrigger>
          <DropdownContent>
            <DropdownItem value="apple">Apple</DropdownItem>
            <DropdownItem value="banana">Banana</DropdownItem>
            <DropdownItem value="orange">Orange</DropdownItem>
            <DropdownItem value="grape">Grape</DropdownItem>
            <DropdownItem value="strawberry">Strawberry</DropdownItem>
          </DropdownContent>
        </Dropdown>
      </div>
    );
  },
  args: {
    children: null,
  },
};
