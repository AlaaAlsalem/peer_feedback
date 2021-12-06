(()=>{"use strict";var n={426:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([n.id,"\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  ul {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n  \r\n  body {\r\n    background-color: rgb(221, 217, 217);\r\n  }\r\n  \r\n  .tap {\r\n    background-color: white;\r\n    box-shadow: 10px 10px 10px grey;\r\n  }\r\n  \r\n  .main {\r\n    border-bottom: 1px solid grey;\r\n    padding: 20px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n  \r\n  input,\r\n  button {\r\n    border-style: hidden;\r\n    background-color: transparent;\r\n    color: grey;\r\n    font-style: italic;\r\n    outline: none;\r\n  }\r\n  \r\n  .clear {\r\n    text-align: center;\r\n    color: grey;\r\n    padding: 20px 0;\r\n    width: 100%;\r\n  }\r\n  \r\n  .task {\r\n    font-size: 20px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n    padding: 14px 0;\r\n  }\r\n  \r\n  .wrapper {\r\n    display: flex;\r\n    gap: 8px;\r\n  }\r\n  \r\n  .box {\r\n    margin-left: -20px;\r\n    font-size: 20px;\r\n  }\r\n  \r\n  .m-i {\r\n    margin-right: 17px;\r\n    color: rgba(0, 0, 0, 0.5);\r\n  }\r\n  \r\n  .m-input {\r\n    margin: 0 0 0 25px;\r\n  }\r\n  \r\n  .tap ul {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  @media screen and (min-width: 768px) {\r\n    .tap {\r\n      margin: 40px auto;\r\n      max-width: 600px;\r\n    }\r\n  }",""]);const s=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var p=0;p<n.length;p++){var d=[].concat(n[p]);t&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),r.push(d))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],p=t.base?c[0]+t.base:c[0],d=a[p]||0,l="".concat(p," ").concat(d);a[p]=d+1;var u=e(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)r[u].references++,r[u].updater(f);else{var m=o(f,t);t.byIndex=s,r.splice(s,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=e(a[i]);r[s].references--}for(var c=t(n,o),p=0;p<a.length;p++){var d=e(a[p]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}a=c}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return n[t](a,a.exports,e),a.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n=e(379),r=e.n(n),t=e(795),o=e.n(t),a=e(569),i=e.n(a),s=e(565),c=e.n(s),p=e(216),d=e.n(p),l=e(589),u=e.n(l),f=e(426),m={};m.styleTagTransform=u(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),r()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const v=document.querySelector(".list-container");[{index:0,description:"Wash the dishes",completed:!0},{index:1,description:"Complete todo lis project",completed:!0},{index:2,description:"Play game with my girlfriend",completed:!0},{index:3,description:"Eat some cookies",completed:!0}].forEach((n=>{const r=`\n    <div class="task">\n    <div class="wrapper">\n        <input type="checkbox" name="" class="box m-input" data-id=${n.index} ${n.completed?"checked":""}>\n        <input type="text" name="" data-id="${n.index}" value="${n.description}">\n    </div>\n        <i id="ellipse" class="fas fa-ellipsis-v m-i"></i>\n        \n    </div>\n    <hr>`;v.innerHTML+=r}))})()})();