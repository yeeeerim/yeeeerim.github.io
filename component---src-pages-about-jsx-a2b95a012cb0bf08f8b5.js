(self.webpackChunkgatsby_starter_portfolio_minimal_theme=self.webpackChunkgatsby_starter_portfolio_minimal_theme||[]).push([[5354],{3635:function(e,n,t){"use strict";t(434),t(7294);var a=t(5507),i=(t(5594),t(4858),a.Z.bind());["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){i[e]=i(e)})),n.Z=i},1508:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var a,i,r=t(7294),l=t(2121),o=t(1880),s=t(3635),d=t(3723),c=t(1082),m=function(){var e=(0,c.useStaticQuery)("2707877936"),n=(0,c.useStaticQuery)("1667230785"),t="";n&&(t=n.allMarkdownRemark.edges[0].node.html);var a=e.allAboutJson.sections[0];return r.createElement(p,null,r.createElement("div",{className:"profile"},r.createElement("div",{className:"title"},"About"),r.createElement("div",{className:"content"},r.createElement(u,null,r.createElement("div",{dangerouslySetInnerHTML:{__html:t}})))),r.createElement("div",{className:"timestamp"},r.createElement("div",{className:"title"},"Timestamp"),r.createElement("div",{className:"content"},r.createElement("div",{className:"graph"},r.createElement("div",{className:"line"}),r.createElement("div",{className:"time-line"},r.createElement("ul",null,a.timestamp.map((function(e,n){return r.createElement("li",{key:"timestamp-"+n},r.createElement("div",{className:"circle"}),r.createElement("div",{className:"dateAndDesc"},r.createElement("div",{className:"date"},e.date),r.createElement("div",{className:"descAndLogo"},r.createElement("div",{className:"desc"},e.desc),r.createElement("div",{className:"logo"},e.logo&&e.logo.src&&r.createElement(d.G,{image:e.logo.src.childImageSharp.gatsbyImageData||"",alt:e.logo.alt||""})))))}))))))))},p=s.Z.div(a||(a=(0,o.Z)(["\n  width: 100%;\n  height: 100%;\n  max-width: var(--page-width);\n  margin: 0 auto;\n  padding: var(--page-padding);\n  justify-content: space-between;\n  color: #aaa;\n\n  /* profile */\n  .profile {\n    margin-bottom: 70px;\n    .content {\n      display: flex;\n      flex-direction: row;\n      column-gap: 40px;\n      margin: 30px 0;\n      align-items: center;\n      .img {\n        width: 150px;\n        height: 150px;\n        border-radius: 50%;\n      }\n      .desc {\n        list-style: square;\n        line-height: 26px;\n      }\n      @media (max-width: 767px) {\n        flex-direction: column;\n        .desc {\n          padding-left: 20px;\n        }\n      }\n    }\n  }\n\n  /* timestamp */\n  .timestamp {\n    .content {\n      /* background: rgb(45, 45, 45); */\n      margin: 30px 0;\n      font-size: 0.9rem;\n      border-radius: 10px;\n      max-width: 825px;\n      padding: 1px 5px;\n      .graph {\n        position: relative;\n        .line {\n          width: 3px;\n          height: 350px;\n          background-color: white;\n          margin: 20px 20px 20px 25px;\n          @media (max-width: 767px) {\n            height: 530px;\n          }\n        }\n        .time-line {\n          position: absolute;\n          top: 0;\n          ul {\n            padding: 0;\n            li {\n              list-style: none;\n              display: flex;\n              align-items: center;\n              padding: 0 0 25px 0;\n              .circle {\n                border-radius: 50%;\n                background-color: white;\n                height: 16px;\n                width: 16px;\n                margin: 0 15px 0 19px;\n              }\n              .dateAndDesc {\n                display: flex;\n                flex-direction: row;\n                .date {\n                  width: 300px;\n                }\n                .logo {\n                  margin: 2px 10px 0 10px;\n                  width: 100px;\n                  align-items: center;\n                  display: flex;\n                }\n                .descAndLogo {\n                  display: flex;\n                }\n                .desc {\n                  color: white;\n                }\n                @media (max-width: 767px) {\n                  flex-direction: column;\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n\n  /* common */\n  .title {\n    color: #ddd;\n    display: inline;\n    font-size: 1.6rem;\n    font-weight: 600;\n  }\n"]))),u=s.Z.div(i||(i=(0,o.Z)(["\n  div {\n    max-width: 90vw;\n  }\n\n  code {\n    font-size: 0.8rem;\n  }\n\n  a {\n    color: white;\n    text-decoration: underline;\n    &:hover {\n    }\n  }\n\n  deckgo-highlight-code {\n    font-size: 0.8rem;\n    line-height: 20px;\n  }\n"]))),g=t(2518),h=function(){return r.createElement(r.Fragment,null,r.createElement(l.pQ,{title:"About Me",useTitleTemplate:!0,noIndex:!0}),r.createElement(g.T,null,r.createElement(m,null)))}},434:function(e){function n(){return e.exports=n=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,n.apply(this,arguments)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},1880:function(e,n,t){"use strict";function a(e,n){return n||(n=e.slice(0)),e.raw=n,e}t.d(n,{Z:function(){return a}})}}]);
//# sourceMappingURL=component---src-pages-about-jsx-a2b95a012cb0bf08f8b5.js.map