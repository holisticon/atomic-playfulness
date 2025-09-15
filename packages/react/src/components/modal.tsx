import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cva } from "cva";
import type { ReactNode } from "react";
import { IconButton } from "./icon-button.js";

const modalOverlay = cva({
  base: "",
});

const modalContent = cva({
  base: "hap-modal",
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
  base: "",
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
