import { figma } from "@figma/code-connect";
import { Icon } from "./icon.tsx";
import {
  NavigationDrawer,
  NavigationDrawerItem,
  NavigationDrawerMenu,
  NavigationDrawerTitle,
} from "./navigation-drawer.tsx";

figma.connect(
  NavigationDrawer,
  "https://www.figma.com/design/qz52VrR2zMqD57VorqiLmw/Atomic-Playfulness---Test?node-id=437%3A3330",
  {
    props: {},
    example: () => (
      <NavigationDrawer>
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
        </NavigationDrawerMenu>
      </NavigationDrawer>
    ),
  },
);
