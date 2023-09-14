import { VariantProps, cva } from "cva";
import { twMerge } from "tailwind-merge";
import {
  GapXDesktop,
  GapXTablet,
  GapXMobile,
  GapYDesktop,
  GapYTablet,
  GapYMobile,
  MarginXDesktop,
  MarginXTablet,
  MarginXMobile,
  MarginYDesktop,
  MarginYTablet,
  MarginYMobile,
} from "../../sharedVarients";

const flexContainerVarients = cva("flex mx-auto", {
  variants: {
    DesktopLayout: {
      Row: "lg:flex-row",
      Column: "lg:flex-col",
    },
    TabletLayout: {
      Row: "sm:flex-row",
      Column: "sm:flex-col",
    },
    MobileLayout: {
      Row: "flex-row",
      Column: "flex-col",
    },
    GapXDesktop,
    GapXTablet,
    GapXMobile,
    GapYDesktop,
    GapYTablet,
    GapYMobile,
    MarginXDesktop,
    MarginXTablet,
    MarginXMobile,
    MarginYDesktop,
    MarginYTablet,
    MarginYMobile,
  },
});

export interface GridContainerVarients
  extends VariantProps<typeof flexContainerVarients> {}

const flexContainer = ({
  DesktopLayout,
  TabletLayout,
  MobileLayout,
  GapXDesktop,
  GapXTablet,
  GapXMobile,
  GapYDesktop,
  GapYTablet,
  GapYMobile,
  MarginXDesktop,
  MarginXTablet,
  MarginXMobile,
  MarginYDesktop,
  MarginYTablet,
  MarginYMobile,
}: GridContainerVarients) =>
  twMerge(
    flexContainerVarients({
      DesktopLayout,
      TabletLayout,
      MobileLayout,
      GapXDesktop,
      GapXTablet,
      GapXMobile,
      GapYDesktop,
      GapYTablet,
      GapYMobile,
      MarginXDesktop,
      MarginXTablet,
      MarginXMobile,
      MarginYDesktop,
      MarginYTablet,
      MarginYMobile,
    })
  );

export interface FlexContainerProps {
  children?: React.ReactNode;
  DesktopLayout: "Row" | "Column";
  TabletLayout: "Row" | "Column";
  MobileLayout: "Row" | "Column";
  GapXDesktop?: "0" | "2" | "4" | "8" | "16";
  GapXTablet?: "0" | "2" | "4" | "8" | "16";
  GapXMobile?: "0" | "2" | "4" | "8" | "16";
  GapYDesktop?: "0" | "2" | "4" | "8" | "16";
  GapYTablet?: "0" | "2" | "4" | "8" | "16";
  GapYMobile?: "0" | "2" | "4" | "8" | "16";
  MarginXDesktop?: "0" | "2" | "4" | "8" | "16";
  MarginXTablet?: "0" | "2" | "4" | "8" | "16";
  MarginXMobile?: "0" | "2" | "4" | "8" | "16";
  MarginYDesktop?: "0" | "2" | "4" | "8" | "16";
  MarginYTablet?: "0" | "2" | "4" | "8" | "16";
  MarginYMobile?: "0" | "2" | "4" | "8" | "16";
}

export const initialProps: FlexContainerProps = {
  DesktopLayout: "Row",
  TabletLayout: "Row",
  MobileLayout: "Row",
  GapXDesktop: "0",
  GapXTablet: "0",
  GapXMobile: "0",
  GapYDesktop: "0",
  GapYTablet: "0",
  GapYMobile: "0",
  MarginXDesktop: "0",
  MarginXTablet: "0",
  MarginXMobile: "0",
  MarginYDesktop: "0",
  MarginYTablet: "0",
  MarginYMobile: "0",
};

const FlexContainer = ({
  children,
  DesktopLayout,
  TabletLayout,
  MobileLayout,
  GapXDesktop,
  GapXTablet,
  GapXMobile,
  GapYDesktop,
  GapYTablet,
  GapYMobile,
  MarginXDesktop,
  MarginXTablet,
  MarginXMobile,
  MarginYDesktop,
  MarginYTablet,
  MarginYMobile,
}: FlexContainerProps) => {
  return (
    <div
      className={flexContainer({
        DesktopLayout,
        TabletLayout,
        MobileLayout,
        GapXDesktop,
        GapXTablet,
        GapXMobile,
        GapYDesktop,
        GapYTablet,
        GapYMobile,
        MarginXDesktop,
        MarginXTablet,
        MarginXMobile,
        MarginYDesktop,
        MarginYTablet,
        MarginYMobile,
      })}
    >
      {children}
    </div>
  );
};

export default FlexContainer;