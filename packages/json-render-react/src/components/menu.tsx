import { classNames, renderIcon } from "./shared.js";
import type { CatalogComponents } from "./types.js";

export const Menu: CatalogComponents["Menu"] = ({ props }) => (
  <div className="hap-menu">
    {props.items.map((item, index) => {
      const className = classNames(
        "hap-menu-item",
        item.selected ? "hap-menu-item--selected" : undefined,
      );
      const content = (
        <>
          {item.icon ? renderIcon(item.icon) : null}
          <span>{item.label}</span>
        </>
      );
      if (item.href) {
        return (
          <a
            href={item.href}
            className={className}
            key={`${item.label}-${index}`}
          >
            {content}
          </a>
        );
      }
      return (
        <button
          type="button"
          className={className}
          disabled={item.disabled}
          key={`${item.label}-${index}`}
        >
          {content}
        </button>
      );
    })}
  </div>
);
