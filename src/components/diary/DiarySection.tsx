import styled from "@emotion/styled";
import React from "react";
import { ArticlesSection } from "./ArticlesSection";

enum ArticleSource {
  Medium = "medium",
  Blog = "blog",
}

const DiarySection = () => {
  return (
    <DiaryStyled>
      <ArticlesSection
        sectionId="articles"
        heading="Diary"
        sources={[ArticleSource.Blog]}
      />
    </DiaryStyled>
  );
};

export default DiarySection;

const DiaryStyled = styled.div`
  width: 100%;
  height: 100%;
  max-width: var(--page-width);
  margin: 0 auto;
  padding: var(--page-padding);
  justify-content: space-between;
`;
