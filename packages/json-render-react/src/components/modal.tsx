import type { CatalogComponents } from "./types.js";

export const Modal: CatalogComponents["Modal"] = ({ props, children }) => (
  <dialog className="hap-modal" open={props.open ?? true}>
    <h2 className="hap-modal-title">{props.title}</h2>
    <p className="hap-modal-content">{props.content}</p>
    {children}
    <div className="hap-modal-actions">
      {props.secondaryActionLabel ? (
        <button className="hap-button hap-button--secondary" type="button">
          {props.secondaryActionLabel}
        </button>
      ) : null}
      {props.primaryActionLabel ? (
        <button className="hap-button hap-button--primary" type="button">
          {props.primaryActionLabel}
        </button>
      ) : null}
    </div>
  </dialog>
);
