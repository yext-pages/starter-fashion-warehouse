import { cva } from "cva";
import {
  ColorVariant,
  FontWeightVariant,
  TextAlignVariant,
  TextSizeVariant,
  fontWeights,
  textColors,
  textSizes,
} from "../../sharedVariants";
import { cn } from "../../utils";

const textVariants = cva("tracking-tight", {
  variants: {
    size: textSizes,
    weight: fontWeights,
    align: {
      Left: ["text-left"],
      Center: ["text-center"],
      Right: ["text-right"],
    },
    color: textColors,
  },
});

export interface TextProps {
  /**
   * @displayName Text
   */
  text?: string;
  /**
   * @displayName Size
   */
  size?: TextSizeVariant;
  /**
   * @displayName Font Weight
   */
  weight?: FontWeightVariant;
  /**
   * @displayName Text Alignment
   */
  align?: TextAlignVariant;
  /**
   * @displayName Text Color
   */
  color?: ColorVariant;
  className?: string;
}

export const initialProps: TextProps = {
  text: "Text goes here",
  size: "M",
  weight: "Regular",
  align: "Left",
  color: "Gray 900",
  className: "",
};

const Text = ({ size, weight, color, align, text, className }: TextProps) => {
  return (
    <p className={cn(textVariants({ size, weight, color, align, className }))}>
      {text}
    </p>
  );
};

export default Text;
