import { ImageType } from "../types/autogen";
import Container from "../components/atoms/Container";
import StudioImage from "../components/atoms/StudioImage";

export interface ImageGalleryProps {
  images: ImageType[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <Container layout="grid" className={`mt-6 lg:gap-x-8`}>
      <StudioImage
        image={{
          url: "https://placehold.co/300x612",
          alt: "placeholder",
        }}
        className={`aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg sm:max-h-[480px] lg:block`}
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
          className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:max-h-[225px]"
        />
        <StudioImage
          image={{
            url: "https://placehold.co/300x300",
            alt: "placeholder",
          }}
          className={`aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:max-h-[225px]`}
        />
      </Container>
      <StudioImage
        image={{
          url: "https://placehold.co/300x612",
          alt: "placeholder",
        }}
        className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg lg:max-h-[480px]"
      />
    </Container>
  );
};

export default ImageGallery;
