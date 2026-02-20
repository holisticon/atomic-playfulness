import { classNames, renderIcon } from "./shared.js";
import type { CatalogComponents } from "./types.js";

export const NavigationRailItem: CatalogComponents["NavigationRailItem"] = ({
  props,
}) => (
  <a
    className={classNames(
      "hap-navigation-rail-item",
      props.selected ? "hap-navigation-rail-item--selected" : undefined,
    )}
    href="#"
  >
    <div className="hap-navigation-rail-item-icon">
      {renderIcon(props.icon)}
      {props.badgeCount !== undefined ? (
        <div className="hap-indicator">{props.badgeCount ?? null}</div>
      ) : null}
    </div>
    {props.label ? (
      <div className="hap-navigation-rail-item-label">{props.label}</div>
    ) : null}
  </a>
);
