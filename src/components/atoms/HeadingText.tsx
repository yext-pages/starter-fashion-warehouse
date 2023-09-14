import { VariantProps, cva } from "cva";
import { twMerge } from "tailwind-merge";

const styledHeadingVarients = cva("", {
  variants: {
    heading: {
      "Heading 1":
        "text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl",
      "Heading 2": "text-sm font-medium text-gray-900",
      "Heading 3": "text-sm font-medium text-gray-900",
    },
  },
});

export interface StyledHeadingVarients
  extends VariantProps<typeof styledHeadingVarients> {}

const styledHeading = ({ heading }: StyledHeadingVarients) =>
  twMerge(styledHeadingVarients({ heading }));

export interface HeadingTextProps {
  children: React.ReactNode;
  level: "Heading 1" | "Heading 2" | "Heading 3";
}

export const initialHeadingProps: HeadingTextProps = {
  children: "Sample Heading",
  level: "Heading 1",
};

const HeadingText = ({ children, level }: HeadingTextProps) => {
  const className = styledHeading({ heading: level });

  switch (level) {
    case "Heading 1":
      return <h1 className={className}>{children}</h1>;
    case "Heading 2":
      return <h2 className={className}>{children}</h2>;
    case "Heading 3":
      return <h3 className={className}>{children}</h3>;
    default:
      return <h1 className={className}>{children}</h1>;
  }
};

export default HeadingText;
