import { CalendarIcon } from "@heroicons/react/24/outline";
import { cva } from "cva";
import { ColorVariant, textColors } from "../../sharedVariants";
import { twMerge } from "tailwind-merge";

const iconVariants = cva("", {
  variants: {
    size: {
      small: ["w-5", "h-5"],
      base: ["w-6", "h-6"],
    },
    color: textColors,
  },
  defaultVariants: {
    size: "small",
  },
});

export interface IconProps {
  /**
   * @displayName Size
   */
  size?: "small" | "base";
  /**
   * @displayName Color
   */
  color?: ColorVariant;
}

export const initialProps: IconProps = {
  size: "base",
  color: "Gray 900",
};

const StudioCalendarIcon = ({ size, color }: IconProps) => {
  return <CalendarIcon className={twMerge(iconVariants({ size, color }))} />;
};

export default StudioCalendarIcon;
