webpackJsonp([11],{MzRW:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"clearfix",attrs:{id:"app"}},[e("router-view",{attrs:{name:"sidebar"}}),this._v(" "),e("router-view"),this._v(" "),e("router-view",{attrs:{name:"help"}}),this._v(" "),e("router-view",{attrs:{name:"appFooter"}})],1)},staticRenderFns:[]};var o=n("VU/8")(null,i,!1,function(t){n("WV4X")},null,null).exports,r=n("sUu7"),u=n("+8+3"),c=n.n(u);r.a.localize("zh_CN",c.a);r.a.localize({zh_CN:{messages:{email:function(){return"请输入正确的邮箱格式"},numeric:function(){return"只能填写数字"},required:function(){return"必填项"}},attributes:{email:"邮箱",mobile:"手机号"}}}),r.a.extend("mobile",{getMessage:function(){return"必须是11位手机号码"},validate:function(t){return 11===t.length&&/^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(t)}});a.a.use(r.b,{errorBagName:"errors",delay:0,locale:"zh_CN",messages:null,strict:!0});var s=n("/ocq"),l=n("NYxO"),d=n("M4fF"),h=n.n(d),m=n("lbHh"),f=n.n(m),p={namespaced:!0,state:{isLogin:!1},mutations:{SET_USER:function(t,e){t=h.a.assign(t,e),f.a.set("accountData",t)},REMOVE_USER:function(t){t=h.a.assign(t,{isLogin:!1}),f.a.remove("accountData")}},actions:{setUser:function(t,e){(0,t.commit)("SET_USER",e)},removeUser:function(t){(0,t.commit)("REMOVE_USER")}}},v={path:"/login",name:"login",component:function(t){return n.e(2).then(function(){var e=[n("QlWu")];t.apply(null,e)}.bind(this)).catch(n.oe)}},y={path:"/role",name:"role",meta:{cn:"权限"},component:function(t){return n.e(7).then(function(){var e=[n("P2Xi")];t.apply(null,e)}.bind(this)).catch(n.oe)}};function S(){return v}var g={path:"/",name:"layout",components:{default:function(t){return n.e(4).then(function(){var e=[n("6KT8")];t.apply(null,e)}.bind(this)).catch(n.oe)},sidebar:function(t){return n.e(1).then(function(){var e=[n("J6W3")];t.apply(null,e)}.bind(this)).catch(n.oe)},help:function(t){return n.e(3).then(function(){var e=[n("IGO3")];t.apply(null,e)}.bind(this)).catch(n.oe)},appFooter:function(t){return n.e(6).then(function(){var e=[n("+L+F")];t.apply(null,e)}.bind(this)).catch(n.oe)}},redirect:"/index",children:[{path:"/index",name:"index",meta:{cn:"概况"},component:function(t){return n.e(5).then(function(){var e=[n("nU8l")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/module",name:"module",redirect:"/module/notify",meta:{cn:"组件"},component:function(t){return n.e(9).then(function(){var e=[n("Js1K")];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:"notify",name:"notify",meta:{cn:"消息通知"},component:function(t){return n.e(8).then(function(){var e=[n("UOI1")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"datePicker",name:"dataPicker",meta:{cn:"日历组件"},component:function(t){return n.e(0).then(function(){var e=[n("mqPQ")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]}]};var R={namespaced:!0,state:{addRoutes:[]},mutations:{SET_ROUTERS:function(t,e){t.addRoutes.length=0,t.addRoutes=h.a.concat(t.addRoutes,e)}},actions:{getRoutes:function(t,e){var n=t.commit;-1!==h.a.indexOf(e,"admin")?n("SET_ROUTERS",(g.children=g.children.concat([y]),[S(),g])):n("SET_ROUTERS",[S(),g])}}},b={userInfo:function(t){return t.StoreUser},addRoutes:function(t){return t.StoreAddRoutes.addRoutes}};a.a.use(l.a);var N=new l.a.Store({modules:{StoreUser:p,StoreAddRoutes:R},getters:b});a.a.use(s.a);var O=new s.a({scrollBehavior:function(t,e,n){return n||{x:0,y:0}}});f.a.getJSON("accountData")&&f.a.getJSON("accountData").isLogin?(console.log("有cookie"),N.dispatch("StoreUser/setUser",f.a.getJSON("accountData")).then(function(){var t=N.getters.userInfo.roles;N.dispatch("StoreAddRoutes/getRoutes",t).then(function(){O.addRoutes(N.getters.addRoutes)})})):O.addRoutes([S()]),O.beforeEach(function(t,e,n){f.a.getJSON("accountData")&&f.a.getJSON("accountData").isLogin?n():"/login"===t.path?n():n("/login")});var T=O,_=n("Qhrk"),E=n("mtWM"),U=n.n(E);a.a.prototype.$Notify=_.a,a.a.prototype.$http=U.a;var w=new a.a({el:"#app",router:T,store:N,render:function(t){return t(o)}});a.a.use(w)},Qhrk:function(t,e,n){"use strict";var a=n("7+uW"),i={name:"Notify",data:function(){return{isShow:!0,setTimeOutName:void 0}},props:{content:{type:String,default:"提示信息"},type:{type:String,default:"success"},speed:{type:Number,default:1e3},callBack:{type:Function,default:function(){}}},created:function(){this.type="alert-"+this.type},mounted:function(){this.handleStart()},methods:{handleStart:function(){this.setTimeOutName&&void 0!==this.setTimeOutName&&clearTimeout(this.setTimeOutName),this.setTimeOutName=setTimeout(function(){this.callBack(),this.isShow=!1,clearTimeout(this.setTimeOutName)}.bind(this),this.speed)}},befroeDestroy:function(){this.setTimeOutName&&void 0!==this.setTimeOutName&&clearTimeout(this.setTimeOutName)}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return this.isShow?e("transition",[e("div",{staticClass:"notifications"},[e("div",{class:["alert",this.type]},[this._v(this._s(this.content))])])]):this._e()},staticRenderFns:[]};var r=n("VU/8")(i,o,!1,function(t){n("MzRW")},null,null).exports,u=a.a.extend(r),c="";e.a=function(t){return(c=new u({propsData:t=t||{}})).vm=c.$mount(),document.body.appendChild(c.vm.$el),c.vm}},WV4X:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.61a1bef60f0f6b801107.js.map