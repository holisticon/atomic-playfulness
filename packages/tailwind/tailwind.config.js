import "@holisticon/hap-foundation/atomic-playfulness.css";

export const theme = {
  extend: {
    fontFamily: {
      "klarheit-heading": [
        '"var(--hap-primitives-font-family-heading)", "sans-serif"',
      ],
      "klarheit-body": [
        '"var(--hap-primitives-font-family-body)", "sans-serif"',
      ],
    },
    colors: {
      fill: {
        darkOnly: {
          default: "var(--hap-color-background-fill-darkonly-default)",
        },
        dark: {
          default: "var(--hap-color-background-fill-dark-default)",
        },
        state: {
          on: "var(--hap-color-background-fill-state-on)",
        },
        recessed: {
          default: "var(--hap-color-background-fill-recessed-default)",
        },
        inverted: {
          default: "var(--hap-color-background-fill-inverted-default)",
        },
      },
      brand: {
        lightOnly: "var(--hap-color-text-brand-lightonly)",
        onDark: "var(--hap-color-text-brand-ondark)",
        onLight: "var(--hap-color-text-brand-onlight)",
      },
      primary: {
        onLight: `var(--hap-color-text-primary-onlight)`,
      },
      secondary: {
        onLight: "var(--hap-color-text-secondary-onlight)",
      },
      tertiary: {
        onLight: "var(--hap-color-text-tertiary-onlight)",
      },
      border: {
        tertiary: {
          onLight: "var(--hap-border-tertiary-onlight)",
        },
      },
      button: {
        primary: {
          onLight: {
            default: "var(--hap-color-button-primary-onlight-default)",
            hovered: "var(--hap-color-button-primary-onlight-hovered)",
            pressed: "var(--hap-color-button-primary-onlight-pressed)",
          },
        },
      },
    },
    spacing: {
      none: "var(--hap-spacing-none)",
      xs: "var(--hap-spacing-xs)",
      sm: "var(--hap-spacing-sm)",
      md: "var(--hap-spacing-md)",
      "md-lg": "var(--hap-spacing-md-lg)",
      lg: "var(--hap-spacing-lg)",
      xl: "var(--hap-spacing-xl)",
      "2xl": "var(--hap-spacing-2xl)",
    },
    borderRadius: {
      "radius-minimal": "var(--hap-radius-minimal)",
      "radius-rounded": "var(--hap-radius-rounded)",
      "radius-roundedlarge": "var(--hap-radius-roundedlarge)",
      "radius-full": "var(--hap-radius-radius-full)",
    },
    strokeWidth: {
      4: "4px",
      6: "6px",
      8: "8px",
      16: "16px",
    },
    lineHeight: {
      body: {
        regular: {
          multiline: "var(--hap-typography-line-height-body-regular-multiline)",
          singleline:
            "var(--hap-typography-line-height-body-regular-singleline)",
        },
      },
    },
    letterSpacing: {
      xs: "var(--hap-typography-letter-spacing-xs)",
      s: "var(--hap-typography-letter-spacing-s)",
      md: "var(--hap-typography-letter-spacing-md)",
      lg: "var(--hap-typography-letter-spacing-lg)",
      xl: "var(--hap-typography-letter-spacing-xl)",
    },
    fontWeight: {
      regular: "var(--hap-typography-font-weight-regular)",
      medium: "var(--hap-typography-font-weight-medium)",
      bold: "var(--hap-typography-font-weight-bold)",
    },
    fontSize: {
      footnotes: "var(--hap-typography-font-size-footnotes)",
      h1: "var(--hap-typography-font-size-h1)",
      h2: "var(--hap-typography-font-size-h2)",
      h3: "var(--hap-typography-font-size-h3)",
      h4: "var(--hap-typography-font-size-h4)",
      h5: "var(--hap-typography-font-size-h5)",
    },
  },
};
