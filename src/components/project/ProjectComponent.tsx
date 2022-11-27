import styled from "@emotion/styled";
import { ProjectsSection } from "gatsby-theme-portfolio-minimal/src/sections/Projects";
import * as classes from "gatsby-theme-portfolio-minimal/src/sections/Projects/";
import React from "react";
import { useLocalDataSource } from "./data";
import { Animation } from "gatsby-theme-portfolio-minimal/src/components/Animation";
import { Slider } from "gatsby-theme-portfolio-minimal/src/components/Slider";
import { Project } from "gatsby-theme-portfolio-minimal/src/components/Project";

const ProjectSection = () => {
  const response = useLocalDataSource();
  const data = response.allProjectsJson.sections[0];

  return (
    <ProjectStyled>
      {/* Personal */}
      <div className="title">Personal</div>
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
      <div className="title">Cooperation</div>
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

  /* common */
  .title {
    border: 2px solid white;
    padding: 4px 15px;
    border-radius: 20px;
    display: inline;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;
