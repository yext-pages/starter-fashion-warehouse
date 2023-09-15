import { type VariantProps, cva } from "cva";
import { twMerge } from "tailwind-merge";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, StarIcon } from "@heroicons/react/20/solid";
import { textColors } from "../../sharedVariants";

const iconVariants = cva("", {
  variants: {
    size: {
      small: ["w-5", "h-5"],
      base: ["w-6", "h-6"],
    },
    color: textColors,
  },
  defaultVariants: {
    size: "base",
    color: "Gray 900",
  },
});

export interface IconVariants extends VariantProps<typeof iconVariants> {}

const icon = ({ size, color }: IconVariants) =>
  twMerge(iconVariants({ size, color }));

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
  name:
    | "Star"
    | "Bars3"
    | "MagnifyingGlass"
    | "ShoppingCart"
    | "User"
    | "XMark"
    | "ChevronDown";
}

export const initialProps: IconProps = {
  size: "base",
  color: "Gray 900",
  name: "Star",
};

const Icon = ({ size, color, name }: IconProps) => {
  // switch statement that returns component based on name
  const renderIcon = () => {
    switch (name) {
      case "Star":
        return <StarIcon className={icon({ size, color })} />;
      case "Bars3":
        return <Bars3Icon className={icon({ size, color })} />;
      case "MagnifyingGlass":
        return <MagnifyingGlassIcon className={icon({ size, color })} />;
      case "ShoppingCart":
        return <ShoppingCartIcon className={icon({ size, color })} />;
      case "User":
        return <UserIcon className={icon({ size, color })} />;
      case "XMark":
        return <XMarkIcon className={icon({ size, color })} />;
      case "ChevronDown":
        return <ChevronDownIcon className={icon({ size, color })} />;
      default:
        return <StarIcon className={icon({ size, color })} />;
    }
  };

  return <>{renderIcon()}</>;
};

export default Icon;
