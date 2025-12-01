import { figma } from "@figma/code-connect";
import { Button } from "./button.tsx";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
} from "./menu.tsx";

figma.connect(
  Menu,
  "https://www.figma.com/design/qz52VrR2zMqD57VorqiLmw/Atomic-Playfulness---Test?node-id=470%3A6196",
  {
    props: {},
    example: () => (
      <Menu>
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
      </Menu>
    ),
  },
);
