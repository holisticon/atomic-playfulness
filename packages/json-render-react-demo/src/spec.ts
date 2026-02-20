import type { Spec } from "@json-render/core";

export const spec: Spec = {
  root: "page",
  elements: {
    page: {
      type: "Stack",
      props: { gap: "xl" },
      children: ["hero", "content", "footer"],
    },
    hero: {
      type: "Stack",
      props: { gap: "md" },
      children: ["topbar", "heroText", "heroActions"],
    },
    topbar: {
      type: "Topbar",
      props: {
        brand: "JSON Render React",
        items: [
          { label: "Components", current: true },
          { label: "Layout" },
          { label: "Forms" },
        ],
        actionLabel: "Get Started",
        actionIcon: "arrow-right",
      },
    },
    heroText: {
      type: "Stack",
      props: { gap: "sm" },
      children: ["heroHeadline", "heroSubheadline"],
    },
    heroHeadline: {
      type: "Headline",
      props: { text: "All catalog elements in one page", size: "2xl" },
    },
    heroSubheadline: {
      type: "Text",
      props: {
        text: "This demo renders the full json-render-react catalog using a single spec.",
        size: "standard",
      },
    },
    heroActions: {
      type: "Inline",
      props: { gap: "sm", align: "center", wrap: true },
      children: [
        "heroButtonPrimary",
        "heroButtonSecondary",
        "heroTextLink",
        "heroToggleGroup",
      ],
    },
    heroButtonPrimary: {
      type: "Button",
      props: {
        label: "Primary Action",
        variant: "primary",
        icon: "check",
        iconPosition: "left",
      },
    },
    heroButtonSecondary: {
      type: "Button",
      props: {
        label: "Secondary",
        variant: "secondary",
        icon: "arrow-right",
        iconPosition: "right",
        size: "small",
      },
    },
    heroTextLink: {
      type: "Textlink",
      props: {
        label: "Documentation",
        size: "standard",
        icon: "arrow-right",
        iconPosition: "right",
      },
    },
    heroToggleGroup: {
      type: "ToggleButtonGroup",
      props: {},
      children: ["heroToggleOne", "heroToggleTwo", "heroToggleThree"],
    },
    heroToggleOne: {
      type: "ToggleButton",
      props: { label: "Grid", icon: "layout-grid", pressed: true },
    },
    heroToggleTwo: {
      type: "ToggleButton",
      props: { label: "List", icon: "list" },
    },
    heroToggleThree: {
      type: "ToggleButton",
      props: { label: "Compact", icon: "minus", size: "small" },
    },
    content: {
      type: "Stack",
      props: { gap: "xl" },
      children: [
        "navSection",
        "statusSection",
        "formSection",
        "layoutSection",
        "overlaySection",
      ],
    },
    navSection: {
      type: "Stack",
      props: { gap: "md" },
      children: ["navHeadline", "navInline"],
    },
    navHeadline: {
      type: "Headline",
      props: { text: "Navigation", size: "lg" },
    },
    navInline: {
      type: "Inline",
      props: { gap: "lg", align: "start", wrap: true },
      children: [
        "navRail",
        "navRailItem",
        "navDrawer",
        "navBreadcrumb",
        "navMenu",
      ],
    },
    navRailItem: {
      type: "NavigationRailItem",
      props: { icon: "shopping-cart", label: "Standalone", badgeCount: 4 },
    },
    navRail: {
      type: "NavigationRail",
      props: {
        items: [
          { icon: "menu" },
          { icon: "shopping-cart", label: "Shop", selected: true },
          { icon: "bell", label: "Alerts", badgeCount: 3 },
          { icon: "settings", label: "Settings" },
        ],
      },
    },
    navDrawer: {
      type: "NavigationDrawer",
      props: {
        sections: [
          {
            title: "Workspace",
            items: [
              { label: "Dashboard", icon: "layout-grid", badgeCount: 2 },
              { label: "Reports", icon: "file" },
            ],
          },
          {
            title: "Teams",
            items: [
              { label: "Design", icon: "sparkles" },
              { label: "Engineering", icon: "code" },
            ],
          },
        ],
      },
    },
    navBreadcrumb: {
      type: "Breadcrumb",
      props: {
        pages: ["Home", "Library", "Catalog"],
        currentIndex: 2,
      },
    },
    navMenu: {
      type: "Menu",
      props: {
        items: [
          { label: "Overview", icon: "circle-play", selected: true },
          { label: "Team", icon: "user-round" },
          { label: "Settings", icon: "settings", disabled: true },
        ],
      },
    },
    statusSection: {
      type: "Stack",
      props: { gap: "md" },
      children: ["statusHeadline", "statusInline", "statusProgress"],
    },
    statusHeadline: {
      type: "Headline",
      props: { text: "Status & Feedback", size: "lg" },
    },
    statusInline: {
      type: "Inline",
      props: { gap: "md", align: "center", wrap: true },
      children: [
        "statusAlert",
        "statusBadge",
        "statusTag",
        "statusIndicator",
        "statusTooltip",
        "statusIconButton",
        "statusIcon",
      ],
    },
    statusAlert: {
      type: "Alert",
      props: {
        label: "Heads up: new release is live",
        feedback: "new",
        icon: "sparkles",
        actionIcon: "circle-x",
      },
    },
    statusBadge: {
      type: "Badge",
      props: {
        label: "Critical",
        feedback: "critical",
        strong: true,
        icon: "circle-alert",
      },
    },
    statusTag: {
      type: "Tag",
      props: { label: "Beta", icon: "sparkles", closeable: true },
    },
    statusIndicator: {
      type: "Indicator",
      props: { content: 8 },
    },
    statusTooltip: {
      type: "Tooltip",
      props: { content: "Tooltip text" },
    },
    statusIconButton: {
      type: "IconButton",
      props: { icon: "bell", size: "sm", selected: true },
    },
    statusIcon: {
      type: "Icon",
      props: { name: "sparkles", size: "small" },
    },
    statusDrawerAlert: {
      type: "Alert",
      props: {
        label: "Attention needed",
        feedback: "caution",
        icon: "circle-alert",
        actionIcon: "chevron-right",
      },
    },
    statusProgress: {
      type: "Stack",
      props: { gap: "sm" },
      children: [
        "statusDivider",
        "statusProgressBar",
        "statusSnackbar",
        "statusDrawerAlert",
      ],
    },
    statusDivider: {
      type: "Divider",
      props: { inset: true },
    },
    statusProgressBar: {
      type: "ProgressIndicator",
      props: { progress: 62 },
    },
    statusSnackbar: {
      type: "Snackbar",
      props: {
        label: "Workspace updated",
        variant: "single",
        actionLabel: "Undo",
        closeable: true,
      },
    },
    formSection: {
      type: "Stack",
      props: { gap: "md" },
      children: ["formHeadline", "formStack"],
    },
    formHeadline: {
      type: "Headline",
      props: { text: "Forms", size: "lg" },
    },
    formStack: {
      type: "Stack",
      props: { gap: "md" },
      children: [
        "formSearch",
        "formTextfield",
        "formTextarea",
        "formControls",
        "formRadioGroup",
      ],
    },
    formSearch: {
      type: "Search",
      props: {
        label: "Search",
        placeholder: "Search the catalog",
        value: { $bindState: "/search" },
      },
    },
    formTextfield: {
      type: "Textfield",
      props: {
        label: "Full name",
        description: "As shown on your badge",
        placeholder: "Taylor Jordan",
        value: { $bindState: "/form/name" },
      },
    },
    formTextarea: {
      type: "Textarea",
      props: {
        label: "Message",
        description: "Share a short note",
        placeholder: "Write a brief message",
        rows: 4,
        value: { $bindState: "/form/message" },
      },
    },
    formControls: {
      type: "Inline",
      props: { gap: "md", align: "center", wrap: true },
      children: ["formSwitch", "formCheckbox"],
    },
    formSwitch: {
      type: "Switch",
      props: {
        size: "small",
        checked: { $bindState: "/preferences/newsletter" },
      },
    },
    formCheckbox: {
      type: "Checkbox",
      props: {
        label: "Receive product updates",
        checked: { $bindState: "/preferences/productUpdates" },
      },
    },
    formRadioGroup: {
      type: "RadioGroup",
      props: {
        label: "Preferred contact",
        name: "contact",
        value: { $bindState: "/profile/contactMethod" },
        options: [
          { label: "Email", value: "email" },
          { label: "Phone", value: "phone" },
          { label: "Chat", value: "chat" },
        ],
      },
    },
    layoutSection: {
      type: "Stack",
      props: { gap: "md" },
      children: ["layoutHeadline", "layoutInline"],
    },
    layoutHeadline: {
      type: "Headline",
      props: { text: "Layout", size: "lg" },
    },
    layoutInline: {
      type: "Inline",
      props: { gap: "md", align: "center", wrap: true },
      children: ["layoutStack", "layoutInlineSample", "layoutPlaceholder"],
    },
    layoutStack: {
      type: "Stack",
      props: { gap: "xs" },
      children: ["layoutStackHeadline", "layoutStackText"],
    },
    layoutStackHeadline: {
      type: "Headline",
      props: { text: "Stack", size: "sm" },
    },
    layoutStackText: {
      type: "Text",
      props: { text: "Vertical spacing with gap tokens.", size: "sm" },
    },
    layoutInlineSample: {
      type: "Inline",
      props: { gap: "xs", align: "center" },
      children: ["layoutInlineText", "layoutInlineButton"],
    },
    layoutInlineText: {
      type: "Text",
      props: { text: "Inline group", size: "sm" },
    },
    layoutInlineButton: {
      type: "Button",
      props: { label: "Add", variant: "tertiary", size: "small" },
    },
    layoutPlaceholder: {
      type: "Placeholder",
      props: {},
    },
    overlaySection: {
      type: "Stack",
      props: { gap: "md" },
      children: ["overlayHeadline", "overlayInline", "overlayModal"],
    },
    overlayHeadline: {
      type: "Headline",
      props: { text: "Overlays", size: "lg" },
    },
    overlayInline: {
      type: "Inline",
      props: { gap: "md", align: "center", wrap: true },
      children: ["overlayTabs", "overlayToggleGroup", "overlayTextLink"],
    },
    overlayTabs: {
      type: "Tabs",
      props: {
        selectedIndex: 1,
        tabs: [
          { label: "Overview", icon: "circle-play" },
          { label: "Usage", icon: "code", selected: true },
          { label: "Tokens", icon: "sparkles" },
        ],
      },
    },
    overlayToggleGroup: {
      type: "ToggleButtonGroup",
      props: {},
      children: ["overlayToggleA", "overlayToggleB"],
    },
    overlayToggleA: {
      type: "ToggleButton",
      props: { label: "Active", pressed: true },
    },
    overlayToggleB: {
      type: "ToggleButton",
      props: { label: "Inactive", subtle: true },
    },
    overlayTextLink: {
      type: "Textlink",
      props: { label: "Need help?", size: "small" },
    },
    overlayModal: {
      type: "Modal",
      props: {
        title: "Upgrade plan",
        content: "Unlock advanced workflows and team sharing.",
        primaryActionLabel: "Upgrade",
        secondaryActionLabel: "Maybe later",
        open: true,
      },
    },
    footer: {
      type: "Stack",
      props: { gap: "sm" },
      children: ["footerDivider", "footerText"],
    },
    footerDivider: {
      type: "Divider",
      props: {},
    },
    footerText: {
      type: "Text",
      props: {
        text: "Built with json-render-react and the Atomic Playfulness design system.",
        size: "xs",
      },
    },
  },
};
