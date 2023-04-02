import styled from "@emotion/styled";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useLocalDataSource } from "./data";

const AboutSection = () => {
  const response = useLocalDataSource();
  const data = response.allAboutJson.sections[0];

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
          <div>
            <ul className="desc">
              <li>이름 : {data.profile.name}</li>
              <li>생년월일 : {data.profile.birthday}</li>
              <li>MBTI : {data.profile.mbti}</li>
              <li>취미 : {data.profile.hobby}</li>
              <li>자격증 : {data.profile.cert}</li>
            </ul>
          </div>
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
                      <div className="date">{item.date}</div>
                      <div className="desc">{item.desc}</div>
                      <div className="logo">
                        {item.logo && item.logo.src && (
                          <GatsbyImage
                            image={
                              item.logo.src.childImageSharp.gatsbyImageData ||
                              ""
                            }
                            alt={item.logo.alt || ""}
                          />
                        )}
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
      margin: 30px 0;
      .img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
      }
      .desc {
        list-style: square;
        line-height: 26px;
      }
    }
  }

  /* timestamp */
  .timestamp {
    .content {
      margin: 30px 0;
      .graph {
        position: relative;
        .line {
          width: 3px;
          height: 350px;
          background-color: #fbfafa;
          margin: 20px 20px 20px 25px;
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
              padding: 0 0 36px 0;
              .circle {
                border-radius: 50%;
                background-color: #fbfafa;
                height: 20px;
                width: 20px;
                margin: 0 15px 0 16px;
              }
              .date {
                width: 300px;
              }
              .logo {
                margin: 0 10px;
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
