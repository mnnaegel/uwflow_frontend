(this.webpackJsonpflow_frontend=this.webpackJsonpflow_frontend||[]).push([[8,12],{140:function(n,e,t){"use strict";var r=function(n,e){return n<e?-1:n>e?1:n>=e?0:NaN},a=function(n){var e;return 1===n.length&&(e=n,n=function(n,t){return r(e(n),t)}),{left:function(e,t,r,a){for(null==r&&(r=0),null==a&&(a=e.length);r<a;){var i=r+a>>>1;n(e[i],t)<0?r=i+1:a=i}return r},right:function(e,t,r,a){for(null==r&&(r=0),null==a&&(a=e.length);r<a;){var i=r+a>>>1;n(e[i],t)>0?a=i:r=i+1}return r}}};var i=a(r),c=i.right,u=(i.left,c);var o=function(n){return null===n?NaN:+n},l=Array.prototype,f=(l.slice,l.map,function(n,e,t){n=+n,e=+e,t=(a=arguments.length)<2?(e=n,n=0,1):a<3?1:+t;for(var r=-1,a=0|Math.max(0,Math.ceil((e-n)/t)),i=new Array(a);++r<a;)i[r]=n+r*t;return i}),d=Math.sqrt(50),g=Math.sqrt(10),p=Math.sqrt(2),s=function(n,e,t){var r,a,i,c,u=-1;if(t=+t,(n=+n)===(e=+e)&&t>0)return[n];if((r=e<n)&&(a=n,n=e,e=a),0===(c=m(n,e,t))||!isFinite(c))return[];if(c>0)for(n=Math.ceil(n/c),e=Math.floor(e/c),i=new Array(a=Math.ceil(e-n+1));++u<a;)i[u]=(n+u)*c;else for(n=Math.floor(n*c),e=Math.ceil(e*c),i=new Array(a=Math.ceil(n-e+1));++u<a;)i[u]=(n-u)/c;return r&&i.reverse(),i};function m(n,e,t){var r=(e-n)/Math.max(0,t),a=Math.floor(Math.log(r)/Math.LN10),i=r/Math.pow(10,a);return a>=0?(i>=d?10:i>=g?5:i>=p?2:1)*Math.pow(10,a):-Math.pow(10,-a)/(i>=d?10:i>=g?5:i>=p?2:1)}function b(n,e,t){var r=Math.abs(e-n)/Math.max(0,t),a=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),i=r/a;return i>=d?a*=10:i>=g?a*=5:i>=p&&(a*=2),e<n?-a:a}var v=function(n,e,t){if(null==t&&(t=o),r=n.length){if((e=+e)<=0||r<2)return+t(n[0],0,n);if(e>=1)return+t(n[r-1],r-1,n);var r,a=(r-1)*e,i=Math.floor(a),c=+t(n[i],i,n);return c+(+t(n[i+1],i+1,n)-c)*(a-i)}};t.d(e,"b",(function(){return u})),t.d(e,"a",(function(){return r})),t.d(e,"c",(function(){return a})),t.d(e,"d",(function(){return v})),t.d(e,"e",(function(){return f})),t.d(e,"h",(function(){return s})),t.d(e,"f",(function(){return m})),t.d(e,"g",(function(){return b}))},156:function(n,e,t){n.exports=t.p+"static/media/404_v1.530dd1a3.svg"},160:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(36),c=t(35),u=t(10),o=t(4),l=t(3),f=t(46),d=t(156),g=t.n(d),p=t(8);function s(){var n=Object(o.a)(["\n  width: 100%;\n  height: 100vh;\n  margin-bottom: 16px;\n  max-width: 300px;\n  max-height: 300px;\n  background: no-repeat center center url(",");\n"]);return s=function(){return n},n}function m(){var n=Object(o.a)(["\n  ","\n  ","\n  max-width: 100%;\n  color: white;\n"]);return m=function(){return n},n}function b(){var n=Object(o.a)(["\n    height: auto;\n    padding: 32px 16px;\n  "]);return b=function(){return n},n}function v(){var n=Object(o.a)(["\n  display: flex;\n  align-items: flex-end;\n  width: 100%;\n  height: 150px;\n  background: ",";\n  padding-bottom: 32px;\n  ","\n"]);return v=function(){return n},n}function h(){var n=Object(o.a)(["\n  ","\n  margin-bottom: 40px;\n"]);return h=function(){return n},n}function x(){var n=Object(o.a)(["\n  ","\n  align-items: center;\n  text-align: center;\n"]);return x=function(){return n},n}var j=l.c.div(x(),p.j),O=(l.c.div(h(),p.e),l.c.div(v(),(function(n){return n.theme.primaryExtraDark}),Object(f.a)("mobile","tablet")(b()))),w=l.c.div(m(),p.i,p.e),y=l.c.div(s(),g.a);e.default=Object(i.g)((function(n){var e=n.text,t=n.history,r=e||"Sorry, this page doesn't exist!";return a.a.createElement(j,null,a.a.createElement(O,null,a.a.createElement(w,null,r)),a.a.createElement(y,null),a.a.createElement(c.a,{handleClick:function(){t.push(u.d)}},"Home"))}))},205:function(n,e,t){"use strict";var r=t(4),a=t(31),i=t.n(a);function c(){var n=Object(r.a)(["\n    fragment ProfCoursesTaughtFragment on prof {\n      id\n      prof_courses {\n        course {\n          id\n          code\n        }\n      }\n    }\n  "]);return c=function(){return n},n}function u(){var n=Object(r.a)(["\n    fragment ProfCourseReviewsAggregateFragment on prof {\n      id\n      course_reviews_aggregate {\n        aggregate {\n          avg {\n            liked\n          }\n        }\n      }\n    }\n  "]);return u=function(){return n},n}function o(){var n=Object(r.a)(["\n    fragment ProfProfReviewsAggregateFragment on prof {\n      id\n      prof_reviews_aggregate {\n        aggregate {\n          avg {\n            clear\n            engaging\n          }\n          count\n          text_count: count(columns: text)\n        }\n      }\n    }\n  "]);return o=function(){return n},n}function l(){var n=Object(r.a)(["\n    fragment ProfInfoFragment on prof {\n      id\n      name\n      code\n    }\n  "]);return l=function(){return n},n}var f={profInfo:i()(l()),profProfReviewsAggregate:i()(o()),profCourseReviewsAggregate:i()(u()),profCoursesTaught:i()(c())};e.a=f},206:function(n,e,t){"use strict";var r=t(0),a=t.n(r),i=t(27),c=t(47),u=t(4),o=t(3),l=t(46),f=t(8);function d(){var n=Object(u.a)(["\n    margin-left: 24px;\n  "]);return d=function(){return n},n}function g(){var n=Object(u.a)(["\n  ",";\n  color: ",";\n\n  ","\n"]);return g=function(){return n},n}function p(){var n=Object(u.a)(["\n  ","\n  color: ",";\n"]);return p=function(){return n},n}function s(){var n=Object(u.a)(["\n    flex-direction: column;\n    margin: 0 0 16px 0;\n  "]);return s=function(){return n},n}function m(){var n=Object(u.a)(["\n  display: flex;\n  margin: 8px;\n\n  ","\n"]);return m=function(){return n},n}function b(){var n=Object(u.a)(["\n  display: flex;\n"]);return b=function(){return n},n}function v(){var n=Object(u.a)(["\n  ",";\n  margin: 8px;\n"]);return v=function(){return n},n}function h(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n"]);return h=function(){return n},n}function x(){var n=Object(u.a)([""]);return x=function(){return n},n}function j(){var n=Object(u.a)(["\n    margin: 0 8px 8px 0;\n  "]);return j=function(){return n},n}function O(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 8px;\n\n  &:first-child {\n    margin-top: 16px;\n  }\n\n  ","\n"]);return O=function(){return n},n}function w(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-items: flex-begin;\n  justify-content: center;\n"]);return w=function(){return n},n}function y(){var n=Object(u.a)(["\n  padding: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return y=function(){return n},n}function E(){var n=Object(u.a)(["\n    width: ","px;\n    height: ","px;\n    background-color: white;\n    border-radius: ","px 5px 5px\n      ","px;\n    position: relative;\n    ","\n    margin-right: 32px;\n  "]);return E=function(){return n},n}function k(){var n=Object(u.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n\n  ","\n"]);return k=function(){return n},n}var _=o.c.div(k(),Object(l.a)("tablet")(E(),(function(n){return n.ratingBoxWidth}),(function(n){return n.ratingBoxHeight}),(function(n){return n.ratingBoxHeight/2}),(function(n){return n.ratingBoxHeight/2}),f.b)),M=o.c.div(y()),C=o.c.div(w()),P=o.c.div(O(),Object(l.a)("mobile","desktop")(j())),R=o.c.div(x()),B=o.c.div(h()),I=o.c.div(v(),f.a),A=o.c.div(b()),D=o.c.div(m(),Object(l.a)("mobile","desktop")(s())),F=o.c.div(p(),f.a,(function(n){return n.theme.dark3})),N=o.c.div(g(),f.a,(function(n){return n.theme.dark3}),Object(l.a)("desktop")(d()));function S(){var n=Object(u.a)(["\n  border-radius: ",";\n  width: ","%;\n  height: 100%;\n  background-color: ",";\n"]);return S=function(){return n},n}function T(){var n=Object(u.a)(["\n  width: ",";\n  height: ","px;\n  display: flex;\n  margin: 10px 8px 10px 0;\n  background-color: ",";\n  border-radius: 4px;\n  box-shadow: 0px 2px 5px rgba(236, 237, 237, 0.5),\n    0px 0px 5px rgba(142, 147, 148, 0.2);\n"]);return T=function(){return n},n}var W=o.c.div(T(),(function(n){var e=n.width;return Number.isInteger(e)?"".concat(e,"px"):e}),(function(n){return n.height}),(function(n){return n.theme.light3})),Y=o.c.span(S(),(function(n){return n.width>=100?"4px":"4px 0 0 4px"}),(function(n){return n.width}),(function(n){return n.theme.primary})),q=function(n){var e=n.percentComplete,t=n.width,r=void 0===t?188:t,i=n.height,c=void 0===i?16:i,u=Math.round(100*e);return a.a.createElement(W,{width:r,height:c},a.a.createElement(Y,{width:u}))},L=t(267);function H(){var n=Object(u.a)(["\n  color: ",";\n  ",";\n"]);return H=function(){return n},n}function z(){var n=Object(u.a)(["\n  ",";\n"]);return z=function(){return n},n}function $(){var n=Object(u.a)(["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  bottom: 0;\n  left: 0;\n  height: ","px;\n  width: ","px;\n  justify-content: center;\n  align-items: center;\n  transform: scale(",");\n"]);return $=function(){return n},n}function G(){var n=Object(u.a)(["\n  position: relative;\n"]);return G=function(){return n},n}var J=o.c.div(G()),K=o.c.div($(),(function(n){return n.height}),(function(n){return n.height}),(function(n){return n.height/212})),U=o.c.div(z(),f.d),V=o.c.div(H(),(function(n){return n.theme.dark2}),f.k),Q=Object(o.e)((function(n){var e=n.theme,t=n.height,r=n.percent,i=n.barThickness,c=n.label;return a.a.createElement(J,null,a.a.createElement(L.c,{width:t,height:t},a.a.createElement(L.b,{dataKey:"value",data:[{value:r},{value:100-r}],cx:"50%",cy:"50%",outerRadius:t/2,innerRadius:t/2-i},a.a.createElement(L.a,{fill:e.primary}),a.a.createElement(L.a,{fill:e.light3}))),a.a.createElement(K,{height:t},a.a.createElement(U,null,r,"%"),a.a.createElement(V,null,c)))}));t.d(e,"a",(function(){return X})),t.d(e,"b",(function(){return Z}));var X=244,Z=512;e.c=Object(i.b)((function(n){return{width:Object(c.c)(n),isBrowserDesktop:Object(c.b)(n)}}))((function(n){var e=n.percentages,t=n.numRatings,r=n.numComments,i=n.width,c=n.isBrowserDesktop,u=Math.round(100*e[0].percent);return a.a.createElement(_,{ratingBoxHeight:X,ratingBoxWidth:Z},a.a.createElement(M,null,a.a.createElement(Q,{height:c?X-32:Math.min(i/2-32,200),percent:u,barThickness:16,label:"liked"})),a.a.createElement(C,null,e.map((function(n,e){return 0===e?null:a.a.createElement(P,{key:n.displayName},a.a.createElement(R,null,n.displayName),a.a.createElement(B,null,a.a.createElement(q,{percentComplete:n.percent,width:"100%"}),a.a.createElement(I,null,Math.round(100*n.percent),"%")))})),a.a.createElement(A,null,a.a.createElement(D,null,a.a.createElement(F,null,r," ",1===r?"comment":"comments"),a.a.createElement(N,null,t," ",1===t?"rating":"ratings")))))}))},207:function(n,e,t){"use strict";var r=t(7),a=t(0),i=t.n(a),c=t(27),u=t(3),o=t(301),l=t(176),f=t.n(l),d=t(47),g=t(48),p=t(22),s=t(4),m=t(46),b=t(8);function v(){var n=Object(s.a)(["\n  ","\n  color: ","\n  margin-left: 4px;\n"]);return v=function(){return n},n}function h(){var n=Object(s.a)(["\n  ","\n  color: ",";\n  padding-left: 8px;\n  vertical-align: top;\n"]);return h=function(){return n},n}function x(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: flex-end;\n"]);return x=function(){return n},n}function j(){var n=Object(s.a)([""]);return j=function(){return n},n}function O(){var n=Object(s.a)([""]);return O=function(){return n},n}function w(){var n=Object(s.a)(["\n  min-width: 168px;\n  margin-left: 16px;\n"]);return w=function(){return n},n}function y(){var n=Object(s.a)(["\n  ","\n  margin-top: 16px;\n  color: ",";\n"]);return y=function(){return n},n}function E(){var n=Object(s.a)(["\n  word-break: break-word;\n  ","\n"]);return E=function(){return n},n}function k(){var n=Object(s.a)(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  word-wrap: break-word;\n"]);return k=function(){return n},n}function _(){var n=Object(s.a)(["\n    position: absolute;\n    top: 36px;\n    right: -16px;\n    cursor: pointer;\n  "]);return _=function(){return n},n}function M(){var n=Object(s.a)(["\n  padding: 0;\n  width: 40px;\n  height: 40px;\n  background-color: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  border-radius: 20px 20px 20px 20px;\n  border: 2px solid ",";\n  cursor: pointer;\n\n  &:hover, &:focus {\n    ","\n  }\n\n  ","\n"]);return M=function(){return n},n}function C(){var n=Object(s.a)(["\n    margin-right: 8px;\n  "]);return C=function(){return n},n}function P(){var n=Object(s.a)(["\n  width: 64px;\n  height: 64px;\n  background-color: ",";\n  border-radius: 32px 32px 32px 32px;\n\n  ","\n"]);return P=function(){return n},n}function R(){var n=Object(s.a)(["\n    margin-right: 32px;\n    position: relative;\n  "]);return R=function(){return n},n}function B(){var n=Object(s.a)(["\n    align-items: center;\n  "]);return B=function(){return n},n}function I(){var n=Object(s.a)(["\n  display: flex;\n  margin-bottom: 32px;\n\n  ","\n\n  ","\n"]);return I=function(){return n},n}function A(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n"]);return A=function(){return n},n}function D(){var n=Object(s.a)(["\n    ","\n    margin-bottom: 32px;\n    justify-content: space-between;\n    flex-direction: row;\n  "]);return D=function(){return n},n}function F(){var n=Object(s.a)(["\n    padding: 16px;\n    align-content: center;\n  "]);return F=function(){return n},n}function N(){var n=Object(s.a)(["\n  ","\n  margin-bottom: 32px;\n  background-color: ",";\n\n  ","\n\n  ","\n"]);return N=function(){return n},n}var S=u.c.div(N(),b.b,(function(n){return n.theme.light1}),Object(m.a)("mobile","desktop")(F()),Object(m.a)("desktop")(D(),Object(b.c)("24px 32px"))),T=u.c.div(A()),W=u.c.div(I(),Object(m.a)("mobile","tablet")(B()),Object(m.a)("tablet")(R())),Y=u.c.div(P(),(function(n){return n.theme.dark3}),Object(m.a)("mobile","tablet")(C())),q=u.c.button(M(),(function(n){var e=n.selected,t=n.theme;return e?t.primary:t.light1}),(function(n){return n.theme.light3}),(function(n){var e=n.selected,t=n.theme;return"background-color:".concat(e?t.primaryDark:t.light2,";")}),Object(m.a)("tablet")(_())),L=u.c.div(k()),H=u.c.div(E(),b.a),z=u.c.div(y(),b.a,(function(n){return n.theme.dark1})),$=u.c.table(w()),G=u.c.tbody(O()),J=u.c.tr(j()),K=u.c.td(x()),U=u.c.td(h(),b.a,(function(n){return n.theme.dark2})),V=u.c.div(v(),b.a,(function(n){var e=n.selected,t=n.theme;return e?"white":t.dark3})),Q=t(302);function X(){var n=Object(s.a)(["\n  ","\n  color: ",";\n  margin-left: 4px;\n"]);return X=function(){return n},n}function Z(){var n=Object(s.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return Z=function(){return n},n}function nn(){var n=Object(s.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ","px;\n  height: ","px;\n  border-radius: ","px;\n  background-color: ",";\n  border: 2px solid ",";\n  margin: 0 1px;\n  ","\n"]);return nn=function(){return n},n}function en(){var n=Object(s.a)(["\n  display: flex;\n  padding-bottom: 16px;\n\n  @media only screen and (max-width: 800px) {\n    padding-bottom: 8px\n  }\n"]);return en=function(){return n},n}var tn=u.c.div(en()),rn=u.c.div(nn(),(function(n){return n.diameter}),(function(n){return n.diameter}),(function(n){return n.diameter/2}),(function(n){var e=n.filledColor,t=n.emptyColor,r=n.theme;return n.filled?e||r.primary:t||"white"}),(function(n){var e=n.filled,t=n.theme;return e?t.primaryDark:t.light4}),(function(n){return n.filled?"":b.b})),an=u.c.div(Z()),cn=u.c.div(X(),b.a,(function(n){var e=n.theme;return n.colored?e.primary:e.light4})),un=function(n){var e=n.boolRating;return i.a.createElement(an,null,i.a.createElement(cn,{colored:!0===e},i.a.createElement(o.a,{width:20,height:20})),i.a.createElement(cn,{colored:!1===e},i.a.createElement(Q.a,{width:20,height:20})))},on=function(n){var e=n.rating,t=n.total;return i.a.createElement(i.a.Fragment,null,Array.apply(null,Array(t)).map((function(n,t){return i.a.createElement(rn,{key:t,filled:t<e,diameter:16})})))},ln=Object(u.e)((function(n){var e=n.total,t=void 0===e?5:e,r=n.rating,a=n.boolRating;n.theme;return i.a.createElement(tn,null,!0===a||!1===a?i.a.createElement(un,{boolRating:a}):i.a.createElement(on,{rating:r,total:t}))})),fn=function(n,e){if(null!==n[e]&&void 0!==n[e])return!0===n[e]||!1===n[e]?i.a.createElement(J,null,i.a.createElement(K,null,i.a.createElement(ln,{boolRating:n[e]})),i.a.createElement(U,null,"liked"===e?"Liked":e,"?")):i.a.createElement(J,null,i.a.createElement(K,null,i.a.createElement(ln,{total:5,rating:n[e]})),i.a.createElement(U,null," ",e.charAt(0).toUpperCase()+e.slice(1),"?"))};e.a=Object(u.e)(Object(c.b)((function(n){return{isBrowserDesktop:Object(d.b)(n),isLoggedIn:Object(g.c)(n)}}))((function(n){var e=n.review,t=n.theme,u=n.isBrowserDesktop,l=n.isLoggedIn,d=e.upvotes,g=e.upvote_users,s=e.review,m=e.author,b=e.created_at,v=e.metrics,h=localStorage.getItem("user_id"),x=Object(c.c)(),j=Object(a.useState)(g.includes(h)),O=Object(r.a)(j,2),w=O[0],y=O[1],E=m.full_name?"-".concat(m.full_name):"-Anonymous",k=i.a.createElement(L,null,i.a.createElement(H,null,s),i.a.createElement(z,null,E,m.program?", a ".concat(m.program," student"):"",", ",f()(b).fromNow()));return i.a.createElement(S,null,i.a.createElement(T,null,i.a.createElement(W,null,i.a.createElement(Y,null),i.a.createElement(q,{selected:w,onClick:function(){l?y(!w):x(Object(p.f)())}},i.a.createElement(o.a,{color:w?"white":t.dark3,size:16,strokeWidth:2}),i.a.createElement(V,{selected:w},d||0))),u&&k,i.a.createElement($,null,i.a.createElement(G,null,fn(v,"clear"),fn(v,"engaging"),fn(v,"useful"),fn(v,"easy"),fn(v,"liked")))),!u&&k)})))},492:function(n,e,t){n.exports=t.p+"static/media/prof_v1.1bfb3f98.svg"},510:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(36),c=t(63),u=t(4),o=t(3),l=t(46),f=t(8);function d(){var n=Object(u.a)(["\n    width: 100%;\n    order: 1;\n  "]);return d=function(){return n},n}function g(){var n=Object(u.a)(["\n  ","\n\n  ","\n"]);return g=function(){return n},n}function p(){var n=Object(u.a)(["\n    width: 100%;\n    padding: 0;\n    order: 2;\n  "]);return p=function(){return n},n}function s(){var n=Object(u.a)(["\n  ","\n\n  ","\n"]);return s=function(){return n},n}function m(){var n=Object(u.a)(["\n  ","\n  display: flex;\n  flex-flow: row wrap;\n"]);return m=function(){return n},n}function b(){var n=Object(u.a)(["\n  ","\n  background-color: ",";\n"]);return b=function(){return n},n}var v=o.c.div(b(),f.j,(function(n){return n.theme.light1})),h=o.c.div(m(),f.i),x=o.c.div(s(),f.m,Object(l.a)("mobile","tablet")(p())),j=o.c.div(g(),f.l,Object(l.a)("mobile","tablet")(d())),O=t(51),w=t(160),y=t(492),E=t.n(y);function k(){var n=Object(u.a)(["\n    position: absolute;\n    right: 0;\n    bottom: 32px;\n  "]);return k=function(){return n},n}function _(){var n=Object(u.a)(["\n    width: 100%;\n  "]);return _=function(){return n},n}function M(){var n=Object(u.a)(["\n  ","\n\n  ","\n"]);return M=function(){return n},n}function C(){var n=Object(u.a)(["\n    margin-top: 48px;\n    max-width: calc(100% - ","px);\n  "]);return C=function(){return n},n}function P(){var n=Object(u.a)(["\n    margin-bottom: 16px;\n    padding: 0 16px;\n    min-width: 100%;\n  "]);return P=function(){return n},n}function R(){var n=Object(u.a)(["\n  ","\n  position: relative;\n  margin: auto 0;\n  max-width: calc(100% - ","px);\n  vertical-align: middle;\n  color: ",";\n\n  ","\n\n  ","\n"]);return R=function(){return n},n}function B(){var n=Object(u.a)(["\n    ","\n    padding-bottom: 48px;\n    margin: auto;\n  "]);return B=function(){return n},n}function I(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  position: relative;\n\n  ","\n"]);return I=function(){return n},n}function A(){var n=Object(u.a)(["\n    max-width: calc(100% - ","px);\n  "]);return A=function(){return n},n}function D(){var n=Object(u.a)(["\n    padding: 0 16px;\n    min-width: 100%;\n  "]);return D=function(){return n},n}function F(){var n=Object(u.a)(["\n  color: ",";\n  ","\n\n  ","\n\n  ","\n"]);return F=function(){return n},n}function N(){var n=Object(u.a)(["\n    margin-bottom: 0;\n  "]);return N=function(){return n},n}function S(){var n=Object(u.a)(["\n  ","\n  margin: auto;\n  margin-bottom: 48px;\n\n  ","\n"]);return S=function(){return n},n}function T(){var n=Object(u.a)(["\n    min-height: 320px;\n  "]);return T=function(){return n},n}function W(){var n=Object(u.a)(["\n    padding: 24px 16px;\n  "]);return W=function(){return n},n}function Y(){var n=Object(u.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  background-color: ",";\n  background: url(",");\n  background-size: cover;\n  position: relative;\n  min-height: 120px;\n  padding: 16px;\n\n  ","\n\n  ","\n"]);return Y=function(){return n},n}function q(){var n=Object(u.a)(["\n  width: 100%;\n  margin-bottom: 32px;\n  display: flex;\n  background-color: ",";\n  flex-direction: column;\n  position: relative;\n"]);return q=function(){return n},n}var L=o.c.div(q(),(function(n){return n.theme.white})),H=o.c.div(Y(),(function(n){return n.theme.primaryExtraDark}),E.a,Object(l.a)("mobile","tablet")(W()),Object(l.a)("tablet")(T())),z=o.c.div(S(),f.i,Object(l.a)("mobile","tablet")(N())),$=o.c.div(F(),(function(n){return n.theme.white}),f.d,Object(l.a)("mobile","tablet")(D()),Object(l.a)("tablet")(A(),(function(n){return n.ratingBoxWidth}))),G=o.c.div(I(),Object(l.a)("tablet")(B(),f.i)),J=o.c.div(R(),f.f,(function(n){return n.ratingBoxWidth}),(function(n){return n.theme.dark2}),Object(l.a)("mobile","tablet")(P()),Object(l.a)("tablet")(C(),(function(n){return n.ratingBoxWidth}))),K=o.c.div(M(),Object(l.a)("mobile","tablet")(_()),Object(l.a)("tablet")(k())),U=t(206),V=t(76),Q=function(n){var e=n.prof,t=e.prof_reviews_aggregate.aggregate.avg.clear/5,r=e.prof_reviews_aggregate.aggregate.avg.engaging/5,i=e.prof_courses.map((function(n){return Object(V.h)(n.course.code)}));return a.a.createElement(L,null,a.a.createElement(H,null,a.a.createElement(z,null,a.a.createElement($,{ratingBoxWidth:U.b},e.name))),a.a.createElement(G,null,a.a.createElement(K,{ratingBoxHeight:U.a},a.a.createElement(U.c,{numRatings:e.prof_reviews_aggregate.aggregate.count,numComments:e.prof_reviews_aggregate.aggregate.text_count,percentages:[{displayName:"Likes",percent:e.course_reviews_aggregate.aggregate.avg.liked},{displayName:"Clear",percent:t},{displayName:"Engaging",percent:r}]})),a.a.createElement(J,{ratingBoxWidth:U.b},i.length>0?"Currently teaches ".concat(i.join(", ")):"Not currently teaching anything")))},X=t(28),Z=t(49),nn=t(7),en=t(176),tn=t.n(en),rn=t(2),an=t.n(rn),cn=function(n){if(!n)return{reviewsByCourse:[],courses:[]};var e=n.prof_review.reduce((function(n,e){var t,r=!1,a=!0,i=!1,c=void 0;try{for(var u,o=n[Symbol.iterator]();!(a=(u=o.next()).done);a=!0){var l=u.value;if(e.course&&e.course.id===l.id){t=l,r=!0;break}}}catch(f){i=!0,c=f}finally{try{a||null==o.return||o.return()}finally{if(i)throw c}}return r||(t={id:e.course?e.course.id:-1,name:e.course?e.course.name:"",code:e.course?e.course.code:"",liked:e.course?e.course.course_reviews_aggregate.aggregate.avg.liked:0,reviews:[]},n.push(t)),t.reviews.push({id:e.id,upvotes:e.prof_review_votes_aggregate.aggregate.sum.vote,upvote_users:e.prof_review_votes.map((function(n){return n.user_id})),review:e.text,author:e.author,user:e.user,created_at:e.created_at,metrics:{clear:e.clear,engaging:e.engaging}}),n}),[]),t=e.map((function(n){return n.code}));return{reviewsByCourse:e,courses:t}},un=function(n){var e=Object(r.useState)(cn(n)),t=Object(nn.a)(e,2),a=t[0],i=t[1];return[a,function(n){var e=function(n,e){switch(e.type){case"update review data":return cn(e.payload);default:return n}}(a,n);i(e)}]};un.propTypes={prof_review:an.a.arrayOf(an.a.shape({clear:an.a.number,course:an.a.shape({code:an.a.string,course_reviews_aggregate:an.a.shape({aggregate:an.a.shape({avg:an.a.shape({liked:an.a.number})})}),id:an.a.number,name:an.a.string}),prof_review_votes_aggregate:an.a.shape({aggregate:an.a.shape({sum:an.a.shape({vote:an.a.number})})}),text:an.a.string,author:an.a.shape({full_name:an.a.string,program:an.a.string,picture_url:an.a.string}),user:an.a.shape({user_id:an.a.number})}))};var on=un,ln=t(26);function fn(){var n=Object(u.a)(["\n  ","\n  cursor: pointer;\n"]);return fn=function(){return n},n}function dn(){var n=Object(u.a)(["\n  background: ",";\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 64px;\n  cursor: pointer;\n"]);return dn=function(){return n},n}function gn(){var n=Object(u.a)(["\n    width: 100%;\n  "]);return gn=function(){return n},n}function pn(){var n=Object(u.a)(["\n  ","\n  width: 64px;\n  margin-left: 16px;\n\n  ","\n"]);return pn=function(){return n},n}function sn(){var n=Object(u.a)(["\n    font-size: 32px;\n  "]);return sn=function(){return n},n}function mn(){var n=Object(u.a)(["\n  ","\n\n  ","\n"]);return mn=function(){return n},n}function bn(){var n=Object(u.a)(["\n    margin: 8px 16px 0 16px;\n  "]);return bn=function(){return n},n}function vn(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n\n  ","\n"]);return vn=function(){return n},n}function hn(){var n=Object(u.a)(["\n  ","\n  color: ",";\n"]);return hn=function(){return n},n}function xn(){var n=Object(u.a)(["\n    padding: 24px 16px;\n    border-bottom: 1px solid ",";\n    background-color: white;\n    margin: 0 0 32px 0;\n  "]);return xn=function(){return n},n}function jn(){var n=Object(u.a)(["\n  display: flex;\n  margin: 16px 32px 32px 0;\n  align-items: center;\n\n  ","\n"]);return jn=function(){return n},n}function On(){var n=Object(u.a)(["\n    margin: 16px 16px 0 16px;\n  "]);return On=function(){return n},n}function wn(){var n=Object(u.a)(["\n  ","\n  font-size: 24px;\n\n  ","\n"]);return wn=function(){return n},n}function yn(){var n=Object(u.a)(["\n    margin: 16px 16px 0 16px;\n  "]);return yn=function(){return n},n}function En(){var n=Object(u.a)(["\n  ","\n  color: ",";\n  margin-bottom: 16px;\n\n  ","\n"]);return En=function(){return n},n}function kn(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return kn=function(){return n},n}function _n(){var n=Object(u.a)(["\n    flex-direction: column;\n    align-items: flex-start;\n    margin-bottom: 0;\n  "]);return _n=function(){return n},n}function Mn(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  margin-right: 24px;\n\n  ","\n"]);return Mn=function(){return n},n}function Cn(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return Cn=function(){return n},n}function Pn(){var n=Object(u.a)(["\n    padding: 32px 32px 0 32px;\n  "]);return Pn=function(){return n},n}function Rn(){var n=Object(u.a)(["\n  ","\n"]);return Rn=function(){return n},n}function Bn(){var n=Object(u.a)(["\n  ","\n  ","\n  padding-bottom: 0;\n  margin-bottom: 32px;\n"]);return Bn=function(){return n},n}function In(){var n=Object(u.a)(["\n  display: flex;\n  padding: 32px;\n  background: white;\n  align-items: center;\n  justify-content: flex-start;\n  ","\n  color: ","\n"]);return In=function(){return n},n}function An(){var n=Object(u.a)(["\n    padding: 32px 0 0 0;\n  "]);return An=function(){return n},n}function Dn(){var n=Object(u.a)(["\n  ","\n  ","\n  padding-bottom: 0;\n  padding-top: 16px;\n  margin-bottom: 32px;\n\n  ","\n"]);return Dn=function(){return n},n}function Fn(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  color: ",";\n"]);return Fn=function(){return n},n}var Nn=o.c.div(Fn(),(function(n){return n.theme.dark2})),Sn=o.c.div(Dn(),Object(f.c)(),f.b,Object(l.a)("mobile","tablet")(An())),Tn=o.c.div(In(),f.f,(function(n){return n.theme.dark2})),Wn=o.c.div(Bn(),Object(f.c)("0"),f.b),Yn=o.c.div(Rn(),Object(l.a)("tablet")(Pn())),qn=(o.c.div(Cn()),o.c.div(Mn(),Object(l.a)("mobile","tablet")(_n()))),Ln=o.c.div(kn()),Hn=Object(o.c)(ln.a)(En(),f.e,(function(n){return n.theme.courses}),Object(l.a)("mobile","tablet")(yn())),zn=o.c.div(wn(),f.e,Object(l.a)("mobile","tablet")(On())),$n=o.c.div(jn(),Object(l.a)("mobile","tablet")(xn(),(function(n){return n.theme.light2}))),Gn=o.c.div(hn(),f.g,(function(n){return n.theme.dark1})),Jn=o.c.div(vn(),Object(l.a)("mobile","tablet")(bn())),Kn=o.c.div(mn(),f.d,Object(l.a)("mobile","tablet")(sn())),Un=o.c.div(pn(),f.a,Object(l.a)("mobile","tablet")(gn())),Vn=o.c.div(dn(),(function(n){return n.theme.light3})),Qn=o.c.div(fn(),f.g),Xn=t(207),Zn=t(77),ne=t(31),ee=t.n(ne);function te(){var n=Object(u.a)(["\n    fragment ProfReviewInfoFragment on prof_review {\n      id\n      engaging\n      clear\n      text\n      created_at\n      course {\n        id\n        name\n        code\n        course_reviews_aggregate {\n          aggregate {\n            avg {\n              liked\n            }\n          }\n        }\n      }\n      author {\n        full_name\n        program\n        picture_url\n      } \n      prof_review_votes_aggregate {\n        aggregate {\n          sum {\n            vote\n          }\n        }\n      }\n    }\n  "]);return te=function(){return n},n}var re={profCoursesReviewInfo:ee()(te())};function ae(){var n=Object(u.a)(["\n  query GET_PROF_REVIEW($id: Int) {\n    prof_review(where: { prof_id: { _eq: $id }, text: { _is_null: false } }) {\n      ...ProfReviewInfoFragment\n    }\n  }\n  ","\n"]);return ae=function(){return n},n}var ie=ee()(ae(),re.profCoursesReviewInfo),ce=t(10),ue=t(18);function oe(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}var le=Object(o.e)((function(n){var e=n.profID,t=n.theme,i=Object(r.useState)(0),u=Object(nn.a)(i,2),o=u[0],l=u[1],f=Object(r.useState)(Array(1).fill(0)),d=Object(nn.a)(f,2),g=d[0],p=d[1],s=Object(c.b)(ie,{variables:{id:e}}),m=s.loading,b=s.data,v=on(b),h=Object(nn.a)(v,2),x=h[0],j=h[1],w=Object(r.useState)({}),y=Object(nn.a)(w,2),E=y[0],k=y[1];if(Object(r.useEffect)((function(){b&&j({type:"update review data",payload:b})}),[b]),m)return a.a.createElement(Nn,null,a.a.createElement(O.a,null));var _=["show all courses"].concat(Object(Z.a)(x.courses)),M=["show all courses"].concat(Object(Z.a)(x.courses.map((function(n){return Object(V.h)(n)})))),C=x.reviewsByCourse.filter((function(n){return 0===o||n.code===_[o]})),P=g.length>=C.length?g.slice():[].concat(Object(Z.a)(g),Object(Z.a)(Array(C.length-g.length).fill(0)));return 0===x.courses.length?a.a.createElement(Tn,null,"No Reviews"):a.a.createElement(Nn,null,a.a.createElement(Sn,null,a.a.createElement($n,null,a.a.createElement(Gn,null,"Filter by course: "),a.a.createElement(Zn.a,{color:t.courses,selectedIndex:o,options:M,onChange:function(n){return l(n)},zIndex:5}))),C.map((function(n,e){return a.a.createElement(Wn,{key:e},a.a.createElement(Yn,null,a.a.createElement(qn,{key:n.id},a.a.createElement(Ln,null,a.a.createElement(Hn,{to:Object(ce.i)(n.code)},Object(V.h)(n.code)),a.a.createElement(zn,null,n.name)),a.a.createElement(Jn,null,a.a.createElement(Kn,null,Math.round(100*n.liked),"%"),a.a.createElement(Un,null,"liked this course"))),a.a.createElement($n,null,a.a.createElement(Gn,null,"Sort by: "),a.a.createElement(Zn.a,{color:t.primary,selectedIndex:P[e],options:["most recent","most helpful"],onChange:function(n){P[e]=n,p(P)}})),n.reviews.sort((function(n,t){var r=tn()(t.created_at).format("YYYYMMDD")-tn()(n.created_at).format("YYYYMMDD");return 0===g[e]?r:r||n.upvotes-t.upvotes})).filter((function(e,t){return t<ue.d||E[n.code]})).map((function(n,e){return a.a.createElement(Xn.a,{key:e,review:n})}))),n.reviews.length>ue.d&&a.a.createElement(Vn,{onClick:function(){return k(function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?oe(t,!0).forEach((function(e){Object(X.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):oe(t).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}({},E,Object(X.a)({},n.code,!E[n.code])))}},a.a.createElement(Qn,null,E[n.code]?"Show less reviews":"Show all ".concat(n.reviews.length," reviews"))))})))})),fe=t(205);function de(){var n=Object(u.a)(["\n  query GET_PROF($code: String) {\n    prof(where: { code: { _eq: $code } }) {\n      ...ProfInfoFragment\n      ...ProfProfReviewsAggregateFragment\n      ...ProfCourseReviewsAggregateFragment\n      ...ProfCoursesTaughtFragment\n    }\n  }\n  ","\n  ","\n  ","\n  ","\n"]);return de=function(){return n},n}var ge=ee()(de(),fe.a.profInfo,fe.a.profProfReviewsAggregate,fe.a.profCourseReviewsAggregate,fe.a.profCoursesTaught);t.d(e,"ProfPage",(function(){return se}));var pe=function(n){var e=n.prof;return a.a.createElement(a.a.Fragment,null,a.a.createElement(Q,{prof:e}),a.a.createElement(h,null,a.a.createElement(x,null,a.a.createElement(le,{profID:e.id})),a.a.createElement(j,null)))},se=function(n){var e=n.match.params.profCode.toLowerCase(),t=Object(c.b)(ge,{variables:{code:e}}),r=t.loading,i=t.error,u=t.data;return r?a.a.createElement(O.a,null):i||!u||0===u.prof.length?a.a.createElement(w.default,{text:"Sorry, we couldn't find that professor!"}):a.a.createElement(v,null,a.a.createElement(pe,{prof:u.prof[0]}))};e.default=Object(i.g)(se)}}]);
//# sourceMappingURL=8.1a48834b.chunk.js.map