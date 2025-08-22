import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "./button.js";
import { Icon } from "./icon.js";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
  NavigationDrawer,
  NavigationDrawerItem,
  NavigationDrawerMenu,
  NavigationDrawerTitle,
} from "./navigation-drawer.js";

const meta = {
  title: "Elements/Navigation Drawer",
  component: NavigationDrawer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NavigationDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Static: Story = {
  args: {
    children: (
      <>
        <NavigationDrawerTitle>Navigation</NavigationDrawerTitle>
        <NavigationDrawerMenu>
          <NavigationDrawerItem
            href="#"
            icon={<Icon name="House" size="small" />}
          >
            Home
          </NavigationDrawerItem>
          <NavigationDrawerItem
            href="#"
            icon={<Icon name="User" size="small" />}
          >
            Profile
          </NavigationDrawerItem>
          <NavigationDrawerItem
            href="#"
            icon={<Icon name="Settings" size="small" />}
          >
            Settings
          </NavigationDrawerItem>
          <NavigationDrawerItem
            href="#"
            icon={<Icon name="Mail" size="small" />}
          >
            Messages
          </NavigationDrawerItem>
        </NavigationDrawerMenu>
      </>
    ),
  },
  render: (args) => (
    <div className="flex h-screen">
      <NavigationDrawer {...args} />
      <div className="flex-1 p-8 bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">Main Content Area</h1>
        <p>
          This demonstrates a static navigation drawer that's always visible.
        </p>
      </div>
    </div>
  ),
};

export const WithGroups: Story = {
  args: {
    children: (
      <>
        <NavigationDrawerTitle>Dashboard</NavigationDrawerTitle>
        <NavigationDrawerMenu>
          <NavigationDrawerItem
            href="#"
            icon={<Icon name="House" size="small" />}
          >
            Overview
          </NavigationDrawerItem>
          <NavigationDrawerItem
            href="#"
            icon={<Icon name="Activity" size="small" />}
          >
            Analytics
          </NavigationDrawerItem>
        </NavigationDrawerMenu>

        <NavigationDrawerTitle>Account</NavigationDrawerTitle>
        <NavigationDrawerMenu>
          <NavigationDrawerItem
            href="#"
            icon={<Icon name="User" size="small" />}
          >
            Profile
          </NavigationDrawerItem>
          <NavigationDrawerItem
            href="#"
            icon={<Icon name="Settings" size="small" />}
          >
            Settings
          </NavigationDrawerItem>
          <NavigationDrawerItem
            href="#"
            icon={<Icon name="CreditCard" size="small" />}
          >
            Billing
          </NavigationDrawerItem>
        </NavigationDrawerMenu>
      </>
    ),
  },
  render: (args) => (
    <div className="flex h-screen">
      <NavigationDrawer {...args} />
      <div className="flex-1 p-8 bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">Grouped Navigation</h1>
        <p>This shows navigation items organized into groups with titles.</p>
      </div>
    </div>
  ),
};

export const WithButtons: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState("dashboard");

    return (
      <div className="flex h-screen">
        <NavigationDrawer>
          <NavigationDrawerTitle>Menu</NavigationDrawerTitle>
          <NavigationDrawerMenu>
            <NavigationDrawerItem
              icon={<Icon name="House" size="small" />}
              onClick={() => setActiveItem("dashboard")}
            >
              Dashboard {activeItem === "dashboard" && "✓"}
            </NavigationDrawerItem>
            <NavigationDrawerItem
              icon={<Icon name="Users" size="small" />}
              onClick={() => setActiveItem("users")}
            >
              Users {activeItem === "users" && "✓"}
            </NavigationDrawerItem>
            <NavigationDrawerItem
              icon={<Icon name="FolderOpen" size="small" />}
              onClick={() => setActiveItem("projects")}
            >
              Projects {activeItem === "projects" && "✓"}
            </NavigationDrawerItem>
          </NavigationDrawerMenu>
        </NavigationDrawer>
        <div className="flex-1 p-8 bg-gray-50">
          <h1 className="text-2xl font-bold mb-4">
            Active: {activeItem.charAt(0).toUpperCase() + activeItem.slice(1)}
          </h1>
          <p>
            This shows navigation items as interactive buttons with click
            handlers.
          </p>
        </div>
      </div>
    );
  },
  args: {
    children: null,
  },
};

export const ModalDrawer: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-4">Modal Navigation Drawer</h1>
          <p className="mb-4">
            This drawer opens as an overlay modal. Click the button below to
            open it.
          </p>

          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger>
              <Button>Open Navigation Drawer</Button>
            </DrawerTrigger>
            <DrawerContent side="left">
              <NavigationDrawerTitle>Navigation</NavigationDrawerTitle>
              <NavigationDrawerMenu>
                <NavigationDrawerItem
                  onClick={() => {
                    console.log("Home clicked");
                    setOpen(false);
                  }}
                  icon={<Icon name="House" size="small" />}
                >
                  Home
                </NavigationDrawerItem>
                <NavigationDrawerItem
                  onClick={() => {
                    console.log("Profile clicked");
                    setOpen(false);
                  }}
                  icon={<Icon name="User" size="small" />}
                >
                  Profile
                </NavigationDrawerItem>
                <NavigationDrawerItem
                  onClick={() => {
                    console.log("Settings clicked");
                    setOpen(false);
                  }}
                  icon={<Icon name="Settings" size="small" />}
                >
                  Settings
                </NavigationDrawerItem>
              </NavigationDrawerMenu>

              <div className="mt-auto">
                <DrawerClose>
                  <Button variant="secondary" className="w-full">
                    Close Drawer
                  </Button>
                </DrawerClose>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </>
    );
  },
  args: {
    children: null,
  },
};

export const RightSideDrawer: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-4">Right Side Drawer</h1>
          <p className="mb-4">
            This drawer opens from the right side of the screen.
          </p>

          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger>
              <Button>Open Right Drawer</Button>
            </DrawerTrigger>
            <DrawerContent side="right">
              <NavigationDrawerTitle>Tools</NavigationDrawerTitle>
              <NavigationDrawerMenu>
                <NavigationDrawerItem
                  onClick={() => setOpen(false)}
                  icon={<Icon name="Search" size="small" />}
                >
                  Search
                </NavigationDrawerItem>
                <NavigationDrawerItem
                  onClick={() => setOpen(false)}
                  icon={<Icon name="BookOpen" size="small" />}
                >
                  Documentation
                </NavigationDrawerItem>
                <NavigationDrawerItem
                  onClick={() => setOpen(false)}
                  icon={<Icon name="Info" size="small" />}
                >
                  Help
                </NavigationDrawerItem>
              </NavigationDrawerMenu>
            </DrawerContent>
          </Drawer>
        </div>
      </>
    );
  },
  args: {
    children: null,
  },
};
