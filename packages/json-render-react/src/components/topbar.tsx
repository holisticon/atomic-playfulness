import { classNames, renderIcon } from "./shared.js";
import type { CatalogComponents } from "./types.js";

export const Topbar: CatalogComponents["Topbar"] = ({ props }) => (
  <nav className="hap-topbar">
    <div className="hap-headline--sm">{props.brand}</div>
    <ol className="hap-topbar-nav">
      {props.items.map((item, index) => (
        <li key={`${item.label}-${index}`}>
          <a
            className={classNames(
              "hap-topbar-nav-item",
              item.current ? "hap-topbar-nav-item--current" : undefined,
              item.disabled ? "hap-topbar-nav-item--disabled" : undefined,
            )}
            href={item.href ?? "#"}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ol>
    {props.actionLabel ? (
      <button className="hap-button--sm hap-button--secondary" type="button">
        {props.actionIcon ? renderIcon(props.actionIcon) : null}
        {props.actionLabel}
      </button>
    ) : null}
  </nav>
);
