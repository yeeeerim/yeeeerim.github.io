import React from "react";
import {
  // AboutSection,
  // ArticlesSection,
  // ContactSection,
  // InterestsSection,
  Page,
  // ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

import { HeroSection } from "../components/hero/HeroComponent";

const IndexPage = () => {
  return (
    <>
      <Seo title="About Yerim" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/* <HeroSection sectionId="hero" /> */}
        {/* <ArticlesSection
          sectionId="articles"
          heading="Latest Articles"
          sources={["Medium"]}
        />
        <AboutSection sectionId="about" heading="About Portfolio Minimal" />
        <InterestsSection sectionId="details" heading="Details" />
        <ProjectsSection sectionId="features" heading="Built-in Features" /> */}
      </Page>
    </>
  );
};

export default IndexPage;
