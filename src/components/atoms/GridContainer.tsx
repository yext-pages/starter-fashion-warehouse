import { VariantProps, cva } from "cva";
import { twMerge } from "tailwind-merge";

const gridContainerVarients = cva("grid mx-auto", {
  variants: {},
});

export interface GridContainerVarients
  extends VariantProps<typeof gridContainerVarients> {}

const gridContainer = ({}: GridContainerVarients) =>
  twMerge(gridContainerVarients({}));

export interface GridContainerProps {
  children?: React.ReactNode;
}

export const initialProps: GridContainerProps = {};

const GridContainer = ({ children }: GridContainerProps) => {
  return <div className={gridContainer({})}>{children}</div>;
};

export default GridContainer;
