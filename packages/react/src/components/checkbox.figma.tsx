import { figma } from "@figma/code-connect";
import { Checkbox } from "./checkbox.tsx";

figma.connect(
  Checkbox,
  "https://www.figma.com/design/qz52VrR2zMqD57VorqiLmw/Atomic-Playfulness---Test?node-id=127%3A712",
  {
    props: {
      indeterminate: figma.enum("Type", {
        Indeterminate: true,
      }),
      disabled: figma.enum("State", {
        Disabled: true,
      }),
      showLabel: figma.boolean("Show Label"),
    },
    example: (props) => (
      <Checkbox
        indeterminate={props.indeterminate}
        disabled={props.disabled}
        showLabel={props.showLabel}
      >
        Label
      </Checkbox>
    ),
  },
);
