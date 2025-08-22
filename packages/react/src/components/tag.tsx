import { cva, type VariantProps } from "cva";
import { XCircle } from "lucide-react";
import type { ComponentPropsWithRef, MouseEvent } from "react";

const tag = cva({
  base: "hap-tag",
});

export interface TagProps
  extends ComponentPropsWithRef<"span">,
    VariantProps<typeof tag> {
  closable?: boolean;
  onClose?: (event: MouseEvent<HTMLButtonElement>) => void;
  closeLabel?: string;
}

export function Tag(props: TagProps) {
  const {
    className,
    children,
    closable = false,
    onClose,
    closeLabel = "Remove tag",
    ...rest
  } = props;
  return (
    <span className={tag({ className })} {...rest}>
      {children}
      {closable && (
        <button
          type="button"
          className="hap-icon-button--xs"
          aria-label={closeLabel}
          onClick={onClose}
        >
          <XCircle className="hap-icon--sm" aria-hidden="true" />
        </button>
      )}
    </span>
  );
}
