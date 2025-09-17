import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import type { ReactNode } from "react";

const tooltipOffset = 8;

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  side?: TooltipPrimitive.TooltipContentProps["side"];
  align?: TooltipPrimitive.TooltipContentProps["align"];
}

export function Tooltip(props: TooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          {props.children}
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            className="hap-tooltip"
            side={props.side ?? "top"}
            sideOffset={tooltipOffset}
            align={props.align ?? "center"}
          >
            {props.content}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
