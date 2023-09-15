import { type VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import {
  gapX,
  gapY,
  marginX,
  marginY,
  paddingX,
  paddingY,
} from "../../sharedVarients";

const flexVariants = cva("flex flex-col sm:flex-row", {
  variants: {
    gapX,
    gapY,
    marginX,
    marginY,
    paddingX,
    paddingY,
  },
});

const flex = ({
  gapX,
  gapY,
  marginX,
  marginY,
  paddingX,
  paddingY,
  className,
}) =>
  twMerge(
    flexVariants({
      gapX,
      gapY,
      marginX,
      marginY,
      paddingX,
      paddingY,
      className,
    })
  );

export interface FlexProps {
  gapX?: "0" | "2" | "4" | "6" | "8" | "16";
  gapY?: "0" | "2" | "4" | "6" | "8" | "16";
  marginX?: "0" | "2" | "4" | "6" | "8" | "16";
  marginY?: "0" | "2" | "4" | "6" | "8" | "16";
  paddingX?: "0" | "2" | "4" | "6" | "8" | "16";
  paddingY?: "0" | "2" | "4" | "6" | "8" | "16";
  className?: string;
  children?: React.ReactNode;
}

export const initialProps: FlexProps = {
  gapX: "0",
  gapY: "0",
};

const FlexStack = ({
  gapX,
  gapY,
  marginX,
  marginY,
  paddingX,
  paddingY,
  children,
  className,
}: FlexProps) => {
  return (
    <div
      className={flex({
        gapX,
        gapY,
        marginX,
        marginY,
        paddingX,
        paddingY,
        className,
      })}
    >
      {children}
    </div>
  );
};

export default FlexStack;
