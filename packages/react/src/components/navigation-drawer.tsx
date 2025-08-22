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
  base: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
});

const drawerContent = cva({
  base: "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  variants: {
    side: {
      top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
      bottom:
        "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
      left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
      right:
        "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
    },
  },
  defaultVariants: {
    side: "left",
  },
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
          <DialogPrimitive.Close
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
            onClick={onClose}
          >
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
