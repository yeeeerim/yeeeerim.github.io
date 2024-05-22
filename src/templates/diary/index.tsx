import React from "react";
import DiaryDetailSection from "../../components/diary/detail/DiaryDetailSection";

interface Props {
  pageContext: {
    slug: string;
  };
}

const Index = (props: Props) => {
  const { pageContext } = props;

  return <DiaryDetailSection slug={pageContext.slug} />;
};

export default Index;
