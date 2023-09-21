import Container, { ContainerProps } from "./atoms/Container";
import Paragraph from "./atoms/Paragraph";
import PublicImage from "./atoms/PublicImage";
import StudioImage, { StudioImageProps } from "./atoms/StudioImage";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Aspen White",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Charcoal",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Iso Dots",
  },
  // More products...
];

export interface ProductListProps {
  containerProps?: ContainerProps;
  imageProps?: StudioImageProps;
  imageUrls?: string[];
}

const ProductList = ({ containerProps, imageProps }: ProductListProps) => {
  return (
    <Container layout="column" className="mx-auto py-16">
      <Container
        layout="grid"
        className="mt-6 gap-x-6 gap-y-10 lg:grid-cols-4 xl:gap-x-8"
      >
        {products.map((item) => (
          <div key={item.id} className="group relative">
            <PublicImage
              className="lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80"
              aspectRatio="1:1"
              image={{
                url: item.imageSrc,
                height: 300,
                width: 300,
              }}
            />
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <Paragraph color="Gray 900" size="Small" text={item.name} />
                  {/* <a href={item.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {item.name}
                  </a> */}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{item.color}</p>
              </div>
              <Paragraph
                color="Gray 900"
                weight="Medium"
                size="Small"
                text={item.price}
              />
            </div>
          </div>
        ))}
      </Container>
    </Container>
  );
};

export default ProductList;
