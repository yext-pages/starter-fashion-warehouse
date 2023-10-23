import { cva } from "cva";
import { cn } from "../../utils";
import { ComplexImage } from "../../types/autogen";

const imageVariants = cva("", {
  variants: {
    aspectRatio: {
      "1:1": "aspect-[1/1]",
      "4:3": "aspect-[4/3]",
      "3:2": "aspect-[3/2]",
      "5:4": "aspect-[5/4]",
      "5:3": "aspect-[5/3]",
      "16:9": "aspect-[16/9]",
      "3:1": "aspect-[3/1]",
      "2:3": "aspect-[2/3]",
      "5:7": "aspect-[5/7]",
      "4:5": "aspect-[4/5]",
      "4:1": "aspect-[4/1]",
      "16:10": "aspect-[16/10]",
    },
  },
  defaultVariants: {
    aspectRatio: "1:1",
  },
});

export interface ImageProps {
  image?: ComplexImage;
  className?: string;
  aspectRatio?:
    | "1:1"
    | "4:3"
    | "3:2"
    | "5:3"
    | "5:4"
    | "16:9"
    | "3:1"
    | "2:3"
    | "5:7"
    | "4:5"
    | "4:1"
    | "16:10";
}

export const initialProps: ImageProps = {
  image: {
    image: {
      url: "https://a.mktgcdn.com/p-sandbox/SPRRm-cAcTNOv8T8o2EpJ3z5N1nl0x3yL8YAK753KVc/300x300.png",
      alternateText: "placeholder image",
      height: 300,
      width: 300,
    },
  },
  className: "",
  aspectRatio: "1:1",
};

const Image = ({ image, aspectRatio, className }: ImageProps) => {
  if (!image) {
    return null;
  }

  return (
    <div className={cn(imageVariants({ aspectRatio, className }))}>
      <img
        className="h-full w-full object-cover object-center"
        src={image.image.url}
        alt={image.image.alternateText}
      />
    </div>
  );
};

export default Image;
