(self.webpackChunkgatsby_starter_portfolio_minimal_theme=self.webpackChunkgatsby_starter_portfolio_minimal_theme||[]).push([[1226],{5255:function(e,t,a){"use strict";a(7294);!function(e,t){void 0===t&&(t={});var a=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===a&&n.firstChild?n.insertBefore(l,n.firstChild):n.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}('.styles_skeleton__tyzRD{background:#eff1f6;display:inline-block;line-height:1;overflow:hidden;position:relative}.styles_skeleton__tyzRD:before{animation:styles_skeleton-progress__aezri 1.2s ease-in-out infinite;background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.6),hsla(0,0%,100%,0));content:"";height:100%;left:-500px;position:absolute;top:0;width:500px}@keyframes styles_skeleton-progress__aezri{0%{left:-500px}to{left:100%}}')},4944:function(e,t,a){"use strict";var n=a(2109),l=a(6790),r=a(7908),i=a(6244),s=a(9303),o=a(5417);n({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=r(this),a=i(t),n=o(t,0);return n.length=l(n,t,t,a,0,void 0===e?1:s(e)),n}})},3792:function(e,t,a){a(1223)("flat")},1615:function(e,t,a){"use strict";a.d(t,{T:function(){return s}});var n=a(7294),l=a(1082),r=a(3723),i=(a(5255),a(5400));function s(e){var t,a=(0,i.j1)().globalState.theme===i.Q2.Dark,s=e.data.link.indexOf("://")>0||0===e.data.link.indexOf("//"),o=n.createElement("article",{className:"style-module--Card--c661d",style:a?{border:"0.125rem solid var(--primary-color)"}:void 0},e.showBanner&&n.createElement("div",{className:"style-module--Banner--d401d"},e.data.image&&e.data.image.src&&n.createElement(r.G,{className:"style-module--ImageWrapper--50300",imgClassName:"style-module--Image--43f10",image:e.data.image.src.childImageSharp.gatsbyImageData,alt:e.data.image.alt||e.data.title})),n.createElement("div",{className:"style-module--DescriptionWrapper--5f867"},n.createElement("span",{className:"style-module--Category--eeb92"},n.createElement("u",null,e.data.category)),n.createElement("h4",{className:"style-module--Title--de70d"},e.data.title),n.createElement("div",{className:"style-module--Details--5ba4b"},["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][(t=e.data.publishedAt).getMonth()]+" "+t.getDate()+", "+t.getFullYear(),e.data.readingTime&&n.createElement("span",{className:"style-module--ReadingTime--a0392"},e.data.readingTime))));return s?n.createElement("a",{href:e.data.link,target:"_blank",rel:"nofollow noopener noreferrer",title:e.data.title},o):n.createElement(l.Link,{to:e.data.link,title:e.data.title},o)}},7048:function(e,t,a){"use strict";a.d(t,{z:function(){return s},L:function(){return n}});var n,l=a(7294),r=a(1082),i="style-module--Button--82b1f";function s(e){if(e.type===n.LINK){if(e.url)return e.externalLink?l.createElement("a",{id:e.id,className:i,href:e.url,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"External Link"},e.label):l.createElement(r.Link,{id:e.id,to:e.url,className:i},e.label);throw new Error("Button should be a "+e.type+" but no URL is given!")}if(e.type===n.BUTTON||e.type===n.SUBMIT){if(!e.onClickHandler)throw new Error("Button should be a "+e.type+" but no onClickHandler is given!");return l.createElement("button",{id:e.id,className:i,type:e.type,onClick:e.onClickHandler},e.label)}throw new Error("Unknown button type specified.")}!function(e){e.BUTTON="button",e.SUBMIT="submit",e.LINK="link"}(n||(n={}))},6720:function(e,t,a){"use strict";a.d(t,{$:function(){return r}});var n=a(7294),l="style-module--ContentWrapper --36dde";function r(e){var t;return t=e.additionalClasses?e.additionalClasses.concat(l).join(" "):l,n.createElement("section",{id:e.anchor,className:"style-module--Section--1d871"},n.createElement("div",{className:t},e.heading&&n.createElement("h3",{className:"style-module--Heading--2c002"},e.heading),e.children))}},2435:function(e,t,a){"use strict";a.d(t,{i:function(){return r}});var n=a(7294),l="style-module--SlideContainer--60bf2";function r(e){var t;return t=e.additionalClasses?e.additionalClasses.concat(l).join(" "):l,n.createElement("div",{className:t,style:e.style},e.children)}},2516:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});a(4944),a(3792);var n=a(2982),l=a(7294),r=a(2571),i=a(6720),s=a(533),o=a(2435),c=a(1615),d=a(7048),u="style-module--Option--83bb9";function m(e){var t=e.pageContext.articles,a=l.useState(function(e){var t=[],a=[];return e.forEach((function(e){e.categories.forEach((function(n){if(a.includes(n)){var l=t.map((function(e){return e.label})).indexOf(n);t[l].relatedArticleIds.push(e.id)}else t.push({label:n,selected:!1,relatedArticleIds:[e.id]}),a.push(n)}))})),t.sort((function(e,t){return e.relatedArticleIds.length>t.relatedArticleIds.length?-1:1}))}(t)),m=a[0],f=a[1],g=l.useState(9),p=g[0],h=g[1];var y=[],b=-1!==m.map((function(e){return e.selected})).indexOf(!0);return b&&(y=m.filter((function(e){return e.selected})).map((function(e){return e.relatedArticleIds})).flat(1).filter((function(e,t,a){return a.indexOf(e)===t}))),l.createElement(l.Fragment,null,l.createElement(s.p,{title:"All Articles",useTitleTemplate:!0}),l.createElement(r.T,null,l.createElement(i.$,{anchor:"articleListing",heading:"Articles"},l.createElement("div",{className:"style-module--Filter--31377"},"Select categories to filter articles",l.createElement(o.i,{additionalClasses:["style-module--Options--3515b"]},m.map((function(e,t){return l.createElement("div",{key:t,role:"button",onClick:function(){return t=e.label,a=(0,n.Z)(m),l=a.map((function(e){return e.label})).indexOf(t),a[l].selected=!a[l].selected,void f(a);var t,a,l},className:[u,!0===e.selected?"style-module--Selected--f3165":null].join(" ")},e.label," (",e.relatedArticleIds.length,")")})))),l.createElement("div",{className:"style-module--Listing--52eca"},t.filter((function(e){return!b||y.includes(e.id)})).slice(0,p).map((function(e,t){return l.createElement(c.T,{key:t,showBanner:!0,data:{image:e.banner,title:e.title,category:e.categories.join(" / "),publishedAt:new Date(e.date.replace(/-/g,"/")),link:e.slug,readingTime:e.readingTime.text}})}))),b&&y.length>p||!b&&t.length>p?l.createElement("div",{className:"style-module--LoadMore--8b4c0"},l.createElement(d.z,{type:d.L.BUTTON,label:"Load More",onClickHandler:function(){return e=t.length,a=b?y.length:void 0,n=p+3,void((a&&a>=n||!a&&e>=n)&&h(n));var e,a,n}})):null)))}}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-portfolio-minimal-src-templates-article-listing-index-tsx-9c7a85785860892ecc31.js.map