import type { FC } from "react";
import React from "react";

import { withReset } from "@storybook/components";

import type { Theme } from "@storybook/theming";
import { styled } from "@storybook/theming";
import { transparentize } from "polished";

/*
 * This component is copied from `@storybook/blocks` and slightly modified
 * to accept CSS class names rather than only varying font sizes.
 */

const getBlockBackgroundStyle: (theme: Theme) => object = (theme: Theme) => ({
  borderRadius: theme.appBorderRadius,
  background: theme.background.content,
  boxShadow:
    theme["base"] === "light"
      ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0"
      : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
  border: `1px solid ${theme.appBorderColor}`,
});
const Label = styled.div(({ theme }) => ({
  marginRight: 30,
  fontSize: `${theme.typography.size.s1}px`,
  color:
    theme["base"] === "light"
      ? transparentize(0.4, theme.color.defaultText)
      : transparentize(0.6, theme.color.defaultText),
}));

const Sample = styled.div({
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
});

const TypeSpecimen = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "baseline",
  "&:not(:last-child)": { marginBottom: "1rem" },
});

const Wrapper = styled.div(withReset, ({ theme }) => ({
  ...getBlockBackgroundStyle(theme),
  margin: "25px 0 40px",
  padding: "30px 20px",
}));

export interface TypesetProps {
  sampleText?: string;
  fontClasses: string[];
}

/**
 * Convenient styleguide documentation showing examples of type with different sizes and weights and
 * configurable sample text.
 */
export const Typography: FC<TypesetProps> = ({
  sampleText,
  fontClasses,
  ...props
}) => (
  <Wrapper {...props} className="docblock-typeset sb-unstyled">
    {fontClasses.map((className) => (
      <TypeSpecimen key={className}>
        <Label>.{className}</Label>
        <Sample className={className}>
          {sampleText || "Was he a beast if music could move him so?"}
        </Sample>
      </TypeSpecimen>
    ))}
  </Wrapper>
);
