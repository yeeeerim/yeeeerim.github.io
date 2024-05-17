import { Seo } from "gatsby-theme-portfolio-minimal";
import React from "react";
import ProjectSection from "../../components/project/ProjectSection";
import { Page } from "../../components/page";
import ProjectDetail from "../../components/project/ProjectDetail";

const ProjectPage = (props) => {
  const title = new URLSearchParams(props.location.search).get("title");

  if (title) {
    return (
      <>
        <Seo title={title} useTitleTemplate={true} noIndex={true} />
        <Page>
          <ProjectDetail title={title} />
        </Page>
      </>
    );
  }
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
