import { html } from "lit";

export type IndicatorVariant = "default" | "small";

export interface IndicatorArgs {
  variant: IndicatorVariant;
  number: string;
}

export const renderIndicator = (
  variant: IndicatorVariant | undefined,
  number?: string,
) => html`
  <div class="hap-indicator ${variant}">
    <span class="hap-indicator-number">${number}</span>
  </div>
`;
