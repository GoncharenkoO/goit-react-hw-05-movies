"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[918],{8918:function(t,r,e){e.r(r),e.d(r,{default:function(){return _}});var n=e(5861),a=e(885),c=e(7757),u=e.n(c),s=e(2791),i=e(6871),o=e(367),p=e(2371),f="cast_cast__yr0nT",d="cast_castItem__dQu6r",v="cast_castImg__iDKGQ",h="cast_name__NFLTM",m="cast_character__BxVqB",l=e(184),_=function(){var t=(0,s.useState)([]),r=(0,a.Z)(t,2),e=r[0],c=r[1],_=(0,i.UO)().movieId;(0,s.useEffect)((function(){var t=function(){var t=(0,n.Z)(u().mark((function t(){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.au)(_);case 3:r=t.sent,e=r.cast,c(e),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[_]);var g=e.map((function(t){return(0,l.jsxs)("li",{className:d,children:[(0,l.jsx)("img",{className:v,src:t.profile_path?"https://image.tmdb.org/t/p/w500".concat(t.profile_path):p,alt:t.original_name}),(0,l.jsx)("h4",{className:h,children:t.original_name}),(0,l.jsx)("p",{className:m,children:t.character})]},t.id)}));return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("ul",{className:f,children:g})})}},367:function(t,r,e){e.d(r,{PM:function(){return i},cu:function(){return o},dB:function(){return p},au:function(){return f},jP:function(){return d}});var n=e(5861),a=e(7757),c=e.n(a),u=e(4569),s=e.n(u)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"330d8d8c24db83f5c7c344addef5e20a"}}),i=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/trending/movie/day",{params:{page:r}});case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(){var r,e,n,a,u=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=u.length>0&&void 0!==u[0]?u[0]:1,e=u.length>1?u[1]:void 0,t.next=4,s.get("/search/movie",{params:{query:e,page:r}});case 4:return n=t.sent,a=n.data,t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(r));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(r,"/credits"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),d=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(r,"/reviews"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},2371:function(t,r,e){t.exports=e.p+"static/media/defAvatar.202f550d3617883f5a78.png"}}]);
//# sourceMappingURL=918.c2105aa9.chunk.js.map