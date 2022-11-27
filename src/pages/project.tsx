import { Page, Seo } from "gatsby-theme-portfolio-minimal";
import React from "react";
import ProjectSection from "../components/project/ProjectComponent";

const ProjectPage = () => {
  return (
    <>
      <Seo title="Project" useTitleTemplate={true} noIndex={true} />
      <Page>
        <ProjectSection />
      </Page>
    </>
  );
};

export default ProjectPage;
