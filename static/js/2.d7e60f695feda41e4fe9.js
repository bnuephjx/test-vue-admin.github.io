webpackJsonp([2],{J6W3:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a("M9A7");var s=a("M4fF"),n=a.n(s),i={name:"sidebar",data:function(){return{treeList:[],secondSidebar:[],secondTitle:""}},watch:{$route:function(){this.secondSidebar=this.getSecondSidebar(),this.handleBodyClassName()}},created:function(){var e=this.$store.getters.addRoutes,t=n.a.find(e,{name:"layout"}).children;this.concatSideTree(t),this.secondSidebar=this.getSecondSidebar(),this.handleBodyClassName()},methods:{handleBodyClassName:function(){this.secondSidebar&&this.secondSidebar.length>0?document.getElementsByTagName("body")[0].className="theme theme--blue theme-new-ui show-help":document.getElementsByTagName("body")[0].className="theme theme--blue theme-new-ui show-help without-second-sidebar"},handleLogout:function(){var e=this;this.$http.get("/logout").then(function(){e.$store.dispatch("StoreUser/removeUser").then(function(){e.$router.push("/login")})})},concatSideTree:function(e){var t=this;n.a.forEach(e,function(e){t.treeList.push(e)})},getSecondSidebar:function(){var e=this,t=[];return n.a.forEach(this.treeList,function(a){if(a.children&&a.children.length>0){var s=a.children;n.a.forEach(s,function(n){n.name===e.$route.name&&(e.secondTitle=a.meta.cn,t=s)})}}),t}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("aside",{attrs:{id:"app-sidebar"}},[a("div",{attrs:{id:"app-first-sidebar"}},[a("div",[a("a",{staticClass:"team-logo-wrap",attrs:{href:"javascript:;"}},[a("div",{staticClass:"team-logo",style:"background-image: url("+e.$store.getters.userInfo.avatar+")"})]),e._v(" "),a("nav",[a("ul",{staticClass:"clearfix"},[e._l(e.treeList,function(t,s){return[a("router-link",{attrs:{to:{name:t.name},tag:"li"}},[a("a",[a("i",{staticClass:"sidebar-icon sidebar-icon-dashboard"}),e._v(e._s(t.meta.cn))])])]})],2)])])]),e._v(" "),a("div",{attrs:{id:"app-second-sidebar"}},[a("div",[a("div",{staticClass:"second-sidebar-title"},[e._v(e._s(e.secondTitle)+"管理")]),e._v(" "),a("nav",[a("ul",[e._l(e.secondSidebar,function(t,s){return[a("router-link",{attrs:{to:{name:t.name},tag:"li"}},[a("a",[e._v(e._s(t.meta.cn))])])]})],2)])])]),e._v(" "),a("div",{attrs:{id:"app-user-info"}},[a("span",{staticClass:"user-name"},[e._v(e._s(e.$store.getters.userInfo.name))]),e._v(" "),a("span",{staticClass:"user-arrow"}),e._v(" "),a("div",{staticClass:"user-dropdown"},[a("div",{staticClass:"user-dropdown-meta"},[a("div",[e._v(e._s(e.$store.getters.userInfo.account))])]),e._v(" "),a("div",{staticClass:"user-dropdown-select"},[a("a",{attrs:{href:"javascript:;"},on:{click:e.handleLogout}},[e._v("退出")])])])])])},staticRenderFns:[]};var o=a("VU/8")(i,r,!1,function(e){a("U8Ef")},null,null);t.default=o.exports},M9A7:function(e,t,a){"use strict";var s=a("zNUS"),n=a.n(s),i=a("M4fF"),r=a.n(i),o=a("pgg/");n.a.mock("/login","post",function(e){var t=JSON.parse(e.body),a=r.a.filter(o.a,{account:t.account});return a&&a.length>0?a[0].isLogin=!0:a=[{isLogin:!1}],a[0]}),n.a.mock("/logout","get",function(){return{isLogin:!1}})},U8Ef:function(e,t){},"pgg/":function(e,t,a){"use strict";var s=a("zNUS"),n=a.n(s),i=n.a.Random;t.a=n.a.mock([{name:"@cname()",account:i.email(),roles:["admin"],avatar:i.image("32x32","#4A7BF7","#FFFFFF","A")},{name:"@cname()",account:i.email(),roles:["normal"],avatar:i.image("32x32","#4A7BF7","#FFFFFF","N")}])}});
//# sourceMappingURL=2.d7e60f695feda41e4fe9.js.map