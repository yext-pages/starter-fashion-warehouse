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

const vStackVariants = cva("flex flex-col", {
  variants: {
    gapX,
    gapY,
    marginX,
    marginY,
    paddingX,
    paddingY,
  },
});

const vStack = ({
  gapX,
  gapY,
  marginX,
  marginY,
  paddingX,
  paddingY,
  className,
}) =>
  twMerge(
    vStackVariants({
      gapX,
      gapY,
      marginX,
      marginY,
      paddingX,
      paddingY,
      className,
    })
  );

export interface VStackProps {
  gapX?: "0" | "2" | "4" | "6" | "8" | "16";
  gapY?: "0" | "2" | "4" | "6" | "8" | "16";
  marginX?: "0" | "2" | "4" | "6" | "8" | "16";
  marginY?: "0" | "2" | "4" | "6" | "8" | "16";
  paddingX?: "0" | "2" | "4" | "6" | "8" | "16";
  paddingY?: "0" | "2" | "4" | "6" | "8" | "16";
  className?: string;
  children?: React.ReactNode;
}

export const initialProps: VStackProps = {
  gapX: "0",
  gapY: "0",
};

const VStack = ({
  gapX,
  gapY,
  marginX,
  marginY,
  paddingX,
  paddingY,
  children,
  className,
}: VStackProps) => {
  return (
    <div
      className={vStack({
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

export default VStack;
