import { cva } from "cva";
import { cn } from "../../utils";
import { borderColors, ColorVariant } from "../../sharedVariants";

const horizontalDividerVariants = cva("w-full h-0.5 rounded-full", {
  variants: {
    color: borderColors,
  },
});

export interface HorizontalDividerProps {
  /**
   * @displayName Color
   */
  color?: ColorVariant;
}

export const initialProps: HorizontalDividerProps = {
  color: "Gray 300",
};

const HorizontalDivider = ({ color }: HorizontalDividerProps) => {
  return (
    <span
      className={cn(
        horizontalDividerVariants({
          color,
        }),
        "border-b"
      )}
    />
  );
};

export default HorizontalDivider;
