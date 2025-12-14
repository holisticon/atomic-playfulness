import { html, nothing } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { type IconType } from "../icon/icon.stories.js";
import { renderIcon } from "../icon/renderIcon.ts";
import { renderIndicator } from "../indicator/indicator-story-helpers.js";

export interface NavigationRailItemArgs {
  selected?: boolean;
  icon: IconType;
  label?: string;
  badgeCount?: number | null;
}

export const renderNavigationRailItem = (args: NavigationRailItemArgs) => html`
  <a
    class=${classMap({
      "hap-navigation-rail-item": true,
      "hap-navigation-rail-item--selected": args.selected ?? false,
    })}
    href="#"
  >
    <div class="hap-navigation-rail-item-icon">
      ${renderIcon(args.icon)}
      ${args.badgeCount !== undefined
        ? renderIndicator(args.badgeCount)
        : nothing}
    </div>
    ${args.label
      ? html`<div class="hap-navigation-rail-item-label">${args.label}</div>`
      : nothing}
  </a>
`;
