(this.webpackJsonpflow_frontend=this.webpackJsonpflow_frontend||[]).push([[7],{161:function(n,e,t){"use strict";var r=t(7),o=t(0),a=t.n(o),c=t(4),i=t(3),u=t(8);function l(){var n=Object(c.a)(["\n  width: 100%;\n  background: white;\n  padding: ",";\n  border-radius: 0 0 4px 4px;\n"]);return l=function(){return n},n}function s(){var n=Object(c.a)(["\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  height: 64px;\n  cursor: pointer;\n  border-radius: ",";\n  background: ",";\n  color: ",";\n  ","\n  font-weight: ",";\n"]);return s=function(){return n},n}function f(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return f=function(){return n},n}function d(){var n=Object(c.a)(["\n  width: ",";\n  border-radius: 4px;\n  background: ",";\n  ","\n"]);return d=function(){return n},n}var g=i.c.div(d(),(function(n){return n.width||"100%"}),(function(n){return n.theme.white}),u.b),p=i.c.div(f()),m=i.c.div(s(),(function(n){var e=n.first,t=n.last;return n.selected?e?"4px 0 0 4px":t?"0 4px 4px 0":"0":"0"}),(function(n){var e=n.selected,t=n.theme;return e?t.white:t.light2}),(function(n){var e=n.selected,t=n.theme;return e?t.dark1:t.dark3}),u.f,(function(n){return n.selected?600:400})),v=i.c.div(l(),(function(n){return n.padding}));e.a=function(n){var e=n.tabList,t=n.containerWidth,c=n.tabWidth,i=n.initialSelectedTab,u=void 0===i?0:i,l=n.contentPadding,s=void 0===l?"32px":l,f=Object(o.useState)(u),d=Object(r.a)(f,2),h=d[0],b=d[1];return a.a.createElement(g,{width:t},a.a.createElement(p,null,e.map((function(n,t){return a.a.createElement(m,{key:t,width:c,selected:t===h,first:0===t,last:t===e.length-1,onClick:function(){n.onClick&&n.onClick(t),b(t)}},n.title)}))),a.a.createElement(v,{padding:s},e[h].render()))}},177:function(n,e,t){"use strict";var r=t(0),o=t.n(r),a=t(506),c=t(4),i=t(3),u=t(8);function l(){var n=Object(c.a)(["\n  position: absolute;\n  top: 2px;\n  left: 1px;\n"]);return l=function(){return n},n}function s(){var n=Object(c.a)(["\n  width: ","px;\n  min-width: ","px;\n  height: ","px;\n  min-height: ","px;\n  background-color: ",";\n  border: 3px solid\n    ",";\n  border-radius: 50%;\n  user-select: none;\n  cursor: ",";\n  ","\n  position: relative;\n"]);return s=function(){return n},n}var f=i.c.div(s(),(function(n){return n.width}),(function(n){return n.width}),(function(n){return n.width}),(function(n){return n.width}),(function(n){var e=n.checked,t=n.color,r=n.theme;return e?t:r.light2}),(function(n){var e=n.checked,t=n.color,r=n.theme;return e?t:r.light4}),(function(n){return n.disabled?"inherit":"pointer"}),u.b),d=i.c.div(l());e.a=function(n){var e=n.color,t=n.checked,r=void 0!==t&&t,c=n.width,i=void 0===c?32:c,u=n.disabled,l=void 0===u||u,s=n.onClick,g=void 0===s?function(){}:s;return o.a.createElement(f,{onClick:function(){return l?null:g()},disabled:l,width:i,color:e,checked:r},r?o.a.createElement(d,null,o.a.createElement(a.a,{color:"white",size:24,strokeWidth:3})):null)}},178:function(n,e,t){"use strict";var r=t(4),o=t(31),a=t.n(o);function c(){var n=Object(r.a)(["\n  fragment CourseRequirementsFragment on course {\n    id\n    antireqs\n    coreqs\n    prereqs\n    prerequisites {\n      prerequisite {\n        id\n        code\n        name\n      }\n    }\n    postrequisites {\n      postrequisite {\n        id\n        code\n        name\n      }\n    }\n  }\n  "]);return c=function(){return n},n}function i(){var n=Object(r.a)(["\n  fragment CourseReviewAggregateFragment on course {\n    id\n    course_reviews_aggregate {\n      aggregate {\n        avg {\n          easy\n          liked\n          useful\n        }\n        count(columns: liked)\n        text_count: count(columns: text)\n      }\n    }\n  }\n  "]);return i=function(){return n},n}function u(){var n=Object(r.a)(["\n    fragment CourseScheduleFragment on course {\n      id\n      sections {\n        id\n        enrollment_capacity\n        enrollment_total\n        class_number\n        campus\n        section\n        term\n        meetings {\n          days\n          start_date\n          end_date\n          start_seconds\n          end_seconds\n          location\n          prof {\n            id\n            name\n          }\n          is_closed\n          is_cancelled\n        }\n        exams {\n          date\n          day\n          end_seconds\n          is_tba\n          location\n          section_id\n          start_seconds\n        }\n      }\n    }\n  "]);return u=function(){return n},n}function l(){var n=Object(r.a)(["\n    fragment CourseTermFragment on course {\n      id\n      sections {\n        id\n        term\n      }\n    }\n  "]);return l=function(){return n},n}function s(){var n=Object(r.a)(["\n    fragment CourseInfoFragment on course {\n      id\n      code\n      name\n      description\n      profs_teaching {\n        prof {\n          id\n          name\n        }\n      }\n    }\n  "]);return s=function(){return n},n}var f={courseInfo:a()(s()),courseTerm:a()(l()),courseSchedule:a()(u()),courseReviewAggregate:a()(i()),courseRequirements:a()(c())};e.a=f},205:function(n,e,t){"use strict";var r=t(4),o=t(31),a=t.n(o);function c(){var n=Object(r.a)(["\n    fragment ProfCoursesTaughtFragment on prof {\n      id\n      prof_courses {\n        course {\n          id\n          code\n        }\n      }\n    }\n  "]);return c=function(){return n},n}function i(){var n=Object(r.a)(["\n    fragment ProfCourseReviewsAggregateFragment on prof {\n      id\n      course_reviews_aggregate {\n        aggregate {\n          avg {\n            liked\n          }\n        }\n      }\n    }\n  "]);return i=function(){return n},n}function u(){var n=Object(r.a)(["\n    fragment ProfProfReviewsAggregateFragment on prof {\n      id\n      prof_reviews_aggregate {\n        aggregate {\n          avg {\n            clear\n            engaging\n          }\n          count\n          text_count: count(columns: text)\n        }\n      }\n    }\n  "]);return u=function(){return n},n}function l(){var n=Object(r.a)(["\n    fragment ProfInfoFragment on prof {\n      id\n      name\n      code\n    }\n  "]);return l=function(){return n},n}var s={profInfo:a()(l()),profProfReviewsAggregate:a()(u()),profCourseReviewsAggregate:a()(i()),profCoursesTaught:a()(c())};e.a=s},208:function(n,e,t){"use strict";var r=t(7),o=t(0),a=t.n(o),c=t(213),i=t(78),u=t(4),l=t(3),s=t(8);function f(){var n=Object(u.a)([""]);return f=function(){return n},n}function d(){var n=Object(u.a)(["\n  padding-top: 16px;\n  padding-bottom: 16px;\n  text-align: ",";\n  vertical-align: top;\n\n  &:first-child {\n    padding-left: 32px;\n    padding-right: 0;\n  }\n\n  &:last-child {\n    padding-left: 0;\n    padding-right: 32px;\n  }\n\n  &:only-child {\n    padding: auto 32px;\n  }\n"]);return d=function(){return n},n}function g(){var n=Object(u.a)(["\n  position: relative;\n  width: 100%;\n  border-radius: 4px;\n  border-bottom: 1px solid ",";\n\n  &:last-child {\n    border-bottom: none;\n  }\n"]);return g=function(){return n},n}function p(){var n=Object(u.a)(["\n  width: 100%;\n"]);return p=function(){return n},n}function m(){var n=Object(u.a)(["\n  color: ",";\n  text-decoration: none !important;\n"]);return m=function(){return n},n}function v(){var n=Object(u.a)(["\n  ","\n  cursor: ",";\n  color: ",";\n\n  &:hover, &:focus {\n    color: ",";\n  }\n"]);return v=function(){return n},n}function h(){var n=Object(u.a)(["\n  text-align: ",";\n  width: ","px;\n  min-width: ","px;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  vertical-align: top;\n\n  padding-left: ",";\n  padding-right: ",";\n\n  &:first-child {\n    padding-left: 32px;\n    width: ","px;\n    max-width: ","px;\n  }\n\n  &:last-child {\n    padding-left: 0;\n    padding-right: 32px;\n    width: ","px;\n    max-width: ","px;\n  }\n"]);return h=function(){return n},n}function b(){var n=Object(u.a)(["\n  width: 100%;\n  border-bottom: 1px solid ",";\n"]);return b=function(){return n},n}function x(){var n=Object(u.a)(["\n  border-radius: 4px;\n  width: 100%;\n"]);return x=function(){return n},n}function j(){var n=Object(u.a)(["\n  width: 100%;\n  min-width: 100%;\n  border-radius: 4px;\n  text-align: left;\n  table-layout: auto;\n  border-collapse: collapse;\n  color: ",";\n"]);return j=function(){return n},n}var O=l.c.table(j(),(function(n){return n.theme.dark2})),w=l.c.thead(x()),y=l.c.tr(b(),(function(n){return n.theme.light3})),E=l.c.th(h(),(function(n){var e=n.align;return e||"left"}),(function(n){return n.maxWidth+16}),(function(n){return n.maxWidth+16}),(function(n){return n.rightAlign?"16px":"0"}),(function(n){return n.rightAlign?"16px":"0"}),(function(n){return n.maxWidth+32+16}),(function(n){return n.maxWidth+24+16}),(function(n){return n.maxWidth+24+16}),(function(n){return n.maxWidth+24+16})),k=l.c.span(v(),(function(n){return n.sortable?s.h:""}),(function(n){return n.sortable?"pointer":"inherit"}),(function(n){var e=n.theme;return n.sortable?e.primary:e.dark1}),(function(n){var e=n.theme;return n.sortable?e.primaryDark:e.dark1})),C=l.c.span(m(),(function(n){return n.theme.primary})),_=l.c.tbody(p()),T=l.c.tr(g(),(function(n){return n.theme.light3})),R=l.c.td(d(),(function(n){var e=n.align;return e||"left"})),F=l.c.tr(f()),P=t(51);e.a=function(n){var e=n.columns,t=n.data,u=n.sortable,l=void 0!==u&&u,s=n.loading,f=void 0!==s&&s,d=n.doneFetching,g=void 0!==d&&d,p=n.fetchMore,m=void 0===p?null:p,v=Object(o.useState)(!1),h=Object(r.a)(v,2),b=h[0],x=h[1],j=Object(o.useRef)(null);Object(o.useEffect)((function(){if(b&&m&&!f&&b){var n=m();n?n.then((function(){x(!1)})):x(!1)}}),[b]);var A=Object(i.throttle)((function(){if(!f&&!b&&j.current&&m){var n=j.current.getBoundingClientRect().top,e=n+800>=0&&n-800<=window.innerHeight;x(e)}}),100);Object(o.useEffect)((function(){return window.addEventListener("scroll",(function(){return A()})),window.removeEventListener("scroll",(function(){return A()}))}),[f]);var S=Object(c.b)({columns:e,data:t},c.a),I=S.getTableProps,N=S.headerGroups,W=S.rows,H=S.prepareRow;return a.a.createElement(O,I(),a.a.createElement(w,null,N.map((function(n){return a.a.createElement(y,n.getHeaderGroupProps(),n.headers.map((function(n){return a.a.createElement(E,Object.assign({},n.getHeaderProps(l&&n.getSortByToggleProps()),{align:n.align,maxWidth:n.maxWidth}),a.a.createElement(k,{sortable:l},n.render("Header")),a.a.createElement(C,null,n.sorted?n.sortedDesc?" \u25b2":" \u25bc":""))})))}))),a.a.createElement(_,null,W.map((function(n){return H(n)||a.a.createElement(T,n.getRowProps(),n.cells.map((function(n){return a.a.createElement(R,Object.assign({},n.getCellProps(),{align:n.column.align,style:n.column.style}),n.render("Cell"))})))})),(f||b)&&!g&&null!==m&&a.a.createElement(T,null,a.a.createElement(R,{colSpan:e.length,style:{padding:0,overflow:"hidden"}},a.a.createElement(P.a,{margin:"4px auto"}))),a.a.createElement(F,{ref:j})))}},209:function(n,e,t){"use strict";var r=t(0),o=t.n(r),a=t(177),c=t(4),i=t(3),u=t(8);function l(){var n=Object(c.a)(["\n  ","\n  font-weight: 600;\n  margin: auto;\n  margin-left: 8px;\n  color: ",";\n"]);return l=function(){return n},n}function s(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: row;\n  margin-right: 24px;\n\n  &:last-child {\n    margin-right: 0;\n  }\n"]);return s=function(){return n},n}function f(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: row;\n  margin: ",";\n"]);return f=function(){return n},n}var d=i.c.div(f(),(function(n){return n.margin})),g=i.c.div(s()),p=i.c.div(l(),u.a,(function(n){return n.theme.dark2}));e.a=function(n){var e=n.color,t=n.selected,r=n.options,c=n.margin,i=void 0===c?"0 0 40px 0":c,u=n.toggle,l=void 0!==u&&u,s=n.onClick,f=void 0===s?function(){}:s;return o.a.createElement(d,{margin:i},r.map((function(n,r){return o.a.createElement(g,{key:r},o.a.createElement(a.a,{color:e,disabled:!1,checked:l&&t||!l&&r===t,onClick:function(){return f(r)}}),o.a.createElement(p,null,n))})))}},210:function(n,e,t){"use strict";var r=t(0),o=t.n(r),a=t(268),c=t(3),i=t(4),u=t(46),l=t(8);function s(){var n=Object(i.a)(["\n  position: absolute;\n  margin-left: -8px;\n  margin-top: -11px;\n  z-index: 2;\n  height: 8px;\n  width: 8px;\n  background-color: ",";\n  border-radius: 50%;\n  box-sizing: content-box;\n  border: 3px solid ",";\n  cursor: pointer;\n  left: ","%;\n"]);return s=function(){return n},n}function f(){var n=Object(i.a)(["\n  position: absolute;\n  height: 8px;\n  z-index: 1;\n  margin-top: -8px;\n  background-color: ",";\n  border-radius: 4px;\n  cursor: pointer;\n  left: ","%;\n  width: ","%;\n"]);return f=function(){return n},n}function d(){var n=Object(i.a)(["\n  left: ","%;\n  position: absolute;\n  margin-left: -16px;\n  margin-top: -20px;\n  z-index: 3;\n  width: 32px;\n  height: 32px;\n  border: 3px solid ",";\n  cursor: pointer;\n  border-radius: 50%;\n  background-color: ",";\n  ","\n"]);return d=function(){return n},n}function g(){var n=Object(i.a)(["\n  margin: auto;\n  width: 100%;\n  height: 8px;\n  background-color: ",";\n  border-radius: 4px;\n  cursor: pointer;\n  ","\n"]);return g=function(){return n},n}function p(){var n=Object(i.a)(["\n    width: 100%;\n  "]);return p=function(){return n},n}function m(){var n=Object(i.a)(["\n  width: 300px;\n  margin: auto 0;\n\n  ","\n"]);return m=function(){return n},n}function v(){var n=Object(i.a)(["\n  color: ",";\n  display: flex;\n  flex-direction: row;\n  margin: ",";\n"]);return v=function(){return n},n}var h=c.c.div(v(),(function(n){return n.color}),(function(n){return n.margin})),b=c.c.div(m(),Object(u.a)("mobile","tablet")(p())),x=c.c.div(g(),(function(n){return n.theme.light3}),l.b),j=c.c.div(d(),(function(n){return n.percent}),(function(n){return n.theme.white}),(function(n){return n.color}),l.b),O=c.c.div(f(),(function(n){return n.color}),(function(n){return n.source.percent}),(function(n){var e=n.target,t=n.source;return e.percent-t.percent})),w=c.c.div(s(),(function(n){return n.color}),(function(n){return n.theme.white}),(function(n){return n.percent})),y=function(n){var e=n.handle,t=e.id,r=e.percent,a=n.getHandleProps,c=n.color;return o.a.createElement(j,Object.assign({percent:r,color:c},a(t)))},E=function(n){var e=n.source,t=n.target,r=n.color,a=n.getTrackProps;return o.a.createElement(O,Object.assign({target:t,source:e,color:r},a()))};e.a=Object(c.e)((function(n){for(var e=n.theme,t=n.numNodes,r=n.currentNode,c=n.color,i=n.onUpdate,u=n.margin,l=void 0===u?"0 0 40px 0":u,s=n.showTicks,f=void 0===s||s,d=n.selected,g=void 0===d||d,p=n.setSelected,m=void 0===p?function(){return null}:p,v=t>1?100/(t-1):100,j=[],O=0;O<100;O+=v)j.push(O);return j.push(100),o.a.createElement(h,{margin:l},o.a.createElement(b,null,o.a.createElement(a.c,{step:1,mode:2,domain:[0,t-1],onUpdate:function(n){i(n),n>0&&m(!0)},values:[r],rootStyle:{position:"relative",width:"100%",height:"8px"}},o.a.createElement(a.b,null,(function(n){var t=n.getRailProps;return o.a.createElement(o.a.Fragment,null,o.a.createElement(x,t()),f&&j.map((function(n,a){return o.a.createElement(w,Object.assign({key:n,color:a<=r?c:e.light3,percent:n},t()))})))})),o.a.createElement(a.a,null,(function(n){var t=n.handles,r=n.getHandleProps;return o.a.createElement("div",{className:"slider-handles",onClick:function(){return m(!0)}},t.map((function(n){return o.a.createElement(y,{key:n.id,handle:n,getHandleProps:r,color:g?c:e.light3})})))})),o.a.createElement(a.d,{right:!1},(function(n){var e=n.tracks,t=n.getTrackProps;return o.a.createElement("div",{className:"slider-tracks"},e.map((function(n){var e=n.id,r=n.source,a=n.target;return o.a.createElement(E,{key:e,source:r,target:a,color:c,getTrackProps:t})})))})))))}))},493:function(n,e,t){"use strict";var r=t(494),o=t(498),a=t(502),c=t(503),i=t(504);function u(n,e){return e.encode?e.strict?a(n):encodeURIComponent(n):n}function l(n,e){return e.decode?c(n):n}function s(n){var e=n.indexOf("#");return-1!==e&&(n=n.slice(0,e)),n}function f(n){var e=(n=s(n)).indexOf("?");return-1===e?"":n.slice(e+1)}function d(n,e){return e.parseNumbers&&!Number.isNaN(Number(n))&&"string"===typeof n&&""!==n.trim()?n=Number(n):!e.parseBooleans||null===n||"true"!==n.toLowerCase()&&"false"!==n.toLowerCase()||(n="true"===n.toLowerCase()),n}function g(n,e){var t=function(n){var e;switch(n.arrayFormat){case"index":return function(n,t,r){e=/\[(\d*)\]$/.exec(n),n=n.replace(/\[\d*\]$/,""),e?(void 0===r[n]&&(r[n]={}),r[n][e[1]]=t):r[n]=t};case"bracket":return function(n,t,r){e=/(\[\])$/.exec(n),n=n.replace(/\[\]$/,""),e?void 0!==r[n]?r[n]=[].concat(r[n],t):r[n]=[t]:r[n]=t};case"comma":return function(n,e,t){var r="string"===typeof e&&e.split("").indexOf(",")>-1?e.split(","):e;t[n]=r};default:return function(n,e,t){void 0!==t[n]?t[n]=[].concat(t[n],e):t[n]=e}}}(e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",parseNumbers:!1,parseBooleans:!1},e)),o=Object.create(null);if("string"!==typeof n)return o;if(!(n=n.trim().replace(/^[?#&]/,"")))return o;var a=!0,c=!1,u=void 0;try{for(var s,f=n.split("&")[Symbol.iterator]();!(a=(s=f.next()).done);a=!0){var g=s.value,p=i(g.replace(/\+/g," "),"="),m=r(p,2),v=m[0],h=m[1];h=void 0===h?null:l(h,e),t(l(v,e),h,o)}}catch(k){c=!0,u=k}finally{try{a||null==f.return||f.return()}finally{if(c)throw u}}for(var b=0,x=Object.keys(o);b<x.length;b++){var j=x[b],O=o[j];if("object"===typeof O&&null!==O)for(var w=0,y=Object.keys(O);w<y.length;w++){var E=y[w];O[E]=d(O[E],e)}else o[j]=d(O,e)}return!1===e.sort?o:(!0===e.sort?Object.keys(o).sort():Object.keys(o).sort(e.sort)).reduce((function(n,e){var t=o[e];return Boolean(t)&&"object"===typeof t&&!Array.isArray(t)?n[e]=function n(e){return Array.isArray(e)?e.sort():"object"===typeof e?n(Object.keys(e)).sort((function(n,e){return Number(n)-Number(e)})).map((function(n){return e[n]})):e}(t):n[e]=t,n}),Object.create(null))}e.extract=f,e.parse=g,e.stringify=function(n,e){if(!n)return"";var t=function(n){switch(n.arrayFormat){case"index":return function(e){return function(t,r){var a=t.length;return void 0===r?t:[].concat(o(t),null===r?[[u(e,n),"[",a,"]"].join("")]:[[u(e,n),"[",u(a,n),"]=",u(r,n)].join("")])}};case"bracket":return function(e){return function(t,r){return void 0===r?t:[].concat(o(t),null===r?[[u(e,n),"[]"].join("")]:[[u(e,n),"[]=",u(r,n)].join("")])}};case"comma":return function(e){return function(t,r,o){return null===r||void 0===r||0===r.length?t:0===o?[[u(e,n),"=",u(r,n)].join("")]:[[t,u(r,n)].join(",")]}};default:return function(e){return function(t,r){return void 0===r?t:[].concat(o(t),null===r?[u(e,n)]:[[u(e,n),"=",u(r,n)].join("")])}}}}(e=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},e)),r=Object.keys(n);return!1!==e.sort&&r.sort(e.sort),r.map((function(r){var o=n[r];return void 0===o?"":null===o?u(r,e):Array.isArray(o)?o.reduce(t(r),[]).join("&"):u(r,e)+"="+u(o,e)})).filter((function(n){return n.length>0})).join("&")},e.parseUrl=function(n,e){return{url:s(n).split("?")[0]||"",query:g(f(n),e)}}},494:function(n,e,t){var r=t(495),o=t(496),a=t(497);n.exports=function(n,e){return r(n)||o(n,e)||a()}},495:function(n,e){n.exports=function(n){if(Array.isArray(n))return n}},496:function(n,e){n.exports=function(n,e){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n)){var t=[],r=!0,o=!1,a=void 0;try{for(var c,i=n[Symbol.iterator]();!(r=(c=i.next()).done)&&(t.push(c.value),!e||t.length!==e);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return t}}},497:function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},498:function(n,e,t){var r=t(499),o=t(500),a=t(501);n.exports=function(n){return r(n)||o(n)||a()}},499:function(n,e){n.exports=function(n){if(Array.isArray(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}},500:function(n,e){n.exports=function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}},501:function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},502:function(n,e,t){"use strict";n.exports=function(n){return encodeURIComponent(n).replace(/[!'()*]/g,(function(n){return"%".concat(n.charCodeAt(0).toString(16).toUpperCase())}))}},503:function(n,e,t){"use strict";var r=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function a(n,e){try{return decodeURIComponent(n.join(""))}catch(o){}if(1===n.length)return n;e=e||1;var t=n.slice(0,e),r=n.slice(e);return Array.prototype.concat.call([],a(t),a(r))}function c(n){try{return decodeURIComponent(n)}catch(o){for(var e=n.match(r),t=1;t<e.length;t++)e=(n=a(e,t).join("")).match(r);return n}}n.exports=function(n){if("string"!==typeof n)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof n+"`");try{return n=n.replace(/\+/g," "),decodeURIComponent(n)}catch(e){return function(n){for(var t={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},r=o.exec(n);r;){try{t[r[0]]=decodeURIComponent(r[0])}catch(e){var a=c(r[0]);a!==r[0]&&(t[r[0]]=a)}r=o.exec(n)}t["%C2"]="\ufffd";for(var i=Object.keys(t),u=0;u<i.length;u++){var l=i[u];n=n.replace(new RegExp(l,"g"),t[l])}return n}(n)}}},504:function(n,e,t){"use strict";n.exports=function(n,e){if("string"!==typeof n||"string"!==typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[n];var t=n.indexOf(e);return-1===t?[n]:[n.slice(0,t),n.slice(t+e.length)]}},505:function(n,e,t){n.exports=t.p+"static/media/explore_v1.d49ebd71.svg"},509:function(n,e,t){"use strict";t.r(e);var r=t(7),o=t(0),a=t.n(o),c=t(36),i=t(63),u=t(493),l=t.n(u),s=t(4),f=t(3),d=t(46),g=t(26),p=t(505),m=t.n(p),v=t(8);function h(){var n=Object(s.a)(["\n ","\n  color: ",";\n"]);return h=function(){return n},n}function b(){var n=Object(s.a)(["\n  ","\n  color: ",";\n"]);return b=function(){return n},n}function x(){var n=Object(s.a)(["\n    width: 100%;\n    order: 1;\n  "]);return x=function(){return n},n}function j(){var n=Object(s.a)(["\n  ","\n\n  ","\n"]);return j=function(){return n},n}function O(){var n=Object(s.a)(["\n    width: 100%;\n    padding: 0;\n    order: 2;\n  "]);return O=function(){return n},n}function w(){var n=Object(s.a)(["\n  ","\n\n  ","\n"]);return w=function(){return n},n}function y(){var n=Object(s.a)(["\n  ","\n  display: flex;\n  flex-flow: row wrap;\n"]);return y=function(){return n},n}function E(){var n=Object(s.a)(["\n  ","\n  ","\n  padding-top: 48px;\n  padding-bottom: 16px;\n  word-break: break-all;\n  min-height: 104px;\n  display: flex;\n  flex-direction: row;\n  margin: auto;\n  position: relative;\n  color: ",";\n  font-weight: 600;\n"]);return E=function(){return n},n}function k(){var n=Object(s.a)(["\n    padding: 0 16px;\n  "]);return k=function(){return n},n}function C(){var n=Object(s.a)(["\n  width: 100%;\n  margin-bottom: 32px;\n  display: flex;\n  background-color: ",";\n  background: url(",");\n  background-size: cover;\n  flex-direction: column;\n  position: relative;\n\n  ","\n"]);return C=function(){return n},n}function _(){var n=Object(s.a)(["\n  ","\n  padding-top: 40px;\n"]);return _=function(){return n},n}var T=f.c.div(_(),v.j),R=f.c.div(C(),(function(n){return n.theme.primaryExtraDark}),m.a,Object(d.a)("mobile","tablet")(k())),F=f.c.div(E(),v.i,v.e,(function(n){return n.theme.light1})),P=f.c.div(y(),v.i),A=f.c.div(w(),v.m,Object(d.a)("mobile","tablet")(O())),S=f.c.div(j(),v.l,Object(d.a)("mobile","tablet")(x())),I=Object(f.c)(g.a)(b(),v.h,(function(n){return n.theme.courses})),N=Object(f.c)(g.a)(h(),v.h,(function(n){return n.theme.professors})),W=t(49),H=t(208),q=t(161),L=t(76),M=t(10),U=[{Header:"Course code",accessor:"code",align:"left",maxWidth:120,Cell:function(n){var e=n.cell;return a.a.createElement(I,{to:Object(M.i)(e.value)},Object(L.h)(e.value))}},{Header:"Course Name",accessor:"name",align:"left",maxWidth:128},{Header:"Ratings",accessor:"ratings",align:"right",maxWidth:80},{Header:"Useful",accessor:"useful",align:"right",maxWidth:64,Cell:function(n){var e=n.cell;return"".concat(Math.round(100*e.value),"%")}},{Header:"Easy",accessor:"easy",align:"right",maxWidth:64,Cell:function(n){var e=n.cell;return"".concat(Math.round(100*e.value),"%")}},{Header:"Liked",accessor:"liked",align:"right",maxWidth:64,Cell:function(n){var e=n.cell;return"".concat(Math.round(100*e.value),"%")}}],$=[{Header:"Professor name",accessor:"code_name",align:"left",maxWidth:160,Cell:function(n){var e=n.cell;return a.a.createElement(N,{to:Object(M.j)(e.value.code)},e.value.name)}},{Header:"Ratings",accessor:"ratings",align:"right",maxWidth:80},{Header:"Clear",accessor:"clear",align:"right",maxWidth:64,Cell:function(n){var e=n.cell;return"".concat(Math.round(100*e.value),"%")}},{Header:"Engaging",accessor:"engaging",align:"right",maxWidth:64,Cell:function(n){var e=n.cell;return"".concat(Math.round(100*e.value),"%")}},{Header:"Liked",accessor:"liked",align:"right",maxWidth:64,Cell:function(n){var e=n.cell;return"".concat(Math.round(100*e.value),"%")}}];function z(){var n=Object(s.a)(["\n  overflow-x: auto;\n"]);return z=function(){return n},n}var B=f.c.div(z()),D=Object(L.b)(),X=Object(L.c)(),G=function(n){var e=n.filterState,t=n.data,r=n.exploreTab,c=n.setExploreTab,i=n.ratingFilters,u=n.profCourses,l=n.loading,s=n.fetchMore,f=t?t.course.map((function(n){return Object({id:n.id,code:n.code,name:n.name,description:n.description,ratings:n.course_reviews_aggregate.aggregate.count,easy:n.course_reviews_aggregate.aggregate.avg.easy/5,liked:n.course_reviews_aggregate.aggregate.avg.liked,useful:n.course_reviews_aggregate.aggregate.avg.useful/5,sections:n.sections})})):[],d=t?t.prof.map((function(n){return Object({code_name:{code:n.code,name:n.name},ratings:n.prof_reviews_aggregate.aggregate.count,clear:n.prof_reviews_aggregate.aggregate.avg.clear/5,engaging:n.prof_reviews_aggregate.aggregate.avg.engaging/5,liked:n.course_reviews_aggregate.aggregate.avg.liked,courses:n.prof_courses.map((function(n){return n.code}))})})):[],g=Object(o.useCallback)((function(){for(var n="",t=e.courseCodes.length-1;t>=0;t--)e.courseCodes[t]&&(n+="|".concat(t<e.courseCodes.length-1?t+1:"[5-8]"));return n=""===n?"a^":"(".concat(n.slice(1),")([0-9]{2})"),new RegExp(n)}),[e]),p=f.filter((function(n){return g().test(n.code)&&n.ratings>=i[e.numCourseRatings]&&(!e.currentTerm||e.currentTerm&&n.sections&&n.sections.some((function(n){return Number(n.term)===D})))&&(!e.nextTerm||e.nextTerm&&n.sections&&n.sections.some((function(n){return Number(n.term)===X})))})),m=d.filter((function(n){return n.ratings>=i[e.numProfRatings]&&(0===e.courseTaught||n.courses.includes(u[e.courseTaught]))})),v=0===r,h=v&&t&&f.length>=t.course_aggregate.aggregate.count||!v&&t&&d.length>=t.prof_aggregate.aggregate.count,b=function(){return a.a.createElement(B,null,a.a.createElement(H.a,{data:v?p:m,columns:v?U:$,rightAlignIndex:v?2:1,sortable:!0,loading:l,doneFetching:h,fetchMore:function(){l||0===f.length&&0===d.length||h||s({variables:{course_offset:f.length,prof_offset:d.length},updateQuery:function(n,e){var t=e.fetchMoreResult;return t?Object.assign({},n,{course:[].concat(Object(W.a)(n.course),Object(W.a)(t.course)),prof:[].concat(Object(W.a)(n.prof),Object(W.a)(t.prof))}):n}})}}))};return a.a.createElement(q.a,{tabList:[{onClick:function(){return c(0)},title:"Courses ".concat(t?"(".concat(t.course_aggregate.aggregate.count,")"):""),render:b},{onClick:function(){return c(1)},title:"Profs ".concat(t?"(".concat(t.prof_aggregate.aggregate.count,")"):""),render:b}],initialSelectedTab:r,contentPadding:"0"})},J=t(2),Q=t.n(J);function K(){return(K=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function V(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var Y=function(n){var e=n.color,t=n.size,r=V(n,["color","size"]);return a.a.createElement("svg",K({xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),a.a.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),a.a.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))};Y.propTypes={color:Q.a.string,size:Q.a.oneOfType([Q.a.string,Q.a.number])},Y.defaultProps={color:"currentColor",size:"24"};var Z=Y,nn=t(209);function en(){var n=Object(s.a)(["\n  display: inline-block;\n  height: 24px;\n  border-radius: 12px;\n  padding: 2px 6px;\n  margin-bottom: 8px;\n  ","\n  ","\n  cursor: pointer;\n  margin-right: 8px;\n  color: ",";\n  border: 2px solid ",";\n  background-color: ",";\n\n  &:last-child {\n    margin-right: 0;\n  }\n\n  &:hover, &:focus {\n    background-color: ",";\n  }\n"]);return en=function(){return n},n}function tn(){var n=Object(s.a)(["\n  width: 100%;\n  display: block;\n  margin: ",";\n"]);return tn=function(){return n},n}var rn=f.c.div(tn(),(function(n){return n.margin})),on=f.c.div(en(),v.a,v.b,(function(n){var e=n.theme;return n.selected?e.light1:e.primary}),(function(n){return n.theme.primary}),(function(n){var e=n.theme;return n.selected?e.primary:e.white}),(function(n){var e=n.theme;return n.selected?e.primaryDark:e.light1})),an=function(n){var e=n.options,t=n.selected,r=n.margin,o=void 0===r?"0 0 32px 0":r,c=n.onClick,i=void 0===c?function(){}:c;return a.a.createElement(rn,{margin:o},e.map((function(n,e){return a.a.createElement(on,{selected:t[e],onClick:function(){return i(e)},key:e},n)})))},cn=t(210),un=t(77);function ln(){var n=Object(s.a)(["\n  margin: auto;\n  display: inline-flex;\n  vertical-align: middle;\n  margin-right: 4px;\n"]);return ln=function(){return n},n}function sn(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n"]);return sn=function(){return n},n}function fn(){var n=Object(s.a)(["\n  display: inline-block;\n  padding: 8px 12px;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  background-color: ",";\n  ","\n  ","\n  color: ",";\n  border-radius: 4px;\n  margin-top: 32px;\n\n  &:hover {\n    background-color: ",";\n  }\n"]);return fn=function(){return n},n}function dn(){var n=Object(s.a)(["\n  font-weight: 600;\n"]);return dn=function(){return n},n}function gn(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]);return gn=function(){return n},n}function pn(){var n=Object(s.a)(["\n  ","\n  color: ",";\n"]);return pn=function(){return n},n}function mn(){var n=Object(s.a)(["\n  position: absolute;\n"]);return mn=function(){return n},n}function vn(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n"]);return vn=function(){return n},n}function hn(){var n=Object(s.a)(["\n  display: block;\n"]);return hn=function(){return n},n}function bn(){var n=Object(s.a)(["\n  ","\n  color: ",";\n  margin-bottom: 8px;\n"]);return bn=function(){return n},n}function xn(){var n=Object(s.a)(["\n  ","\n  color: ",";\n  margin-bottom: 24px;\n"]);return xn=function(){return n},n}function jn(){var n=Object(s.a)(["\n    padding: 24px 16px;\n  "]);return jn=function(){return n},n}function On(){var n=Object(s.a)(["\n  ","\n  ","\n  margin-bottom: 32px;\n\n  ","\n"]);return On=function(){return n},n}var wn=f.c.div(On(),Object(v.c)("40px 32px"),v.b,Object(d.a)("mobile","tablet")(jn())),yn=f.c.div(xn(),v.f,(function(n){return n.theme.dark1})),En=f.c.div(bn(),v.g,(function(n){return n.theme.dark2})),kn=f.c.div(hn()),Cn=f.c.div(vn()),_n=f.c.span(mn()),Tn=f.c.span(pn(),v.a,(function(n){return n.theme.dark3})),Rn=f.c.div(gn()),Fn=f.c.span(dn()),Pn=f.c.button(fn(),(function(n){return n.theme.primary}),v.b,v.a,(function(n){return n.theme.light1}),(function(n){return n.theme.primaryDark})),An=f.c.div(sn()),Sn=f.c.span(ln()),In=[1,2,3,4].map((function(n){return a.a.createElement("span",null,a.a.createElement(Fn,null,n),"XX")}));In.push(a.a.createElement("span",null,a.a.createElement(Fn,null,"5"),"XX+"));var Nn=Object(L.i)(Object(L.b)()),Wn=Object(L.i)(Object(L.c)()),Hn=Object(f.e)((function(n){var e=n.profCourses,t=n.filterState,r=n.setCourseCodes,o=n.setCurrentTerm,c=n.setNextTerm,i=n.setNumRatings,u=n.setCourseTaught,l=n.resetFilters,s=n.ratingFilters,f=n.courseSearch,d=n.theme,g=f?t.numCourseRatings:t.numProfRatings,p=a.a.createElement(a.a.Fragment,null,a.a.createElement(Rn,null,a.a.createElement(En,null,"Min # of ratings"),a.a.createElement(Tn,null,"\u2265 ",s[g]," ratings")),a.a.createElement(cn.a,{numNodes:s.length,currentNode:g,color:d.primary,onUpdate:function(n){return i(n[0])},showTicks:!1}));return a.a.createElement(wn,null,a.a.createElement(An,null,a.a.createElement(yn,null,"Filter your results")),f?a.a.createElement(a.a.Fragment,null,a.a.createElement(kn,null,a.a.createElement(En,null,"Course code"),a.a.createElement(an,{options:In,selected:t.courseCodes,onClick:function(n){r([].concat(Object(W.a)(t.courseCodes.slice(0,n)),[!t.courseCodes[n]],Object(W.a)(t.courseCodes.slice(n+1))))}})),a.a.createElement(kn,null,p),a.a.createElement(kn,null,a.a.createElement(En,null,"Offered in"),a.a.createElement(Cn,null,a.a.createElement(nn.a,{color:d.primary,selected:t.currentTerm,options:["This term (".concat(Nn,")")],margin:"8px 16px 0 0",onClick:function(){return o(!t.currentTerm)},toggle:!0}),a.a.createElement(nn.a,{color:d.primary,selected:t.nextTerm,options:["Next term (".concat(Wn,")")],margin:"8px 0 0 0",onClick:function(){return c(!t.nextTerm)},toggle:!0})))):a.a.createElement(a.a.Fragment,null,a.a.createElement(kn,null,p),a.a.createElement(kn,null,a.a.createElement(En,null,"Show professors that",a.a.createElement("br",null),"teach:",a.a.createElement(_n,null,a.a.createElement(un.a,{selectedIndex:t.courseTaught,options:e,color:d.courses,onChange:function(n){return u(n)}}))))),a.a.createElement(Pn,{onClick:l},a.a.createElement(Sn,null,a.a.createElement(Z,{size:16})),"Clear filter"))})),qn=t(31),Ln=t.n(qn),Mn=t(178),Un=t(205),$n=t(67);function zn(){var n=Object(s.a)(["\n    query EXPLORE_ALL($query: String, $course_offset: Int, $prof_offset: Int) {\n      course(\n        offset: $course_offset,\n        limit: ",",\n        order_by: ",",\n        where: ","\n      ) {\n        ...CourseInfoFragment\n        ...CourseTermFragment\n        ...CourseReviewAggregateFragment\n      }\n      course_aggregate(where: ",") {\n        aggregate {\n          count\n        }\n      }\n      prof(\n        offset: $prof_offset,\n        limit: ","\n        where: ","\n      ) {\n        ...ProfInfoFragment\n        ...ProfProfReviewsAggregateFragment\n        ...ProfCourseReviewsAggregateFragment\n        ...ProfCoursesTaughtFragment\n      }\n      prof_aggregate(where: ",") {\n        aggregate {\n          count\n        }\n      }\n    }\n    ","\n    ","\n    ","\n    ","\n    ","  \n    ","\n    ","\n  "]);return zn=function(){return n},n}function Bn(){var n=Object(s.a)(["\n  query EXPLORE_COURSE_CODE($course_offset: Int, $prof_offset: Int) {\n    course(\n      offset: $course_offset,\n      limit: ",",\n      order_by: ",',\n      where: {code: {_ilike: "','%"}}\n    ) {\n      ...CourseInfoFragment\n      ...CourseTermFragment\n      ...CourseReviewAggregateFragment\n    }\n    course_aggregate(where: {code: {_ilike: "','%"}}) {\n      aggregate {\n        count\n      }\n    }\n    prof(\n      offset: $prof_offset,\n      limit: ','\n      where: {prof_courses: {course: {code: {_ilike: "','%"}}}}\n    ) {\n      ...ProfInfoFragment\n      ...ProfProfReviewsAggregateFragment\n      ...ProfCourseReviewsAggregateFragment\n      ...ProfCoursesTaughtFragment\n    }\n    prof_aggregate(where: {prof_courses: {course: {code: {_ilike: "','%"}}}}) {\n      aggregate {\n        count\n      }\n    }  \n  }\n  ',"\n  ","\n  ","\n  ","\n  ","  \n  ","  \n  ","\n"]);return Bn=function(){return n},n}var Dn=function(n,e){return Ln()(Bn(),$n.c,n,e,e,$n.c,e,e,Mn.a.courseInfo,Mn.a.courseTerm,Mn.a.courseReviewAggregate,Un.a.profInfo,Un.a.profProfReviewsAggregate,Un.a.profCourseReviewsAggregate,Un.a.profCoursesTaught)},Xn=function(n,e){var t=e.replace("-"," ").split(" ").map((function(n){return Object(L.h)(n)})).map((function(n){return n.trim()})).filter((function(n){return n.length>0})).slice(0,$n.a),r=t.map((function(n){return'{_or: [\n    {code: {_ilike: "%'.concat(n,'%"}},\n    {name: {_ilike: "%').concat(n,'%"}},\n    {profs_teaching: {prof: {name: {_ilike: "%').concat(n,'%"}}}},\n  ]},')})),o=t.map((function(n){return'{_or: [\n    {name: {_ilike: "%'.concat(n,'%"}},\n    {prof_courses: {course: {code: {_ilike: "%').concat(n,'%"}}}}\n    {prof_courses: {course: {name: {_ilike: "%').concat(n,'%"}}}}\n  ]},')})),a="{_and: [\n    ".concat(r.join(""),"\n  ]}"),c="{_and: [\n    ".concat(o.join(""),"\n  ]}");return Ln()(zn(),$n.c,n,a,a,$n.c,c,c,Mn.a.courseInfo,Mn.a.courseTerm,Mn.a.courseReviewAggregate,Un.a.profInfo,Un.a.profProfReviewsAggregate,Un.a.profCourseReviewsAggregate,Un.a.profCoursesTaught)},Gn=[0,10,20,50,100,250,500,1e3],Jn=function(n){var e=n.query,t=n.codeSearch,c=n.courseTab,i=n.data,u=n.fetchMore,l=n.loading,s=Object(o.useState)(Array(5).fill(!0)),f=Object(r.a)(s,2),d=f[0],g=f[1],p=Object(o.useState)(0),m=Object(r.a)(p,2),v=m[0],h=m[1],b=Object(o.useState)(0),x=Object(r.a)(b,2),j=x[0],O=x[1],w=Object(o.useState)(!1),y=Object(r.a)(w,2),E=y[0],k=y[1],C=Object(o.useState)(!1),_=Object(r.a)(C,2),I=_[0],N=_[1],W=Object(o.useState)(0),H=Object(r.a)(W,2),q=H[0],L=H[1],M=Object(o.useState)(c?0:1),U=Object(r.a)(M,2),$=U[0],z=U[1],B=i?i.prof.reduce((function(n,e){return n.concat(e.prof_courses.map((function(n){return n.code})))}),["any course"]):["any course"];B=B.filter((function(n){return!!n}));var D={courseCodes:d,numCourseRatings:v,numProfRatings:j,currentTerm:E,nextTerm:I,courseTaught:q};return a.a.createElement(T,null,a.a.createElement(R,null,a.a.createElement(F,null,t?"Showing all ".concat(e.toUpperCase()," courses and professors"):'Showing results for "'.concat(e,'"'))),a.a.createElement(P,null,a.a.createElement(A,null,a.a.createElement(G,{filterState:D,data:i,exploreTab:$,setExploreTab:z,ratingFilters:Gn,profCourses:B,loading:l,fetchMore:u})),a.a.createElement(S,null,a.a.createElement(Hn,{profCourses:B,filterState:D,setCourseCodes:g,setNumRatings:0===$?h:O,setCurrentTerm:k,setNextTerm:N,setCourseTaught:L,ratingFilters:Gn,resetFilters:0===$?function(){g(Array(5).fill(!0)),h(0),k(!1),N(!1)}:function(){O(0),L(0)},courseSearch:0===$}))))};e.default=Object(c.g)((function(n){var e=n.location,t=l.a.parse(e.search),r=t.q,o=t.t,c=!o||"course"===o||"c"===o,u=!!t.c,s=u?Dn:Xn,f=Object(i.b)(s("{course_reviews_aggregate: {count: desc}}",r),{variables:{course_offset:0,prof_offset:0},notifyOnNetworkStatusChange:!0}),d=f.data,g=f.fetchMore,p=f.loading;return a.a.createElement(T,null,a.a.createElement(Jn,{query:r,codeSearch:u,courseTab:c,data:d,fetchMore:g,loading:p}))}))}}]);
//# sourceMappingURL=7.132fca28.chunk.js.map