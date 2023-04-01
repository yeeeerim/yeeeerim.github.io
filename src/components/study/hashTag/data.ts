import { graphql, useStaticQuery } from "gatsby";
import { ImageObject } from "gatsby-theme-portfolio-minimal/src/types";

interface HashSectionQueryResult {
  allStudyJson: {
    sections: {
      button: {
        initiallyShownInterests: number;
        label: string;
        visible: boolean;
      };
      hashtag: {
        image: ImageObject;
        label: string;
      }[];
    }[];
  };
}

export const useLocalDataSource = (): HashSectionQueryResult => {
  return useStaticQuery(graphql`
    query StudySectionQuery {
      allStudyJson {
        sections: nodes {
          button {
            initiallyShownInterests
            label
            visible
          }
          hashtag {
            image {
              alt
              src {
                childImageSharp {
                  gatsbyImageData(width: 20, height: 20)
                }
              }
            }
            label
          }
        }
      }
    }
  `);
};
