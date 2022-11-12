import styled from "@emotion/styled";
import React from "react";

const AboutSection = () => {
  return (
    <AboutStyled>
      {/* Profile */}
      <div className="profile">
        <div className="title">🔗 Profile</div>
        <div className="content">
          {/* <img width={500} height={500} src="" alt="profile-img" /> */}

          <div>
            <ul className="desc">
              <li>이름 : 진예림</li>
              <li>생년월일 : 1999.06.09 🐰</li>
              <li>MBTI : ISFJ</li>
              <li>취미 : 게임 🎮</li>
              <li>자격증 : 컴퓨터활용능력 1급, 정보처리기사</li>
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
                <li>
                  <div className="circle" />
                  <div className="date">2021.06.24 ~ 2021.08.18</div>
                  <div className="desc">(주) 미래월드 인턴실습</div>
                </li>
                <li>
                  <div className="circle" />
                  <div className="date">2022.02.22</div>
                  <div className="desc">영남대학교 컴퓨터공학과 수석 졸업</div>
                </li>
                <li>
                  <div className="circle" />
                  <div className="date">2022.04.01</div>
                  <div className="desc">(주) 탑코 입사</div>
                </li>
                <li>
                  <div className="circle" />
                  <div className="date">2022.07.01</div>
                  <div className="desc">(주) 탑코 정규직 전환</div>
                </li>
                <li>
                  <div className="circle" />
                  <div className="date">2022.10.29</div>
                  <div className="desc">블로그 시작</div>
                </li>
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
