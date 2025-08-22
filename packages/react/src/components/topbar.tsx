import { cva } from "cva";
import type { ReactNode } from "react";

const topbar = cva({
  base: "hap-topbar",
});

const topbarNav = cva({
  base: "hap-topbar-nav",
});

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
}

interface TopbarNavProps {
  children: ReactNode;
  className?: string;
}

interface TopbarNavItemProps {
  children: ReactNode;
  className?: string;
  href?: string;
  current?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

interface TopbarBrandProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

interface TopbarActionsProps {
  children: ReactNode;
  className?: string;
}

function Topbar({ children, className }: TopbarProps) {
  return <header className={topbar({ className })}>{children}</header>;
}

function TopbarBrand({ children, className, href, onClick }: TopbarBrandProps) {
  if (href) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
}

function TopbarNav({ children, className }: TopbarNavProps) {
  return <nav className={topbarNav({ className })}>{children}</nav>;
}

function TopbarNavItem({
  children,
  className,
  href,
  current = false,
  disabled = false,
  onClick,
}: TopbarNavItemProps) {
  if (href) {
    return (
      <a
        href={href}
        className={topbarNavItem({ current, disabled, className })}
        onClick={onClick}
        {...(disabled && { "aria-disabled": "true" })}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={topbarNavItem({ current, disabled, className })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

function TopbarActions({ children, className }: TopbarActionsProps) {
  return <div className={className}>{children}</div>;
}

export { Topbar, TopbarActions, TopbarBrand, TopbarNav, TopbarNavItem };
