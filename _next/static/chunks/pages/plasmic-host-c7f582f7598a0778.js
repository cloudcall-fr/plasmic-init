(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[258],{8120:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plasmic-host",function(){return t(3364)}])},3364:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return s}});var r=t(5893),i=(t(7294),t(4298)),a=t(6983),u=t(3315);function s(){return u.p&&(0,r.jsxs)("div",{children:[(0,r.jsx)(i.default,{src:"https://static1.plasmic.app/preamble.js",strategy:"beforeInteractive"}),(0,r.jsx)(a.nh,{})]})}},3315:function(n,e,t){"use strict";t.d(e,{p:function(){return g}});var r=t(6983),i=t(4051),a=t.n(i),u=t(5893),s=t(8030),o=t(2705),c=t(6486),l=t.n(c),p=t(3454);function d(n,e,t,r,i,a,u){try{var s=n[a](u),o=s.value}catch(c){return void t(c)}s.done?e(o):Promise.resolve(o).then(r,i)}function f(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function u(n){d(a,r,i,u,s,"next",n)}function s(n){d(a,r,i,u,s,"throw",n)}u(void 0)}))}}p.env.API_ENDPOINT="https://api-dev.cloudcall.fr/v1/graphql";var v="\nquery {\n  string {\n    id\n    code\n    language\n    value\n  }\n}\n";function h(n){return m.apply(this,arguments)}function m(){return(m=f(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch("".concat(p.env.API_ENDPOINT),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e})}).then((function(n){return n.json()})));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(){return x.apply(this,arguments)}function x(){return(x=f(a().mark((function n(){var e,t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,h(v);case 3:return t=n.sent,r=null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.string,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n,e,t,r,i,a,u){try{var s=n[a](u),o=s.value}catch(c){return void t(c)}s.done?e(o):Promise.resolve(o).then(r,i)}t(7294);var g=(0,r.fZ)({projects:[{id:"2NV7jxTKPgsx5H4UNvT2Ap",token:"mbs3OApvudRUBW8Oehh8wA4OW1TiSOLRmOVn2ispIVNuIwKIXSlRYZ2FRwvyqgCTfS5hqzM6vObmqkuR4w"}],preview:!1});g.registerComponent((function(n){var e=n.className,t=n.msg;return(0,u.jsx)("div",{className:e,style:{padding:"20px"},children:(0,u.jsx)("p",{children:t||"Hello there!"})})}),{name:"HelloWorld",props:{msg:"string"}}),g.registerComponent((function(n){var e,t=n.type,r=n.children,i=n.className,c=(0,o.usePlasmicQueryData)(JSON.stringify({type:t}),(e=a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",y());case 1:case"end":return n.stop()}}),n)})),function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function u(n){w(a,r,i,u,s,"next",n)}function s(n){w(a,r,i,u,s,"throw",n)}u(void 0)}))}));return(null===c||void 0===c?void 0:c.data)?(0,u.jsx)("div",{className:i,children:null===c||void 0===c?void 0:c.data.map((function(n,e){return(0,u.jsx)(s.FW,{name:"graphqlItem",data:n,children:(0,s.xH)(0===e,r)},n.id)}))}):(0,u.jsx)("div",{children:"Please specify a field type."})}),{name:"GraphqlFetcher",props:{children:{type:"slot",defaultValue:{type:"vbox",children:[{type:"component",name:"GraphqlField"}]}}}}),g.registerComponent((function(n){var e=n.className,t=n.path,r=n.setControlContextData,i=(0,s.v9)("graphqlItem");if(!i)return(0,u.jsx)("div",{children:"ContentfulField must be used within a ContentfulFetcher"});if(null===r||void 0===r||r({fields:Object.keys(i)}),!t)return(0,u.jsx)("div",{children:"ContentfulField must specify a path."});var a=l().get(i,t);return(null===a||void 0===a?void 0:a.url)?(0,u.jsx)("img",{src:a.url}):(0,u.jsx)("div",{className:e,children:a})}),{name:"GraphqlField",props:{path:{type:"choice",options:function(n,e){return e.fields}}}})},4298:function(n,e,t){n.exports=t(3573)}},function(n){n.O(0,[774,662,983,888,179],(function(){return e=8120,n(n.s=e);var e}));var e=n.O();_N_E=e}]);