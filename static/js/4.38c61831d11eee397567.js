webpackJsonp([4],{"2PIR":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s("7+uW"),s("ccLm");var i=s("pNk6"),l={name:"select-dropdown",props:{placeholder:{type:String,default:"请选择"},change:{type:Function},data:{required:!0},label:{required:!0,type:String},value:{required:!0,type:String}},data:function(){return{refName:"",scrollSliderRefName:"",selectSearchBoxRefName:"",selectDropDownMenuWrapRefName:"",scrollWrapRefName:"",defaultText:this.placeholder,defaultNum:5,itemH:30,selectVisible:!1,isHover:!1,isTouch:!1,distance:0,searchText:""}},directives:{Clickoutside:i.a},computed:{boxStyle:function(){return{height:this.defaultNum*this.itemH+"px",marginTop:this.data.length>this.defaultNum?"28px":0}},isScrollShow:function(){return this.data.length>this.defaultNum}},mounted:function(){this.refName="selectDropDownMenuList"+this._uid,this.scrollSliderRefName="scrollSlider"+this._uid,this.selectSearchBoxRefName="selectSearchBox"+this._uid,this.selectDropDownMenuWrapRefName="selectDropDownMenuWrap"+this._uid,this.scrollWrapRefName="scrollWrap"+this._uid},watch:{data:function(){this.data.forEach(function(e,t){e.visible=!0}),this.data.length<this.defaultNum&&(this.defaultNum=this.data.length)},searchText:function(e){if(""===e)this.data.forEach(function(e){e.visible=!0}),this.defaultNum=5;else{var t=0;this.data.forEach(function(s){-1===s[this.label].indexOf(e)?s.visible=!1:(s.visible=!0,t++)}.bind(this)),t>0&&(this.$refs[this.refName].style.marginTop=0,this.$refs[this.scrollSliderRefName].style.top=0),this.defaultNum=t}}},methods:{handlOpen:function(){this.selectVisible=!0,this.isHover=!1,this.isTouch=!1,this.searchText="",this.data.length<this.defaultNum&&(this.defaultNum=this.data.length),this.$refs[this.scrollSliderRefName].style.top=0,this.$refs[this.refName].style.marginTop=0},handleAutoClose:function(){this.selectVisible&&(this.selectVisible=!1)},handlSelected:function(e){this.defaultText=e[this.label],this.selectVisible=!1,this.$emit("change",e)},addHover:function(){this.isHover=!0},removeHover:function(){this.isHover=!1},addTouch:function(){this.isTouch=!0},removeTouch:function(){this.isTouch=!1},handleDrag:function(e){this.addTouch();var t=e.target,s=e.clientY-t.offsetTop,i=this;document.onmousemove=function(l){var a=(l=l||e).clientY-s;i.scroll(a,t)},document.onmouseup=function(){document.onmousemove=document.onmouseup=null}},handleWheel:function(e){var t=0;e||(e=window.event),e.preventDefault(),e.wheelDelta?t=e.wheelDelta/120:e.detail?t=-e.detail/3:e.deltaY&&(t=-e.deltaY/3);var s=this.isScrollShow?this.$refs[this.selectSearchBoxRefName].offsetHeight:0;this.distance=this.$refs[this.scrollSliderRefName].offsetTop-this.$refs[this.selectDropDownMenuWrapRefName].offsetTop+s,t>0?this.distance-=10:this.distance+=10,this.scroll(this.distance)},scroll:function(e){var t=this.$refs[this.scrollWrapRefName].offsetHeight;e<0?e=0:e>t-this.$refs[this.scrollSliderRefName].offsetHeight&&(e=t-this.$refs[this.scrollSliderRefName].offsetHeight),this.$refs[this.scrollSliderRefName].style.top=e+"px";var s=this.$refs[this.selectDropDownMenuWrapRefName].offsetHeight,i=this.$refs[this.refName].offsetHeight,l=e/(t-this.$refs[this.scrollSliderRefName].offsetHeight),a=parseInt(l*(i-s));this.$refs[this.refName].style.marginTop=-a+"px"}}},a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"select-dropdown"},[s("div",{staticClass:"select-dropdown-input-group",on:{click:function(t){return t.stopPropagation(),e.handlOpen(t)}}},[s("div",{staticClass:"select-dropdown-input"},[e._v(e._s(e.defaultText))]),e._v(" "),e._m(0)]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.selectVisible,expression:"selectVisible"},{name:"clickoutside",rawName:"v-clickoutside",value:e.handleAutoClose,expression:"handleAutoClose"}],staticClass:"select-dropdown-menu"},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.isScrollShow,expression:"isScrollShow"}],ref:e.selectSearchBoxRefName,staticClass:"select-search-box"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.searchText,expression:"searchText"}],staticClass:"txt",attrs:{type:"text",placeholder:"搜索"},domProps:{value:e.searchText},on:{input:function(t){t.target.composing||(e.searchText=t.target.value)}}})]),e._v(" "),s("div",{ref:e.selectDropDownMenuWrapRefName,staticClass:"select-dropdown-menu-inner",style:e.boxStyle,on:{wheel:e.handleWheel}},[s("ul",{ref:e.refName,staticClass:"select-dropdown-menu-list"},e._l(e.data,function(t,i){return s("li",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"item.visible"}],staticClass:"list-option",attrs:{"data-value":t[e.value]},on:{click:function(s){s.stopPropagation(),e.handlSelected(t)}}},[e._v(e._s(t[e.label]))])}))]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isScrollShow,expression:"isScrollShow"}],ref:e.scrollWrapRefName,class:["select-dropdown-menu-scroll",e.isHover?"select-dropdown-menu-scroll-hover":"",e.isTouch?"select-dropdown-menu-scroll-touch":""],style:e.boxStyle,on:{mouseover:e.addHover,mouseout:e.removeHover,mousedown:e.addTouch,mouseup:e.removeTouch}},[s("div",{staticClass:"select-dropdown-menu-scroll-inner"}),e._v(" "),s("div",{ref:e.scrollSliderRefName,staticClass:"select-dropdown-menu-scroll-slider",on:{mouseover:e.addHover,mouseout:e.removeHover,mousedown:e.handleDrag,mouseup:e.removeTouch}})])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"select-dropdown-icon-group"},[t("div",{staticClass:"select-dropdown-icon-border"},[t("i",{staticClass:"select-dropdown-icon"})])])}]},o=s("VU/8")(l,a,!1,null,null,null).exports,n=s("zNUS"),r=s.n(n),c=r.a.Random,d=r.a.mock({"list|25":[{"selectId|+1":1,selectTxt:function(){return c.ctitle(5)}}]});r.a.mock("/select","get",function(){return d.list});var h={name:"moduleSelect",components:{"module-select":o},data:function(){return{selectData:[]}},mounted:function(){var e=this;this.$http.get("/select").then(function(t){t.data.forEach(function(t){e.selectData.push(t)})})},methods:{handleSelectChange:function(e){console.log(e)}}},u={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("blockquote",{staticClass:"explain-txt"},[e._v("当选项过多时，使用下拉菜单展示并选择内容（暂时没提供选择多项的操作）")]),e._v(" "),s("blockquote",{staticClass:"explain-txt"},[e._v("打开控制台可以看见选中项的对象")]),e._v(" "),s("module-select",{attrs:{placeholder:"选择快递",data:e.selectData,value:"selectId",label:"selectTxt"},on:{change:e.handleSelectChange}}),e._v(" "),s("h3",{staticClass:"explain-h3"},[e._v("Select Attributes")]),e._v(" "),e._m(0),e._v(" "),s("h3",{staticClass:"explain-h3"},[e._v("Select Events")]),e._v(" "),e._m(1)],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",{staticClass:"explain-table"},[s("thead",[s("tr",[s("th",[e._v("参数")]),e._v(" "),s("th",[e._v("说明")]),e._v(" "),s("th",[e._v("类型")]),e._v(" "),s("th",[e._v("可选值")]),e._v(" "),s("th",[e._v("默认值")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("placeholder")]),e._v(" "),s("td",[e._v("占位符")]),e._v(" "),s("td",[e._v("String")]),e._v(" "),s("td",[e._v("—")]),e._v(" "),s("td",[e._v("请选择")])]),e._v(" "),s("tr",[s("td",[e._v("data")]),e._v(" "),s("td",[e._v("展示数据")]),e._v(" "),s("td",[e._v("Array")]),e._v(" "),s("td",[e._v("—")]),e._v(" "),s("td",[e._v("—")])]),e._v(" "),s("tr",[s("td",[e._v("label")]),e._v(" "),s("td",[e._v("选项的标签")]),e._v(" "),s("td",[e._v("String/Number")]),e._v(" "),s("td",[e._v("—")]),e._v(" "),s("td",[e._v("—")])]),e._v(" "),s("tr",[s("td",[e._v("value")]),e._v(" "),s("td",[e._v("选项的值")]),e._v(" "),s("td",[e._v("String/Number/Object")]),e._v(" "),s("td",[e._v("—")]),e._v(" "),s("td",[e._v("—")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",{staticClass:"explain-table"},[s("thead",[s("tr",[s("th",[e._v("事件名称")]),e._v(" "),s("th",[e._v("说明")]),e._v(" "),s("th",[e._v("回调参数")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("change")]),e._v(" "),s("td",[e._v("选中值发生变化时触发")]),e._v(" "),s("td",[e._v("目前的选中项的对象")])])])])}]},v=s("VU/8")(h,u,!1,null,null,null);t.default=v.exports},ccLm:function(e,t){},pNk6:function(e,t,s){"use strict";s("7+uW");var i=[],l="@@clickoutsideContext",a=0;t.a={bind:function(e,t,s){i.push(e);var o=a++;e[l]={id:o,methodName:t.expression,bindingFn:function(s){e.contains(s.target)||t.value()}},document.addEventListener("click",e[l].bindingFn)},unbind:function(e){var t=i.length;document.removeEventListener("click",e[l].bindingFn);for(var s=0;s<t;s++)if(i[s][l].id===e[l].id){i.splice(s,1);break}delete e[l]}}}});
//# sourceMappingURL=4.38c61831d11eee397567.js.map