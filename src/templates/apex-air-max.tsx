import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import Main from "../components/Main";
import ProductList from "../components/molecules/ProductListCmpt";
import ImageGallery from "../components/molecules/ImageGalleryCmpt";
import ProductOverview from "../components/molecules/ProductOverviewCmpt";
import Reviews from "../components/molecules/ReviewsCmpt";
import "../index.css";

export const config: TemplateConfig = {
  stream: {
    $id: "apex-air-max",
    localization: { locales: ["en"] },
    fields: ["name", "c_productDescription", "price", "slug", "c_testNumber"],
    filter: { entityIds: ["apex-air-max-1000"] },
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
      <ProductOverview
        productNameProps={{
          text: `${document.name}`,
          rank: "1",
          size: "XXL",
          align: "Left",
          color: "Gray 900",
          fontWeight: "Bold",
        }}
        productDescriptionProps={{
          text: `${document.c_productDescription}`,
          size: "M",
          weight: "Medium",
          align: "Left",
          color: "Gray 700",
        }}
        priceProps={{
          text: `${document.price.value}`,
          size: "XXL",
          weight: "Medium",
          align: "Left",
          color: "Gray 900",
        }}
        rating={5}
      />
      <Reviews
        entityId="ENTITY_ID_HERE"
        titleProps={{
          text: "Recent Reviews",
          rank: "2",
          fontWeight: "Bold",
          color: "Gray 900",
        }}
        reviewContentTextProps={{
          size: "S",
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
          size: "M",
          color: "Gray 900",
          align: "Left",
          weight: "Medium",
        }}
      />
      <ProductList imageUrls={[]} />
    </Main>
  );
}
