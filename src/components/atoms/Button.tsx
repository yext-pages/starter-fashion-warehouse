import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva("", {
  variants: {
    type: {
      primary:
        "mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
    },
  },
});

export interface ButtonVarients extends VariantProps<typeof buttonVariants> {}

const button = ({ type }: ButtonVarients) => twMerge(buttonVariants({ type }));

export interface ButtonProps {
  children?: React.ReactNode;
  type?: "primary";
}

export const initialHeadingProps: ButtonProps = {
  children: "Sample Heading",
  type: "primary",
};

const Button = ({ children, type }: ButtonProps) => {
  // const Comp = asChild ? Slot : "button";
  // return (
  //   <Comp
  //     className={buttonVariants({ variant, size, className })}
  //     ref={ref}
  //     {...props}
  //   />
  // );
  return <button className={button({ type })}>{children}</button>;
};

export default Button;
