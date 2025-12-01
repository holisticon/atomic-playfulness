import { figma } from "@figma/code-connect";
import {
  NavigationRail,
  NavigationRailItem,
  NavigationRailItems,
} from "./navigation-rail.tsx";

figma.connect(
  NavigationRail,
  "https://www.figma.com/design/qz52VrR2zMqD57VorqiLmw/Atomic-Playfulness---Test?node-id=437%3A4418",
  {
    props: {},
    example: () => (
      <NavigationRail>
        <NavigationRailItems>
          <NavigationRailItem href="#" icon="House" selected>
            Home
          </NavigationRailItem>
          <NavigationRailItem href="#" icon="User">
            Profile
          </NavigationRailItem>
        </NavigationRailItems>
      </NavigationRail>
    ),
  },
);
