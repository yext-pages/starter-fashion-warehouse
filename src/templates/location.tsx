import AspectImage from "@/components/AspectImage";
import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import FlexContainer from "../components/FlexContainer";
import MainLayout from "../components/MainLayout";
import "../index.css";

export const config: TemplateConfig = {
  stream: {
    $id: "location",
    localization: { locales: ["en"] },
    fields: ["slug"],
    filter: { entityTypes: ["location"] },
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

export default function Location({ document, __meta }: TemplateProps) {
  return (
    <MainLayout backgroundColor="#FFFFFF">
      <FlexContainer>
        <AspectImage
          image={{
            image: {
              url: "https://a.mktgcdn.com/p-sandbox/SPRRm-cAcTNOv8T8o2EpJ3z5N1nl0x3yL8YAK753KVc/300x300.png",
              width: 150,
              height: 150,
              alternateText: "Placeholder",
            },
          }}
        />
      </FlexContainer>
    </MainLayout>
  );
}
