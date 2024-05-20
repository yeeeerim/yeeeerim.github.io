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
    query meDataQuery {
      allMarkdownRemark(filter: { fileAbsolutePath: { glob: "**/about/**" } }) {
        edges {
          node {
            html
          }
        }
      }
    }
  `);
};
