import { twMerge } from "tailwind-merge";
import Icon from "../atoms/Icon";

export interface StarsProps {
  rating: number;
  classname?: string;
}

const Stars = ({ rating, classname }: StarsProps) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<Icon key={i} color="Yellow 500" name="Star" size="small" />);
    } else {
      stars.push(<Icon key={i} color="Gray 300" name="Star" size="small" />);
    }
  }
  return <div className={twMerge("flex gap-x-1", classname)}>{stars}</div>;
};

export default Stars;
