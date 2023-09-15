import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "../../utils";
import React from "react";

const containerVariants = cva("px-4 py-5 gap-y-3 sm:p-6", {
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
  className?: string;
  layout?: "flex" | "grid" | "row" | "column";
  columnSpan?: "1" | "2" | "3";
}

export const initialProps: ContainerProps = {
  layout: "flex",
};

const Container = ({
  className,
  layout,
  children,
  columnSpan,
  ...props
}: ContainerProps) => {
  return (
    <div
      className={cn(containerVariants({ layout, className, columnSpan }))}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
