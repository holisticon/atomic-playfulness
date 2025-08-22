import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "./breadcrumb.js";
import { Icon } from "./icon.js";

const meta: Meta<typeof Breadcrumb> = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Category", href: "/category" },
      { label: "Subcategory", href: "/category/subcategory" },
      { label: "Current Page" },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Simple: Story = {
  args: {
    items: [{ label: "Home", href: "/" }, { label: "Current Page" }],
  },
};

export const Deep: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Electronics", href: "/products/electronics" },
      { label: "Computers", href: "/products/electronics/computers" },
      { label: "Laptops", href: "/products/electronics/computers/laptops" },
      { label: "MacBook Pro" },
    ],
  },
};

export const WithoutLinks: Story = {
  args: {
    items: [
      { label: "Level 1" },
      { label: "Level 2" },
      { label: "Level 3" },
      { label: "Current" },
    ],
  },
};

export const CustomSeparator: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Category", href: "/category" },
      { label: "Current Page" },
    ],
    separator: <span style={{ color: "#999" }}>/</span>,
  },
};

export const NoSeparator: Story = {
  args: {
    items: [
      { label: "Step 1", href: "#" },
      { label: "Step 2", href: "#" },
      { label: "Step 3" },
    ],
    separator: null,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <h4>Standard Navigation</h4>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "Laptops" },
          ]}
        />
      </div>

      <div>
        <h4>With Custom Separator</h4>
        <Breadcrumb
          items={[
            { label: "Docs", href: "/docs" },
            { label: "Components", href: "/docs/components" },
            { label: "Breadcrumb" },
          ]}
          separator={<Icon name="ArrowRight" size="small" />}
        />
      </div>

      <div>
        <h4>Text Only (No Links)</h4>
        <Breadcrumb
          items={[
            { label: "Configuration" },
            { label: "User Settings" },
            { label: "Profile" },
          ]}
        />
      </div>

      <div>
        <h4>Single Level</h4>
        <Breadcrumb items={[{ label: "Dashboard" }]} />
      </div>
    </div>
  ),
};

export const InPageHeader: Story = {
  render: () => (
    <div style={{ maxWidth: "800px" }}>
      <header
        style={{
          borderBottom: "1px solid #e0e0e0",
          paddingBottom: "1rem",
          marginBottom: "2rem",
        }}
      >
        <Breadcrumb
          items={[
            { label: "Dashboard", href: "/dashboard" },
            { label: "Projects", href: "/dashboard/projects" },
            {
              label: "Design System",
              href: "/dashboard/projects/design-system",
            },
            { label: "Components" },
          ]}
        />
        <h1 style={{ margin: "1rem 0 0 0", fontSize: "2rem" }}>Components</h1>
        <p style={{ margin: "0.5rem 0 0 0", color: "#666" }}>
          Browse and manage all components in the design system
        </p>
      </header>

      <div>
        <p>Page content would go here...</p>
      </div>
    </div>
  ),
};
