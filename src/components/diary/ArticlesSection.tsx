import React from "react";
import { Animation } from "gatsby-theme-portfolio-minimal/src/components/Animation";
import { Slider } from "gatsby-theme-portfolio-minimal/src/components/Slider";
import { useSiteMetadata } from "gatsby-theme-portfolio-minimal/src/hooks/useSiteMetadata";
import { useMediumFeed } from "gatsby-theme-portfolio-minimal/src/sections/Articles/data";
import { PageSection } from "gatsby-theme-portfolio-minimal/src/types";
import styled from "@emotion/styled";
import { useLocalDataSource } from "./data";
import { ArticleCard } from "./ArticleCard";

enum ArticleSource {
  Medium = "medium",
  Blog = "blog",
}

interface ArticleSourceConfiguration {
  [ArticleSource.Medium]?: {
    profileUrl: string;
  };
  [ArticleSource.Blog]?: {
    valid: boolean;
  };
}

interface ArticlesSectionProps extends PageSection {
  sources: ArticleSource[];
}

export function ArticlesSection(
  props: ArticlesSectionProps
): React.ReactElement {
  const response = useLocalDataSource();
  const [articles, setArticles] = React.useState<ArticleCard[]>([]);
  const configuration = validateAndConfigureSources(props.sources);

  async function collectArticlesFromSources(
    configuration: ArticleSourceConfiguration
  ): Promise<ArticleCard[]> {
    const mediumConfig = configuration[ArticleSource.Medium];
    const blogConfig = configuration[ArticleSource.Blog];
    const articleList: ArticleCard[] = [];

    if (mediumConfig !== undefined) {
      const mediumArticles = await useMediumFeed(mediumConfig.profileUrl);
      if (mediumArticles.length > 0) {
        mediumArticles.forEach((article) => {
          articleList.push({
            category: article.categories[0],
            title: article.title,
            publishedAt: new Date(article.pubDate.replace(/-/g, "/")), // https://stackoverflow.com/a/5646753
            link: article.link,
          });
        });
      }
    }

    if (blogConfig !== undefined) {
      const blogArticles = response.allArticle.articles;
      if (blogArticles.length > 0) {
        blogArticles.forEach((article) => {
          articleList.push({
            category: article.categories[0],
            title: article.title,
            publishedAt: new Date(article.date.replace(/-/g, "/")),
            link: article.slug,
            readingTime: article.readingTime.text,
          });
        });
      }
    }

    return articleList
      .slice()
      .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  }

  React.useEffect(() => {
    (async function () {
      setArticles(await collectArticlesFromSources(configuration));
    })();
  }, []);

  return (
    <ArticleStyled>
      <Animation type="fadeUp" delay={0}>
        <div className="head">{props.heading}</div>
        <Slider additionalClasses={["Articles"]}>
          {articles.length > 0
            ? articles.slice(0, 3).map((article, key) => {
                return <ArticleCard key={key} data={article} />;
              })
            : [...Array(1)].map((_, key) => {
                return <div key={key}>작성된 글이 없습니다.</div>;
              })}
        </Slider>
      </Animation>
    </ArticleStyled>
  );
}

// validateAndConfigureSources: Sources for articles can be defined as props (e.g. sources=["Medium"])
// Currently, only Medium can be used as a source but it is thinkable to extend this approach to other
// sources (e.g. an integrated Markdown blog). To collect all articles from the source, there is a
// specific configuration needed for each source type. For example, to collect articles from Medium,
// we need the profile URL. This function is responsible for validating that at least one source is
// defined. It than adds the needed configuration properties to each source and returns the config.

function validateAndConfigureSources(
  sources: ArticleSource[]
): ArticleSourceConfiguration {
  const configuration: ArticleSourceConfiguration = {};

  if (sources.length > 0) {
    // Configure Medium
    if (sources.map((i) => i.toLowerCase()).includes(ArticleSource.Medium)) {
      const siteMetadata = useSiteMetadata();
      configuration[ArticleSource.Medium] = {
        profileUrl: siteMetadata.social.medium,
      };
    }

    // Configure Blog (actually no real configuration is required yet)
    if (sources.map((i) => i.toLowerCase()).includes(ArticleSource.Blog)) {
      configuration[ArticleSource.Blog] = { valid: true };
    }
  } else {
    throw new Error("No Source for Articles defined.");
  }

  return configuration;
}

const ArticleStyled = styled.div`
  .head {
    font-size: 24px;
    font-weight: 800;
  }
  .Articles {
    margin-top: 28px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`;
