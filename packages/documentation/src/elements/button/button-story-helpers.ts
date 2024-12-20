import type { ArgTypes } from "@storybook/web-components";
import { html } from "lit";
import { ArrowRight, Check, createIcons } from "lucide";

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
  icon?: string;
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

const renderButton = (args: ButtonArgs) => {
  createIcons({
    icons: {
      Check,
      ArrowRight,
    },
    attrs: {
      // TODO: make icons as high as line-height
    },
  });

  return html`
    <button
      class="hap-button ${args.variant} ${args.size} ${args.disabled
        ? "disabled"
        : ""}"
      ?disabled=${args.disabled}
    >
      ${args.icon && args.iconPosition === "left"
        ? html`<i data-lucide=${args.icon}></i>`
        : ""}
      ${args.label}
      ${args.icon && args.iconPosition === "right"
        ? html`<i data-lucide=${args.icon}></i>`
        : ""}
    </button>
  `;
};
