import { classNames, feedbackClass, renderIcon } from "./shared.js";
import type { CatalogComponents } from "./types.js";

export const Alert: CatalogComponents["Alert"] = ({ props }) => (
  <div className={classNames("hap-alert", feedbackClass(props.feedback))}>
    <div className="hap-alert-content">
      {props.icon ? renderIcon(props.icon) : null}
      <span>{props.label}</span>
    </div>
    {props.actionIcon ? (
      <button type="button" className="hap-icon-button--sm">
        {renderIcon(props.actionIcon, "small")}
      </button>
    ) : null}
  </div>
);
