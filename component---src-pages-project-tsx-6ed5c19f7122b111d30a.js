"use strict";(self.webpackChunkgatsby_starter_portfolio_minimal_theme=self.webpackChunkgatsby_starter_portfolio_minimal_theme||[]).push([[534],{3674:function(e,t,a){a.d(t,{f:function(){return i}});var n=a(7294),r=a(7180),l=a(6755);function i(e){var t,a,i,c,o,m,s=(0,r.W)(),u=(0,l.R)(s),d=null!==(t=e.type)&&void 0!==t?t:"fadeIn",g=null!==(a=e.timing)&&void 0!==a?a:"ease-out",E=null!==(i=e.duration)&&void 0!==i?i:200,p=null!==(c=e.delay)&&void 0!==c?c:0,f=null!==(o=e.iterationCount)&&void 0!==o?o:1,v=null!==(m=e.fillMode)&&void 0!==m?m:"backwards";return n.createElement("div",{ref:s,className:e.className,onAnimationEnd:e.onAnimationEnd,style:u?Object.assign({},e.style,{animationName:""+d,animationTimingFunction:""+g,animationDuration:E+"ms",animationDelay:p+"ms",animationIterationCount:""+f,animationFillMode:""+v}):Object.assign({},e.style,{opacity:0})},e.children)}},5646:function(e,t,a){a.r(t),a.d(t,{default:function(){return I}});var n,r=a(2121),l=a(7294),i=a(1880),c=a(294),o=a(1082);!function(e){e.External="external",e.Github="github",e.Notion="notion"}(n||(n={}));var m,s,u,d=a(2435),g=a(3723),E=a(3674),p=a(8758),f=a(5455),v=a(9143),h=a(1116),b=a(1629),y=a(4422),N=a(2295),k=a(9238),x=a(8147);function w(e){return l.createElement("svg",{fill:e.color||"var(--primary-color)",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},l.createElement("title",null,"Notion"),l.createElement("path",{d:"M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"}))}function T(e){switch(e.name.toLowerCase()){case"external":return l.createElement(v.A,{color:e.color});case"behance":return l.createElement(f.X,{color:e.color});case"github":return l.createElement(h.U,{color:e.color});case"linkedin":return l.createElement(y.Q,{color:e.color});case"mail":return l.createElement(N.h,{color:e.color});case"medium":return l.createElement(k.a,{color:e.color});case"twitter":return l.createElement(x.J,{color:e.color});case"hashnode":return l.createElement(b.p,{color:e.color});case"notion":return l.createElement(w,{color:e.color});default:return null}}function P(e){var t=(0,p.a)("(min-width: 992px)");return l.createElement(E.f,{type:"fadeUp",className:"Project",style:{flexDirection:t&&e.index%2==0?"row-reverse":void 0}},l.createElement("div",{className:"Details"},l.createElement("span",{className:"Category"},e.data.category),l.createElement("h4",{className:"Title"},e.data.title),l.createElement("p",null,e.data.description),l.createElement("div",{className:"Tags"},e.data.tags&&0!==e.data.tags.length&&e.data.tags.map((function(e,t){return l.createElement("span",{key:t},l.createElement("u",null,e))}))),l.createElement("div",{className:"Links"},e.data.links&&0!==e.data.links.length&&e.data.links.map((function(e,t){return l.createElement("a",{key:t,href:e.url,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"External Link"},l.createElement(T,{name:e.type,color:"var(--subtext-color)"}))})))),e.data.image.src&&e.data.image.linkTo&&l.createElement("a",{href:e.data.image.linkTo,target:"_blank",rel:"noopener noreferrer","aria-label":"External Link"},l.createElement(g.G,{className:"ProjectImageWrapper",imgClassName:"ProjectImage",image:e.data.image.src.childImageSharp.gatsbyImageData,alt:e.data.image.alt||"Project "+e.data.title})),e.data.image.src&&!e.data.image.linkTo&&l.createElement(g.G,{className:"ProjectImageWrapper",imgClassName:"ProjectImage",image:e.data.image.src.childImageSharp.gatsbyImageData,alt:e.data.image.alt||"Project "+e.data.title}))}!function(e){e.External="external",e.Github="github",e.Notion="notion"}(m||(m={})),function(e){e[e.PERSONAL=0]="PERSONAL",e[e.TEAM=1]="TEAM"}(u||(u={}));var j=function(){var e=(0,o.useStaticQuery)("2294549421").allProjectJson.sections[0],t=(0,l.useState)(u.TEAM),a=t[0],n=t[1];return l.createElement(A,null,l.createElement("div",{className:"tab-area"},l.createElement("div",{className:a===u.TEAM?"focus":"",onClick:function(e){return n(u.TEAM)}},"Team"),l.createElement("div",{className:a===u.PERSONAL?"focus":"",onClick:function(e){return n(u.PERSONAL)}},"Personal")),l.createElement(d.i,{style:{display:"flex",flexDirection:"column"}},a===u.TEAM&&e.project.team.map((function(e,t){return e.visible?l.createElement(P,{key:t,index:t,data:e}):null})),a===u.PERSONAL&&e.project.personal.map((function(e,t){return e.visible?l.createElement(P,{key:t,index:t,data:e}):null}))))},A=c.Z.div(s||(s=(0,i.Z)(["\n  width: 100%;\n  height: 100%;\n  max-width: var(--page-width);\n  margin: 0 auto;\n  padding: var(--page-padding);\n  justify-content: space-between;\n\n  .tab-area {\n    div {\n      padding: 4px 15px;\n      display: inline;\n      font-size: 1.5rem;\n      font-weight: 600;\n      cursor: pointer;\n      color: white;\n      margin-right: 5px;\n\n      &.focus {\n        color: #f7b000;\n      }\n    }\n  }\n"]))),L=a(4694),I=function(){return l.createElement(l.Fragment,null,l.createElement(r.pQ,{title:"Project",useTitleTemplate:!0,noIndex:!0}),l.createElement(L.T,null,l.createElement(j,null)))}}}]);
//# sourceMappingURL=component---src-pages-project-tsx-6ed5c19f7122b111d30a.js.map