export interface MainProps {
  children?: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-2xl px-4 py-5 sm:p-6 lg:max-w-7xl">
        {children}
      </main>
    </div>
  );
};

export default Main;
