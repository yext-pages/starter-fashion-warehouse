import Container from "../components/atoms/Container";
import Heading from "../components/atoms/Heading";
import Dropdown from "../components/atoms/Dropdown";
import Reviews from "../components/molecules/Reviews";

const ReviewsSection = () => {
  return (
    <Container
      layout="column"
      className="mx-auto"
      paddingTop="XL"
      paddingBottom="XL"
    >
      <Container layout="row" className="justify-between px-0 sm:px-0">
        <Heading rank="3" text="Reviews" fontWeight="Bold" size="L" />
        <Dropdown />
      </Container>
      <Reviews entityId="apex-air-max-1000" />
    </Container>
  );
};

export default ReviewsSection;
