import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { useSiteMetadata } from "gatsby-theme-portfolio-minimal/src/hooks/useSiteMetadata";
import { useArticleData } from "./data";
import { Seo } from "gatsby-theme-portfolio-minimal";
import { Page } from "../../../components/page";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const DiaryDetailSection = ({ slug }: { slug: string }) => {
  const articles = useArticleData();
  const article = articles.find((a) => a.slug === slug);

  if (!article) return <div>작성된 글이 없습니다.</div>;

  const dateNow = dayjs();
  const relativeTime = dateNow.from(article.date, true);

  return (
    <>
      <Seo
        title={article.title}
        description={article.description || undefined}
        useTitleTemplate={true}
      />
      <Page>
        <DiaryDetailStyled className={"Article"}>
          <div className={"Breadcrumb"}>
            <Link to={"/diary"} title="Back To Article Listing">
              <span className={"BackArrow"}>&#10094;</span>
              All Diaries
            </Link>
          </div>
          <section className={"Header"}>
            <span className={"Category"}>{article.categories.join(" / ")}</span>
            <h1>{article.title}</h1>
            <div className={"Details"}>
              {article.date}
              <span className={"ReadingTime"}>{relativeTime} ago</span>
            </div>
          </section>
          {article.banner && article.banner.src && (
            <section className={"Banner"}>
              <GatsbyImage
                image={article.banner.src.childImageSharp.gatsbyImageData}
                alt={article.banner.alt || `Image for ${article.title}`}
                imgClassName={"BannerImage"}
              />
              {article.banner.caption && (
                <span
                  className={"BannerCaption"}
                  dangerouslySetInnerHTML={{ __html: article.banner.caption }}
                />
              )}
            </section>
          )}
          <section className={"Body"}>
            <div
              className={"Content"}
              dangerouslySetInnerHTML={{ __html: article.body }}
            />
            {article.keywords &&
              article.keywords.map((keyword, key) => {
                return (
                  <span key={key} className={"Keyword"}>
                    {keyword}
                  </span>
                );
              })}
          </section>
          <section className={"Footer"}>
            <AuthorSnippet />
          </section>
        </DiaryDetailStyled>
      </Page>
    </>
  );
};

function AuthorSnippet(): React.ReactElement {
  const { author, avatar, bio } = useSiteMetadata();
  return (
    <AuthorSnippetStyled className={"AuthorSnippet"}>
      <GatsbyImage
        image={avatar.childImageSharp.gatsbyImageData}
        alt={author}
        className={"Avatar"}
      />
      <div className={"Description"}>
        <span className={"WrittenBy"}>
          Written By <u>{author}</u>
        </span>
        <p className={"Bio"}>{bio}</p>
      </div>
    </AuthorSnippetStyled>
  );
}

const DiaryDetailStyled = styled.article`
  blockquote {
    border-left: 1px;
    border-style: solid;
    border-color: #eb5757;
    border-width: 3px;
    border-top: 0;
    border-right: 0;
    border-bottom: 0;
    margin: 0;
    padding-left: 20px;
    background-color: rgba(135, 131, 120, 0.15);
    font-size: 1rem;
    p {
      padding: 5px 15px 5px 0;
    }
    ol,
    ul {
      padding: 5px 0px 5px 20px;
      li {
        a {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 100%;
          margin-bottom: -10px;
        }
      }
    }
    a {
      color: #7c96db;
      text-decoration: underline;
    }
  }
  .language-text {
    background: rgba(135, 131, 120, 0.15);
    color: #eb5757;
    padding: 2px 4px;
  }
  .Breadcrumb {
    display: inline-block;
    margin-bottom: 2rem;
    padding: 0 0.5rem;
    background-color: var(--subtext-color);
    border-radius: var(--border-radius);
    font-size: 12px;
    font-weight: 400;
  }

  .Breadcrumb a {
    letter-spacing: +1px;
  }

  .Breadcrumb a,
  .Breadcrumb .BackArrow {
    color: var(--background-color);
  }

  .Breadcrumb .BackArrow {
    margin-right: 0.25rem;
  }

  width: 100%;
  height: 100%;
  max-width: 740px;
  margin: 0 auto;
  padding: var(--page-padding);

  .Header,
  .Banner,
  .Body,
  .Footer {
    margin-bottom: 3rem;
  }

  .Category {
    display: block;
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: +1px;
    color: var(--subtext-color);
  }

  .Details {
    font-size: 0.875rem;
    letter-spacing: +0.5px;
  }

  .ReadingTime {
    margin-left: 0.5rem;
  }

  .ReadingTime::before {
    content: "–";
    margin-right: 0.5rem;
  }

  .BannerImage {
    border-radius: var(--border-radius);
    margin-bottom: 0;
  }

  .BannerCaption {
    display: block;
    font-size: 0.875rem;
    letter-spacing: +0.5px;
    text-align: center;
  }

  .Body .Content {
    font-size: 1.125rem;
    line-height: 2rem;
    margin-bottom: 3rem;
  }

  .Body .Keyword {
    font-size: 0.875rem;
    background-color: var(--tertiary-color);
    color: var(--subtext-color);
    padding: 0.125rem 0.375rem;
    margin-right: 0.5rem;
    border-radius: 0.5rem;
  }

  .Footer {
    border-top: 3px solid var(--tertiary-color);
    padding-top: 3rem;
  }

  img {
    max-height: 660px;
    object-fit: cover;
    border-radius: var(--border-radius);
  }

  :global(.gatsby-resp-image-wrapper),
  :global(.gatsby-resp-image-background-image) {
    margin: 2rem 0;
    max-height: 660px;
    overflow-y: hidden;
  }

  figure {
    margin: 2rem 0;
  }

  figure > figcaption {
    margin-top: -1rem;
    text-align: center;
    font-size: 0.875rem;
    color: var(--subtext-color);
  }
`;

const AuthorSnippetStyled = styled.div`
  &.AuthorSnippet {
    width: 100%;
    max-width: 660px;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    .Avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }

    .Description {
      width: 100%;
      margin-top: 1rem;
    }

    .WrittenBy {
      font-size: 0.875rem;
      letter-spacing: +0.5px;
      color: var(--subtext-color);
    }

    .Bio {
      margin: 0.5rem 0;
    }
  }

  @media screen and (min-width: 768px) {
    &.AuthorSnippet {
      padding: var(--page-padding);
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .Description {
        width: 100%;
        max-width: 27.5rem;
      }
    }
  }
`;

export default DiaryDetailSection;
