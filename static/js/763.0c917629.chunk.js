(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[763],{9206:function(t,r,e){"use strict";var n=e(4836);r.Z=void 0;var o=n(e(5649)),a=e(184),i=(0,o.default)((0,a.jsx)("path",{d:"M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"AccessibilityNew");r.Z=i},5649:function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return n.createSvgIcon}});var n=e(4454)},3044:function(t,r,e){"use strict";e.d(r,{Z:function(){return S}});var n=e(9439),o=e(3366),a=e(7462),i=e(2791),c=e(8182),u=e(4419),s=e(6934),l=e(1402),p=e(9201),d=e(184),f=(0,p.Z)((0,d.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),v=e(5878),m=e(1217);function h(t){return(0,m.Z)("MuiAvatar",t)}(0,v.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var g=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],b=(0,s.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(t,r){var e=t.ownerState;return[r.root,r[e.variant],e.colorDefault&&r.colorDefault]}})((function(t){var r=t.theme,e=t.ownerState;return(0,a.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===e.variant&&{borderRadius:(r.vars||r).shape.borderRadius},"square"===e.variant&&{borderRadius:0},e.colorDefault&&(0,a.Z)({color:(r.vars||r).palette.background.default},r.vars?{backgroundColor:r.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===r.palette.mode?r.palette.grey[400]:r.palette.grey[600]}))})),Z=(0,s.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(t,r){return r.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),x=(0,s.ZP)(f,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(t,r){return r.fallback}})({width:"75%",height:"75%"});var S=i.forwardRef((function(t,r){var e=(0,l.Z)({props:t,name:"MuiAvatar"}),s=e.alt,p=e.children,f=e.className,v=e.component,m=void 0===v?"div":v,S=e.imgProps,w=e.sizes,y=e.src,k=e.srcSet,W=e.variant,M=void 0===W?"circular":W,j=(0,o.Z)(e,g),N=null,P=function(t){var r=t.crossOrigin,e=t.referrerPolicy,o=t.src,a=t.srcSet,c=i.useState(!1),u=(0,n.Z)(c,2),s=u[0],l=u[1];return i.useEffect((function(){if(o||a){l(!1);var t=!0,n=new Image;return n.onload=function(){t&&l("loaded")},n.onerror=function(){t&&l("error")},n.crossOrigin=r,n.referrerPolicy=e,n.src=o,a&&(n.srcset=a),function(){t=!1}}}),[r,e,o,a]),s}((0,a.Z)({},S,{src:y,srcSet:k})),R=y||k,C=R&&"error"!==P,z=(0,a.Z)({},e,{colorDefault:!C,component:m,variant:M}),B=function(t){var r=t.classes,e={root:["root",t.variant,t.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,u.Z)(e,h,r)}(z);return N=C?(0,d.jsx)(Z,(0,a.Z)({alt:s,src:y,srcSet:k,sizes:w,ownerState:z,className:B.img},S)):null!=p?p:R&&s?s[0]:(0,d.jsx)(x,{ownerState:z,className:B.fallback}),(0,d.jsx)(b,(0,a.Z)({as:m,ownerState:z,className:(0,c.Z)(B.root,f),ref:r},j,{children:N}))}))},1614:function(t,r,e){"use strict";e.d(r,{Z:function(){return k}});var n=e(4942),o=e(3366),a=e(7462),i=e(2791),c=e(8182),u=e(7312),s=e(1217),l=e(4419),p=e(7078),d=(0,e(4046).ZP)(),f=e(5080),v=e(184),m=["className","component","disableGutters","fixed","maxWidth","classes"],h=(0,f.Z)(),g=d("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(t,r){var e=t.ownerState;return[r.root,r["maxWidth".concat((0,u.Z)(String(e.maxWidth)))],e.fixed&&r.fixed,e.disableGutters&&r.disableGutters]}}),b=function(t){return(0,p.Z)({props:t,name:"MuiContainer",defaultTheme:h})},Z=function(t,r){var e=t.classes,n=t.fixed,o=t.disableGutters,a=t.maxWidth,i={root:["root",a&&"maxWidth".concat((0,u.Z)(String(a))),n&&"fixed",o&&"disableGutters"]};return(0,l.Z)(i,(function(t){return(0,s.Z)(r,t)}),e)};var x=e(4036),S=e(6934),w=e(1402),y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.createStyledComponent,e=void 0===r?g:r,u=t.useThemeProps,s=void 0===u?b:u,l=t.componentName,p=void 0===l?"MuiContainer":l,d=e((function(t){var r=t.theme,e=t.ownerState;return(0,a.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!e.disableGutters&&(0,n.Z)({paddingLeft:r.spacing(2),paddingRight:r.spacing(2)},r.breakpoints.up("sm"),{paddingLeft:r.spacing(3),paddingRight:r.spacing(3)}))}),(function(t){var r=t.theme;return t.ownerState.fixed&&Object.keys(r.breakpoints.values).reduce((function(t,e){var n=e,o=r.breakpoints.values[n];return 0!==o&&(t[r.breakpoints.up(n)]={maxWidth:"".concat(o).concat(r.breakpoints.unit)}),t}),{})}),(function(t){var r=t.theme,e=t.ownerState;return(0,a.Z)({},"xs"===e.maxWidth&&(0,n.Z)({},r.breakpoints.up("xs"),{maxWidth:Math.max(r.breakpoints.values.xs,444)}),e.maxWidth&&"xs"!==e.maxWidth&&(0,n.Z)({},r.breakpoints.up(e.maxWidth),{maxWidth:"".concat(r.breakpoints.values[e.maxWidth]).concat(r.breakpoints.unit)}))})),f=i.forwardRef((function(t,r){var e=s(t),n=e.className,i=e.component,u=void 0===i?"div":i,l=e.disableGutters,f=void 0!==l&&l,h=e.fixed,g=void 0!==h&&h,b=e.maxWidth,x=void 0===b?"lg":b,S=(0,o.Z)(e,m),w=(0,a.Z)({},e,{component:u,disableGutters:f,fixed:g,maxWidth:x}),y=Z(w,p);return(0,v.jsx)(d,(0,a.Z)({as:u,ownerState:w,className:(0,c.Z)(y.root,n),ref:r},S))}));return f}({createStyledComponent:(0,S.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(t,r){var e=t.ownerState;return[r.root,r["maxWidth".concat((0,x.Z)(String(e.maxWidth)))],e.fixed&&r.fixed,e.disableGutters&&r.disableGutters]}}),useThemeProps:function(t){return(0,w.Z)({props:t,name:"MuiContainer"})}}),k=y},4708:function(t,r,e){"use strict";var n=e(9439),o=e(7462),a=e(2791),i=e(1402),c=e(5502),u=e(184),s=function(t,r){return(0,o.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},r&&!t.vars&&{colorScheme:t.palette.mode})},l=function(t){return(0,o.Z)({color:(t.vars||t).palette.text.primary},t.typography.body1,{backgroundColor:(t.vars||t).palette.background.default,"@media print":{backgroundColor:(t.vars||t).palette.common.white}})};r.ZP=function(t){var r=(0,i.Z)({props:t,name:"MuiCssBaseline"}),e=r.children,p=r.enableColorScheme,d=void 0!==p&&p;return(0,u.jsxs)(a.Fragment,{children:[(0,u.jsx)(c.Z,{styles:function(t){return function(t){var r,e,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i={};a&&t.colorSchemes&&Object.entries(t.colorSchemes).forEach((function(r){var e,o=(0,n.Z)(r,2),a=o[0],c=o[1];i[t.getColorSchemeSelector(a).replace(/\s*&/,"")]={colorScheme:null==(e=c.palette)?void 0:e.mode}}));var c=(0,o.Z)({html:s(t,a),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:t.typography.fontWeightBold},body:(0,o.Z)({margin:0},l(t),{"&::backdrop":{backgroundColor:(t.vars||t).palette.background.default}})},i),u=null==(r=t.components)||null==(e=r.MuiCssBaseline)?void 0:e.styleOverrides;return u&&(c=[c,u]),c}(t,d)}}),e]})}},1889:function(t,r,e){"use strict";e.d(r,{ZP:function(){return N}});var n=e(3433),o=e(4942),a=e(3366),i=e(7462),c=e(2791),u=e(8182),s=e(1184),l=e(8519),p=e(4419),d=e(6934),f=e(1402),v=e(3967);var m=c.createContext(),h=e(5878),g=e(1217);function b(t){return(0,g.Z)("MuiGrid",t)}var Z=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],x=(0,h.Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,n.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(t){return"spacing-xs-".concat(t)}))),(0,n.Z)(["column-reverse","column","row-reverse","row"].map((function(t){return"direction-xs-".concat(t)}))),(0,n.Z)(["nowrap","wrap-reverse","wrap"].map((function(t){return"wrap-xs-".concat(t)}))),(0,n.Z)(Z.map((function(t){return"grid-xs-".concat(t)}))),(0,n.Z)(Z.map((function(t){return"grid-sm-".concat(t)}))),(0,n.Z)(Z.map((function(t){return"grid-md-".concat(t)}))),(0,n.Z)(Z.map((function(t){return"grid-lg-".concat(t)}))),(0,n.Z)(Z.map((function(t){return"grid-xl-".concat(t)}))))),S=e(184),w=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function y(t){var r=parseFloat(t);return"".concat(r).concat(String(t).replace(String(r),"")||"px")}function k(t){var r=t.breakpoints,e=t.values,n="";Object.keys(e).forEach((function(t){""===n&&0!==e[t]&&(n=t)}));var o=Object.keys(r).sort((function(t,e){return r[t]-r[e]}));return o.slice(0,o.indexOf(n))}var W=(0,d.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(t,r){var e=t.ownerState,o=e.container,a=e.direction,i=e.item,c=e.spacing,u=e.wrap,s=e.zeroMinWidth,l=e.breakpoints,p=[];o&&(p=function(t,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t||t<=0)return[];if("string"===typeof t&&!Number.isNaN(Number(t))||"number"===typeof t)return[e["spacing-xs-".concat(String(t))]];var n=[];return r.forEach((function(r){var o=t[r];Number(o)>0&&n.push(e["spacing-".concat(r,"-").concat(String(o))])})),n}(c,l,r));var d=[];return l.forEach((function(t){var n=e[t];n&&d.push(r["grid-".concat(t,"-").concat(String(n))])})),[r.root,o&&r.container,i&&r.item,s&&r.zeroMinWidth].concat((0,n.Z)(p),["row"!==a&&r["direction-xs-".concat(String(a))],"wrap"!==u&&r["wrap-xs-".concat(String(u))]],d)}})((function(t){var r=t.ownerState;return(0,i.Z)({boxSizing:"border-box"},r.container&&{display:"flex",flexWrap:"wrap",width:"100%"},r.item&&{margin:0},r.zeroMinWidth&&{minWidth:0},"wrap"!==r.wrap&&{flexWrap:r.wrap})}),(function(t){var r=t.theme,e=t.ownerState,n=(0,s.P$)({values:e.direction,breakpoints:r.breakpoints.values});return(0,s.k9)({theme:r},n,(function(t){var r={flexDirection:t};return 0===t.indexOf("column")&&(r["& > .".concat(x.item)]={maxWidth:"none"}),r}))}),(function(t){var r=t.theme,e=t.ownerState,n=e.container,a=e.rowSpacing,i={};if(n&&0!==a){var c,u=(0,s.P$)({values:a,breakpoints:r.breakpoints.values});"object"===typeof u&&(c=k({breakpoints:r.breakpoints.values,values:u})),i=(0,s.k9)({theme:r},u,(function(t,e){var n,a=r.spacing(t);return"0px"!==a?(0,o.Z)({marginTop:"-".concat(y(a))},"& > .".concat(x.item),{paddingTop:y(a)}):null!=(n=c)&&n.includes(e)?{}:(0,o.Z)({marginTop:0},"& > .".concat(x.item),{paddingTop:0})}))}return i}),(function(t){var r=t.theme,e=t.ownerState,n=e.container,a=e.columnSpacing,i={};if(n&&0!==a){var c,u=(0,s.P$)({values:a,breakpoints:r.breakpoints.values});"object"===typeof u&&(c=k({breakpoints:r.breakpoints.values,values:u})),i=(0,s.k9)({theme:r},u,(function(t,e){var n,a=r.spacing(t);return"0px"!==a?(0,o.Z)({width:"calc(100% + ".concat(y(a),")"),marginLeft:"-".concat(y(a))},"& > .".concat(x.item),{paddingLeft:y(a)}):null!=(n=c)&&n.includes(e)?{}:(0,o.Z)({width:"100%",marginLeft:0},"& > .".concat(x.item),{paddingLeft:0})}))}return i}),(function(t){var r,e=t.theme,n=t.ownerState;return e.breakpoints.keys.reduce((function(t,o){var a={};if(n[o]&&(r=n[o]),!r)return t;if(!0===r)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===r)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var c=(0,s.P$)({values:n.columns,breakpoints:e.breakpoints.values}),u="object"===typeof c?c[o]:c;if(void 0===u||null===u)return t;var l="".concat(Math.round(r/u*1e8)/1e6,"%"),p={};if(n.container&&n.item&&0!==n.columnSpacing){var d=e.spacing(n.columnSpacing);if("0px"!==d){var f="calc(".concat(l," + ").concat(y(d),")");p={flexBasis:f,maxWidth:f}}}a=(0,i.Z)({flexBasis:l,flexGrow:0,maxWidth:l},p)}return 0===e.breakpoints.values[o]?Object.assign(t,a):t[e.breakpoints.up(o)]=a,t}),{})}));var M=function(t){var r=t.classes,e=t.container,o=t.direction,a=t.item,i=t.spacing,c=t.wrap,u=t.zeroMinWidth,s=t.breakpoints,l=[];e&&(l=function(t,r){if(!t||t<=0)return[];if("string"===typeof t&&!Number.isNaN(Number(t))||"number"===typeof t)return["spacing-xs-".concat(String(t))];var e=[];return r.forEach((function(r){var n=t[r];if(Number(n)>0){var o="spacing-".concat(r,"-").concat(String(n));e.push(o)}})),e}(i,s));var d=[];s.forEach((function(r){var e=t[r];e&&d.push("grid-".concat(r,"-").concat(String(e)))}));var f={root:["root",e&&"container",a&&"item",u&&"zeroMinWidth"].concat((0,n.Z)(l),["row"!==o&&"direction-xs-".concat(String(o)),"wrap"!==c&&"wrap-xs-".concat(String(c))],d)};return(0,p.Z)(f,b,r)},j=c.forwardRef((function(t,r){var e=(0,f.Z)({props:t,name:"MuiGrid"}),n=(0,v.Z)().breakpoints,o=(0,l.Z)(e),s=o.className,p=o.columns,d=o.columnSpacing,h=o.component,g=void 0===h?"div":h,b=o.container,Z=void 0!==b&&b,x=o.direction,y=void 0===x?"row":x,k=o.item,j=void 0!==k&&k,N=o.rowSpacing,P=o.spacing,R=void 0===P?0:P,C=o.wrap,z=void 0===C?"wrap":C,B=o.zeroMinWidth,G=void 0!==B&&B,_=(0,a.Z)(o,w),T=N||R,E=d||R,O=c.useContext(m),F=Z?p||12:O,A={},D=(0,i.Z)({},_);n.keys.forEach((function(t){null!=_[t]&&(A[t]=_[t],delete D[t])}));var L=(0,i.Z)({},o,{columns:F,container:Z,direction:y,item:j,rowSpacing:T,columnSpacing:E,wrap:z,zeroMinWidth:G,spacing:R},A,{breakpoints:n.keys}),I=M(L);return(0,S.jsx)(m.Provider,{value:F,children:(0,S.jsx)(W,(0,i.Z)({ownerState:L,className:(0,u.Z)(I.root,s),as:g,ref:r},D))})})),N=j},890:function(t,r,e){"use strict";e.d(r,{Z:function(){return x}});var n=e(3366),o=e(7462),a=e(2791),i=e(8182),c=e(8519),u=e(4419),s=e(6934),l=e(1402),p=e(4036),d=e(5878),f=e(1217);function v(t){return(0,f.Z)("MuiTypography",t)}(0,d.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var m=e(184),h=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],g=(0,s.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(t,r){var e=t.ownerState;return[r.root,e.variant&&r[e.variant],"inherit"!==e.align&&r["align".concat((0,p.Z)(e.align))],e.noWrap&&r.noWrap,e.gutterBottom&&r.gutterBottom,e.paragraph&&r.paragraph]}})((function(t){var r=t.theme,e=t.ownerState;return(0,o.Z)({margin:0},e.variant&&r.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16})})),b={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},x=a.forwardRef((function(t,r){var e=(0,l.Z)({props:t,name:"MuiTypography"}),a=function(t){return Z[t]||t}(e.color),s=(0,c.Z)((0,o.Z)({},e,{color:a})),d=s.align,f=void 0===d?"inherit":d,x=s.className,S=s.component,w=s.gutterBottom,y=void 0!==w&&w,k=s.noWrap,W=void 0!==k&&k,M=s.paragraph,j=void 0!==M&&M,N=s.variant,P=void 0===N?"body1":N,R=s.variantMapping,C=void 0===R?b:R,z=(0,n.Z)(s,h),B=(0,o.Z)({},s,{align:f,color:a,className:x,component:S,gutterBottom:y,noWrap:W,paragraph:j,variant:P,variantMapping:C}),G=S||(j?"p":C[P]||b[P])||"span",_=function(t){var r=t.align,e=t.gutterBottom,n=t.noWrap,o=t.paragraph,a=t.variant,i=t.classes,c={root:["root",a,"inherit"!==t.align&&"align".concat((0,p.Z)(r)),e&&"gutterBottom",n&&"noWrap",o&&"paragraph"]};return(0,u.Z)(c,v,i)}(B);return(0,m.jsx)(g,(0,o.Z)({as:G,ref:r,ownerState:B,className:(0,i.Z)(_.root,x)},z))}))},4454:function(t,r,e){"use strict";e.r(r),e.d(r,{capitalize:function(){return o.Z},createChainedFunction:function(){return a},createSvgIcon:function(){return i.Z},debounce:function(){return c.Z},deprecatedPropType:function(){return u},isMuiElement:function(){return s.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return p.Z},requirePropFactory:function(){return d},setRef:function(){return f},unstable_ClassNameGenerator:function(){return S},unstable_useEnhancedEffect:function(){return v.Z},unstable_useId:function(){return m},unsupportedProp:function(){return h},useControlled:function(){return g.Z},useEventCallback:function(){return b.Z},useForkRef:function(){return Z.Z},useIsFocusVisible:function(){return x.Z}});var n=e(5902),o=e(4036),a=e(8949).Z,i=e(9201),c=e(3199);var u=function(t,r){return function(){return null}},s=e(9103),l=e(8301),p=e(7602);e(7462);var d=function(t,r){return function(){return null}},f=e(2971).Z,v=e(162),m=e(6248).Z;var h=function(t,r,e,n,o){return null},g=e(8744),b=e(9683),Z=e(2071),x=e(3031),S={configure:function(t){n.Z.configure(t)}}},7012:function(t,r,e){"use strict";e.d(r,{Z:function(){return v}});var n=e(2791),o=e(7462),a=e(8023),i=e(9598),c="function"===typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",u=e(184);var s=function(t){var r=t.children,e=t.theme,s=(0,i.Z)(),l=n.useMemo((function(){var t=null===s?e:function(t,r){return"function"===typeof r?r(t):(0,o.Z)({},t,r)}(s,e);return null!=t&&(t[c]=null!==s),t}),[e,s]);return(0,u.jsx)(a.Z.Provider,{value:l,children:r})},l=e(9886),p=e(3459),d={};function f(t){var r=(0,p.Z)();return(0,u.jsx)(l.T.Provider,{value:"object"===typeof r?r:d,children:t.children})}var v=function(t){var r=t.children,e=t.theme;return(0,u.jsx)(s,{theme:e,children:(0,u.jsx)(f,{children:r})})}},4836:function(t){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports.default=t.exports}}]);
//# sourceMappingURL=763.0c917629.chunk.js.map