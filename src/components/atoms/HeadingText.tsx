import { VariantProps, cva } from "cva";
import { textColors } from "../../sharedVariants";
import { cn } from "../../utils";

const headingVariants = cva("tracking-tight", {
  variants: {
    heading: {
      "Heading 1": "text-2xl sm:text-3xl",
      "Heading 2": "text-lg",
      "Heading 3": "text-sm",
    },
    fontWeight: {
      bold: "font-bold",
      base: "font-normal",
    },
    color: textColors,
  },
});

// export interface StyledHeadingVariants
//   extends VariantProps<typeof styledHeadingVariants> {}

export interface HeadingTextProps {
  text?: string;
  level: "Heading 1" | "Heading 2" | "Heading 3";
  fontWeight?: "bold" | "base";
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
  className?: string;
}

export const initialProps: HeadingTextProps = {
  level: "Heading 1",
  color: "Gray 900",
  text: "Heading Text",
  fontWeight: "bold",
  className: "",
};

const HeadingText = ({
  text,
  level,
  color,
  fontWeight,
  className,
}: HeadingTextProps) => {
  switch (level) {
    case "Heading 1":
      return (
        <h1
          className={cn(
            headingVariants({ heading: level, color, fontWeight, className })
          )}
        >
          {text}
        </h1>
      );
    case "Heading 2":
      return (
        <h2
          className={cn(headingVariants({ heading: level, color, fontWeight }))}
        >
          {text}
        </h2>
      );
    case "Heading 3":
      return (
        <h3
          className={cn(headingVariants({ heading: level, color, fontWeight }))}
        >
          {text}
        </h3>
      );
    default:
      return (
        <h1
          className={cn(headingVariants({ heading: level, color, fontWeight }))}
        >
          {text}
        </h1>
      );
  }
};

export default HeadingText;
