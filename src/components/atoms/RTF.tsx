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
}

export const initialProps: RTFProps = {
  Size: "Medium",
  Color: "Gray 900",
};

// How would I represent styling for all the different nodeClassnames of the RTF component?
const RTF = ({ Size, Color }: RTFProps) => {
  return (
    <div className={rtf({ Size, Color })}>
      <LexicalRichText serializedAST={JSON.stringify(productDescription)} />
    </div>
  );
};

export default RTF;

const productDescription = {
  root: {
    children: [
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: 'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
            type: "text",
            version: 1,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        type: "paragraph",
        version: 1,
      },
      {
        children: [],
        direction: null,
        format: "",
        indent: 0,
        type: "paragraph",
        version: 1,
      },
      {
        children: [
          {
            detail: 0,
            format: 1,
            mode: "normal",
            style: "",
            text: "Highlights",
            type: "text",
            version: 1,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        type: "paragraph",
        version: 1,
      },
      {
        children: [
          {
            children: [
              {
                detail: 0,
                format: 0,
                mode: "normal",
                style: "",
                text: "Hand cut and sewn locally",
                type: "text",
                version: 1,
              },
            ],
            direction: "ltr",
            format: "",
            indent: 0,
            type: "listitem",
            value: 1,
            version: 1,
          },
          {
            children: [
              {
                detail: 0,
                format: 0,
                mode: "normal",
                style: "",
                text: "Dyed with our proprietary colors",
                type: "text",
                version: 1,
              },
            ],
            direction: "ltr",
            format: "",
            indent: 0,
            type: "listitem",
            value: 2,
            version: 1,
          },
          {
            children: [
              {
                detail: 0,
                format: 0,
                mode: "normal",
                style: "",
                text: "Pre-washed & pre-shrunk",
                type: "text",
                version: 1,
              },
            ],
            direction: "ltr",
            format: "",
            indent: 0,
            type: "listitem",
            value: 3,
            version: 1,
          },
          {
            children: [
              {
                detail: 0,
                format: 0,
                mode: "normal",
                style: "",
                text: "Ultra-soft 100% cotton",
                type: "text",
                version: 1,
              },
            ],
            direction: "ltr",
            format: "",
            indent: 0,
            type: "listitem",
            value: 4,
            version: 1,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        listType: "bullet",
        start: 1,
        tag: "ul",
        type: "list",
        version: 1,
      },
      {
        children: [],
        direction: null,
        format: "",
        indent: 0,
        type: "paragraph",
        version: 1,
      },
      {
        children: [
          {
            detail: 0,
            format: 1,
            mode: "normal",
            style: "",
            text: "Details",
            type: "text",
            version: 1,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        type: "paragraph",
        version: 1,
      },
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: 'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
            type: "text",
            version: 1,
          },
          {
            type: "linebreak",
            version: 1,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        type: "paragraph",
        version: 1,
      },
    ],
    direction: "ltr",
    format: "",
    indent: 0,
    type: "root",
    version: 1,
  },
};
