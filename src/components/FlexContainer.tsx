import { TailwindClass } from "@yext/studio";

export interface FlexContainerProps {
  children?: React.ReactNode;
  backgroundColor?: TailwindClass;
}

const FlexContainer = ({ children, backgroundColor }: FlexContainerProps) => {
  return (
    <div className={backgroundColor}>
      <div className="flex max-w-7xl flex-col md:flex-row">{children}</div>
    </div>
  );
};

export default FlexContainer;
