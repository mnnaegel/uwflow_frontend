(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{26:function(e,t,n){e.exports=n(36)},36:function(e,t,n){"use strict";n.r(t);var a,c,o=n(1),r=n.n(o),i=n(20),l=n.n(i),u=n(11),s=n(39),d=n(5),p=n(22),h=n(23),f=n(25),O=n(17),b={histories:[]},m={history:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"HISTORY_FORWARD":return Object(O.a)({},e,{histories:[].concat(Object(f.a)(e.histories),[t.payload])});case"HISTORY_BACK":var n=e.histories.slice(0,-1);return Object(O.a)({},e,{histories:n})}return e}},w=Object(d.c)(m),E=Object(d.c)({data:w}),g=Object(h.createLogger)({predicate:function(){return!1}}),v=[p.a,g],I=n(6),j=n(41),y=n(37),R=n(40),S=n(7),k=n.n(S),C=(k()("/"),k()("/profile"),k()("/course/:courseID"),k.a.compile("/course/:courseID"),n(16)),D=n.n(C),H=D()({loader:function(){return n.e(0).then(n.bind(null,43))},loading:function(){return null}}),A=D()({loader:function(){return n.e(1).then(n.bind(null,44))},loading:function(){return null}}),T=function(e){if("requestIdleCallback"in window){var t=[H,A];window.requestIdleCallback(function(){return function e(n){n<t.length&&(t[n].preload(),window.requestIdleCallback(function(){return e(n+1)}))}(0)})}},Y=n(38),_=function(e){var t=e.location,n=t.search,a=t.hash;return r.a.createElement(Y.a,{to:{pathname:"/",search:n,hash:a}})},q=Object(R.a)(function(){return r.a.createElement(j.a,null,r.a.createElement(y.a,{exact:!0,path:"/",component:H}),r.a.createElement(y.a,{exact:!0,path:"/profile",component:A}),r.a.createElement(y.a,{path:"*",component:_}))});console.log("NODE ENV: ".concat("production")),a=Object(d.d)(E,d.a.apply(void 0,v)),c=function(){var e=Object(I.a)();return delete e.location.state,e}(),function(e,t){t.listen(function(t,n){if("POP"===n)e.dispatch({type:"HISTORY_BACK"});else if("PUSH"===n){var a=t.pathname,c=t.search,o=c?"".concat(a,"?").concat(c):a;e.dispatch({type:"HISTORY_FORWARD",payload:o})}})}(a,c),T(a.getState()),l.a.render(r.a.createElement(u.a,{store:a},r.a.createElement(s.a,{history:c},r.a.createElement(q,null))),document.getElementById("root"))}},[[26,3,4]]]);
//# sourceMappingURL=main.3d772bc0.chunk.js.map