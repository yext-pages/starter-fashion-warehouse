import { cn } from "../../utils";

export interface PageProps {
  className?: string;
  children?: React.ReactNode;
}

const Page = ({ className, children }: PageProps) => {
  return <div className={cn("min-h-screen")}>{children}</div>;
};

export default Page;
