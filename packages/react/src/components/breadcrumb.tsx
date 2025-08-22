import { cva, type VariantProps } from "cva";
import type { ComponentPropsWithRef } from "react";
import { Icon } from "./icon.js";
import { TextLink } from "./text-link.js";

const breadcrumb = cva({
  base: "hap-breadcrumb",
});

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps
  extends ComponentPropsWithRef<"nav">,
    VariantProps<typeof breadcrumb> {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
}

export function Breadcrumb(props: BreadcrumbProps) {
  const { items, separator, className, ...rest } = props;

  const defaultSeparator = <Icon name="ChevronRight" size="small" />;
  const separatorElement =
    separator !== undefined ? separator : defaultSeparator;

  return (
    <nav
      className={breadcrumb({ className })}
      aria-label="Breadcrumb"
      {...rest}
    >
      <ol className="hap-breadcrumb-list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="hap-breadcrumb-item">
              {item.href && !isLast ? (
                <TextLink
                  href={item.href}
                  size="small"
                  className="hap-breadcrumb-link"
                >
                  {item.label}
                </TextLink>
              ) : (
                <span
                  className={
                    isLast ? "hap-breadcrumb-link--current" : undefined
                  }
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}

              {!isLast && separatorElement && (
                <span
                  aria-hidden="true"
                  style={{ marginLeft: "var(--hap-spacing-xs)" }}
                >
                  {separatorElement}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
