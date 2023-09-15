import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva("", {
  variants: {
    intent: {
      primary:
        "mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
      secondary:
        "mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
    },
  },
});

export interface ButtonVarients extends VariantProps<typeof buttonVariants> {}

const button = ({ intent }: ButtonVarients) =>
  twMerge(buttonVariants({ intent }));

export interface ButtonProps {
  children?: React.ReactNode;
  intent?: "primary" | "secondary";
}

export const initialProps: ButtonProps = {
  intent: "primary",
};

const Button = ({ children, intent }: ButtonProps) => {
  return <button className={button({ intent })}>{children}</button>;
};

export default Button;
