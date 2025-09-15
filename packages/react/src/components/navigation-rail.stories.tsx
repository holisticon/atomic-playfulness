import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { IconButton } from "./icon-button.js";
import { Indicator } from "./indicator.js";
import {
  NavigationRail,
  NavigationRailFooter,
  NavigationRailHeader,
  NavigationRailItem,
  NavigationRailItems,
} from "./navigation-rail.js";

const meta = {
  title: "Layout/Navigation Rail",
  component: NavigationRail,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof NavigationRail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <NavigationRailItems>
        <NavigationRailItem href="#" icon="House" selected>
          Home
        </NavigationRailItem>
        <NavigationRailItem href="#" icon="Search">
          Search
        </NavigationRailItem>
        <NavigationRailItem href="#" icon="User">
          Profile
        </NavigationRailItem>
        <NavigationRailItem href="#" icon="Settings">
          Settings
        </NavigationRailItem>
      </NavigationRailItems>
    ),
  },
  render: (args) => (
    <div>
      <NavigationRail {...args} />
      <div>
        <h1>Main Content</h1>
        <p>The navigation rail shows items vertically with icons.</p>
      </div>
    </div>
  ),
};

export const WithHeaderAndFooter: Story = {
  args: {
    header: (
      <NavigationRailHeader>
        <IconButton icon="Menu" size="small" />
      </NavigationRailHeader>
    ),
    footer: (
      <NavigationRailFooter>
        <IconButton icon="User" size="small" />
      </NavigationRailFooter>
    ),
    children: (
      <NavigationRailItems>
        <NavigationRailItem href="#" icon="House" selected>
          Home
        </NavigationRailItem>
        <NavigationRailItem href="#" icon="Activity">
          Activity
        </NavigationRailItem>
        <NavigationRailItem href="#" icon="Mail">
          Messages
        </NavigationRailItem>
        <NavigationRailItem href="#" icon="Bell">
          Notifications
        </NavigationRailItem>
      </NavigationRailItems>
    ),
  },
  render: (args) => (
    <div>
      <NavigationRail {...args} />
      <div>
        <h1>With Header & Footer</h1>
        <p>Includes actions in header and footer.</p>
      </div>
    </div>
  ),
};

export const WithBadges: Story = {
  args: {
    children: (
      <NavigationRailItems>
        <NavigationRailItem href="#" icon="House" selected>
          Home
        </NavigationRailItem>
        <NavigationRailItem
          href="#"
          icon="Mail"
          badge={<Indicator>5</Indicator>}
        >
          Messages
        </NavigationRailItem>
        <NavigationRailItem
          href="#"
          icon="Bell"
          badge={<Indicator>2</Indicator>}
        >
          Notifications
        </NavigationRailItem>
        <NavigationRailItem
          href="#"
          icon="ShoppingCart"
          badge={<Indicator>1</Indicator>}
        >
          Cart
        </NavigationRailItem>
      </NavigationRailItems>
    ),
  },
  render: (args) => (
    <div>
      <NavigationRail {...args} />
      <div>
        <h1>With Badges</h1>
        <p>Items can display badges for counts or status.</p>
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  args: { children: null },
  render: () => {
    const [selectedItem, setSelectedItem] = useState("dashboard");
    const [notifications, setNotifications] = useState(3);
    const [messages, setMessages] = useState(7);

    return (
      <div>
        <NavigationRail
          header={
            <NavigationRailHeader>
              <IconButton icon="Menu" size="small" />
            </NavigationRailHeader>
          }
          footer={
            <NavigationRailFooter>
              <IconButton icon="User" size="small" />
            </NavigationRailFooter>
          }
        >
          <NavigationRailItems>
            <NavigationRailItem
              icon="House"
              selected={selectedItem === "dashboard"}
              onClick={() => setSelectedItem("dashboard")}
            >
              Dashboard
            </NavigationRailItem>
            <NavigationRailItem
              icon="Activity"
              selected={selectedItem === "analytics"}
              onClick={() => setSelectedItem("analytics")}
            >
              Analytics
            </NavigationRailItem>
            <NavigationRailItem
              icon="Mail"
              selected={selectedItem === "messages"}
              onClick={() => setSelectedItem("messages")}
              badge={
                messages > 0 ? <Indicator>{messages}</Indicator> : undefined
              }
            >
              Messages
            </NavigationRailItem>
            <NavigationRailItem
              icon="Bell"
              selected={selectedItem === "notifications"}
              onClick={() => setSelectedItem("notifications")}
              badge={
                notifications > 0 ? (
                  <Indicator>{notifications}</Indicator>
                ) : undefined
              }
            >
              Notifications
            </NavigationRailItem>
            <NavigationRailItem
              icon="Settings"
              selected={selectedItem === "settings"}
              onClick={() => setSelectedItem("settings")}
            >
              Settings
            </NavigationRailItem>
          </NavigationRailItems>
        </NavigationRail>
        <div>
          <h1>{selectedItem} Page</h1>
          <p>
            Current page: <strong>{selectedItem}</strong>
          </p>
          <p>
            Messages: <strong>{messages}</strong>
          </p>
          <p>
            Notifications: <strong>{notifications}</strong>
          </p>
          <div>
            <button onClick={() => setMessages(Math.max(0, messages - 1))}>
              Read Message
            </button>{" "}
            <button
              onClick={() => setNotifications(Math.max(0, notifications - 1))}
            >
              Clear Notification
            </button>
          </div>
        </div>
      </div>
    );
  },
};

export const Compact: Story = {
  args: {
    children: (
      <NavigationRailItems>
        <NavigationRailItem href="#" icon="House" selected>
          Home
        </NavigationRailItem>
        <NavigationRailItem href="#" icon="Search">
          Search
        </NavigationRailItem>
        <NavigationRailItem href="#" icon="User">
          Profile
        </NavigationRailItem>
        <NavigationRailItem href="#" icon="Settings">
          Settings
        </NavigationRailItem>
        <NavigationRailItem href="#" icon="Info">
          Help
        </NavigationRailItem>
      </NavigationRailItems>
    ),
  },
  render: (args) => (
    <div>
      <NavigationRail {...args} />
      <div>
        <h1>Compact Navigation</h1>
        <p>Simple navigation without header or footer.</p>
      </div>
    </div>
  ),
};
