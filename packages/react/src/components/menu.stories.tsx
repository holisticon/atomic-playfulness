import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "./button.js";
import {
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuItem,
  MenuLabel,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  MenuTrigger,
} from "./menu.js";

const meta = {
  title: "Elements/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <MenuTrigger>
          <Button>Open Menu</Button>
        </MenuTrigger>
        <MenuContent>
          <MenuItem>New File</MenuItem>
          <MenuItem>Open File</MenuItem>
          <MenuItem>Save</MenuItem>
          <MenuSeparator />
          <MenuItem>Exit</MenuItem>
        </MenuContent>
      </>
    ),
  },
};

export const WithDisabledItems: Story = {
  args: {
    children: (
      <>
        <MenuTrigger>
          <Button>Edit Menu</Button>
        </MenuTrigger>
        <MenuContent>
          <MenuItem>Undo</MenuItem>
          <MenuItem>Redo</MenuItem>
          <MenuSeparator />
          <MenuItem>Cut</MenuItem>
          <MenuItem>Copy</MenuItem>
          <MenuItem disabled>Paste (disabled)</MenuItem>
          <MenuSeparator />
          <MenuItem>Select All</MenuItem>
        </MenuContent>
      </>
    ),
  },
};

export const WithGroups: Story = {
  args: {
    children: (
      <>
        <MenuTrigger>
          <Button>View Menu</Button>
        </MenuTrigger>
        <MenuContent>
          <MenuLabel>Appearance</MenuLabel>
          <MenuItem>Zoom In</MenuItem>
          <MenuItem>Zoom Out</MenuItem>
          <MenuItem>Reset Zoom</MenuItem>
          <MenuSeparator />
          <MenuLabel>Layout</MenuLabel>
          <MenuItem>Sidebar</MenuItem>
          <MenuItem>Explorer</MenuItem>
          <MenuItem>Terminal</MenuItem>
        </MenuContent>
      </>
    ),
  },
};

export const WithCheckboxItems: Story = {
  render: () => {
    const [showBookmarks, setShowBookmarks] = useState(true);
    const [showUrls, setShowUrls] = useState(false);
    const [showPersonBar, setShowPersonBar] = useState(true);

    return (
      <Menu>
        <MenuTrigger>
          <Button>View Options</Button>
        </MenuTrigger>
        <MenuContent>
          <MenuLabel>Show/Hide</MenuLabel>
          <MenuCheckboxItem
            checked={showBookmarks}
            onCheckedChange={setShowBookmarks}
          >
            Show Bookmarks Bar
          </MenuCheckboxItem>
          <MenuCheckboxItem checked={showUrls} onCheckedChange={setShowUrls}>
            Show Full URLs
          </MenuCheckboxItem>
          <MenuCheckboxItem
            checked={showPersonBar}
            onCheckedChange={setShowPersonBar}
          >
            Show People Bar
          </MenuCheckboxItem>
        </MenuContent>
      </Menu>
    );
  },
  args: {
    children: null,
  },
};

export const WithRadioItems: Story = {
  render: () => {
    const [theme, setTheme] = useState("system");

    return (
      <div className="space-y-4">
        <div>
          Current theme: <strong>{theme}</strong>
        </div>
        <Menu>
          <MenuTrigger>
            <Button>Theme</Button>
          </MenuTrigger>
          <MenuContent>
            <MenuLabel>Choose Theme</MenuLabel>
            <MenuRadioGroup>
              <MenuRadioItem value="light" onSelect={() => setTheme("light")}>
                Light
              </MenuRadioItem>
              <MenuRadioItem value="dark" onSelect={() => setTheme("dark")}>
                Dark
              </MenuRadioItem>
              <MenuRadioItem value="system" onSelect={() => setTheme("system")}>
                System
              </MenuRadioItem>
            </MenuRadioGroup>
          </MenuContent>
        </Menu>
      </div>
    );
  },
  args: {
    children: null,
  },
};

export const WithSubmenus: Story = {
  args: {
    children: (
      <>
        <MenuTrigger>
          <Button>File Menu</Button>
        </MenuTrigger>
        <MenuContent>
          <MenuItem>New File</MenuItem>
          <MenuItem>Open File</MenuItem>
          <MenuSeparator />
          <MenuSub>
            <MenuSubTrigger>Recent Files</MenuSubTrigger>
            <MenuSubContent>
              <MenuItem>document.txt</MenuItem>
              <MenuItem>project.json</MenuItem>
              <MenuItem>notes.md</MenuItem>
              <MenuSeparator />
              <MenuItem>Clear Recent</MenuItem>
            </MenuSubContent>
          </MenuSub>
          <MenuSeparator />
          <MenuItem>Save</MenuItem>
          <MenuItem>Save As...</MenuItem>
        </MenuContent>
      </>
    ),
  },
};

export const ControlledMenu: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div className="space-y-4">
        <div>
          Menu is: <strong>{open ? "open" : "closed"}</strong>
        </div>
        <Menu open={open} onOpenChange={setOpen}>
          <MenuTrigger>
            <Button>Controlled Menu</Button>
          </MenuTrigger>
          <MenuContent>
            <MenuItem onSelect={() => console.log("Action 1")}>
              Action 1
            </MenuItem>
            <MenuItem onSelect={() => console.log("Action 2")}>
              Action 2
            </MenuItem>
            <MenuItem onSelect={() => console.log("Action 3")}>
              Action 3
            </MenuItem>
            <MenuSeparator />
            <MenuItem onSelect={() => setOpen(false)}>Close Menu</MenuItem>
          </MenuContent>
        </Menu>
      </div>
    );
  },
  args: {
    children: null,
  },
};
