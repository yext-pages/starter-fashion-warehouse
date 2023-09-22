import Button from "../atoms/Button";
import Container from "../atoms/Container";
import Heading, { HeadingProps } from "../atoms/Heading";
import StyledText, { StyledTextProps } from "../atoms/StyledText";
import Stars from "./Stars";

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
        <Heading {...productNameProps} />
      </Container>
      <Container layout="column" className={`gap-y-2 py-0`}>
        <StyledText {...priceProps} text={`$${priceProps.text}`} />
        <Container layout="row" className={`gap-x-3 px-0 py-0 sm:p-0`}>
          <Stars rating={rating} />
        </Container>
        <Button size="xxlarge" text={`Add To Cart`} className={`mt-4`} />
      </Container>
      <Container
        layout="column"
        className="py-2 sm:px-6 sm:py-2 lg:col-span-2 lg:row-start-1 lg:py-4"
      >
        <Heading {...productNameProps} className="hidden lg:block" />
        <StyledText {...productDescriptionProps} />
        {/* 
        <Container layout="flex" className={`px-0 sm:px-0`}>
        </Container> */}
      </Container>
    </Container>
  );
};

export default ProductOverview;
