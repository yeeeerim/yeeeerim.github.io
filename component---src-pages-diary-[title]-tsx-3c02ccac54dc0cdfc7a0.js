"use strict";(self.webpackChunkgatsby_starter_portfolio_minimal_theme=self.webpackChunkgatsby_starter_portfolio_minimal_theme||[]).push([[100],{6045:function(e,n,r){r.r(n),r.d(n,{default:function(){return y}});var t=r(7294),a=r(1880),i=r(294),l=r(1082),o=r(3723),c=r(1379);var m,s,d="347174860",g=r(2121),p=r(4694);function u(){var e=(0,c.$)(),n=e.author,r=e.avatar,a=e.bio;return t.createElement(h,{className:"AuthorSnippet"},t.createElement(o.G,{image:r.childImageSharp.gatsbyImageData,alt:n,className:"Avatar"}),t.createElement("div",{className:"Description"},t.createElement("span",{className:"WrittenBy"},"Written By ",t.createElement("u",null,n)),t.createElement("p",{className:"Bio"},a)))}var b=i.Z.div(m||(m=(0,a.Z)(['\n  .Breadcrumb {\n    display: inline-block;\n    margin-bottom: 2rem;\n    padding: 0 0.5rem;\n    background-color: var(--subtext-color);\n    border-radius: var(--border-radius);\n    font-size: 12px;\n    font-weight: 400;\n  }\n\n  .Breadcrumb a {\n    letter-spacing: +1px;\n  }\n\n  .Breadcrumb a,\n  .Breadcrumb .BackArrow {\n    color: var(--background-color);\n  }\n\n  .Breadcrumb .BackArrow {\n    margin-right: 0.25rem;\n  }\n\n  .Article {\n    width: 100%;\n    height: 100%;\n    max-width: 740px;\n    margin: 0 auto;\n    padding: var(--page-padding);\n  }\n\n  .Article .Header,\n  .Article .Banner,\n  .Article .Body,\n  .Article .Footer {\n    margin-bottom: 3rem;\n  }\n\n  .Article .Category {\n    display: block;\n    text-transform: uppercase;\n    font-size: 0.875rem;\n    font-weight: 700;\n    letter-spacing: +1px;\n    color: var(--subtext-color);\n  }\n\n  .Article .Details {\n    font-size: 0.875rem;\n    letter-spacing: +0.5px;\n  }\n\n  .Article .ReadingTime {\n    margin-left: 0.5rem;\n  }\n\n  .Article .ReadingTime::before {\n    content: "–";\n    margin-right: 0.5rem;\n  }\n\n  .Article .BannerImage {\n    border-radius: var(--border-radius);\n    margin-bottom: 0;\n  }\n\n  .Article .BannerCaption {\n    display: block;\n    font-size: 0.875rem;\n    letter-spacing: +0.5px;\n    text-align: center;\n  }\n\n  .Article .Body .Content {\n    font-size: 1.125rem;\n    line-height: 2rem;\n    margin-bottom: 3rem;\n  }\n\n  .Article .Body .Keyword {\n    font-size: 0.875rem;\n    background-color: var(--tertiary-color);\n    color: var(--subtext-color);\n    padding: 0.125rem 0.375rem;\n    margin-right: 0.5rem;\n    border-radius: 0.5rem;\n  }\n\n  .Article .Footer {\n    border-top: 3px solid var(--tertiary-color);\n    padding-top: 3rem;\n  }\n\n  .Article img {\n    max-height: 660px;\n    object-fit: cover;\n    border-radius: var(--border-radius);\n  }\n\n  :global(.gatsby-resp-image-wrapper),\n  :global(.gatsby-resp-image-background-image) {\n    margin: 2rem 0;\n    max-height: 660px;\n    overflow-y: hidden;\n  }\n\n  .Article figure {\n    margin: 2rem 0;\n  }\n\n  .Article figure > figcaption {\n    margin-top: -1rem;\n    text-align: center;\n    font-size: 0.875rem;\n    color: var(--subtext-color);\n  }\n']))),h=i.Z.div(s||(s=(0,a.Z)(["\n  &.AuthorSnippet {\n    width: 100%;\n    max-width: 660px;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-start;\n\n    .Avatar {\n      width: 100px;\n      height: 100px;\n      border-radius: 50%;\n    }\n\n    .Description {\n      width: 100%;\n      margin-top: 1rem;\n    }\n\n    .WrittenBy {\n      font-size: 0.875rem;\n      letter-spacing: +0.5px;\n      color: var(--subtext-color);\n    }\n\n    .Bio {\n      margin: 0.5rem 0;\n    }\n  }\n\n  @media screen and (min-width: 768px) {\n    &.AuthorSnippet {\n      padding: var(--page-padding);\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: center;\n\n      .Description {\n        width: 100%;\n        max-width: 27.5rem;\n      }\n    }\n  }\n"]))),f=function(e){var n=e.props,r=(0,l.useStaticQuery)(d).allArticle.articles.find((function(e){return e.slug.includes(n.title)}));return r?t.createElement(b,null,t.createElement(g.pQ,{title:r.title,description:r.description||void 0,useTitleTemplate:!0}),t.createElement(p.T,null,t.createElement("article",{className:"Article"},t.createElement("div",{className:"Breadcrumb"},t.createElement(l.Link,{to:"/diary",title:"Back To Article Listing"},t.createElement("span",{className:"BackArrow"},"❮"),"All Articles")),t.createElement("section",{className:"Header"},t.createElement("span",{className:"Category"},r.categories.join(" / ")),t.createElement("h1",null,r.title),t.createElement("div",{className:"Details"},r.date,t.createElement("span",{className:"ReadingTime"},r.readingTime.text))),r.banner&&r.banner.src&&t.createElement("section",{className:"Banner"},t.createElement(o.G,{image:r.banner.src.childImageSharp.gatsbyImageData,alt:r.banner.alt||"Image for "+r.title,imgClassName:"BannerImage"}),r.banner.caption&&t.createElement("span",{className:"BannerCaption",dangerouslySetInnerHTML:{__html:r.banner.caption}})),t.createElement("section",{className:"Body"},t.createElement("div",{className:"Content",dangerouslySetInnerHTML:{__html:r.body}}),r.keywords&&r.keywords.map((function(e,n){return t.createElement("span",{key:n,className:"Keyword"},e)}))),t.createElement("section",{className:"Footer"},t.createElement(u,null))))):t.createElement("div",null,"작성된 글이 없습니다.")},y=function(e){return t.createElement(f,{props:e})}}}]);
//# sourceMappingURL=component---src-pages-diary-[title]-tsx-3c02ccac54dc0cdfc7a0.js.map