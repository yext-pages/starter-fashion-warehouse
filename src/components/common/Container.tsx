import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "../../utils";
import {
  paddingLeft,
  paddingBottom,
  paddingRight,
  paddingTop,
  ContainerSizeVariant,
  backgroundColors,
  ColorVariant,
  marginX,
  marginY,
  MarginSizeVariant,
} from "../../sharedVariants";

const containerVariants = cva("", {
  variants: {
    layout: {
      flex: "flex flex-col lg:flex-row",
      grid: "grid",
      row: "flex flex-row",
      column: "flex flex-col",
    },
    flexGap: {
      "2": "gap-2",
      "4": "gap-4",
      "6": "gap-6",
      "8": "gap-8",
      "10": "gap-10",
      "12": "gap-12",
    },
    itemAlignment: {
      Start: "items-start",
      Center: "items-center",
      End: "items-end",
    },
    columnCount: {
      "1": "grid-cols-1",
      "2": "grid-cols-2",
      "3": "grid-cols-3",
      "4": "grid-cols-4",
      "5": "grid-cols-5",
      "6": "grid-cols-6",
      responsive: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
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
    horizontalMargin: marginX,
    verticalMargin: marginY,
    backgroundColor: backgroundColors,
  },
  defaultVariants: {
    layout: "flex",
    columnSpan: "1",
  },
});

export interface ContainerProps {
  children?: React.ReactNode;
  /**
   * @displayName Layout
   * @tooltip Defines the layout of the container
   */
  layout?: "flex" | "grid" | "row" | "column";
  /**
   * @displayName Flex Gap
   * @tooltip Controls the amount of space between each item. NOTE: Does not work with grid layout
   */
  flexGap?: "2" | "4" | "6" | "8" | "10" | "12";
  /**
   * @displayName Item Alignment
   * @tooltip Controls the alignment of items within a container. NOTE: Does not work with grid layout
   */
  itemAlignment?: "Start" | "Center" | "End";
  /**
   * @displayName Column Span
   * @tooltip Defines the number of columns the container spans. NOTE: Only works with grid layout
   */
  columnSpan?: "1" | "2" | "3";
  /**
   * @displayName Column Count
   * @tooltip Defines the number of columns in the grid container. NOTE: Only works with grid layout
   */
  columnCount?: "1" | "2" | "3" | "4" | "5" | "6" | "responsive";
  /**
   * @displayName Padding Top
   * @tooltip Defines the padding top of the container
   */
  paddingTop?: ContainerSizeVariant;
  /**
   * @displayName Padding Bottom
   * @tooltip Defines the padding bottom of the container
   */
  paddingBottom?: ContainerSizeVariant;
  /**
   * @displayName Padding Left
   * @tooltip Defines the padding left of the container
   */
  paddingLeft?: ContainerSizeVariant;
  /**
   * @displayName Padding Right
   * @tooltip Defines the padding right of the container
   */
  paddingRight?: ContainerSizeVariant;
  /**
   * @displayName Horizontal Margin
   * @tooltip Controls the horizontal margin of the container
   */
  horizontalMargin?: MarginSizeVariant;
  /**
   * @displayName Vertical Margin
   * @tooltip Controls the vertical margin of the container
   */
  verticalMargin?: MarginSizeVariant;
  /**
   * @displayName Background Color
   * @tooltip Controls the background color of the container
   */
  backgroundColor?: ColorVariant;
  className?: string;
}

export const initialProps: ContainerProps = {
  layout: "flex",
  flexGap: "2",
  itemAlignment: "Start",
  columnSpan: "1",
  columnCount: "responsive",
  paddingTop: "M",
  paddingBottom: "M",
  paddingLeft: "M",
  paddingRight: "M",
  backgroundColor: "White",
  horizontalMargin: "0",
  verticalMargin: "0",
  className: "",
};

const Container = ({
  className,
  layout,
  flexGap,
  itemAlignment,
  children,
  columnSpan,
  columnCount,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  horizontalMargin,
  verticalMargin,
  backgroundColor,
}: ContainerProps) => {
  return (
    <div
      className={cn(
        containerVariants({
          layout,
          flexGap,
          itemAlignment,
          className,
          columnSpan,
          columnCount,
          paddingBottom,
          paddingLeft,
          paddingRight,
          paddingTop,
          verticalMargin,
          horizontalMargin,
          backgroundColor,
        })
      )}
    >
      {children}
    </div>
  );
};

export default Container;
