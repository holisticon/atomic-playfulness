import { figma } from "@figma/code-connect";
import { IconButton } from "./icon-button.tsx";

figma.connect(
  IconButton,
  "https://www.figma.com/design/qz52VrR2zMqD57VorqiLmw/Atomic-Playfulness---Test?node-id=622%3A17723",
  {
    props: {
      disabled: figma.enum("State", {
        disabled: true,
      }),
      size: figma.enum("Size", {
        Small: "small",
        "Extra Small": "extra-small",
      }),
    },
    example: (props) => (
      <IconButton
        icon={"ArrowRight"}
        disabled={props.disabled}
        size={props.size}
      />
    ),
  },
);
