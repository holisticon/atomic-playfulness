import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Icon } from "./icon.js";
import { ToggleButton, ToggleButtonGroup } from "./toggle-button-group.js";

const meta = {
  title: "Elements/Toggle Button Group",
  component: ToggleButtonGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ToggleButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <ToggleButton value="left" pressed>
          Left
        </ToggleButton>
        <ToggleButton value="center">Center</ToggleButton>
        <ToggleButton value="right">Right</ToggleButton>
      </>
    ),
  },
};

export const WithIcons: Story = {
  args: {
    children: (
      <>
        <ToggleButton
          value="bold"
          icon={<Icon name="Bold" size="small" />}
          pressed
        >
          Bold
        </ToggleButton>
        <ToggleButton value="italic" icon={<Icon name="Italic" size="small" />}>
          Italic
        </ToggleButton>
        <ToggleButton
          value="underline"
          icon={<Icon name="Underline" size="small" />}
        >
          Underline
        </ToggleButton>
      </>
    ),
  },
};

export const IconOnly: Story = {
  args: {
    children: (
      <>
        <ToggleButton
          value="align-left"
          icon={<Icon name="AlignLeft" size="small" />}
          pressed
        />
        <ToggleButton
          value="align-center"
          icon={<Icon name="AlignCenter" size="small" />}
        />
        <ToggleButton
          value="align-right"
          icon={<Icon name="AlignRight" size="small" />}
        />
        <ToggleButton
          value="align-justify"
          icon={<Icon name="AlignJustify" size="small" />}
        />
      </>
    ),
  },
};

export const Small: Story = {
  args: {
    children: (
      <>
        <ToggleButton value="option1" size="small" pressed>
          Option 1
        </ToggleButton>
        <ToggleButton value="option2" size="small">
          Option 2
        </ToggleButton>
        <ToggleButton value="option3" size="small">
          Option 3
        </ToggleButton>
      </>
    ),
  },
};

export const Subtle: Story = {
  args: {
    children: (
      <>
        <ToggleButton value="view1" subtle pressed>
          List View
        </ToggleButton>
        <ToggleButton value="view2" subtle>
          Grid View
        </ToggleButton>
        <ToggleButton value="view3" subtle>
          Card View
        </ToggleButton>
      </>
    ),
  },
};

export const WithDisabled: Story = {
  args: {
    children: (
      <>
        <ToggleButton value="option1" pressed>
          Available
        </ToggleButton>
        <ToggleButton value="option2">Available</ToggleButton>
        <ToggleButton value="option3" disabled>
          Disabled
        </ToggleButton>
        <ToggleButton value="option4">Available</ToggleButton>
      </>
    ),
  },
};

export const SingleSelection: Story = {
  render: () => {
    const [selected, setSelected] = useState("center");

    const handleToggle = (value: string) => {
      setSelected(selected === value ? "" : value);
    };

    return (
      <div>
        <div>
          Selected: <strong>{selected || "none"}</strong>
        </div>
        <ToggleButtonGroup>
          <ToggleButton
            value="left"
            pressed={selected === "left"}
            onClick={() => handleToggle("left")}
            icon={<Icon name="AlignLeft" size="small" />}
          >
            Left
          </ToggleButton>
          <ToggleButton
            value="center"
            pressed={selected === "center"}
            onClick={() => handleToggle("center")}
            icon={<Icon name="AlignCenter" size="small" />}
          >
            Center
          </ToggleButton>
          <ToggleButton
            value="right"
            pressed={selected === "right"}
            onClick={() => handleToggle("right")}
            icon={<Icon name="AlignRight" size="small" />}
          >
            Right
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    );
  },
  args: {
    children: null,
  },
};

export const MultipleSelection: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(["bold"]);

    const handleToggle = (value: string) => {
      setSelected((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value],
      );
    };

    return (
      <div>
        <div>
          Selected:{" "}
          <strong>{selected.length > 0 ? selected.join(", ") : "none"}</strong>
        </div>
        <ToggleButtonGroup>
          <ToggleButton
            value="bold"
            pressed={selected.includes("bold")}
            onClick={() => handleToggle("bold")}
            icon={<Icon name="Bold" size="small" />}
          >
            Bold
          </ToggleButton>
          <ToggleButton
            value="italic"
            pressed={selected.includes("italic")}
            onClick={() => handleToggle("italic")}
            icon={<Icon name="Italic" size="small" />}
          >
            Italic
          </ToggleButton>
          <ToggleButton
            value="underline"
            pressed={selected.includes("underline")}
            onClick={() => handleToggle("underline")}
            icon={<Icon name="Underline" size="small" />}
          >
            Underline
          </ToggleButton>
          <ToggleButton
            value="strikethrough"
            pressed={selected.includes("strikethrough")}
            onClick={() => handleToggle("strikethrough")}
            icon={<Icon name="Strikethrough" size="small" />}
          >
            Strike
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    );
  },
  args: {
    children: null,
  },
};

export const ViewSwitcher: Story = {
  render: () => {
    const [view, setView] = useState("grid");

    return (
      <div>
        <div>
          Current view: <strong>{view}</strong>
        </div>
        <ToggleButtonGroup>
          <ToggleButton
            value="list"
            pressed={view === "list"}
            onClick={() => setView("list")}
            icon={<Icon name="List" size="small" />}
            size="small"
          />
          <ToggleButton
            value="grid"
            pressed={view === "grid"}
            onClick={() => setView("grid")}
            icon={<Icon name="Grid3x3" size="small" />}
            size="small"
          />
          <ToggleButton
            value="card"
            pressed={view === "card"}
            onClick={() => setView("card")}
            icon={<Icon name="SquareStack" size="small" />}
            size="small"
          />
        </ToggleButtonGroup>
        <div>
          <p>
            Content would be displayed in <strong>{view} view</strong>.
          </p>
        </div>
      </div>
    );
  },
  args: {
    children: null,
  },
};
