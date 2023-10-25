import StarIcon from "../icons/StarIcon";
import { cn } from "../../utils";

export interface StarsProps {
  /**
   * @displayName Rating
   */
  rating: number;
  classname?: string;
}

const Stars = ({ rating, classname }: StarsProps) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(
        <StarIcon key={i} color="Yellow 500" size="small" type="solid" />
      );
    } else {
      stars.push(
        <StarIcon key={i} color="Gray 300" size="small" type="solid" />
      );
    }
  }
  return <div className={cn("flex gap-x-1", classname)}>{stars}</div>;
};

export default Stars;
