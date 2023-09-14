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

const gridContainerVarients = cva("grid mx-auto", {
  variants: {
    DesktopColumns: {
      "1": "lg:grid-cols-1",
      "2": "lg:grid-cols-2",
      "3": "lg:grid-cols-3",
      "4": "lg:grid-cols-4",
    },
    TabletColumns: {
      "1": "sm:grid-cols-1",
      "2": "sm:grid-cols-2",
      "8": "sm:grid-cols-8",
    },
    MobileColumns: {
      "1": "grid-cols-1",
      "2": "grid-cols-2",
      "4": "grid-cols-4",
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
  extends VariantProps<typeof gridContainerVarients> {}

const gridContainer = ({
  DesktopColumns,
  TabletColumns,
  MobileColumns,
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
    gridContainerVarients({
      DesktopColumns,
      TabletColumns,
      MobileColumns,
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

export interface GridContainerProps {
  children?: React.ReactNode;
  DesktopColumns?: "1" | "2" | "3" | "4";
  TabletColumns?: "1" | "2" | "8";
  MobileColumns?: "1" | "2" | "4";
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

export const initialHeadingProps: GridContainerProps = {
  DesktopColumns: "3",
  TabletColumns: "2",
  MobileColumns: "1",
  GapXDesktop: "4",
  GapXTablet: "4",
  GapXMobile: "4",
  GapYDesktop: "8",
  GapYTablet: "8",
  GapYMobile: "8",
  MarginXDesktop: "0",
  MarginXTablet: "0",
  MarginXMobile: "0",
  MarginYDesktop: "0",
  MarginYTablet: "0",
  MarginYMobile: "0",
};

const GridContainer = ({
  DesktopColumns,
  TabletColumns,
  MobileColumns,
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
  children,
}: GridContainerProps) => {
  return (
    <div
      className={gridContainer({
        DesktopColumns,
        TabletColumns,
        MobileColumns,
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

export default GridContainer;
