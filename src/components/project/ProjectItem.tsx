import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Animation } from "../Animation";
import "./project.css";
import { useMediaQuery } from "gatsby-theme-portfolio-minimal/src/hooks/useMediaQuery";
import { Icon } from "../Icon";
import { Project } from "./data";
import { Link } from "gatsby";

interface ProjectProps {
  data: Project;
  index: number;
}

export function ProjectItem(props: ProjectProps): React.ReactElement {
  const isDesktopBreakpoint = useMediaQuery("(min-width: 992px)");

  return (
    <Animation
      type="fadeUp"
      className={"Project"}
      style={{
        flexDirection:
          isDesktopBreakpoint && props.index % 2 === 0
            ? "row-reverse"
            : undefined,
      }}
    >
      <div className={"Details"}>
        <span className={"Category"}>{props.data.category}</span>
        <h4 className={"Title"}>{props.data.title}</h4>
        <p>{props.data.description}</p>
        <div className={"Tags"}>
          {props.data.tags &&
            props.data.tags.length !== 0 &&
            props.data.tags.map((tag, key) => {
              return (
                <span key={key}>
                  <u>{tag}</u>
                </span>
              );
            })}
        </div>
        <div className={"Links"}>
          {props.data.links &&
            props.data.links.length !== 0 &&
            props.data.links.map((link, key) => {
              return (
                <a
                  key={key}
                  href={link.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label="External Link"
                >
                  <Icon name={link.type} color="var(--subtext-color)" />
                </a>
              );
            })}
        </div>
      </div>
      {props.data.image.src && props.data.image.linkTo && (
        <Link
          to={props.data.image.linkTo}
          rel="noopener noreferrer"
          aria-label="External Link"
        >
          <GatsbyImage
            className={"ProjectImageWrapper"}
            imgClassName={"ProjectImage"}
            image={props.data.image.src.childImageSharp.gatsbyImageData}
            alt={props.data.image.alt || `Project ${props.data.title}`}
          />
        </Link>
      )}
      {props.data.image.src && !props.data.image.linkTo && (
        <GatsbyImage
          className={"ProjectImageWrapper"}
          imgClassName={"ProjectImage"}
          image={props.data.image.src.childImageSharp.gatsbyImageData}
          alt={props.data.image.alt || `Project ${props.data.title}`}
        />
      )}
    </Animation>
  );
}
