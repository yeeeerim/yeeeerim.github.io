import { graphql, useStaticQuery } from "gatsby";

interface AboutSectionQueryResult {
  allAboutJson: {
    sections: {
      profile: {
        name: string;
        mbti: string;
        hobby: string;
        cert: string;
        birthday: string;
      };
      timestamp: {
        date: string;
        desc: string;
      }[];
    }[];
  };
}

export const useLocalDataSource = (): AboutSectionQueryResult => {
  return useStaticQuery(graphql`
    query MyQuery {
      allAboutJson {
        sections: nodes {
          profile {
            name
            mbti
            hobby
            cert
            birthday
          }
          timestamp {
            date
            desc
          }
        }
      }
    }
  `);
};
