import * as SelectPrimitive from "@radix-ui/react-select";
import { cva } from "cva";
import { Check, ChevronDown } from "lucide-react";
import type { ReactNode } from "react";

const dropdownTrigger = cva({
  base: "",
});

const dropdownContent = cva({
  base: "hap-menu",
});

const dropdownItem = cva({
  base: "hap-menu-item",
});

interface DropdownProps {
  children: ReactNode;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  dir?: "ltr" | "rtl";
  name?: string;
}

interface DropdownContentProps {
  children: ReactNode;
  position?: "popper" | "item-aligned";
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
  align?: "start" | "center" | "end";
}

interface DropdownItemProps {
  children: ReactNode;
  value: string;
  disabled?: boolean;
  textValue?: string;
}

function Dropdown({
  children,
  value,
  defaultValue,
  onValueChange,
  disabled,
  dir,
  name,
}: DropdownProps) {
  return (
    <SelectPrimitive.Root
      {...(value !== undefined && { value })}
      {...(defaultValue !== undefined && { defaultValue })}
      {...(onValueChange !== undefined && { onValueChange })}
      {...(disabled !== undefined && { disabled })}
      {...(dir !== undefined && { dir })}
      {...(name !== undefined && { name })}
    >
      {children}
    </SelectPrimitive.Root>
  );
}

function DropdownTrigger({ children }: { children?: ReactNode }) {
  return (
    <SelectPrimitive.Trigger className={dropdownTrigger()}>
      <SelectPrimitive.Value placeholder={children} />
      <SelectPrimitive.Icon>
        <ChevronDown size={16} />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function DropdownContent({
  children,
  position = "popper",
  side = "bottom",
  sideOffset = 4,
  align = "start",
}: DropdownContentProps) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        className={dropdownContent()}
        position={position}
        side={side}
        sideOffset={sideOffset}
        align={align}
      >
        <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

function DropdownItem({
  children,
  value,
  disabled,
  textValue,
}: DropdownItemProps) {
  return (
    <SelectPrimitive.Item
      className={dropdownItem()}
      value={value}
      {...(disabled !== undefined && { disabled })}
      {...(textValue !== undefined && { textValue })}
    >
      <SelectPrimitive.ItemIndicator>
        <Check size={16} />
      </SelectPrimitive.ItemIndicator>
      <SelectPrimitive.ItemText>
        <span>{children}</span>
      </SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

const DropdownValue = SelectPrimitive.Value;
const DropdownLabel = SelectPrimitive.Label;
const DropdownSeparator = SelectPrimitive.Separator;

export {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownLabel,
  DropdownSeparator,
  DropdownTrigger,
  DropdownValue,
};
