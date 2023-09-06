import "../index.css";
import {
  GetPath,
  TemplateProps,
  TemplateConfig,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";
import MainLayout from "../components/MainLayout";

export const config: TemplateConfig = {
  stream: {
    $id: "location",
    fields: ["name", "slug", "address", "hours", "photoGallery", "phoneNumber"],
    filter: {
      entityTypes: ["location"],
    },
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ?? document.entityId.toString();
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

export default function Blog({ document, __meta }: TemplateProps) {
  return (
    <MainLayout backgroundColor="#FFFFFF">
      <></>
    </MainLayout>
  );
}
