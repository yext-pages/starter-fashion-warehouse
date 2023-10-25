import { cva } from "cva";
import Image from "../common/Image";
import StyledLink from "../common/Link";
import Text from "../common/Text";
import { cn } from "../../utils";
import { Product } from "../../types/autogen";

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
  product?: Product;
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
        <Image
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
          <Text
            color="Gray 900"
            weight="Regular"
            size="M"
            text={`$${product.price.value.toString()}`}
          />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
