import { compose, cva, type VariantProps } from "cva";
import type { ComponentPropsWithRef, KeyboardEvent } from "react";
import { feedback } from "../common/feedback.js";
import { Icon } from "./icon.js";

const search = compose(
  feedback,
  cva({
    base: "hap-textfield",
    variants: {
      brand: {
        true: "hap-textfield--brand",
      },
    },
  }),
);

export interface SearchProps
  extends Omit<ComponentPropsWithRef<"input">, "type" | "onChange">,
    VariantProps<typeof search> {
  label?: string;
  description?: string;
  invalid?: boolean;
  brand?: boolean;
  onSearch?: (value: string) => void;
  onChange?: (value: string) => void;
  onClear?: () => void;
  showClearButton?: boolean;
}

export function Search(props: SearchProps) {
  const {
    label,
    description,
    invalid,
    brand,
    feedback: feedbackProp,
    className,
    id,
    onSearch,
    onChange,
    onClear,
    showClearButton = true,
    value = "",
    ...rest
  } = props;

  const searchId = id || `search-${Math.random().toString(36).slice(2, 11)}`;
  const descriptionId = description ? `${searchId}-description` : undefined;

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && onSearch) {
      onSearch(event.currentTarget.value);
    }
    rest.onKeyDown?.(event);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onChange?.(newValue);
  };

  const handleClear = () => {
    onChange?.("");
    onClear?.();
  };

  const showClear = showClearButton && value && String(value).length > 0;

  return (
    <div
      className={search({
        feedback: invalid ? "critical" : feedbackProp,
        brand,
        className,
      })}
    >
      {label && (
        <label htmlFor={searchId}>
          {invalid && <Icon name="CircleAlert" size="small" />}
          {label}
        </label>
      )}
      <div className="hap-textfield-input">
        <Icon name="Search" size="small" />
        <input
          {...rest}
          id={searchId}
          type="search"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          aria-describedby={descriptionId}
          style={{
            flex: 1,
            border: "none",
            background: "none",
            outline: "none",
          }}
        />
        {showClear && (
          <button
            type="button"
            onClick={handleClear}
            aria-label="Clear search"
            style={{
              border: "none",
              background: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              color: "inherit",
            }}
          >
            <Icon name="X" size="small" />
          </button>
        )}
      </div>
      {description && <span id={descriptionId}>{description}</span>}
    </div>
  );
}
