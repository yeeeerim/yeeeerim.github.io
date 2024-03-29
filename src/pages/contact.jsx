import React from "react";
import { ContactSection, Seo } from "gatsby-theme-portfolio-minimal";
import { Page } from "../components/page";

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
