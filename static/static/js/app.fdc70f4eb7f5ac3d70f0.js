webpackJsonp([1],{"+9kx":function(t,e){},"9n10":function(t,e){},GDRh:function(t,e){},"I+x3":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n=s("aozt"),i=s.n(n),o={name:"HomeHeader",props:["isLogin"],data:function(){return{}},computed:{showItem:function(){return this.isLogin&&this.isLogin.id}},methods:{LogoutToHome:function(){i.a.get("/api/logout").then(function(t){console.log(t.data.message)}).catch(function(t){console.log(t)}),this.$emit("loginStatus",{}),this.$router.push("/")}}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header-nav"},[s("ul",{staticClass:"nav-menu"},[s("li",[s("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),s("li",{directives:[{name:"show",rawName:"v-show",value:!t.showItem,expression:"!showItem"}]},[s("router-link",{attrs:{to:"/login"}},[t._v("Login")])],1),t._v(" "),s("li",{directives:[{name:"show",rawName:"v-show",value:!t.showItem,expression:"!showItem"}]},[s("router-link",{attrs:{to:"/register"}},[t._v("Resigiter")])],1),t._v(" "),s("li",{directives:[{name:"show",rawName:"v-show",value:t.showItem,expression:"showItem"}],on:{click:t.LogoutToHome}},[s("router-link",{attrs:{to:"/logout"}},[t._v("Logout")])],1),t._v(" "),s("li",{directives:[{name:"show",rawName:"v-show",value:t.showItem,expression:"showItem"}]},[s("router-link",{attrs:{to:"/push"}},[t._v("Push")])],1)]),t._v(" "),s("div",{staticClass:"nav-user"},[t.showItem?s("router-link",{attrs:{to:"/user/"+t.isLogin.id}},[s("span",[t._v(" "+t._s(t.isLogin.username)+" ")]),t._v(" "),s("img",{staticClass:"avatar  top-avatar",attrs:{src:"/api/avatars/"+t.isLogin.avatar}})]):t._e()],1)])},staticRenderFns:[]};var u={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("p",{staticClass:"footer-cnt"},[this._v("copyright by\n    "),e("a",{attrs:{href:"https://github.com/ices1/Vue-BBS"}},[this._v("ics1")])])])}]};var c={name:"App",components:{HomeHeader:s("VU/8")(o,r,!1,function(t){s("q+KA")},"data-v-360cedf7",null).exports,HomeFooter:s("VU/8")({name:"HomeFooter",data:function(){return{}}},u,!1,function(t){s("ie0p")},"data-v-15e8a9ee",null).exports},data:function(){return{isLogin:{}}},mounted:function(){i.a.defaults.withCredentials=!0,this.getUserInfo()},methods:{showLogin:function(t){this.isLogin=t},getUserInfo:function(){var t=this;i.a.get("/api/isLogin").then(function(e){t.isLogin=e.data.user}).catch(function(t){console.log(t)})}}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"wrap"},[e("home-header",{attrs:{isLogin:this.isLogin},on:{loginStatus:this.showLogin}}),this._v(" "),e("transition",{attrs:{name:"slide-fade"}},[e("keep-alive",[e("router-view",{key:this.$route.fullPath,attrs:{isLogin:this.isLogin},on:{loginStatus:this.showLogin}})],1)],1),this._v(" "),e("home-footer")],1)])},staticRenderFns:[]};var p=s("VU/8")(c,l,!1,function(t){s("eAZ5")},null,null).exports,m=s("/ocq"),d=function(t){var e=new Date(t);return e.getUTCFullYear()+"/"+(e.getMonth()+1)+"/"+e.getDate()},v={name:"Home",data:function(){return{posts:[]}},mounted:function(){i.a.defaults.withCredentials=!0,this.getInfo()},methods:{getInfo:function(){i.a.get("/api/posts").then(this.getPosts)},getPosts:function(t){200===t.status?this.posts=t.data.data.posts:console.log(t)},idTime:function(t){return d(t)}}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("ul",t._l(t.posts,function(e){return s("li",{key:e.id,staticClass:"post"},[s("router-link",{attrs:{to:"post/"+e.id}},[s("h3",{staticClass:"title"},[t._v(" "+t._s(e.title)+" ")]),t._v(" "),s("p",{staticClass:"content"},[t._v(" "+t._s(e.content)+" ")])]),t._v(" "),s("div",{staticClass:"user-info"},[s("router-link",{attrs:{to:"user/"+e.userId}},[s("img",{staticClass:"avatar",attrs:{src:"/api/avatars/"+e.avatar,alt:""}}),t._v(" "),s("span",{staticClass:"post-username"},[t._v(" "+t._s(e.username)+" ")])]),t._v(" "),s("span",{staticClass:"float-right"},[t._v(" "+t._s(t.idTime(e.timestamp)))])],1)],1)}))])},staticRenderFns:[]};var _=s("VU/8")(v,h,!1,function(t){s("sbuQ")},"data-v-6cb4a6ca",null).exports,f=s("6iV/"),g=s.n(f),C={name:"Post",props:["isLogin"],data:function(){return{post:{},comments:[],flag:!1,id:this.$route.params.id,addComment:"",loginUser:""}},computed:{showCmtBtn:function(){return this.isLogin&&this.isLogin.id}},mounted:function(){this.getInfo()},methods:{getInfo:function(){i.a.get("/api/post/"+this.id).then(this.getData)},getData:function(t){200===t.status?(this.post=t.data.data.post,this.comments=t.data.data.comments,this.loginUser=t.data.data.user,this.flag=!0):console.log(t)},postTime:function(t){return function(t){var e=new Date(t),s=String(e).match(/\w+:\w+/)||[][0];return e.getUTCFullYear()+"/"+(e.getMonth()+1)+"/"+e.getDate()+" "+s}(t)},pushCmt:function(){var t=this;""!==this.addComment.trim()?i.a.post("/api/add-comment",g.a.stringify({postid:this.post.id,content:this.addComment.trim()})).then(function(e){t.comments.push({avatar:t.loginUser.avatar,content:t.addComment.trim(),id:e.data.commentId.id,postId:t.post.id,timestamp:Date.now(),userId:t.loginUser.id,username:t.loginUser.username}),t.addComment=""}).catch(function(t){alert(t.response.data.message)}):alert("评论不能为空")},showDelBtn:function(t){return this.loginUser&&this.loginUser.id===t},deleteInfo:function(t,e,s){confirm("确定要删除该条信息？")&&this.execDel(t,e,s)},execDel:function(t,e,s){var a=this,n="post"===e?"post/":"comment/";i.a.get("/api/delete-"+n+t).then(function(t){"post"===e?a.$router.push("/"):a.comments.splice(s,1)}).catch(function(t){alert(t.response.data.message)})}}},w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"post"},[s("h3",{staticClass:"title"},[t._v(" "+t._s(t.post.title)+" ")]),t._v(" "),s("span",[t._v("发帖人：")]),t._v(" "),s("router-link",{attrs:{to:"/user/"+t.post.userId}},[t.flag?s("img",{staticClass:"avatar",attrs:{src:"/api/avatars/"+t.post.avatar,alt:""}}):t._e(),t._v(" "),s("span",{staticClass:"post-username"},[t._v(" "+t._s(t.post.username)+" ")])]),t._v(" "),s("div",{staticClass:"float-right post-time"},[s("span",{staticClass:"float-right"},[t._v(" "+t._s(t.postTime(t.post.timestamp))+" ")]),t._v(" "),t.showDelBtn(t.post.userId)?s("span",{staticClass:"float-right del-post",on:{click:function(e){t.deleteInfo(t.post.id,"post")}}},[t._v(" 删除 ")]):t._e()]),t._v(" "),s("div",{staticClass:"content"},[t._v(" "+t._s(t.post.content)+" ")])],1),t._v(" "),s("div",{staticClass:"comments"},[s("h3",[t._v("Comments:")]),t._v(" "),s("ul",t._l(t.comments,function(e,a){return s("li",{key:e.id,staticClass:"cms-wrap"},[s("div",{staticClass:"user-info"},[s("router-link",{attrs:{to:"/user/"+e.userId}},[t.flag?s("img",{staticClass:"avatar",attrs:{src:"/api/avatars/"+e.avatar,alt:""}}):t._e(),t._v(" "),s("span",{staticClass:"post-username"},[t._v(" "+t._s(e.username)+" ")])]),t._v(" "),s("span",{staticClass:"float-right"},[t._v(" "+t._s(t.postTime(e.timestamp))+" ")])],1),t._v(" "),s("div",{staticClass:"cms-info"},[s("span",[t._v("回帖：")]),t._v(" "),s("span",{staticClass:"float-right"},[t._v(" "+t._s("("+(a+1)+"L)")+" ")]),t._v(" "),t.showDelBtn(e.userId)?s("span",{staticClass:"float-right del-cmt",on:{click:function(s){t.deleteInfo(e.id,"comment",a)}}},[t._v(" 删除 ")]):t._e(),t._v(" "),s("p",{staticClass:"cms-cnt"},[t._v(" "+t._s(e.content)+" ")])])])})),t._v(" "),t.comments.length?t._e():s("p",{staticClass:"no-cms"},[t._v(" 当前还没有评论 ")])]),t._v(" "),s("div",{staticClass:"add-comment"},[t.showCmtBtn?t._e():s("p",{staticClass:"add-cmt-status"},[s("router-link",{attrs:{to:"/login"}},[t._v(" 请先 登录 后再评论... ")])],1),t._v(" "),t.showCmtBtn?s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.addComment,expression:"addComment"}],staticClass:"add-cmt-cnt",attrs:{name:"addComment",placeholder:"请输入评论"},domProps:{value:t.addComment},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.pushCmt(e):null},input:function(e){e.target.composing||(t.addComment=e.target.value)}}}):t._e(),t._v(" "),t.showCmtBtn?s("button",{staticClass:"add-cmt-btn",on:{click:t.pushCmt}},[t._v("发布评论")]):t._e()])])},staticRenderFns:[]};var k=s("VU/8")(C,w,!1,function(t){s("Wenu")},"data-v-01fd584f",null).exports,y={name:"User",data:function(){return{posts:[],comments:[],userinfo:{},flag:!1,id:this.$route.params.id}},mounted:function(){this.getInfo()},methods:{getInfo:function(){i.a.get("/api/user/"+this.id).then(this.getData)},getData:function(t){200===t.status?(this.posts=t.data.data.posts,this.comments=t.data.data.comments,this.userinfo=t.data.data.userinfo,this.flag=!0):console.log(t)},idTime:function(t){return d(t)}}},b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"user-banner"},[s("div",{staticClass:" "},[t.flag?s("img",{staticClass:"avatar  top-avatar",attrs:{src:"/api/avatars/"+t.userinfo.avatar,alt:""}}):t._e()]),t._v(" "),s("div",{staticClass:"top-intr"},[s("p",{staticClass:"top-username"},[t._v(" "+t._s(t.userinfo.username)+" ")]),t._v(" "),s("span",{staticClass:"post-total"},[t._v(" "+t._s("发帖数："+t.posts.length)+" ")]),t._v(" "),s("span",{staticClass:"cms-total"},[t._v(" "+t._s("评论数："+t.comments.length)+" ")])])]),t._v(" "),s("div",{staticClass:"post"},[s("h3",{staticClass:"intr-title"},[t._v("他发过的主题")]),t._v(" "),s("div",{},[s("ul",t._l(t.posts,function(e,a){return s("li",{key:a,staticClass:"post-info"},[s("router-link",{attrs:{to:"/post/"+e.id}},[s("h3",{staticClass:"cnt-title"},[t._v(" "+t._s(e.title)+" ")]),t._v(" "),s("p",{staticClass:"content"},[t._v(" "+t._s(e.content)+" ")])]),t._v(" "),s("span",{staticClass:"float-right idTime"},[t._v(" "+t._s(t.idTime(e.timestamp)))])],1)})),t._v(" "),t.posts.length?t._e():s("p",{staticClass:"no-cms"},[t._v(" 从未发送过任何主题 ")])])]),t._v(" "),s("div",{staticClass:"comments"},[s("h3",{staticClass:"intr-title"},[t._v("他发过的评论")]),t._v(" "),s("ul",t._l(t.comments,function(e){return s("li",{key:e.id,staticClass:"cms-info"},[s("router-link",{attrs:{to:"/post/"+e.postId}},[s("h3",{staticClass:"cnt-title"},[t._v(" "+t._s(e.postTitle)+" ")]),t._v(" "),s("p",{staticClass:"content"},[t._v(" "+t._s(e.content)+" ")])]),t._v(" "),s("span",{staticClass:"float-right idTime"},[t._v(" "+t._s(t.idTime(e.timestamp)))])],1)})),t._v(" "),t.comments.length?t._e():s("p",{staticClass:"no-cms"},[t._v(" 从未发送过评论 ")])])])},staticRenderFns:[]};var x=s("VU/8")(y,b,!1,function(t){s("+9kx")},"data-v-2ea27a72",null).exports,I={name:"Login",props:["isLogin"],data:function(){return{username:"",password:"",captcha:""}},methods:{login:function(){var t=this;i.a.post("/api/login",g.a.stringify({username:this.username,password:this.password,captcha:this.captcha})).then(function(e){t.$emit("loginStatus",e.data),t.$router.push("/")}).catch(function(t){alert(t.response.data.message)})},testAcc:function(){this.username="Avatar_2",this.password="12345"}}},L={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"account-page"},[s("h3",{staticClass:"page-title"},[t._v("登入")]),t._v(" "),s("a",{staticClass:"test-acc",on:{click:function(e){t.testAcc()}}},[t._v("启动测试账号")]),t._v(" "),s("div",[s("div",{staticClass:"input-item"},[s("span",{staticClass:"input-title"},[t._v("用户名:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"input-cnt",attrs:{type:"text",name:"username"},domProps:{value:t.username},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.login(e):null},input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"input-item"},[s("span",{staticClass:"input-title"},[t._v("密码:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input-cnt",attrs:{type:"password",name:"password"},domProps:{value:t.password},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.login(e):null},input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"input-item"},[s("span",{staticClass:"input-title"},[t._v("验证码:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.captcha,expression:"captcha"}],staticClass:"input-cnt input-captcha-cnt",attrs:{type:"text",name:"captcha"},domProps:{value:t.captcha},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.login(e):null},input:function(e){e.target.composing||(t.captcha=e.target.value)}}}),t._v(" "),s("img",{staticClass:"input-captcha",attrs:{src:"/api/captcha",alt:"captcha"}})]),t._v(" "),s("div",{staticClass:"input-item"},[s("router-link",{staticClass:"forgot",attrs:{to:"/forgot"}},[t._v("忘记密码")])],1),t._v(" "),s("div",{staticClass:"input-btn-wrap"},[s("button",{staticClass:"input-btn",on:{click:t.login}},[t._v("提交")])])])])},staticRenderFns:[]};var F=s("VU/8")(I,L,!1,function(t){s("WCce")},"data-v-03dc9602",null).exports,$={name:"Register",data:function(){return{username:"",password:"",email:"",avatar:""}},methods:{getFile:function(t){this.avatar=t.target.files[0]},submitFormMid:function(){var t=this.username.trim(),e=this.password.trim(),s=this.email.trim();t.length<2||t.length>8||encodeURI(t).length>45?alert("用户名长度中文:2-5，英文:2-8"):e.length<2||e.length>20?alert("密码长度: 2-20"):s&&!/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/.test(s)?alert("请输入正确邮箱地址如：abc@163.com"):this.submitForm()},submitForm:function(){var t=new FormData;t.append("username",this.username),t.append("password",this.password),t.append("email",this.email),t.append("avatar",this.avatar);var e=this;i.a.post("/api/register",t,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){alert("注册成功"),e.$router.push("/login")}).catch(function(t){alert(t.response.data.message)})}}},P={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"account-page"},[s("h3",{staticClass:"page-title"},[t._v("注册")]),t._v(" "),s("div",[s("div",{staticClass:"input-item"},[s("span",{staticClass:"input-title"},[t._v("用户名:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"input-cnt",attrs:{type:"text",name:"username"},domProps:{value:t.username},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.login(e):null},input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"input-item"},[s("span",{staticClass:"input-title"},[t._v("密码:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input-cnt",attrs:{type:"password",name:"password"},domProps:{value:t.password},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.login(e):null},input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"input-item"},[s("span",{staticClass:"input-title"},[t._v("邮箱:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input-cnt",attrs:{type:"text",name:"email",placeholder:"可选，填写后有找回密码功能"},domProps:{value:t.email},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.login(e):null},input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"input-item"},[s("span",{staticClass:"input-title"},[t._v("头像:")]),t._v(" "),s("input",{staticClass:"input-file",attrs:{type:"file",name:"avatar",id:"avatarFileLoad"},on:{change:t.getFile}}),t._v(" "),s("label",{staticClass:"input-file-label",attrs:{for:"avatarFileLoad"}},[t._v("上传头像")])]),t._v(" "),s("div",{staticClass:"input-btn-wrap"},[s("button",{staticClass:"input-btn",on:{click:function(e){t.submitFormMid()}}},[t._v("提交")])])])])},staticRenderFns:[]};var U=s("VU/8")($,P,!1,function(t){s("I+x3")},"data-v-99723c02",null).exports,E={name:"Forgot",data:function(){return{username:"",email:""}},methods:{login:function(){var t=this;i.a.post("/api/send-email",g.a.stringify({username:this.username,email:this.email})).then(function(e){alert(e.data.message),t.$router.push("/")}).catch(function(t){alert(t.response.data.message)})}}},R={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"account-page"},[s("h3",{staticClass:"page-title"},[t._v("忘记密码")]),t._v(" "),s("div",[s("div",{staticClass:"input-item"},[s("span",{staticClass:"input-title"},[t._v("用户名:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"input-cnt",attrs:{type:"text",name:"username"},domProps:{value:t.username},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.login(e):null},input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"input-item"},[s("span",{staticClass:"input-title"},[t._v("邮箱:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input-cnt",attrs:{type:"text",name:"email",placeholder:"输入注册时邮箱，系统将发送邮件到该地址"},domProps:{value:t.email},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.login(e):null},input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"input-btn-wrap"},[s("button",{staticClass:"input-btn",on:{click:t.login}},[t._v("提交")])])])])},staticRenderFns:[]};var N=s("VU/8")(E,R,!1,function(t){s("GDRh")},"data-v-568eeb9f",null).exports,D={name:"ResetPw",data:function(){return{username:"",password:""}},mounted:function(){this.setCookies()},methods:{setCookies:function(){this.username=decodeURI(this.$route.path.split("username=")[1]),i.a.get("/api/"+this.$route.path).then(function(t){}).catch(function(t){console.log(t)})},login:function(){if(this.password.trim().length<3)alert("密码长度必须不小于3");else{var t=this;i.a.post("/api/"+this.$route.path,g.a.stringify({username:this.username,password:this.password.trim()})).then(function(e){alert("密码修改成功"),t.$router.push("/")}).catch(function(t){alert("密码修改失败"),console.log("密码修改失败",t)})}}}},T={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"account-page"},[s("h3",{staticClass:"page-title"},[t._v("重置密码")]),t._v(" "),s("div",[s("div",{staticClass:"input-item"},[s("span",{staticClass:"input-title"},[t._v("用户名:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"input-cnt",attrs:{disabled:"disabled",type:"text",name:"username"},domProps:{value:t.username},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.login(e):null},input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"input-item"},[s("span",{staticClass:"input-title"},[t._v("密码:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input-cnt",attrs:{type:"password",name:"password",placeholder:"输入注册时邮箱，系统将发送邮件到该地址"},domProps:{value:t.password},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.login(e):null},input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"input-btn-wrap"},[s("button",{staticClass:"input-btn",on:{click:t.login}},[t._v("提交")])])])])},staticRenderFns:[]};var A=s("VU/8")(D,T,!1,function(t){s("z2Sv")},"data-v-0937ef27",null).exports,H={name:"Push",data:function(){return{title:"",content:""}},methods:{pushCmt:function(){""===this.title.trim()||""===this.content.trim()||this.title.trim().length>20?alert("评论或标题不能为空或标题过长"):this.sendPost()},sendPost:function(){var t=this;i.a.post("/api/add-post",g.a.stringify({title:this.title,content:this.content.trim()})).then(function(e){t.$router.push("/post/"+e.data.post.id)}).catch(function(t){alert(t.response.data.message)})}}},V={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"post-wrap"},[s("h3",{staticClass:"title"},[t._v(" 标题: ")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"title-cnt",attrs:{type:"text"},domProps:{value:t.title},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.pushCmt(e):null},input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v(" "),s("h3",{staticClass:"title"},[t._v(" 内容: ")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"post-cnt",attrs:{name:"content"},domProps:{value:t.content},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.pushCmt(e):null},input:function(e){e.target.composing||(t.content=e.target.value)}}}),t._v(" "),s("button",{staticClass:"sub-btn",on:{click:t.pushCmt}},[t._v("发布评论")])])},staticRenderFns:[]};var B=s("VU/8")(H,V,!1,function(t){s("yIXg")},"data-v-162f3e75",null).exports;a.a.use(m.a);var S=new m.a({routes:[{path:"/",name:"Home",component:_},{path:"/post/:id",name:"Post",component:k},{path:"/user/:id",name:"User",component:x},{path:"/login",name:"Login",component:F},{path:"/register",name:"Register",component:U},{path:"/forgot",name:"Forgot",component:N},{path:"/reset-password/:id",name:"ResetPW",component:A},{path:"/push",name:"Push",component:B}]});s("9n10"),s("slWF");a.a.config.productionTip=!1,new a.a({el:"#app",router:S,components:{App:p},template:"<App/>"})},WCce:function(t,e){},Wenu:function(t,e){},eAZ5:function(t,e){},ie0p:function(t,e){},"q+KA":function(t,e){},sbuQ:function(t,e){},slWF:function(t,e){},yIXg:function(t,e){},z2Sv:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.fdc70f4eb7f5ac3d70f0.js.map