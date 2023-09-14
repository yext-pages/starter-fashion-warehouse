import { type VariantProps, cva } from "cva";
import { twMerge } from "tailwind-merge";

const containerVarients = cva("flex", {
  variants: {
    layout: {
      flex: [""],
      horizontal: ["flex-row"],
      vertical: ["flex-col"],
    },
    leftMargin: {
      none: "ml-0",
      small: "ml-2",
      base: "ml-4",
      large: "ml-6",
      xl: "ml-8",
      "2xl": "ml-10",
    },
    rightMargin: {
      none: "mr-0",
      small: "mr-2",
      base: "mr-4",
      large: "mr-6",
      xl: "mr-8",
      "2xl": "mr-10",
    },
    topMargin: {
      none: "mt-0",
      small: "mt-2",
      base: "mt-4",
      large: "mt-6",
      xl: "mt-8",
      "2xl": "mt-10",
    },
    bottomMargin: {
      none: "mb-0",
      small: "mb-2",
      base: "mb-4",
      large: "mb-6",
      xl: "mb-8",
      "2xl": "mb-10",
    },
    alignment: {
      top: "items-start",
      center: "items-center",
      bottom: "items-end",
    },
    leftPadding: {
      none: "pl-0",
      small: "pl-2",
      base: "pl-4",
      large: "pl-6",
      xl: "pl-8",
      "2xl": "pl-10",
    },
    rightPadding: {
      none: "pr-0",
      small: "pr-2",
      base: "pr-4",
      large: "pr-6",
      xl: "pr-8",
      "2xl": "pr-10",
    },
    topPadding: {
      none: "pt-0",
      small: "pt-2",
      base: "pt-4",
      large: "pt-6",
      xl: "pt-8",
      "2xl": "pt-10",
    },
    bottomPadding: {
      none: "pb-0",
      small: "pb-2",
      base: "pb-4",
      large: "pb-6",
      xl: "pb-8",
      "2xl": "pb-10",
    },
    gap: {
      "0": "gap-0",
      "2": "gap-2",
      "4": "gap-4",
      "6": "gap-6",
      "8": "gap-8",
      "10": "gap-10",
    },
  },
  // compoundVariants: [{ intent: "primary", size: "medium", class: "uppercase" }],
  defaultVariants: {
    layout: "flex",
    leftMargin: "base",
    rightMargin: "base",
    topMargin: "base",
    bottomMargin: "base",
    alignment: "top",
    leftPadding: "base",
    rightPadding: "base",
    topPadding: "base",
    bottomPadding: "base",
  },
});

export interface ContainerVariants
  extends VariantProps<typeof containerVarients> {}

const container = ({
  layout,
  leftMargin,
  rightMargin,
  topMargin,
  bottomMargin,
  alignment,
  leftPadding,
  rightPadding,
  topPadding,
  bottomPadding,
  gap,
}: ContainerVariants) =>
  twMerge(
    containerVarients({
      layout,
      leftMargin,
      rightMargin,
      topMargin,
      bottomMargin,
      alignment,
      leftPadding,
      rightPadding,
      topPadding,
      bottomPadding,
      gap,
    })
  );

export interface ContainerProps {
  children: React.ReactNode;
  layout?: "flex" | "horizontal" | "vertical";
  leftMargin?: "none" | "small" | "base" | "large" | "xl" | "2xl";
  rightMargin?: "none" | "small" | "base" | "large" | "xl" | "2xl";
  topMargin?: "none" | "small" | "base" | "large" | "xl" | "2xl";
  bottomMargin?: "none" | "small" | "base" | "large" | "xl" | "2xl";
  alignment?: "top" | "center" | "bottom";
  leftPadding?: "none" | "small" | "base" | "large" | "xl" | "2xl";
  rightPadding?: "none" | "small" | "base" | "large" | "xl" | "2xl";
  topPadding?: "none" | "small" | "base" | "large" | "xl" | "2xl";
  bottomPadding?: "none" | "small" | "base" | "large" | "xl" | "2xl";
  gap?: "0" | "2" | "4" | "6" | "8" | "10";
}

export const defaultProps = {
  layout: "flex",
  leftMargin: "base",
  rightMargin: "base",
  topMargin: "base",
  bottomMargin: "base",
  alignment: "top",
  leftPadding: "base",
  rightPadding: "base",
  topPadding: "base",
  bottomPadding: "base",
  gap: "0",
};

const Container = ({
  children,
  layout,
  leftMargin,
  rightMargin,
  topMargin,
  bottomMargin,
  alignment,
  leftPadding,
  rightPadding,
  topPadding,
  bottomPadding,
  gap,
}: ContainerProps) => (
  <div
    className={container({
      layout,
      leftMargin,
      rightMargin,
      topMargin,
      bottomMargin,
      alignment,
      leftPadding,
      rightPadding,
      topPadding,
      bottomPadding,
      gap,
    })}
  >
    {children}
  </div>
);

export default Container;
