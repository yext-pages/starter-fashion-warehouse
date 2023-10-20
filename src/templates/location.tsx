import {
  GetPath,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import Main from "../components/atoms/Main";
import Page from "../components/atoms/Page";
import Footer from "../components/molecules/Footer";
import Header from "../components/molecules/Header";
import "../index.css";
import StudioImage from "../components/atoms/StudioImage";
import Heading from "../components/atoms/Heading";
import Breadcrumbs from "../components/atoms/Breadcrumbs";
import { Address, Link } from "@yext/sites-components";
import { HoursStatus, HoursTable } from "@yext/sites-react-components";
import Container from "../components/atoms/Container";
import HorizontalDivider from "../components/atoms/HorizontalDivider";
import StyledText from "../components/atoms/StyledText";
import Button from "../components/atoms/Button";
import StudioStarIcon from "../components/atoms/StudioStarIcon";
import StudioPhoneIcon from "../components/atoms/StudioPhoneIcon";
import StudioCalendarIcon from "../components/atoms/StudioCalendarIcon";
import List from "../components/atoms/List";

export const config: TemplateConfig = {
  stream: {
    $id: "location",
    localization: { locales: ["en"] },
    fields: [
      "name",
      "slug",
      "address",
      "photoGallery",
      "hours",
      "yextDisplayCoordinate",
      "dm_directoryParents.name",
      "dm_directoryParents.slug",
      "dm_baseEntityCount",
      "mainPhone",
      "services",
    ],
    filter: { entityTypes: ["location"] },
  },
};

export const getPath: GetPath<TemplateProps> = ({
  document,
}: TemplateProps) => {
  return document.slug;
};

export default function Product({
  document,
  relativePrefixToRoot,
}: TemplateRenderProps) {
  return (
    <Page>
      <Header />
      <Main className="min-h-[calc(100vh-384px)]">
        <Container layout="column" flexGap="10">
          <Breadcrumbs
            breadcrumbs={document.dm_directoryParents}
            separator="/"
            className="container"
            addAnalytics={true}
            relativePrefixToRoot={relativePrefixToRoot}
          />
          <Container
            layout="row"
            backgroundColor="Gray 300"
            paddingTop="M"
            paddingBottom="M"
            flexGap="2"
            className="justify-center"
          >
            <StyledText text="We're hiring!" weight="Semi Bold" />
            <StyledText
              text="Join our team"
              className="underline decoration-2 underline-offset-8 hover:cursor-pointer hover:no-underline"
              weight="Semi Bold"
            />
          </Container>
          <Container layout="grid" columnCount="2">
            <Container
              layout="column"
              itemAlignment="Center"
              paddingBottom="S"
              paddingLeft="S"
              paddingRight="S"
              paddingTop="S"
              className="justify-between text-center"
            >
              <Heading
                text={document.name}
                rank="1"
                align="Center"
                size="XXXL"
                fontWeight="Bold"
              />
              <Link href="#" className="underline hover:no-underline">
                <Address
                  address={document.address}
                  separator=","
                  lines={[
                    ["line1"],
                    ["line2"],
                    ["city", ",", "region", ",", "postalCode"],
                  ]}
                />
              </Link>
              <HoursStatus
                hours={document.hours}
                timezone="EST"
                className="bg-gray-200 px-10 py-3"
              />
              <Button
                text="Get Directions"
                className="bg-black px-6 py-2 text-white hover:underline"
              ></Button>
            </Container>
            <StudioImage image={document.photoGallery[0]} aspectRatio="16:9" />
          </Container>
          <HorizontalDivider color="Gray 300" />
          <Container layout="flex" flexGap="10" className="justify-around">
            <Container layout="column" flexGap="6">
              <Heading
                text="STORE INFORMATION"
                rank="2"
                size="L"
                fontWeight="Bold"
              />
              <Container layout="row" itemAlignment="Center" flexGap="4">
                <StudioPhoneIcon />
                <StyledText text={document.mainPhone} />
              </Container>
              <Container layout="row" itemAlignment="Center" flexGap="4">
                <StudioCalendarIcon />
                <StyledText
                  text="Book a stylist appointment"
                  weight="Bold"
                  className="underline underline-offset-8"
                />
              </Container>
              <Container layout="row" itemAlignment="Center" flexGap="4">
                <StudioStarIcon />
                <StyledText
                  text="We're hiring! Join our team."
                  weight="Bold"
                  className="underline underline-offset-8"
                />
              </Container>
            </Container>
            <Container layout="column" flexGap="6">
              <Heading text="STORE HOURS" rank="2" size="L" fontWeight="Bold" />
              <HoursTable hours={document.hours} startOfWeek="Monday" />
            </Container>
            <Container layout="column" flexGap="6">
              <Heading
                text="AT THIS LOCATION"
                rank="2"
                size="L"
                fontWeight="Bold"
              />
              <List items={document.services} />
            </Container>
          </Container>
        </Container>
      </Main>
      <Footer />
    </Page>
  );
}
