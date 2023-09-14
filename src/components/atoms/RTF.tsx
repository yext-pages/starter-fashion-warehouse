import { LexicalRichText } from "@yext/react-components";
import { VariantProps, cva } from "cva";
import { twMerge } from "tailwind-merge";
import { textColors, textSizes } from "../../sharedVarients";

const rtfVariants = cva("", {
  variants: {
    Size: textSizes,
    Color: textColors,
  },
});

export interface rtfVariants extends VariantProps<typeof rtfVariants> {}

const rtf = ({ Size, Color }: rtfVariants) =>
  twMerge(rtfVariants({ Size, Color }));

export interface RTFProps {
  Size?: "Small" | "Medium" | "Large" | "XLarge" | "XXLarge";
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
  content: string;
}

export const initialProps: RTFProps = {
  content: "Text goes here",
  Size: "Medium",
  Color: "Gray 900",
};

// How would I represent styling for all the different nodeClassnames of the RTF component?
const RTF = ({ Size, Color }: RTFProps) => {
  return (
    <div className={rtf({ Size, Color })}>
      <LexicalRichText serializedAST="" />
    </div>
  );
};

export default RTF;
