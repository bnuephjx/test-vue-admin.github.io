webpackJsonp([8],{UOI1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("7+uW");var _=n("Qhrk"),s={name:"moduleNotify",methods:{handleNotify:function(){new _.a({content:"局部使用"})},handleGlobalNotify:function(){this.$Notify({content:"全局使用"})},handleErrorlNotify:function(){this.$Notify({content:"错误提醒",type:"error"})},handleSuccesslNotify:function(){this.$Notify({content:"成功提醒",type:"success"})},handleSpeedlNotify:function(){this.$Notify({type:"success",speed:3e3})},handleCallBacklNotify:function(){this.$Notify({type:"success",callBack:function(){alert("回调函数")}})}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("blockquote",{staticClass:"explain-txt"},[t._v("关于这个组件的写法网上一搜一大堆，这里的实现方法和使用方法是差不多的")]),t._v(" "),n("blockquote",{staticClass:"explain-txt"},[t._v("Vue.prototype 添加了全局方法：Vue.prototype.$Notify = Notify；也可以局部使用，直接new")]),t._v(" "),n("button",{staticClass:"btn",on:{click:t.handleNotify}},[t._v("局部使用")]),t._v(" "),n("button",{staticClass:"btn",on:{click:t.handleGlobalNotify}},[t._v("全局使用")]),t._v(" "),n("button",{staticClass:"btn btn-danger",on:{click:t.handleErrorlNotify}},[t._v("错误提醒")]),t._v(" "),n("button",{staticClass:"btn btn-success",on:{click:t.handleSuccesslNotify}},[t._v("成功提醒")]),t._v(" "),n("button",{staticClass:"btn",on:{click:t.handleSpeedlNotify}},[t._v("延迟关闭")]),t._v(" "),n("button",{staticClass:"btn",on:{click:t.handleCallBacklNotify}},[t._v("回调")]),t._v(" "),n("h3",{staticClass:"explain-h3"},[t._v("Notify Attributes")]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"explain-table"},[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("可选值")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("content")]),t._v(" "),n("td",[t._v("默认提示内容")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("提示信息")])]),t._v(" "),n("tr",[n("td",[t._v("type")]),t._v(" "),n("td",[t._v("提示类型")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("error,success")]),t._v(" "),n("td",[t._v("success")])]),t._v(" "),n("tr",[n("td",[t._v("speed")]),t._v(" "),n("td",[t._v("延迟关闭")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("1000")])]),t._v(" "),n("tr",[n("td",[t._v("callBack")]),t._v(" "),n("td",[t._v("回调函数")]),t._v(" "),n("td",[t._v("Funciton")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("—")])])])])}]},l=n("VU/8")(s,v,!1,null,null,null);e.default=l.exports}});
//# sourceMappingURL=8.fa3ede0d997e281e2a0d.js.map