import { cva, type VariantProps } from "cva";
import { Info } from "lucide-react";
import type { HTMLAttributes, ReactNode } from "react";
import { feedback as feedbackVariants } from "../common/feedback.js";

const alert = cva({
  base: "hap-alert",
});

export interface AlertProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof feedbackVariants> {
  children?: ReactNode;
  /** When provided, a close button is rendered. */
  onClose?: () => void;
  closeLabel?: string;
}

export function Alert(props: AlertProps) {
  const {
    className,
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
      <Info className="hap-icon" aria-hidden="true" />
      <div className="hap-alert-content">{children}</div>
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
