import React from "react";
import { Page, Seo } from "gatsby-theme-portfolio-minimal";
import AboutSection from "../components/about/AboutSection";

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
