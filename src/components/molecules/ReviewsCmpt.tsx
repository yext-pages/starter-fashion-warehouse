import Container from "../atoms/Container";
import Stars from "./StarsCmpt";
import { YextContent, YextResponse, Review } from "../../types/api";
import { useEffect, useState } from "react";
import Heading, { HeadingProps } from "../atoms/Heading";
import StyledText, { StyledTextProps } from "../atoms/StyledText";
import DateTime, {
  DateTimeProps,
  initialProps as initialDateTimeProps,
} from "../atoms/DateTime";
import Dropdown from "../atoms/Dropdown";

const initialReviews = [
  {
    $key: {
      primary_key: "1",
      locale: "",
    },
    entity: {
      id: "entity-1",
    },
    title: "Can't say enough good things",
    rating: 5,
    content: `I was really pleased with the overall shopping experience.`,
    authorName: "John D.",
    reviewDate: "2023-07-16T04:00:00Z",
    reviewId: 1354108583,
  },
  // More reviews...
];

const fetchReviews = async ({
  entityId,
}: {
  entityId: string;
}): Promise<YextResponse<YextContent<Review>>> => {
  const res = await fetch(
    `https://cdn.yextapis.com/v2/accounts/me/content/productReviews?api_key=4a7567a5e8923bbffd81eb43fb4d9247&v=20230915&entity.id=${entityId}`
  );
  const json = await res.json();
  return json as YextResponse<YextContent<Review>>;
};

export interface ReviewsProps {
  entityId: string;
  titleProps: HeadingProps;
  reviewContentTextProps: StyledTextProps;
  reviewDateTimeTextProps: DateTimeProps;
  authorNameTextProps: StyledTextProps;
}

export const initialProps: ReviewsProps = {
  entityId: "ENTITY_ID_HERE",
  titleProps: {
    text: "Recent Reviews",
    rank: "2",
    fontWeight: "Bold",
    color: "Gray 900",
  },
  reviewContentTextProps: {
    size: "S",
    color: "Gray 500",
    align: "Left",
    weight: "Medium",
  },
  reviewDateTimeTextProps: {
    dateTime: "",
    size: "Small",
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
  entityId,
  titleProps,
  reviewContentTextProps,
  authorNameTextProps,
}: ReviewsProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);

  // useEffect on mount to fetch reviews
  useEffect(() => {
    fetchReviews({ entityId: "apex-air-max-1000" }).then((res) => {
      if (res.response.docs) {
        setReviews(res.response.docs);
      } else {
        setReviews(initialReviews);
      }
    });
  }, []);

  return (
    <Container layout="column" className="mx-auto">
      <div className="flex justify-between">
        <Heading
          rank={titleProps.rank}
          text={titleProps.text}
          fontWeight={titleProps.fontWeight}
        />
        <Dropdown />
      </div>
      <div className="mt-6 space-y-10 divide-y divide-gray-200 border-b border-t border-gray-200 pb-10">
        {reviews.map((review) => (
          <div
            key={review.$key.primary_key}
            className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8"
          >
            <div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
              <div className="flex items-center xl:col-span-1">
                <Stars
                  // key={rating}
                  rating={review.rating}
                  // className={classNames(
                  //   review.rating > rating
                  //     ? "text-yellow-400"
                  //     : "text-gray-200",
                  //   "h-5 w-5 flex-shrink-0"
                  // )}
                  aria-hidden="true"
                />
                {/* TODO: investigate accessibility */}
                {/* <p className="ml-3 text-sm text-gray-700">
                  {review.rating}
                  <span className="sr-only"> out of 5 stars</span>
                </p> */}
              </div>

              <div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
                <StyledText
                  color={reviewContentTextProps.color}
                  size={reviewContentTextProps.size}
                  text={review.content}
                  align={reviewContentTextProps.align}
                  weight={reviewContentTextProps.weight}
                />
              </div>
            </div>
            <div className="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
              {/* <p className="font-medium text-gray-900">{review.authorName}</p> */}
              <StyledText
                text={review.authorName}
                color={authorNameTextProps.color}
                size={reviewContentTextProps.size}
                align={reviewContentTextProps.align}
                weight={reviewContentTextProps.weight}
              />
              <DateTime
                dateTime={review.reviewDate}
                className="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
              />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Reviews;
