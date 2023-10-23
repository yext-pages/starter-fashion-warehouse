import { type VariantProps, cva } from "cva";
import {
  FontWeights,
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

// export interface ParagraphVariants
//   extends VariantProps<typeof paragraphVariants> {}

// I wish that I could do this:
// export interface ParagraphProps extends ParagraphVariants {
//   StyledText?: string;
// }

// But I have to do this:
export interface TextProps {
  text?: string;
  size?: TextSizeVariant;
  weight?: FontWeights;
  align?: TextAlignVariant;
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
