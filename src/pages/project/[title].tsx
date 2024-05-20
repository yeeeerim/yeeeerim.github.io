import React from "react";
import { Page } from "../../components/page";
import ProjectDetail from "../../components/project/ProjectDetail";
import { Seo } from "gatsby-theme-portfolio-minimal";

const Index = (props: any) => {
  const { title } = props;

  return (
    <>
      <Seo title={title} useTitleTemplate={true} noIndex={true} />
      <Page>
        <ProjectDetail title={title} />
      </Page>
    </>
  );
};

export default Index;
