import { PhoneIcon } from "@heroicons/react/24/outline";
import { cva } from "cva";
import { textColors } from "../../sharedVariants";
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
  size?: "small" | "base";
  color?:
    | "Gray 900"
    | "Gray 800"
    | "Gray 700"
    | "Gray 500"
    | "Gray 400"
    | "Gray 300"
    | "Gray 100"
    | "Indigo"
    | "White"
    | "Yellow 500";
}

export const initialProps: IconProps = {
  size: "base",
  color: "Gray 900",
};

const StudioPhoneIcon = ({ size, color }: IconProps) => {
  return <PhoneIcon className={twMerge(iconVariants({ size, color }))} />;
};

export default StudioPhoneIcon;
