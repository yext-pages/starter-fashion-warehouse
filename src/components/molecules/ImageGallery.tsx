import { ComplexImage } from "../../types/autogen";
import Container from "../atoms/Container";
import StudioImage from "../atoms/StudioImage";

export interface ImageGalleryProps {
  images: ComplexImage[];
}

// TODO ask about placeholder images
export const initialProps: ImageGalleryProps = {
  images: [
    {
      image: {
        url: "https://placehold.co/300x612",
        height: 612,
        width: 300,
      },
    },
    {
      image: {
        url: "https://placehold.co/300x300",
        height: 300,
        width: 300,
      },
    },
    {
      image: {
        url: "https://placehold.co/300x300",
        height: 300,
        width: 300,
      },
    },
    {
      image: {
        url: "https://placehold.co/300x612",
        height: 612,
        width: 300,
      },
    },
  ],
};

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <Container
      layout="grid"
      paddingBottom="M"
      paddingTop="M"
      className={`mt-6 sm:grid-cols-1 lg:gap-x-8`}
    >
      <StudioImage
        image={images[1]}
        aspectRatio="4:3"
        className={`mx-auto hidden overflow-hidden rounded-lg lg:block lg:max-h-[480px]`}
      />
      <Container
        layout="grid"
        className={`hidden lg:grid lg:grid-cols-1 lg:gap-y-8 lg:py-0`}
      >
        <StudioImage
          image={images[2]}
          aspectRatio="3:2"
          className="overflow-hidden rounded-lg lg:max-h-[225px]"
        />
        <StudioImage
          image={images[3]}
          aspectRatio="3:2"
          className={`overflow-hidden rounded-lg lg:max-h-[225px]`}
        />
      </Container>
      <StudioImage
        image={images[0]}
        aspectRatio="5:4"
        className="lg:aspect-h-4 lg:aspect-w-3 max-h-[480px] sm:overflow-hidden sm:rounded-lg"
      />
    </Container>
  );
};

export default ImageGallery;
