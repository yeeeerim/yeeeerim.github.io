import styled from "@emotion/styled/macro";
import { Link } from "gatsby";
import { Header } from "gatsby-theme-portfolio-minimal/src/components/Header";
import { Logo } from "gatsby-theme-portfolio-minimal/src/components/Logo";
import {
  GlobalStateProvider,
  Theme,
} from "gatsby-theme-portfolio-minimal/src/context";
import { useSiteConfiguration } from "gatsby-theme-portfolio-minimal/src/hooks/useSiteConfiguration";
import React from "react";
import Helmet from "react-helmet";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

interface PageProps {
  children: React.ReactElement;
  useSplashScreenAnimation?: boolean;
}

export function Page(props: PageProps): React.ReactElement {
  const siteConfiguration = useSiteConfiguration();
  return (
    <GlobalStateProvider
      defaultTheme={Theme.Dark}
      useDarkModeBasedOnUsersPreference={
        siteConfiguration.featureToggles.useDarkModeBasedOnUsersPreference
      }
      useSplashScreenAnimation={props.useSplashScreenAnimation || false}
    >
      <Layout>{props.children}</Layout>
    </GlobalStateProvider>
  );
}

interface LayoutProps {
  children: React.ReactElement;
}

function Layout(props: LayoutProps): React.ReactElement {
  const siteConfiguration = useSiteConfiguration();
  return (
    <>
      <Helmet
        bodyAttributes={{
          "data-theme": Theme.Dark,
        }}
      />
      <LayoutStyled>
        <Header />
        <main>{props.children}</main>
        <FooterStyled
          style={{
            background: "var(--background-color)",
            borderTop: "3px solid var(--box-shadow-hover-color)",
          }}
        >
          <div className={"ContentWrapper"}>
            <Link to="/" aria-label="home">
              <Logo fontSize="1.5rem" color={"var(--primary-color)"} />
            </Link>
            <div className={"Links"}>
              {siteConfiguration.navigation.footer.map((linkObject, key) => {
                return (
                  <Link
                    key={key}
                    to={linkObject.url}
                    aria-label={linkObject.label}
                    style={{
                      color: "var(--primary-color)",
                    }}
                  >
                    {linkObject.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </FooterStyled>
      </LayoutStyled>
    </>
  );
}

const LayoutStyled = styled.div`
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto 1fr auto;

  main {
    margin-top: 2rem;
  }
`;

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: var(--footer-height);
  background: var(--primary-color);
  border-top: none;
  margin-top: 2rem;

  .ContentWrapper {
    width: 100%;
    height: 100%;
    max-width: var(--page-width);
    margin: 0 auto;
    padding: var(--page-padding);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .Links {
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .Links a {
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--background-color);
    letter-spacing: 1px;
    margin-right: 2rem;
  }

  .Links a:last-child {
    margin-right: 0;
  }

  @media (min-width: 768px) {
    .Links a {
      margin-right: 4rem;
    }
  }
`;
