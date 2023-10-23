import Button from "../common/Button";
import Container from "../common/Container";
import Heading, { HeadingProps } from "../common/Heading";
import Text, { TextProps } from "../common/Text";
import Stars from "./Stars";

export interface ProductOverviewProps {
  productNameProps: HeadingProps;
  productDescriptionProps: TextProps;
  priceProps: TextProps;
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
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    size: "M",
    weight: "Regular",
    align: "Left",
    color: "Gray 700",
  },
  priceProps: {
    text: "0.00",
    size: "XL",
    weight: "Regular",
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
    <Container
      layout="grid"
      className="sm:grid-cols-1"
      paddingTop="M"
      paddingBottom="M"
    >
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
      <Container layout="column" className="gap-y-2">
        <Text
          text={priceProps.text}
          size={priceProps.size}
          weight={priceProps.weight}
          align={priceProps.align}
          color={priceProps.color}
        />
        <Container layout="row" className="gap-x-3">
          <Stars rating={5} />
        </Container>
        <Button
          type="primary"
          size="xxlarge"
          text="Add To Cart"
          className="mt-4"
        />
      </Container>
      <Container
        layout="column"
        className="lg:col-span-2 lg:row-start-1"
        paddingRight="M"
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
        <Text
          text={productDescriptionProps.text}
          size={productDescriptionProps.size}
          weight={productDescriptionProps.weight}
          align={productDescriptionProps.align}
          color={productDescriptionProps.color}
        />
      </Container>
    </Container>
  );
};

export default ProductOverview;
