import { type VariantProps, cva } from "cva";
import { twMerge } from "tailwind-merge";
import { FaStar, FaStarHalf } from "react-icons/fa";

const iconVarients = cva("", {
  variants: {
    size: {
      xs: ["w-4", "h-4"],
      sm: ["w-6", "h-6"],
      md: ["w-8", "h-8"],
      lg: ["w-10", "h-10"],
      xl: ["w-12", "h-12"],
    },
    color: {
      Primary: ["text-zinc-800"],
      Secondary: ["text-red-600"],
    },
  },
  defaultVariants: {
    size: "md",
    color: "Primary",
  },
});

export interface IconVarients extends VariantProps<typeof iconVarients> {}

const icon = ({ size, color }: IconVarients) =>
  twMerge(iconVarients({ size, color }));

export interface IconProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: "Primary" | "Secondary";
  name?: "star" | "star-half";
}

export const initialProps: IconProps = {
  size: "md",
  color: "Primary",
};

const Icon = ({ size, color, name }: IconProps) => (
  // switch statement that returns component based on name
  <div className={icon({ size, color })}>
    {name === "star" ? <FaStar /> : <FaStarHalf />}
  </div>
);

export default Icon;
