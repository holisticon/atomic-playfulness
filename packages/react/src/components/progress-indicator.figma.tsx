import { figma } from "@figma/code-connect";
import { ProgressIndicator } from "./progress-indicator.tsx";

figma.connect(
  ProgressIndicator,
  "https://www.figma.com/design/qz52VrR2zMqD57VorqiLmw/Atomic-Playfulness---Test?node-id=83%3A2346",
  {
    props: {
      variant: figma.enum("Style", {
        "Linear Countdown": "linear-countdown",
        Linear: "linear",
      }),
    },
    example: (props) => (
      <ProgressIndicator variant={props.variant} value={47} />
    ),
  },
);
