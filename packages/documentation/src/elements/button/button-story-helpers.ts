import { html } from "lit";

type ButtonSize = "default" | "small";
type ButtonVariant = "primary" | "secondary" | "tertiary" | "destructive";
type ButtonIconPosition = "left" | "right";

export interface ButtonArgs {
  label: string;
  variant: ButtonVariant;
  size: ButtonSize;
  disabled: boolean;
  hovered: boolean;
  active: boolean;
  focused: boolean;
  icon?: string;
  iconPosition: ButtonIconPosition;
}

export const renderButtons = (args: ButtonArgs) =>
  html`<div style="display:flex;gap:0.5rem;flex-direction:column">
    ${renderButton({ ...args, size: "default", label: "Default" })}
    ${renderButton({
      ...args,
      size: "default",
      label: "Default",
      icon: "(Icon prefix)",
    })}
    ${renderButton({
      ...args,
      size: "default",
      label: "Default",
      icon: "(Icon suffix)",
      iconPosition: "right",
    })}
    ${renderButton({ ...args, size: "small", label: "Small" })}
    ${renderButton({
      ...args,
      size: "small",
      label: "Small",
      icon: "(Icon prefix)",
    })}
    ${renderButton({
      ...args,
      size: "small",
      label: "Small",
      icon: "(Icon suffix)",
      iconPosition: "right",
    })}
  </div> `;

const renderButton = (args: ButtonArgs) => {
  return html`
    <button
      class="hap-button ${args.variant} ${args.size} ${args.disabled
        ? "disabled"
        : ""}"
      ?disabled=${args.disabled}
    >
      ${args.icon && args.iconPosition === "left"
        ? html`<span class="icon">${args.icon}</span>`
        : ""}
      ${args.label}
      ${args.icon && args.iconPosition === "right"
        ? html`<span class="icon">${args.icon}</span>`
        : ""}
    </button>
  `;
};
