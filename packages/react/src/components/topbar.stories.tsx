import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button.js";
import { Search } from "./search.tsx";
import { Topbar, TopbarNav, TopbarNavItem } from "./topbar.js";

const meta = {
  component: Topbar,
  parameters: {
    layout: "fullscreen",
  },
  args: { children: null },
  render: (args) => (
    <Topbar {...args}>
      <h1 className="hap-headline--sm">FANCY LOGO</h1>

      <TopbarNav>
        <TopbarNavItem href="#" current>
          Home
        </TopbarNavItem>
        <TopbarNavItem href="#">About</TopbarNavItem>
        <TopbarNavItem href="#">Services</TopbarNavItem>
        <TopbarNavItem href="#">Contact</TopbarNavItem>
      </TopbarNav>

      <Button variant="secondary" size="small">
        Sign In
      </Button>
    </Topbar>
  ),
} satisfies Meta<typeof Topbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithSearch: Story = {
  render: (args) => (
    <Topbar {...args}>
      <h1 className="hap-headline--sm">FANCY LOGO</h1>
      <Search />
      <Button variant="secondary" size="small">
        Sign In
      </Button>
    </Topbar>
  ),
};
