import { figma } from "@figma/code-connect";
import { RadioButton } from "./radio-button.tsx";

figma.connect(
  RadioButton,
  "https://www.figma.com/design/qz52VrR2zMqD57VorqiLmw/Atomic-Playfulness---Test?node-id=127-1283",
  {
    props: {
      disabled: figma.enum("State", {
        Disabled: true,
      }),
    },
    example: (props) => (
      <RadioButton
        disabled={props.disabled}
        option={{ value: "option-1", label: "Option 1" }}
      />
    ),
  },
);
