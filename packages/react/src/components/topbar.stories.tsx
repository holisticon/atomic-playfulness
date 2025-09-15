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
          <h1>My App</h1>
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
      <div>
        <h2>Page Content</h2>
        <p>This shows the topbar with brand, navigation, and actions.</p>
      </div>
    </div>
  ),
};

export const WithLogo: Story = {
  args: {
    children: (
      <>
        <TopbarBrand>
          <div>L</div>
          <span>Logo</span>
        </TopbarBrand>
        <TopbarNav>
          <TopbarNavItem href="#" current>
            Dashboard
          </TopbarNavItem>
          <TopbarNavItem href="#">Projects</TopbarNavItem>
          <TopbarNavItem href="#">Team</TopbarNavItem>
        </TopbarNav>
        <TopbarActions>
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
      <div>
        <h2>Dashboard</h2>
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
          <h1>My App</h1>
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
      <div>
        <h2>Page with Disabled Nav Item</h2>
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
            <h1>Interactive App</h1>
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
          <TopbarActions>
            <div>
              <IconButton icon="Bell" size="small" />
              {notifications > 0 && <span>({notifications})</span>}
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
        <div>
          <h2>{currentPage} Page</h2>
          <p>
            Current page: <strong>{currentPage}</strong>
          </p>
          <p>
            Notifications: <strong>{notifications}</strong>
          </p>
          <p>Click navigation items to change pages, or clear notifications.</p>
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
          <h1>Brand Only</h1>
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
      <div>
        <h2>Minimal Topbar</h2>
        <p>This topbar only shows a brand and a menu button.</p>
      </div>
    </div>
  ),
};
