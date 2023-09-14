import "../index.css";
import {
  GetPath,
  TemplateProps,
  TemplateConfig,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";
// import { AnalyticsProvider } from "@yext/sites-components";

export const config: TemplateConfig = {
  stream: {
    $id: "blog",
    fields: ["name", "slug"],
    filter: {
      entityTypes: ["blogStarter_blog"],
    },
    localization: {
      locales: ["en"],
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ?? document?.entityId.toString();
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

export default function Product({ document, __meta }: TemplateProps) {
  return <></>;
}
