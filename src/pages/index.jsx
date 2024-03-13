import React from "react";
import { Seo } from "gatsby-theme-portfolio-minimal";
import { HeroSection } from "../components/hero";
import { Page } from "../components/page";

const IndexPage = () => {
  return (
    <>
      <Seo title="About Yerim" />
      <Page>
        <HeroSection sectionId="hero" />
      </Page>
    </>
  );
};

export default IndexPage;
