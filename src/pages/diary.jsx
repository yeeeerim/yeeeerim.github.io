import { Seo } from "gatsby-theme-portfolio-minimal";
import React from "react";
import DiarySection from "../components/diary/DiarySection";
import { Page } from "../components/page";

const DiaryPage = () => {
  return (
    <>
      <Seo title="Diary" useTitleTemplate={true} noIndex={true} />
      <Page>
        <DiarySection />
      </Page>
    </>
  );
};

export default DiaryPage;
