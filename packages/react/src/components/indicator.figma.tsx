import { figma } from "@figma/code-connect";
import { Indicator } from "./indicator.tsx";

figma.connect(
  Indicator,
  "https://www.figma.com/design/qz52VrR2zMqD57VorqiLmw/Atomic-Playfulness---Test?node-id=437%3A3758",
  {
    props: {},
    example: () => <Indicator>3</Indicator>,
  },
);
