export interface MainProps {
  children?: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</main>
    </div>
  );
};

export default Main;
