import { figma } from "@figma/code-connect";
import { Textarea } from "./textarea.tsx";

figma.connect(
  Textarea,
  "https://www.figma.com/design/qz52VrR2zMqD57VorqiLmw/Atomic-Playfulness---Test?node-id=144%3A3327",
  {
    props: {
      disabled: figma.enum("State", {
        Disabled: true,
      }),
      readOnly: figma.enum("State", {
        ReadOnly: true,
      }),
      // No matching props could be found for these Figma properties:
      // "showTrailingIcon": figma.boolean('Show Trailing Icon'),
      // "showLeadingIcon": figma.boolean('Show Leading Icon'),
    },
    example: (props) => (
      <Textarea
        disabled={props.disabled}
        readOnly={props.readOnly}
        label="Label"
        placeholder="Placeholder"
      />
    ),
  },
);
