import { cva, type VariantProps } from "cva";
import type { HTMLAttributes, ReactNode } from "react";
import { feedback as feedbackVariants } from "../common/feedback.js";

const alert = cva({
  base: "hap-alert",
});

export interface AlertProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof feedbackVariants> {
  title?: ReactNode;
  children?: ReactNode;
  /** When provided, a close button is rendered. */
  onClose?: () => void;
  closeLabel?: string;
}

export function Alert(props: AlertProps) {
  const {
    className,
    title,
    children,
    feedback,
    onClose,
    closeLabel = "Dismiss alert",
    ...rest
  } = props;
  return (
    <div
      role="alert"
      className={alert({ className }) + " " + feedbackVariants({ feedback })}
      {...rest}
    >
      <div className="hap-alert-content">
        {title && <strong>{title}</strong>}
        {children}
      </div>
      {onClose && (
        <button
          type="button"
          className="hap-icon-button--xs"
          aria-label={closeLabel}
          onClick={onClose}
        >
          ×
        </button>
      )}
    </div>
  );
}
