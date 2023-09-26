import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "../../utils";
import React from "react";
import {
  paddingLeft,
  paddingBottom,
  paddingRight,
  paddingTop,
  SizeVariant,
} from "../../sharedVariants";

const containerVariants = cva("", {
  variants: {
    layout: {
      flex: "flex flex-col lg:flex-row",
      grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      row: "flex flex-row",
      column: "flex flex-col",
    },
    columnSpan: {
      "1": "col-span-1",
      "2": "col-span-2",
      "3": "col-span-3",
    },
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
  },
  defaultVariants: {
    layout: "flex",
    columnSpan: "1",
  },
});

// export interface ContainerProps
//   extends React.HTMLAttributes<HTMLDivElement>,
//     VariantProps<typeof containerVariants> {
//   children?: React.ReactNode;
// }

export interface ContainerProps {
  children?: React.ReactNode;
  /**
   * @displayName Layout
   * @tooltip Defines the layout of the container
   */
  layout?: "flex" | "grid" | "row" | "column";
  /**
   * @displayName Column Span
   * @tooltip Defines the number of columns the container spans. NOTE: Only works with grid layout
   */
  columnSpan?: "1" | "2" | "3";
  /**
   * @displayName Padding Top
   * @tooltip Defines the padding top of the container
   */
  paddingTop?: SizeVariant;
  /**
   * @displayName Padding Bottom
   * @tooltip Defines the padding bottom of the container
   */
  paddingBottom?: SizeVariant;
  /**
   * @displayName Padding Left
   * @tooltip Defines the padding left of the container
   */
  paddingLeft?: SizeVariant;
  /**
   * @displayName Padding Right
   * @tooltip Defines the padding right of the container
   */
  paddingRight?: SizeVariant;
  className?: string;
}

export const initialProps: ContainerProps = {
  layout: "flex",
  columnSpan: "1",
  paddingTop: "M",
  paddingBottom: "M",
  paddingLeft: "M",
  paddingRight: "M",
  className: "",
};

const Container = ({
  className,
  layout,
  children,
  columnSpan,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
}: ContainerProps) => {
  return (
    <div
      className={cn(
        containerVariants({
          layout,
          className,
          columnSpan,
          paddingBottom,
          paddingLeft,
          paddingRight,
          paddingTop,
        })
      )}
    >
      {children}
    </div>
  );
};

export default Container;
