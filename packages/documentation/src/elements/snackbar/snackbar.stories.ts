import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

type SnackbarVariant = "hap-snackbar" | "hap-snackbar-multiline";

interface AlertArgs {
  label: string;
  variant: SnackbarVariant;
  icon?: string;
  iconbutton?: string;
}

const meta: Meta<AlertArgs> = {
  args: {
    label: "Snackbar text",
    icon: "info",
    iconbutton: "circle-x",
  },
  // TODO: use actual icon button for cancel
  render: (args) => html`
    <div style="width: 374px;">
      <div class="${args.variant}">
        <div class="hap-snackbar-content">
          <span>${args.label}</span>
          <div class="hap-snackbar-actions">
            <button class="hap-snackbar-button">Action</button>
            ${args.iconbutton
              ? html`<svg class="hap-icon" viewBox="0 0 24 24">
                  <use href="#${args.iconbutton}" />
                </svg>`
              : ""}
          </div>
        </div>
      </div>
    </div>
  `,
};

export default meta;
type Story = StoryObj<AlertArgs>;

export const SingleLine: Story = {
  args: { variant: "hap-snackbar", label: "This is a single line snackbar." },
};

export const MultiLine: Story = {
  args: {
    variant: "hap-snackbar-multiline",
    label: "This is a very long multi line snackbar that spans multiple lines.",
  },
};
