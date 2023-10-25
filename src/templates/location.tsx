import { GetPath, TemplateConfig, TemplateProps } from "@yext/pages";
import Button from "../components/common/Button";
import Container from "../components/common/Container";
import FeaturedImageFromGallery from "../components/common/FeaturedImageFromGallery";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Heading from "../components/common/Heading";
import HorizontalDivider from "../components/common/HorizontalDivider";
import List from "../components/common/List";
import Main from "../components/common/Main";
import Page from "../components/common/Page";
import Text from "../components/common/Text";
import CalendarIcon from "../components/icons/CalendarIcon";
import PhoneIcon from "../components/icons/PhoneIcon";
import StarIcon from "../components/icons/StarIcon";
import Address from "../components/location/Address";
import Hours from "../components/location/Hours";
import "../index.css";

export const config: TemplateConfig = {
  stream: {
    $id: "location",
    localization: { locales: ["en"] },
    fields: [
      "name",
      "address",
      "photoGallery",
      "mainPhone",
      "hours",
      "services",
      "slug",
    ],
    filter: { entityTypes: ["location"] },
  },
};
export const getPath: GetPath<TemplateProps> = ({
  document,
}: TemplateProps) => {
  return document.slug;
};

export default function Location({ document }: TemplateProps) {
  return (
    <Page>
      <Header />
      <Main className="min-h-[calc(100vh-384px)]">
        <Container layout="column" flexGap="10">
          <Container
            layout="row"
            backgroundColor="Gray 300"
            paddingTop="M"
            paddingBottom="M"
            flexGap="2"
            className="justify-center"
          >
            <Text text="We're hiring!" weight="Semi Bold" />
            <Text
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
              flexGap="6"
            >
              <Heading
                text={`${document.name} `}
                rank="1"
                align="Center"
                size="XXXL"
                weight="Bold"
              />
              <Address
                address={{
                  line1: `${document.address.line1}`,
                  city: `${document.address.city}`,
                  region: `${document.address.region}`,
                  postalCode: `${document.address.postalCode}`,
                }}
                textStyleProps={{}}
              />
              <Button
                text="Get Directions"
                className="bg-black px-6 py-2 text-white hover:underline"
              />
            </Container>
            <FeaturedImageFromGallery images={document.photoGallery} />
          </Container>
          <HorizontalDivider color="Gray 300" />
          <Container
            layout="grid"
            className="grid-cols-1 justify-items-center sm:grid-cols-3"
            flexGap="10"
          >
            <Container layout="column" flexGap="6">
              <Heading
                text={`STORE INFORMATION `}
                rank="2"
                size="L"
                weight="Bold"
              />
              <Container layout="row" itemAlignment="Center" flexGap="4">
                <PhoneIcon />
                <Text text={document.mainPhone} />
              </Container>
              <Container layout="row" itemAlignment="Center" flexGap="4">
                <CalendarIcon />
                <Text
                  text="Book a stylist appointment"
                  weight="Bold"
                  className="underline underline-offset-8"
                />
              </Container>
              <Container layout="row" itemAlignment="Center" flexGap="4">
                <StarIcon type="outline" />
                <Text
                  text="We're hiring! Join our team."
                  weight="Bold"
                  className="underline underline-offset-8"
                />
              </Container>
            </Container>
            <Container layout="column" flexGap="6">
              <Heading text="STORE HOURS" rank="2" size="L" weight="Bold" />
              <Hours
                hours={{
                  monday: {
                    openIntervals: document.hours.monday.openIntervals,
                    isClosed: document.hours.monday.isClosed,
                  },
                  tuesday: {
                    openIntervals: document.hours.tuesday.openIntervals,
                  },
                  wednesday: {
                    openIntervals: document.hours.wednesday.openIntervals,
                  },
                  thursday: {
                    openIntervals: document.hours.thursday.openIntervals,
                  },
                  friday: {
                    openIntervals: document.hours.friday.openIntervals,
                  },
                  saturday: {
                    openIntervals: document.hours.saturday.openIntervals,
                  },
                  sunday: {
                    openIntervals: document.hours.sunday.openIntervals,
                  },
                }}
              />
            </Container>
            <Container layout="column" flexGap="6">
              <Heading
                text="AT THIS LOCATION"
                rank="2"
                size="L"
                weight="Bold"
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
