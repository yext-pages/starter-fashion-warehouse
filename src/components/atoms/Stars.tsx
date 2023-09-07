import { FaStar, FaStarHalf } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

export interface StarsProps {
  rating: number;
  containerClassname?: string;
  starClassname?: string;
}

const Stars = ({ rating, containerClassname, starClassname }: StarsProps) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(
        <FaStar key={i} className={twMerge("text-gray-700", starClassname)} />
      );
    } else if (i === Math.floor(rating)) {
      stars.push(
        <div className="relative h-4 w-4">
          <div className="absolute inset-0 z-[1] ">
            <FaStarHalf
              key={i}
              className={twMerge(
                "absolute inset-0 z-[1] h-4 w-4 text-gray-700",
                starClassname
              )}
            />
          </div>
          <div className="absolute inset-0">
            <FaStar
              key={i}
              className={"absolute inset-0 h-4 w-4 text-gray-300"}
            />
          </div>
        </div>
      );
    } else {
      stars.push(
        <FaStar key={i} className={twMerge("text-gray-300", starClassname)} />
      );
    }
  }
  return (
    <div className={twMerge("flex gap-x-1", containerClassname)}>{stars}</div>
  );
};

export default Stars;
