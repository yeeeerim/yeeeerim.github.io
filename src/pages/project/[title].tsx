import React from "react";
import { Page } from "../../components/page";
import ProjectDetail from "../../components/project/ProjectDetail";

const Index = ({ title }: any) => {
  return (
    <Page>
      <ProjectDetail title={title} />
    </Page>
  );
};

export default Index;
