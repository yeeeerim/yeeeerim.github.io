import React from "react";
import { LegalSection, Page, Seo } from "gatsby-theme-portfolio-minimal";
import AboutSection from "../components/about/AboutComponent";

const AboutPage = () => {
  return (
    <>
      <Seo title="About Me" useTitleTemplate={true} noIndex={true} />
      <Page>
        <AboutSection />
      </Page>
    </>
  );
};

export default AboutPage;
