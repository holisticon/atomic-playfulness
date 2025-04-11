import type { ArgTypes } from "@storybook/web-components";
import { html } from "lit";
import { renderIcon } from "../icon/icon.stories.js";

type ButtonSize = "default" | "small";
type ColorScheme = "light" | "dark";

export const iconButtonArgs = (): IconButtonArgs => ({
  icon: "check",
  size: "default",
  disabled: false,
});

export const buttonArgTypes: Partial<ArgTypes<IconButtonArgs>> = {
  size: {
    control: { type: "select" },
    options: ["default", "small"],
  },
};

export interface IconButtonArgs {
  size: ButtonSize;
  disabled: boolean;
  selected?: boolean;
  icon: string;
}

export const renderButtons = (args: IconButtonArgs, colorScheme: ColorScheme) =>
  html`<div
    style="display:flex;gap:0.5rem;flex-direction:column;align-items:center;padding:2rem;color-scheme:${colorScheme};background-color:${colorScheme ===
    "light"
      ? "white"
      : "black"}"
  >
    ${renderIconButton(args)}
    ${renderIconButton({
      ...args,
      selected: true,
    })}
    ${renderIconButton({
      ...args,
      disabled: true,
    })}
    ${renderIconButton({
      ...args,
      size: "small",
    })}
    ${renderIconButton({
      ...args,
      size: "small",
      selected: true,
    })}
    ${renderIconButton({
      ...args,
      size: "small",
      disabled: true,
    })}
  </div> `;

const renderIconButton = (args: IconButtonArgs) => html`
  <button
    class="hap-icon-button ${args.disabled ? "disabled" : ""} ${args.selected
      ? "hap-icon-button--selected"
      : ""}"
    ?disabled=${args.disabled}
  >
    ${renderIcon(args.icon, args.size)}
  </button>
`;
