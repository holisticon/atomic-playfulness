import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cva } from "cva";
import type { ReactNode } from "react";
import { IconButton } from "./icon-button.js";

const navigationDrawer = cva({
  base: "hap-navigation-drawer",
});

const navigationDrawerTitle = cva({
  base: "hap-navigation-drawer-title",
});

const navigationDrawerItem = cva({
  base: "hap-navigation-drawer-item",
});

const drawerOverlay = cva({
  base: "",
});

const drawerContent = cva({
  base: "",
  variants: {
    side: {
      top: "",
      bottom: "",
      left: "",
      right: "",
    },
  },
  defaultVariants: { side: "left" },
});

interface NavigationDrawerProps {
  children: ReactNode;
  className?: string;
}

interface NavigationDrawerTitleProps {
  children: ReactNode;
  className?: string;
}

interface NavigationDrawerItemProps {
  children: ReactNode;
  className?: string;
  href?: string;
  icon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

interface DrawerProps {
  children: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

interface DrawerContentProps {
  children: ReactNode;
  className?: string;
  side?: "top" | "right" | "bottom" | "left";
  showClose?: boolean;
  onClose?: () => void;
}

// Standalone Navigation Drawer (for static sidebars)
function NavigationDrawer({ children, className }: NavigationDrawerProps) {
  return <nav className={navigationDrawer({ className })}>{children}</nav>;
}

function NavigationDrawerTitle({
  children,
  className,
}: NavigationDrawerTitleProps) {
  return <h2 className={navigationDrawerTitle({ className })}>{children}</h2>;
}

function NavigationDrawerItem({
  children,
  className,
  href,
  icon,
  onClick,
  disabled,
}: NavigationDrawerItemProps) {
  if (href) {
    return (
      <a className={navigationDrawerItem({ className })} href={href}>
        {icon && icon}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button
      className={navigationDrawerItem({ className })}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {icon && icon}
      <span>{children}</span>
    </button>
  );
}

function NavigationDrawerMenu({ children }: { children: ReactNode }) {
  return <menu>{children}</menu>;
}

// Modal Drawer (for overlay drawers)
function Drawer({ children, open, defaultOpen, onOpenChange }: DrawerProps) {
  return (
    <DialogPrimitive.Root
      {...(open !== undefined && { open })}
      {...(defaultOpen !== undefined && { defaultOpen })}
      {...(onOpenChange !== undefined && { onOpenChange })}
    >
      {children}
    </DialogPrimitive.Root>
  );
}

function DrawerTrigger({ children }: { children: ReactNode }) {
  return <DialogPrimitive.Trigger asChild>{children}</DialogPrimitive.Trigger>;
}

function DrawerContent({
  children,
  className,
  side = "left",
  showClose = true,
  onClose,
}: DrawerContentProps) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className={drawerOverlay()} />
      <DialogPrimitive.Content className={drawerContent({ side, className })}>
        <div className={navigationDrawer()}>{children}</div>
        {showClose && (
          <DialogPrimitive.Close onClick={onClose}>
            <IconButton icon="X" size="small" />
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

const DrawerClose = DialogPrimitive.Close;

export {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
  NavigationDrawer,
  NavigationDrawerItem,
  NavigationDrawerMenu,
  NavigationDrawerTitle,
};
