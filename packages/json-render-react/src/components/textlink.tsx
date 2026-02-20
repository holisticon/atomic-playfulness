import { classNames, renderIcon } from "./shared.js";
import type { CatalogComponents } from "./types.js";

export const Textlink: CatalogComponents["Textlink"] = ({ props, emit }) => (
  <a
    href={props.href ?? "#"}
    className={classNames(
      props.size === "small"
        ? "hap-textlink--sm"
        : props.size === "footnote"
          ? "hap-textlink--xs"
          : "hap-textlink",
    )}
    onClick={(event) => {
      if (!props.href) event.preventDefault();
      emit("click");
    }}
  >
    {props.icon && props.iconPosition === "left"
      ? renderIcon(props.icon, "small")
      : null}
    {props.label}
    {props.icon && props.iconPosition !== "left"
      ? renderIcon(props.icon, "small")
      : null}
  </a>
);
