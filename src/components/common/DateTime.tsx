import { cva } from "cva";
import { fontWeights, textColors, textSizes } from "../../sharedVariants";
import { cn, formatDateTime, isValidUTCDateString } from "../../utils";
import { TextProps } from "./Text";

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

export interface DateTimeProps extends TextProps {}

export const initialProps: DateTimeProps = {
  text: "2023-01-01T00:00:00Z",
  size: "M",
  weight: "Regular",
  align: "Left",
  color: "Gray 900",
  className: "",
};

const DateTime = ({
  text,
  size,
  weight,
  color,
  align,
  className,
}: DateTimeProps) => {
  return (
    <time
      dateTime={text}
      className={cn(
        paragraphVariants({ size, weight, color, align, className })
      )}
    >
      {isValidUTCDateString(text) ? (
        formatDateTime(text)
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
