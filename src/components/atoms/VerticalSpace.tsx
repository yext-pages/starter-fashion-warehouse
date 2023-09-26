import { cva } from "cva";
import { HeightVariant, heights } from "../../sharedVariants";

const containerVariants = cva("w-full", {
  variants: {
    height: heights,
  },
});

export interface VerticalSpaceProps {
  /**
   * @displayName Height
   * @tooltip Height of the vertical space
   */
  height: "S" | "M" | "L" | "XL" | "XXL";
}

export const initialProps: VerticalSpaceProps = {
  height: "M",
};

export const VerticalSpace = ({ height }: VerticalSpaceProps) => {
  return <div className={containerVariants({ height })}></div>;
};

export default VerticalSpace;
