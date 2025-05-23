import type { Config } from "tailwindcss";

export const theme: Config["theme"] = {
  spacing: {
    none: "var(--hap-spacing-none)",
    xs: "var(--hap-spacing-xs)",
    md: "var(--hap-spacing-md)",
    sm: "var(--hap-spacing-sm)",
    lg: "var(--hap-spacing-lg)",
    xl: "var(--hap-spacing-xl)",
    "2xl": "var(--hap-spacing-2-xl)",
    mdlg: "var(--hap-spacing-md-lg)",
  },
  borderRadius: {
    minimal: "var(--hap-radius-minimal)",
    rounded: "var(--hap-radius-rounded)",
    full: "var(--hap-radius-full)",
    roundedLarge: "var(--hap-radius-rounded-large)",
    none: "var(--hap-radius-none)",
  },
  colors: {
    text: {
      primary: {
        onLight: "var(--hap-color-text-primary-on-light)",
        onDark: "var(--hap-color-text-primary-on-dark)",
        onLightOnly: "var(--hap-color-text-primary-on-light-only)",
        onDarkOnly: "var(--hap-color-text-primary-on-dark-only)",
      },
      secondary: {
        onLight: "var(--hap-color-text-secondary-on-light)",
        onDark: "var(--hap-color-text-secondary-on-dark)",
        onLightOnly: "var(--hap-color-text-secondary-on-light-only)",
        onDarkOnly: "var(--hap-color-text-secondary-on-dark-only)",
      },
      brand: {
        onLight: "var(--hap-color-text-brand-on-light)",
        onDark: "var(--hap-color-text-brand-on-dark)",
        onDarkOnly: "var(--hap-color-text-brand-on-dark-only)",
        onLightOnly: "var(--hap-color-text-brand-on-light-only)",
      },
      tertiary: {
        onLight: "var(--hap-color-text-tertiary-on-light)",
        onDark: "var(--hap-color-text-tertiary-on-dark)",
        onLightOnly: "var(--hap-color-text-tertiary-on-light-only)",
        onDarkOnly: "var(--hap-color-text-tertiary-on-dark-only)",
      },
    },
    fill: {
      primary: {
        light: {
          default: "var(--hap-color-fill-primary-on-light-default)",
          hovered: "var(--hap-color-fill-primary-on-light-hovered)",
          pressed: "var(--hap-color-fill-primary-on-light-pressed)",
          selected: "var(--hap-color-fill-primary-on-light-selected)",
        },
        dark: {
          default: "var(--hap-color-fill-primary-on-dark-default)",
          hovered: "var(--hap-color-fill-primary-on-dark-hovered)",
          pressed: "var(--hap-color-fill-primary-on-dark-pressed)",
          selected: "var(--hap-color-fill-primary-on-dark-selected)",
        },
      },
      secondary: {
        light: {
          default: "var(--hap-color-fill-secondary-on-light-default)",
          hovered: "var(--hap-color-fill-secondary-on-light-hovered)",
          pressed: "var(--hap-color-fill-secondary-on-light-pressed)",
          selected: "var(--hap-color-fill-secondary-on-light-selected)",
        },
        dark: {
          default: "var(--hap-color-fill-secondary-on-dark-default)",
          hovered: "var(--hap-color-fill-secondary-on-dark-hovered)",
          pressed: "var(--hap-color-fill-secondary-on-dark-pressed)",
          selected: "var(--hap-color-fill-secondary-on-dark-selected)",
        },
      },
      destructive: {
        light: {
          default: "var(--hap-color-fill-destructive-on-light-default)",
          hovered: "var(--hap-color-fill-destructive-on-light-hovered)",
          pressed: "var(--hap-color-fill-destructive-on-light-pressed)",
          selected: "var(--hap-color-fill-destructive-on-light-selected)",
        },
        dark: {
          default: "var(--hap-color-fill-destructive-on-dark-default)",
          hovered: "var(--hap-color-fill-destructive-on-dark-hovered)",
          pressed: "var(--hap-color-fill-destructive-on-dark-pressed)",
          selected: "var(--hap-color-fill-destructive-on-dark-selected)",
        },
      },
      brand: {
        onLight: {
          default: "var(--hap-color-fill-brand-on-light-default)",
          hovered: "var(--hap-color-fill-brand-on-light-hovered)",
          pressed: "var(--hap-color-fill-brand-on-light-pressed)",
          selected: "var(--hap-color-fill-brand-on-light-selected)",
        },
        onDark: {
          default: "var(--hap-color-fill-brand-on-dark-default)",
          hovered: "var(--hap-color-fill-brand-on-dark-hovered)",
          pressed: "var(--hap-color-fill-brand-on-dark-pressed)",
          selected: "var(--hap-color-fill-brand-on-dark-selected)",
        },
      },
      transparent: {
        default: "var(--hap-color-fill-transparent-default)",
      },
      state: {
        on: "var(--hap-color-fill-state-on)",
        off: "var(--hap-color-fill-state-off)",
      },
      tertiary: {
        onLight: {
          default: "var(--hap-color-fill-tertiary-on-light-default)",
          hovered: "var(--hap-color-fill-tertiary-on-light-hovered)",
          pressed: "var(--hap-color-fill-tertiary-on-light-pressed)",
          selected: "var(--hap-color-fill-tertiary-on-light-selected)",
        },
        onDark: {
          default: "var(--hap-color-fill-tertiary-on-dark-default)",
          hovered: "var(--hap-color-fill-tertiary-on-dark-hovered)",
          pressed: "var(--hap-color-fill-tertiary-on-dark-pressed)",
          selected: "var(--hap-color-fill-tertiary-on-dark-selected)",
        },
      },
      input: {
        default: "var(--hap-color-fill-input-default)",
        hovered: "var(--hap-color-fill-input-hovered)",
        pressed: "var(--hap-color-fill-input-pressed)",
        selected: "var(--hap-color-fill-input-selected)",
      },
      inverted: {
        default: "var(--hap-color-fill-inverted-default)",
        hovered: "var(--hap-color-fill-inverted-hovered)",
        pressed: "var(--hap-color-fill-inverted-pressed)",
        selected: "var(--hap-color-fill-inverted-selected)",
      },
      interaction: {
        onLight: {
          default: "var(--hap-color-fill-interaction-on-light-default)",
          hovered: "var(--hap-color-fill-interaction-on-light-hovered)",
          pressed: "var(--hap-color-fill-interaction-on-light-pressed)",
          selected: "var(--hap-color-fill-interaction-on-light-selected)",
        },
        onDark: {
          default: "var(--hap-color-fill-interaction-on-dark-default)",
          hovered: "var(--hap-color-fill-interaction-on-dark-hovered)",
          pressed: "var(--hap-color-fill-interaction-on-dark-pressed)",
          selected: "var(--hap-color-fill-interaction-on-dark-selected)",
        },
      },
    },
    link: {
      default: "var(--hap-color-link-default)",
      hovered: "var(--hap-color-link-hovered)",
      pressed: "var(--hap-color-link-pressed)",
    },
    feedback: {
      positive: {
        dark: "var(--hap-color-feedback-positive-dark)",
        light: "var(--hap-color-feedback-positive-light)",
      },
      caution: {
        dark: "var(--hap-color-feedback-caution-dark)",
        light: "var(--hap-color-feedback-caution-light)",
      },
      critical: {
        dark: "var(--hap-color-feedback-critical-dark)",
        light: "var(--hap-color-feedback-critical-light)",
      },
      neutral: {
        dark: "var(--hap-color-feedback-neutral-dark)",
        light: "var(--hap-color-feedback-neutral-light)",
      },
      new: {
        dark: "var(--hap-color-feedback-new-dark)",
        light: "var(--hap-color-feedback-new-light)",
      },
      default: {
        dark: "var(--hap-color-feedback-default-dark)",
        light: "var(--hap-color-feedback-default-light)",
      },
    },
    icon: {
      primary: {
        onLight: "var(--hap-color-icon-primary-on-light)",
        onDark: "var(--hap-color-icon-primary-on-dark)",
        onDarkOnly: "var(--hap-color-icon-primary-on-dark-only)",
        onLightOnly: "var(--hap-color-icon-primary-on-light-only)",
      },
      secondary: {
        onLight: "var(--hap-color-icon-secondary-on-light)",
        onDark: "var(--hap-color-icon-secondary-on-dark)",
        onDarkOnly: "var(--hap-color-icon-secondary-on-dark-only)",
        onLightOnly: "var(--hap-color-icon-secondary-on-light-only)",
      },
      tertiary: {
        onLight: "var(--hap-color-icon-tertiary-on-light)",
        onDark: "var(--hap-color-icon-tertiary-on-dark)",
        onDarkOnly: "var(--hap-color-icon-tertiary-on-dark-only)",
        onLightOnly: "var(--hap-color-icon-tertiary-on-light-only)",
      },
      brand: {
        onLight: "var(--hap-color-icon-brand-on-light)",
        onDark: "var(--hap-color-icon-brand-on-dark)",
        onDarkOnly: "var(--hap-color-icon-brand-on-dark-only)",
        onLightOnly: "var(--hap-color-icon-brand-on-light-only)",
      },
    },
    background: {
      neutral: "var(--hap-color-background-neutral)",
      brand1: "var(--hap-color-background-brand-1)",
      brand2: "var(--hap-color-background-brand-2)",
    },
    surface: {
      inverted: {
        default: "var(--hap-color-surface-inverted-default)",
        hovered: "var(--hap-color-surface-inverted-hovered)",
        pressed: "var(--hap-color-surface-inverted-pressed)",
        selected: "var(--hap-color-surface-inverted-selected)",
      },
      primary: {
        default: "var(--hap-color-surface-primary-default)",
        hovered: "var(--hap-color-surface-primary-hovered)",
        pressed: "var(--hap-color-surface-primary-pressed)",
        selected: "var(--hap-color-surface-primary-selected)",
      },
      secondary: {
        default: "var(--hap-color-surface-secondary-default)",
        hovered: "var(--hap-color-surface-secondary-hovered)",
        pressed: "var(--hap-color-surface-secondary-pressed)",
        selected: "var(--hap-color-surface-secondary-selected)",
      },
      tertiary: {
        default: "var(--hap-color-surface-tertiary-default)",
        hovered: "var(--hap-color-surface-tertiary-hovered)",
        pressed: "var(--hap-color-surface-tertiary-pressed)",
        selected: "var(--hap-color-surface-tertiary-selected)",
      },
      brand: {
        default: "var(--hap-color-surface-brand-default)",
        hovered: "var(--hap-color-surface-brand-hovered)",
        pressed: "var(--hap-color-surface-brand-pressed)",
        selected: "var(--hap-color-surface-brand-selected)",
      },
      disabled: {
        default: "var(--hap-color-surface-disabled-default)",
      },
      transparent: {
        default: "var(--hap-color-surface-transparent-default)",
      },
    },
    divider: {
      onLight: "var(--hap-color-divider-on-light)",
      onDark: "var(--hap-color-divider-on-dark)",
    },
    borderColor: {
      primary: {
        onLight: {
          default: "var(--hap-color-border-primary-on-light-default)",
        },
        onDark: {
          default: "var(--hap-color-border-primary-on-dark-default)",
        },
      },
      secondary: {
        onLight: {
          default: "var(--hap-color-border-secondary-on-light-default)",
        },
        onDark: {
          default: "var(--hap-color-border-secondary-on-dark-default)",
        },
      },
      tertiary: {
        onLight: {
          default: "var(--hap-color-bordedefault)",
        },
        onDark: {
          default: "var(--hap-color-border-tertiary-on-dark-default)",
        },
      },
      brand: {
        onLight: {
          default: "var(--hap-color-border-brand-on-light-default)",
        },
        onDark: {
          default: "var(--hap-color-border-brand-on-dark-default)",
        },
      },
      focused: {
        default: "var(--hap-color-border-focused-default)",
      },
    },
  },
  fontFamily: {
    heading: ["var(--hap-typography-font-family-heading)", "sans-serif"],
    body: ["var(--hap-typography-font-family-body)", "sans-serif"],
  },
  fontWeight: {
    regular: "var(--hap-typography-font-weight-regular)",
    medium: "var(--hap-typography-font-weight-medium)",
    bold: "var(--hap-typography-font-weight-bold)",
  },
  fontSize: {
    "headline-3xl": "var(--hap-typography-font-size-headline-3-xl)",
    "headline-2xl": "var(--hap-typography-font-size-headline-2-xl)",
    "headline-xl": "var(--hap-typography-font-size-headline-xl)",
    "headline-lg": "var(--hap-typography-font-size-headline-lg)",
    "headline-md": "var(--hap-typography-font-size-headline-md)",
    "headline-sm": "var(--hap-typography-font-size-headline-sm)",

    "bodytext-standard": "var(--hap-typography-font-size-bodytext-standard)",
    "bodytext-s": "var(--hap-typography-font-size-bodytext-s)",
    "bodytext-xs": "var(--hap-typography-font-size-bodytext-xs)",
    "bodytext-2xs": "var(--hap-typography-font-size-bodytext-2-xs)",
  },
  lineHeight: {
    "headline-3xl": "var(--hap-typography-line-height-headline-3-xl)",
    "headline-2xl": "var(--hap-typography-line-height-headline-2-xl)",
    "headline-xl": "var(--hap-typography-line-height-headline-xl)",
    "headline-lg": "var(--hap-typography-line-height-headline-lg)",
    "headline-md": "var(--hap-typography-line-height-headline-md)",
    "headline-sm": "var(--hap-typography-line-height-headline-sm)",

    "bodytext-standard-singleline":
      "var(--hap-typography-line-height-bodytext-standard-singleline)",
    "bodytext-standard-multiline":
      "var(--hap-typography-line-height-bodytext-standard-multiline)",
    "bodytext-s-singleline":
      "var(--hap-typography-line-height-bodytext-s-singleline)",
    "bodytext-s-multiline":
      "var(--hap-typography-line-height-bodytext-s-multiline)",
    "bodytext-xs-singleline":
      "var(--hap-typography-line-height-bodytext-xs-singleline)",
    "bodytext-xs-multiline":
      "var(--hap-typography-line-height-bodytext-xs-multiline)",
    "bodytext-3xs": "var(--hap-typography-line-height-bodytext-3-xs)",
    "bodytext-2xs": "var(--hap-typography-line-height-bodytext-2-xs)",
  },
  letterSpacing: {
    md: "var(--hap-typography-letter-spacing-md)",
    lg: "var(--hap-typography-letter-spacing-lg)",
    xl: "var(--hap-typography-letter-spacing-xl)",
    sm: "var(--hap-typography-letter-spacing-sm)",
    xs: "var(--hap-typography-letter-spacing-xs)",
  },

  opacity: {
    default: "var(--hap-opacity-default)",
    disabled: "var(--hap-opacity-disabled)",
    inactive: "var(--hap-opacity-inactive)",
    hovered: "var(--hap-opacity-hovered)",
  },
  boxShadow: {
    firstLevel:
      "var(--hap-shadow-first-level-x) var(--hap-shadow-first-level-y) var(--hap-shadow-first-level-blur) var(--hap-shadow-first-level-color)",
    secondLevel:
      "var(--hap-shadow-second-level-x) var(--hap-shadow-second-level-y) var(--hap-shadow-second-level-blur) var(--hap-shadow-second-level-color)",
  },
};
