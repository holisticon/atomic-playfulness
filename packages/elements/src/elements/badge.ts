import { html, LitElement, type TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./badge.css.js";

export type Variant = "standard" | "success" | "critical";

@customElement("hap-badge")
export class BadgeElement extends LitElement {
  static override styles = styles;

  @property({ reflect: true })
  accessor variant: Variant = "standard";

  protected override render(): TemplateResult {
    return html`<span class="badge"><slot></slot></span>`;
  }
}
