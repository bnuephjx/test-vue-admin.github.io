webpackJsonp([2],{"+E39":function(t,e,n){t.exports=!n("S82l")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"+ZMJ":function(t,e,n){var r=n("lOnJ");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},"1kS7":function(t,e){e.f=Object.getOwnPropertySymbols},"3Eo+":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},"52gC":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"6x/b":function(t,e){},"77Pl":function(t,e,n){var r=n("EqjI");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},"7KvD":function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},D2L2:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},EqjI:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},FeBl:function(t,e){var n=t.exports={version:"2.5.4"};"number"==typeof __e&&(__e=n)},Ibhu:function(t,e,n){var r=n("D2L2"),i=n("TcQ7"),o=n("vFc/")(!1),c=n("ax3d")("IE_PROTO");t.exports=function(t,e){var n,s=i(t),l=0,a=[];for(n in s)n!=c&&r(s,n)&&a.push(n);for(;e.length>l;)r(s,n=e[l++])&&(~o(a,n)||a.push(n));return a}},MU5D:function(t,e,n){var r=n("R9M2");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},MmMw:function(t,e,n){var r=n("EqjI");t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},NpIQ:function(t,e){e.f={}.propertyIsEnumerable},ON07:function(t,e,n){var r=n("EqjI"),i=n("7KvD").document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},QRG4:function(t,e,n){var r=n("UuGF"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},R4wc:function(t,e,n){var r=n("kM2E");r(r.S+r.F,"Object",{assign:n("To3L")})},R9M2:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},S82l:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},SfB7:function(t,e,n){t.exports=!n("+E39")&&!n("S82l")(function(){return 7!=Object.defineProperty(n("ON07")("div"),"a",{get:function(){return 7}}).a})},TcQ7:function(t,e,n){var r=n("MU5D"),i=n("52gC");t.exports=function(t){return r(i(t))}},To3L:function(t,e,n){"use strict";var r=n("lktj"),i=n("1kS7"),o=n("NpIQ"),c=n("sB3e"),s=n("MU5D"),l=Object.assign;t.exports=!l||n("S82l")(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=l({},t)[n]||Object.keys(l({},e)).join("")!=r})?function(t,e){for(var n=c(t),l=arguments.length,a=1,d=i.f,u=o.f;l>a;)for(var h,f=s(arguments[a++]),v=d?r(f).concat(d(f)):r(f),p=v.length,_=0;p>_;)u.call(f,h=v[_++])&&(n[h]=f[h]);return n}:l},UuGF:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},V3tA:function(t,e,n){n("R4wc"),t.exports=n("FeBl").Object.assign},X8DO:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},ax3d:function(t,e,n){var r=n("e8AB")("keys"),i=n("3Eo+");t.exports=function(t){return r[t]||(r[t]=i(t))}},e8AB:function(t,e,n){var r=n("7KvD"),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},evD5:function(t,e,n){var r=n("77Pl"),i=n("SfB7"),o=n("MmMw"),c=Object.defineProperty;e.f=n("+E39")?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},fkB2:function(t,e,n){var r=n("UuGF"),i=Math.max,o=Math.min;t.exports=function(t,e){return(t=r(t))<0?i(t+e,0):o(t,e)}},hJx8:function(t,e,n){var r=n("evD5"),i=n("X8DO");t.exports=n("+E39")?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},kM2E:function(t,e,n){var r=n("7KvD"),i=n("FeBl"),o=n("+ZMJ"),c=n("hJx8"),s=n("D2L2"),l=function(t,e,n){var a,d,u,h=t&l.F,f=t&l.G,v=t&l.S,p=t&l.P,_=t&l.B,m=t&l.W,y=f?i:i[e]||(i[e]={}),k=y.prototype,b=f?r:v?r[e]:(r[e]||{}).prototype;for(a in f&&(n=e),n)(d=!h&&b&&void 0!==b[a])&&s(y,a)||(u=d?b[a]:n[a],y[a]=f&&"function"!=typeof b[a]?n[a]:_&&d?o(u,r):m&&b[a]==u?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(u):p&&"function"==typeof u?o(Function.call,u):u,p&&((y.virtual||(y.virtual={}))[a]=u,t&l.R&&k&&!k[a]&&c(k,a,u)))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,t.exports=l},l7vN:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("zNUS"),i=n.n(r),o=i.a.Random,c=i.a.mock({list:[{treeId:1,label:function(){return"一级 1"+o.ctitle(2)},shopId:1,"children|2":[{treeId:2,"shopId|+1":2,label:function(){return"二级 1-1"+o.ctitle(2)},"children|2":[{treeId:3,"shopId|+1":2e3,label:function(){return"三级 1-1-1"+o.ctitle(2)}}]}]}]});i.a.mock("/tree","get",function(){return c.list});var s=n("woOf"),l=n.n(s),a=(n("6x/b"),{name:"TreeItem",props:{layout:Object,model:{required:!0,type:Object,default:{}},index:{type:Number},renderContent:Function,onlyKey:{type:String,required:!0},options:{required:!0,type:Object}},data:function(){return{defaultOptions:{}}},components:{"node-content":{props:{model:Object,options:Object},render:function(t){var e=this.$parent,n=e.$parent,r=e.model;return n.renderContent?n.renderContent.call(n._renderProxy,t,{_self:n.$vnode.context,node:e,model:r}):t("span",{class:"tree-label"},[" ",this.model[this.options.label]," "])}}},created:function(){this.$set(this.model,"checkState","unchecked"),this.$set(this.model,"visible",!0),this.defaultOptions=l()({},this.defaultOptions,this.options)},computed:{label:function(){return this.defaultOptions.label},children:function(){return this.model[this.defaultOptions.children]},isUnfold:function(){return this.defaultOptions.isUnfold},isCheckbox:function(){return this.defaultOptions.isCheckbox},hasChildNodes:function(){return this.model[this.defaultOptions.children]&&this.model[this.defaultOptions.children].length>0},checkedClass:function(){return"unchecked"===this.model.checkState?"":"half-checked"===this.model.checkState?"zent-checkbox-indeterminate":"checked"===this.model.checkState?"zent-checkbox-checked":void 0},itemChecked:{get:function(){return"unchecked"!==this.model.checkState&&"half-checked"!==this.model.checkState},set:function(t){this.model.checkState=t?"checked":"unchecked",this.hasChildNodes?(this.$emit("dispathParent",this.model[this.onlyKey],t),this.handleSetChecked(this.model,t)):this.$emit("dispathParent",this.model[this.onlyKey],t)}}},methods:{handleClick:function(){this.layout.$emit("node-click",this.model)},toggle:function(){this.hasChildNodes&&(this.defaultOptions.isUnfold=!this.defaultOptions.isUnfold)},changeState:function(t,e){this.setCheckedClass(t,e),this.$emit("dispathParent",this.model[this.onlyKey],e)},setCheckedClass:function(t,e){var n=!1,r=0,i=this.children.length;e?(this.children.forEach(function(e){e[this.onlyKey]===t&&(n=!0),"checked"===e.checkState&&r++}.bind(this)),this.model.checkState=n&&r===i?"checked":n&&r!==i?"half-checked":"checked"):(this.children.forEach(function(t){"checked"!==t.checkState&&"half-checked"!==t.checkState||(n=!0),"unchecked"===t.checkState&&r++}),this.model.checkState=n||r!==i?n&&r!==i?"half-checked":"checked":"unchecked")},handleSetChecked:function(t,e){t[this.defaultOptions.children]&&t[this.defaultOptions.children].length>0&&t[this.defaultOptions.children].forEach(function(t){t.checkState=e?"checked":"unchecked",this.handleSetChecked(t,e)}.bind(this))}}}),d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{directives:[{name:"show",rawName:"v-show",value:t.model.visible,expression:"model.visible"}],class:["tree-parent","tree-parent-"+t.index],style:t.hasChildNodes?"":{marginLeft:"20px"}},[t.hasChildNodes?n("span",{class:["tree-icon-caret",t.isUnfold?"tree-icon-caret-down":"tree-icon-caret-right"],on:{click:t.toggle}}):t._e(),t._v(" "),t.isCheckbox?n("label",{class:["zent-checkbox-wrap",t.checkedClass]},[n("span",{staticClass:"zent-checkbox"},[n("span",{staticClass:"zent-checkbox-inner"}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.itemChecked,expression:"itemChecked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.itemChecked)?t._i(t.itemChecked,null)>-1:t.itemChecked},on:{change:function(e){var n=t.itemChecked,r=e.target,i=!!r.checked;if(Array.isArray(n)){var o=t._i(n,null);r.checked?o<0&&(t.itemChecked=n.concat([null])):o>-1&&(t.itemChecked=n.slice(0,o).concat(n.slice(o+1)))}else t.itemChecked=i}}})])]):t._e(),t._v(" "),n("div",{staticClass:"node-content",on:{click:function(e){return e.stopPropagation(),t.handleClick(e)}}},[n("node-content",{attrs:{model:t.model,options:t.defaultOptions}})],1),t._v(" "),t.hasChildNodes?n("ul",{directives:[{name:"show",rawName:"v-show",value:t.isUnfold,expression:"isUnfold"}],class:["tree-parent-children","tree-parent-"+t.index+"-children"]},t._l(t.model[t.defaultOptions.children],function(e,r){return n("TreeItem",{key:r,attrs:{layout:t.layout,onlyKey:t.onlyKey,index:r,model:e,options:t.defaultOptions},on:{dispathParent:t.changeState}})})):t._e()])},staticRenderFns:[]},u={components:{"tree-item":n("VU/8")(a,d,!1,null,null,null).exports},props:{data:{required:!0,type:Array,default:function(){return[]}},options:{required:!0,type:Object},onlyKey:{type:String,required:!0},renderContent:Function},data:function(){return{layout:this,defaultOptions:{label:"label",children:"children",isUnfold:!0,isCheckbox:!0},checkedArry:[]}},computed:{hasChildNodes:function(){return this.data&&this.data.length>0}},created:function(){this.defaultOptions=l()({},this.defaultOptions,this.options)},methods:{getCheckedNodes:function(){return this.checkedArry.splice(0,this.checkedArry.length),this._getCheckedNodes(this.data)},_getCheckedNodes:function(t){var e=t[this.defaultOptions.children]||t;return"unchecked"!==t.checkState&&e&&e.length>0&&e.forEach(function(t){"checked"===t.checkState&&this.checkedArry.push(t),this._getCheckedNodes(t)}.bind(this)),this.checkedArry},filter:function(t){var e;this.$children&&this.$children.length>0&&this.$children.forEach(function(t){t.$children&&t.$children.length>0&&(e=t)}),this.openUnfold(e),this._filter(this.data,t)},_filter:function(t,e){var n=t[this.defaultOptions.children]||t;if(this.isArray(n)&&n.forEach(function(t){t.visible=t[this.defaultOptions.label].toLowerCase().indexOf(String(e).toLowerCase())>-1,this._filter(t,e)}.bind(this)),!this.isArray(t)&&!t.visible&&n.length){var r=!0;n.forEach(function(t){t.visible&&(r=!1)}),t.visible=!1===r}if(!e)return!1},isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},openUnfold:function(t){var e=t.$children;e&&e.length>0&&(t.options.isUnfold=!0,e.forEach(function(t){this.openUnfold(t)}.bind(this)))}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"treeMenu"},[n("ul",{staticClass:"tree"},t._l(t.data,function(e,r){return t.hasChildNodes?n("tree-item",{key:r,attrs:{layout:t.layout,index:r,model:e,options:t.defaultOptions,onlyKey:t.onlyKey}}):t._e()}))])},staticRenderFns:[]},f={name:"moduleTree",components:{"module-tree":n("VU/8")(u,h,!1,null,null,null).exports},data:function(){return{treeData:[],filterText:"",treeOptions:{label:"label",children:"children",isUnfold:!1}}},mounted:function(){var t=this;this.$http.get("/tree").then(function(e){t.treeData=e.data})},watch:{filterText:function(t){this.$refs.tree.filter(t)}},methods:{handleNodeClick:function(t){console.log(t)},getInfo:function(){console.log(this.$refs.tree.getCheckedNodes())},renderContent:function(t,e){var n=this,r=e.node,i=e.model;return t("div",{class:"tree-label",style:"display:inline-block;"},[t("span",[i.label]),t("span",[t("a",{attrs:{href:"javascript:void(0)",type:"text"},style:"font-size: 12px;",on:{click:function(){return n.remove(r,i)}}},["Delete"])])])},remove:function(){console.log("删除;")}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("blockquote",{staticClass:"explain-txt"},[t._v("用清晰的层级结构展示信息")]),t._v(" "),n("div",{staticStyle:{position:"relative",height:"28px","margin-bottom":"5px"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.filterText,expression:"filterText"}],attrs:{type:"text",placeholder:"搜索"},domProps:{value:t.filterText},on:{input:function(e){e.target.composing||(t.filterText=e.target.value)}}})]),t._v(" "),n("module-tree",{ref:"tree",attrs:{data:t.treeData,options:t.treeOptions,onlyKey:"shopId",renderContent:t.renderContent},on:{"node-click":t.handleNodeClick}}),t._v(" "),n("a",{staticClass:"btn btn-success",attrs:{href:"javascript:void(0);"},on:{click:t.getInfo}},[t._v("获取选中项")]),t._v(" "),n("h3",{staticClass:"explain-h3"},[t._v("Tree Attributes")]),t._v(" "),t._m(0),t._v(" "),n("h3",{staticClass:"explain-h3"},[t._v("Options")]),t._v(" "),t._m(1),t._v(" "),n("h3",{staticClass:"explain-h3"},[t._v("方法")]),t._v(" "),t._m(2),t._v(" "),n("h3",{staticClass:"explain-h3"},[t._v("Tree Events")]),t._v(" "),t._m(3)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"explain-table"},[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("可选值")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("data")]),t._v(" "),n("td",[t._v("展示数据")]),t._v(" "),n("td",[t._v("Array")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("—")])]),t._v(" "),n("tr",[n("td",[t._v("options")]),t._v(" "),n("td",[t._v("配置项，详细见下面的表")]),t._v(" "),n("td",[t._v("Object")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("—")])]),t._v(" "),n("tr",[n("td",[t._v("onlyKey")]),t._v(" "),n("td",[t._v("每个树节点用来作为唯一标识的属性（必填）")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("—")])]),t._v(" "),n("tr",[n("td",[t._v("renderContent")]),t._v(" "),n("td",[t._v("树节点的内容区的渲染 Function")]),t._v(" "),n("td",[t._v("Function(h,{node,model})")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("—")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"explain-table"},[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("可选值")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("label")]),t._v(" "),n("td",[t._v("选项的文本")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("—")])]),t._v(" "),n("tr",[n("td",[t._v("children")]),t._v(" "),n("td",[t._v("子节点")]),t._v(" "),n("td",[t._v("Array")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("—")])]),t._v(" "),n("tr",[n("td",[t._v("isCheckbox")]),t._v(" "),n("td",[t._v("是否有选中框")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("true")])]),t._v(" "),n("tr",[n("td",[t._v("isUnfold")]),t._v(" "),n("td",[t._v("是否展开")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("true")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"explain-table"},[n("thead",[n("tr",[n("th",[t._v("方法名称")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("参数")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("filter")]),t._v(" "),n("td",[t._v("对树节点进行筛选操作")]),t._v(" "),n("td",[t._v("接收一个任意类型的参数")])]),t._v(" "),n("tr",[n("td",[t._v("getCheckedNodes")]),t._v(" "),n("td",[t._v("若节点可被选择，则返回目前被选中的节点所组成的数组")]),t._v(" "),n("td",[t._v("—")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"explain-table"},[n("thead",[n("tr",[n("th",[t._v("事件名称")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("回调参数")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("node-click")]),t._v(" "),n("td",[t._v("节点被点击时的回调")]),t._v(" "),n("td",[t._v("点击节点的信息")])])])])}]},p=n("VU/8")(f,v,!1,null,null,null);e.default=p.exports},lOnJ:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},lktj:function(t,e,n){var r=n("Ibhu"),i=n("xnc9");t.exports=Object.keys||function(t){return r(t,i)}},sB3e:function(t,e,n){var r=n("52gC");t.exports=function(t){return Object(r(t))}},"vFc/":function(t,e,n){var r=n("TcQ7"),i=n("QRG4"),o=n("fkB2");t.exports=function(t){return function(e,n,c){var s,l=r(e),a=i(l.length),d=o(c,a);if(t&&n!=n){for(;a>d;)if((s=l[d++])!=s)return!0}else for(;a>d;d++)if((t||d in l)&&l[d]===n)return t||d||0;return!t&&-1}}},woOf:function(t,e,n){t.exports={default:n("V3tA"),__esModule:!0}},xnc9:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")}});
//# sourceMappingURL=2.02d002ca951dd258849c.js.map