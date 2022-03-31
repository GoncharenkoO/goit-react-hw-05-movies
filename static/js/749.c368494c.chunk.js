"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[749],{8271:function(t,e,r){r.d(e,{Z:function(){return f}});var n=r(501),a=r(7741),i="cartMovies_item__4fPw3",o="cartMovies_link__PdqR7",c="cartMovies_image__3-lw7",u="cartMovies_movieTitle__5Rs13",s=r(184),f=function(t){var e=t.movie,r=t.location;return(0,s.jsxs)("li",{className:i,children:[(0,s.jsx)(n.rU,{state:{from:r},className:o,to:"/movies/".concat(e.id),children:e.poster_path?(0,s.jsx)("img",{className:c,src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:e.title}):(0,s.jsx)("img",{className:c,src:a,alt:e.title})}),(0,s.jsx)("p",{className:u,children:e.title})]},e.id)}},5749:function(t,e,r){r.r(e),r.d(e,{default:function(){return y}});var n=r(8683),a=r(907);var i=r(181);function o(t){return function(t){if(Array.isArray(t))return(0,a.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,i.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=r(5861),u=r(885),s=r(7757),f=r.n(s),p=r(2791),l=r(6871),v=r(367),d=r(8271),m=r(2211),h={title:"favoritesMovie_title__F9wb4",moviesList:"favoritesMovie_moviesList__tSsR4"},b=r(184),g=function(){var t=(0,p.useState)({movies:[],loading:!1,error:null}),e=(0,u.Z)(t,2),r=e[0],a=e[1],i=(0,l.TH)();(0,p.useEffect)((function(){var t=function(){var t=(0,c.Z)(f().mark((function t(){var e,r;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,v.PM)();case 3:e=t.sent,r=e.results,a((function(t){return{movies:[].concat(o(t.movies),o(r)),loading:!1,error:null}})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),a((function(e){return(0,n.Z)((0,n.Z)({},e),{},{loading:!1,error:t.t0.message})}));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[]);var s=r.movies,g=r.loading,y=s.map((function(t){return(0,b.jsx)(d.Z,{movie:t,location:i},t.id)}));return(0,b.jsxs)("div",{className:h.section,children:[(0,b.jsx)("h1",{className:h.title,children:"Trending today"}),(0,b.jsx)("ul",{className:h.moviesList,children:y}),g&&(0,b.jsx)(m.Z,{})]})},y=function(){return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(g,{})})}},367:function(t,e,r){r.d(e,{PM:function(){return u},cu:function(){return s},dB:function(){return f},au:function(){return p},jP:function(){return l}});var n=r(5861),a=r(7757),i=r.n(a),o=r(4569),c=r.n(o)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"330d8d8c24db83f5c7c344addef5e20a"}}),u=function(){var t=(0,n.Z)(i().mark((function t(e){var r,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/trending/movie/day",{params:{page:e}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s=function(){var t=(0,n.Z)(i().mark((function t(){var e,r,n,a,o=arguments;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=o.length>0&&void 0!==o[0]?o[0]:1,r=o.length>1?o[1]:void 0,t.next=4,c.get("/search/movie",{params:{query:r,page:e}});case 4:return n=t.sent,a=n.data,t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(i().mark((function t(e){var r,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(e));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(i().mark((function t(e){var r,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(e,"/credits"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(i().mark((function t(e){var r,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(e,"/reviews"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},7741:function(t,e,r){t.exports=r.p+"static/media/no_image.d94858f9ed2950bcb958.jpg"},8683:function(t,e,r){function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}r.d(e,{Z:function(){return i}})}}]);
//# sourceMappingURL=749.c368494c.chunk.js.map