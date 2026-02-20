import { z } from "zod";

export const feedback = z.enum([
  "positive",
  "caution",
  "critical",
  "new",
  "neutral",
]);
export const iconName = z.string();

export const buttonVariant = z.enum([
  "primary",
  "secondary",
  "tertiary",
  "destructive",
]);
export const buttonSize = z.enum(["default", "small"]);
export const iconButtonSize = z.enum(["default", "sm", "xs"]);
export const textLinkSize = z.enum(["standard", "small", "footnote"]);
export const switchSize = z.enum(["default", "small"]);
export const textSize = z.enum(["standard", "sm", "xs"]);
export const headlineSize = z.enum(["3xl", "2xl", "xl", "lg", "md", "sm"]);
export const dividerOrientation = z.enum(["horizontal", "vertical"]);
export const snackbarVariant = z.enum(["single", "multi"]);
export const iconSize = z.enum(["default", "small"]);

export const layoutGap = z.enum([
  "none",
  "xs",
  "sm",
  "md",
  "md-lg",
  "lg",
  "xl",
  "2xl",
]);
export const layoutAlign = z.enum(["start", "center", "end", "stretch"]);
export const layoutJustify = z.enum(["start", "center", "end", "spaced"]);
