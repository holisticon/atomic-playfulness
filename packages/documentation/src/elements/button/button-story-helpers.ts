import type { ArgTypes } from "@storybook/web-components";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { renderIcon, type IconType } from "../icon/icon.stories.js";

type ButtonSize = "default" | "small";
type ButtonVariant = "primary" | "secondary" | "tertiary" | "destructive";
type ButtonIconPosition = "left" | "right";
type ColorScheme = "light" | "dark";

export const buttonArgs = (variant: ButtonVariant): ButtonArgs => ({
  variant,
  size: "default",
  disabled: false,
  iconPosition: "left",
  label: "",
});

export const buttonArgTypes: Partial<ArgTypes<ButtonArgs>> = {
  variant: {
    control: { type: "select" },
    options: ["primary", "secondary", "tertiary", "destructive"],
  },
  size: {
    control: { type: "select" },
    options: ["default", "small"],
  },
};

export interface ButtonArgs {
  label: string;
  variant: ButtonVariant;
  size: ButtonSize;
  disabled: boolean;
  icon?: IconType;
  iconPosition: ButtonIconPosition;
}

export const renderButtons = (args: ButtonArgs, colorScheme: ColorScheme) =>
  html`<div
    style="display:flex;gap:0.5rem;flex-direction:column;padding:2rem;color-scheme:${colorScheme};background-color:${colorScheme ===
    "light"
      ? "white"
      : "black"}"
  >
    ${renderButton({ ...args, size: "default", label: "Default" })}
    ${renderButton({
      ...args,
      size: "default",
      label: "Default",
      icon: "check",
    })}
    ${renderButton({
      ...args,
      size: "default",
      label: "Default",
      icon: "arrow-right",
      iconPosition: "right",
    })}
    ${renderButton({ ...args, size: "small", label: "Small" })}
    ${renderButton({
      ...args,
      size: "small",
      label: "Small",
      icon: "check",
    })}
    ${renderButton({
      ...args,
      size: "small",
      label: "Small",
      icon: "arrow-right",
      iconPosition: "right",
    })}
  </div> `;

const renderButton = (args: ButtonArgs) => html`
  <button
    class=" ${classMap({
      "hap-button": args.size !== "small",
      "hap-button--sm": args.size === "small",
      ["hap-button--" + args.variant]: true,
    })}"
    ?disabled=${args.disabled}
  >
    ${args.icon && args.iconPosition === "left" ? renderIcon(args.icon) : ""}
    ${args.label}
    ${args.icon && args.iconPosition === "right" ? renderIcon(args.icon) : ""}
  </button>
`;
