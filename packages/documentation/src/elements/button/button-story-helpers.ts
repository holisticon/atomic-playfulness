import type { ArgTypes, StoryObj } from "@storybook/web-components";
import { html } from "lit";

type ButtonSize = "default" | "small";
type ButtonVariant = "primary" | "secondary" | "tertiary" | "destructive";
type ButtonIconPosition = "left" | "right";
type ColorScheme = "light" | "dark";

export const buttonArgs = (variant: ButtonVariant): ButtonArgs => ({
  variant,
  size: "default",
  disabled: false,
  hovered: false,
  active: false,
  focused: false,
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
  hovered: boolean;
  active: boolean;
  focused: boolean;
  icon?: string;
  iconPosition: ButtonIconPosition;
}

export type Story = StoryObj<ButtonArgs>;
export const EnabledStory: Story = {
  args: {
    label: "Enabled Button",
  },
};

// Hovered (Button Hovered)
export const HoveredStory: Story = {
  args: {
    label: "Hovered Button",
    hovered: true,
  },
  parameters: { pseudo: { hover: true } },
};

// Focused
export const FocusedStory: Story = {
  args: {
    label: "Focused Button",
    focused: true,
  },
  parameters: { pseudo: { focus: true } },
};

// Active (Pressed)
export const ActiveStory: Story = {
  args: {
    label: "Active Button",
    active: true,
  },
  parameters: { pseudo: { active: true } },
};

// Disabled
export const DisabledStory: Story = {
  args: {
    label: "Disabled Button",
    disabled: true,
  },
};

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
