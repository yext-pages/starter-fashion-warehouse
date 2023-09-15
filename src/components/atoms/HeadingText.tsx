import { VariantProps, cva } from "cva";
import { twMerge } from "tailwind-merge";
import { textColors } from "../../sharedVarients";
import { cn } from "../../utils";

const styledHeadingVarients = cva("", {
  variants: {
    heading: {
      "Heading 1": "text-2xl font-bold tracking-tight sm:text-3xl",
      "Heading 2": "text-lg font-bold ",
      "Heading 3": "text-sm font-bold ",
    },
    color: textColors,
  },
});

export interface StyledHeadingVarients
  extends VariantProps<typeof styledHeadingVarients> {}

const styledHeading = ({ heading }: StyledHeadingVarients) =>
  twMerge(styledHeadingVarients({ heading }));

export interface HeadingTextProps {
  text?: string;
  level: "Heading 1" | "Heading 2" | "Heading 3";
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
}

export const initialProps: HeadingTextProps = {
  level: "Heading 1",
  color: "Gray 900",
  text: "Heading Text",
};

const HeadingText = ({ text, level, color }: HeadingTextProps) => {
  switch (level) {
    case "Heading 1":
      return (
        <h1 className={cn(styledHeading({ heading: level, color }))}>{text}</h1>
      );
    case "Heading 2":
      return (
        <h2 className={cn(styledHeading({ heading: level, color }))}>{text}</h2>
      );
    case "Heading 3":
      return (
        <h3 className={cn(styledHeading({ heading: level, color }))}>{text}</h3>
      );
    default:
      return (
        <h1 className={cn(styledHeading({ heading: level, color }))}>{text}</h1>
      );
  }
};

export default HeadingText;
