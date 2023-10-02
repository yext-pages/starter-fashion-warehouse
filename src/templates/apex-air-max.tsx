import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import Container from "../components/atoms/Container";
import Heading from "../components/atoms/Heading";
import Main from "../components/atoms/Main";
import Page from "../components/atoms/Page";
import ImageGallery from "../components/molecules/ImageGalleryCmpt";
import ProductCard from "../components/molecules/ProductCard";
import ProductList from "../components/molecules/ProductListCmpt";
import ProductOverview from "../components/molecules/ProductOverviewCmpt";
import "../index.css";

export const config: TemplateConfig = {
  stream: {
    $id: "apex-air-max",
    localization: { locales: ["en"] },
    fields: ["name", "c_productDescription", "price", "slug"],
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
    <>
      <Container layout="column">
        <Container>
          <Heading
            rank="4"
            size="L"
            color="Gray 900"
            fontWeight="Bold"
            text="Customers also purchased"
            align="Left"
          />
        </Container>
        <Container
          layout="grid"
          className="mt-6 gap-x-6 gap-y-12 lg:grid-cols-4 xl:gap-x-8"
        >
          <ProductCard
            name="Basic Tee"
            href="#"
            imageUrl="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
            imageAlt="Front of men's Basic Tee in black."
            price="$35"
            color="Black"
          />
          <ProductCard
            name="Basic Tee"
            href="#"
            imageUrl="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg"
            imageAlt="Front of men's Basic Tee in white."
            price="$35"
            color="Aspen White"
          />
          <ProductCard
            name="Basic Tee"
            href="#"
            imageUrl="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg"
            imageAlt="Front of men's Basic Tee in charcoal."
            price="$35"
            color="Charcoal"
          />
          <ProductCard
            name="Basic Tee"
            href="#"
            imageUrl="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg"
            imageAlt="Front of men's Basic Tee in iso dots."
            price="$35"
            color="Iso Dots"
          />
        </Container>
      </Container>
      <Page>
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
          <ProductList imageUrls={[]} />
        </Main>
      </Page>
    </>
  );
}
