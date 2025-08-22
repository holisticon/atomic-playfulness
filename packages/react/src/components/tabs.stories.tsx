import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "./button.js";
import { Icon } from "./icon.js";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs.js";

const meta = {
  title: "Elements/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: "tab1",
    children: (
      <>
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Tab 1 Content</h3>
            <p>
              This is the content for the first tab. You can put any content
              here.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="tab2">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Tab 2 Content</h3>
            <p>
              This is the content for the second tab with different information.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="tab3">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Tab 3 Content</h3>
            <p>This is the content for the third tab.</p>
          </div>
        </TabsContent>
      </>
    ),
  },
};

export const WithIcons: Story = {
  args: {
    defaultValue: "dashboard",
    children: (
      <>
        <TabsList>
          <TabsTrigger value="dashboard">
            <Icon name="House" size="small" />
            Dashboard
          </TabsTrigger>
          <TabsTrigger value="analytics">
            <Icon name="Activity" size="small" />
            Analytics
          </TabsTrigger>
          <TabsTrigger value="settings">
            <Icon name="Settings" size="small" />
            Settings
          </TabsTrigger>
        </TabsList>
        <TabsContent value="dashboard">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4">Dashboard</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-100 rounded">Metric 1</div>
              <div className="p-4 bg-gray-100 rounded">Metric 2</div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="analytics">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4">Analytics</h3>
            <p>Charts and graphs would go here...</p>
          </div>
        </TabsContent>
        <TabsContent value="settings">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4">Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Setting 1</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded border p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Setting 2</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded border p-2"
                />
              </div>
            </div>
          </div>
        </TabsContent>
      </>
    ),
  },
};

export const WithDisabled: Story = {
  args: {
    defaultValue: "available1",
    children: (
      <>
        <TabsList>
          <TabsTrigger value="available1">Available 1</TabsTrigger>
          <TabsTrigger value="available2">Available 2</TabsTrigger>
          <TabsTrigger value="disabled" disabled>
            Disabled
          </TabsTrigger>
          <TabsTrigger value="available3">Available 3</TabsTrigger>
        </TabsList>
        <TabsContent value="available1">
          <div className="p-4">
            <p>First available tab content.</p>
          </div>
        </TabsContent>
        <TabsContent value="available2">
          <div className="p-4">
            <p>Second available tab content.</p>
          </div>
        </TabsContent>
        <TabsContent value="disabled">
          <div className="p-4">
            <p>This content won't be shown because the tab is disabled.</p>
          </div>
        </TabsContent>
        <TabsContent value="available3">
          <div className="p-4">
            <p>Third available tab content.</p>
          </div>
        </TabsContent>
      </>
    ),
  },
};

export const ControlledTabs: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState("profile");

    return (
      <div className="space-y-4">
        <div>
          Current active tab: <strong>{activeTab}</strong>
        </div>
        <div className="space-x-2">
          <Button variant="secondary" onClick={() => setActiveTab("profile")}>
            Go to Profile
          </Button>
          <Button variant="secondary" onClick={() => setActiveTab("account")}>
            Go to Account
          </Button>
        </div>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Profile Settings</h3>
              <p>Manage your profile information here.</p>
            </div>
          </TabsContent>
          <TabsContent value="account">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Account Settings</h3>
              <p>Manage your account settings here.</p>
            </div>
          </TabsContent>
          <TabsContent value="password">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Password Settings</h3>
              <p>Change your password here.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    );
  },
  args: {
    children: null,
  },
};

export const ManualActivation: Story = {
  args: {
    defaultValue: "manual1",
    activationMode: "manual",
    children: (
      <>
        <div className="mb-4 text-sm text-gray-600">
          These tabs require clicking or pressing Enter/Space to activate
          (manual activation mode)
        </div>
        <TabsList>
          <TabsTrigger value="manual1">Manual 1</TabsTrigger>
          <TabsTrigger value="manual2">Manual 2</TabsTrigger>
          <TabsTrigger value="manual3">Manual 3</TabsTrigger>
        </TabsList>
        <TabsContent value="manual1">
          <div className="p-4">
            <p>Content for manually activated tab 1.</p>
          </div>
        </TabsContent>
        <TabsContent value="manual2">
          <div className="p-4">
            <p>Content for manually activated tab 2.</p>
          </div>
        </TabsContent>
        <TabsContent value="manual3">
          <div className="p-4">
            <p>Content for manually activated tab 3.</p>
          </div>
        </TabsContent>
      </>
    ),
  },
};
