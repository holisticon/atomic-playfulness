import { figma } from "@figma/code-connect";
import { Alert } from "./alert.tsx";

figma.connect(
  Alert,
  "https://www.figma.com/design/qz52VrR2zMqD57VorqiLmw/Atomic-Playfulness---Test?node-id=450%3A5624",
  {
    props: {
      feedback: figma.enum("Variant", {
        Critical: "critical",
        Caution: "caution",
        Positive: "positive",
        Neutral: "neutral",
        New: "new",
      }),
      showIcon: figma.boolean("Show Iconbutton"),
    },
    example: (props) => (
      <Alert feedback={props.feedback} showIcon={props.showIcon}>
        Neutral message
      </Alert>
    ),
  },
);
