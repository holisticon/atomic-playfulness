import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "./button.js";
import { IconButton } from "./icon-button.js";
import {
  Topbar,
  TopbarActions,
  TopbarBrand,
  TopbarNav,
  TopbarNavItem,
} from "./topbar.js";

const meta = {
  title: "Layout/Topbar",
  component: Topbar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Topbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <TopbarBrand>
          <h1 className="text-xl font-bold">My App</h1>
        </TopbarBrand>
        <TopbarNav>
          <TopbarNavItem href="#" current>
            Home
          </TopbarNavItem>
          <TopbarNavItem href="#">About</TopbarNavItem>
          <TopbarNavItem href="#">Services</TopbarNavItem>
          <TopbarNavItem href="#">Contact</TopbarNavItem>
        </TopbarNav>
        <TopbarActions>
          <Button variant="secondary" size="small">
            Sign In
          </Button>
        </TopbarActions>
      </>
    ),
  },
  render: (args) => (
    <div>
      <Topbar {...args} />
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Page Content</h2>
        <p>This shows the topbar with brand, navigation, and actions.</p>
      </div>
    </div>
  ),
};

export const WithLogo: Story = {
  args: {
    children: (
      <>
        <TopbarBrand className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">
            L
          </div>
          <span className="text-xl font-bold">Logo</span>
        </TopbarBrand>
        <TopbarNav>
          <TopbarNavItem href="#" current>
            Dashboard
          </TopbarNavItem>
          <TopbarNavItem href="#">Projects</TopbarNavItem>
          <TopbarNavItem href="#">Team</TopbarNavItem>
        </TopbarNav>
        <TopbarActions className="flex items-center gap-2">
          <IconButton icon="Search" size="small" />
          <IconButton icon="Bell" size="small" />
          <Button variant="primary" size="small">
            New Project
          </Button>
        </TopbarActions>
      </>
    ),
  },
  render: (args) => (
    <div>
      <Topbar {...args} />
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <p>This topbar includes a logo, navigation, and action buttons.</p>
      </div>
    </div>
  ),
};

export const WithDisabledItems: Story = {
  args: {
    children: (
      <>
        <TopbarBrand>
          <h1 className="text-xl font-bold">My App</h1>
        </TopbarBrand>
        <TopbarNav>
          <TopbarNavItem href="#" current>
            Home
          </TopbarNavItem>
          <TopbarNavItem href="#">Products</TopbarNavItem>
          <TopbarNavItem disabled>Coming Soon</TopbarNavItem>
          <TopbarNavItem href="#">Support</TopbarNavItem>
        </TopbarNav>
        <TopbarActions>
          <Button variant="secondary" size="small">
            Login
          </Button>
        </TopbarActions>
      </>
    ),
  },
  render: (args) => (
    <div>
      <Topbar {...args} />
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Page with Disabled Nav Item</h2>
        <p>The "Coming Soon" navigation item is disabled.</p>
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState("home");
    const [notifications, setNotifications] = useState(3);

    return (
      <div>
        <Topbar>
          <TopbarBrand>
            <h1 className="text-xl font-bold">Interactive App</h1>
          </TopbarBrand>
          <TopbarNav>
            <TopbarNavItem
              current={currentPage === "home"}
              onClick={() => setCurrentPage("home")}
            >
              Home
            </TopbarNavItem>
            <TopbarNavItem
              current={currentPage === "dashboard"}
              onClick={() => setCurrentPage("dashboard")}
            >
              Dashboard
            </TopbarNavItem>
            <TopbarNavItem
              current={currentPage === "settings"}
              onClick={() => setCurrentPage("settings")}
            >
              Settings
            </TopbarNavItem>
          </TopbarNav>
          <TopbarActions className="flex items-center gap-2">
            <div className="relative">
              <IconButton icon="Bell" size="small" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </div>
            <Button
              variant="secondary"
              size="small"
              onClick={() => setNotifications(0)}
            >
              Clear Notifications
            </Button>
          </TopbarActions>
        </Topbar>
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4 capitalize">
            {currentPage} Page
          </h2>
          <p>
            Current page: <strong>{currentPage}</strong>
          </p>
          <p>
            Notifications: <strong>{notifications}</strong>
          </p>
          <p className="mt-4">
            Click on navigation items to change pages, or clear notifications
            using the button.
          </p>
        </div>
      </div>
    );
  },
  args: {
    children: null,
  },
};

export const MinimalBrand: Story = {
  args: {
    children: (
      <>
        <TopbarBrand>
          <h1 className="text-xl font-bold">Brand Only</h1>
        </TopbarBrand>
        <TopbarActions>
          <IconButton icon="Menu" size="small" />
        </TopbarActions>
      </>
    ),
  },
  render: (args) => (
    <div>
      <Topbar {...args} />
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Minimal Topbar</h2>
        <p>
          This topbar only shows a brand and a menu button, useful for mobile
          layouts.
        </p>
      </div>
    </div>
  ),
};
