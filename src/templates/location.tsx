import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import AspectImage from "../components/AspectImage";
import FlexContainer from "../components/FlexContainer";
import LocationInfoCard from "../components/LocationInfoCard";
import MainLayout from "../components/MainLayout";
import "../index.css";

export const config: TemplateConfig = {
  stream: {
    $id: "location",
    localization: { locales: ["en"] },
    fields: ["photoGallery", "name", "address", "slug"],
    filter: { entityTypes: ["location"] },
  },
};
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ?? document.entityId.toString();
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const Location = ({ document }: TemplateProps) => {
  return (
    <MainLayout backgroundColor="#FFFFFF">
      <FlexContainer backgroundColor="bg-neutral-light">
        <AspectImage
          image={{
            image: {
              url: `${document.photoGallery[1].image.url}`,
              width: 150,
              height: 150,
              alternateText: "Placeholder",
            },
          }}
          aspectRatio="3:2"
          imageClassname={`rounded-3xl`}
        />
        <LocationInfoCard
          name={`${document.name}`}
          hours={{
            monday: { openIntervals: [{ start: "09:00", end: "17:00" }] },
            tuesday: { openIntervals: [{ start: "09:00", end: "17:00" }] },
            wednesday: { openIntervals: [{ start: "09:00", end: "17:00" }] },
            thursday: { openIntervals: [{ start: "09:00", end: "17:00" }] },
            friday: { openIntervals: [{ start: "09:00", end: "17:00" }] },
            saturday: { openIntervals: [{ start: "09:00", end: "17:00" }] },
            sunday: { openIntervals: [{ start: "09:00", end: "17:00" }] },
          }}
          rating={4.5}
          reviewCount={21}
          cta1={{ text: "Get Directions", url: "#" }}
          cta2={{ text: "Order Online", url: "#" }}
          city={`${document.address.city}`}
          containerClassname={`justify-center`}
        />
      </FlexContainer>
    </MainLayout>
  );
};

export default Location;
