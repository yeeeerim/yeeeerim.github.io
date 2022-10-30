import React from "react";
import { LegalSection, Page, Seo } from "gatsby-theme-portfolio-minimal";

const AboutPage = () => {
  return (
    <>
      <Seo title="About Me" useTitleTemplate={true} noIndex={true} />
      <Page>
        <LegalSection sectionId="privacy" heading="About Me" />
      </Page>
    </>
  );
};

export default AboutPage;
