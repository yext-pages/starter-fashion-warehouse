export const textColors = {
  "Gray 900": ["text-gray-900"],
  "Gray 800": ["text-gray-800"],
  "Gray 700": ["text-gray-700"],
  "Gray 500": ["text-gray-500"],
  "Gray 400": ["text-gray-400"],
  "Gray 300": ["text-gray-300"],
  "Gray 100": ["text-gray-100"],
  "Yellow 500": ["text-yellow-500"],
  Indigo: ["text-indigo-600"],
  White: ["text-white"],
};

export const borderColors = {
  "Gray 900": ["border-gray-900"],
  "Gray 800": ["border-gray-800"],
  "Gray 700": ["border-gray-700"],
  "Gray 500": ["border-gray-500"],
  "Gray 400": ["border-gray-400"],
  "Gray 300": ["border-gray-300"],
  "Gray 100": ["border-gray-100"],
  "Yellow 500": ["border-yellow-500"],
  Indigo: ["border-indigo-600"],
  White: ["border-white"],
};

export const backgroundColors = {
  "Gray 900": ["bg-gray-900"],
  "Gray 800": ["bg-gray-800"],
  "Gray 700": ["bg-gray-700"],
  "Gray 500": ["bg-gray-500"],
  "Gray 400": ["bg-gray-400"],
  "Gray 300": ["bg-gray-300"],
  "Gray 100": ["bg-gray-100"],
  "Yellow 500": ["bg-yellow-500"],
  Indigo: ["bg-indigo-600"],
  White: ["bg-white"],
};

export const textSizes = {
  XS: "text-xs",
  S: "text-sm",
  M: "text-base",
  L: "text-xl",
  XL: "text-2xl",
  XXL: "text-3xl",
  XXXL: "text-4xl",
};

export const textAlignment = {
  Left: ["text-left"],
  Center: ["text-center"],
  Right: ["text-right"],
};

export const fontWeights = {
  Bold: "font-bold",
  "Semi Bold": "font-medium",
  Regular: "font-regular",
  Light: "font-light",
};

export const gapX = {
  "0": "gap-x-0",
  "2": "gap-x-2",
  "4": "gap-x-4",
  "6": "gap-x-6",
  "8": "gap-x-8",
  "16": "gap-x-16",
};

export const gapY = {
  "0": "gap-y-0",
  "2": "gap-y-2",
  "4": "gap-y-4",
  "8": "gap-y-8",
  "16": "gap-y-16",
};

export const marginX = {
  "0": "mx-0",
  "2": "mx-2",
  "4": "mx-4",
  "8": "mx-8",
  "16": "mx-16",
  auto: "mx-auto",
};

export const marginY = {
  "0": "my-0",
  "2": "my-2",
  "4": "my-4",
  "8": "my-8",
  "16": "my-16",
  auto: "my-auto",
};

export const paddingRight = {
  none: "pr-0",
  S: "pr-2",
  M: "pr-4",
  L: "pr-8",
  XL: "pr-16",
  XXL: "pr-24",
};

export const paddingLeft = {
  none: "pl-0",
  S: "pl-2",
  M: "pl-4",
  L: "pl-8",
  XL: "pl-16",
  XXL: "pl-24",
};

export const paddingTop = {
  none: "pt-0",
  S: "pt-2",
  M: "pt-4",
  L: "pt-8",
  XL: "pt-16",
  XXL: "pt-24",
};

export const paddingBottom = {
  none: "pb-0",
  S: "pb-2",
  M: "pb-4",
  L: "pb-8",
  XL: "pb-16",
  XXL: "pb-24",
};

export const heights = {
  S: "h-8",
  M: "h-12",
  L: "h-16",
  XL: "h-20",
  XXL: "h-24",
};

// Can't do this:
// export type SizeVariant = keyof typeof paddingRight;

export type ContainerSizeVariant = "S" | "M" | "L" | "XL" | "XXL";
export type TextSizeVariant = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";
export type TextAlignVariant = "Left" | "Center" | "Right";
export type FontWeights = "Light" | "Regular" | "Semi Bold" | "Bold";
export type TextColors =
  | "Gray 900"
  | "Gray 800"
  | "Gray 700"
  | "Gray 500"
  | "Gray 400"
  | "Gray 300"
  | "Gray 100"
  | "Yellow 500"
  | "Indigo"
  | "White";
export type MarginSizes = "0" | "2" | "4" | "8" | "16" | "auto";
