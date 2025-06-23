import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { renderIcon, type IconType } from "../icon/icon.stories.js";
import {
  renderIndicator,
  type IndicatorVariant,
} from "../indicator/indicator-story-helpers.js";

export type BadgeVariant = IndicatorVariant | "none";

export interface NavigationRailItemArgs {
  selected?: boolean;
  icon: IconType;
  label?: string;
  badgeVariant: BadgeVariant;
  badgeCount?: string;
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
      ${args.badgeVariant !== "none"
        ? renderIndicator(args.badgeVariant, args.badgeCount)
        : ""}
    </div>
    ${args.label
      ? html`<div class="hap-navigation-rail-item-label">${args.label}</div>`
      : ""}
  </a>
`;
