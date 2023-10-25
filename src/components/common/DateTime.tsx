import { cva } from "cva";
import {
  ColorVariant,
  FontWeightVariant,
  TextAlignVariant,
  TextSizeVariant,
  fontWeights,
  textColors,
  textSizes,
} from "../../sharedVariants";
import { cn, formatDateTime, isValidUTCDateString } from "../../utils";

const paragraphVariants = cva("", {
  variants: {
    size: textSizes,
    weight: fontWeights,
    align: {
      Left: ["text-left"],
      Center: ["text-center"],
      Right: ["text-right"],
    },
    color: textColors,
  },
});

export interface DateTimeProps {
  /*
   * @displayName Date/Time
   * @tooltip Must be in the format 2023-01-01T00:00:00Z
   */
  dateTime: string;
  /*
   * @displayName Text Size
   */
  size?: TextSizeVariant;
  /*
   * @displayName Font Weight
   */
  weight?: FontWeightVariant;
  /*
   * @displayName Text Alignment
   */
  align?: TextAlignVariant;
  /*
   * @displayName Text Color
   */
  color?: ColorVariant;
  className?: string;
}

export const initialProps: DateTimeProps = {
  dateTime: "2023-01-01T00:00:00Z",
  size: "M",
  weight: "Regular",
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
