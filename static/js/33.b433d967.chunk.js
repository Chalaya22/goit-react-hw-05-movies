"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[33],{3174:function(n,t,e){e.d(t,{Z:function(){return h}});var r,a,c,u=e(168),o=e(5867),s=e(1087),i=o.ZP.div(r||(r=(0,u.Z)(["\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  line-height: 0.8;\n"]))),p=o.ZP.ul(a||(a=(0,u.Z)([""]))),f=(0,o.ZP)(s.rU)(c||(c=(0,u.Z)(["\n  font-size: 18px;\n  font-weight: 600;\n  color: grey;\n\n  :hover {\n    color: tomato;\n  }\n"]))),l=e(7689),v=e(184),h=function(n){var t=n.movies,e=(0,l.TH)();return(0,v.jsx)(i,{children:(0,v.jsx)("ul",{children:t.map((function(n){var t=n.id,r=n.title;n.poster_path;return(0,v.jsx)(p,{children:(0,v.jsx)(f,{to:"/movies/".concat(t),state:{from:e},children:(0,v.jsx)("p",{children:r})})},t)}))})})}},7033:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r,a=e(3433),c=e(5861),u=e(9439),o=e(7757),s=e.n(o),i=e(4390),p=e(8512),f=e(168),l=e(5867).ZP.h1(r||(r=(0,f.Z)(["\n  color: black;\n"]))),v=e(184),h=function(n){var t=n.title;return(0,v.jsx)(l,{children:t})},d=e(3174),x=e(2791),Z=x.useEffect,g=x.useState,m=function(){var n=g(!1),t=(0,u.Z)(n,2),e=t[0],r=t[1],o=g([]),f=(0,u.Z)(o,2),l=f[0],x=f[1],m=g(null),k=(0,u.Z)(m,2),w=k[0],y=k[1];return Z((function(){var n=function(){var n=(0,c.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(!0),n.prev=1,n.next=4,(0,i.Hg)();case 4:t=n.sent,x((function(n){return[].concat((0,a.Z)(n),(0,a.Z)(t.results))})),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),y(n.t0.massage);case 11:return n.prev=11,r(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,v.jsxs)("div",{children:[null!==w&&(0,v.jsxs)("p",{children:[" Ooops...Error massage: ",w]}),e&&(0,v.jsx)(p.Z,{}),(0,v.jsx)(h,{title:"Trending today"}),(0,v.jsx)(d.Z,{movies:l})]})}},4390:function(n,t,e){e.d(t,{Eb:function(){return l},Hg:function(){return i},Hu:function(){return v},V0:function(){return p},mU:function(){return f}});var r=e(5861),a=e(7757),c=e.n(a),u=e(1243),o="https://api.themoviedb.org/3/",s="6e2a4b2de27857a6314a97684d8e3ec6",i=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"trending/all/day?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.next=5,t.data;case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"search/movie?api_key=").concat(s,"&language=en-US&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=33.b433d967.chunk.js.map