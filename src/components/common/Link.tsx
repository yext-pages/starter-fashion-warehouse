import { Link } from "@yext/sites-components";
import { VariantProps, cva } from "cva";
import {
  FontWeights,
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

// export interface StyledLinkVariants
//   extends VariantProps<typeof styledLinkVariants> {}

// I wish that I could do this:
// export interface StyledLinkProps extends StyledLinkVariants {
//   href?: string;
//   label?: string;
// }

// But I have to do this:
export interface StyledLinkProps {
  href: string;
  label?: string;
  type?: "Primary" | "Secondary";
  size?: TextSizeVariant;
  weight?: FontWeights;
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
