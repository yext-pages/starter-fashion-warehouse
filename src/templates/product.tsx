import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import Container from "../components/atoms/Container";
import HeadingText from "../components/atoms/HeadingText";
import Paragraph from "../components/atoms/Paragraph";
import RTF from "../components/atoms/RTF";
import StyledLink from "../components/atoms/StyledLink";
import Main from "../components/layouts/Main";
import ImageGallery from "../components/molecules/ImageGallery";
import Stars from "../components/molecules/Stars";
import "../index.css";

export const config: TemplateConfig = {
  stream: {
    $id: "product",
    localization: { locales: ["en"] },
    fields: ["name", "price", "slug"],
    filter: { entityTypes: ["product"] },
  },
};
export const getPath: GetPath<TemplateProps> = ({
  document,
}: TemplateProps) => {
  return document.slug;
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps<{ name: string }>
> = ({ document }): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

export default function Product({ document }: TemplateProps) {
  const serializedAST = JSON.stringify(document.richTextDescriptionV2.json);
  return (
    <Main>
      <ImageGallery gapX="0" />
      <Container layout="flex">
        <Container layout="grid" columnSpan="2">
          <Container layout="column" columnSpan="2">
            <HeadingText level="Heading 1" text={`${document.name}`} />
            <RTF Size="Medium" Color="Gray 900" />
          </Container>
        </Container>
        <Container layout="column" className={``}>
          <HeadingText level="Heading 1" text={`$ ${document.price.value}`} />
          <Paragraph
            Text="Text goes here"
            Size="Medium"
            Weight="Medium"
            Align="Left"
            Color="Gray 900"
          />
          <Container layout="flex" className={`sm:p-0 px-0 gap-x-3`}>
            <Stars rating={5} />
            <StyledLink
              href="#"
              label={`119 Reviews`}
              type="Primary"
              size="Medium"
              weight="Normal"
            />
          </Container>
        </Container>
      </Container>
    </Main>
  );
}
