import Button from "../components/atoms/Button";
import Container from "../components/atoms/Container";
import Heading, { HeadingProps } from "../components/atoms/Heading";
import StyledText, { StyledTextProps } from "../components/atoms/StyledText";
import Stars from "../components/atoms/Stars";

export interface ProductOverviewProps {
  productNameProps: HeadingProps;
  productDescriptionProps: StyledTextProps;
  priceProps: StyledTextProps;
  // & { currencyCode?: string };
  rating: number;
}

export const initialProps: ProductOverviewProps = {
  productNameProps: {
    text: "Product Name",
    rank: "1",
    size: "XXL",
    align: "Left",
    color: "Gray 900",
    fontWeight: "Bold",
  },
  productDescriptionProps: {
    text: "Product Description",
    size: "M",
    weight: "Medium",
    align: "Left",
    color: "Gray 700",
  },
  priceProps: {
    text: "0.00",
    size: "XL",
    weight: "Medium",
    align: "Left",
    color: "Gray 900",
  },
  rating: 5,
};

const ProductOverview = ({
  productNameProps,
  productDescriptionProps,
  priceProps,
  rating,
}: ProductOverviewProps) => {
  return (
    <Container layout="grid" className={`mx-auto sm:grid-cols-1 sm:p-0`}>
      <Container className="lg:hidden">
        <Heading
          text={productNameProps.text}
          rank={productNameProps.rank}
          size={productNameProps.size}
          align={productNameProps.align}
          color={productNameProps.color}
          fontWeight={productNameProps.fontWeight}
        />
      </Container>
      <Container layout="column" className={`gap-y-2 py-0`}>
        <StyledText
          text={`$${priceProps.text}`}
          size={priceProps.size}
          weight={priceProps.weight}
          align={priceProps.align}
          color={priceProps.color}
        />
        <Container layout="row" className={`gap-x-3 px-0 py-0 sm:p-0`}>
          <Stars rating={rating} />
        </Container>
        <Button size="xxlarge" text={`Add To Cart`} className={`mt-4`} />
      </Container>
      <Container
        layout="column"
        className="py-2 sm:px-6 sm:py-2 lg:col-span-2 lg:row-start-1 lg:py-4"
      >
        <Heading
          className="hidden lg:block"
          text={productNameProps.text}
          rank={productNameProps.rank}
          size={productNameProps.size}
          align={productNameProps.align}
          color={productNameProps.color}
          fontWeight={productNameProps.fontWeight}
        />
        <StyledText
          text={productDescriptionProps.text}
          color={productDescriptionProps.color}
          size={productDescriptionProps.size}
          align={productDescriptionProps.align}
          weight={productDescriptionProps.weight}
        />
      </Container>
    </Container>
  );
};

export default ProductOverview;
