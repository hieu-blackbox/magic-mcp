"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[71],{35203:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let r=n(87677),o=n(74848),i=r._(n(96540)),a=n(4881);async function u(e){let{Component:t,ctx:n}=e;return{pageProps:await (0,a.loadGetInitialProps)(t,n)}}class s extends i.default.Component{render(){let{Component:e,pageProps:t}=this.props;return(0,o.jsx)(e,{...t})}}s.origGetInitialProps=u,s.getInitialProps=u,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},86218:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let r=n(87677),o=n(74848),i=r._(n(96540)),a=r._(n(23248)),u={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function s(e){let{res:t,err:n}=e;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}let c={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class _ extends i.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,n=this.props.title||u[e]||"An unexpected error has occurred";return(0,o.jsxs)("div",{style:c.error,children:[(0,o.jsx)(a.default,{children:(0,o.jsx)("title",{children:e?e+": "+n:"Application error: a client-side exception has occurred"})}),(0,o.jsxs)("div",{style:c.desc,children:[(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?(0,o.jsx)("h1",{className:"next-error-h1",style:c.h1,children:e}):null,(0,o.jsx)("div",{style:c.wrap,children:(0,o.jsxs)("h2",{style:c.h2,children:[this.props.title||e?n:(0,o.jsx)(o.Fragment,{children:"Application error: a client-side exception has occurred (see the browser console for more information)"}),"."]})})]})]})}}_.displayName="ErrorPage",_.getInitialProps=s,_.origGetInitialProps=s,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},36192:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ACTION_SUFFIX:function(){return d},APP_DIR_ALIAS:function(){return D},CACHE_ONE_YEAR:function(){return N},DOT_NEXT_ALIAS:function(){return v},ESLINT_DEFAULT_DIRS:function(){return q},GSP_NO_RETURNED_VALUE:function(){return V},GSSP_COMPONENT_MEMBER_ERROR:function(){return z},GSSP_NO_RETURNED_VALUE:function(){return W},INFINITE_CACHE:function(){return m},INSTRUMENTATION_HOOK_FILENAME:function(){return b},MATCHED_PATH_HEADER:function(){return o},MIDDLEWARE_FILENAME:function(){return h},MIDDLEWARE_LOCATION_REGEXP:function(){return x},NEXT_BODY_SUFFIX:function(){return E},NEXT_CACHE_IMPLICIT_TAG_ID:function(){return O},NEXT_CACHE_REVALIDATED_TAGS_HEADER:function(){return R},NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER:function(){return g},NEXT_CACHE_SOFT_TAGS_HEADER:function(){return A},NEXT_CACHE_SOFT_TAG_MAX_LENGTH:function(){return I},NEXT_CACHE_TAGS_HEADER:function(){return p},NEXT_CACHE_TAG_MAX_ITEMS:function(){return T},NEXT_CACHE_TAG_MAX_LENGTH:function(){return P},NEXT_DATA_SUFFIX:function(){return l},NEXT_INTERCEPTION_MARKER_PREFIX:function(){return r},NEXT_META_SUFFIX:function(){return f},NEXT_QUERY_PARAM_PREFIX:function(){return n},NEXT_RESUME_HEADER:function(){return S},NON_STANDARD_NODE_ENV:function(){return J},PAGES_DIR_ALIAS:function(){return C},PRERENDER_REVALIDATE_HEADER:function(){return i},PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER:function(){return a},PUBLIC_DIR_MIDDLEWARE_CONFLICT:function(){return X},ROOT_DIR_ALIAS:function(){return y},RSC_ACTION_CLIENT_WRAPPER_ALIAS:function(){return F},RSC_ACTION_ENCRYPTION_ALIAS:function(){return U},RSC_ACTION_PROXY_ALIAS:function(){return L},RSC_ACTION_VALIDATE_ALIAS:function(){return M},RSC_CACHE_WRAPPER_ALIAS:function(){return w},RSC_MOD_REF_PROXY_ALIAS:function(){return j},RSC_PREFETCH_SUFFIX:function(){return u},RSC_SEGMENTS_DIR_SUFFIX:function(){return s},RSC_SEGMENT_SUFFIX:function(){return c},RSC_SUFFIX:function(){return _},SERVER_PROPS_EXPORT_ERROR:function(){return k},SERVER_PROPS_GET_INIT_PROPS_CONFLICT:function(){return B},SERVER_PROPS_SSG_CONFLICT:function(){return H},SERVER_RUNTIME:function(){return $},SSG_FALLBACK_EXPORT_ERROR:function(){return Q},SSG_GET_INITIAL_PROPS_CONFLICT:function(){return G},STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR:function(){return Y},UNSTABLE_REVALIDATE_RENAME_ERROR:function(){return K},WEBPACK_LAYERS:function(){return ee},WEBPACK_RESOURCE_QUERIES:function(){return et}});let n="nxtP",r="nxtI",o="x-matched-path",i="x-prerender-revalidate",a="x-prerender-revalidate-if-generated",u=".prefetch.rsc",s=".segments",c=".segment.rsc",_=".rsc",d=".action",l=".json",f=".meta",E=".body",p="x-next-cache-tags",A="x-next-cache-soft-tags",R="x-next-revalidated-tags",g="x-next-revalidate-tag-token",S="next-resume",T=128,P=256,I=1024,O="_N_T_",N=31536e3,m=0xfffffffe,h="middleware",x=`(?:src/)?${h}`,b="instrumentation",C="private-next-pages",v="private-dot-next",y="private-next-root-dir",D="private-next-app-dir",j="private-next-rsc-mod-ref-proxy",M="private-next-rsc-action-validate",L="private-next-rsc-server-reference",w="private-next-rsc-cache-wrapper",U="private-next-rsc-action-encryption",F="private-next-rsc-action-client-wrapper",X="You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict",G="You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps",B="You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.",H="You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps",Y="can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props",k="pages with `getServerSideProps` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export",V="Your `getStaticProps` function did not return an object. Did you forget to add a `return`?",W="Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?",K="The `unstable_revalidate` property is available for general use.\nPlease use `revalidate` instead.",z="can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member",J='You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env',Q="Pages with `fallback` enabled in `getStaticPaths` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export",q=["app","pages","components","lib","src"],$={edge:"edge",experimentalEdge:"experimental-edge",nodejs:"nodejs"},Z={shared:"shared",reactServerComponents:"rsc",serverSideRendering:"ssr",actionBrowser:"action-browser",api:"api",middleware:"middleware",instrument:"instrument",edgeAsset:"edge-asset",appPagesBrowser:"app-pages-browser"},ee={...Z,GROUP:{builtinReact:[Z.reactServerComponents,Z.actionBrowser],serverOnly:[Z.reactServerComponents,Z.actionBrowser,Z.instrument,Z.middleware],neutralTarget:[Z.api],clientOnly:[Z.serverSideRendering,Z.appPagesBrowser],bundled:[Z.reactServerComponents,Z.actionBrowser,Z.serverSideRendering,Z.appPagesBrowser,Z.shared,Z.instrument],appPages:[Z.reactServerComponents,Z.serverSideRendering,Z.appPagesBrowser,Z.actionBrowser]}},et={edgeSSREntry:"__next_edge_ssr_entry__",metadata:"__next_metadata__",metadataRoute:"__next_metadata_route__",metadataImageMeta:"__next_metadata_image_meta__"}},2976:(e,t)=>{function n(e){return"/api"===e||!!(null==e?void 0:e.startsWith("/api/"))}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isAPIRoute",{enumerable:!0,get:function(){return n}})},83382:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return o},getProperError:function(){return i}});let r=n(51775);function o(e){return"object"==typeof e&&null!==e&&"name"in e&&"message"in e}function i(e){return o(e)?e:Error((0,r.isPlainObject)(e)?function(e){let t=new WeakSet;return JSON.stringify(e,(e,n)=>{if("object"==typeof n&&null!==n){if(t.has(n))return"[Circular]";t.add(n)}return n})}(e):e+"")}},69762:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return o},getProperError:function(){return i}});let r=n(79844);function o(e){return"object"==typeof e&&null!==e&&"name"in e&&"message"in e}function i(e){return o(e)?e:Error((0,r.isPlainObject)(e)?function(e){let t=new WeakSet;return JSON.stringify(e,(e,n)=>{if("object"==typeof n&&null!==n){if(t.has(n))return"[Circular]";t.add(n)}return n})}(e):e+"")}},86213:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{MetadataBoundary:function(){return i},OutletBoundary:function(){return u},ViewportBoundary:function(){return a}});let r=n(80740),o={[r.METADATA_BOUNDARY_NAME]:function(e){let{children:t}=e;return t},[r.VIEWPORT_BOUNDARY_NAME]:function(e){let{children:t}=e;return t},[r.OUTLET_BOUNDARY_NAME]:function(e){let{children:t}=e;return t}},i=o[r.METADATA_BOUNDARY_NAME.slice(0)],a=o[r.VIEWPORT_BOUNDARY_NAME.slice(0)],u=o[r.OUTLET_BOUNDARY_NAME.slice(0)]},80740:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{METADATA_BOUNDARY_NAME:function(){return n},OUTLET_BOUNDARY_NAME:function(){return o},VIEWPORT_BOUNDARY_NAME:function(){return r}});let n="__next_metadata_boundary__",r="__next_viewport_boundary__",o="__next_outlet_boundary__"},32301:(e,t,n)=>{var r=n(2818);Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{atLeastOneTask:function(){return a},scheduleImmediate:function(){return i},scheduleOnNextTick:function(){return o},waitAtLeastOneReactRenderTask:function(){return u}});let o=e=>{Promise.resolve().then(()=>{r.nextTick(e)})},i=e=>{setImmediate(e)};function a(){return new Promise(e=>i(e))}function u(){return new Promise(e=>setImmediate(e))}}}]);