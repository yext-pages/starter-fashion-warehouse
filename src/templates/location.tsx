import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import AspectImage from "../components/AspectImage";
import HorizontalStack from "../components/HorizontalStack";
import LocationInfoCard from "../components/LocationInfoCard";
import LocationLayout from "../components/LocationLayout";
import VerticalStack from "../components/VerticalStack";
import Button from "../components/atoms/Button";
import FlexContainer from "../components/atoms/FlexContainer";
import HeadingText from "../components/atoms/HeadingText";
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
    <LocationLayout backgroundColor="#ffffff">
      <FlexContainer
        backgroundColor="bg-neutral-light"
        containerClassname={`py-16`}
      >
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
      <FlexContainer containerClassname={`py-16`}>
        <AspectImage
          image={{
            image: {
              url: `${document.photoGallery[1].image.url}`,
              width: 150,
              height: 150,
              alternateText: "Placeholder",
            },
          }}
          imageClassname={`rounded-3xl`}
          aspectRatio="3:2"
        />
        <VerticalStack
          spacing="3"
          topMargin="0"
          bottomMargin="0"
          leftMargin="0"
          rightMargin="0"
          alignment="left"
        >
          <HeadingText
            text={`${document.name}`}
            type="Section"
            color="Secondary"
          />
          <HeadingText
            text={`${document.address.city}`}
            color="Primary"
            type="Page"
          />
          <HorizontalStack
            spacing="3"
            leftMargin="0"
            rightMargin="0"
            topMargin="0"
            bottomMargin="0"
            alignment="top"
            verticalOnMobile="true"
          >
            <Button buttonLabel={`Get Directions`} type="primary" />
            <Button buttonLabel={`Order Online`} type="secondary" />
          </HorizontalStack>
        </VerticalStack>
      </FlexContainer>
    </LocationLayout>
  );
};

export default Location;
