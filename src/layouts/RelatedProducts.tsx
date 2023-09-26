import Container from "../components/atoms/Container";
import Heading from "../components/atoms/Heading";
import ProductCard from "../components/molecules/ProductCard";

const RelatedProducts = () => {
  return (
    <>
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
        className="mt-6 gap-x-6 gap-y-10 lg:grid-cols-4 xl:gap-x-8"
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
    </>
  );
};

export default RelatedProducts;
