import styled from "@emotion/styled";
import React from "react";

const DiarySection = () => {
  return <DiaryStyled>작성된 글이 없습니다.</DiaryStyled>;
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
