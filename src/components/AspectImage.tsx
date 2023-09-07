import { AspectImagePropType } from "../types/component";
import { ComplexImageType } from "../types/autogen";
// import { ComplexImageType } from "@yext/sites-components";
import { Image } from "@yext/sites-components";

export interface AspectImageProps {
  image: ComplexImageType;
  imageClassname?: string;
  aspectRatio?:
    | "1:1"
    | "4:3"
    | "3:2"
    | "5:3"
    | "16:9"
    | "3:1"
    | "2:3"
    | "5:7"
    | "4:5"
    | "4:1"
    | "16:10";
}

export const initialProps: AspectImageProps = {
  image: {
    image: {
      url: "https://a.mktgcdn.com/p-sandbox/SPRRm-cAcTNOv8T8o2EpJ3z5N1nl0x3yL8YAK753KVc/300x300.png",
      width: 150,
      height: 150,
      alternateText: "Placeholder",
    },
  },
  imageClassname: "",
  aspectRatio: "1:1",
};

const AspectImage = ({
  image,
  aspectRatio,
  imageClassname,
}: AspectImageProps) => {
  // split aspectRatio into width and height and convert to number
  const [width, height] = aspectRatio?.split(":").map((x) => Number(x)) ?? [
    1, 1,
  ];

  return (
    <Image
      image={image}
      className={imageClassname}
      layout="aspect"
      aspectRatio={width / height}
    />
  );
};

export default AspectImage;
