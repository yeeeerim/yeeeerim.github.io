(self.webpackChunkgatsby_starter_portfolio_minimal_theme=self.webpackChunkgatsby_starter_portfolio_minimal_theme||[]).push([[490],{3635:function(e,t,n){"use strict";n(434),n(7294);var r=n(5507),a=(n(5594),n(4858),r.Z.bind());["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){a[e]=a(e)})),t.Z=a},8538:function(e,t,n){n(5743),e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,r="millisecond",a="second",i="minute",s="hour",o="day",u="week",c="month",l="quarter",d="year",m="date",f="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},b=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},y={s:b,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),a=n%60;return(t<=0?"+":"-")+b(r,2,"0")+":"+b(a,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),a=t.clone().add(r,c),i=n-a<0,s=t.clone().add(r+(i?-1:1),c);return+(-(r+(n-a)/(i?a-s:s-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:u,d:o,D:m,h:s,m:i,s:a,ms:r,Q:l}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",$={};$[v]=g;var x="$isDayjsObject",w=function(e){return e instanceof S||!(!e||!e[x])},M=function e(t,n,r){var a;if(!t)return v;if("string"==typeof t){var i=t.toLowerCase();$[i]&&(a=i),n&&($[i]=n,a=i);var s=t.split("-");if(!a&&s.length>1)return e(s[0])}else{var o=t.name;$[o]=t,a=o}return!r&&a&&(v=a),a||!r&&v},k=function(e,t){if(w(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new S(n)},D=y;D.l=M,D.i=w,D.w=function(e,t){return k(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var S=function(){function g(e){this.$L=M(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[x]=!0}var b=g.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(h);if(r){var a=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return D},b.isValid=function(){return!(this.$d.toString()===f)},b.isSame=function(e,t){var n=k(e);return this.startOf(t)<=n&&n<=this.endOf(t)},b.isAfter=function(e,t){return k(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<k(e)},b.$g=function(e,t,n){return D.u(e)?this[t]:this.set(n,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var n=this,r=!!D.u(t)||t,l=D.p(e),f=function(e,t){var a=D.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?a:a.endOf(o)},h=function(e,t){return D.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,g=this.$M,b=this.$D,y="set"+(this.$u?"UTC":"");switch(l){case d:return r?f(1,0):f(31,11);case c:return r?f(1,g):f(0,g+1);case u:var v=this.$locale().weekStart||0,$=(p<v?p+7:p)-v;return f(r?b-$:b+(6-$),g);case o:case m:return h(y+"Hours",0);case s:return h(y+"Minutes",1);case i:return h(y+"Seconds",2);case a:return h(y+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var n,u=D.p(e),l="set"+(this.$u?"UTC":""),f=(n={},n[o]=l+"Date",n[m]=l+"Date",n[c]=l+"Month",n[d]=l+"FullYear",n[s]=l+"Hours",n[i]=l+"Minutes",n[a]=l+"Seconds",n[r]=l+"Milliseconds",n)[u],h=u===o?this.$D+(t-this.$W):t;if(u===c||u===d){var p=this.clone().set(m,1);p.$d[f](h),p.init(),this.$d=p.set(m,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](h);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[D.p(e)]()},b.add=function(r,l){var m,f=this;r=Number(r);var h=D.p(l),p=function(e){var t=k(f);return D.w(t.date(t.date()+Math.round(e*r)),f)};if(h===c)return this.set(c,this.$M+r);if(h===d)return this.set(d,this.$y+r);if(h===o)return p(1);if(h===u)return p(7);var g=(m={},m[i]=t,m[s]=n,m[a]=e,m)[h]||1,b=this.$d.getTime()+r*g;return D.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",a=D.z(this),i=this.$H,s=this.$m,o=this.$M,u=n.weekdays,c=n.months,l=n.meridiem,d=function(e,n,a,i){return e&&(e[n]||e(t,r))||a[n].slice(0,i)},m=function(e){return D.s(i%12||12,e,"0")},h=l||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(p,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return D.s(t.$y,4,"0");case"M":return o+1;case"MM":return D.s(o+1,2,"0");case"MMM":return d(n.monthsShort,o,c,3);case"MMMM":return d(c,o);case"D":return t.$D;case"DD":return D.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,u,2);case"ddd":return d(n.weekdaysShort,t.$W,u,3);case"dddd":return u[t.$W];case"H":return String(i);case"HH":return D.s(i,2,"0");case"h":return m(1);case"hh":return m(2);case"a":return h(i,s,!0);case"A":return h(i,s,!1);case"m":return String(s);case"mm":return D.s(s,2,"0");case"s":return String(t.$s);case"ss":return D.s(t.$s,2,"0");case"SSS":return D.s(t.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(r,m,f){var h,p=this,g=D.p(m),b=k(r),y=(b.utcOffset()-this.utcOffset())*t,v=this-b,$=function(){return D.m(p,b)};switch(g){case d:h=$()/12;break;case c:h=$();break;case l:h=$()/3;break;case u:h=(v-y)/6048e5;break;case o:h=(v-y)/864e5;break;case s:h=v/n;break;case i:h=v/t;break;case a:h=v/e;break;default:h=v}return f?h:D.a(h)},b.daysInMonth=function(){return this.endOf(c).$D},b.$locale=function(){return $[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=M(e,t,!0);return r&&(n.$L=r),n},b.clone=function(){return D.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},g}(),_=S.prototype;return k.prototype=_,[["$ms",r],["$s",a],["$m",i],["$H",s],["$W",o],["$M",c],["$y",d],["$D",m]].forEach((function(e){_[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),k.extend=function(e,t){return e.$i||(e(t,S,k),e.$i=!0),k},k.locale=M,k.isDayjs=w,k.unix=function(e){return k(1e3*e)},k.en=$[v],k.Ls=$,k.p={},k}()},7235:function(e,t,n){n(5743),e.exports=function(){"use strict";return function(e,t,n){e=e||{};var r=t.prototype,a={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function i(e,t,n,a){return r.fromToBase(e,t,n,a)}n.en.relativeTime=a,r.fromToBase=function(t,r,i,s,o){for(var u,c,l,d=i.$locale().relativeTime||a,m=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],f=m.length,h=0;h<f;h+=1){var p=m[h];p.d&&(u=s?n(t).diff(i,p.d,!0):i.diff(t,p.d,!0));var g=(e.rounding||Math.round)(Math.abs(u));if(l=u>0,g<=p.r||!p.r){g<=1&&h>0&&(p=m[h-1]);var b=d[p.l];o&&(g=o(""+g)),c="string"==typeof b?b.replace("%d",g):b(g,r,p.l,l);break}}if(r)return c;var y=l?d.future:d.past;return"function"==typeof y?y(c):y.replace("%s",c)},r.to=function(e,t){return i(e,t,this,!0)},r.from=function(e,t){return i(e,t,this)};var s=function(e){return e.$u?n.utc():n()};r.toNow=function(e){return this.to(s(this),e)},r.fromNow=function(e){return this.from(s(this),e)}}}()},5837:function(e,t,n){var r=n(2109),a=n(7854);r({global:!0,forced:a.globalThis!==a},{globalThis:a})},5743:function(e,t,n){n(5837)},9504:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(7294),a=n(1880),i=n(3635),s=n(1082),o=n(3723),u=n(1379);var c,l,d="347174860",m=n(2121),f=n(4694),h=n(8538),p=n.n(h),g=n(7235),b=n.n(g);p().extend(b());function y(){var e=(0,u.$)(),t=e.author,n=e.avatar,a=e.bio;return r.createElement($,{className:"AuthorSnippet"},r.createElement(o.G,{image:n.childImageSharp.gatsbyImageData,alt:t,className:"Avatar"}),r.createElement("div",{className:"Description"},r.createElement("span",{className:"WrittenBy"},"Written By ",r.createElement("u",null,t)),r.createElement("p",{className:"Bio"},a)))}var v=i.Z.article(c||(c=(0,a.Z)(['\n  blockquote {\n    border-left: 1px;\n    border-style: solid;\n    border-color: #eb5757;\n    border-width: 3px;\n    border-top: 0;\n    border-right: 0;\n    border-bottom: 0;\n    margin: 0;\n    padding-left: 20px;\n    background-color: rgba(135, 131, 120, 0.15);\n    font-size: 1rem;\n    p {\n      padding: 5px 15px 5px 0;\n    }\n    ol,\n    ul {\n      padding: 5px 0px 5px 20px;\n      li {\n        a {\n          /* word-break: break-all; */\n          overflow: hidden;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n          width: 100%;\n          margin-bottom: -10px;\n        }\n      }\n    }\n    a {\n      color: #7c96db;\n      text-decoration: underline;\n    }\n  }\n  .language-text {\n    background: rgba(135, 131, 120, 0.15);\n    color: #eb5757;\n    padding: 2px 4px;\n  }\n  .Breadcrumb {\n    display: inline-block;\n    margin-bottom: 2rem;\n    padding: 0 0.5rem;\n    background-color: var(--subtext-color);\n    border-radius: var(--border-radius);\n    font-size: 12px;\n    font-weight: 400;\n  }\n\n  .Breadcrumb a {\n    letter-spacing: +1px;\n  }\n\n  .Breadcrumb a,\n  .Breadcrumb .BackArrow {\n    color: var(--background-color);\n  }\n\n  .Breadcrumb .BackArrow {\n    margin-right: 0.25rem;\n  }\n\n  width: 100%;\n  height: 100%;\n  max-width: 740px;\n  margin: 0 auto;\n  padding: var(--page-padding);\n\n  .Header,\n  .Banner,\n  .Body,\n  .Footer {\n    margin-bottom: 3rem;\n  }\n\n  .Category {\n    display: block;\n    text-transform: uppercase;\n    font-size: 0.875rem;\n    font-weight: 700;\n    letter-spacing: +1px;\n    color: var(--subtext-color);\n  }\n\n  .Details {\n    font-size: 0.875rem;\n    letter-spacing: +0.5px;\n  }\n\n  .ReadingTime {\n    margin-left: 0.5rem;\n  }\n\n  .ReadingTime::before {\n    content: "–";\n    margin-right: 0.5rem;\n  }\n\n  .BannerImage {\n    border-radius: var(--border-radius);\n    margin-bottom: 0;\n  }\n\n  .BannerCaption {\n    display: block;\n    font-size: 0.875rem;\n    letter-spacing: +0.5px;\n    text-align: center;\n  }\n\n  .Body .Content {\n    font-size: 1.125rem;\n    line-height: 2rem;\n    margin-bottom: 3rem;\n  }\n\n  .Body .Keyword {\n    font-size: 0.875rem;\n    background-color: var(--tertiary-color);\n    color: var(--subtext-color);\n    padding: 0.125rem 0.375rem;\n    margin-right: 0.5rem;\n    border-radius: 0.5rem;\n  }\n\n  .Footer {\n    border-top: 3px solid var(--tertiary-color);\n    padding-top: 3rem;\n  }\n\n  img {\n    max-height: 660px;\n    object-fit: cover;\n    border-radius: var(--border-radius);\n  }\n\n  :global(.gatsby-resp-image-wrapper),\n  :global(.gatsby-resp-image-background-image) {\n    margin: 2rem 0;\n    max-height: 660px;\n    overflow-y: hidden;\n  }\n\n  figure {\n    margin: 2rem 0;\n  }\n\n  figure > figcaption {\n    margin-top: -1rem;\n    text-align: center;\n    font-size: 0.875rem;\n    color: var(--subtext-color);\n  }\n']))),$=i.Z.div(l||(l=(0,a.Z)(["\n  &.AuthorSnippet {\n    width: 100%;\n    max-width: 660px;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-start;\n\n    .Avatar {\n      width: 100px;\n      height: 100px;\n      border-radius: 50%;\n    }\n\n    .Description {\n      width: 100%;\n      margin-top: 1rem;\n    }\n\n    .WrittenBy {\n      font-size: 0.875rem;\n      letter-spacing: +0.5px;\n      color: var(--subtext-color);\n    }\n\n    .Bio {\n      margin: 0.5rem 0;\n    }\n  }\n\n  @media screen and (min-width: 768px) {\n    &.AuthorSnippet {\n      padding: var(--page-padding);\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: center;\n\n      .Description {\n        width: 100%;\n        max-width: 27.5rem;\n      }\n    }\n  }\n"]))),x=function(e){var t=e.slug,n=(0,s.useStaticQuery)(d).allArticle.articles.find((function(e){return e.slug===t}));if(!n)return r.createElement("div",null,"작성된 글이 없습니다.");var a=p()().from(n.date,!0);return r.createElement(r.Fragment,null,r.createElement(m.pQ,{title:n.title,description:n.description||void 0,useTitleTemplate:!0}),r.createElement(f.T,null,r.createElement(v,{className:"Article"},r.createElement("div",{className:"Breadcrumb"},r.createElement(s.Link,{to:"/diary",title:"Back To Article Listing"},r.createElement("span",{className:"BackArrow"},"❮"),"All Diaries")),r.createElement("section",{className:"Header"},r.createElement("span",{className:"Category"},n.categories.join(" / ")),r.createElement("h1",null,n.title),r.createElement("div",{className:"Details"},n.date,r.createElement("span",{className:"ReadingTime"},a," ago"))),n.banner&&n.banner.src&&r.createElement("section",{className:"Banner"},r.createElement(o.G,{image:n.banner.src.childImageSharp.gatsbyImageData,alt:n.banner.alt||"Image for "+n.title,imgClassName:"BannerImage"}),n.banner.caption&&r.createElement("span",{className:"BannerCaption",dangerouslySetInnerHTML:{__html:n.banner.caption}})),r.createElement("section",{className:"Body"},r.createElement("div",{className:"Content",dangerouslySetInnerHTML:{__html:n.body}}),n.keywords&&n.keywords.map((function(e,t){return r.createElement("span",{key:t,className:"Keyword"},e)}))),r.createElement("section",{className:"Footer"},r.createElement(y,null)))))},w=function(e){var t=e.pageContext;return r.createElement(x,{slug:t.slug})}},434:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},1880:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),e.raw=t,e}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=component---src-templates-diary-index-tsx-c2b2ec4892515d1c8b35.js.map