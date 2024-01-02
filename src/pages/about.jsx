import React from "react";
import { Seo } from "gatsby-theme-portfolio-minimal";
import AboutSection from "../components/about/AboutSection";
import { Page } from "../components/page";

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
