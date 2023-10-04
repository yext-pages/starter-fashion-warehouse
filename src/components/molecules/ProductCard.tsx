import { RelatedProduct } from "../../types/autogen";
import StudioImage from "../atoms/StudioImage";
import StyledLink from "../atoms/StyledLink";
import StyledText from "../atoms/StyledText";

export interface ProductCardProps {
  product?: RelatedProduct;
}

export const initialProps: ProductCardProps = {
  product: {
    name: "Product A",
    slug: "#",
    photoGallery: [
      {
        image: {
          url: "https://placehold.co/300x300",
          height: 300,
          width: 300,
        },
      },
    ],
    price: {
      value: 99,
    },
  },
};

const ProductCard = ({ product }: ProductCardProps) => {
  if (!product) return null;

  const photo = product?.photoGallery?.[0];

  return (
    <div className="group relative">
      {photo && (
        <StudioImage
          className="lg:aspect-none aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80"
          image={photo}
        />
      )}
      <div className="mt-4 flex items-baseline justify-between">
        <StyledLink
          type={"Secondary"}
          label={product.name}
          href={product.slug ?? "#"}
        />
        {product.price?.value && (
          <StyledText
            color="Gray 900"
            weight="Medium"
            size="M"
            text={`$${product.price.value.toString()}`}
          />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
