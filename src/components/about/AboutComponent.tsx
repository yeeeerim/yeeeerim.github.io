import styled from "@emotion/styled";
import React from "react";
import { useLocalDataSource } from "./data";

const AboutSection = () => {
  const response = useLocalDataSource();
  const data = response.allAboutJson.sections[0];

  return (
    <AboutStyled>
      {/* Profile */}
      <div className="profile">
        <div className="title">🔗 Profile</div>
        <div className="content">
          {/* <img width={500} height={500} src="" alt="profile-img" /> */}

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
        <div className="title">🔗 Timestamp</div>
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
  /* display: flex; */
  justify-content: space-between;

  /* profile */
  .profile {
    margin-bottom: 70px;
    .content {
      .desc {
        list-style: square;
      }
    }
  }

  /* timestamp */
  .timestamp {
    .content {
      .graph {
        position: relative;
        .line {
          width: 3px;
          height: 300px;
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
            }
          }
        }
      }
    }
  }

  /* common */
  .title {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;
