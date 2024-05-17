import { Seo } from "gatsby-theme-portfolio-minimal";
import React from "react";
import DiarySection from "../../components/diary/DiarySection";
import DiaryDetailSection from "../../components/diary/detail/DiaryDetailSection";
import { Page } from "../../components/page";

const DiaryPage = (props) => {
  const title = new URLSearchParams(props.location.search).get("title");

  if (title) {
    return (
      <>
        <DiaryDetailSection title={title} />
      </>
    );
  }
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
