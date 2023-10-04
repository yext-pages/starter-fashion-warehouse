import Container from "../atoms/Container";
import StyledText, { StyledTextProps } from "../atoms/StyledText";
import DateTime, {
  DateTimeProps,
  initialProps as initialDateTimeProps,
} from "../atoms/DateTime";
import Stars from "./Stars";
import Dropdown from "../atoms/Dropdown";
import Heading from "../atoms/Heading";

const reviews = [
  {
    $key: {
      locale: "",
      primary_key: "1354108583",
    },
    authorName: "Andrew S.",
    content:
      "These shoes are an absolute dream! From the impeccable design to the perfect fit, every detail is just right. They are the epitome of what I look for in footwear, truly a 5 out of 5 in every sense.",
    entity: {
      id: "apex-air-max-1000",
    },
    rating: 5,
    reviewDate: "2023-07-16T04:00:00Z",
    reviewId: 1354108583,
  },
  {
    $key: {
      locale: "",
      primary_key: "1354108453",
    },
    authorName: "Luc M.",
    content:
      "I really love the style and fit of these shoes; they're almost perfect for me. However, there's a small detail that keeps me from rating them a full 5 out of 5. It's a minor gripe, but it does make a difference in how I feel about them overall.",
    entity: {
      id: "apex-air-max-1000",
    },
    rating: 4,
    reviewDate: "2023-09-01T04:00:00Z",
    reviewId: 1354108453,
  },
  {
    $key: {
      locale: "",
      primary_key: "1354108087",
    },
    authorName: "Aaron P.",
    content:
      "The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!",
    entity: {
      id: "apex-air-max-1000",
    },
    rating: 5,
    reviewDate: "2023-08-08T04:00:00Z",
    reviewId: 1354108087,
  },
];

export interface ReviewsProps {
  reviewContentTextProps?: StyledTextProps;
  reviewDateTimeTextProps?: DateTimeProps;
  authorNameTextProps?: StyledTextProps;
}

export const initialProps: ReviewsProps = {
  reviewContentTextProps: {
    size: "S",
    color: "Gray 500",
    align: "Left",
    weight: "Medium",
  },
  reviewDateTimeTextProps: {
    dateTime: "",
    size: "S",
    weight: "Medium",
    align: "Left",
    color: "Gray 500",
  },
  authorNameTextProps: {
    size: "M",
    color: "Gray 900",
    align: "Left",
    weight: "Medium",
  },
};

const Reviews = ({
  reviewContentTextProps,
  authorNameTextProps,
}: ReviewsProps) => {
  return (
    <Container
      layout="column"
      className="mx-auto"
      paddingTop="M"
      paddingBottom="M"
    >
      <Container layout="row" className="justify-between px-0 sm:px-0">
        <Heading rank="3" text="Reviews" fontWeight="Bold" size="L" />
        <Dropdown />
      </Container>
      <Container
        layout="column"
        paddingTop="XL"
        paddingBottom="XL"
        className="mt-6 space-y-10 divide-y divide-gray-200 border-b border-t border-gray-200 "
      >
        {reviews.map((review) => (
          <Container
            key={review.$key.primary_key}
            layout="column"
            className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8"
          >
            <div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
              <div className="flex items-center xl:col-span-1">
                <Stars rating={review.rating} aria-hidden="true" />
                {/* TODO: investigate accessibility */}
                {/* <p className="ml-3 text-sm text-gray-700">
                  {review.rating}
                  <span className="sr-only"> out of 5 stars</span>
                </p> */}
              </div>

              <div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
                <StyledText
                  color={reviewContentTextProps?.color}
                  size={reviewContentTextProps?.size}
                  text={review.content}
                  align={reviewContentTextProps?.align}
                  weight={reviewContentTextProps?.weight}
                />
              </div>
            </div>
            <div className="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
              <StyledText
                text={review.authorName}
                color={authorNameTextProps?.color}
                size={reviewContentTextProps?.size}
                align={reviewContentTextProps?.align}
                weight={reviewContentTextProps?.weight}
              />
              <DateTime
                dateTime={review.reviewDate}
                className="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
              />
            </div>
          </Container>
        ))}
      </Container>
    </Container>
  );
};

export default Reviews;
