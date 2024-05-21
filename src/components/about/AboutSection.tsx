import styled from "@emotion/styled";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useLocalDataSource } from "./data";
import { useMeDataSource } from "./meData";

const AboutSection = () => {
  const response = useLocalDataSource();
  const markdownData = useMeDataSource();
  let markdown = "";
  if (markdownData) {
    markdown = markdownData.allMarkdownRemark.edges[0].node.html;
  }
  const data = response.allAboutJson.sections[0];

  return (
    <AboutStyled>
      {/* Profile */}
      <div className="profile">
        <div className="title">About</div>
        <div className="content">
          {/* {data.profile.image.src && (
            <GatsbyImage
              className="img"
              image={data.profile.image.src.childImageSharp.gatsbyImageData}
              alt={data.profile.image.alt || `Profile ${data.profile.name}`}
            />
          )} */}
          <CodeStyled>
            <div dangerouslySetInnerHTML={{ __html: markdown }} />
          </CodeStyled>
        </div>
      </div>

      {/* TimeStamp */}
      <div className="timestamp">
        <div className="title">Timestamp</div>
        <div className="content">
          <div className="graph">
            <div className="line" />
            <div className="time-line">
              <ul>
                {data.timestamp.map((item, index) => {
                  return (
                    <li key={`timestamp-${index}`}>
                      <div className="circle" />
                      <div className="dateAndDesc">
                        <div className="date">{item.date}</div>
                        <div className="descAndLogo">
                          <div className="desc">{item.desc}</div>
                          <div className="logo">
                            {item.logo && item.logo.src && (
                              <GatsbyImage
                                image={
                                  item.logo.src.childImageSharp
                                    .gatsbyImageData || ""
                                }
                                alt={item.logo.alt || ""}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AboutStyled>
  );
};

export default AboutSection;

const AboutStyled = styled.div`
  width: 100%;
  height: 100%;
  max-width: var(--page-width);
  margin: 0 auto;
  padding: var(--page-padding);
  justify-content: space-between;
  color: #aaa;

  /* profile */
  .profile {
    margin-bottom: 70px;
    .content {
      display: flex;
      flex-direction: row;
      column-gap: 40px;
      margin: 30px 0;
      align-items: center;
      .img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
      }
      .desc {
        list-style: square;
        line-height: 26px;
      }
      @media (max-width: 767px) {
        flex-direction: column;
        .desc {
          padding-left: 20px;
        }
      }
    }
  }

  /* timestamp */
  .timestamp {
    .content {
      /* background: rgb(45, 45, 45); */
      margin: 30px 0;
      font-size: 0.9rem;
      border-radius: 10px;
      max-width: 825px;
      padding: 1px 5px;
      .graph {
        position: relative;
        .line {
          width: 3px;
          height: 300px;
          background-color: #a49b8b;
          margin: 20px 20px 20px 25px;
          @media (max-width: 767px) {
            height: 500px;
          }
        }
        .time-line {
          position: absolute;
          top: 0;
          ul {
            padding: 0;
            li {
              list-style: none;
              display: flex;
              align-items: center;
              padding: 0 0 25px 0;
              .circle {
                border-radius: 50%;
                background-color: #a49b8b;
                height: 16px;
                width: 16px;
                margin: 0 15px 0 19px;
              }
              .dateAndDesc {
                display: flex;
                flex-direction: row;
                .date {
                  width: 300px;
                }
                .logo {
                  margin: 2px 10px 0 10px;
                  width: 100px;
                  align-items: center;
                  display: flex;
                }
                .descAndLogo {
                  display: flex;
                }
                @media (max-width: 767px) {
                  flex-direction: column;
                }
              }
            }
          }
        }
      }
    }
  }

  /* common */
  .title {
    color: #ddd;
    display: inline;
    font-size: 1.6rem;
    font-weight: 600;
  }
`;

const CodeStyled = styled.div`
  div {
    max-width: 90vw;
  }
  pre {
    border-radius: 10px;
    background-color: rgb(45, 45, 45);
    line-height: 0.9rem;
  }
  code {
    font-size: 0.8rem;
  }
  .token.string {
    color: #95c7ae;
  }
  .token.keyword {
    color: #ae95c7;
  }
  a {
    color: #7c96db;
    &:hover {
      text-decoration: underline;
    }
  }
`;
