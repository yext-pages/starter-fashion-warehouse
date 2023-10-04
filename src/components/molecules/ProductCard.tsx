import { ComplexImage } from "../../types/autogen";
import Heading from "../atoms/Heading";
import StudioImage from "../atoms/StudioImage";
import StyledText from "../atoms/StyledText";

export interface ProductCardProps {
  product?: {
    name?: string;
    slug?: string;
    photoGallery?: ComplexImage[];
    price?: {
      value: number;
    };
  };
}

export const initialProps: ProductCardProps = {
  product: {
    name: "",
    slug: "",
    photoGallery: [],
    price: {
      value: 0,
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
        <Heading rank="4" color="Gray 900" size="M" text={product.name ?? ""} />
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
