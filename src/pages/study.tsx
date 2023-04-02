import { Page, Seo } from "gatsby-theme-portfolio-minimal";
import React from "react";
import StudySection from "../components/study/StudySection";

const StudyPage = () => {
  return (
    <>
      <Seo title="Study" useTitleTemplate={true} noIndex={true} />
      <Page>
        <StudySection />
      </Page>
    </>
  );
};

export default StudyPage;
