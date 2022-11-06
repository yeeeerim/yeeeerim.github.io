import { graphql, useStaticQuery } from "gatsby";
import { SocialProfile } from "gatsby-theme-portfolio-minimal/src/components/SocialProfiles";
import { ImageObject } from "gatsby-theme-portfolio-minimal/src/types";

interface HeroSectionQueryResult {
  allHeroJson: {
    sections: {
      description: string;
      email: string;
      image: ImageObject;
      intro: string;
      heroPhoto: ImageObject;
      socialProfiles: {
        from: SocialProfile[];
        showIcons: boolean;
      };
      subtitle: {
        highlight: string;
        prefix: string;
        suffix: string;
      };
      title: string;
    }[];
  };
}

export const useLocalDataSource = (): HeroSectionQueryResult => {
  return useStaticQuery(graphql`
    query HeroSectionQuery {
      allHeroJson {
        sections: nodes {
          description
          heroPhoto {
            src {
              childImageSharp {
                gatsbyImageData(aspectRatio: 1)
              }
            }
            alt
          }
          image {
            alt
            src {
              childImageSharp {
                gatsbyImageData(width: 48, aspectRatio: 1)
              }
            }
          }
          intro
          socialProfiles {
            from
            showIcons
          }
          subtitle {
            highlight
            prefix
            suffix
          }
          title
        }
      }
    }
  `);
};
