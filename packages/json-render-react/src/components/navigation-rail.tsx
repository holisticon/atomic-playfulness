import { classNames, renderIcon } from "./shared.js";
import type { CatalogComponents } from "./types.js";

export const NavigationRail: CatalogComponents["NavigationRail"] = ({
  props,
}) => (
  <div className="hap-navigation-rail">
    <div className="hap-navigation-rail-items">
      {props.items.map((item, index) => (
        <a
          key={`${item.icon}-${index}`}
          className={classNames(
            "hap-navigation-rail-item",
            item.selected ? "hap-navigation-rail-item--selected" : undefined,
          )}
          href="#"
        >
          <div className="hap-navigation-rail-item-icon">
            {renderIcon(item.icon)}
            {item.badgeCount !== undefined ? (
              <div className="hap-indicator">{item.badgeCount ?? null}</div>
            ) : null}
          </div>
          {item.label ? (
            <div className="hap-navigation-rail-item-label">{item.label}</div>
          ) : null}
        </a>
      ))}
    </div>
  </div>
);
