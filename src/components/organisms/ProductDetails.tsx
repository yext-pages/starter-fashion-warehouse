import HStack from "../atoms/HStack";
import HeadingText from "../atoms/HeadingText";
import Icon from "../atoms/Icon";
import Paragraph from "../atoms/Paragraph";
import StyledLink from "../atoms/StyledLink";
import VStack from "../atoms/VStack";

const product = {
  name: "Basic Tee",
  price: "$35",
  rating: 3.9,
  reviewCount: 512,
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Women", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      id: 1,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
      imageAlt: "Back of women's Basic Tee in black.",
      primary: true,
    },
    {
      id: 2,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-01.jpg",
      imageAlt: "Side profile of women's Basic Tee in black.",
      primary: false,
    },
    {
      id: 3,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg",
      imageAlt: "Front of women's Basic Tee in black.",
      primary: false,
    },
  ],
  colors: [
    { name: "Black", bgColor: "bg-gray-900", selectedColor: "ring-gray-900" },
    {
      name: "Heather Grey",
      bgColor: "bg-gray-400",
      selectedColor: "ring-gray-400",
    },
  ],
  sizes: [
    { name: "XXS", inStock: true },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: false },
  ],
  description: `
    <p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.</p>
    <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
  `,
  details: [
    "Only the best materials",
    "Ethically and locally made",
    "Pre-washed and pre-shrunk",
    "Machine wash cold with similar colors",
  ],
};

export interface ProductDetailsProps {}

const ProductDetails = ({}: ProductDetailsProps) => {
  return (
    <VStack className="mx-auto mt-8 max-w-7xl px-8">
      <HStack className="flex justify-between">
        <HeadingText level="Heading 1" text="Air Max 1" />
        <Paragraph Text="$100" />
      </HStack>
      {/* Reviews */}
      <VStack className="mt-4">
        <HStack className="items-center">
          <Paragraph
            Size="Small"
            Color={"Gray 700"}
            Text={product.rating.toString()}
          />
          <HStack className="ml-1 items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <Icon
                key={rating}
                color={product.rating > rating ? "Yellow 500" : "Gray 300"}
                name="Star"
                size="Small"
                aria-hidden="true"
              />
            ))}
          </HStack>
          {/* TODO: LINK */}
          <HStack className="ml-4">
            <StyledLink
              href="#"
              type={"Primary"}
              label={`See all ${product.reviewCount} reviews`}
            />
          </HStack>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default ProductDetails;
