import { renderIcon } from "./shared.js";
import type { CatalogComponents } from "./types.js";

export const NavigationDrawer: CatalogComponents["NavigationDrawer"] = ({
  props,
}) => (
  <nav className="hap-navigation-drawer">
    {props.sections.map((section, index) => (
      <div key={`${section.title}-${index}`}>
        <h2 className="hap-navigation-drawer-title">{section.title}</h2>
        <menu>
          {section.items.map((item, itemIndex) => (
            <li key={`${item.label}-${itemIndex}`}>
              <a className="hap-navigation-drawer-item" href="#">
                {item.icon ? renderIcon(item.icon) : null}
                <span>{item.label}</span>
                {typeof item.badgeCount === "number" ? (
                  <div className="hap-indicator">{item.badgeCount}</div>
                ) : null}
              </a>
            </li>
          ))}
        </menu>
      </div>
    ))}
  </nav>
);
