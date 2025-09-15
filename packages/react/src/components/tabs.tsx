import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cva } from "cva";
import type { ReactNode } from "react";

const tabsList = cva({
  base: "hap-tabs",
});

const tabsTrigger = cva({
  base: "hap-tab",
  variants: {
    selected: {
      true: "hap-tab--selected",
    },
  },
});

const tabsContent = cva({
  base: "",
});

interface TabsProps {
  children: ReactNode;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  orientation?: "horizontal" | "vertical";
  dir?: "ltr" | "rtl";
  activationMode?: "automatic" | "manual";
}

interface TabsListProps {
  children: ReactNode;
  className?: string;
  loop?: boolean;
}

interface TabsTriggerProps {
  children: ReactNode;
  value: string;
  className?: string;
  disabled?: boolean;
}

interface TabsContentProps {
  children: ReactNode;
  value: string;
  className?: string;
  forceMount?: true;
}

function Tabs({
  children,
  value,
  defaultValue,
  onValueChange,
  orientation = "horizontal",
  dir,
  activationMode = "automatic",
}: TabsProps) {
  return (
    <TabsPrimitive.Root
      {...(value !== undefined && { value })}
      {...(defaultValue !== undefined && { defaultValue })}
      {...(onValueChange !== undefined && { onValueChange })}
      orientation={orientation}
      {...(dir !== undefined && { dir })}
      activationMode={activationMode}
    >
      {children}
    </TabsPrimitive.Root>
  );
}

function TabsList({ children, className, loop = true }: TabsListProps) {
  return (
    <TabsPrimitive.List className={tabsList({ className })} loop={loop}>
      {children}
    </TabsPrimitive.List>
  );
}

function TabsTrigger({
  children,
  value,
  className,
  disabled,
}: TabsTriggerProps) {
  return (
    <TabsPrimitive.Trigger
      className={tabsTrigger({ className })}
      value={value}
      {...(disabled !== undefined && { disabled })}
    >
      {children}
    </TabsPrimitive.Trigger>
  );
}

function TabsContent({
  children,
  value,
  className,
  forceMount,
}: TabsContentProps) {
  return (
    <TabsPrimitive.Content
      className={tabsContent({ className })}
      value={value}
      {...(forceMount !== undefined && { forceMount })}
    >
      {children}
    </TabsPrimitive.Content>
  );
}

export { Tabs, TabsContent, TabsList, TabsTrigger };
