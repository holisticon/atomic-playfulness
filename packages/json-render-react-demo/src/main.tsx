import "@holisticon/hap-foundation/atomic-playfulness.css";
import { registry } from "@holisticon/hap-json-render-react";
import { JSONUIProvider, Renderer } from "@json-render/react";
import React from "react";
import { createRoot } from "react-dom/client";
import { spec } from "./spec.ts";
import "./styles.css";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root element not found");
}

createRoot(container).render(
  <React.StrictMode>
    <div
      className="icon-sprite"
      dangerouslySetInnerHTML={{ __html: __ICON_SPRITE__ }}
    />
    <JSONUIProvider
      registry={registry}
      initialState={{
        form: {
          name: "",
          email: "",
          message: "",
        },
        search: "",
        preferences: {
          newsletter: true,
          productUpdates: false,
        },
        profile: {
          contactMethod: "email",
          status: "active",
        },
      }}
    >
      <Renderer spec={spec} registry={registry} />
    </JSONUIProvider>
  </React.StrictMode>,
);
