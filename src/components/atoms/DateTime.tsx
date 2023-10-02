import { cva } from "cva";
import {
  TextAlignVariant,
  TextSizeVariant,
  textColors,
  textSizes,
} from "../../sharedVariants";
import { cn, formatDateTime, isValidUTCDateString } from "../../utils";

const paragraphVariants = cva("", {
  variants: {
    size: textSizes,
    weight: {
      Medium: ["font-medium"],
      Bold: ["font-bold"],
    },
    align: {
      Left: ["text-left"],
      Center: ["text-center"],
      Right: ["text-right"],
    },
    color: textColors,
  },
});

export interface DateTimeProps {
  dateTime: string;
  size?: TextSizeVariant;
  weight?: "Medium" | "Bold";
  align?: TextAlignVariant;
  color?:
    | "Gray 900"
    | "Gray 800"
    | "Gray 700"
    | "Gray 500"
    | "Gray 400"
    | "Gray 300"
    | "Gray 100"
    | "Indigo"
    | "White";
  className?: string;
}

export const initialProps: DateTimeProps = {
  dateTime: "2023-01-01T00:00:00Z",
  size: "M",
  weight: "Medium",
  align: "Left",
  color: "Gray 900",
  className: "",
};

const DateTime = ({
  dateTime,
  size,
  weight,
  color,
  align,
  className,
}: DateTimeProps) => {
  return (
    <time
      dateTime={dateTime}
      className={cn(
        paragraphVariants({ size, weight, color, align, className })
      )}
    >
      {isValidUTCDateString(dateTime) ? (
        formatDateTime(dateTime)
      ) : (
        <span className="text-red-500">
          Please provide a valid ISO 8601 date string (e.g.
          2023-01-01T00:00:00Z)
        </span>
      )}
    </time>
  );
};

export default DateTime;
