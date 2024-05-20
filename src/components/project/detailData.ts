import { graphql, useStaticQuery } from "gatsby";

interface ProjectSectionQueryResult {
  allMarkdownRemark: {
    edges: {
      node: {
        frontmatter: { title: string };
        html: string;
      };
    }[];
  };
}

export const useProjectDetailDataSource = (): ProjectSectionQueryResult => {
  return useStaticQuery(graphql`
    query projectDetailQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/projectMd/**" } }
      ) {
        edges {
          node {
            frontmatter {
              title
            }
            html
          }
        }
      }
    }
  `);
};
