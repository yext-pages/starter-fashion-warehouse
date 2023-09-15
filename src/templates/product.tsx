import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import Container from "../components/atoms/Container";
import FlexStack from "../components/atoms/FlexStack";
import HeadingText from "../components/atoms/HeadingText";
import RTF from "../components/atoms/RTF";
import StudioImage from "../components/atoms/StudioImage";
import StyledLink from "../components/atoms/StyledLink";
import Main from "../components/layouts/Main";
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
  return (
    <Main>
      <FlexStack gapX="0" gapY="0" />
      <Container layout="grid" className={`lg:gap-x-8 lg:px-8`}>
        <StudioImage
          image={{
            url: `https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg`,
          }}
          className={`rounded-lg`}
          aspectRatio="4:3"
        />
        <Container layout="column" className={`px-0 sm:p-0`}>
          <StudioImage
            image={{
              url: `https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg`,
            }}
            className=""
            aspectRatio="2:3"
          />
          <StudioImage
            image={{
              url: `https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg`,
            }}
            className={`rounded-lg`}
            aspectRatio="2:3"
          />
        </Container>
        <StudioImage
          image={{
            url: `https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg`,
          }}
          className=""
          aspectRatio="4:3"
        />
      </Container>
      <Container layout="grid">
        <Container layout="column" columnSpan="2">
          <HeadingText level="Heading 1" text={`${document.name}`} />
          <RTF Size="Medium" Color="Gray 900" />
        </Container>
        <Container layout="column" className={``}>
          <HeadingText
            level="Heading 1"
            text={`$ ${document.price.value}`}
            color="Gray 400"
          />
          <Container
            layout="flex"
            className={`gap-x-3 px-0 sm:p-0 items-center`}
          >
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
