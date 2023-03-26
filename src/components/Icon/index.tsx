import React from "react";
import { IconBehance } from "gatsby-theme-portfolio-minimal/src/components/Icon/IconBehance";
import { IconExternal } from "gatsby-theme-portfolio-minimal/src/components/Icon/IconExternal";
import { IconGithub } from "gatsby-theme-portfolio-minimal/src/components/Icon/IconGithub";
import { IconHashnode } from "gatsby-theme-portfolio-minimal/src/components/Icon/IconHashnode";
import { IconLinkedIn } from "gatsby-theme-portfolio-minimal/src/components/Icon/IconLinkedIn";
import { IconMail } from "gatsby-theme-portfolio-minimal/src/components/Icon/IconMail";
import { IconMedium } from "gatsby-theme-portfolio-minimal/src/components/Icon/IconMedium";
import { IconTwitter } from "gatsby-theme-portfolio-minimal/src/components/Icon/IconTwitter";
import { IconNotion } from "./IconNotion";

interface IconProps {
  name: string;
  color?: string;
}

export function Icon(props: IconProps): React.ReactElement | null {
  switch (props.name.toLowerCase()) {
    case "external":
      return <IconExternal color={props.color} />;
    case "behance":
      return <IconBehance color={props.color} />;
    case "github":
      return <IconGithub color={props.color} />;
    case "linkedin":
      return <IconLinkedIn color={props.color} />;
    case "mail":
      return <IconMail color={props.color} />;
    case "medium":
      return <IconMedium color={props.color} />;
    case "twitter":
      return <IconTwitter color={props.color} />;
    case "hashnode":
      return <IconHashnode color={props.color} />;
    case "notion":
      return <IconNotion color={props.color} />;
    default:
      return null;
  }
}
