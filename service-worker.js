if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const o=s=>l(s,n),c={module:{uri:n},exports:u,require:o};e[n]=Promise.all(r.map((s=>c[s]||o(s)))).then((s=>(i(...s),u)))}}define(["./workbox-6567b62a"],(function(s){"use strict";s.setCacheNameDetails({prefix:"mid-term-project"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/css/752.b03ec7b6.css",revision:null},{url:"/css/758.56cb1a49.css",revision:null},{url:"/css/app.4d96096a.css",revision:null},{url:"/index.html",revision:"9e1d2f642bd64e56e76bc598464fc6db"},{url:"/js/104.96364c04.js",revision:null},{url:"/js/212.3ea5e11c.js",revision:null},{url:"/js/264.aea1f871.js",revision:null},{url:"/js/329.aa97147c.js",revision:null},{url:"/js/457.4c8e8ca0.js",revision:null},{url:"/js/564.88afaa64.js",revision:null},{url:"/js/752.2abc6b12.js",revision:null},{url:"/js/758.f3fcffc5.js",revision:null},{url:"/js/815.16b349d7.js",revision:null},{url:"/js/866.665d61bc.js",revision:null},{url:"/js/app.106c6bbf.js",revision:null},{url:"/js/chunk-vendors.cbcbf9f3.js",revision:null},{url:"/manifest.json",revision:"f679e59656bb31f01a0e40d175da2d4b"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map