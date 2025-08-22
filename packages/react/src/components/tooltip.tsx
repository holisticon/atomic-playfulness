import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cva } from "cva";
import type { ReactNode } from "react";

const tooltipContent = cva({
  base: "hap-tooltip",
});

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
  align?: "start" | "center" | "end";
  delayDuration?: number;
  skipDelayDuration?: number;
}

export function Tooltip({
  children,
  content,
  side = "top",
  sideOffset = 4,
  align = "center",
  delayDuration = 700,
  skipDelayDuration = 300,
}: TooltipProps) {
  return (
    <TooltipPrimitive.Provider
      delayDuration={delayDuration}
      skipDelayDuration={skipDelayDuration}
    >
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            className={tooltipContent()}
            side={side}
            sideOffset={sideOffset}
            align={align}
          >
            {content}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
