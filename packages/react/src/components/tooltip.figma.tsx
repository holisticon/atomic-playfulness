import { figma } from "@figma/code-connect";
import { Button } from "./button.tsx";
import { Tooltip } from "./tooltip.tsx";

figma.connect(
  Tooltip,
  "https://www.figma.com/design/qz52VrR2zMqD57VorqiLmw/Atomic-Playfulness---Test?node-id=600%3A14326",
  {
    props: {},
    example: () => (
      <Tooltip content={"Tooltip content"}>
        <Button>Hover me</Button>
      </Tooltip>
    ),
  },
);
