import { classNames, renderIcon } from "./shared.js";
import type { CatalogComponents } from "./types.js";

export const Breadcrumb: CatalogComponents["Breadcrumb"] = ({ props }) => (
  <nav className="hap-breadcrumb">
    <ol className="hap-breadcrumb-list">
      {props.pages.map((page: string, index: number) => {
        const isCurrent = props.currentIndex === index;
        const isLast = index === props.pages.length - 1;
        return (
          <li className="hap-breadcrumb-item" key={`${page}-${index}`}>
            <a
              className={classNames(
                "hap-breadcrumb-link",
                isCurrent ? "hap-breadcrumb-link--current" : undefined,
              )}
            >
              {page}
              {isLast ? null : renderIcon("chevron-right", "small")}
            </a>
          </li>
        );
      })}
    </ol>
  </nav>
);
