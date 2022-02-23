(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1366:function(module,exports,__webpack_require__){"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)},__rest=this&&this.__rest||function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var React=__importStar(__webpack_require__(0)),uid_1=__importDefault(__webpack_require__(1367)),SVG=function(_a){var animate=_a.animate,backgroundColor=_a.backgroundColor,backgroundOpacity=_a.backgroundOpacity,baseUrl=_a.baseUrl,children=_a.children,foregroundColor=_a.foregroundColor,foregroundOpacity=_a.foregroundOpacity,gradientRatio=_a.gradientRatio,gradientDirection=_a.gradientDirection,uniqueKey=_a.uniqueKey,interval=_a.interval,rtl=_a.rtl,speed=_a.speed,style=_a.style,title=_a.title,beforeMask=_a.beforeMask,props=__rest(_a,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),fixedId=uniqueKey||uid_1.default(),idClip=fixedId+"-diff",idGradient=fixedId+"-animated-diff",idAria=fixedId+"-aria",rtlStyle=rtl?{transform:"scaleX(-1)"}:null,keyTimes="0; "+interval+"; 1",dur=speed+"s",gradientTransform="top-bottom"===gradientDirection?"rotate(90)":void 0;return React.createElement("svg",__assign({"aria-labelledby":idAria,role:"img",style:__assign(__assign({},style),rtlStyle)},props),title?React.createElement("title",{id:idAria},title):null,beforeMask&&React.isValidElement(beforeMask)?beforeMask:null,React.createElement("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+baseUrl+"#"+idClip+")",style:{fill:"url("+baseUrl+"#"+idGradient+")"}}),React.createElement("defs",null,React.createElement("clipPath",{id:idClip},children),React.createElement("linearGradient",{id:idGradient,gradientTransform:gradientTransform},React.createElement("stop",{offset:"0%",stopColor:backgroundColor,stopOpacity:backgroundOpacity},animate&&React.createElement("animate",{attributeName:"offset",values:-gradientRatio+"; "+-gradientRatio+"; 1",keyTimes:keyTimes,dur:dur,repeatCount:"indefinite"})),React.createElement("stop",{offset:"50%",stopColor:foregroundColor,stopOpacity:foregroundOpacity},animate&&React.createElement("animate",{attributeName:"offset",values:-gradientRatio/2+"; "+-gradientRatio/2+"; "+(1+gradientRatio/2),keyTimes:keyTimes,dur:dur,repeatCount:"indefinite"})),React.createElement("stop",{offset:"100%",stopColor:backgroundColor,stopOpacity:backgroundOpacity},animate&&React.createElement("animate",{attributeName:"offset",values:"0; 0; "+(1+gradientRatio),keyTimes:keyTimes,dur:dur,repeatCount:"indefinite"})))))};SVG.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,gradientDirection:"left-right",id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading...",beforeMask:null},exports.default=SVG},1367:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(){return Math.random().toString(36).substring(6)}},1368:function(module,exports,__webpack_require__){"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)},__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var React=__importStar(__webpack_require__(0)),ContentLoader_1=__importDefault(__webpack_require__(78));exports.default=function(props){return React.createElement(ContentLoader_1.default,__assign({viewBox:"0 0 476 124"},props),React.createElement("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),React.createElement("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),React.createElement("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),React.createElement("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),React.createElement("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),React.createElement("circle",{cx:"20",cy:"20",r:"20"}))}},1369:function(module,exports,__webpack_require__){"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)},__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var React=__importStar(__webpack_require__(0)),ContentLoader_1=__importDefault(__webpack_require__(78));exports.default=function(props){return React.createElement(ContentLoader_1.default,__assign({viewBox:"0 0 400 460"},props),React.createElement("circle",{cx:"31",cy:"31",r:"15"}),React.createElement("rect",{x:"58",y:"18",rx:"2",ry:"2",width:"140",height:"10"}),React.createElement("rect",{x:"58",y:"34",rx:"2",ry:"2",width:"140",height:"10"}),React.createElement("rect",{x:"0",y:"60",rx:"2",ry:"2",width:"400",height:"400"}))}},1370:function(module,exports,__webpack_require__){"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)},__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var React=__importStar(__webpack_require__(0)),ContentLoader_1=__importDefault(__webpack_require__(78));exports.default=function(props){return React.createElement(ContentLoader_1.default,__assign({viewBox:"0 0 340 84"},props),React.createElement("rect",{x:"0",y:"0",width:"67",height:"11",rx:"3"}),React.createElement("rect",{x:"76",y:"0",width:"140",height:"11",rx:"3"}),React.createElement("rect",{x:"127",y:"48",width:"53",height:"11",rx:"3"}),React.createElement("rect",{x:"187",y:"48",width:"72",height:"11",rx:"3"}),React.createElement("rect",{x:"18",y:"48",width:"100",height:"11",rx:"3"}),React.createElement("rect",{x:"0",y:"71",width:"37",height:"11",rx:"3"}),React.createElement("rect",{x:"18",y:"23",width:"140",height:"11",rx:"3"}),React.createElement("rect",{x:"166",y:"23",width:"173",height:"11",rx:"3"}))}},1371:function(module,exports,__webpack_require__){"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)},__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var React=__importStar(__webpack_require__(0)),ContentLoader_1=__importDefault(__webpack_require__(78));exports.default=function(props){return React.createElement(ContentLoader_1.default,__assign({viewBox:"0 0 400 110"},props),React.createElement("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"250",height:"10"}),React.createElement("rect",{x:"20",y:"20",rx:"3",ry:"3",width:"220",height:"10"}),React.createElement("rect",{x:"20",y:"40",rx:"3",ry:"3",width:"170",height:"10"}),React.createElement("rect",{x:"0",y:"60",rx:"3",ry:"3",width:"250",height:"10"}),React.createElement("rect",{x:"20",y:"80",rx:"3",ry:"3",width:"200",height:"10"}),React.createElement("rect",{x:"20",y:"100",rx:"3",ry:"3",width:"80",height:"10"}))}},1372:function(module,exports,__webpack_require__){"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)},__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var React=__importStar(__webpack_require__(0)),ContentLoader_1=__importDefault(__webpack_require__(78));exports.default=function(props){return React.createElement(ContentLoader_1.default,__assign({viewBox:"0 0 245 125"},props),React.createElement("circle",{cx:"10",cy:"20",r:"8"}),React.createElement("rect",{x:"25",y:"15",rx:"5",ry:"5",width:"220",height:"10"}),React.createElement("circle",{cx:"10",cy:"50",r:"8"}),React.createElement("rect",{x:"25",y:"45",rx:"5",ry:"5",width:"220",height:"10"}),React.createElement("circle",{cx:"10",cy:"80",r:"8"}),React.createElement("rect",{x:"25",y:"75",rx:"5",ry:"5",width:"220",height:"10"}),React.createElement("circle",{cx:"10",cy:"110",r:"8"}),React.createElement("rect",{x:"25",y:"105",rx:"5",ry:"5",width:"220",height:"10"}))}},397:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var ContentLoader_1=__importDefault(__webpack_require__(78)),FacebookStyle_1=__webpack_require__(1368);exports.Facebook=FacebookStyle_1.default;var InstagramStyle_1=__webpack_require__(1369);exports.Instagram=InstagramStyle_1.default;var CodeStyle_1=__webpack_require__(1370);exports.Code=CodeStyle_1.default;var ListStyle_1=__webpack_require__(1371);exports.List=ListStyle_1.default;var BulletListStyle_1=__webpack_require__(1372);exports.BulletList=BulletListStyle_1.default,exports.default=ContentLoader_1.default},411:function(module,exports,__webpack_require__){__webpack_require__(412),__webpack_require__(716),module.exports=__webpack_require__(717)},519:function(module,exports){},717:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(154),_storybook_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(400);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addParameters)({options:{theme:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.themes.normal}}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)((function(storyFn){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{maxWidth:"500px",margin:"auto",fontFamily:"sans-serif"}},storyFn())})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.configure)(__webpack_require__(976),module)}.call(this,__webpack_require__(718)(module))},78:function(module,exports,__webpack_require__){"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)},__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var React=__importStar(__webpack_require__(0)),_1=__webpack_require__(397),Svg_1=__importDefault(__webpack_require__(1366));exports.default=function(props){return props.children?React.createElement(Svg_1.default,__assign({},props)):React.createElement(_1.Facebook,__assign({},props))}},976:function(module,exports,__webpack_require__){var map={"./index.stories.tsx":977};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=976},977:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}},__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(__webpack_require__(0)),react_syntax_highlighter_1=__importDefault(__webpack_require__(1374)),hljs_1=__webpack_require__(1373),web_1=__importStar(__webpack_require__(397));exports.default={title:"React Content Loader"};var SyntaxCode=function(_a){var children=_a.children;return react_1.default.createElement(react_syntax_highlighter_1.default,{language:"jsx",style:hljs_1.docco},children)};exports.animate=function(){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(SyntaxCode,null,"<ContentLoader  />"),react_1.default.createElement(web_1.default,null),react_1.default.createElement(SyntaxCode,null,"<ContentLoader animate={false} />"),react_1.default.createElement(web_1.default,{animate:!1}))},exports.animate.story={parameters:{notes:"##`animate?: boolean` \n    \n    Defaults to `true`. Opt-out of animations with `false`"}},exports.backgroundColor=function(){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(SyntaxCode,null,'<ContentLoader backgroundColor="#333" />'),react_1.default.createElement(web_1.default,{backgroundColor:"#333"}))},exports.backgroundColor.story={parameters:{notes:"## `backgroundColor?: string`\n\n    Defaults to `#f5f6f7` which is used as background of animation."}},exports.foregroundColor=function(){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(SyntaxCode,null,'<ContentLoader foregroundColor="#333" />'),react_1.default.createElement(web_1.default,{foregroundColor:"#333"}))},exports.foregroundColor.story={parameters:{notes:"## `foregroundColor?: string`\n\n    Defaults to `#eee` which is used as foreground of animation."}},exports.backgroundOpacity=function(){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(SyntaxCode,null,'<ContentLoader backgroundOpacity="#333" />'),react_1.default.createElement(web_1.default,{backgroundOpacity:.06}))},exports.backgroundOpacity.story={parameters:{notes:"## `backgroundOpacity?: number`\n\n    Defaults to `1`. Background opacity (0 = transparent, 1 = opaque) used to solve a issue in [Safari](#bugfix-in-safari)"}},exports.foregroundOpacity=function(){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(SyntaxCode,null,"<ContentLoader foregroundOpacity={0.06} />"),react_1.default.createElement(web_1.default,{foregroundOpacity:.06}))},exports.foregroundOpacity.story={parameters:{notes:"## `foregroundOpacity?: number`\n\n    Defaults to `1`. Animation opacity (0 = transparent, 1 = opaque) used to solve a issue in [Safari](#bugfix-in-safari)"}},exports.baseURL=function(){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(SyntaxCode,null,'<ContentLoader baseUrl="" />'),react_1.default.createElement(web_1.default,{baseUrl:""}))},exports.baseURL.story={parameters:{notes:'## `baseUrl?: string`\n\n    Required if you\'re using `<base url="/" />` in the `<head/>`. Defaults to an empty string. This prop is common used as: `<ContentLoader baseUrl={window.location.pathname} />` which will fill the SVG attribute with the relative path. Related [#93](https://github.com/danilowoz/react-content-loader/issues/93).\n    '}},exports.children=function(){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement("p",null,"Custom"),react_1.default.createElement(SyntaxCode,null,'<ContentLoader>\n  <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />\n  <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />\n  <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />\n</ContentLoader>'),react_1.default.createElement(web_1.default,null,react_1.default.createElement("rect",{x:"0",y:"0",rx:"5",ry:"5",width:"70",height:"70"}),react_1.default.createElement("rect",{x:"80",y:"17",rx:"4",ry:"4",width:"300",height:"13"}),react_1.default.createElement("rect",{x:"80",y:"40",rx:"3",ry:"3",width:"250",height:"10"})),react_1.default.createElement("p",null,"Default"),react_1.default.createElement(SyntaxCode,null,"<ContentLoader />"),react_1.default.createElement(web_1.default,null))},exports.children.story={parameters:{notes:"## `children?: ReactNode`"}},exports.gradientRatio=function(){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(SyntaxCode,null,"<ContentLoader\n  gradientRatio={0.2}\n  backgroundColor={'#333'}\n  foregroundColor={'#999'}\n/>"),react_1.default.createElement(web_1.default,{gradientRatio:.2,backgroundColor:"#333",foregroundColor:"#999"}),react_1.default.createElement(SyntaxCode,null,"<ContentLoader\n  gradientRatio={4}\n  backgroundColor={'#333'}\n  foregroundColor={'#999'}\n/>"),react_1.default.createElement(web_1.default,{gradientRatio:4,backgroundColor:"#333",foregroundColor:"#999"}))},exports.gradientRatio.story={parameters:{notes:"## `gradientRatio?: number`\n\n    Defaults to `2`. Width of the animated gradient as a fraction of the viewbox width."}},exports.gradientDirection=function(){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(SyntaxCode,null,'<BulletList gradientDirection="left-right" />'),react_1.default.createElement(web_1.BulletList,{gradientDirection:"left-right"}),react_1.default.createElement(SyntaxCode,null,'<BulletList gradientDirection="top-bottom" />'),react_1.default.createElement(web_1.BulletList,{gradientDirection:"top-bottom"}))},exports.gradientDirection.story={parameters:{notes:"## `gradientDirection?: 'left-right' | 'top-bottom' `\n\n    Defaults to `left-right`. Direction in which the gradient is animated. Useful to implement top-down animations"}},exports.speed=function(){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(SyntaxCode,null,"<ContentLoader speed={4} />"),react_1.default.createElement(web_1.default,{speed:4}),react_1.default.createElement(SyntaxCode,null,"<ContentLoader speed={1} />"),react_1.default.createElement(web_1.default,{speed:1}))},exports.speed.story={parameters:{notes:"## `speed?: number`\n\n    Defaults to `1.2`. Animation speed in seconds."}},exports.interval=function(){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(SyntaxCode,null,"<ContentLoader interval={0.8} />"),react_1.default.createElement(web_1.default,{interval:.8}))},exports.interval.story={parameters:{notes:"## `interval?: number`\n\n    Defaults to `0.25`. Interval of time between runs of the animation, as a fraction of the animation speed."}},exports.RTL=function(){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(SyntaxCode,null,"<ContentLoader rtl />"),react_1.default.createElement(web_1.default,{rtl:!0}))},exports.RTL.story={parameters:{notes:"## `rtl?: boolean`\n\n    Defaults to `false`. Content right-to-left."}},exports.uniqueKey=function(){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(SyntaxCode,null,'<ContentLoader uniqueKey="my-uniqye-key" />'),react_1.default.createElement(web_1.default,{uniqueKey:"my-uniqye-key"}))},exports.uniqueKey.story={parameters:{notes:"## `uniqueKey?: string`\n    \n    Defaults to random unique id. Use the same value of prop key, that will solve inconsistency on the SSR, see more [here](https://github.com/danilowoz/react-content-loader/issues/78)."}},exports.responsive=function(){return react_1.default.createElement("div",{style:{width:200,border:"1px solid #eee"}},react_1.default.createElement(SyntaxCode,null,"<ContentLoader style={{ width: '100%' }} />'"),react_1.default.createElement(web_1.default,null))},exports.title=function(){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(SyntaxCode,null,'<ContentLoader  title="Loading interface..." />'),react_1.default.createElement(web_1.default,{title:"Loading interface..."}))},exports.title.story={parameters:{notes:"## `title?: string | boolean`\n\n    Defaults to `Loading interface...`. It's used to describe what element it is. Use `false` to remove.\n    "}},exports.viewBox=function(){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(SyntaxCode,null,"<ContentLoader />"),react_1.default.createElement(web_1.default,null),react_1.default.createElement(SyntaxCode,null,'<ContentLoader viewBox="" />'),react_1.default.createElement(web_1.default,{viewBox:""}))},exports.viewBox.story={parameters:{notes:"## `viewBox?: string`\n\n    Use viewbox props to set viewbox value.\n    Additionally, pass viewBox props as empty string to remove viewBox."}},exports.presets=function(){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(SyntaxCode,null,"<Facebook />"),react_1.default.createElement(web_1.Facebook,null),react_1.default.createElement(SyntaxCode,null,"<Instagram />"),react_1.default.createElement(web_1.Instagram,null),react_1.default.createElement(SyntaxCode,null,"<Code />"),react_1.default.createElement(web_1.Code,null),react_1.default.createElement(SyntaxCode,null,"<List />"),react_1.default.createElement(web_1.List,null),react_1.default.createElement(SyntaxCode,null,"<BulletList />"),react_1.default.createElement(web_1.BulletList,null))},exports.contentLoaderVsSVG=function(){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(web_1.default,{viewBox:"0 0 636 566"},react_1.default.createElement("rect",{x:"0",y:"2",rx:"4",ry:"4",width:"634",height:"374"}),react_1.default.createElement("rect",{x:"12",y:"404",rx:"3",ry:"3",width:"259",height:"18"}),react_1.default.createElement("rect",{x:"294",y:"404",rx:"3",ry:"3",width:"163",height:"18"}),react_1.default.createElement("rect",{x:"12",y:"441",rx:"3",ry:"3",width:"575",height:"18"}),react_1.default.createElement("rect",{x:"12",y:"473",rx:"3",ry:"3",width:"350",height:"18"}),react_1.default.createElement("rect",{x:"70",y:"523",rx:"3",ry:"3",width:"251",height:"18"}),react_1.default.createElement("circle",{cx:"37",cy:"532",r:"25"})),react_1.default.createElement("svg",{viewBox:"0 0 636 566"},react_1.default.createElement("rect",{x:"0",y:"2",rx:"4",ry:"4",width:"634",height:"374"}),react_1.default.createElement("rect",{x:"12",y:"404",rx:"3",ry:"3",width:"259",height:"18"}),react_1.default.createElement("rect",{x:"294",y:"404",rx:"3",ry:"3",width:"163",height:"18"}),react_1.default.createElement("rect",{x:"12",y:"441",rx:"3",ry:"3",width:"575",height:"18"}),react_1.default.createElement("rect",{x:"12",y:"473",rx:"3",ry:"3",width:"350",height:"18"}),react_1.default.createElement("rect",{x:"70",y:"523",rx:"3",ry:"3",width:"251",height:"18"}),react_1.default.createElement("circle",{cx:"37",cy:"532",r:"25"})))},exports.BeforeMask=function(){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(SyntaxCode,null,'<ContentLoader\n  viewBox="0 0 308 88"\n  beforeMask={\n    <rect width="306" height="86" y="1" x="1" stroke="#dee0e3" strokeWidth="1" fill="#fff" />\n  }\n>\n  <rect x="12" y="13" rx="4" ry="4" width="20" height="20"></rect>\n  <rect x="40" y="16" rx="4" ry="4" width="80" height="14"></rect>\n  <rect x="12" y="41" rx="4" ry="4" width="270" height="12"></rect>\n  <rect x="12" y="61" rx="4" ry="4" width="270" height="12"></rect>\n</ContentLoader>'),react_1.default.createElement(web_1.default,{viewBox:"0 0 300 88",beforeMask:react_1.default.createElement("rect",{width:"298",height:"86",y:"1",x:"1",stroke:"#dee0e3",strokeWidth:"1",fill:"#fff"})},react_1.default.createElement("rect",{x:"12",y:"13",rx:"4",ry:"4",width:"20",height:"20"}),react_1.default.createElement("rect",{x:"40",y:"16",rx:"4",ry:"4",width:"80",height:"14"}),react_1.default.createElement("rect",{x:"12",y:"41",rx:"4",ry:"4",width:"270",height:"12"}),react_1.default.createElement("rect",{x:"12",y:"61",rx:"4",ry:"4",width:"270",height:"12"})))}}},[[411,1,2]]]);
//# sourceMappingURL=main.11177c949e08d2462919.bundle.js.map