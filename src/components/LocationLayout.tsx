import { HexColor } from "@yext/studio";
import React from "react";
import LocationHeader from "./LocationHeader";

interface LocationLayoutProps {
  children: React.ReactNode;
  backgroundColor?: HexColor;
}

export const initialProps = {
  backgroundColor: "#111827",
};

const LocationLayout = ({ children, backgroundColor }: LocationLayoutProps) => {
  return (
    <div
      className="flex min-h-screen w-full flex-col"
      style={{ backgroundColor }}
    >
      <LocationHeader />
      <div className="pt-24">{children}</div>
    </div>
  );
};

export default LocationLayout;
