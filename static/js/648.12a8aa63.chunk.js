"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[648],{5648:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(6871),i=n(5861),a=n(885),o=n(7757),s=n.n(o),c=n(2791),u=n(367),l=n(501),v=n(5617),f={button:"infoAboutMovie_button__-M+Mm",movies:"infoAboutMovie_movies__duuXQ",movieImage:"infoAboutMovie_movieImage__i2E3I",movieInfo:"infoAboutMovie_movieInfo__I7W-7",title:"infoAboutMovie_title__UlAnd",text:"infoAboutMovie_text__bSXMT",menu:"infoAboutMovie_menu__uT5q-",link:"infoAboutMovie_link__8FqLt",navigation:"infoAboutMovie_navigation__5xFy-",information:"infoAboutMovie_information__LVQk2"},p=n(184),d=function(){var e=(0,c.useState)(null),t=(0,a.Z)(e,2),n=t[0],o=t[1],d=(0,r.UO)().movieId,m=(0,r.s0)(),h=(0,r.TH)(),x=null===n||void 0===n?void 0:n.genres.map((function(e){return e.name})).join(", ");return(0,c.useEffect)((function(){var e=function(){var e=(0,i.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.dB)(d);case 3:t=e.sent,o(t),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[d]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:f.buttonWrapper,children:(0,p.jsx)("button",{className:f.button,onClick:function(){var e,t,n;m(null!==(e=null===h||void 0===h||null===(t=h.state)||void 0===t||null===(n=t.from)||void 0===n?void 0:n.location)&&void 0!==e?e:"/")},type:"button",children:"\u21d0\u2002 Go back"})}),n&&(0,p.jsxs)("div",{className:f.movies,children:[(0,p.jsx)("img",{src:n.poster_path?"https://image.tmdb.org/t/p/w500".concat(n.poster_path):v,alt:n.title}),(0,p.jsxs)("div",{className:f.movieInfo,children:[(0,p.jsx)("h2",{className:f.title,children:n.title}),(0,p.jsxs)("p",{className:f.text,children:["Vote: ",n.vote_average]}),(0,p.jsxs)("p",{className:f.text,children:["Popularity: ",n.popularity]}),(0,p.jsxs)("p",{className:f.text,children:["Genres: ",x]}),(0,p.jsx)("h2",{className:f.title,children:"Overview"}),(0,p.jsx)("p",{className:f.text,children:n.overview})]})]}),(0,p.jsxs)("div",{className:f.navigation,children:[(0,p.jsx)("h3",{className:f.information,children:"Additional information"}),(0,p.jsxs)("ul",{className:f.menu,children:[(0,p.jsx)("li",{children:(0,p.jsx)(l.rU,{className:f.link,to:"/movies/".concat(d,"/cast"),children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(l.rU,{className:f.link,to:"/movies/".concat(d,"/reviews"),children:"Reviews"})})]})]})]})},m=function(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d,{}),(0,p.jsx)(r.j3,{})]})}},367:function(e,t,n){n.d(t,{PM:function(){return c},cu:function(){return u},dB:function(){return l},au:function(){return v},jP:function(){return f}});var r=n(5861),i=n(7757),a=n.n(i),o=n(4569),s=n.n(o)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"330d8d8c24db83f5c7c344addef5e20a"}}),c=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/trending/movie/day",{params:{page:t}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(a().mark((function e(){var t,n,r,i,o=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:1,n=o.length>1?o[1]:void 0,e.next=4,s.get("/search/movie",{params:{query:n,page:t}});case 4:return r=e.sent,i=r.data,e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"/credits"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"/reviews"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},5617:function(e,t,n){e.exports=n.p+"static/media/no_image.d94858f9ed2950bcb958.jpg"}}]);
//# sourceMappingURL=648.12a8aa63.chunk.js.map