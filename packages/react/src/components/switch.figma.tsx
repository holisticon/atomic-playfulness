import { figma } from "@figma/code-connect";
import { Switch } from "./switch.tsx";

figma.connect(
  Switch,
  "https://www.figma.com/design/qz52VrR2zMqD57VorqiLmw/Atomic-Playfulness---Test?node-id=336%3A1079",
  {
    props: {
      disabled: figma.enum("State", {
        disabled: true,
      }),
      size: figma.enum("Size", {
        Small: "small",
      }),
    },
    example: (props) => <Switch disabled={props.disabled} size={props.size} />,
  },
);
