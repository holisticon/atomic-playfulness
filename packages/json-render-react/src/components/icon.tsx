import { renderIcon } from "./shared.js";
import type { CatalogComponents } from "./types.js";

export const Icon: CatalogComponents["Icon"] = ({ props }) =>
  renderIcon(props.name, props.size);
