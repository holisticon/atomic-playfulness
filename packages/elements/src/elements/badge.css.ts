import { css } from "lit";

export const styles = css`
  :host {
    box-sizing: border-box;
    contain: layout style;
    display: inline-block;

    --_hap-badge-color: darkblue;
    --_hap-badge-background: lightblue;
  }

  :host([variant="success"]) {
    --_color: darkgreen;
    --_background: lightgreen;
  }

  :host([variant="critical"]) {
    --_color: darkred;
    --_background: coral;
  }

  .badge {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding-inline: var(--hap-space-small);
    padding-block: var(--hap-space-xxSmall);

    color: var(--_hap-badge-color);
    background-color: var(--_hap-badge-background);
  }
`;
