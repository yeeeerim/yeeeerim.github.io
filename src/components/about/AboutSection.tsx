import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useLocalDataSource } from "./data";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

const AboutSection = () => {
  const response = useLocalDataSource();
  const data = response.allAboutJson.sections[0];
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    try {
      fetch(`/assets/me.md`)
        .then((response) => response.text())
        .then((text) => setMarkdown(text));
    } catch (e) {
      setMarkdown("");
      console.error(e);
    }
  }, []);

  return (
    <AboutStyled>
      {/* Profile */}
      <div className="profile">
        <div className="title">Profile.</div>
        <div className="content">
          {data.profile.image.src && (
            <GatsbyImage
              className="img"
              image={data.profile.image.src.childImageSharp.gatsbyImageData}
              alt={data.profile.image.alt || `Profile ${data.profile.name}`}
            />
          )}
          <CodeStyled>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ className, children }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return match ? (
                    <SyntaxHighlighter
                      style={tomorrow}
                      language={match[1]}
                      PreTag="div"
                    >
                      {String(children)
                        .replace(/\n$/, "")
                        .replace(/\n&nbsp;\n/g, "")
                        .replace(/\n&nbsp\n/g, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <SyntaxHighlighter
                      style={tomorrow}
                      background="green"
                      language="textile"
                      PreTag="div"
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  );
                },
              }}
            >
              {markdown}
            </ReactMarkdown>
          </CodeStyled>
        </div>
      </div>

      {/* TimeStamp */}
      <div className="timestamp">
        <div className="title">Timestamp.</div>
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
      background: rgb(45, 45, 45);
      margin: 30px 0;
      font-size: 0.9rem;
      border-radius: 10px;
      max-width: 765px;
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
    color: #f7b000;
    display: inline;
    font-size: 1.6rem;
    font-weight: 600;
  }
`;

const CodeStyled = styled.div`
  font-size: 0.725rem;
  div {
    border-radius: 10px;
    max-width: 90vw;
  }
`;
