export interface AspectImagePropType {
  /** Overrides the className on the underlying img tag. */
  className?: string;
  /** The aspect ratio of the image. Only impacts if layout is set to "aspect". */
  // aspectRatio?: number;
  /** A pass through react component that is displayed when the image is loading. */
  // placeholder?: React.ReactNode;
  /** Pass through props that are on the native HTML img tag. The Image component may not work if src and/or srcsets are included. */
  // imgOverrides?: Record<string, unknown>;
  /** The pass through style of the underlying img tag. */
  // style?: React.CSSProperties;
  /** Set the loading state of the image. */
  loading?: "eager" | "lazy";
}
