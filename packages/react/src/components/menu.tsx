import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cva } from "cva";
import { Check, ChevronRight, Circle } from "lucide-react";
import type { ReactNode } from "react";

const menuContent = cva({
  base: "hap-menu z-50 min-w-[8rem] overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
});

const menuItem = cva({
  base: "hap-menu-item relative flex cursor-default select-none items-center data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
});

const menuSubContent = cva({
  base: "hap-menu z-50 min-w-[8rem] overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
});

const menuSeparator = cva({
  base: "-mx-1 my-1 h-px bg-muted",
});

const menuLabel = cva({
  base: "px-2 py-1.5 text-sm font-semibold",
});

interface MenuProps {
  children: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  modal?: boolean;
  dir?: "ltr" | "rtl";
}

interface MenuContentProps {
  children: ReactNode;
  className?: string;
  sideOffset?: number;
  align?: "start" | "center" | "end";
  alignOffset?: number;
  forceMount?: true;
  side?: "top" | "right" | "bottom" | "left";
}

interface MenuItemProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onSelect?: (event: Event) => void;
  textValue?: string;
}

interface MenuCheckboxItemProps {
  children: ReactNode;
  className?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  onSelect?: (event: Event) => void;
  textValue?: string;
}

interface MenuRadioItemProps {
  children: ReactNode;
  className?: string;
  value: string;
  disabled?: boolean;
  onSelect?: (event: Event) => void;
  textValue?: string;
}

function Menu({
  children,
  open,
  defaultOpen,
  onOpenChange,
  modal = true,
  dir,
}: MenuProps) {
  return (
    <DropdownMenuPrimitive.Root
      {...(open !== undefined && { open })}
      {...(defaultOpen !== undefined && { defaultOpen })}
      {...(onOpenChange !== undefined && { onOpenChange })}
      modal={modal}
      {...(dir !== undefined && { dir })}
    >
      {children}
    </DropdownMenuPrimitive.Root>
  );
}

function MenuTrigger({ children }: { children: ReactNode }) {
  return (
    <DropdownMenuPrimitive.Trigger asChild>
      {children}
    </DropdownMenuPrimitive.Trigger>
  );
}

function MenuContent({
  children,
  className,
  sideOffset = 4,
  align = "start",
  alignOffset,
  forceMount,
  side,
}: MenuContentProps) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        className={menuContent({ className })}
        sideOffset={sideOffset}
        align={align}
        {...(alignOffset !== undefined && { alignOffset })}
        {...(forceMount !== undefined && { forceMount })}
        {...(side !== undefined && { side })}
      >
        {children}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  );
}

function MenuItem({
  children,
  className,
  disabled,
  onSelect,
  textValue,
}: MenuItemProps) {
  return (
    <DropdownMenuPrimitive.Item
      className={menuItem({ className })}
      {...(disabled !== undefined && { disabled })}
      {...(onSelect !== undefined && { onSelect })}
      {...(textValue !== undefined && { textValue })}
    >
      <span>{children}</span>
    </DropdownMenuPrimitive.Item>
  );
}

function MenuCheckboxItem({
  children,
  className,
  checked,
  onCheckedChange,
  disabled,
  onSelect,
  textValue,
}: MenuCheckboxItemProps) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      className={menuItem({ className })}
      {...(checked !== undefined && { checked })}
      {...(onCheckedChange !== undefined && { onCheckedChange })}
      {...(disabled !== undefined && { disabled })}
      {...(onSelect !== undefined && { onSelect })}
      {...(textValue !== undefined && { textValue })}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <Check size={16} />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      <span>{children}</span>
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

function MenuRadioGroup({ children }: { children: ReactNode }) {
  return (
    <DropdownMenuPrimitive.RadioGroup>
      {children}
    </DropdownMenuPrimitive.RadioGroup>
  );
}

function MenuRadioItem({
  children,
  className,
  value,
  disabled,
  onSelect,
  textValue,
}: MenuRadioItemProps) {
  return (
    <DropdownMenuPrimitive.RadioItem
      className={menuItem({ className })}
      value={value}
      {...(disabled !== undefined && { disabled })}
      {...(onSelect !== undefined && { onSelect })}
      {...(textValue !== undefined && { textValue })}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <Circle size={8} fill="currentColor" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      <span>{children}</span>
    </DropdownMenuPrimitive.RadioItem>
  );
}

function MenuLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <DropdownMenuPrimitive.Label className={menuLabel({ className })}>
      {children}
    </DropdownMenuPrimitive.Label>
  );
}

function MenuSeparator({ className }: { className?: string }) {
  return (
    <DropdownMenuPrimitive.Separator className={menuSeparator({ className })} />
  );
}

function MenuSub({ children }: { children: ReactNode }) {
  return <DropdownMenuPrimitive.Sub>{children}</DropdownMenuPrimitive.Sub>;
}

function MenuSubTrigger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger className={menuItem({ className })}>
      <span>{children}</span>
      <ChevronRight className="ml-auto h-4 w-4" />
    </DropdownMenuPrimitive.SubTrigger>
  );
}

function MenuSubContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <DropdownMenuPrimitive.SubContent className={menuSubContent({ className })}>
      {children}
    </DropdownMenuPrimitive.SubContent>
  );
}

export {
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuItem,
  MenuLabel,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  MenuTrigger,
};
