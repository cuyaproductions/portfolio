(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"0fx2":function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t("nKUr"),i=t("vOnD"),o=t("c35u"),a=i.d.ul.withConfig({displayName:"TagsList__List"})(["display:flex;list-style:none;gap:0.7em;"]),c=i.d.li.withConfig({displayName:"TagsList__Tag"})([""," border:1px solid ",";color:",";display:inline-block;padding:0.2em 0.4em;border-radius:0.2em;"],Object(o.e)(o.c.small),(function(e){return e.theme.primary}),(function(e){return e.theme.primary}));function l(e){var n=e.tags;return 0===n.length?null:Object(r.jsx)(a,{children:n.map((function(e){return Object(r.jsx)(c,{children:e},e)}))})}l.defaultProps={tags:[]}},BsWD:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t("a3WO");function i(e,n){if(e){if("string"===typeof e)return Object(r.a)(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Object(r.a)(e,n):void 0}}},JHam:function(e,n,t){"use strict";t.d(n,"a",(function(){return A}));var r=t("nKUr"),i=t("a3WO");var o=t("BsWD");function a(e){return function(e){if(Array.isArray(e))return Object(i.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=t("vOnD"),l=t("q1tI"),s=t("A5+V"),u=c.d.div.withConfig({displayName:"TitledContent__Container"})(["margin-block-end:1.5rem;"]),d=c.d.h1.withConfig({displayName:"TitledContent__Heading"})(["margin:0;margin-block-end:0.5em;"]);function f(e){var n=e.heading,t=e.id,i=e.hierarchy,o=e.children;return Object(r.jsxs)(u,{children:[Object(r.jsx)(d,{as:"h".concat(i),id:t,children:n}),o]})}f.defaultProps={heading:void 0,id:void 0,hierarchy:1,children:void 0};var p=t("YFqc"),m=t.n(p),h=t("0fx2"),b=t("c35u"),g=t("hCUG"),j="1rem",v=Object(c.d)(g.a).withConfig({displayName:"ProjectCard__ReadMoreButton"})(["padding:0 0.1em;white-space:nowrap;&::after{content:' \\2192';display:inline;}"]),y=c.d.a.withConfig({displayName:"ProjectCard__Container"})(["margin-block-end:1.5rem;color:inherit;text-decoration:none;background-color:",";display:flex;flex-flow:column;&:focus{outline:2px solid ",";}&:focus,&:hover{","{","}}"],(function(e){return e.theme.bg02}),(function(e){return e.theme.primary}),v,g.b),O=c.d.header.withConfig({displayName:"ProjectCard__Header"})([""]),x=c.d.div.withConfig({displayName:"ProjectCard__Image"})(["block-size:12.5em;inline-size:100%;margin-block-end:1.3em;background:url('","') top center no-repeat;background-size:cover;"],(function(e){return e.url})),w=c.d.h2.withConfig({displayName:"ProjectCard__Heading"})(["margin-block-start:0;margin-block-end:0.4em;font-size:",";padding-inline-start:",";padding-inline-end:",";"],b.a.h2,j,j),C=c.d.p.withConfig({displayName:"ProjectCard__Summary"})(["flex:1 1 auto;padding-inline-start:",";padding-inline-end:",";"],j,j),_=c.d.footer.withConfig({displayName:"ProjectCard__Footer"})(["padding:",";"],j);function k(e){var n=e.img,t=e.heading,i=e.children,o=e.tags,a=e.url;return Object(r.jsx)(m.a,{href:a,passHref:!0,children:Object(r.jsxs)(y,{children:[Object(r.jsxs)(O,{children:[Object(r.jsx)(x,{url:n}),Object(r.jsx)(w,{children:t})]}),Object(r.jsxs)(C,{children:[i," ",Object(r.jsx)(v,{as:"span",children:"Read more"})]}),Object(r.jsx)(_,{children:Object(r.jsx)(h.a,{tags:o})})]})})}k.defaultProps={heading:void 0,img:void 0,children:void 0,tags:[],url:void 0};var P=c.d.div.withConfig({displayName:"ProjectFilter__Container"})(["cursor:pointer;"]),N=c.d.span.withConfig({displayName:"ProjectFilter__CheckboxDisplay"})(["display:inline-flex;justify-content:center;align-items:center;block-size:1em;inline-size:1em;font-size:0.8em;border-radius:0.1em;margin-inline-end:0.4em;border:1px solid ",";color:",";background-color:",";"],(function(e){return e.theme.primary}),(function(e){return e.theme.bg01}),(function(e){return e.selected?e.theme.primary:"transparent"})),z=c.d.input.withConfig({displayName:"ProjectFilter__Input"})(["clip:rect(0 0 0 0);clip-path:inset(100%);block-size:1px;overflow:hidden;position:absolute;white-space:nowrap;inline-size:1px;opacity:0;&:focus{& + label ","{box-shadow:0 0 0 1px currentColor,0 0 0 3px ",";}}"],N,(function(e){return e.theme.primary}));function L(e){var n=e.children,t=e.selected,i=e.onToggle;return Object(r.jsxs)(P,{children:[Object(r.jsx)(z,{type:"checkbox",id:n,checked:t,onChange:function(e){var t=e.target;return i(n,t.value)}}),Object(r.jsxs)("label",{htmlFor:n,children:[Object(r.jsx)(N,{selected:t,children:t&&Object(r.jsx)("svg",{width:"100%",height:"100%",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:Object(r.jsx)("path",{d:"M9.783 2l.766.643-5.785 6.894L1.7 6.966l.643-.766L4.64 8.128z"})})}),n]})]})}L.defaultProps={children:"",selected:!1,onToggle:function(){}};var T=c.d.div.withConfig({displayName:"ProjectFilterList__Container"})(["display:flex;align-items:baseline;gap:0.9em;font-size:",";"],b.a.h5),I=c.d.ul.withConfig({displayName:"ProjectFilterList__List"})(["display:flex;list-style:none;align-items:center;gap:0.3em 1em;flex-wrap:wrap;"]),F=c.d.span.withConfig({displayName:"ProjectFilterList__Label"})(["font-weight:400;white-space:nowrap;"]),M=c.d.button.withConfig({displayName:"ProjectFilterList__ResetButton"})(["font:inherit;font-size:0.9em;background:linear-gradient( transparent 0%,"," 0% ) no-repeat;background-size:auto 0;background-position:bottom;transition:background-size 150ms,color 150ms;text-decoration:none;color:",";padding:0.05em 0.7em;border:1px solid ",";cursor:pointer;&:hover{color:",";background-size:auto 100%;}&:focus{outline:2px solid ",";outline-offset:1px;}"],(function(e){return e.theme.primary}),(function(e){return e.theme.primary}),(function(e){return e.theme.primary}),(function(e){return e.theme.bg01}),(function(e){return e.theme.primary}));function R(e){var n=e.filters,t=e.selectedFilters,i=e.onToggle,o=e.onReset;return 0===n.length?null:Object(r.jsxs)(T,{children:[Object(r.jsx)(F,{children:"Filter by:"}),Object(r.jsxs)(I,{children:[n.map((function(e){return Object(r.jsx)("li",{children:Object(r.jsx)(L,{selected:t.includes(e),onToggle:i,children:e})},e)})),t.length>0&&Object(r.jsx)(M,{onClick:o,children:"Reset"})]})]})}R.defaultProps={filters:[],selectedFilters:[],onToggle:function(){},onReset:function(){}};var E=c.d.div.withConfig({displayName:"ProjectCardsGrid__Grid"})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(20em,1fr));grid-auto-rows:1fr;gap:0.5em;"]),S=c.d.div.withConfig({displayName:"ProjectCardsGrid__FiltersContainer"})(["margin-block-end:1em;"]);function A(e){var n=e.projects,t=Object(l.useState)([]),i=t[0],o=t[1],c=a(new Set(n.map((function(e){return e.tags})).flat())),u=i.length>0?n.filter((function(e){return e.tags.some((function(e){return i.includes(e)}))})):n;return Object(r.jsx)(s.a,{children:Object(r.jsxs)(f,{id:"projects",heading:"Projects",children:[Object(r.jsx)(S,{children:Object(r.jsx)(R,{filters:c,selectedFilters:i,onToggle:function(e){i.includes(e)?o((function(n){return n.filter((function(n){return n!==e}))})):o((function(n){return[].concat(a(n),[e])}))},onReset:function(){return o([])}})}),Object(r.jsx)(E,{children:u.map((function(e){var n;return Object(r.jsx)(k,{heading:e.name,img:"/".concat(null===(n=e.imgs)||void 0===n?void 0:n[0]),url:"/projects/".concat(e.slug),tags:e.tags,children:e.description},e.slug)}))})]})})}A.defaultProps={projects:[]}},ODXe:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t("BsWD");function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(l){i=!0,o=l}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return t}}(e,n)||Object(r.a)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},YFqc:function(e,n,t){e.exports=t("cTJO")},a3WO:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}t.d(n,"a",(function(){return r}))},c35u:function(e,n,t){"use strict";t.d(n,"c",(function(){return l})),t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return u})),t.d(n,"f",(function(){return d})),t.d(n,"d",(function(){return f})),t.d(n,"e",(function(){return p}));var r,i,o=t("ODXe"),a=t("rePB"),c=t("uIir"),l={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",small:"small"},s=(r={},Object(a.a)(r,l.h1,"1.383rem"),Object(a.a)(r,l.h2,"1.296rem"),Object(a.a)(r,l.h3,"1.215rem"),Object(a.a)(r,l.h4,"1.138rem"),Object(a.a)(r,l.h5,"1.067rem"),Object(a.a)(r,l.small,"0.937rem"),r),u=Object(a.a)({},c.a.md,(i={},Object(a.a)(i,l.h1,"1.802rem"),Object(a.a)(i,l.h2,"1.602rem"),Object(a.a)(i,l.h3,"1.424rem"),Object(a.a)(i,l.h4,"1.266rem"),Object(a.a)(i,l.h5,"1.125rem"),Object(a.a)(i,l.small,"0.889rem"),i)),d=function(e){return Object.entries(e).map((function(e){var n=Object(o.a)(e,2),t=n[0],r=n[1];return"\n          ".concat(t," {\n            font-size: ").concat(r,";\n          }\n        ")})).join("\n")},f=function(e,n){return"\n  ".concat(Object(c.b)(e)," {\n    ").concat(d(n),"\n  }\n")},p=function(e){return"\n  font-size: ".concat(s[e],";\n\n  ").concat(Object.entries(u).map((function(n){var t=Object(o.a)(n,2),r=t[0],i=t[1];return"\n      ".concat(Object(c.b)(r)," {\n        font-size: ").concat(i[e],";\n      }\n    ")})),"\n")}},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),i=t("284h");n.__esModule=!0,n.default=void 0;var o=i(t("q1tI")),a=t("elyg"),c=t("nOHt"),l=t("vNVm"),s={};function u(e,n,t,r){if(e&&(0,a.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(i?"%"+i:"")]=!0}}var d=function(e){var n=!1!==e.prefetch,t=(0,c.useRouter)(),i=t&&t.pathname||"/",d=o.default.useMemo((function(){var n=(0,a.resolveHref)(i,e.href,!0),t=r(n,2),o=t[0],c=t[1];return{href:o,as:e.as?(0,a.resolveHref)(i,e.as):c||o}}),[i,e.href,e.as]),f=d.href,p=d.as,m=e.children,h=e.replace,b=e.shallow,g=e.scroll,j=e.locale;"string"===typeof m&&(m=o.default.createElement("a",null,m));var v=o.Children.only(m),y=v&&"object"===typeof v&&v.ref,O=(0,l.useIntersection)({rootMargin:"200px"}),x=r(O,2),w=x[0],C=x[1],_=o.default.useCallback((function(e){w(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,w]);(0,o.useEffect)((function(){var e=C&&n&&(0,a.isLocalURL)(f),r="undefined"!==typeof j?j:t&&t.locale,i=s[f+"%"+p+(r?"%"+r:"")];e&&!i&&u(t,f,p,{locale:r})}),[p,f,C,j,n,t]);var k={ref:_,onClick:function(e){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(e),e.defaultPrevented||function(e,n,t,r,i,o,c,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),n[i?"replace":"push"](t,r,{shallow:o,locale:l,scroll:c}).then((function(e){e&&c&&document.body.focus()})))}(e,t,f,p,h,b,g,j)},onMouseEnter:function(e){(0,a.isLocalURL)(f)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(e),u(t,f,p,{priority:!0}))}};if(e.passHref||"a"===v.type&&!("href"in v.props)){var P="undefined"!==typeof j?j:t&&t.locale,N=(0,a.getDomainLocale)(p,P,t&&t.locales,t&&t.domainLocales);k.href=N||(0,a.addBasePath)((0,a.addLocale)(p,P,t&&t.defaultLocale))}return o.default.cloneElement(v,k)};n.default=d},hCUG:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return o}));var r=t("vOnD"),i=Object(r.c)(["background-size:auto 100%;color:",";"],(function(e){return e.theme.bg01})),o=Object(r.c)(["background:linear-gradient( transparent 0%,"," 0% ) no-repeat;background-size:auto 2px;background-position:bottom;transition:background-size 150ms,color 150ms;text-decoration:none;&:hover{","}"],(function(e){return e.theme.primary}),i);n.a=r.d.a.withConfig({displayName:"StyledLink"})(["",""],o)},rePB:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,"a",(function(){return r}))},uIir:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return i}));var r={sm:36,md:48,lg:62,xl:75,xxl:87.5},i=function(e){return"\n  @media (min-width: ".concat(e,"em)\n")}},vNVm:function(e,n,t){"use strict";var r=t("J4zp"),i=t("TqRt");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,i=(0,o.useRef)(),s=(0,o.useState)(!1),u=r(s,2),d=u[0],f=u[1],p=(0,o.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),t||d||e&&e.tagName&&(i.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=l.get(n);if(t)return t;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return l.set(n,t={id:n,observer:i,elements:r}),t}(t),i=r.id,o=r.observer,a=r.elements;return a.set(e,n),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),l.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[t,n,d]);return(0,o.useEffect)((function(){c||d||(0,a.default)((function(){return f(!0)}))}),[d]),[p,d]};var o=t("q1tI"),a=i(t("0G5g")),c="undefined"!==typeof IntersectionObserver;var l=new Map}}]);