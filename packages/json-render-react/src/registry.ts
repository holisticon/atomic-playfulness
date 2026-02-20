import { defineRegistry } from "@json-render/react";
import { catalog } from "./catalog.js";
import { components } from "./components.js";

export const { registry } = defineRegistry(catalog, { components });
