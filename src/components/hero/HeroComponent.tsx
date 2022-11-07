import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Animation } from "gatsby-theme-portfolio-minimal/src/components/Animation";
import { Section } from "gatsby-theme-portfolio-minimal/src/components/Section";
import { SocialProfiles } from "gatsby-theme-portfolio-minimal/src/components/SocialProfiles";
import { useLocalDataSource } from "./data";
import { PageSection } from "gatsby-theme-portfolio-minimal/src/types";
import { HeroStyled } from "./HeroStyled";

export function HeroSection(props: PageSection): React.ReactElement {
  const response = useLocalDataSource();
  const data = response.allHeroJson.sections[0];

  return (
    <Animation type="fadeUp" delay={400}>
      <HeroStyled>
        <Section anchor={props.sectionId} additionalClasses={["HeroContainer"]}>
          {data.heroPhoto?.src && (
            <div className="heroImageCont">
              <GatsbyImage
                className="heroImage"
                image={data.heroPhoto.src.childImageSharp.gatsbyImageData}
                alt={data.heroPhoto.alt || `Profile Image`}
                loading="eager"
              />
            </div>
          )}
          <div className="Hero">
            <div className="Intro">
              {data.intro && <span className="ImagePrefix">{data.intro}</span>}
              {data.image?.src && (
                <Animation
                  className="Image"
                  type="waving-hand"
                  duration={2500}
                  iterationCount={3}
                >
                  <GatsbyImage
                    image={data.image.src.childImageSharp.gatsbyImageData}
                    alt={data.image.alt || `Intro Image`}
                    loading="eager"
                  />
                </Animation>
              )}
            </div>
            <h1 className="Title">{data.title}</h1>
            <h2 className="Subtitle">
              {data.subtitle.prefix}
              <u>{data.subtitle.highlight}</u>
              {data.subtitle.suffix}
            </h2>
            <p>{data.description}</p>
            <Animation type="fadeLeft" delay={600}>
              <SocialProfiles
                from={data.socialProfiles.from}
                showIcon={data.socialProfiles.showIcons}
              />
            </Animation>
          </div>
        </Section>
      </HeroStyled>
    </Animation>
  );
}
