import { type VariantProps, cva } from "cva";
import { twMerge } from "tailwind-merge";
import { gapX } from "../../sharedVarients";

const hStackVarients = cva("flex", {
  variants: {
    gapX,
  },
});

export interface hStackVarients extends VariantProps<typeof hStackVarients> {}

const hStack = ({ gapX }: hStackVarients) => twMerge(hStackVarients({ gapX }));

export interface HStackProps {
  gapX?: "0" | "2" | "4" | "6" | "8" | "16";
  children?: React.ReactNode;
}

export const initialProps: HStackProps = {
  gapX: "0",
};

const HStack = ({ gapX, children }: HStackProps) => {
  return <div className={hStack({ gapX })}>{children}</div>;
};

export default HStack;
