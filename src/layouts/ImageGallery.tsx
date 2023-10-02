import { ImageType } from "../types/autogen";
import Container from "../components/atoms/Container";
import StudioImage from "../components/atoms/StudioImage";

export interface ImageGalleryProps {
  images: ImageType[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <Container
      layout="grid"
      paddingBottom="M"
      className={`mt-6 sm:grid-cols-1 lg:gap-x-8`}
    >
      <StudioImage
        image={{
          url: "https://placehold.co/300x612",
          alt: "placeholder",
        }}
        aspectRatio="4:3"
        className={`mx-auto hidden overflow-hidden rounded-lg lg:block lg:max-h-[480px]`}
      />
      <Container
        layout="grid"
        className={`hidden lg:grid lg:grid-cols-1 lg:gap-y-8 lg:py-0`}
      >
        <StudioImage
          image={{
            url: "https://placehold.co/300x300",
            alt: "placeholder",
          }}
          aspectRatio="3:2"
          className="overflow-hidden rounded-lg lg:max-h-[225px]"
        />
        <StudioImage
          image={{
            url: "https://placehold.co/300x300",
            alt: "placeholder",
          }}
          aspectRatio="3:2"
          className={`overflow-hidden rounded-lg lg:max-h-[225px]`}
        />
      </Container>
      <StudioImage
        image={{
          url: "https://placehold.co/300x612",
          alt: "placeholder",
        }}
        aspectRatio="5:4"
        className="lg:aspect-h-4 lg:aspect-w-3 max-h-[480px] sm:overflow-hidden sm:rounded-lg"
      />
    </Container>
  );
};

export default ImageGallery;
