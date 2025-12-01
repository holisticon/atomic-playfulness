import { figma } from "@figma/code-connect";
import { Search } from "./search.tsx";

figma.connect(
  Search,
  "https://www.figma.com/design/qz52VrR2zMqD57VorqiLmw/Atomic-Playfulness---Test?node-id=108-382",
  {
    props: {},
    example: () => <Search />,
  },
);
