import Page from "../components/atoms/Page";
import Main from "../components/atoms/Main";
import Header from "../components/molecules/Header";

import "../index.css";
import Footer from "../components/molecules/Footer";

const PageLayout = () => {
  return (
    <Page>
      <Header />
      <Main className="min-h-[calc(100vh-384px)]" />
      <Footer />
    </Page>
  );
};

export default PageLayout;
