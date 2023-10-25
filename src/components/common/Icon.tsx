import { type VariantProps, cva } from "cva";
import { twMerge } from "tailwind-merge";
import {
  ChevronDownIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  XMarkIcon,
  CalendarIcon,
  PhoneIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon as ChevronDownIconSolid,
  Bars3Icon as Bars3IconSolid,
  MagnifyingGlassIcon as MagnifyingGlassIconSolid,
  ShoppingCartIcon as ShoppingCartIconSolid,
  UserIcon as UserIconSolid,
  XMarkIcon as XMarkIconSolid,
  CalendarIcon as CalendarIconSolid,
  PhoneIcon as PhoneIconSolid,
  StarIcon as StarIconSolid,
} from "@heroicons/react/20/solid";
import { ColorVariant, textColors } from "../../sharedVariants";

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
  color?: ColorVariant;
  name:
    | "Star"
    | "Bars3"
    | "MagnifyingGlass"
    | "ShoppingCart"
    | "User"
    | "XMark"
    | "ChevronDown"
    | "Calendar"
    | "Phone";
  type?: "solid" | "outline";
}

export const initialProps: IconProps = {
  size: "base",
  color: "Gray 900",
  name: "Star",
  type: "outline",
};

const Icon = ({ size, color, name, type }: IconProps) => {
  // switch statement that returns component based on name
  const renderIcon = () => {
    switch (name) {
      case "Star":
        return type === "outline" ? (
          <StarIcon className={icon({ size, color })} />
        ) : (
          <StarIconSolid className={icon({ size, color })} />
        );
      case "Bars3":
        return type === "outline" ? (
          <Bars3Icon className={icon({ size, color })} />
        ) : (
          <Bars3IconSolid className={icon({ size, color })} />
        );
      case "MagnifyingGlass":
        return type === "outline" ? (
          <MagnifyingGlassIcon className={icon({ size, color })} />
        ) : (
          <MagnifyingGlassIconSolid className={icon({ size, color })} />
        );
      case "ShoppingCart":
        return type === "outline" ? (
          <ShoppingCartIcon className={icon({ size, color })} />
        ) : (
          <ShoppingCartIconSolid className={icon({ size, color })} />
        );
      case "User":
        return type === "outline" ? (
          <UserIcon className={icon({ size, color })} />
        ) : (
          <UserIconSolid className={icon({ size, color })} />
        );
      case "XMark":
        return type === "outline" ? (
          <XMarkIcon className={icon({ size, color })} />
        ) : (
          <XMarkIconSolid className={icon({ size, color })} />
        );
      case "ChevronDown":
        return type === "outline" ? (
          <ChevronDownIcon className={icon({ size, color })} />
        ) : (
          <ChevronDownIconSolid className={icon({ size, color })} />
        );
      case "Calendar":
        return type === "outline" ? (
          <CalendarIcon className={icon({ size, color })} />
        ) : (
          <CalendarIconSolid className={icon({ size, color })} />
        );
      case "Phone":
        return type === "outline" ? (
          <PhoneIcon className={icon({ size, color })} />
        ) : (
          <PhoneIconSolid className={icon({ size, color })} />
        );
      default:
        return null;
    }
  };

  return <>{renderIcon()}</>;
};

export default Icon;
