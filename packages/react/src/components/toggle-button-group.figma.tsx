import { figma } from "@figma/code-connect";
import { ToggleButton, ToggleButtonGroup } from "./toggle-button-group.tsx";

figma.connect(
  ToggleButtonGroup,
  "https://www.figma.com/design/qz52VrR2zMqD57VorqiLmw/Atomic-Playfulness---Test?node-id=3262%3A4313",
  {
    props: {
      size: figma.enum("Size", {
        Default: "default",
        Big: "big",
      }),
    },
    example: (props) => (
      <ToggleButtonGroup>
        <ToggleButton value="left" pressed>
          Left
        </ToggleButton>
        <ToggleButton value="center" size={props.size}>
          Center
        </ToggleButton>
        <ToggleButton value="right">Right</ToggleButton>
      </ToggleButtonGroup>
    ),
  },
);
