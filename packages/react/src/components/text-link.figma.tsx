import { figma } from "@figma/code-connect";
import { TextLink } from "./text-link.tsx";

figma.connect(
  TextLink,
  "https://www.figma.com/design/qz52VrR2zMqD57VorqiLmw/Atomic-Playfulness---Test?node-id=609%3A16720",
  {
    props: {
      size: figma.enum("Size", {
        Regular: "standard",
        Small: "small",
        Footnotes: "extra-small",
      }),
    },
    example: (props) => <TextLink size={props.size} />,
  },
);
