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
  parameters: {
    layout: "fullscreen",
  },
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
    <div className="flex h-screen">
      <NavigationRail {...args} />
      <div className="flex-1 p-8 bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">Main Content</h1>
        <p>
          The navigation rail is a compact navigation component that displays
          navigation items vertically with icons and labels.
        </p>
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
    <div className="flex h-screen">
      <NavigationRail {...args} />
      <div className="flex-1 p-8 bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">With Header & Footer</h1>
        <p>
          This navigation rail includes a header with a menu button and a footer
          with a profile button.
        </p>
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
    <div className="flex h-screen">
      <NavigationRail {...args} />
      <div className="flex-1 p-8 bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">With Badges</h1>
        <p>
          Navigation rail items can display badges to show counts or status
          indicators.
        </p>
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [selectedItem, setSelectedItem] = useState("dashboard");
    const [notifications, setNotifications] = useState(3);
    const [messages, setMessages] = useState(7);

    return (
      <div className="flex h-screen">
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
        <div className="flex-1 p-8 bg-gray-50">
          <h1 className="text-2xl font-bold mb-4 capitalize">
            {selectedItem} Page
          </h1>
          <div className="space-y-4">
            <p>
              Current page: <strong>{selectedItem}</strong>
            </p>
            <p>
              Messages: <strong>{messages}</strong>
            </p>
            <p>
              Notifications: <strong>{notifications}</strong>
            </p>

            <div className="space-x-2">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => setMessages(Math.max(0, messages - 1))}
              >
                Read Message
              </button>
              <button
                className="px-4 py-2 bg-yellow-500 text-white rounded"
                onClick={() => setNotifications(Math.max(0, notifications - 1))}
              >
                Clear Notification
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  },
  args: {
    children: null,
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
    <div className="flex h-screen">
      <NavigationRail {...args} />
      <div className="flex-1 p-8 bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">Compact Navigation</h1>
        <p>
          A simple navigation rail without header or footer, perfect for
          minimalist layouts.
        </p>
      </div>
    </div>
  ),
};
