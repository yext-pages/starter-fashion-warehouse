import { type VariantProps, cva } from "cva";
import { textColors, textSizes } from "../../sharedVariants";
import { cn } from "../../utils";

const styledTextVariants = cva("tracking-tight", {
  variants: {
    size: textSizes,
    weight: {
      Medium: ["font-medium"],
      Bold: ["font-bold"],
    },
    align: {
      Left: ["text-left"],
      Center: ["text-center"],
      Right: ["text-right"],
    },
    color: textColors,
  },
  // compoundVariants: [{ intent: "primary", size: "medium", class: "uppercase" }],

  // I don't think there is any point in using these in Studio
  // defaultVariants: {
  //   type: "Page",
  //   color: "Primary",
  // },
});

// export interface ParagraphVariants
//   extends VariantProps<typeof paragraphVariants> {}

// const paragraph = ({ Size, Weight, Align, Color }: ParagraphVariants) =>
//   twMerge(paragraphVariants({ Size, Weight, Align, Color }));

// I wish that I could do this:
// export interface ParagraphProps extends ParagraphVariants {
//   StyledText?: string;
// }

// But I have to do this:
export interface StyledTextProps {
  text?: string;
  size?: "S" | "M" | "L" | "XL" | "XXL";
  weight?: "Medium" | "Bold";
  align?: "Left" | "Center" | "Right";
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

export const initialProps: StyledTextProps = {
  text: "Text goes here",
  size: "M",
  weight: "Medium",
  align: "Left",
  color: "Gray 900",
  className: "",
};

const StyledText = ({
  size,
  weight,
  color,
  align,
  text,
  className,
}: StyledTextProps) => {
  return (
    <p
      className={cn(
        styledTextVariants({ size, weight, color, align, className })
      )}
    >
      {text}
    </p>
  );
};

export default StyledText;
