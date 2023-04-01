import { Section } from "gatsby-theme-portfolio-minimal";
import {
  Button,
  ButtonType,
} from "gatsby-theme-portfolio-minimal/src/components/Button";
import { PageSection } from "gatsby-theme-portfolio-minimal/src/types";
import React from "react";
import { Animation } from "../../components/Animation";
import { useLocalDataSource } from "./data";
import { GatsbyImage } from "gatsby-plugin-image";
import "./hashtag.css";

export function HashSection(props: PageSection): React.ReactElement {
  const response = useLocalDataSource();
  const data = response.allStudyJson.sections[0];

  const shouldShowButton = data.button.visible !== false;
  const initiallyShownInterests = data.button.initiallyShownInterests ?? 5;
  const [shownInterests, setShownInterests] = React.useState<number>(
    shouldShowButton ? initiallyShownInterests : data.hashtag.length
  );

  function loadMoreHandler() {
    setShownInterests(data.hashtag.length);
  }

  return (
    <Animation type="fadeUp">
      <Section anchor={props.sectionId} heading={props.heading}>
        <div className={"Interests"}>
          {data.hashtag.slice(0, shownInterests).map((interest, key) => {
            return (
              <Animation
                key={key}
                className={"Interest"}
                type="scaleIn"
                delay={key * 100}
              >
                {interest.image.src && (
                  <GatsbyImage
                    image={interest.image.src.childImageSharp.gatsbyImageData}
                    className={"Icon"}
                    alt={interest.image.alt || `Interest ${interest.label}`}
                  />
                )}{" "}
                {interest.label}
              </Animation>
            );
          })}
          {shouldShowButton && shownInterests < data.hashtag.length && (
            <Animation type="scaleIn" delay={(shownInterests + 1) * 100}>
              <Button
                type={ButtonType.BUTTON}
                onClickHandler={loadMoreHandler}
                label={data.button.label}
              />
            </Animation>
          )}
        </div>
      </Section>
    </Animation>
  );
}
