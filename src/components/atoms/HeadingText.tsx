import { type VariantProps, cva } from "cva";
import { twMerge } from "tailwind-merge";

const headingTextVarients = cva("font-bold", {
  variants: {
    type: {
      Page: ["text-zinc-800", "text-5xl"],
      Section: ["text-zinc-800", "text-4xl"],
      Subheading: ["text-zinc-800", "text-2xl"],
    },
    color: {
      Primary: ["text-zinc-800"],
      Secondary: ["text-red-600"],
    },
  },
  // compoundVariants: [{ intent: "primary", size: "medium", class: "uppercase" }],
  defaultVariants: {
    type: "Page",
    color: "Primary",
  },
});

export interface HeadingTextVariants
  extends VariantProps<typeof headingTextVarients> {}

const headingText = ({ type, color }: HeadingTextVariants) =>
  twMerge(headingTextVarients({ type, color }));

// TODO: Mention to Tom how it would be nice to adopt the CVA pattern
export interface HeadingTextProps {
  type?: "Page" | "Section" | "Subheading";
  color?: "Primary" | "Secondary";
  text: string;
}

export const defaultProps = {
  text: "Text goes here",
};

const HeadingText = ({ type, color, text }: HeadingTextProps) => {
  return <p className={headingText({ type, color })}>{text}</p>;
};

export default HeadingText;
