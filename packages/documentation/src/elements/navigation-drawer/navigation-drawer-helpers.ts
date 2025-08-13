import { html } from "lit";
import { type IconType, renderIcon } from "../icon/icon.stories.js";

export function navigationItem(icon: IconType, label: string, indicator = 0) {
  return html`
    <li>
      <a class="hap-navigation-drawer-item" href="#">
        ${renderIcon(icon)}
        <span>${label}</span>
        <div class="hap-indicator default">
          <span class="hap-indicator-number">${indicator}</span>
        </div>
      </a>
    </li>
  `;
}
