import styled from "@emotion/styled";
import React from "react";
import { HashSection } from "./hashTag/HashSection";
import PostSection from "./post/PostSection";

const StudySection = () => {
  return (
    <StudyStyled>
      <h2># HashTag</h2>
      <HashSection />
      <h2># Post</h2>
      작성된 글이 없습니다.
      {/* <PostSection /> */}
    </StudyStyled>
  );
};

export default StudySection;

const StudyStyled = styled.div`
  width: 100%;
  height: 100%;
  max-width: var(--page-width);
  margin: 0 auto;
  padding: var(--page-padding);
  justify-content: space-between;
`;
