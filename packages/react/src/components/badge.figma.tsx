import { figma } from "@figma/code-connect";
import { Badge } from "./badge.tsx";

figma.connect(
  Badge,
  "https://www.figma.com/design/qz52VrR2zMqD57VorqiLmw/Atomic-Playfulness---Test?node-id=144%3A3779",
  {
    props: {
      strong: figma.enum("Weight", {
        Strong: true,
      }),
      feedback: figma.enum("Variant", {
        Positive: "positive",
        Caution: "caution",
        Neutral: "neutral",
        Critical: "critical",
        New: "new",
        AI: "ai",
      }),
    },
    example: (props) => (
      <Badge strong={props.strong} feedback={props.feedback}>
        Neutral message
      </Badge>
    ),
  },
);
