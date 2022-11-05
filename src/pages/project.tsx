import { Page, Seo } from "gatsby-theme-portfolio-minimal";
import React from "react";

const ProjectPage = () => {
  return (
    <>
      <Seo title="Project" useTitleTemplate={true} noIndex={true} />
      <Page>
        <>Project</>
      </Page>
    </>
  );
};

export default ProjectPage;
