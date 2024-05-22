import React from "react";
import { Page } from "../../components/page";
import ProjectDetail from "../../components/project/ProjectDetail";
import { Seo } from "gatsby-theme-portfolio-minimal";

interface Props {
  pageContext: {
    slug: string;
  };
}

const Index = (props: Props) => {
  const { pageContext } = props;

  return (
    <>
      <Seo title={pageContext.slug} useTitleTemplate={true} noIndex={true} />
      <Page>
        <ProjectDetail title={pageContext.slug} />
      </Page>
    </>
  );
};

export default Index;
