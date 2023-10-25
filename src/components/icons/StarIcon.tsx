import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
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
  /**
   * @displayName Type
   */
  type?: "outline" | "solid";
}

export const initialProps: IconProps = {
  size: "base",
  color: "Gray 900",
  type: "outline",
};

const StudioStarIcon = ({ size, color, type }: IconProps) => {
  const IconCmpt = type === "outline" ? StarIcon : StarIconSolid;
  return <IconCmpt className={twMerge(iconVariants({ size, color }))} />;
};

export default StudioStarIcon;
