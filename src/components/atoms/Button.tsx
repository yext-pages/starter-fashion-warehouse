import { type VariantProps, cva } from "cva";
import { twMerge } from "tailwind-merge";

const buttonVarients = cva(
  "rounded-2xl text-base font-bold px-6 py-2 inline-flex text-center",
  {
    variants: {
      type: {
        primary: ["text-white bg-red-600 hover:bg-orange-900"],
        secondary: [
          "border-2 border-red-600 bg-white text-red-600 hover:bg-red-600 hover:text-white",
        ],
      },
    },
    defaultVariants: {
      type: "primary",
    },
  }
);

export interface ButtonVariants extends VariantProps<typeof buttonVarients> {}

const button = ({ type }: ButtonVariants) => twMerge(buttonVarients({ type }));

export interface ButtonProps {
  type?: "primary" | "secondary";
  buttonLabel?: string;
}

export const initialProps = {
  buttonLabel: "Button",
  type: "primary",
};

const Button = ({ type, buttonLabel }: ButtonProps) => (
  <button className={button({ type })}>{buttonLabel}</button>
);

export default Button;
