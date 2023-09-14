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
import { textColors } from "../../sharedVarients";

const iconVarients = cva("", {
  variants: {
    Size: {
      Small: ["w-5", "h-5"],
      Base: ["w-6", "h-6"],
    },
    Color: textColors,
  },
  // defaultVariants: {
  //   size: "md",
  //   color: "Primary",
  // },
});

export interface IconVarients extends VariantProps<typeof iconVarients> {}

const icon = ({ Size, Color }: IconVarients) =>
  twMerge(iconVarients({ Size, Color }));

export interface IconProps {
  size?: "Small" | "Base";
  color?:
    | "Gray 900"
    | "Gray 800"
    | "Gray 700"
    | "Gray 500"
    | "Gray 400"
    | "Gray 300"
    | "Gray 100"
    | "Indigo"
    | "White";
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
  size: "Base",
  color: "Gray 900",
  name: "Star",
};

const Icon = ({ size, color, name }: IconProps) => {
  // switch statement that returns component based on name
  const renderIcon = () => {
    switch (name) {
      case "Star":
        return <StarIcon className={icon({ Size: size, Color: color })} />;
      case "Bars3":
        return <Bars3Icon className={icon({ Size: size, Color: color })} />;
      case "MagnifyingGlass":
        return (
          <MagnifyingGlassIcon className={icon({ Size: size, Color: color })} />
        );
      case "ShoppingCart":
        return (
          <ShoppingCartIcon className={icon({ Size: size, Color: color })} />
        );
      case "User":
        return <UserIcon className={icon({ Size: size, Color: color })} />;
      case "XMark":
        return <XMarkIcon className={icon({ Size: size, Color: color })} />;
      case "ChevronDown":
        return (
          <ChevronDownIcon className={icon({ Size: size, Color: color })} />
        );
      default:
        return <StarIcon className={icon({ Size: size, Color: color })} />;
    }
  };

  return <>{renderIcon()}</>;
};

export default Icon;
