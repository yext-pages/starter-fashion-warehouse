import { Link } from "@yext/sites-components";
import { VariantProps, cva } from "cva";
import { fontWeights, textSizes } from "../../sharedVarients";
import { twMerge } from "tailwind-merge";

const styledLinkVarients = cva("", {
  variants: {
    type: {
      Primary: "text-indigo-600 hover:text-indigo-500",
      Secondary: "text-gray-500 hover:text-gray-900",
      // breadcrumb: "mr-2 text-sm font-medium text-gray-900",
      // currentProduct: "font-medium text-gray-500 hover:text-gray-600",
      // review: "ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500",
      // sizeGuide: "text-sm font-medium text-indigo-600 hover:text-indigo-500",
    },
    size: textSizes,
    weight: fontWeights,
  },
  // compoundVariants: [{ intent: "primary", size: "medium", className: "uppercase" }],

  // I don't think there is any point in using these in Studio
  // defaultVariants: {
  //   type: "Page",
  //   color: "Primary",
  // },
});

export interface StyledLinkVarients
  extends VariantProps<typeof styledLinkVarients> {}

const styledLink = ({ type, size, weight }: StyledLinkVarients) =>
  twMerge(styledLinkVarients({ type, size, weight }));

// I wish that I could do this:
// export interface StyledLinkProps extends StyledLinkVarients {
//   href?: string;
//   label?: string;
// }

// But I have to do this:
export interface StyledLinkProps {
  href: string;
  label?: string;
  type?: "Primary" | "Secondary";
  size?: "Small" | "Medium" | "Large" | "XLarge" | "XXLarge";
  weight?: "Normal" | "Bold";
}

export const initialProps: StyledLinkProps = {
  href: "#",
  label: "Link",
  type: "Primary",
  size: "Medium",
  weight: "Normal",
};

const StyledLink = ({ label, href, type, size, weight }: StyledLinkProps) => {
  return (
    <Link href={href} className={styledLink({ type, size, weight })}>
      {label}
    </Link>
  );
};

export default StyledLink;
