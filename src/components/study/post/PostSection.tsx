import {
  ArticleCard,
  ArticleCardSkeleton,
} from "gatsby-theme-portfolio-minimal/src/components/ArticleCard";
import { Slider } from "gatsby-theme-portfolio-minimal/src/components/Slider";
import { useLocalDataSource } from "gatsby-theme-portfolio-minimal/src/sections/Articles/data";
import React from "react";
import { Animation } from "../../Animation";
import "./post.css";

export function PostSection(): React.ReactElement {
  const response = useLocalDataSource();
  const [articles, setArticles] = React.useState<ArticleCard[]>([]);

  async function collectArticlesFromSources(): Promise<ArticleCard[]> {
    const articleList: ArticleCard[] = [];

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

    return articleList
      .slice()
      .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  }

  React.useEffect(() => {
    (async function () {
      setArticles(await collectArticlesFromSources());
    })();
  }, []);

  return (
    <Animation type="fadeUp" delay={200}>
      <Slider additionalClasses={["Articles"]}>
        {articles.length > 0
          ? articles.slice(0, 3).map((article, key) => {
              return <ArticleCard key={key} data={article} />;
            })
          : [...Array(3)].map((_, key) => {
              return <ArticleCardSkeleton key={key} />;
            })}
      </Slider>
    </Animation>
  );
}

export default PostSection;
