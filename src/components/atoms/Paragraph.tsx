import { type VariantProps, cva } from "cva";
import { twMerge } from "tailwind-merge";
import { textColors, textSizes } from "../../sharedVarients";

const paragraphVarients = cva("", {
  variants: {
    Size: textSizes,
    Weight: {
      Medium: ["font-medium"],
      Bold: ["font-bold"],
    },
    Align: {
      Left: ["text-left"],
      Center: ["text-center"],
      Right: ["text-right"],
    },
    Color: textColors,
  },
  // compoundVariants: [{ intent: "primary", size: "medium", class: "uppercase" }],

  // I don't think there is any point in using these in Studio
  // defaultVariants: {
  //   type: "Page",
  //   color: "Primary",
  // },
});

export interface StyledTextVariants
  extends VariantProps<typeof paragraphVarients> {}

const paragraph = ({ Size, Weight, Align, Color }: StyledTextVariants) =>
  twMerge(paragraphVarients({ Size, Weight, Align, Color }));

// I wish that I could do this:
// export interface StyledTextProps extends StyledTextVariants {
//   Text?: string;
// }

// But I have to do this:
export interface StyledTextProps {
  Text?: string;
  Size?: "Small" | "Medium" | "Large" | "XLarge" | "XXLarge";
  Weight?: "Medium" | "Bold";
  Align?: "Left" | "Center" | "Right";
  Color?:
    | "Gray 900"
    | "Gray 800"
    | "Gray 700"
    | "Gray 500"
    | "Gray 400"
    | "Gray 300"
    | "Gray 100"
    | "Indigo"
    | "White";
}

export const initialProps: StyledTextProps = {
  Text: "Text goes here",
  Size: "Medium",
  Weight: "Medium",
  Align: "Left",
  Color: "Gray 900",
};

const Paragraph = ({ Size, Weight, Color, Align, Text }: StyledTextProps) => {
  return <p className={paragraph({ Size, Weight, Color, Align })}>{Text}</p>;
};

export default Paragraph;
