import { Link } from "@yext/sites-components";
import { VariantProps, cva } from "cva";
import {
  FontWeightVariant,
  TextSizeVariant,
  fontWeights,
  textSizes,
} from "../../sharedVariants";
import { cn } from "../../utils";

const styledLinkVariants = cva("", {
  variants: {
    type: {
      Primary: "text-indigo-600 hover:text-indigo-500",
      Secondary: "text-gray-500 hover:text-gray-900",
    },
    size: textSizes,
    weight: fontWeights,
  },
});

export interface StyledLinkProps {
  /**
   * @displayName Link
   */
  href: string;
  /**
   * @displayName Label
   */
  label?: string;
  /**
   * @displayName Type
   */
  type?: "Primary" | "Secondary";
  /**
   * @displayName Size
   */
  size?: TextSizeVariant;
  /**
   * @displayName Font Weight
   */
  weight?: FontWeightVariant;
  className?: string;
}

export const initialProps: StyledLinkProps = {
  href: "#",
  label: "Link",
  type: "Primary",
  size: "M",
  weight: "Regular",
  className: "",
};

const StyledLink = ({
  label,
  href,
  type,
  size,
  weight,
  className,
}: StyledLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(styledLinkVariants({ type, size, weight, className }))}
    >
      {label}
    </Link>
  );
};

export default StyledLink;
