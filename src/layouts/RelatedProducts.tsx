import Container from "../components/atoms/Container";
import Heading from "../components/atoms/Heading";
import ProductCard from "../components/molecules/ProductCard";

const RelatedProducts = () => {
  return (
    <Container layout="column" paddingTop="M" paddingBottom="M">
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
          product={{
            name: "Basic Tee",
            slug: "#",
            price: {
              value: 35,
            },
            photoGallery: [
              {
                image: {
                  url: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
                  width: 498,
                  height: 498,
                },
              },
            ],
          }}
        />
        <ProductCard
          product={{
            name: "Basic Tee",
            slug: "#",
            price: {
              value: 35,
            },
            photoGallery: [
              {
                image: {
                  url: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
                  width: 498,
                  height: 498,
                },
              },
            ],
          }}
        />
        <ProductCard
          product={{
            name: "Basic Tee",
            slug: "#",
            price: {
              value: 35,
            },
            photoGallery: [
              {
                image: {
                  url: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
                  width: 498,
                  height: 498,
                },
              },
            ],
          }}
        />
        <ProductCard
          product={{
            name: "Basic Tee",
            slug: "#",
            price: {
              value: 35,
            },
            photoGallery: [
              {
                image: {
                  url: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
                  width: 498,
                  height: 498,
                },
              },
            ],
          }}
        />
      </Container>
    </Container>
  );
};

export default RelatedProducts;
