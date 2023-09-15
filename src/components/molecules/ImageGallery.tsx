import { type VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { gapX } from "../../sharedVarients";

const imageGalleryVariants = cva("", {
  variants: {},
});

const imageGallery = ({}) => twMerge(imageGalleryVariants({}));

export interface ImageGalleryProps {
  gapX?: "0" | "2" | "4" | "6" | "8" | "16";
  className?: string;
  children?: React.ReactNode;
}

export const initialProps: ImageGalleryProps = {
  gapX: "0",
};

const images = [
  {
    src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
    alt: "Two each of gray, white, and black shirts laying flat.",
  },
  {
    src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
    alt: "Model wearing plain black basic tee.",
  },
  {
    src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
    alt: "Model wearing plain gray basic tee.",
  },
  {
    src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
    alt: "Model wearing plain white basic tee.",
  },
];

const ImageGallery = ({ gapX, children, className }: ImageGalleryProps) => {
  return (
    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
      <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
        <img
          src={images[0].src}
          alt={images[0].alt}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
          <img
            src={images[1].src}
            alt={images[1].alt}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
          <img
            src={images[2].src}
            alt={images[2].alt}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
      <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
        <img
          src={images[3].src}
          alt={images[3].alt}
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
