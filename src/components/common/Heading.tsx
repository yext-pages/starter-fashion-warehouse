import { cva } from "cva";
import {
  fontWeights,
  textAlignment,
  textColors,
  textSizes,
} from "../../sharedVariants";
import { cn } from "../../utils";
import { TextProps } from "./Text";

const headingVariants = cva("tracking-tight", {
  variants: {
    size: textSizes,
    weight: fontWeights,
    align: textAlignment,
    color: textColors,
  },
});

export interface HeadingProps extends TextProps {
  /**
   * @tooltip Defines whether the heading is an h1, h2, etc.
   * @displayName Rank
   */
  rank?: "1" | "2" | "3" | "4" | "5" | "6";
}

export const initialProps: HeadingProps = {
  text: "Heading Text",
  rank: "1",
  size: "XL",
  align: "Left",
  color: "Gray 900",
  weight: "Bold",
  className: "",
};

const Heading = ({
  text,
  rank,
  size,
  color,
  weight,
  className,
  align,
}: HeadingProps) => {
  const Tag: any = rank ? `h${rank}` : "span";

  return (
    <Tag
      className={cn(headingVariants({ color, size, weight, align, className }))}
    >
      {text}
    </Tag>
  );
};

export default Heading;
