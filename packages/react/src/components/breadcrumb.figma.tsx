import { figma } from "@figma/code-connect";
import { Breadcrumb } from "./breadcrumb.tsx";

figma.connect(
  Breadcrumb,
  "https://www.figma.com/design/qz52VrR2zMqD57VorqiLmw/Atomic-Playfulness---Test?node-id=574%3A13728",
  {
    props: {},
    example: () => (
      <Breadcrumb
        items={[
          { label: "Navigation 1", href: "/" },
          { label: "Navigation 2", href: "/navigation-2" },
          { label: "Current Page", href: "/navigation-2/current-page" },
        ]}
      />
    ),
  },
);
