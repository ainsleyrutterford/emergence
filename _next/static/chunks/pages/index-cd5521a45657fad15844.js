(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9917:function(e,t,i){"use strict";var n=i(3038),r=i(319);t.default=function(e){var t=e.src,i=e.sizes,r=e.unoptimized,s=void 0!==r&&r,l=e.priority,d=void 0!==l&&l,m=e.loading,p=e.lazyBoundary,j=void 0===p?"200px":p,x=e.className,y=e.quality,M=e.width,b=e.height,L=e.objectFit,A=e.objectPosition,I=e.onLoadingComplete,S=e.loader,O=void 0===S?w:S,D=e.placeholder,z=void 0===D?"empty":D,T=e.blurDataURL,_=function(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}(e,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),E=i?"responsive":"intrinsic";"layout"in _&&(_.layout&&(E=_.layout),delete _.layout);var k="";if(function(e){return"object"===typeof e&&(h(e)||function(e){return void 0!==e.src}(e))}(t)){var C=h(t)?t.default:t;if(!C.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(C)));if(T=T||C.blurDataURL,k=C.src,(!E||"fill"!==E)&&(b=b||C.height,M=M||C.width,!C.height||!C.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(C)))}t="string"===typeof t?t:k;var P=N(M),W=N(b),R=N(y),Q=!d&&("lazy"===m||"undefined"===typeof m);t.startsWith("data:")&&(s=!0,Q=!1);f.has(t)&&(Q=!1);0;var U,H,Y,q=u.useIntersection({rootMargin:j,disabled:!Q}),B=n(q,2),V=B[0],F=B[1],J=!Q||F,G={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:L,objectPosition:A},X="blur"===z?{filter:"blur(20px)",backgroundSize:L||"cover",backgroundImage:'url("'.concat(T,'")'),backgroundPosition:A||"0% 0%"}:{};if("fill"===E)U={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0};else if("undefined"!==typeof P&&"undefined"!==typeof W){var Z=W/P,K=isNaN(Z)?"100%":"".concat(100*Z,"%");"responsive"===E?(U={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},H={display:"block",boxSizing:"border-box",paddingTop:K}):"intrinsic"===E?(U={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},H={boxSizing:"border-box",display:"block",maxWidth:"100%"},Y='<svg width="'.concat(P,'" height="').concat(W,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===E&&(U={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:P,height:W})}else 0;var $={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};J&&($=v({src:t,unoptimized:s,layout:E,width:P,quality:R,sizes:i,loader:O}));var ee=t;return o.default.createElement("div",{style:U},H?o.default.createElement("div",{style:H},Y?o.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(c.toBase64(Y))}):null):null,!J&&o.default.createElement("noscript",null,o.default.createElement("img",Object.assign({},_,v({src:t,unoptimized:s,layout:E,width:P,quality:R,sizes:i,loader:O}),{decoding:"async","data-nimg":!0,style:G,className:x}))),o.default.createElement("img",Object.assign({},_,$,{decoding:"async","data-nimg":!0,className:x,ref:function(e){V(e),function(e,t,i,n){if(!e)return;var r=function(){e.src.startsWith("data:")||("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===i&&(e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"),f.add(t),n){var r=e.naturalWidth,o=e.naturalHeight;n({naturalWidth:r,naturalHeight:o})}}))};e.complete?r():e.onload=r}(e,ee,z,I)},style:g({},G,X)})),d?o.default.createElement(a.default,null,o.default.createElement("link",{key:"__nimg-"+$.src+$.srcSet+$.sizes,rel:"preload",as:"image",href:$.srcSet?void 0:$.src,imagesrcset:$.srcSet,imagesizes:$.sizes})):null)};var o=d(i(7294)),a=d(i(639)),c=i(8997),s=i(5809),u=i(7426);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function d(e){return e&&e.__esModule?e:{default:e}}function g(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),n.forEach((function(t){l(e,t,i[t])}))}return e}var f=new Set;var m=new Map([["default",function(e){var t=e.root,i=e.src,n=e.width,r=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(r||75)}],["imgix",function(e){var t=e.root,i=e.src,n=e.width,r=e.quality,o=new URL("".concat(t).concat(L(i))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),r&&a.set("q",r.toString());return o.href}],["cloudinary",function(e){var t=e.root,i=e.src,n=e.width,r=e.quality,o=["f_auto","c_limit","w_"+n,"q_"+(r||"auto")].join(",")+"/";return"".concat(t).concat(o).concat(L(i))}],["akamai",function(e){var t=e.root,i=e.src,n=e.width;return"".concat(t).concat(L(i),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function h(e){return void 0!==e.default}var p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom"}||s.imageConfigDefault,j=p.deviceSizes,x=p.imageSizes,y=p.loader,M=p.path,b=(p.domains,[].concat(r(j),r(x)));function v(e){var t=e.src,i=e.unoptimized,n=e.layout,o=e.width,a=e.quality,c=e.sizes,s=e.loader;if(i)return{src:t,srcSet:void 0,sizes:void 0};var u=function(e,t,i){if(i&&("fill"===t||"responsive"===t)){for(var n,o=/(^|\s)(1?\d?\d)vw/g,a=[];n=o.exec(i);n)a.push(parseInt(n[2]));if(a.length){var c=.01*Math.min.apply(Math,a);return{widths:b.filter((function(e){return e>=j[0]*c})),kind:"w"}}return{widths:b,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:j,kind:"w"}:{widths:r(new Set([e,2*e].map((function(e){return b.find((function(t){return t>=e}))||b[b.length-1]})))),kind:"x"}}(o,n,c),l=u.widths,d=u.kind,g=l.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:l.map((function(e,i){return"".concat(s({src:t,quality:a,width:e})," ").concat("w"===d?e:i+1).concat(d)})).join(", "),src:s({src:t,quality:a,width:l[g]})}}function N(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function w(e){var t=m.get(y);if(t)return t(g({root:M},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(s.VALID_LOADERS.join(", "),". Received: ").concat(y))}function L(e){return"/"===e[0]?e.slice(1):e}j.sort((function(e,t){return e-t})),b.sort((function(e,t){return e-t}))},7426:function(e,t,i){"use strict";var n=i(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,i=e.disabled||!a,s=r.useRef(),u=r.useState(!1),l=n(u,2),d=l[0],g=l[1],f=r.useCallback((function(e){s.current&&(s.current(),s.current=void 0),i||d||e&&e.tagName&&(s.current=function(e,t,i){var n=function(e){var t=e.rootMargin||"",i=c.get(t);if(i)return i;var n=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;t&&i&&t(i)}))}),e);return c.set(t,i={id:t,observer:r,elements:n}),i}(i),r=n.id,o=n.observer,a=n.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),c.delete(r))}}(e,(function(e){return e&&g(e)}),{rootMargin:t}))}),[i,t,d]);return r.useEffect((function(){if(!a&&!d){var e=o.requestIdleCallback((function(){return g(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[d]),[f,d]};var r=i(7294),o=i(3447),a="undefined"!==typeof IntersectionObserver;var c=new Map},8997:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},2562:function(e,t,i){"use strict";i.r(t);var n=i(5893),r=i(9008),o=i(5675),a=i(4476),c=i.n(a);t.default=function(){return(0,n.jsxs)("div",{className:c().container,children:[(0,n.jsxs)(r.default,{children:[(0,n.jsx)("title",{children:"Create Next App"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("link",{rel:"icon",href:"../public/favicon.ico"})]}),(0,n.jsxs)("main",{className:c().main,children:[(0,n.jsxs)("h1",{className:c().title,children:["Welcome to ",(0,n.jsx)("a",{href:"https://nextjs.org",children:"Next.js!"})]}),(0,n.jsxs)("p",{className:c().description,children:["Get started by editing"," ",(0,n.jsx)("code",{className:c().code,children:"pages/index.js"})]}),(0,n.jsxs)("div",{className:c().grid,children:[(0,n.jsxs)("a",{href:"https://nextjs.org/docs",className:c().card,children:[(0,n.jsx)("h2",{children:"Documentation \u2192"}),(0,n.jsx)("p",{children:"Find in-depth information about Next.js features and API."})]}),(0,n.jsxs)("a",{href:"https://nextjs.org/learn",className:c().card,children:[(0,n.jsx)("h2",{children:"Learn \u2192"}),(0,n.jsx)("p",{children:"Learn about Next.js in an interactive course with quizzes!"})]}),(0,n.jsxs)("a",{href:"https://github.com/vercel/next.js/tree/master/examples",className:c().card,children:[(0,n.jsx)("h2",{children:"Examples \u2192"}),(0,n.jsx)("p",{children:"Discover and deploy boilerplate example Next.js projects."})]}),(0,n.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:c().card,children:[(0,n.jsx)("h2",{children:"Deploy \u2192"}),(0,n.jsx)("p",{children:"Instantly deploy your Next.js site to a public URL with Vercel."})]})]})]}),(0,n.jsx)("footer",{className:c().footer,children:(0,n.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,n.jsx)("span",{className:c().logo,children:(0,n.jsx)(o.default,{src:i(572),alt:"Vercel Logo",width:72,height:16})})]})})]})}},5301:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(2562)}])},4476:function(e){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH"}},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60}},9008:function(e,t,i){e.exports=i(639)},5675:function(e,t,i){e.exports=i(9917)},572:function(e){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgzIiBoZWlnaHQ9IjY0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNDEuMDQgMTZjLTExLjA0IDAtMTkgNy4yLTE5IDE4czguOTYgMTggMjAgMThjNi42NyAwIDEyLjU1LTIuNjQgMTYuMTktNy4wOWwtNy42NS00LjQyYy0yLjAyIDIuMjEtNS4wOSAzLjUtOC41NCAzLjUtNC43OSAwLTguODYtMi41LTEwLjM3LTYuNWgyOC4wMmMuMjItMS4xMi4zNS0yLjI4LjM1LTMuNSAwLTEwLjc5LTcuOTYtMTcuOTktMTktMTcuOTl6bS05LjQ2IDE0LjVjMS4yNS0zLjk5IDQuNjctNi41IDkuNDUtNi41IDQuNzkgMCA4LjIxIDIuNTEgOS40NSA2LjVoLTE4Ljl6TTI0OC43MiAxNmMtMTEuMDQgMC0xOSA3LjItMTkgMThzOC45NiAxOCAyMCAxOGM2LjY3IDAgMTIuNTUtMi42NCAxNi4xOS03LjA5bC03LjY1LTQuNDJjLTIuMDIgMi4yMS01LjA5IDMuNS04LjU0IDMuNS00Ljc5IDAtOC44Ni0yLjUtMTAuMzctNi41aDI4LjAyYy4yMi0xLjEyLjM1LTIuMjguMzUtMy41IDAtMTAuNzktNy45Ni0xNy45OS0xOS0xNy45OXptLTkuNDUgMTQuNWMxLjI1LTMuOTkgNC42Ny02LjUgOS40NS02LjUgNC43OSAwIDguMjEgMi41MSA5LjQ1IDYuNWgtMTguOXpNMjAwLjI0IDM0YzAgNiAzLjkyIDEwIDEwIDEwIDQuMTIgMCA3LjIxLTEuODcgOC44LTQuOTJsNy42OCA0LjQzYy0zLjE4IDUuMy05LjE0IDguNDktMTYuNDggOC40OS0xMS4wNSAwLTE5LTcuMi0xOS0xOHM3Ljk2LTE4IDE5LTE4YzcuMzQgMCAxMy4yOSAzLjE5IDE2LjQ4IDguNDlsLTcuNjggNC40M2MtMS41OS0zLjA1LTQuNjgtNC45Mi04LjgtNC45Mi02LjA3IDAtMTAgNC0xMCAxMHptODIuNDgtMjl2NDZoLTlWNWg5ek0zNi45NSAwIDczLjkgNjRIMEwzNi45NSAwem05Mi4zOCA1LTI3LjcxIDQ4TDczLjkxIDVIODQuM2wxNy4zMiAzMCAxNy4zMi0zMGgxMC4zOXptNTguOTEgMTJ2OS42OWMtMS0uMjktMi4wNi0uNDktMy4yLS40OS01LjgxIDAtMTAgNC0xMCAxMFY1MWgtOVYxN2g5djkuMmMwLTUuMDggNS45MS05LjIgMTMuMi05LjJ6IiBmaWxsPSIjMDAwIi8+PC9zdmc+"}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);