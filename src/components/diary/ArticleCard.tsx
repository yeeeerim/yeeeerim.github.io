import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import SkeletonLoader from "tiny-skeleton-loader-react";
import { ImageObject } from "gatsby-theme-portfolio-minimal/src/types";
import {
  Theme,
  useGlobalState,
} from "gatsby-theme-portfolio-minimal/src/context";
import styled from "@emotion/styled";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export interface ArticleCard {
  image?: ImageObject;
  category: string;
  title: string;
  publishedAt: Date;
  readingTime?: string;
  link: string;
}

interface ArticleCardProps {
  data: ArticleCard;
  showBanner?: boolean;
}

export function ArticleCard(props: ArticleCardProps): React.ReactElement {
  const { globalState } = useGlobalState();
  const darkModeEnabled = globalState.theme === Theme.Dark;

  const dateNow = dayjs();
  const relativeTime = dateNow.from(props.data.publishedAt, true);

  // Needed to differentiate between external and internal links (whether or not we use Gatsby Link)
  const absoluteUrl =
    props.data.link.indexOf("://") > 0 || props.data.link.indexOf("//") === 0;

  const articleCard = (
    <article
      className={"Card"}
      style={
        darkModeEnabled
          ? { border: "0.125rem solid var(--primary-color)" }
          : undefined
      }
    >
      {props.showBanner && (
        <div className={"Banner"}>
          {props.data.image && props.data.image.src && (
            <GatsbyImage
              className={"ImageWrapper"}
              imgClassName={"Image"}
              image={props.data.image.src.childImageSharp.gatsbyImageData}
              alt={props.data.image.alt || props.data.title}
            />
          )}
        </div>
      )}
      <div className={"DescriptionWrapper"}>
        <span className={"Category"}>
          <u>{props.data.category}</u>
        </span>
        <h4 className={"Title"}>{props.data.title}</h4>
        <div className={"Details"}>
          {formatDate(props.data.publishedAt)}
          <span className={"RelativeTime"}>{relativeTime} ago</span>
        </div>
      </div>
    </article>
  );

  return (
    <ArticleCardStyled>
      {absoluteUrl ? (
        <a
          href={props.data.link}
          target="_blank"
          rel="nofollow noopener noreferrer"
          title={props.data.title}
        >
          {articleCard}
        </a>
      ) : (
        <Link
          to={props.data.link.replace("diarys", "diary")}
          title={props.data.title}
        >
          {articleCard}
        </Link>
      )}
    </ArticleCardStyled>
  );
}

export function ArticleCardSkeleton(): React.ReactElement {
  const { globalState } = useGlobalState();
  const darkModeEnabled = globalState.theme === Theme.Dark;
  return (
    <div
      className={"Card"}
      style={
        darkModeEnabled
          ? { border: "0.125rem solid var(--primary-color)" }
          : undefined
      }
    >
      <div className={"DescriptionWrapper"}>
        <SkeletonLoader
          style={{
            height: "1.5rem",
            marginBottom: ".5rem",
            background: "var(--tertiary-color)",
          }}
        />
        <SkeletonLoader
          style={{ height: "4rem", background: "var(--tertiary-color)" }}
        />
        <SkeletonLoader
          style={{
            height: ".75rem",
            width: "50%",
            marginTop: ".5rem",
            background: "var(--tertiary-color)",
          }}
        />
      </div>
    </div>
  );
}

function formatDate(date: Date): string {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

const ArticleCardStyled = styled.div`
  .Card {
    width: 16.25rem;
    height: auto;
    min-height: 12rem;
    display: inline-flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 1rem 2.5rem 2rem 0;
    box-shadow: 0 5px 15px var(--box-shadow-color);
    border-radius: var(--border-radius);
    background: var(--card-color);
    white-space: normal;
    transition: box-shadow 0.3s ease-out;
  }

  .Card:hover {
    box-shadow: 0 5px 15px var(--box-shadow-hover-color);
  }

  .Card .Banner {
    height: 5rem;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    background: var(--tertiary-color);
  }

  .Card .ImageWrapper {
    height: 100%;
    max-height: 5rem;
  }

  .Card .Image {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .Card .DescriptionWrapper {
    height: auto;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .Card .Category {
    color: var(--primary-color);
    text-transform: uppercase;
    letter-spacing: +1px;
    font-weight: 700;
  }

  .Card .Title {
    margin: 0.25rem 0;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
  }

  .Card .Details {
    font-size: 0.75rem;
    color: var(--subtext-color);
    letter-spacing: +0.5px;
  }

  .Card .RelativeTime {
    margin-left: 0.25rem;
  }

  .Card .RelativeTime::before {
    content: "–";
    margin-right: 0.25rem;
  }
`;
