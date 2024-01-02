import { Layout } from "gatsby-theme-portfolio-minimal/src/components/Layout";
import {
  GlobalStateProvider,
  Theme,
} from "gatsby-theme-portfolio-minimal/src/context";
import { useSiteConfiguration } from "gatsby-theme-portfolio-minimal/src/hooks/useSiteConfiguration";
import React from "react";

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
      <Layout
        useSplashScreenAnimation={props.useSplashScreenAnimation || false}
        useCookieBar={siteConfiguration.featureToggles.useCookieBar}
      >
        {props.children}
      </Layout>
    </GlobalStateProvider>
  );
}
