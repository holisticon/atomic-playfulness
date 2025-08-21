import { html } from "lit";

export interface IndicatorArgs {
  content: number | null;
}

export const renderIndicator = (content?: number | null) => html`
  <div class="hap-indicator">${content}</div>
`;
