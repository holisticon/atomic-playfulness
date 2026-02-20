import { classNames } from "./shared.js";
import type { CatalogComponents } from "./types.js";

export const Stack: CatalogComponents["Stack"] = ({ props, children }) => (
  <div
    className={classNames(
      "hap-stack",
      props.gap ? `hap-gap--${props.gap}` : undefined,
      props.align ? `hap-align--${props.align}` : undefined,
    )}
  >
    {children}
  </div>
);
