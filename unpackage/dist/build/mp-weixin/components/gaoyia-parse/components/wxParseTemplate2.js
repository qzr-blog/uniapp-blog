(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/gaoyia-parse/components/wxParseTemplate2"],{"2b7f":function(e,n,t){"use strict";t.r(n);var a=t("cda0"),r=t.n(a);for(var o in a)"default"!==o&&function(e){t.d(n,e,function(){return a[e]})}(o);n["default"]=r.a},9287:function(e,n,t){"use strict";t.r(n);var a=t("9ee5"),r=t("2b7f");for(var o in r)"default"!==o&&function(e){t.d(n,e,function(){return r[e]})}(o);var u,s=t("f0c5"),i=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);n["default"]=i.exports},"9ee5":function(e,n,t){"use strict";var a,r=function(){var e=this,n=e.$createElement;e._self._c},o=[];t.d(n,"b",function(){return r}),t.d(n,"c",function(){return o}),t.d(n,"a",function(){return a})},cda0:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=function(){return t.e("components/gaoyia-parse/components/wxParseTemplate3").then(t.bind(null,"a1da"))},r=function(){return t.e("components/gaoyia-parse/components/wxParseImg").then(t.bind(null,"2758"))},o=function(){return t.e("components/gaoyia-parse/components/wxParseVideo").then(t.bind(null,"3d75"))},u=function(){return t.e("components/gaoyia-parse/components/wxParseAudio").then(t.bind(null,"8a04"))},s=function(){return t.e("components/gaoyia-parse/components/wxParseTable").then(t.bind(null,"dfb9"))},i={name:"wxParseTemplate2",props:{node:{}},components:{wxParseTemplate:a,wxParseImg:r,wxParseVideo:o,wxParseAudio:u,wxParseTable:s},methods:{wxParseATap:function(e,n){var t=n.currentTarget.dataset.href;if(t){var a=this.$parent;while(!a.preview||"function"!==typeof a.preview)a=a.$parent;a.navigate(t,n,e)}}}};n.default=i}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/gaoyia-parse/components/wxParseTemplate2-create-component',
    {
        'components/gaoyia-parse/components/wxParseTemplate2-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9287"))
        })
    },
    [['components/gaoyia-parse/components/wxParseTemplate2-create-component']]
]);
