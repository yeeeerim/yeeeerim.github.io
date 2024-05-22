exports.createPages = async function ({ actions, graphql }) {
  const { data: projectData } = await graphql(`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/projectMd/**" } }
      ) {
        nodes {
          frontmatter {
            title
          }
        }
      }
    }
  `);
  projectData.allMarkdownRemark.nodes.forEach((node) => {
    const slug = node.frontmatter.title;
    actions.createPage({
      path: `/project/${slug}/`,
      component: require.resolve(`./src/templates/project/index.tsx`),
      context: { slug: slug },
    });
  });

  const { data: diaryData } = await graphql(`
    query {
      allArticle {
        articles: nodes {
          slug
        }
      }
    }
  `);

  diaryData.allArticle.articles.forEach((node) => {
    const slug = node.slug;
    actions.createPage({
      path: `${slug.replace("diarys", "diary")}`,
      component: require.resolve(`./src/templates/diary/index.tsx`),
      context: { slug: slug },
    });
  });
};
