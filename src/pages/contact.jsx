import React from "react";
import {
  ContactSection,
  LegalSection,
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";

const ContackPage = () => {
  return (
    <>
      <Seo title="Contact" useTitleTemplate={true} noIndex={true} />
      <Page>
        <ContactSection sectionId="github" heading="Contact" />
      </Page>
    </>
  );
};

export default ContackPage;
