webpackJsonp([11],{aGxQ:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),s={data:function(){return{class:""}},props:{target:Object,arrow:{type:String,default:"left-center"},content:{type:String,default:"确定删除？"},popNotAutoHide:{type:Boolean,default:!0},callBack:Function},mounted:function(){this.class=this.getClass(),$(this.class).length>0&&this.destroyConfirm(),$(this.$el).appendTo("body").hide();var t=this.getPosition();$(this.$el).css({top:t.y+"px",left:t.x+"px"}).show(),this.popNotAutoHide&&this.listenBodyClick()},methods:{getClass:function(){var t=this.$el.className.split(" ");return $.each(t,function(e,i){t[e]="."+i}),t=t.join("")},getPosition:function(){var t=this.getTargetInfo(),e=this.getPopoverInfo(),i=this.arrow.split("-");return"left"===i[0]?t.x-=e.w:"right"===i[0]?t.x+=t.w:"top"===i[0]?t.y+=t.h:"bottom"===i[0]&&(t.y-=e.h),"left"===i[0]||"right"===i[0]?"center"===i[1]?t.y-=(e.h-t.npbH)/2:"top"===i[1]?t.y-=t.h/2:"bottom"===i[1]&&(t.y=t.y-1-e.h/2-t.h/4):"top"!==i[0]&&"bottom"!==i[0]||("center"===i[1]?t.x=t.x-(e.w-t.w)/2+(t.w-t.npbW)/2:"right"===i[1]&&(t.x-=e.w-t.w)),t.x=Math.round(t.x),t.y=Math.round(t.y),t},getTargetInfo:function(){return{x:this.target.offset().left,y:this.target.offset().top,h:this.target.outerHeight(),w:this.target.outerWidth(),npbH:this.target.height(),npbW:this.target.width()}},getPopoverInfo:function(){return{h:$(this.class).outerHeight(),w:$(this.class).outerWidth()}},handleSubmit:function(){this.callBack(),this.$destroy()},listenBodyClick:function(){$("body").on("click.ui.popover."+this._uid,function(t){this.autoClose(t)}.bind(this))},autoClose:function(t){var e=$(this.class);e.is(t.target)||0!==e.has(t.target).length||this.$destroy()},destroyConfirm:function(){$("body").off("click.ui.popover."+this._uid),$(this.class).remove()}},beforeDestroy:function(){this.destroyConfirm()}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:["ui-popover ui-popover--confirm",t.arrow]},[i("div",{staticClass:"ui-popover-inner clearfix"},[i("div",{staticClass:"inner__header clearfix"},[i("div",{staticClass:"pull-left text-center",staticStyle:{width:"80px","line-height":"28px","font-size":"14px"}},[t._v(t._s(t.content))]),t._v(" "),i("div",{staticClass:"pull-right"},[i("a",{staticClass:"zent-btn zent-btn-primary zent-btn-small",attrs:{href:"javascript:;"},on:{click:t.handleSubmit}},[t._v("确定")]),t._v(" "),i("a",{staticClass:"zent-btn zent-btn-small",attrs:{href:"javascript:;"},on:{click:t.destroyConfirm}},[t._v("取消")])])])]),t._v(" "),i("div",{staticClass:"arrow"})])},staticRenderFns:[]},r=i("VU/8")(s,o,!1,null,null,null).exports,a=n.a.extend(r),l=void 0,c=function(t){return(l=new a({propsData:t=t||{}})).vm=l.$mount(),l.vm},h={name:"modulePopover",methods:{handlePopover:function(){new c({arrow:"bottom-center",target:event.target,callBack:function(){alert("测试回调")}})}}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("blockquote",{staticClass:"explain-txt"}),this._v(" "),e("button",{staticClass:"btn",on:{click:this.handlePopover}},[this._v("按钮")])])},staticRenderFns:[]},p=i("VU/8")(h,u,!1,null,null,null);e.default=p.exports}});
//# sourceMappingURL=11.dbb4de1e0e9efba4c652.js.map