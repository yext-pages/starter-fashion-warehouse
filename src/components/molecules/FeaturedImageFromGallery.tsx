import { ComplexImage } from "../../types/autogen";
import StudioImage from "../common/StudioImage";

export interface FeaturedImageFromGalleryProps {
  images?: ComplexImage[];
}

// This component is necessary because Studio doesn't support array references in templates yet.
const FeaturedImageFromGallery = ({
  images,
}: FeaturedImageFromGalleryProps) => {
  if (!images || images.length === 0) {
    return null;
  }

  const image = images[0];

  return <StudioImage image={image} aspectRatio="16:9" />;
};

export default FeaturedImageFromGallery;
