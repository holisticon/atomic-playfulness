import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import { renderIcon } from "../elements/icon/icon.stories.js";

const meta: Meta = {
  render: () => html`
    <style>
      h2 {
        margin: unset;
      }

      .form-card {
        box-sizing: border-box;
        background-color: var(--hap-color-surface-primary-default);
        padding: var(--hap-spacing-md-lg);
        border-radius: var(--hap-radius-minimal);
        display: flex;
        flex-direction: column;
        gap: var(--hap-spacing-md-lg);
        max-inline-size: 720px;
        margin-inline: auto;

        & button {
          align-self: flex-end;
        }
      }

      .inline {
        display: flex;
        align-items: center;
        gap: var(--hap-spacing-sm);
      }
    </style>
    <form class="form-card">
      <h2 class="hap-headline--xl">Signup</h2>
      <div class="hap-alert hap-feedback--neutral">
        <div class="hap-alert-content">
          ${renderIcon("info")}
          <span>
            Fill out this signup form to register to our brand new application
            that is just awesome.
          </span>
        </div>
      </div>

      <div class="hap-textfield">
        <label for="email">E-Mail</label>
        <input id="email" aria-describedby="email-desc" type="email" />
        <span id="email-desc">E-Mail address used for logins</span>
      </div>
      <div class="hap-textfield">
        <label for="pw">Password</label>
        <input id="pw" type="password" />
      </div>
      <div class="hap-textfield">
        <label for="pw-rep">Password Confirmation</label>
        <input id="pw-rep" type="password" />
      </div>

      <label class="hap-checkbox">
        <input type="checkbox" />
        Receive our newsletter
      </label>

      <button class="hap-button hap-button--primary hap-button--default">
        Sign up
      </button>
    </form>
  `,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
