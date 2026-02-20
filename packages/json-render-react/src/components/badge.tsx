import { classNames, feedbackClass, renderIcon } from "./shared.js";
import type { CatalogComponents } from "./types.js";

export const Badge: CatalogComponents["Badge"] = ({ props }) => (
  <div
    className={classNames(
      "hap-badge",
      props.strong ? "hap-badge--strong" : undefined,
      feedbackClass(props.feedback),
    )}
  >
    <span>{props.label}</span>
    {props.icon ? renderIcon(props.icon, "small") : null}
  </div>
);
