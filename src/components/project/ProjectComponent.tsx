import styled from "@emotion/styled";
import { ProjectsSection } from "gatsby-theme-portfolio-minimal/src/sections/Projects";
import * as classes from "gatsby-theme-portfolio-minimal/src/sections/Projects/";
import React, { useEffect, useState } from "react";
import { useLocalDataSource } from "./data";
import { Animation } from "gatsby-theme-portfolio-minimal/src/components/Animation";
import { Slider } from "gatsby-theme-portfolio-minimal/src/components/Slider";
import { Project } from "gatsby-theme-portfolio-minimal/src/components/Project";

export enum TabType {
  PERSONAL = 0,
  TEAM = 1,
}

const ProjectSection = () => {
  const response = useLocalDataSource();
  const data = response.allProjectsJson.sections[0];

  const [selectTab, setSelectTab] = useState<number>(TabType.PERSONAL);

  return (
    <ProjectStyled>
      <div className="tab-area">
        <button
          className={selectTab === TabType.PERSONAL ? "focus" : ""}
          onClick={(e) => setSelectTab(TabType.PERSONAL)}
        >
          Personal
        </button>
        <button
          className={selectTab === TabType.TEAM ? "focus" : ""}
          onClick={(e) => setSelectTab(TabType.TEAM)}
        >
          Team
        </button>
      </div>
      {/* TODO */}
      <Animation type="fadeIn">
        <Slider
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {data.projects.map((project, key) => {
            return project.visible ? (
              <Project key={key} index={key} data={project} />
            ) : null;
          })}
        </Slider>
      </Animation>
    </ProjectStyled>
  );
};

export default ProjectSection;

const ProjectStyled = styled.div`
  width: 100%;
  height: 100%;
  max-width: var(--page-width);
  margin: 0 auto;
  padding: var(--page-padding);
  justify-content: space-between;

  .tab-area {
    button {
      border: 2px solid white;
      padding: 4px 15px;
      border-radius: 15px;
      display: inline;
      font-size: 1.5rem;
      font-weight: 600;
      cursor: pointer;
      color: white;
      background-color: black;
      margin-right: 10px;

      &.focus {
        color: black;
        background-color: white;
      }
    }
  }
`;
