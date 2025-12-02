import { figma } from "@figma/code-connect";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from "./dropdown.tsx";

figma.connect(
  Dropdown,
  "https://www.figma.com/design/qz52VrR2zMqD57VorqiLmw/Atomic-Playfulness---Test?node-id=143-2826",
  {
    props: {
      disabled: figma.enum("State", {
        Disabled: true,
      }),
    },
    example: (props) => (
      <Dropdown disabled={props.disabled}>
        <DropdownTrigger>Select a fruit...</DropdownTrigger>
        <DropdownContent>
          <DropdownItem value="apple">Apple</DropdownItem>
          <DropdownItem value="banana">Banana</DropdownItem>
          <DropdownItem value="orange">Orange</DropdownItem>
          <DropdownItem value="grape">Grape</DropdownItem>
          <DropdownItem value="strawberry">Strawberry</DropdownItem>
        </DropdownContent>
      </Dropdown>
    ),
  },
);
