(self.webpackChunkgatsby_starter_portfolio_minimal_theme=self.webpackChunkgatsby_starter_portfolio_minimal_theme||[]).push([[361],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var u,c,s,l;if(Array.isArray(e)){if((u=e.length)!=a.length)return!1;for(c=u;0!=c--;)if(!i(e[c],a[c]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;for(l=e.entries();!(c=l.next()).done;)if(!i(c.value[1],a.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((u=e.length)!=a.length)return!1;for(c=u;0!=c--;)if(e[c]!==a[c])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((u=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(c=u;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,s[c]))return!1;if(t&&e instanceof Element)return!1;for(c=u;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!e.$$typeof)&&!i(e[s[c]],a[s[c]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},5414:function(e,t,n){"use strict";n.d(t,{q:function(){return ye}});var r,o,i,a,u=n(5697),c=n.n(u),s=n(4839),l=n.n(s),f=n(2993),d=n.n(f),p=n(7294),m=n(6494),y=n.n(m),h="bodyAttributes",v="htmlAttributes",b="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(g).map((function(e){return g[e]})),"charset"),w="cssText",E="href",S="http-equiv",C="innerHTML",A="itemprop",O="name",k="property",j="rel",L="src",P="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},x="defaultTitle",I="defer",M="encodeSpecialCharacters",_="onChangeClientState",B="titleTemplate",D=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),R=[g.NOSCRIPT,g.SCRIPT,g.STYLE],F="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},U=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=J(e,g.TITLE),n=J(e,B);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=J(e,x);return t||r||void 0},G=function(e){return J(e,_)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],c=u.toLowerCase();-1===t.indexOf(c)||n===j&&"canonical"===e[n].toLowerCase()||c===j&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(u)||u!==C&&u!==w&&u!==A||(n=u)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],c=y()({},r[u],o[u]);r[u]=c}return e}),[]).reverse()},J=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Z=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Z(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Z:n.g.requestAnimationFrame||Z,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,d=e.titleAttributes;ce(g.BODY,r),ce(g.HTML,o),ue(f,d);var p={baseTag:se(g.BASE,n),linkTags:se(g.LINK,i),metaTags:se(g.META,a),noscriptTags:se(g.NOSCRIPT,u),scriptTags:se(g.SCRIPT,s),styleTags:se(g.STYLE,l)},m={},y={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(y[e]=p[e].oldTags)})),t&&t(),c(e,m,y)},ae=function(e){return Array.isArray(e)?e.join(""):e},ue=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ce(g.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(F),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var c=a[u],s=t[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===o.indexOf(c)&&o.push(c);var l=i.indexOf(c);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(F):n.getAttribute(F)!==a.join(",")&&n.setAttribute(F,a.join(","))}},se=function(e,t){var n=document.head||document.querySelector(g.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(F,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[N[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[F]=!0,o=fe(n,r),[p.createElement(g.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=le(n),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+K(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case h:case v:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[F]=!0,r);return Object.keys(t).forEach((function(e){var n=N[e]||e;if(n===C||n===w){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),p.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===C||e===w)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,d=e.titleAttributes;return{base:de(g.BASE,t,r),bodyAttributes:de(h,n,r),htmlAttributes:de(v,o,r),link:de(g.LINK,i,r),meta:de(g.META,a,r),noscript:de(g.NOSCRIPT,u,r),script:de(g.SCRIPT,c,r),style:de(g.STYLE,s,r),title:de(g.TITLE,{title:f,titleAttributes:d},r)}},me=l()((function(e){return{baseTag:X([E,P],e),bodyAttributes:Q(h,e),defer:J(e,I),encode:J(e,M),htmlAttributes:Q(v,e),linkTags:$(g.LINK,[j,E],e),metaTags:$(g.META,[O,T,S,k,A],e),noscriptTags:$(g.NOSCRIPT,[C],e),onChangeClientState:G(e),scriptTags:$(g.SCRIPT,[L,C],e),styleTags:$(g.STYLE,[w],e),title:V(e),titleAttributes:Q(b,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),pe)((function(){return null})),ye=(o=me,a=i=function(e){function t(){return q(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case g.TITLE:return Y({},o,((t={})[r.type]=a,t.titleAttributes=Y({},i),t));case g.BODY:return Y({},o,{bodyAttributes:Y({},i)});case g.HTML:return Y({},o,{htmlAttributes:Y({},i)})}return Y({},o,((n={})[r.type]=Y({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return p.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)}(z(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=z(e,["children"]),r=Y({},n);return t&&(r=this.mapChildrenToProps(t,r)),p.createElement(o,r)},U(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(p.Component),i.propTypes={base:c().object,bodyAttributes:c().object,children:c().oneOfType([c().arrayOf(c().node),c().node]),defaultTitle:c().string,defer:c().bool,encodeSpecialCharacters:c().bool,htmlAttributes:c().object,link:c().arrayOf(c().object),meta:c().arrayOf(c().object),noscript:c().arrayOf(c().object),onChangeClientState:c().func,script:c().arrayOf(c().object),style:c().arrayOf(c().object),title:c().string,titleAttributes:c().object,titleTemplate:c().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);ye.renderStatic=ye.rewind,t.Z=ye},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function l(){c=e(s.map((function(e){return e.props}))),f.canUseDOM?t(c):n&&(c=n(c))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",u),f}}},4883:function(e,t,n){"use strict";n.d(t,{f:function(){return a}});var r=n(7294),o=n(7180),i=n(6755);function a(e){var t,n,a,u,c,s,l=(0,o.W)(),f=(0,i.R)(l),d=null!==(t=e.type)&&void 0!==t?t:"fadeIn",p=null!==(n=e.timing)&&void 0!==n?n:"ease-out",m=null!==(a=e.duration)&&void 0!==a?a:200,y=null!==(u=e.delay)&&void 0!==u?u:0,h=null!==(c=e.iterationCount)&&void 0!==c?c:1,v=null!==(s=e.fillMode)&&void 0!==s?s:"backwards";return r.createElement("div",{ref:l,className:e.className,onAnimationEnd:e.onAnimationEnd,style:f?Object.assign({},e.style,{animationName:""+d,animationTimingFunction:""+p,animationDuration:m+"ms",animationDelay:y+"ms",animationIterationCount:""+h,animationFillMode:""+v}):Object.assign({},e.style,{opacity:0})},e.children)}},2614:function(e,t,n){"use strict";n.d(t,{h:function(){return l}});var r=n(7294),o=n(1082),i=n(3970),a=n(5414),u=n(8758),c=n(6009),s=n(4883);function l(){var e=r.useState(!1),t=e[0],n=e[1],l=(0,c.F)(),f=(0,u.a)("(min-width: 992px)"),d=r.createElement(r.Fragment,null,l.navigation.header.map((function(e,i){return r.createElement(o.Link,{key:i,to:e.url,className:"style-module--NavLink--94101",onClick:f?void 0:function(){return n(!t)}},e.label)})),r.createElement("a",{href:l.navigation.ctaButton.url,target:l.navigation.ctaButton.openNewTab?"_blank":void 0,rel:"noopener noreferrer",className:"style-module--CtaButton--cf786",onClick:f?void 0:function(){return n(!t)}},l.navigation.ctaButton.label)),p=r.createElement(r.Fragment,null,r.createElement("div",{className:"style-module--Burger--1ab74",onClick:function(){return n(!t)}},r.createElement("div",{style:t?{transform:"rotate(45deg)"}:void 0}),r.createElement("div",{style:t?{transform:"translateX(20px)",opacity:0}:void 0}),r.createElement("div",{style:t?{transform:"rotate(-45deg)"}:void 0})),r.createElement("div",{className:"style-module--SideBarWrapper--e7152",style:t?{transform:"translateX(0)",visibility:"visible"}:void 0,"aria-hidden":!t,tabIndex:t?1:-1},r.createElement("nav",{className:"style-module--SideNavigationBar--57a7b"},d)),r.createElement("div",{className:"style-module--SideBarBackdrop--fb470",style:t?{display:"block"}:void 0})),m=r.createElement("nav",{className:"style-module--TopNavigationBar--574b3"},d);return r.createElement("header",{className:"style-module--Header--9993b"},r.createElement(a.q,{bodyAttributes:{class:t?"style-module--Blurred--f203e":void 0}}),r.createElement(s.f,{className:"style-module--ContentWrapper --5d8c4",type:"fadeDown"},r.createElement(o.Link,{to:"/","aria-label":"home"},r.createElement(i.T,{fontSize:"2rem",color:"var(--primary-color"})),f?m:p))}},3970:function(e,t,n){"use strict";n.d(t,{T:function(){return i}});var r=n(7294),o=n(6009);function i(e){var t=(0,o.F)(),n=e.fontSize||"2rem",i=e.color||"var(--primary-color)";return r.createElement("div",{className:"style-module--Logo--c7351","aria-roledescription":"logo",style:{fontSize:n,color:i}},t.logo.text)}},5400:function(e,t,n){"use strict";n.d(t,{MC:function(){return c},Q2:function(){return r},Us:function(){return o},j1:function(){return s}});var r,o,i=n(7294),a=n(8758);!function(e){e.Light="lightTheme",e.Dark="darkTheme"}(r||(r={})),function(e){e.SetTheme="SET_THEME",e.SetSplashScreenDone="SET_SPLASH_SCREEN_DONE"}(o||(o={}));var u=i.createContext(void 0);function c(e){var t=i.useReducer(l,{theme:f(e.defaultTheme,e.useDarkModeBasedOnUsersPreference),splashScreenDone:!e.useSplashScreenAnimation}),n=t[0],r=t[1];return i.createElement(u.Provider,{value:{globalState:n,dispatch:r}},e.children)}function s(){var e=i.useContext(u);if(void 0===e)throw new Error("useGlobalState must be used within a GlobalStateProvider");return e}function l(e,t){switch(t.type){case o.SetTheme:return Object.assign({},e,{theme:t.value});case o.SetSplashScreenDone:return Object.assign({},e,{splashScreenDone:t.value});default:throw new Error("Unhandled action type")}}function f(e,t){var n=(0,a.a)("(prefers-color-scheme: dark)",(function(e){var t=e?r.Dark:r.Light;document.body.setAttribute("data-theme",t)})),o=e;return t&&n&&(o=r.Dark),o}},7180:function(e,t,n){"use strict";n.d(t,{W:function(){return o}});var r=n(7294);function o(){return r.useRef()}},8758:function(e,t,n){"use strict";n.d(t,{a:function(){return o}});var r=n(7294);function o(e,t){if("undefined"==typeof window||void 0===window.matchMedia)return!1;var n=window.matchMedia(e),o=r.useState(n.matches),i=o[0],a=o[1];return r.useEffect((function(){function e(){a(n.matches),null==t||t(n.matches)}return n.addEventListener?(n.addEventListener("change",e),function(){return n.removeEventListener("change",e)}):(n.addListener(e),function(){return n.removeListener(e)})}),[]),i}},6755:function(e,t,n){"use strict";n.d(t,{R:function(){return o}});var r=n(7294);function o(e,t){void 0===t&&(t=.25);var n=(0,r.useState)(!1),o=n[0],i=n[1];return(0,r.useEffect)((function(){var n=e.current,r=new IntersectionObserver((function(e){var t=e[0];t.isIntersecting&&(i(!0),r.unobserve(t.target))}),{threshold:t});return n&&n instanceof Element&&r.observe(n),function(){n&&n instanceof Element&&r.unobserve(n)}}),[e,t]),o}},6009:function(e,t,n){"use strict";n.d(t,{F:function(){return o}});var r=n(1082);function o(){return(0,r.useStaticQuery)(i).allSettingsJson.settings[0].siteConfiguration}var i="1094019748"}}]);
//# sourceMappingURL=177ba470ae01fe94c75a16fb750984d4a496b677-a458d0cfc067c9b0f57d.js.map