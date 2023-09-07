import { TailwindClass } from "@yext/studio";
import { twMerge } from "tailwind-merge";

export interface FlexContainerProps {
  children?: React.ReactNode;
  backgroundColor?: TailwindClass;
  containerClassname?: string;
}

const FlexContainer = ({
  children,
  containerClassname,
  backgroundColor,
}: FlexContainerProps) => {
  return (
    <div className={backgroundColor}>
      <div className="mx-auto flex max-w-7xl flex-col gap-20 px-2 md:flex-row lg:px-8">
        {children}
      </div>
    </div>
  );
};

export default FlexContainer;
