import type { ReactElement } from "react";

export type Feedback = "positive" | "caution" | "critical" | "new" | "neutral";

export type IconSize = "default" | "small";

export type IconName = string;

export const feedbackClass = (value?: Feedback) =>
  value ? `hap-feedback--${value}` : "";

export const classNames = (...values: (string | undefined | false)[]) =>
  values.filter(Boolean).join(" ");

export const iconSizeClass = (size?: IconSize) =>
  size === "small" ? "hap-icon--sm" : "hap-icon";

export const renderIcon = (name: IconName, size?: IconSize): ReactElement => (
  <svg className={iconSizeClass(size)} viewBox="0 0 24 24" aria-hidden="true">
    <use href={`#${name}`} />
  </svg>
);
