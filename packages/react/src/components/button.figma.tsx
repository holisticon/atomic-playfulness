import { figma } from "@figma/code-connect";
import { ArrowRight } from "lucide-react";
import { Button } from "./button.tsx";

figma.connect(
  Button,
  "https://www.figma.com/design/qz52VrR2zMqD57VorqiLmw/Atomic-Playfulness---Test?node-id=28%3A58",
  {
    props: {
      // These props were automatically mapped based on your linked code:
      disabled: figma.enum("State", {
        disabled: true,
      }),
      variant: figma.enum("Type", {
        primary: "primary",
        secondary: "secondary",
        tertiary: "tertiary",
        destructive: "destructive",
      }),
      iconVariant: figma.enum("Variant", {
        "Text only": "noIcon",
        "Icon left": "iconLeft",
        "Icon right": "iconRight",
      }),
      size: figma.enum("Size", {
        Small: "small",
        Default: "default",
      }),
      children: figma.string("Text"),
      icon: figma.instance("Icon left"),
    },
    example: () => (
      <Button
        variant={"primary"}
        size={"default"}
        iconVariant={"iconRight"}
        icon={<ArrowRight />}
        disabled={false}
      >
        Button
      </Button>
    ),
  },
);
