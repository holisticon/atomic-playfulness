import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./icon.js";
import { TextLink } from "./text-link.js";

const meta: Meta<typeof TextLink> = {
  title: "Components/TextLink",
  component: TextLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "Link text",
    href: "#",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const ExtraSmall: Story = {
  args: {
    size: "extra-small",
  },
};

export const AllSizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <TextLink {...args} size="standard">
        Standard Link
      </TextLink>
      <TextLink {...args} size="small">
        Small Link
      </TextLink>
      <TextLink {...args} size="extra-small">
        Extra Small Link
      </TextLink>
    </div>
  ),
};

export const WithIcons: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <TextLink {...args}>
        <Icon name="ExternalLink" size="small" />
        External Link
      </TextLink>
      <TextLink {...args}>
        Download
        <Icon name="Download" size="small" />
      </TextLink>
      <TextLink {...args} size="small">
        <Icon name="ArrowLeft" size="small" />
        Back
      </TextLink>
    </div>
  ),
};

export const InContext: Story = {
  render: () => (
    <div style={{ maxWidth: "400px", lineHeight: "1.6" }}>
      <p>
        This is some body text with a <TextLink href="#">regular link</TextLink>{" "}
        in the middle of the sentence. You can also have{" "}
        <TextLink href="#" size="small">
          smaller links
        </TextLink>{" "}
        or even{" "}
        <TextLink href="#" size="extra-small">
          extra small links
        </TextLink>{" "}
        depending on the context and hierarchy of your content.
      </p>
    </div>
  ),
};
