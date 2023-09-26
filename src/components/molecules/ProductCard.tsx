import Heading from "../atoms/Heading";
import Image from "../atoms/Image";
import StyledText from "../atoms/StyledText";

export interface ProductCardProps {
  name?: string;
  href?: string;
  imageUrl?: string;
  imageAlt?: string;
  price?: string;
  color?: string;
}

export const initialProps: ProductCardProps = {
  name: "Basic Tee",
  href: "#",
  imageUrl:
    "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
  imageAlt: "Front of men's Basic Tee in black.",
  price: "$35",
  color: "Black",
};

const ProductCard = ({
  name,
  href,
  imageUrl,
  imageAlt,
  price,
  color,
}: ProductCardProps) => {
  return (
    <div className="group relative">
      {imageUrl && (
        <Image
          className="lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80"
          aspectRatio="1:1"
          image={{
            url: imageUrl,
          }}
        />
      )}
      <div className="mt-4 flex justify-between">
        <div>
          <Heading rank="4" color="Gray 900" size="S" text={name ?? ""} />
          <StyledText
            className="mt-1"
            color={"Gray 500"}
            size="S"
            text={color}
          />
        </div>
        <StyledText color="Gray 900" weight="Medium" size="S" text={price} />
      </div>
    </div>
  );
};

export default ProductCard;
