import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { GatsbyImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";
import { useLocalDataSource } from "../../components/project/data";
import { CalendarOutlined, LinkOutlined, ToolFilled } from "@ant-design/icons";

const ProjectDetail = ({ title }: { title: string }) => {
  const [markdown, setMarkdown] = useState("");
  const response = useLocalDataSource();
  const { team, personal } = response.allProjectJson.sections[0].project;
  const data = team.find((item) => item.name === title);
  if (!data) return null;

  useEffect(() => {
    fetch(`/assets/projects/${data.name}/index.md`)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <DiaryDetailStyled>
      <article className={"Article"}>
        <div className={"Breadcrumb"}>
          <Link to={"/project"} title="Back">
            <span className={"BackArrow"}>&#10094;</span>
            All Projects
          </Link>
        </div>
        <section className={"Header"}>
          <span className={"Category"}>{data.category}</span>
          <h1>{data.title}</h1>
          <div className={"Date"}>
            <CalendarOutlined style={{ marginBottom: "2px" }} />
            <span className="text">{`${data.date}`}</span>
          </div>
          <div className={"Tag"}>
            <ToolFilled style={{ color: "#aaa" }} />
            <div>
              {data.tags &&
                data.tags.map((keyword, key) => {
                  return (
                    <span key={key} className={"Keyword"}>
                      {keyword}
                    </span>
                  );
                })}
            </div>
          </div>
          <div className={"Link"}>
            <LinkOutlined style={{ marginTop: "5px" }} />
            <ul>
              {data.links?.map((item, index) => {
                return (
                  <li>
                    <Link to={item.url} target="_blank">
                      {item.url}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        {data.image && data.image.src && (
          <section className={"Banner"}>
            <GatsbyImage
              image={data.image.src?.childImageSharp.gatsbyImageData}
              alt={data.image.alt || "image"}
              imgClassName={"BannerImage"}
            />
          </section>
        )}
        <section className={"Body"}>
          <div className={"Content"}>
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </section>
      </article>
    </DiaryDetailStyled>
  );
};

export default ProjectDetail;

const DiaryDetailStyled = styled.div`
  /* MarkDown Style */
  code {
    background: rgba(135, 131, 120, 0.15);
    color: #eb5757;
    padding: 2px 4px;
    font-size: 0.8rem;
  }
  ol > li::marker {
    color: #009a87;
  }
  ol > li > ol {
    list-style: lower-alpha;
  }
  img {
    width: 100%;
  }
  h2 {
    color: #009a87;
    margin: 25px 0 10px;
  }
  a {
    color: #7c96db;
    text-decoration: underline;
  }
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
      padding-top: 5px;
      padding-bottom: 5px;
    }
    ol,
    ul {
      padding: 5px 0px 5px 20px;
    }
  }
  /* MarkDown Style */

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

  .Article {
    width: 100%;
    height: 100%;
    max-width: 740px;
    margin: 0 auto;
    padding: var(--page-padding);
  }

  .Article .Header,
  .Article .Banner,
  .Article .Body,
  .Article .Footer {
    margin-bottom: 3rem;
  }

  .Article .Category {
    display: block;
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: +1px;
    color: var(--subtext-color);
  }

  .Article .Date {
    display: flex;
    column-gap: 5px;
    align-items: center;
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: +1px;
    color: var(--subtext-color);
    .text {
      padding: 0.12rem 0.375rem;
    }
  }

  .Article .Tag {
    display: flex;
    column-gap: 5px;
    align-items: center;
  }

  .Article .Link {
    color: #aaa;
    display: flex;
    align-items: start;

    & > ul {
      padding: 0.12rem 0.375rem;
      list-style: none;
      margin: 0;
      li {
        font-size: 0.8rem;
        a {
          color: #7c96db;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  .Article .Banner > div {
    width: 100%;
    height: 400px;
  }

  .Article .BannerImage {
    border-radius: var(--border-radius);
    margin-bottom: 0;
  }

  .Article .Body .Content {
    font-size: 0.9rem;
    line-height: 1.85rem;
    margin-bottom: 3rem;
  }

  .Article .Header .Keyword {
    font-size: 0.775rem;
    background-color: #fcffd8b0;
    color: #000;
    padding: 0.12rem 0.375rem;
    margin-right: 0.3rem;
    border-radius: 0.3rem;
  }

  .Article .Footer {
    border-top: 3px solid var(--tertiary-color);
    padding-top: 3rem;
  }

  .Article img {
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

  .Article figure {
    margin: 2rem 0;
  }

  .Article figure > figcaption {
    margin-top: -1rem;
    text-align: center;
    font-size: 0.875rem;
    color: var(--subtext-color);
  }
`;
