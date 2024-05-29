import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { GatsbyImage } from "gatsby-plugin-image";
import { useLocalDataSource } from "../../components/project/data";
import { CalendarOutlined, LinkOutlined, ToolFilled } from "@ant-design/icons";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useProjectDetailDataSource } from "./detailData";

SwiperCore.use([Navigation, Pagination]);

const ProjectDetail = ({ title }: { title: string }) => {
  const response = useLocalDataSource();
  const info = useProjectDetailDataSource();
  const markdownData = info.allMarkdownRemark.edges.filter((item) => {
    return item.node.frontmatter.title === title;
  })[0];
  let markdown = "";

  if (markdownData) {
    markdown = markdownData.node.html;
  }

  const { team, personal } = response.allProjectJson.sections[0].project;
  let data = team.find((item) => item.name === title);
  if (!data) {
    data = personal.find((item) => item.name === title);

    if (!data) return null;
  }

  return (
    <ProjectDetailStyled className={"Article"}>
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
                <li key={index}>
                  <Link to={item.url} target="_blank">
                    {item.url}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      {data.banners && (
        <section className={"Banner"}>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            scrollbar={{ draggable: true }}
            navigation
            loop
            pagination={{ clickable: true }}
          >
            {data.banners.map((item, index) => {
              if (item.src)
                return (
                  <SwiperSlide key={index}>
                    <GatsbyImage
                      image={item.src.childImageSharp.gatsbyImageData}
                      alt={item.alt || "image"}
                      imgClassName={"BannerImage"}
                    />
                  </SwiperSlide>
                );
            })}
          </Swiper>
          {data.banners.length > 1 && <sub>👉 좌우로 넘겨주세요</sub>}
        </section>
      )}

      <section className={"Body"}>
        <div className={"Content"}>
          <div dangerouslySetInnerHTML={{ __html: markdown }} />
        </div>
      </section>
    </ProjectDetailStyled>
  );
};

export default ProjectDetail;

const ProjectDetailStyled = styled.article`
  width: 100%;
  height: 100%;
  max-width: 740px;
  margin: 0 auto;
  padding: var(--page-padding);

  img {
    max-height: 660px;
    object-fit: cover;
    border-radius: var(--border-radius);
  }

  .Category {
    display: block;
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: +1px;
    color: var(--subtext-color);
  }

  .Date {
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

  .Tag {
    display: flex;
    column-gap: 5px;
    align-items: center;
  }

  .Link {
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

  .Header,
  .Banner,
  .Body,
  .Footer {
    margin-bottom: 3rem;
  }

  .BannerImage {
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    margin-bottom: 0;
  }

  .Breadcrumb {
    display: inline-block;
    margin-bottom: 2rem;
    padding: 0 0.5rem;
    background-color: var(--subtext-color);
    border-radius: var(--border-radius);
    font-size: 12px;
    font-weight: 400;

    a {
      letter-spacing: +1px;
    }

    a,
    .BackArrow {
      color: var(--background-color);
    }

    .BackArrow {
      margin-right: 0.25rem;
    }
  }

  .Banner {
    width: 100%;
    height: 400px;
    & > div {
      height: 100%;
    }
    .swiper-pagination-bullet {
      background-color: white;
      box-shadow: 0px 0px 4px #00000075;
      opacity: 100;
    }
    .swiper-pagination-bullet-active {
      background-color: #009a87;
    }
    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
    }
    .swiper-button-next,
    .swiper-button-prev {
      color: #fff;
      text-shadow: 0px 0px 10px #0000009e;
    }
  }

  .Body .Content {
    font-size: 0.9rem;
    line-height: 1.85rem;
    margin-bottom: 3rem;
  }

  .Header .Keyword {
    font-size: 0.775rem;
    background-color: #fcffd8b0;
    color: #000;
    padding: 0.12rem 0.375rem;
    margin-right: 0.3rem;
    border-radius: 0.3rem;
  }

  .Footer {
    border-top: 3px solid var(--tertiary-color);
    padding-top: 3rem;
  }

  /* MarkDown Style */
  .Content {
    p > code {
      background: rgba(135, 131, 120, 0.15);
      color: #eb5757;
      padding: 2px 4px;
      font-size: 0.8rem;
      border-radius: 4px;
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

    deckgo-highlight-code {
      font-size: 0.8rem;
      line-height: 20px;
    }
  }

  /* MarkDown Style */
`;
