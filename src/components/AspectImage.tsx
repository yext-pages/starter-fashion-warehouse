import { AspectImagePropType } from "../types/component";
import { ComplexImageType } from "../types/autogen";
// import { ComplexImageType } from "@yext/sites-components";
import { Image } from "@yext/sites-components";

export interface AspectImageProps {
  image: ComplexImageType;
  imageProps?: AspectImagePropType;
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
};

const AspectImage = ({ image, imageProps }: AspectImageProps) => {
  return <Image image={image} layout="aspect" aspectRatio={1} />;
};

export default AspectImage;
