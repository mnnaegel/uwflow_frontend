(this.webpackJsonpflow_frontend=this.webpackJsonpflow_frontend||[]).push([[3],{213:function(e,r,n){"use strict";n.d(r,"b",(function(){return N})),n.d(r,"a",(function(){return ee}));var t=n(0),o=n.n(t),u=n(2),i=n.n(u);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(n,!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},u=Object.keys(e);for(t=0;t<u.length;t++)n=u[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(t=0;t<u.length;t++)n=u[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=[],t=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(t=(i=a.next()).done)&&(n.push(i.value),!r||n.length!==r);t=!0);}catch(c){o=!0,u=c}finally{try{t||null==a.return||a.return()}finally{if(o)throw u}}return n}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function d(e){return function(e){if(Array.isArray(e)){for(var r=0,n=new Array(e.length);r<e.length;r++)n[r]=e[r];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var p={Cell:function(e){var r=e.cell.value;return String(void 0===r?"":r)},show:!0,width:150,minWidth:0,maxWidth:Number.MAX_SAFE_INTEGER};"undefined"!==typeof window?o.a.useLayoutEffect:o.a.useEffect;function h(e,r,n,t,u){var i=e=s({},p,{},r,{},e),a=i.id,c=i.accessor,l=i.Header;if("string"===typeof c){a=a||c;var f=c.split(".");c=function(e){return m(e,f)}}if(!a&&"string"===typeof l&&l&&(a=l),!a&&e.columns)throw console.error(e),new Error('A column ID (or unique "Header" value) is required!');if(!a)throw console.error(e),new Error("A column ID (or string accessor) is required!");return e=s({Header:function(){return o.a.createElement(o.a.Fragment,null,"\xa0")}},e,{id:a,accessor:c,parent:n,depth:t,index:u})}function g(e,r,n){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return e.map((function(e,o){return(e=h(e,r,n,t,o)).columns&&(e.columns=g(e.columns,r,e,t+1)),e}))}function v(e,r){var n=[];return function e(t,o){var u={headers:[]},i=[],a=t.some((function(e){return e.parent}));t.forEach((function(e){var n=!i.length,t=[].concat(i).reverse()[0];if(e.parent){var o=i.filter((function(r){return r.originalID===e.parent.id}));(n||t.originalID!==e.parent.id)&&i.push(s({},e.parent,{originalID:e.parent.id,id:[e.parent.id,o.length].join("_")}))}else if(a){var c=[e.id,"placeholder"].join("_"),l=i.filter((function(e){return e.originalID===c})),f=h({originalID:c,id:[e.id,"placeholder",l.length].join("_"),placeholderOf:e},r);(n||t.originalID!==f.originalID)&&i.push(f)}(e.parent||a)&&((t=[].concat(i).reverse()[0]).headers=t.headers||[],t.headers.includes(e)||t.headers.push(e)),e.totalHeaderCount=e.headers?e.headers.reduce((function(e,r){return e+r.totalHeaderCount}),0):1,u.headers.push(e)})),n.push(u),i.length&&e(i,o+1)}(e,0),n.reverse()}function y(e){var r=e.headers,n=0;r.forEach((function(r){return n+=function r(n,t){n.isVisible=!!t&&("function"===typeof n.show?n.show(e):!!n.show);var o=0;return n.headers&&n.headers.length?n.headers.forEach((function(e){return o+=r(e,n.isVisible)})):o=n.isVisible?1:0,n.totalVisibleHeaderCount=o,o}(r,!0)}))}function m(e,r,n){if(!r)return e;var t,o=function(e){return function e(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(Array.isArray(r))for(var t=0;t<r.length;t+=1)e(r[t],n);else n.push(r);return n}(e).map((function(e){return String(e).replace(".","_")})).join(".").replace(/\[/g,".").replace(/\]/g,"").split(".")}(r);try{t=o.reduce((function(e,r){return e[r]}),e)}catch(u){}return"undefined"!==typeof t?t:n}function b(e,r,n){return d(e).sort((function(e,t){for(var o=0;o<r.length;o+=1){var u=r[o],i=!1===n[o]||"desc"===n[o],a=u(e,t);if(0!==a)return i?-a:a}return n[0]?e.index-t.index:t.index-e.index}))}function w(){for(var e=0;e<arguments.length;e+=1)if("undefined"!==typeof(e<0||arguments.length<=e?void 0:arguments[e]))return e<0||arguments.length<=e?void 0:arguments[e]}function S(e,r){return function(e){return"function"===typeof e&&!!function(){var r=Object.getPrototypeOf(e);return r.prototype&&r.prototype.isReactComponent}()}(n=e)||function(e){return"function"===typeof e}(n)?o.a.createElement(e,r):e;var n}var R=function(){for(var e={},r=arguments.length,n=new Array(r),t=0;t<r;t++)n[t]=arguments[t];return n.forEach((function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=r.style,t=void 0===n?{}:n,o=r.className,u=l(r,["style","className"]);e=s({},e,{},u,{style:s({},e.style||{},{},t),className:[e.className,o].filter(Boolean).join(" ")})})),e},E=function(e,r){for(var n=arguments.length,t=new Array(n>2?n-2:0),o=2;o<n;o++)t[o-2]=arguments[o];return e.reduce((function(e,r){var n=r.apply(void 0,[e].concat(t));if("undefined"===typeof n)throw new Error("React Table: A hook just returned undefined! This is not allowed.");return n}),r)},O=function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),t=1;t<r;t++)n[t-1]=arguments[t];return e.reduce((function(e,r){return R(e,r.apply(void 0,n))}),{})};function T(e){if("function"===typeof e)return e}function j(e,r){var n=[];return function e(t){t.forEach((function(t){t[r]?e(t[r]):n.push(t)}))}(e),n}function k(e,r,n,t){var o=e.findIndex((function(e){return e.pluginName===n}));if(-1===o)throw new Error("The plugin ".concat(n," was not found in the plugin list!\nThis usually means you need to need to name your plugin hook by setting the 'pluginName' property of the hook function, eg:\n\n  ").concat(n,".pluginName = '").concat(n,"'\n"));r.forEach((function(r){var t=e.findIndex((function(e){return e.pluginName===r}));if(t>-1&&t>o)throw new Error("React Table: The ".concat(n," plugin hook must be placed after the ").concat(r," plugin hook!"))})),t.forEach((function(r){var t=e.findIndex((function(e){return e.pluginName===r}));if(t>-1&&t<o)throw new Error("React Table: The ".concat(n," plugin hook must be placed before the ").concat(r," plugin hook!"))}))}var C={data:i.a.array.isRequired,columns:i.a.arrayOf(i.a.object).isRequired,defaultColumn:i.a.object,getSubRows:i.a.func,getRowID:i.a.func,debug:i.a.bool},P='You must specify a valid render component. This could be "column.Cell", "column.Header", "column.Filter", "column.Aggregated" or any other custom renderer component.',B={},A={},I={},x=function(e,r){return r},D=function(e,r){return e.subRows||[]},M=function(e,r){return r},N=function(e){i.a.checkPropTypes(C,e,"property","useTable");var r=e.data,n=e.columns,t=e.initialState,u=void 0===t?A:t,a=e.state,c=e.defaultColumn,l=void 0===c?I:c,p=e.getSubRows,h=void 0===p?D:p,m=e.getRowID,b=void 0===m?M:m,w=e.reducer,T=void 0===w?x:w,k=e.debug;k=!1;for(var N=o.a.useState(s({},B,{},u)),_=f(N,2),F=_[0],G=_[1],W=o.a.useMemo((function(){if(a){var e=s({},F);return Object.keys(a).forEach((function(r){e[r]=a[r]})),e}return F}),[F,a]),V=o.a.useCallback((function(e,r){return G((function(n){var t="function"===typeof e?e(n):e;return T(n,t,r)}))}),[T]),L=o.a.useRef({}),q=arguments.length,z=new Array(q>1?q-1:0),J=1;J<q;J++)z[J-1]=arguments[J];Object.assign(L.current,s({},e,{data:r,state:W,setState:V,plugins:z,hooks:{columnsBeforeHeaderGroups:[],columnsBeforeHeaderGroupsDeps:[],useBeforeDimensions:[],useMain:[],useRows:[],prepareRow:[],getTableProps:[],getTableBodyProps:[],getRowProps:[],getHeaderGroupProps:[],getHeaderProps:[],getCellProps:[]}})),z.filter(Boolean).forEach((function(e){e(L.current.hooks)}));var X=o.a.useMemo((function(){return g(n,l)}),[l,n]),Y=o.a.useMemo((function(){return E(L.current.hooks.columnsBeforeHeaderGroups,j(X,"columns"),L.current)}),[X,k].concat(d(E(L.current.hooks.columnsBeforeHeaderGroupsDeps,[],L.current)))),K=o.a.useMemo((function(){return v(Y,l)}),[l,Y]),Q=o.a.useMemo((function(){return K[0].headers}),[K]);Object.assign(L.current,{columns:X,flatColumns:Y,headerGroups:K,headers:Q});var U=o.a.useMemo((function(){var e=[];return[r.map((function(n,t){return function n(t,o){var u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],a=t,c=b(t,o),s=[].concat(d(i),[c]),l={original:a,index:o,path:s,depth:u,cells:[{}]};e.push(l);var f=h(t,o);f&&(l.subRows=f.map((function(e,r){return n(e,r,u+1,s)})));var p=function(){throw new Error("React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.")};return l.cells.map=p,l.cells.filter=p,l.cells.forEach=p,l.cells[0].getCellProps=p,l.values={},Y.forEach((function(e){l.values[e.id]=e.accessor?e.accessor(t,o,{subRows:f,depth:u,data:r}):void 0})),l}(n,t)})),e]}),[k,r,b,h,Y]),Z=f(U,2),$=Z[0],ee=Z[1];return L.current.rows=$,L.current.flatRows=ee,y(L.current),L.current.flatHeaders=K.reduce((function(e,r){return[].concat(d(e),d(r.headers))}),[]),L.current=E(L.current.hooks.useBeforeDimensions,L.current),H(L.current),L.current=E(L.current.hooks.useMain,L.current),L.current.flatHeaders.forEach((function(e){e.render=function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t="string"===typeof r?e[r]:r;if("undefined"===typeof t)throw new Error(P);return S(t,s({},L.current,{column:e},n))},e.getHeaderProps=function(r){return R({key:["header",e.id].join("_"),colSpan:e.totalVisibleHeaderCount},O(L.current.hooks.getHeaderProps,e,L.current),r)}})),L.current.headerGroups.forEach((function(e,r){if(e.headers=e.headers.filter((function(e){return e.headers?function e(r){return r.filter((function(r){return r.headers?e(r.headers):r.isVisible})).length}(e.headers):e.isVisible})),e.headers.length)return e.getHeaderGroupProps=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return R({key:["header".concat(r)].join("_")},O(L.current.hooks.getHeaderGroupProps,e,L.current),n)},!0})),L.current.rows=E(L.current.hooks.useRows,L.current.rows,L.current),L.current.prepareRow=o.a.useCallback((function(e){e.getRowProps=function(r){return R({key:["row"].concat(d(e.path)).join("_")},O(L.current.hooks.getRowProps,e,L.current),r)},e.cells=L.current.flatColumns.filter((function(e){return e.isVisible})).map((function(r){var n={column:r,row:e,value:e.values[r.id],getCellProps:function(t){var o=[].concat(d(e.path),[r.id]).join("_");return R({key:["cell",o].join("_")},O(L.current.hooks.getCellProps,n,L.current),t)},render:function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u="string"===typeof t?r[t]:t;if("undefined"===typeof u)throw new Error(P);return S(u,s({},L.current,{column:r,row:e,cell:n},o))}};return n})),E(L.current.hooks.prepareRow,e,L.current)}),[]),L.current.getTableProps=function(e){return R(O(L.current.hooks.getTableProps,L.current),e)},L.current.getTableBodyProps=function(e){return R(O(L.current.hooks.getTableBodyProps,L.current),e)},L.current};function H(e){var r=e.headers;e.totalColumnsWidth=function e(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;var t=0;r.forEach((function(r){var o=r.headers;r.totalLeft=n,o&&o.length?r.totalWidth=e(o,n):r.totalWidth=Math.min(Math.max(r.minWidth,r.width),r.maxWidth),n+=r.totalWidth,t+=r.totalWidth}));return t}(r)}var _={},F=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];r.forEach((function(e){_[e]="React Table Action: ".concat(e)}))};B.expanded=[],F("toggleExpanded","useExpanded");i.a.string,i.a.bool;var G=function(e,r,n){return e=e.filter((function(e){var t=e.values[r];return String(t).toLowerCase().includes(String(n).toLowerCase())}))};G.autoRemove=function(e){return!e};var W=function(e,r,n){return e.filter((function(e){var t=e.values[r];return void 0===t||String(t).toLowerCase()===String(n).toLowerCase()}))};W.autoRemove=function(e){return!e};var V=function(e,r,n){return e.filter((function(e){var t=e.values[r];return void 0===t||String(t)===String(n)}))};V.autoRemove=function(e){return!e};var L=function(e,r,n){return e.filter((function(e){var t=e.values[r];return n.includes(t)}))};L.autoRemove=function(e){return!e||!e.length};var q=function(e,r,n){return e.filter((function(e){var t=e.values[r];return t&&t.length&&n.every((function(e){return t.includes(e)}))}))};q.autoRemove=function(e){return!e||!e.length};var z=function(e,r,n){return e.filter((function(e){return e.values[r]===n}))};z.autoRemove=function(e){return"undefined"===typeof e};var J=function(e,r,n){return e.filter((function(e){return e.values[r]==n}))};J.autoRemove=function(e){return null==e};var X=function(e,r,n){var t=f(n||[],2),o=t[0],u=t[1];if((o="number"===typeof o?o:-1/0)>(u="number"===typeof u?u:1/0)){var i=o;o=u,u=i}return e.filter((function(e){var n=e.values[r];return n>=o&&n<=u}))};X.autoRemove=function(e){return!e||"number"!==typeof e[0]&&"number"!==typeof e[1]};B.filters={},F("setFilter","setAllFilters");i.a.arrayOf(i.a.shape({disableFilters:i.a.bool,Filter:i.a.any})),i.a.bool;B.groupBy=[],F("toggleGroupBy");i.a.arrayOf(i.a.shape({aggregate:i.a.oneOfType([i.a.func,i.a.string,i.a.arrayOf(i.a.oneOfType([i.a.func,i.a.string]))]),disableGrouping:i.a.bool,Aggregated:i.a.any})),i.a.func,i.a.bool,i.a.bool,i.a.object;var Y=/([0-9]+)/gm;function K(e,r){return e===r?0:e>r?1:-1}function Q(e,r){return e.values[r]}function U(e){return"number"===typeof e?isNaN(e)||e===1/0||e===-1/0?"":String(e):"string"===typeof e?e:""}var Z=Object.freeze({alphanumeric:function(e,r,n){var t=Q(e,n),o=Q(r,n);for(t=U(t),o=U(o),t=t.split(Y).filter(Boolean),o=o.split(Y).filter(Boolean);t.length&&o.length;){var u=t.shift(),i=o.shift(),a=parseInt(u,10),c=parseInt(i,10),s=[a,c].sort();if(isNaN(s[0])){if(u>i)return 1;if(i>u)return-1}else{if(isNaN(s[1]))return isNaN(a)?-1:1;if(a>c)return 1;if(c>a)return-1}}return t.length-o.length},datetime:function(e,r,n){var t=Q(e,n),o=Q(r,n);return K(t=t.getTime(),o=o.getTime())},basic:function(e,r,n){return K(Q(e,n),Q(r,n))}});B.sortBy=[],p.sortType="alphanumeric",p.sortDescFirst=!1,F("sortByChange");var $={columns:i.a.arrayOf(i.a.shape({sortType:i.a.oneOfType([i.a.string,i.a.func]),sortDescFirst:i.a.bool,disableSorting:i.a.bool})),orderByFn:i.a.func,sortTypes:i.a.object,manualSorting:i.a.bool,disableSorting:i.a.bool,disableMultiSort:i.a.bool,isMultiSortEvent:i.a.func,maxMultiSortColCount:i.a.number,disableSortRemove:i.a.bool,disableMultiRemove:i.a.bool},ee=function(e){e.useMain.push(re)};function re(e){i.a.checkPropTypes($,e,"property","useSortBy");var r=e.debug,n=e.rows,t=e.flatColumns,u=e.orderByFn,a=void 0===u?b:u,c=e.sortTypes,l=e.manualSorting,f=e.disableSorting,p=e.disableSortRemove,h=e.disableMultiRemove,g=e.disableMultiSort,v=e.isMultiSortEvent,y=void 0===v?function(e){return e.shiftKey}:v,m=e.maxMultiSortColCount,S=void 0===m?Number.MAX_SAFE_INTEGER:m,E=e.flatHeaders,j=e.hooks,C=e.state.sortBy,P=e.setState;k(e.plugins,["useFilters"],"useSortBy",[]),j.getSortByToggleProps=[];var B=function(e,r,n){return P((function(o){var u,i=o.sortBy,a=t.find((function(r){return r.id===e})).sortDescFirst,c=i.find((function(r){return r.id===e})),l=i.findIndex((function(r){return r.id===e})),f="undefined"!==typeof r&&null!==r,v=[];return"toggle"!==(u=!g&&n?c?"toggle":"add":l!==i.length-1?"replace":c?"toggle":"replace")||p||f||n&&h||!(c&&c.desc&&!a||!c.desc&&a)||(u="remove"),"replace"===u?v=[{id:e,desc:f?r:a}]:"add"===u?(v=[].concat(d(i),[{id:e,desc:f?r:a}])).splice(0,v.length-S):"toggle"===u?v=i.map((function(n){return n.id===e?s({},n,{desc:f?r:!c.desc}):n})):"remove"===u&&(v=i.filter((function(r){return r.id!==e}))),s({},o,{sortBy:v})}),_.sortByChange)};E.forEach((function(r){var n=r.accessor,t=r.disableSorting,o=r.id,u=!!n&&w(!0!==t&&void 0,!0!==f&&void 0,!0);r.canSort=u,r.canSort&&(r.toggleSortBy=function(e,n){return B(r.id,e,n)},r.clearSorting=function(){return P((function(e){return s({},e,{sortBy:e.sortBy.filter((function(e){return e.id!==r.id}))})}),_.sortByChange)}),r.getSortByToggleProps=function(n){return R({onClick:u?function(n){n.persist(),r.toggleSortBy(void 0,!e.disableMultiSort&&y(n))}:void 0,style:{cursor:u?"pointer":void 0},title:"Toggle SortBy"},O(e.hooks.getSortByToggleProps,r,e),n)};var i=C.find((function(e){return e.id===o}));r.isSorted=!!i,r.sortedIndex=C.findIndex((function(e){return e.id===o})),r.isSortedDesc=r.isSorted?i.desc:void 0}));var A=o.a.useMemo((function(){if(l||!C.length)return n;var e=C.filter((function(e){return t.find((function(r){return r.id===e.id}))}));return function r(n){var o=a(n,e.map((function(e){var r=t.find((function(r){return r.id===e.id}));if(!r)throw new Error("React-Table: Could not find a column with id: ".concat(e.id," while sorting"));var n=r.sortType,o=T(n)||(c||{})[n]||Z[n];if(!o)throw new Error("React-Table: Could not find a valid sortType of '".concat(n,"' for column '").concat(e.id,"'."));return function(r,n){return o(r,n,e.id)}})),e.map((function(e){var r=t.find((function(r){return r.id===e.id}));return r&&r.sortInverted?e.desc:!e.desc})));return o.forEach((function(e){!e.subRows||e.subRows.length<=1||(e.subRows=r(e.subRows))})),o}(n)}),[l,C,r,n,t,a,c]);return s({},e,{toggleSortBy:B,rows:A,preSortedRows:n})}ee.pluginName="useSortBy",B.pageSize=10,B.pageIndex=0,F("pageChange","pageSizeChange");i.a.bool,i.a.bool;B.selectedRowPaths=[],F("toggleRowSelected","toggleRowSelectedAll");i.a.string;B.rowState={},F("setRowState","setCellState");i.a.func;B.columnOrder=[],F("setColumnOrder");i.a.func;B.columnResizing={columnWidths:{}},p.canResize=!0}}]);
//# sourceMappingURL=3.4abda8b2.chunk.js.map