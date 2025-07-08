import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";

const meta: Meta = {
  render: () => html`
    <div style="height: 250px">
      <dialog open class="hap-modal">
        <h2 class="hap-modal-title">This is a Modal Title!</h2>
        <p class="hap-modal-content">
          This is some very long modal text that serves the purpose of showing
          how a multiline text looks inside a modal, if and only if your monitor
          is not too large in which case all this will become a very boring an
          odd looking single line of text.
        </p>
        <div class="hap-modal-actions">
          <button class="hap-button hap-button--secondary" type="button">
            Don't
          </button>
          <button class="hap-button hap-button--primary" type="button">
            Do something
          </button>
        </div>
      </dialog>
    </div>
  `,
};

export default meta;
type Story = StoryObj;

export const ModalStory: Story = {};
