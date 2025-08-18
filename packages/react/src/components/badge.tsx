import { cva } from "cva";

const badge = cva({
  base: "hap-badge regular",
});

interface BadgeProps {
  feedback?: "positive" | "critical";
}

export function Badge(props: BadgeProps) {
  return <div className={badge()}>{props.feedback}</div>;
}
