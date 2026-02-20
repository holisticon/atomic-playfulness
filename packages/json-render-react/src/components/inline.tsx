import { classNames } from "./shared.js";
import type { CatalogComponents } from "./types.js";

export const Inline: CatalogComponents["Inline"] = ({ props, children }) => (
  <div
    className={classNames(
      "hap-inline",
      props.wrap ? "hap-inline--wrap" : undefined,
      props.gap ? `hap-gap--${props.gap}` : undefined,
      props.align ? `hap-align--${props.align}` : undefined,
      props.justify ? `hap-justify--${props.justify}` : undefined,
    )}
  >
    {children}
  </div>
);
