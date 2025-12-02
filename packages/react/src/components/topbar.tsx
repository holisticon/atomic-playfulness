import { cva, cx } from "cva";
import type { ComponentPropsWithRef, ReactNode } from "react";

const topbarNavItem = cva({
  base: "hap-topbar-nav-item",
  variants: {
    current: {
      true: "hap-topbar-nav-item--current",
    },
    disabled: {
      true: "hap-topbar-nav-item--disabled",
    },
  },
});

interface TopbarProps {
  children: ReactNode;
  className?: string;
  logo?: ReactNode;
}

export function Topbar(props: TopbarProps) {
  return (
    <header className={cx("hap-topbar", "", props.className)}>
      {props.logo}
      {props.children}
    </header>
  );
}

interface TopbarNavProps {
  children: ReactNode;
  className?: string;
}

export function TopbarNav(props: TopbarNavProps) {
  return (
    <nav className={cx("hap-topbar-nav", props.className)}>
      {props.children}
    </nav>
  );
}

interface TopbarNavItemProps extends ComponentPropsWithRef<"a"> {
  current?: boolean;
  disabled?: boolean;
}

export function TopbarNavItem(props: TopbarNavItemProps) {
  return (
    <a
      {...props}
      className={topbarNavItem(props)}
      aria-disabled={props.disabled ? "true" : undefined}
    >
      {props.children}
    </a>
  );
}
