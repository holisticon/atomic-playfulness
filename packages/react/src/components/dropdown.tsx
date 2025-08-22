import * as SelectPrimitive from "@radix-ui/react-select";
import { cva } from "cva";
import { Check, ChevronDown } from "lucide-react";
import type { ReactNode } from "react";

const dropdownTrigger = cva({
  base: "inline-flex items-center justify-between rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-w-[180px]",
});

const dropdownContent = cva({
  base: "hap-menu relative z-50 max-h-96 min-w-[8rem] overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
});

const dropdownItem = cva({
  base: "hap-menu-item relative flex cursor-default select-none items-center data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
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
      <SelectPrimitive.ItemIndicator className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
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
