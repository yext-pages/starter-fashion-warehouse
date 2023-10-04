import Button from "../components/atoms/Button";
import Container from "../components/atoms/Container";
import Heading from "../components/atoms/Heading";
import StyledText from "../components/atoms/StyledText";
import Stars from "../components/molecules/Stars";

const ProductOverview = () => {
  return (
    <Container
      layout="grid"
      className="sm:grid-cols-1"
      paddingTop="M"
      paddingBottom="M"
    >
      <Container className="lg:hidden">
        <Heading
          text="Product Name"
          rank="1"
          size="XXL"
          align="Left"
          color="Gray 900"
          fontWeight="Bold"
        />
      </Container>
      <Container layout="column" className="gap-y-2">
        <StyledText
          text={`$0.00`}
          size="XL"
          weight="Medium"
          align="Left"
          color="Gray 900"
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
          text="Product Name"
          rank="1"
          size="XXL"
          align="Left"
          color="Gray 900"
          fontWeight="Bold"
        />
        <StyledText
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          size="M"
          weight="Medium"
          align="Left"
          color="Gray 700"
        />
      </Container>
    </Container>
  );
};

export default ProductOverview;
