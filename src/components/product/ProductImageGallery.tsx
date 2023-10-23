import { ComplexImage } from "../../types/autogen";
import Container from "../common/Container";
import Image from "../common/Image";

export interface ImageGalleryProps {
  images: ComplexImage[];
}

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
      className={`mt-6 sm:grid-cols-1 lg:grid-cols-3 lg:gap-x-8`}
    >
      {images[1] && (
        <Image
          image={images[1]}
          aspectRatio="5:7"
          className={`mx-auto hidden overflow-hidden rounded-lg lg:block lg:max-h-[480px]`}
        />
      )}
      <Container
        layout="grid"
        className={`hidden lg:grid lg:grid-cols-1 lg:gap-y-8 lg:py-0`}
      >
        {images[2] && (
          <Image
            image={images[2]}
            aspectRatio="3:2"
            className="overflow-hidden rounded-lg lg:max-h-[225px]"
          />
        )}
        {images[3] && (
          <Image
            image={images[3]}
            aspectRatio="3:2"
            className={`overflow-hidden rounded-lg lg:max-h-[225px]`}
          />
        )}
      </Container>
      {images[0] && (
        <Image
          image={images[0]}
          aspectRatio="5:4"
          className="max-h-[480px] sm:overflow-hidden sm:rounded-lg lg:aspect-[5/7]"
        />
      )}
    </Container>
  );
};

export default ImageGallery;
