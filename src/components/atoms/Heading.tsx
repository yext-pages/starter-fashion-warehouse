import { cva } from "cva";
import {
  FontWeights,
  TextAlignVariant,
  TextSizeVariant,
  fontWeights,
  textAlignment,
  textColors,
  textSizes,
} from "../../sharedVariants";
import { cn } from "../../utils";

const headingVariants = cva("tracking-tight", {
  variants: {
    size: textSizes,
    fontWeight: fontWeights,
    align: textAlignment,
    color: textColors,
  },
});

// export interface StyledHeadingVariants
//   extends VariantProps<typeof styledHeadingVariants> {}

export interface HeadingProps {
  /**
   * @tooltip Content of the heading
   * @displayName Text
   */
  text: string;
  /**
   * @tooltip Defines whether the heading is an h1, h2, etc.
   * @displayName Rank
   */
  rank?: "1" | "2" | "3" | "4" | "5" | "6";
  /**
   * @displayName Size
   */
  size?: TextSizeVariant;
  /**
   * @displayName Font Weight
   */
  fontWeight?: FontWeights;
  /**
   * @displayName Text Color
   */
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
  /**
   * @displayName Text Align
   */
  align?: TextAlignVariant;
  /**
   * @tooltip Used to override the default styles
   */
  className?: string;
}

export const initialProps: HeadingProps = {
  text: "Heading Text",
  rank: "1",
  size: "XL",
  align: "Left",
  color: "Gray 900",
  fontWeight: "Bold",
  className: "",
};

const Heading = ({
  text,
  rank,
  size,
  color,
  fontWeight,
  className,
  align,
}: HeadingProps) => {
  const Tag: any = rank ? `h${rank}` : "span";

  return (
    <Tag
      className={cn(
        headingVariants({ color, size, fontWeight, align, className })
      )}
    >
      {text}
    </Tag>
  );
};

export default Heading;
