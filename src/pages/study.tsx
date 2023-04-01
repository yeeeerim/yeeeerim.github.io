import { Page, Seo } from "gatsby-theme-portfolio-minimal";
import React from "react";
import { HashSection } from "../components/study/hashSection";

const StudyPage = () => {
  return (
    <>
      <Seo title="Study" useTitleTemplate={true} noIndex={true} />
      <Page>
        <HashSection sectionId="details" heading="# Hashtag" />
      </Page>
    </>
  );
};

export default StudyPage;
