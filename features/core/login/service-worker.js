if(!self.define){let e,l={};const n=(n,i)=>(n=new URL(n+".js",i).href,l[n]||new Promise((l=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=l,document.head.appendChild(e)}else e=n,importScripts(n),l()})).then((()=>{let e=l[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(l[r])return;let o={};const u=e=>n(e,r),d={module:{uri:r},exports:o,require:u};l[r]=Promise.all(i.map((e=>d[e]||u(e)))).then((e=>(s(...e),o)))}}define(["./workbox-099bf95e"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"214.0f718594e208e8a8.js",revision:null},{url:"356.8683c209ccbea732.js",revision:null},{url:"367.461da326e1554f4b.js",revision:null},{url:"40.942b3f44f4bf7587.js",revision:null},{url:"467.9a8a6a8c101adb92.js",revision:null},{url:"487.3ff0199ce92fd0d7.js",revision:null},{url:"544.ba6e57cfb9216755.js",revision:null},{url:"609.25be961e861db21d.js",revision:null},{url:"630.d07dd4f0e63d0c4b.js",revision:null},{url:"64.46fe9cd95fea2c9d.js",revision:null},{url:"872.238ba2c2b8700d90.js",revision:null},{url:"__federation_expose_Routes.d0c34fa469933f4f.js",revision:null},{url:"__federation_expose_confirm.926498ca7e65f76a.js",revision:null},{url:"__federation_expose_login.06086bc3fbc0d1c8.js",revision:null},{url:"__federation_expose_signin.7cab9f6872642472.js",revision:null},{url:"__federation_expose_signup.468c451f0a592767.js",revision:null},{url:"common.066b8b2102d2add2.js",revision:null},{url:"main.7d3f06b6626aa22b.js",revision:null},{url:"polyfills.a523fd5ca78e7798.js",revision:null},{url:"remoteEntry.mjs",revision:"de18dcd0386a590e9a526db232c182c4"},{url:"styles.929803f8e1978dbe.css",revision:null}],{})}));
