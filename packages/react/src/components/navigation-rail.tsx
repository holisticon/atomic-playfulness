import { cva } from "cva";
import { icons } from "lucide-react";
import type { ReactNode } from "react";
import { Icon } from "./icon.js";

const navigationRail = cva({
  base: "hap-navigation-rail",
});

const navigationRailItems = cva({
  base: "hap-navigation-rail-items",
});

const navigationRailItem = cva({
  base: "hap-navigation-rail-item",
  variants: {
    selected: {
      true: "hap-navigation-rail-item--selected",
    },
  },
});

const navigationRailItemIcon = cva({
  base: "hap-navigation-rail-item-icon",
});

const navigationRailItemLabel = cva({
  base: "hap-navigation-rail-item-label",
});

interface NavigationRailProps {
  children: ReactNode;
  className?: string;
  header?: ReactNode;
  footer?: ReactNode;
}

interface NavigationRailItemsProps {
  children: ReactNode;
  className?: string;
}

interface NavigationRailItemProps {
  children: ReactNode;
  className?: string;
  href?: string;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  icon?: keyof typeof icons;
  badge?: ReactNode;
}

function NavigationRail({
  children,
  className,
  header,
  footer,
}: NavigationRailProps) {
  return (
    <nav className={navigationRail({ className })}>
      {header && header}
      {children}
      {footer && footer}
    </nav>
  );
}

function NavigationRailItems({
  children,
  className,
}: NavigationRailItemsProps) {
  return <div className={navigationRailItems({ className })}>{children}</div>;
}

function NavigationRailItem({
  children,
  className,
  href,
  selected = false,
  disabled = false,
  onClick,
  icon,
  badge,
}: NavigationRailItemProps) {
  const content = (
    <>
      {icon && (
        <div className={navigationRailItemIcon()}>
          <Icon name={icon} size="medium" />
          {badge && badge}
        </div>
      )}
      <span className={navigationRailItemLabel()}>{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={navigationRailItem({ selected, className })}
        onClick={onClick}
        {...(disabled && { "aria-disabled": "true" })}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={navigationRailItem({ selected, className })}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

function NavigationRailHeader({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

function NavigationRailFooter({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

export {
  NavigationRail,
  NavigationRailFooter,
  NavigationRailHeader,
  NavigationRailItem,
  NavigationRailItems,
};
