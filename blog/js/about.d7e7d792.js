(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"11e9":function(t,e,n){var a=n("52a7"),i=n("4630"),s=n("6821"),o=n("6a99"),r=n("69a8"),c=n("c69a"),u=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?u:function(t,e){if(t=s(t),e=o(e,!0),c)try{return u(t,e)}catch(n){}if(r(t,e))return i(!a.f.call(t,e),t[e])}},1546:function(t,e,n){},"195b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog-list"},[t.issuesList&&t.issuesList.length?[t._l(t.issuesList,function(e,a){return[n("div",{staticClass:"blog-list-item"},[n("div",{staticClass:"img-div",on:{click:function(n){return t.pushToContent(e)}}},[n("img",{attrs:{src:t.getBlogImg(e),width:"100%",height:"100%"}}),n("div",{staticClass:"title-div"},[t._v("\n                        "+t._s(e.title)+"\n                    ")])]),n("div",{staticClass:"tag-div"},[n("span",{staticClass:"tag-item",staticStyle:{"background-color":"#258EFB"}},[n("i",{staticClass:"iconfont icon-riqi"}),t._v(t._s(t.formatDate(e.created_at)))]),n("span",{staticClass:"tag-item",staticStyle:{"background-color":"#E6A23C"}},[n("i",{staticClass:"iconfont icon-riqi"}),t._v(t._s(t.getCharCount(e.body))+"字")]),n("span",{staticClass:"tag-item",staticStyle:{"background-color":"#FF4E6A"}},[n("i",{staticClass:"iconfont icon-shijian"}),t._v("大概 "+t._s(t.calcReadTime(e.body))+" 分钟")]),t._l(e.labels.filter(function(t){return-1===t.name.indexOf(":img")}),function(e){return n("span",{staticClass:"tag-item blog-labels",style:{backgroundColor:"#"+e.color},on:{click:function(n){return t.$router.push({name:"blog_list",query:{tag:e.name}})}}},[n("i",{staticClass:"iconfont icon-biaoqian"}),t._v(t._s(e.name)+"\n                ")])}),e.milestone?n("span",{staticClass:"tag-item",staticStyle:{"background-color":"#67C23A",cursor:"pointer"},on:{click:function(n){return t.$router.push({name:"blog_list",query:{milestone:e.milestone.number}})}}},[n("i",{staticClass:"iconfont icon-leimupinleifenleileibie"}),t._v(t._s(e.milestone.title))]):t._e()],2)])]}),t.issuesList.length?n("page-component",{attrs:{pageNum:t.pageNum,pageSize:t.pageSize,total:t.$store.state.repoInfo.open_issues_count},on:{changePage:t.changePage}}):t._e()]:[t._m(0)]],2)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"skeleton-list shadow"},[n("div",{staticClass:"blog-list-item"},[n("div",{staticClass:"skeleton-row"}),n("div",{staticClass:"skeleton-row"})])])}],s=(n("4917"),n("7f7f"),n("ac6a"),n("96cf"),n("3b8d")),o=n("d225"),r=n("b0b4"),c=n("308d"),u=n("6bb5"),l=n("4e2b"),g=n("9ab4"),m=n("60a3"),f=n("ecc6"),h=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.pageNum=1,t.pageSize=10,t.issuesList=[],t}return Object(l["a"])(e,t),Object(r["a"])(e,[{key:"created",value:function(){this.addScrollListen(),this.searchIssuesList()}},{key:"searchIssuesList",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$githubApi.getIssuesList({milestone:this.$route.query.milestone,labels:this.$route.query.tag,page:this.pageNum,perPage:this.pageSize});case 2:this.issuesList=t.sent;case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"addScrollListen",value:function(){window.onscroll=function(){var t=document.documentElement.scrollTop||document.body.scrollTop,e=document.documentElement.clientHeight||document.body.clientHeight,n=document.documentElement.scrollHeight||document.body.scrollHeight;t+e==n&&console.log("距顶部"+t+"可视区高度"+e+"滚动条总高度"+n)}}},{key:"getBlogImg",value:function(t){var e=this,n="";return t.labels&&t.labels.length&&t.labels.forEach(function(t){0===t.name.indexOf(":img")&&(n=e.$store.state.qiniuDomainName+t.name.substring(5))}),!n&&t.milestone&&(n=t.milestone.description),n||(n=this.$store.state.defaultImg),n}},{key:"getCharCount",value:function(t){var e=/[\u4e00-\u9fa5]/g,n=t.match(e)?t.match(e).length:0;return n.toFixed(0)}},{key:"calcReadTime",value:function(t){var e=/[\u4e00-\u9fa5]/g,n=t.match(e)?t.match(e).length:0;return Math.ceil(n/500)}},{key:"changePage",value:function(t){console.log("changePage_____>"),this.pageNum=t,this.searchIssuesList()}},{key:"pushToContent",value:function(t){this.$store.commit("setTemplateIssuesInfo",t),this.$router.push({name:"blog_content",query:{issueNumber:t.number}})}}]),e}(m["c"]);h=Object(g["a"])([Object(m["a"])({components:{PageComponent:f["a"]}})],h);var b=h,p=b,v=(n("9b27"),n("2877")),d=Object(v["a"])(p,a,i,!1,null,"53039c7a",null);e["default"]=d.exports},"1a83":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"skeleton"})},i=[],s=n("d225"),o=n("b0b4"),r=n("308d"),c=n("6bb5"),u=n("4e2b"),l=n("9ab4"),g=n("60a3"),m=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(r["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.test=!1,t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"created",value:function(){}}]),e}(g["c"]);m=Object(l["a"])([Object(g["a"])({components:{}})],m);var f=m,h=f,b=(n("9d94"),n("2877")),p=Object(b["a"])(h,a,i,!1,null,"5cb7b8d6",null);e["default"]=p.exports},4917:function(t,e,n){"use strict";var a=n("cb7c"),i=n("9def"),s=n("0390"),o=n("5f1b");n("214f")("match",1,function(t,e,n,r){return[function(n){var a=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,a):new RegExp(n)[e](String(a))},function(t){var e=r(n,t,this);if(e.done)return e.value;var c=a(t),u=String(this);if(!c.global)return o(c,u);var l=c.unicode;c.lastIndex=0;var g,m=[],f=0;while(null!==(g=o(c,u))){var h=String(g[0]);m[f]=h,""===h&&(c.lastIndex=s(u,i(c.lastIndex),l)),f++}return 0===f?null:m}]})},"5dbc":function(t,e,n){var a=n("d3f4"),i=n("8b97").set;t.exports=function(t,e,n){var s,o=e.constructor;return o!==n&&"function"==typeof o&&(s=o.prototype)!==n.prototype&&a(s)&&i&&i(t,s),t}},"710b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("LoginCallBack.vue "+t._s(t.code))])])},i=[],s=n("d225"),o=n("b0b4"),r=n("308d"),c=n("6bb5"),u=n("4e2b"),l=n("9ab4"),g=n("60a3"),m=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(r["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.code="",t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"mounted",value:function(){this.code=this.$route.query.code}}]),e}(g["c"]);m=Object(l["a"])([Object(g["a"])({components:{}})],m);var f=m,h=f,b=n("2877"),p=Object(b["a"])(h,a,i,!1,null,null,null);e["default"]=p.exports},"74a8":function(t,e,n){},"758b":function(t,e,n){},"7fac":function(t,e,n){},"8b97":function(t,e,n){var a=n("d3f4"),i=n("cb7c"),s=function(t,e){if(i(t),!a(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,a){try{a=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),a(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,n){return s(t,n),e?t.__proto__=n:a(t,n),t}}({},!1):void 0),check:s}},9093:function(t,e,n){var a=n("ce10"),i=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,i)}},"9b27":function(t,e,n){"use strict";var a=n("7fac"),i=n.n(a);i.a},"9d94":function(t,e,n){"use strict";var a=n("1546"),i=n.n(a);i.a},aa77:function(t,e,n){var a=n("5ca1"),i=n("be13"),s=n("79e5"),o=n("fdef"),r="["+o+"]",c="​",u=RegExp("^"+r+r+"*"),l=RegExp(r+r+"*$"),g=function(t,e,n){var i={},r=s(function(){return!!o[t]()||c[t]()!=c}),u=i[t]=r?e(m):o[t];n&&(i[n]=u),a(a.P+a.F*r,"String",i)},m=g.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=g},ac6a:function(t,e,n){for(var a=n("cadf"),i=n("0d58"),s=n("2aba"),o=n("7726"),r=n("32e9"),c=n("84f2"),u=n("2b4c"),l=u("iterator"),g=u("toStringTag"),m=c.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=i(f),b=0;b<h.length;b++){var p,v=h[b],d=f[v],_=o[v],C=_&&_.prototype;if(C&&(C[l]||r(C,l,m),C[g]||r(C,g,v),c[v]=m,d))for(p in a)C[p]||s(C,p,a[p],!0)}},aea4:function(t,e,n){"use strict";var a=n("c0bb"),i=n.n(a);i.a},b623:function(t,e,n){},b8f1:function(t,e,n){"use strict";var a=n("758b"),i=n.n(a);i.a},c0bb:function(t,e,n){},c5f6:function(t,e,n){"use strict";var a=n("7726"),i=n("69a8"),s=n("2d95"),o=n("5dbc"),r=n("6a99"),c=n("79e5"),u=n("9093").f,l=n("11e9").f,g=n("86cc").f,m=n("aa77").trim,f="Number",h=a[f],b=h,p=h.prototype,v=s(n("2aeb")(p))==f,d="trim"in String.prototype,_=function(t){var e=r(t,!1);if("string"==typeof e&&e.length>2){e=d?e.trim():m(e,3);var n,a,i,s=e.charCodeAt(0);if(43===s||45===s){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+e}for(var o,c=e.slice(2),u=0,l=c.length;u<l;u++)if(o=c.charCodeAt(u),o<48||o>i)return NaN;return parseInt(c,a)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof h&&(v?c(function(){p.valueOf.call(n)}):s(n)!=f)?o(new b(_(e)),n,h):_(e)};for(var C,y=n("9e1e")?u(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;y.length>k;k++)i(b,C=y[k])&&!i(h,C)&&g(h,C,l(b,C));h.prototype=p,p.constructor=h,n("2aba")(a,f,h)}},cac8:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("button",{on:{click:function(e){return t.getUserInfo()}}},[t._v("sendGet")]),n("button",{on:{click:function(e){return t.toLogin()}}},[t._v("toLogin")]),n("button",{on:{click:function(e){return t.getToken()}}},[t._v("getToken")]),n("button",{on:{click:function(e){return t.createComment()}}},[t._v("createComment")]),n("br"),n("button",{on:{click:function(e){return t.getLabels()}}},[t._v("getLabels")]),n("button",{on:{click:function(e){return t.getMilestones()}}},[t._v("getMilestones")]),n("button",{on:{click:function(e){return t.getIssuesList()}}},[t._v("getIssuesList")]),n("button",{on:{click:function(e){return t.getBlogMasterInfo()}}},[t._v("getBlogMasterInfo")])])},i=[],s=(n("96cf"),n("3b8d")),o=n("d225"),r=n("b0b4"),c=n("308d"),u=n("6bb5"),l=n("4e2b"),g=n("9ab4"),m=n("60a3"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._m(0),n("h3",[t._v("Installed CLI Plugins")]),t._m(1),n("h3",[t._v("Essential Links")]),t._m(2),n("h3",[t._v("Ecosystem")]),t._m(3)])},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n    For a guide and recipes on how to configure / customize this project,"),n("br"),t._v("\n    check out the\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",target:"_blank",rel:"noopener"}},[t._v("typescript")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],b=function(t){function e(){return Object(o["a"])(this,e),Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(m["c"]);Object(g["a"])([Object(m["b"])()],b.prototype,"msg",void 0),b=Object(g["a"])([m["a"]],b);var p=b,v=p,d=(n("aea4"),n("2877")),_=Object(d["a"])(v,f,h,!1,null,"a38c91a8",null),C=_.exports,y=function(t){function e(){return Object(o["a"])(this,e),Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(r["a"])(e,[{key:"created",value:function(){}},{key:"mounted",value:function(){}},{key:"getUserInfo",value:function(){}},{key:"toLogin",value:function(){this.$githubApi.toLogin()}},{key:"getToken",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$githubApi.getToken({code:"09884ecc7994a842b01e"});case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"createComment",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$githubApi.createComment({comment:"111",issueNumber:"1"});case 2:t.sent;case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"getLabels",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$githubApi.labelsList4Repository();case 2:e=t.sent,console.log("labels----\x3e",e);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"getMilestones",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$githubApi.milestonesList4Repository();case 2:e=t.sent,console.log("milestones----\x3e",e);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"getIssuesList",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$githubApi.getIssuesList({milestone:"",labels:""});case 2:e=t.sent,console.log("issuesList----\x3e",e);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"getBlogMasterInfo",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$githubApi.getBloggerInfo();case 2:e=t.sent,console.log("blogMasterInfo------\x3e",e);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}]),e}(m["c"]);y=Object(g["a"])([Object(m["a"])({components:{HelloWorld:C}})],y);var k=y,w=k,O=Object(d["a"])(w,a,i,!1,null,"c3e7523e",null);e["default"]=O.exports},dc54:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog-content"},[n("div",{staticClass:"blog-content-body"},[n("div",{staticClass:"img-div"},[t.getBlogImg(t.blogContent)?[n("img",{attrs:{src:t.getBlogImg(t.blogContent),width:"100%",height:"100%"}})]:[n("div",{staticStyle:{width:"100%",height:"100%","background-color":"#e4e3e6"}})],n("div",{staticClass:"title-div"},[t._v("\n                "+t._s(t.blogContent.title)+"\n            ")])],2),n("div",{staticClass:"tag-div"},[t.blogContent.created_at?n("span",{staticClass:"tag-item",staticStyle:{"background-color":"#258EFB"}},[n("i",{staticClass:"iconfont icon-riqi"}),t._v(t._s(t.formatDate(t.blogContent.created_at)))]):t._e(),t.blogContent.body?n("span",{staticClass:"tag-item",staticStyle:{"background-color":"#E6A23C"}},[n("i",{staticClass:"iconfont icon-riqi"}),t._v(t._s(t.getCharCount(t.blogContent.body))+"字")]):t._e(),t.blogContent.body?n("span",{staticClass:"tag-item",staticStyle:{"background-color":"#FF4E6A"}},[n("i",{staticClass:"iconfont icon-shijian"}),t._v("大概 "+t._s(t.calcReadTime(t.blogContent.body))+" 分钟")]):t._e(),t._l(t.blogContent.labels.filter(function(t){return-1===t.name.indexOf(":img")}),function(e){return t.blogContent.labels&&t.blogContent.labels.length?n("span",{staticClass:"tag-item blog-labels",style:{backgroundColor:"#"+e.color},on:{click:function(n){return t.$router.push({name:"blog_list",query:{tag:e.name}})}}},[n("i",{staticClass:"iconfont icon-biaoqian"}),t._v(t._s(e.name)+"\n                ")]):t._e()}),t.blogContent.milestone?n("span",{staticClass:"tag-item",staticStyle:{"background-color":"#67C23A",cursor:"pointer"},on:{click:function(e){return t.$router.push({name:"blog_list",query:{milestone:t.blogContent.milestone.number}})}}},[n("i",{staticClass:"iconfont icon-leimupinleifenleileibie"}),t._v(t._s(t.blogContent.milestone.title))]):t._e()],2),t.markDownBody?n("article",{staticClass:"markdown-body",domProps:{innerHTML:t._s(t.markDownBody)}}):n("div",{staticClass:"skeleton-list"},[n("div",{staticClass:"skeleton-row"}),n("div",{staticClass:"skeleton-row"}),n("div",{staticClass:"skeleton-row"})]),n("div",{staticClass:"do-comment"},[n("div",{staticClass:"title"},[n("span",{staticClass:"right-span"},[n("span",{staticClass:"statue-show"},[t._v("\n                        GitHub "+t._s(t.loginInfo.accessToken?"已登录":"未登录")+"!\n                    ")]),t.loginInfo.accessToken?n("span",{staticClass:"login-button",on:{click:t.loginOut}},[t._v("\n                        退出\n                    ")]):n("span",{staticClass:"login-button",on:{click:t.toLogin}},[t._v("\n                        登录\n                    ")])])]),n("div",{staticClass:"body dis_table wd100"},[n("div",{staticClass:"dis_table_cell"},[t.loginInfo.accessToken?n("img",{attrs:{src:t.loginInfo.loginAvatar,width:"40",height:"40"}}):n("i",{staticClass:"iconfont icon-wode-weidenglu"})]),n("div",{staticClass:"dis_table_cell"},[n("div",{staticClass:"preview-switch"},[n("span",{class:t.previewMode?"":"active",on:{click:function(e){return t.changePreviewMode(!1)}}},[t._v("编辑")]),n("span",{staticClass:"halving-line"},[t._v("|")]),n("span",{class:t.previewMode?"active":"",on:{click:function(e){return t.changePreviewMode(!0)}}},[t._v("预览")])]),t.previewMode?[n("div",{staticClass:"preview-body markdown-body",domProps:{innerHTML:t._s(t.previewContent)}})]:[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.commentBody,expression:"commentBody"}],attrs:{placeholder:t.loginInfo.accessToken?"欢迎留言评论！":"登录后才可以留言哦~",disabled:!t.loginInfo.accessToken},domProps:{value:t.commentBody},on:{input:function(e){e.target.composing||(t.commentBody=e.target.value)}}}),n("div",{staticClass:"comment_button"},[n("span",{on:{click:t.sendComment}},[t._v("\n                                评 论\n                            ")])])],n("div",{staticClass:"tips"},[t._v("\n                        注：评论功能现已全面支持 Markdown 语法！\n                    ")])],2)])]),n("div",{staticClass:"blog-comment"},[n("div",{staticClass:"title"},[n("span",[t._v("\n                    评论 ("+t._s(t.blogContent.comments)+")\n                ")])]),n("div",{staticClass:"body"},[t.commentList.length?t._l(t.commentList,function(e){return n("div",{staticClass:"item dis_table wd100"},[n("div",{staticClass:"dis_table_cell comment_user_avatar",staticStyle:{width:"44px","vertical-align":"top"}},[n("img",{attrs:{width:"44",height:"44",src:e.user.avatar_url,alt:""}})]),n("div",{staticClass:"table-right dis_table_cell textleft vertical-top"},[n("div",{},[n("a",{staticClass:"comment_user_name",attrs:{href:"https://github.com/"+e.user.login,target:"_blank"}},[t._v(t._s(e.user.login))]),n("span",{staticClass:"comment_time"},[t._v(t._s(t.formatDate(e.created_at,1)))])]),n("div",{staticClass:"comment_content markdown-body",domProps:{innerHTML:t._s(e.body)}})])])}):[n("div",{staticStyle:{"text-align":"center",padding:"20px"}},[t._v("\n                        暂无评论，欢迎留言！！\n                    ")])],t.blogContent.comments?n("page-component",{attrs:{pageNum:t.pageNum,pageSize:t.pageSize,total:t.blogContent.comments},on:{changePage:t.changePage}}):t._e()],2)])])])},i=[],s=(n("4917"),n("7f7f"),n("ac6a"),n("a481"),n("96cf"),n("3b8d")),o=n("d225"),r=n("b0b4"),c=n("308d"),u=n("6bb5"),l=n("4e2b"),g=n("9ab4"),m=n("60a3"),f=n("ecc6"),h=n("9fe7"),b=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.blogContent={labels:[],created_at:"",body:"",milestone:{},comments:0},t.markDownBody="",t.commentList=[],t.pageNum=1,t.pageSize=10,t.commentBody="",t.previewMode=!1,t.previewContent="",t}return Object(l["a"])(e,t),Object(r["a"])(e,[{key:"created",value:function(){var t=this;-1===window.location.href.indexOf("?code=")||this.$route.query.code?this.initData():Object(s["a"])(regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$githubApi.getToken({code:window.location.href.substring(window.location.href.indexOf("?code=")+6,window.location.href.indexOf("#"))});case 2:return e.next=4,t.$githubApi.getLoginUserInfo();case 4:n=e.sent,localStorage.setItem(h["a"].LOCALSTORAGE_LOGIN_AVATAR,n.avatar_url),window.location.href=window.location.href.substring(0,window.location.href.indexOf("?code="))+window.location.href.substring(window.location.href.indexOf("#"));case 7:case"end":return e.stop()}},e)}))()}},{key:"toLogin",value:function(){this.$githubApi.toLogin(window.location.href)}},{key:"loginOut",value:function(){localStorage.setItem(h["a"].LOCALSTORAGE_NAME,""),localStorage.setItem(h["a"].LOCALSTORAGE_LOGIN_AVATAR,""),window.history.go(0)}},{key:"initData",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,n,a=this,i=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=i.length>0&&void 0!==i[0]?i[0]:{toLastPage:!1},n=e.toLastPage,Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!a.$store.state.templateIssuesInfo.id||a.$store.state.templateIssuesInfo.id!==a.$route.query.issueNumber){t.next=4;break}a.blogContent=a.$store.state.templateIssuesInfo,t.next=7;break;case 4:return t.next=6,a.$githubApi.getIssuesContent({issueNumber:a.$route.query.issueNumber});case 6:a.blogContent=t.sent;case 7:return t.next=9,a.$githubApi.getMdContent({text:a.blogContent.body});case 9:a.markDownBody=t.sent,a.markDownBody=a.markDownBody.replace(/<a href="([^"]*).* src="([^"]*).* alt="([^"]*)".* data-canonical-src="([^"]*)".*<\/a>/gi,'<a href="$4" target="_blank" rel="nofollow"><img src="$4" alt="$3" data-canonical-src="$4" style="max-width:100%;"></a>'),n&&(a.pageNum=Math.ceil(a.blogContent.comments/a.pageSize),a.getCommentList());case 12:case"end":return t.stop()}},t)}))(),n||this.getCommentList();case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"getCommentList",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$githubApi.getCommentList4Issues({issueNumber:this.$route.query.issueNumber,page:this.pageNum,perPage:this.pageSize});case 2:this.commentList=t.sent;case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"getBlogImg",value:function(t){var e=this,n="";return t.id&&(t.labels&&t.labels.length&&t.labels.forEach(function(t){0===t.name.indexOf(":img")&&(n=e.$store.state.qiniuDomainName+t.name.substring(5))}),!n&&t.milestone&&(n=t.milestone.description),n||(n=this.$store.state.defaultImg)),n}},{key:"getCharCount",value:function(t){if(t){var e=/[\u4e00-\u9fa5]/g,n=t.match(e)?t.match(e).length:0;return n.toFixed(0)}return""}},{key:"calcReadTime",value:function(t){if(t){var e=/[\u4e00-\u9fa5]/g,n=t.match(e)?t.match(e).length:0;return Math.ceil(n/500)}return 0}},{key:"changePage",value:function(t){console.log("changePage_____>"),this.pageNum=t,this.getCommentList()}},{key:"sendComment",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$githubApi.getMdContent({text:this.commentBody});case 2:return e=t.sent,t.next=5,this.$githubApi.createComment({comment:e,issueNumber:this.blogContent.number});case 5:this.commentBody="",this.initData({toLastPage:!0});case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"changePreviewMode",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!e){t.next=6;break}return t.next=3,this.$githubApi.getMdContent({text:this.commentBody});case 3:this.previewContent=t.sent,t.next=7;break;case 6:this.previewContent="";case 7:this.previewMode=e;case 8:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"loginInfo",get:function(){return{accessToken:localStorage.getItem(h["a"].LOCALSTORAGE_NAME),loginAvatar:localStorage.getItem(h["a"].LOCALSTORAGE_LOGIN_AVATAR)}}}]),e}(m["c"]);b=Object(g["a"])([Object(m["a"])({components:{PageComponent:f["a"]}})],b);var p=b,v=p,d=(n("dcf6"),n("2877")),_=Object(d["a"])(v,a,i,!1,null,"84ecf4a2",null);e["default"]=_.exports},dcf6:function(t,e,n){"use strict";var a=n("74a8"),i=n.n(a);i.a},ecc6:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog-page-nav"},[t._l(t.totalPage,function(e,a){return["show"===t.checkShow(e,"lt")?n("span",{staticClass:"page-item",on:{click:function(n){return t.changeNumAppoint(e)}}},[t._v(t._s(e))]):"ignore"===t.checkShow(e,"lt")?n("span",{staticClass:"page-item page-ignore"},[t._v("...")]):t._e()]}),n("span",{staticClass:"page-item current"},[t._v(t._s(t.pageNum))]),t._l(t.totalPage,function(e,a){return["show"===t.checkShow(e,"gt")?n("span",{staticClass:"page-item",on:{click:function(n){return t.changeNumAppoint(e)}}},[t._v(t._s(e))]):"ignore"===t.checkShow(e,"gt")?n("span",{staticClass:"page-item page-ignore"},[t._v("...")]):t._e()]}),n("span",{staticClass:"page-item page-next",on:{click:t.changePageNum}},[n("i",{staticClass:"iconfont icon-next"})])],2)},i=[],s=(n("c5f6"),n("d225")),o=n("b0b4"),r=n("308d"),c=n("6bb5"),u=n("4e2b"),l=n("9ab4"),g=n("60a3"),m=function(t){function e(){return Object(s["a"])(this,e),Object(r["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"checkShow",value:function(t,e){if("lt"===e){if(t<this.pageNum){if(1==t||this.totalPage<=7||this.pageNum<=4||t===this.pageNum-1)return"show";var n=3-(this.totalPage-this.pageNum);if(n>0&&t>=this.pageNum-n-1)return"show";if(t-1===1)return"ignore"}}else if("gt"===e&&t>this.pageNum){if(t==this.totalPage||this.totalPage<=7||this.pageNum>=this.totalPage-3||t===this.pageNum+1)return"show";var a=4-this.pageNum;if(a>0&&t<=this.pageNum+a+1)return"show";if(t+1===this.totalPage)return"ignore"}return"hidden"}},{key:"changePageNum",value:function(){this.pageNum<this.totalPage&&this.$emit("changePage",this.pageNum+1)}},{key:"changeNumAppoint",value:function(t){this.$emit("changePage",t)}},{key:"totalPage",get:function(){return Math.ceil(this.total/this.pageSize)}}]),e}(g["c"]);Object(l["a"])([Object(g["b"])({type:Number,default:1})],m.prototype,"pageNum",void 0),Object(l["a"])([Object(g["b"])({type:Number,default:1})],m.prototype,"pageSize",void 0),Object(l["a"])([Object(g["b"])({type:Number,default:1})],m.prototype,"total",void 0),m=Object(l["a"])([Object(g["a"])({components:{}})],m);var f=m,h=f,b=(n("b8f1"),n("2877")),p=Object(b["a"])(h,a,i,!1,null,"7190541d",null);e["a"]=p.exports},f695:function(t,e,n){"use strict";var a=n("b623"),i=n.n(a);i.a},f820:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("span",[t._v("foo")]),n("div",{attrs:{id:"container"}},[n("div",{staticClass:"item item-1"},[t._v("1")]),n("div",{staticClass:"item item-2"},[t._v("2")]),n("div",{staticClass:"item item-3"},[t._v("3")]),n("div",{staticClass:"item item-4"},[t._v("4")]),n("div",{staticClass:"item item-5"},[t._v("5")]),n("div",{staticClass:"item item-6"},[t._v("6")]),n("div",{staticClass:"item item-7"},[t._v("7")]),n("div",{staticClass:"item item-8"},[t._v("8")]),n("div",{staticClass:"item item-9"},[t._v("9")])]),n("span",[t._v("bar")])])}],s=n("d225"),o=n("308d"),r=n("6bb5"),c=n("4e2b"),u=n("9ab4"),l=n("60a3"),g=function(t){function e(){return Object(s["a"])(this,e),Object(o["a"])(this,Object(r["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),e}(l["c"]);g=Object(u["a"])([Object(l["a"])({components:{}})],g);var m=g,f=m,h=(n("f695"),n("2877")),b=Object(h["a"])(f,a,i,!1,null,"720430bc",null);e["default"]=b.exports},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=about.d7e7d792.js.map