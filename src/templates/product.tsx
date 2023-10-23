import { GetPath, TemplateConfig, TemplateProps } from "@yext/pages";
import Main from "../components/common/Main";
import Page from "../components/common/Page";
import Footer from "../components/molecules/Footer";
import Header from "../components/molecules/Header";
import ImageGallery from "../components/molecules/ImageGallery";
import ProductOverview from "../components/molecules/ProductOverview";
import Reviews from "../components/molecules/Reviews";
import ProductCardGrid from "../components/organisms/ProductCardGrid";
import "../index.css";

export const config: TemplateConfig = {
  stream: {
    $id: "product",
    localization: { locales: ["en"] },
    fields: ["name", "c_productDescription", "price", "slug", "photoGallery"],
    filter: { entityTypes: ["product"] },
  },
};
export const getPath: GetPath<TemplateProps> = ({
  document,
}: TemplateProps) => {
  return document.slug;
};

export default function Product({ document }: TemplateProps) {
  return (
    <Page>
      <Header />
      <Main className="min-h-[calc(100vh-384px)]">
        <ImageGallery images={document.photoGallery} />
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
            text: `$ ${document.price.value}`,
            size: "XL",
            weight: "Medium",
            align: "Left",
            color: "Gray 900",
          }}
          rating={5}
        />
        <Reviews />
        <ProductCardGrid
          products={[
            {
              name: "Product A",
              slug: "#",
              photoGallery: [
                {
                  image: {
                    url: "https://placehold.co/300x300",
                    height: 300,
                    width: 300,
                  },
                },
              ],
              price: { value: 99 },
            },
            {
              name: "Product B",
              slug: "#",
              photoGallery: [
                {
                  image: {
                    url: "https://placehold.co/300x300",
                    height: 300,
                    width: 300,
                  },
                },
              ],
              price: { value: 0 },
            },
            {
              name: "Product C",
              slug: "#",
              photoGallery: [
                {
                  image: {
                    url: "https://placehold.co/300x300",
                    height: 300,
                    width: 300,
                  },
                },
              ],
              price: { value: 99 },
            },
            {
              name: "Product D",
              slug: "#",
              photoGallery: [
                {
                  image: {
                    url: "https://placehold.co/300x300",
                    height: 300,
                    width: 300,
                  },
                },
              ],
              price: { value: 99 },
            },
          ]}
        />
      </Main>
      <Footer />
    </Page>
  );
}
