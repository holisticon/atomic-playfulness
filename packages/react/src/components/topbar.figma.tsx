import { figma } from "@figma/code-connect";
import { Star } from "lucide-react";
import { Button } from "./button.tsx";
import { Topbar, TopbarNav, TopbarNavItem } from "./topbar.tsx";

figma.connect(
  Topbar,
  "https://www.figma.com/design/qz52VrR2zMqD57VorqiLmw/Atomic-Playfulness---Test?node-id=59%3A713",
  {
    props: {
      logo: figma.instance("LogoTopbar"),
    },
    example: () => (
      <Topbar logo={<Star />}>
        <h1 className="hap-headline--sm">FANCY LOGO</h1>

        <TopbarNav>
          <TopbarNavItem href="#" current>
            Home
          </TopbarNavItem>
          <TopbarNavItem href="#">About</TopbarNavItem>
          <TopbarNavItem href="#">Services</TopbarNavItem>
        </TopbarNav>

        <Button variant="secondary" size="small">
          Sign In
        </Button>
      </Topbar>
    ),
  },
);
