import { GetPath, TemplateConfig, TemplateProps } from "@yext/pages";
import Main from "../components/Main";
import Button from "../components/atoms/Button";
import Container from "../components/atoms/Container";
import Dropdown from "../components/atoms/Dropdown";
import Heading from "../components/atoms/Heading";
import Stars from "../components/atoms/Stars";
import StudioImage from "../components/atoms/StudioImage";
import StyledText from "../components/atoms/StyledText";
import Reviews from "../components/molecules/Reviews";
import "../index.css";

export const config: TemplateConfig = {
  stream: {
    $id: "studio-stream-id-air-ascend",
    localization: { locales: ["en"] },
    filter: { entityIds: ["air-elite-ascend-7000"] },
    fields: ["slug"],
  },
};
export const getPath: GetPath<TemplateProps> = ({
  document,
}: TemplateProps) => {
  return `${document.slug}`;
};

export default function AirAscend() {
  return (
    <Main>
      <Container
        layout="grid"
        className={`mt-6 lg:gap-x-8`}
        paddingTop="L"
        paddingBottom="L"
      >
        <StudioImage
          image={{ url: "https://placehold.co/300x612", alt: "placeholder" }}
          className={`aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg sm:max-h-[480px] lg:block`}
        />
        <Container
          layout="grid"
          className={`hidden lg:grid lg:grid-cols-1 lg:gap-y-8 lg:py-0`}
        >
          <StudioImage
            image={{ url: "https://placehold.co/300x300", alt: "placeholder" }}
            className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:max-h-[225px]"
          />
          <StudioImage
            image={{ url: "https://placehold.co/300x300", alt: "placeholder" }}
            className={`aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:max-h-[225px]`}
          />
        </Container>
        <StudioImage
          image={{ url: "https://placehold.co/300x612", alt: "placeholder" }}
          className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg lg:max-h-[480px]"
        />
      </Container>
      <Container
        layout="grid"
        className="sm:grid-cols-1"
        paddingTop="M"
        paddingBottom="M"
      >
        <Container className="lg:hidden">
          <Heading
            text="Product Name"
            rank="1"
            size="XXL"
            align="Left"
            color="Gray 900"
            fontWeight="Bold"
          />
        </Container>
        <Container
          layout="column"
          className="gap-y-2"
          paddingTop="S"
          paddingBottom="M"
        >
          <StyledText
            text={`$0.00`}
            size="XL"
            weight="Medium"
            align="Left"
            color="Gray 900"
          />
          <Container layout="row" className="gap-x-3">
            <Stars rating={5} />
          </Container>
          <Button size="xxlarge" text="Add To Cart" className="mt-4" />
        </Container>
        <Container layout="column" className="lg:col-span-2 lg:row-start-1">
          <Heading
            className="hidden lg:block"
            text="Product Name"
            rank="1"
            size="XXL"
            align="Left"
            color="Gray 900"
            fontWeight="Bold"
          />
          <StyledText
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            size="M"
            weight="Medium"
            align="Left"
            color="Gray 700"
          />
        </Container>
      </Container>
      <Container
        layout="column"
        className="mx-auto"
        paddingTop="XL"
        paddingBottom="XL"
      >
        <Container layout="row" className="justify-between px-0 sm:px-0">
          <Heading rank="3" text="Reviews" fontWeight="Bold" size="L" />
          <Dropdown />
        </Container>
        <Reviews entityId="apex-air-max-1000" />
      </Container>
    </Main>
  );
}
