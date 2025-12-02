import { figma } from "@figma/code-connect";
import { TextField } from "./text-field.tsx";

figma.connect(
  TextField,
  "https://www.figma.com/design/qz52VrR2zMqD57VorqiLmw/Atomic-Playfulness---Test?node-id=131%3A1703",
  {
    props: {
      disabled: figma.enum("State", {
        Disabled: true,
      }),
      readOnly: figma.enum("State", {
        ReadOnly: true,
      }),
      brand: figma.enum("Size", {
        Brand: true,
      }),
      // No matching props could be found for these Figma properties:
      // "showTrailingIcon": figma.boolean('Show Trailing Icon'),
      // "showLeadingIcon": figma.boolean('Show Leading Icon'),
    },
    example: (props) => (
      <TextField
        brand={props.brand}
        label="Label"
        placeholder="Placeholder"
        disabled={props.disabled}
        readOnly={props.readOnly}
      />
    ),
  },
);
