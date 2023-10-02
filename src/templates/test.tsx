import { GetPath, TemplateProps } from "@yext/pages";
import Button from "../components/atoms/Button";
import Container from "../components/atoms/Container";
import Dropdown from "../components/atoms/Dropdown";
import Heading from "../components/atoms/Heading";
import Main from "../components/atoms/Main";
import Page from "../components/atoms/Page";
import StudioImage from "../components/atoms/StudioImage";
import StyledText from "../components/atoms/StyledText";
import Footer from "../components/molecules/Footer";
import Header from "../components/molecules/Header";
import ProductCard from "../components/molecules/ProductCard";
import Reviews from "../components/molecules/Reviews";
import Stars from "../components/molecules/Stars";
import "../index.css";

export const getPath: GetPath<TemplateProps> = () => {
  return "test";
};

export default function Test() {
  return (
    <Page>
      <Header />
      <Main className="min-h-[calc(100vh-384px)]">
        <Container
          layout="grid"
          paddingBottom="M"
          className={`mt-6 sm:grid-cols-1 lg:gap-x-8`}
        >
          <StudioImage
            image={{ url: "https://placehold.co/300x612", alt: "placeholder" }}
            aspectRatio="4:3"
            className={`mx-auto hidden overflow-hidden rounded-lg lg:block lg:max-h-[480px]`}
          />
          <Container
            layout="grid"
            className={`hidden lg:grid lg:grid-cols-1 lg:gap-y-8 lg:py-0`}
          >
            <StudioImage
              image={{
                url: "https://placehold.co/300x300",
                alt: "placeholder",
              }}
              aspectRatio="3:2"
              className="overflow-hidden rounded-lg lg:max-h-[225px]"
            />
            <StudioImage
              image={{
                url: "https://placehold.co/300x300",
                alt: "placeholder",
              }}
              aspectRatio="3:2"
              className={`overflow-hidden rounded-lg lg:max-h-[225px]`}
            />
          </Container>
          <StudioImage
            image={{ url: "https://placehold.co/300x612", alt: "placeholder" }}
            aspectRatio="5:4"
            className="lg:aspect-h-4 lg:aspect-w-3 max-h-[480px] sm:overflow-hidden sm:rounded-lg"
          />
        </Container>
        <Container
          layout="grid"
          className="sm:grid-cols-1"
          paddingTop="XL"
          paddingBottom="XL"
        >
          <Container className="lg:hidden">
            <Heading
              text="Product Name"
              rank="1"
              size="XXL"
              align="Left"
              color="Gray 900"
              fontWeight="Bold"
            />
          </Container>
          <Container layout="column" className="gap-y-2">
            <StyledText
              text={`$0.00`}
              size="XL"
              weight="Medium"
              align="Left"
              color="Gray 900"
            />
            <Container layout="row" className="gap-x-3">
              <Stars rating={5} />
            </Container>
            <Button
              type="primary"
              size="xxlarge"
              text="Add To Cart"
              className="mt-4"
            />
          </Container>
          <Container
            layout="column"
            className="lg:col-span-2 lg:row-start-1"
            paddingRight="M"
          >
            <Heading
              className="hidden lg:block"
              text="Product Name"
              rank="1"
              size="XXL"
              align="Left"
              color="Gray 900"
              fontWeight="Bold"
            />
            <StyledText
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              size="M"
              weight="Medium"
              align="Left"
              color="Gray 700"
            />
          </Container>
        </Container>
        <Container
          layout="column"
          className="mx-auto"
          paddingTop="XL"
          paddingBottom="XL"
        >
          <Container layout="row" className="justify-between px-0 sm:px-0">
            <Heading rank="3" text="Reviews" fontWeight="Bold" size="L" />
            <Dropdown />
          </Container>
          <Reviews entityId="apex-air-max-1000" />
        </Container>
        <Container layout="column" paddingTop="XL" paddingBottom="XL">
          <Container>
            <Heading
              rank="4"
              size="L"
              color="Gray 900"
              fontWeight="Bold"
              text="Customers also purchased"
              align="Left"
            />
          </Container>
          <Container
            layout="grid"
            className="mt-6 gap-x-6 gap-y-16 lg:grid-cols-4 xl:gap-x-8"
          >
            <ProductCard
              name="Basic Tee"
              href="#"
              imageUrl="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
              imageAlt="Front of men's Basic Tee in black."
              price="$35"
              color="Black"
            />
            <ProductCard
              name="Basic Tee"
              href="#"
              imageUrl="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg"
              imageAlt="Front of men's Basic Tee in white."
              price="$35"
              color="Aspen White"
            />
            <ProductCard
              name="Basic Tee"
              href="#"
              imageUrl="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg"
              imageAlt="Front of men's Basic Tee in charcoal."
              price="$35"
              color="Charcoal"
            />
            <ProductCard
              name="Basic Tee"
              href="#"
              imageUrl="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg"
              imageAlt="Front of men's Basic Tee in iso dots."
              price="$35"
              color="Iso Dots"
            />
          </Container>
        </Container>
      </Main>
      <Footer />
    </Page>
  );
}
