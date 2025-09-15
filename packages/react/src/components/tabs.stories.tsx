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
          <div>
            <h3>Tab 1 Content</h3>
            <p>This is the content for the first tab.</p>
          </div>
        </TabsContent>
        <TabsContent value="tab2">
          <div>
            <h3>Tab 2 Content</h3>
            <p>This is the content for the second tab.</p>
          </div>
        </TabsContent>
        <TabsContent value="tab3">
          <div>
            <h3>Tab 3 Content</h3>
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
          <div>
            <h3>Dashboard</h3>
            <ul>
              <li>Metric 1</li>
              <li>Metric 2</li>
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="analytics">
          <div>
            <h3>Analytics</h3>
            <p>Charts and graphs would go here...</p>
          </div>
        </TabsContent>
        <TabsContent value="settings">
          <div>
            <h3>Settings</h3>
            <div>
              <div>
                <label>Setting 1</label>
                <input type="text" />
              </div>
              <div>
                <label>Setting 2</label>
                <input type="text" />
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
          <div>
            <p>First available tab content.</p>
          </div>
        </TabsContent>
        <TabsContent value="available2">
          <div>
            <p>Second available tab content.</p>
          </div>
        </TabsContent>
        <TabsContent value="disabled">
          <div>
            <p>This content won't be shown because the tab is disabled.</p>
          </div>
        </TabsContent>
        <TabsContent value="available3">
          <div>
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
      <div>
        <div>
          Current active tab: <strong>{activeTab}</strong>
        </div>
        <div>
          <Button variant="secondary" onClick={() => setActiveTab("profile")}>
            Go to Profile
          </Button>{" "}
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
            <div>
              <h3>Profile Settings</h3>
              <p>Manage your profile information here.</p>
            </div>
          </TabsContent>
          <TabsContent value="account">
            <div>
              <h3>Account Settings</h3>
              <p>Manage your account settings here.</p>
            </div>
          </TabsContent>
          <TabsContent value="password">
            <div>
              <h3>Password Settings</h3>
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
        <div>Manual activation: click or press Enter/Space to activate.</div>
        <TabsList>
          <TabsTrigger value="manual1">Manual 1</TabsTrigger>
          <TabsTrigger value="manual2">Manual 2</TabsTrigger>
          <TabsTrigger value="manual3">Manual 3</TabsTrigger>
        </TabsList>
        <TabsContent value="manual1">
          <div>
            <p>Content for manually activated tab 1.</p>
          </div>
        </TabsContent>
        <TabsContent value="manual2">
          <div>
            <p>Content for manually activated tab 2.</p>
          </div>
        </TabsContent>
        <TabsContent value="manual3">
          <div>
            <p>Content for manually activated tab 3.</p>
          </div>
        </TabsContent>
      </>
    ),
  },
};
