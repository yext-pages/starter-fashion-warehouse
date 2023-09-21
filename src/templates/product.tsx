import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import ProductList from "../components/ProductList";
import Button from "../components/atoms/Button";
import Container from "../components/atoms/Container";
import Heading from "../components/atoms/Heading";
import RTF from "../components/atoms/RTF";
import StyledLink from "../components/atoms/StyledLink";
import Main from "../components/layouts/Main";
import ImageGallery from "../components/molecules/ImageGallery";
import Reviews from "../components/molecules/Reviews";
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
      <ImageGallery
        images={[
          {
            url: `https://a.mktgcdn.com/p/obhFRB-XF9B3UBToXyvSyxlxbaM_wpuSZVmkVeFo-gc/3174x2381.jpg`,
            height: 2381,
            width: 3174,
          },
          {
            url: `https://a.mktgcdn.com/p/7ENAw-8kSY4qxFfpGlHOC0Az_uHuLhBTeNmSkys3zdM/3024x4032.jpg`,
            height: 4032,
            width: 3024,
          },
          {
            url: `https://a.mktgcdn.com/p/qNLtBLoGUvwYjTAf8CPHxt9sRr9GEbc4TIO8xX5IuTM/3174x4232.jpg`,
            height: 4232,
            width: 3174,
          },
          {
            url: `https://a.mktgcdn.com/p/UzUZb3YGor8oaW8pd_KtqcCTSmjRacnN7jN5dtXYXaw/3174x2381.jpg`,
            height: 2381,
            width: 3174,
          },
        ]}
      />
      <Container layout="grid" className={`mx-auto sm:grid-cols-1 sm:p-0`}>
        <Container layout="column" className="lg:col-span-2">
          <Heading
            text={`${document.name}`}
            rank="1"
            size="XXL"
            align="Left"
            color="Gray 900"
            fontWeight="Bold"
            className=""
          />
          <Container layout="flex" className={`px-0 sm:px-0`}>
            <RTF size="Medium" color="Gray 900" className="" />
          </Container>
        </Container>
        <Container layout="column" className={`gap-y-2`}>
          <Heading
            rank="1"
            text={`$ ${document.price.value}`}
            color="Gray 400"
            fontWeight="Base"
          />
          <Container layout="row" className={` gap-x-3 px-0 py-0 sm:p-0`}>
            <Stars rating={5} />
            <StyledLink
              href="#"
              label={`119 Reviews`}
              type="Primary"
              size="Medium"
              weight="Normal"
            />
          </Container>
          <Button size="xxlarge" text={`Add To Cart`} className={`mt-10`} />
        </Container>
      </Container>
      <Reviews
        entityId="ENTITY_ID_HERE"
        titleProps={{
          text: "Recent Reviews",
          rank: "2",
          fontWeight: "Bold",
          color: "Gray 900",
        }}
        reviewContentTextProps={{
          size: "Small",
          color: "Gray 500",
          align: "Left",
          weight: "Medium",
        }}
        reviewDateTimeTextProps={{
          dateTime: "",
          size: "Small",
          weight: "Medium",
          align: "Left",
          color: "Gray 500",
        }}
        authorNameTextProps={{
          size: "Medium",
          color: "Gray 900",
          align: "Left",
          weight: "Medium",
        }}
      />
      <ProductList />
    </Main>
  );
}
