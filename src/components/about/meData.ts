import { graphql, useStaticQuery } from "gatsby";

interface MeType {
  allMarkdownRemark: {
    edges: {
      node: {
        html: string;
      };
    }[];
  };
}

export const useMeDataSource = (): MeType => {
  return useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/aboutMd/**" } }
      ) {
        edges {
          node {
            html
          }
        }
      }
    }
  `);
};
