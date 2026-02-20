import { classNames, renderIcon } from "./shared.js";
import type { CatalogComponents } from "./types.js";

export const Tabs: CatalogComponents["Tabs"] = ({ props }) => (
  <div className="hap-tabs">
    {props.tabs.map((tab, index) => {
      const selected = tab.selected ?? props.selectedIndex === index;
      return (
        <div
          className={classNames(
            "hap-tab",
            selected ? "hap-tab--selected" : undefined,
          )}
          tabIndex={0}
          key={`${tab.label}-${index}`}
        >
          {tab.icon ? renderIcon(tab.icon, "small") : null}
          <span>{tab.label}</span>
        </div>
      );
    })}
  </div>
);
