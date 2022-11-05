import { Page, Seo } from "gatsby-theme-portfolio-minimal";
import React from "react";

const DiaryPage = () => {
  return (
    <>
      <Seo title="Diary" useTitleTemplate={true} noIndex={true} />
      <Page>
        <>Diary</>
      </Page>
    </>
  );
};

export default DiaryPage;
