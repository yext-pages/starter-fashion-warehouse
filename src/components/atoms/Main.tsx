import { cn } from "../../utils";

export interface MainProps {
  className?: string;
  children?: React.ReactNode;
}

const Main = ({ children, className }: MainProps) => {
  return (
    <main
      className={cn(
        "mx-auto max-w-2xl px-4 py-5 sm:p-6 lg:max-w-7xl",
        className
      )}
    >
      {children}
    </main>
  );
};

export default Main;
