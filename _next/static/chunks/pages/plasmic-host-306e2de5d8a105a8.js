(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[258],{8120:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plasmic-host",function(){return t(3364)}])},3364:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return u}});var r=t(5893),i=(t(7294),t(4298)),o=t(6983),a=t(6001);function u(){return a.p&&(0,r.jsxs)("div",{children:[(0,r.jsx)(i.default,{src:"https://static1.plasmic.app/preamble.js",strategy:"beforeInteractive"}),(0,r.jsx)(o.nh,{})]})}},6001:function(n,e,t){"use strict";t.d(e,{p:function(){return N}});var r=t(6983),i=t(4051),o=t.n(i),a=t(5893),u=t(8030),c=t(9962),s=t(6486),l=t.n(s),p=t(3454);function d(n,e,t,r,i,o,a){try{var u=n[o](a),c=u.value}catch(s){return void t(s)}u.done?e(c):Promise.resolve(c).then(r,i)}function f(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var o=n.apply(e,t);function a(n){d(o,r,i,a,u,"next",n)}function u(n){d(o,r,i,a,u,"throw",n)}a(void 0)}))}}p.env.API_ENDPOINT="https://api-dev.cloudcall.fr/v1/graphql";var h="\nquery {\n  string(limit: 10) {\n    id\n    code\n    language\n    value\n  }\n}\n";function v(n){return m.apply(this,arguments)}function m(){return(m=f(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch("".concat(p.env.API_ENDPOINT),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e})}).then((function(n){return n.json()})));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(n){return console.log("!!",n.errors),null===n||void 0===n?void 0:n.data.string}function w(){return x.apply(this,arguments)}function x(){return(x=f(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v(h);case 2:return e=n.sent,n.abrupt("return",y(e));case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n,e,t,r,i,o,a){try{var u=n[o](a),c=u.value}catch(s){return void t(s)}u.done?e(c):Promise.resolve(c).then(r,i)}var N=(0,r.fZ)({projects:[{id:"2NV7jxTKPgsx5H4UNvT2Ap",token:"mbs3OApvudRUBW8Oehh8wA4OW1TiSOLRmOVn2ispIVNuIwKIXSlRYZ2FRwvyqgCTfS5hqzM6vObmqkuR4w"}],preview:!1});N.registerComponent((function(n){var e,t=n.type,r=n.children,i=n.className,s=(0,c.UX)(JSON.stringify({type:t}),(e=o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",w());case 1:case"end":return n.stop()}}),n)})),function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function a(n){g(o,r,i,a,u,"next",n)}function u(n){g(o,r,i,a,u,"throw",n)}a(void 0)}))}));return console.log("!",s),(null===s||void 0===s?void 0:s.data)?(0,a.jsx)("div",{className:i,children:null===s||void 0===s?void 0:s.data.map((function(n,e){return(0,a.jsx)(u.FW,{name:"graphqlItem",data:n,children:(0,u.xH)(0===e,r)},n.id)}))}):(0,a.jsx)("div",{children:"Please specify a collection."})}),{name:"GraphqlFetcher",props:{children:{type:"slot",defaultValue:{type:"vbox",children:[{type:"component",name:"GraphqlField"}]}}}}),N.registerComponent((function(n){var e=n.className,t=n.path,r=n.setControlContextData,i=(0,u.v9)("graphqlItem");if(!i)return(0,a.jsx)("div",{children:"GraphqlField must be used within a GraphqlFetcher"});if(null===r||void 0===r||r({fields:Object.keys(i)}),!t)return(0,a.jsx)("div",{children:"GraphqlField must specify a path."});var o=l().get(i,t);return(null===o||void 0===o?void 0:o.url)?(0,a.jsx)("img",{src:o.url}):(0,a.jsx)("div",{className:e,children:o})}),{name:"GraphqlField",props:{path:{type:"choice",options:function(n,e){return e.fields}}}})},4298:function(n,e,t){n.exports=t(3573)}},function(n){n.O(0,[774,662,332,888,179],(function(){return e=8120,n(n.s=e);var e}));var e=n.O();_N_E=e}]);