import { graphql, useStaticQuery } from "gatsby";
import { ImageObject } from "gatsby-theme-portfolio-minimal/src/types";

enum LinkType {
  External = "external",
  Github = "github",
}

export interface Project {
  category?: string;
  title: string;
  description: string;
  image: ImageObject & { linkTo?: string };
  tags?: string[];
  links?: {
    type: LinkType;
    url: string;
  }[];
  visible: boolean;
}

interface ProjectSectionQueryResult {
  allProjectJson: {
    sections: {
      project: { team: Project[]; personal: Project[] };
    }[];
  };
}

export const useLocalDataSource = (): ProjectSectionQueryResult => {
  return useStaticQuery(graphql`
    query ProjectSectionQuery {
      allProjectJson {
        sections: nodes {
          project {
            team {
              category
              description
              image {
                alt
                linkTo
                src {
                  childImageSharp {
                    gatsbyImageData(width: 400)
                  }
                }
              }
              links {
                type
                url
              }
              tags
              title
              visible
            }
            personal {
              category
              description
              image {
                alt
                linkTo
                src {
                  childImageSharp {
                    gatsbyImageData(width: 400)
                  }
                }
              }
              links {
                type
                url
              }
              tags
              title
              visible
            }
          }
        }
      }
    }
  `);
};
