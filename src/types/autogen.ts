export default interface Product {
  slug: string;
}

export interface ImageType {
  url: string;
  alt?: string;
}

export interface YextImage {
  url: string;
  alt?: string;
  width: number;
  height: number;
}

export interface Foo {
  bar: Bar;
  thumbnail: Thumbnail;
}

export interface Bar {
  baz: string;
}

export type ImageProps = {
  alternateText?: string;
  width?: number;
  height?: number;
  thumbnails?: Thumbnail[];
  url?: string;
};

export type Thumbnail = {
  width: number;
  height: number;
  url?: string;
};
export interface MediaComponentProps {
  /**
   * Image object
   */
  image?: ImageProps;
  // imageUrl?: string;
  /**
   * Video url
   */
  videoUrl?: string;
  /**
   * Text content for the caption
   */
  caption?: string;
  /**
   * Specify whether the image element should lazy load
   * @default true
   */
  lazyLoading?: boolean;
  /**
   * Set the maximum width of the Media element
   */
  maxWidth?: string;
  autoplay?: boolean;
  // style?: React.CSSProperties;
  /*
   * Adds a magnifying glass when the real-size image is 30% larger than the rendered one
   */
  enableMagnifying?: boolean;
  /**
   * Enables slide up animation on scroll
   */
  enableAnimation?: boolean;
  verticalSpacing?: VerticalSpacing;
  /**
   * Desired aspect ratio of the image (ex: "5/4")
   * @default 16/9
   */
  aspectRatio?: string;
}

export type VerticalSpacing = "short" | "medium" | "tall" | "none";

export type Theme = ThemeLight | ThemeDark | ThemeHighlight;

export type ThemeLight =
  | "theme-white"
  | "theme-light"
  | "theme-answers"
  | "theme-fins"
  | "theme-food"
  | "theme-healthcare"
  | "theme-retail"
  | "theme-hospitality"
  | "theme-smb"
  | "theme-government";

export type ThemeDark = "theme-dark" | "theme-concrete-black" | "theme-black";

export type ThemeHighlight =
  | "theme-answers-highlight"
  | "theme-fins-highlight"
  | "theme-food-highlight"
  | "theme-healthcare-highlight"
  | "theme-retail-highlight"
  | "theme-hospitality-highlight"
  | "theme-smb-highlight"
  | "theme-government-highlight";

export interface CtaProps {
  /**
   * Button text
   */
  label?: string;
  /**
   * Cta url
   * - If this needs to open a modal, the link needs to be set to #modal
   */
  link?: string;
  /**
   * string
   */
  type?: CtaType;
  /**
   * Button Class
   */
  additionalClasses?: string;
  /**
   *
   */
  size?: "default" | "small";
  /**
   * Should the link open in a new tab?
   */
  openInNewTab?: boolean;
}

export type CtaType =
  | "primary"
  | "primary-outlined"
  | "secondary-outlined"
  | "link"
  | "link-arrow"
  | "link-lowercase";
