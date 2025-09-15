import * as ToastPrimitive from "@radix-ui/react-toast";
import { cva } from "cva";
import type { ReactNode } from "react";
import { IconButton } from "./icon-button.js";

const toastVariants = cva({
  base: "hap-snackbar data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:slide-in-from-bottom-full data-[state=closed]:slide-out-to-bottom-full",
  variants: {
    multiline: {
      true: "hap-snackbar-multiline",
    },
  },
});

const toastContent = cva({
  base: "hap-snackbar-content",
});

const toastActions = cva({
  base: "hap-snackbar-actions",
});

const snackbarButton = cva({
  base: "hap-snackbar-button",
});

interface SnackbarProviderProps {
  children: ReactNode;
  label?: string;
  duration?: number;
  swipeDirection?: "right" | "left" | "up" | "down";
  swipeThreshold?: number;
}

interface SnackbarProps {
  children: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  type?: "foreground" | "background";
  duration?: number;
  multiline?: boolean;
}

interface SnackbarContentProps {
  children: ReactNode;
  className?: string;
}

interface SnackbarActionProps {
  children: ReactNode;
  className?: string;
  altText: string;
  onClick?: () => void;
}

interface SnackbarCloseProps {
  className?: string;
  onClick?: () => void;
}

function SnackbarProvider({
  children,
  label = "Notification",
  duration = 5000,
  swipeDirection = "right",
  swipeThreshold = 50,
}: SnackbarProviderProps) {
  return (
    <ToastPrimitive.Provider
      label={label}
      duration={duration}
      swipeDirection={swipeDirection}
      swipeThreshold={swipeThreshold}
    >
      {children}
      <SnackbarViewport />
    </ToastPrimitive.Provider>
  );
}

function SnackbarViewport({ className }: { className?: string }) {
  return <ToastPrimitive.Viewport className={className} />;
}

function Snackbar({
  children,
  open,
  defaultOpen,
  onOpenChange,
  type = "foreground",
  duration,
  multiline = false,
}: SnackbarProps) {
  return (
    <ToastPrimitive.Root
      className={toastVariants({ multiline })}
      {...(open !== undefined && { open })}
      {...(defaultOpen !== undefined && { defaultOpen })}
      {...(onOpenChange !== undefined && { onOpenChange })}
      type={type}
      {...(duration !== undefined && { duration })}
    >
      {children}
    </ToastPrimitive.Root>
  );
}

function SnackbarContent({ children, className }: SnackbarContentProps) {
  return <div className={toastContent({ className })}>{children}</div>;
}

function SnackbarAction({
  children,
  className,
  altText,
  onClick,
}: SnackbarActionProps) {
  return (
    <ToastPrimitive.Action
      className={snackbarButton({ className })}
      altText={altText}
      onClick={onClick}
    >
      {children}
    </ToastPrimitive.Action>
  );
}

function SnackbarClose({ className, onClick }: SnackbarCloseProps) {
  return (
    <ToastPrimitive.Close className={className} onClick={onClick}>
      <IconButton icon="X" size="small" />
    </ToastPrimitive.Close>
  );
}

function SnackbarActions({ children }: { children: ReactNode }) {
  return <div className={toastActions()}>{children}</div>;
}

const SnackbarTitle = ToastPrimitive.Title;
const SnackbarDescription = ToastPrimitive.Description;

export {
  Snackbar,
  SnackbarAction,
  SnackbarActions,
  SnackbarClose,
  SnackbarContent,
  SnackbarDescription,
  SnackbarProvider,
  SnackbarTitle,
};
