import { GetPath, TemplateConfig, TemplateProps } from "@yext/pages";
import Main from "../components/Main";
import Button from "../components/atoms/Button";
import Container from "../components/atoms/Container";
import Heading from "../components/atoms/Heading";
// import Stars from "../components/atoms/Stars";
import StyledText from "../components/atoms/StyledText";
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
      <Container layout="grid" className={`mx-auto sm:grid-cols-1 sm:p-0`}>
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
        <Container layout="column" className={`gap-y-2 py-0`}>
          <StyledText
            text={`$0.00`}
            size="XL"
            weight="Medium"
            align="Left"
            color="Gray 900"
          />
          <Container
            layout="row"
            className={`gap-x-3 px-0 py-0 sm:p-0`}
          ></Container>
          <Button size="xxlarge" text={`Add To Cart`} className={`mt-4`} />
        </Container>
        <Container
          layout="column"
          className="py-2 sm:px-6 sm:py-2 lg:col-span-2 lg:row-start-1 lg:py-4"
        >
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
    </Main>
  );
}
