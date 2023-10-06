import { cva } from "cva";
import { RelatedProduct } from "../../types/autogen";
import StudioImage from "../atoms/StudioImage";
import StyledLink from "../atoms/StyledLink";
import StyledText from "../atoms/StyledText";
import { cn } from "../../utils";

const productCardVariants = cva("group relative p-2 h-80 w-72", {
  variants: {
    mode: {
      flat: "",
      card: "rounded-md overflow-hidden shadow-md",
    },
  },
});

export interface ProductCardProps {
  /**
   * @displayName Card Mode
   * @tooltip Defines the styling of the product card
   */
  mode?: "flat" | "card";
  /**
   * @displayName Product
   * @tooltip Defines the product to be displayed
   */
  product?: RelatedProduct;
}

export const initialProps: ProductCardProps = {
  mode: "flat",
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

const ProductCard = ({ product, mode }: ProductCardProps) => {
  if (!product) return null;

  const photo = product?.photoGallery?.[0];

  return (
    <div className={cn(productCardVariants({ mode }))}>
      {photo && (
        <StudioImage
          className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 "
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
