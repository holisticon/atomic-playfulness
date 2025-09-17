import type { ComponentPropsWithRef } from "react";
import { Icon } from "./icon.tsx";

interface SearchProps extends ComponentPropsWithRef<"input"> {
  label?: string;
}

export function Search(props: SearchProps) {
  const label = props.label ?? "Search";

  return (
    <div className="hap-search">
      <span className="hap-search-icon">
        <Icon name="Search" size="small" />
      </span>
      <input
        {...props}
        aria-label={label}
        placeholder={props.placeholder ?? label}
      ></input>
      <button className="hap-icon-button--sm" aria-label={`Trigger ${label}`}>
        <Icon name="ArrowRight" size="small" />
      </button>
    </div>
  );
}
