import { cva } from "cva";
import type { ReactNode } from "react";

const toggleButtonGroup = cva({
  base: "hap-toggle-button-group",
});

const toggleButton = cva({
  base: "hap-toggle-button",
  variants: {
    size: {
      medium: null, // default
      small: "hap-toggle-button--sm",
    },
    pressed: {
      true: "", // pressed state is handled by aria-pressed
      false: "", // unpressed state is handled by aria-pressed
    },
    subtle: {
      true: "hap-toggle-button--sublte",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

interface ToggleButtonGroupProps {
  children: ReactNode;
  className?: string;
  type?: "single" | "multiple";
  value?: string | string[];
  defaultValue?: string | string[];
  onValueChange?: (value: string | string[]) => void;
}

interface ToggleButtonProps {
  children?: ReactNode;
  className?: string;
  value: string;
  pressed?: boolean;
  disabled?: boolean;
  size?: "medium" | "small";
  subtle?: boolean;
  onClick?: () => void;
  icon?: ReactNode;
}

function ToggleButtonGroup({ children, className }: ToggleButtonGroupProps) {
  return <div className={toggleButtonGroup({ className })}>{children}</div>;
}

function ToggleButton({
  children,
  className,
  value,
  pressed = false,
  disabled = false,
  size = "medium",
  subtle = false,
  onClick,
  icon,
}: ToggleButtonProps) {
  return (
    <button
      type="button"
      className={toggleButton({ size, subtle, className })}
      aria-pressed={pressed}
      disabled={disabled}
      onClick={onClick}
      value={value}
    >
      {icon && icon}
      {children}
    </button>
  );
}

export { ToggleButton, ToggleButtonGroup };
