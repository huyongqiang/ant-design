webpackJsonp([44,197],{739:function(n,a,s){n.exports={basic:s(1397),bottom:s(1398),offset:s(1399),"on-change":s(1400),target:s(1401)}},1397:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(250),s(249)),o=t(p),e=(s(14),s(13)),c=t(e),l=s(1),u=t(l),i=s(2);t(i);n.exports={content:{"zh-CN":[["p","\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002"]],"en-US":[["p","The simplest usage."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/affix/demo/basic.md",id:"components-affix-demo-basic"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Affix<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Affix</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Affix top<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Affix</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return u["default"].createElement(o["default"],null,u["default"].createElement(c["default"],{type:"primary"},"Affix top"))}}},1398:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(250),s(249)),o=t(p),e=(s(14),s(13)),c=t(e),l=s(1),u=t(l),i=s(2);t(i);n.exports={content:{"zh-CN":[["p","\u56fa\u5b9a\u5728\u5c4f\u5e55\u4e0b\u65b9\u3002"]],"en-US":[["p","Affix to bottom."]]},meta:{order:2,title:{"zh-CN":"\u4e0b\u65b9\u56fa\u5b9a","en-US":"Bottom"},filename:"components/affix/demo/bottom.md",id:"components-affix-demo-bottom"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Affix<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Affix</span> <span class="token attr-name" >offsetBottom</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >20</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>20px to affix bottom<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Affix</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return u["default"].createElement(o["default"],{offsetBottom:20},u["default"].createElement(c["default"],{type:"primary"},"20px to affix bottom"))}}},1399:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(250),s(249)),o=t(p),e=(s(14),s(13)),c=t(e),l=s(1),u=t(l),i=s(2);t(i);n.exports={content:{"zh-CN":[["p","\u8fbe\u5230\u4e00\u5b9a\u7684\u504f\u79fb\u91cf\u624d\u89e6\u53d1\u3002"]],"en-US":[["p","Affix element according to offset value."]]},meta:{order:1,title:{"zh-CN":"\u504f\u79fb","en-US":"Offset"},filename:"components/affix/demo/offset.md",id:"components-affix-demo-offset"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Affix<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Affix</span> <span class="token attr-name" >offsetTop</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >75</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>75px to affix top<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Affix</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return u["default"].createElement(o["default"],{offsetTop:75},u["default"].createElement(c["default"],{type:"primary"},"75px to affix top"))}}},1400:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(250),s(249)),o=t(p),e=(s(14),s(13)),c=t(e),l=s(1),u=t(l),i=s(2);t(i);n.exports={content:{"zh-CN":[["p","\u53ef\u4ee5\u83b7\u5f97\u662f\u5426\u56fa\u5b9a\u7684\u72b6\u6001\u3002"]],"en-US":[["p","Callback with affixed state."]]},meta:{order:3,title:{"zh-CN":"\u56fa\u5b9a\u72b6\u6001\u6539\u53d8\u7684\u56de\u8c03","en-US":"Callback"},filename:"components/affix/demo/on-change.md",id:"components-affix-demo-on-change"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Affix<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Affix</span> <span class="token attr-name" >offsetTop</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >120</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>affixed <span class="token operator" >=</span><span class="token operator" >></span> console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>affixed<span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span><span class="token punctuation" >></span></span>120px to affix top<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Affix</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return u["default"].createElement(o["default"],{offsetTop:120,onChange:function(n){return console.log(n)}},u["default"].createElement(c["default"],null,"120px to affix top"))}}},1401:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(250),s(249)),o=t(p),e=(s(14),s(13)),c=t(e),l=s(1),u=t(l),i=s(2);t(i);n.exports={content:{"zh-CN":[["p","\u7528 ",["code","target"]," \u8bbe\u7f6e ",["code","Affix"]," \u9700\u8981\u76d1\u542c\u5176\u6eda\u52a8\u4e8b\u4ef6\u7684\u5143\u7d20\uff0c\u9ed8\u8ba4\u4e3a ",["code","window"],"\u3002"]],"en-US":[["p","Set a ",["code","target"]," for 'Affix', which is listen to scroll event of target element (default is ",["code","window"],"). "]]},meta:{order:4,title:{"zh-CN":"\u6eda\u52a8\u5bb9\u5668","en-US":"Container to scroll."},filename:"components/affix/demo/target.md",id:"components-affix-demo-target"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Affix<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Demo <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> height<span class="token punctuation" >:</span> <span class="token number" >100</span><span class="token punctuation" >,</span> overflow<span class="token punctuation" >:</span> <span class="token string" >\'hidden\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> height<span class="token punctuation" >:</span> <span class="token string" >\'100%\'</span><span class="token punctuation" >,</span> overflowY<span class="token punctuation" >:</span> <span class="token string" >\'scroll\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >id</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>affix-target<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> height<span class="token punctuation" >:</span> <span class="token number" >300</span><span class="token punctuation" >,</span> backgroundImage<span class="token punctuation" >:</span> <span class="token string" >\'url(https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg)\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>br</span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>br</span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>br</span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Affix</span> <span class="token attr-name" >target</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> document<span class="token punctuation" >.</span><span class="token function" >getElementById</span><span class="token punctuation" >(</span><span class="token string" >\'affix-target\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >offsetTop</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >20</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Fixed at the top <span class="token keyword" >of</span> container<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Affix</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Demo</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(){return u["default"].createElement("div",{style:{height:100,overflow:"hidden"}},u["default"].createElement("div",{style:{height:"100%",overflowY:"scroll"},id:"affix-target"},u["default"].createElement("div",{style:{height:300,backgroundImage:"url(https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg)"}},u["default"].createElement("br",null),u["default"].createElement("br",null),u["default"].createElement("br",null),u["default"].createElement(o["default"],{target:function(){return document.getElementById("affix-target")},offsetTop:20},u["default"].createElement(c["default"],{type:"primary"},"Fixed at the top of container")))))};return u["default"].createElement(n,null)}}}});