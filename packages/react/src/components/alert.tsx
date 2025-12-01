import { compose, cva, type VariantProps } from "cva";
import { Info, XCircle } from "lucide-react";
import type { ComponentPropsWithRef, ElementType } from "react";
import { feedback } from "../common/feedback.js";

const alert = compose(
  feedback,
  cva({
    base: "hap-alert",
  }),
);

export interface AlertProps
  extends ComponentPropsWithRef<"div">,
    VariantProps<typeof alert> {
  onClose?: () => void;
  closeLabel?: string;
  showIcon: boolean;
  icon?: ElementType;
}

export function Alert(props: AlertProps) {
  const {
    className,
    children,
    feedback,
    onClose,
    closeLabel = "Dismiss alert",
    icon: Icon = Info,
    showIcon,
    ...rest
  } = props;
  return (
    <div role="alert" className={alert({ className, feedback })} {...rest}>
      {showIcon && <Icon className="hap-icon" aria-hidden="true" />}
      <div className="hap-alert-content">{children}</div>
      {onClose && (
        <button
          type="button"
          className="hap-icon-button--xs"
          aria-label={closeLabel}
          onClick={onClose}
        >
          <XCircle className="hap-icon--sm" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
