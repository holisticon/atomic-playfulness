import { figma } from "@figma/code-connect";
import { Icon } from "./icon.tsx";
import { Tag } from "./tag.tsx";

figma.connect(
  Tag,
  "https://www.figma.com/design/qz52VrR2zMqD57VorqiLmw/Atomic-Playfulness---Test?node-id=108%3A533",
  {
    props: {
      closable: figma.boolean("Closeable"),
    },
    example: (props) => (
      <Tag closable={props.closable}>
        <Icon name="House" size="small" />
        Tag Label
      </Tag>
    ),
  },
);
