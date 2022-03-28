"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[913],{3913:function(e,t,r){r.r(t),r.d(t,{default:function(){return S}});var n=r(8683),a=r(5861),c=r(885),s=r(7757),i=r.n(s),u=r(2791),o=r(501),p=r(6871),f=r(367),l=r(577),m="searchBar_searchbar__BzzmD",v="searchBar_form__xOPHl",d="searchBar_input__c-W+z",h="searchBar_button__6rPQm",g=r(184);function _(e){var t=e.onSubmit,r=(0,u.useState)(""),n=(0,c.Z)(r,2),a=n[0],s=n[1];return(0,g.jsx)("header",{className:m,children:(0,g.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==a.trim()?(t(a),s("")):l.Am.info("Please enter your query!")},className:v,children:[(0,g.jsx)("button",{type:"submit",className:h}),(0,g.jsx)("input",{type:"text",value:a,autoComplete:"off",autoFocus:!0,onChange:function(e){s(e.target.value.toLowerCase())},className:d,placeholder:"Enter movie name..."})]})})}var b=r(1208),x="movieList_list__slA41",j="movieList_item__FcRrj",y="movieList_link__8UDJP",w="movieList_gallery__otTdG",O="movieList_image__KgSa9",P="movieList_movieTitle__iMsKY",k=function(e){var t=e.movies,r=(0,p.TH)(),n=t.map((function(e){return(0,g.jsxs)("li",{className:j,children:[(0,g.jsx)(o.rU,{state:{from:r},className:y,to:"/movies/".concat(e.id),children:e.poster_path?(0,g.jsx)("img",{className:O,src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:e.title}):(0,g.jsx)("img",{className:O,src:b,alt:e.title})}),(0,g.jsx)("p",{className:P,children:e.title})]},e.id)}));return(0,g.jsx)("div",{className:x,children:(0,g.jsx)("ul",{className:w,children:n})})},Z=(0,u.memo)(k),N=r(2211),L=function(){var e=(0,u.useState)({movies:[],loading:!1,error:null}),t=(0,c.Z)(e,2),r=t[0],s=t[1],l=(0,o.lr)(),m=(0,c.Z)(l,2),v=m[0],d=m[1],h=v.get("query"),b=v.get("page"),x=(0,p.TH)();(0,u.useEffect)((function(){var e=function(){var e=(0,a.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.cu)(b,h);case 3:t=e.sent,r=t.results,s((function(e){return(0,n.Z)((0,n.Z)({},e),{},{movies:r,loading:!1})})),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();h&&e()}),[h,b]);var j=r.error,y=r.movies,w=r.loading;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(_,{onSubmit:function(e){return d({query:e,page:1})}}),h&&Boolean(y.length)&&(0,g.jsx)(Z,{movies:y,location:x}),!y.length&&h&&!w&&!j&&(0,g.jsxs)("p",{children:["\u041f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 ",h," \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"]}),w&&(0,g.jsx)(N.Z,{})]})},S=function(){return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(L,{})})}},367:function(e,t,r){r.d(t,{PM:function(){return u},cu:function(){return o},dB:function(){return p},au:function(){return f},jP:function(){return l}});var n=r(5861),a=r(7757),c=r.n(a),s=r(4569),i=r.n(s)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"330d8d8c24db83f5c7c344addef5e20a"}}),u=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/trending/movie/day",{params:{page:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(){var t,r,n,a,s=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:1,r=s.length>1?s[1]:void 0,e.next=4,i.get("/search/movie",{params:{query:r,page:t}});case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},1208:function(e,t,r){e.exports=r.p+"static/media/no_image.d94858f9ed2950bcb958.jpg"},8683:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=913.e4d43f23.chunk.js.map