import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cva } from "cva";
import type { ReactNode } from "react";
import { IconButton } from "./icon-button.js";

const modalOverlay = cva({
  base: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
});

const modalContent = cva({
  base: "hap-modal fixed left-1/2 top-1/2 z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
});

const modalTitle = cva({
  base: "hap-modal-title",
});

const modalDescription = cva({
  base: "hap-modal-content",
});

const modalActions = cva({
  base: "hap-modal-actions",
});

const modalClose = cva({
  base: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
});

interface ModalProps {
  children: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

interface ModalContentProps {
  children: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  showClose?: boolean;
  onClose?: () => void;
}

function Modal({ children, open, defaultOpen, onOpenChange }: ModalProps) {
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

function ModalTrigger({ children }: { children: ReactNode }) {
  return <DialogPrimitive.Trigger asChild>{children}</DialogPrimitive.Trigger>;
}

function ModalContent({
  children,
  title,
  description,
  actions,
  showClose = true,
  onClose,
}: ModalContentProps) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className={modalOverlay()} />
      <DialogPrimitive.Content className={modalContent()}>
        {title && (
          <DialogPrimitive.Title className={modalTitle()}>
            {title}
          </DialogPrimitive.Title>
        )}
        {description && (
          <DialogPrimitive.Description className={modalDescription()}>
            {description}
          </DialogPrimitive.Description>
        )}
        {children}
        {actions && <div className={modalActions()}>{actions}</div>}
        {showClose && (
          <DialogPrimitive.Close className={modalClose()} onClick={onClose}>
            <IconButton icon="X" size="small" />
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

const ModalTitle = DialogPrimitive.Title;
const ModalDescription = DialogPrimitive.Description;
const ModalClose = DialogPrimitive.Close;

export {
  Modal,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalTitle,
  ModalTrigger,
};
