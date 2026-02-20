import { classNames } from "./shared.js";
import type { CatalogComponents } from "./types.js";

export const Divider: CatalogComponents["Divider"] = ({ props }) => {
  const orientation = props.orientation ?? "horizontal";
  return (
    <hr
      className={classNames(
        orientation === "vertical" ? "hap-divider-vertical" : "hap-divider",
        props.inset ? "hap-divider--inset" : undefined,
        props.middleInset ? "hap-divider--middle-inset" : undefined,
        props.bold ? "hap-divider--bold" : undefined,
      )}
    />
  );
};
