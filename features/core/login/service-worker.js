if(!self.define){let e,l={};const n=(n,i)=>(n=new URL(n+".js",i).href,l[n]||new Promise((l=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=l,document.head.appendChild(e)}else e=n,importScripts(n),l()})).then((()=>{let e=l[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(l[r])return;let o={};const u=e=>n(e,r),c={module:{uri:r},exports:o,require:u};l[r]=Promise.all(i.map((e=>c[e]||u(e)))).then((e=>(s(...e),o)))}}define(["./workbox-099bf95e"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"123.21c289d0075fac59.js",revision:null},{url:"214.0f718594e208e8a8.js",revision:null},{url:"356.8683c209ccbea732.js",revision:null},{url:"365.7a575788fff2d45b.js",revision:null},{url:"367.461da326e1554f4b.js",revision:null},{url:"40.942b3f44f4bf7587.js",revision:null},{url:"467.12c88acc3a786ea1.js",revision:null},{url:"485.fae4091594ba4a87.js",revision:null},{url:"487.3ff0199ce92fd0d7.js",revision:null},{url:"544.1bd96ce69e4c9be0.js",revision:null},{url:"609.25be961e861db21d.js",revision:null},{url:"630.d07dd4f0e63d0c4b.js",revision:null},{url:"64.46fe9cd95fea2c9d.js",revision:null},{url:"872.238ba2c2b8700d90.js",revision:null},{url:"__federation_expose_confirm.3ed3e4e7740a169f.js",revision:null},{url:"__federation_expose_login.d92b80bb96194c7a.js",revision:null},{url:"__federation_expose_signin.9109a0e89ce7f376.js",revision:null},{url:"__federation_expose_signup.cf53e841c6424d64.js",revision:null},{url:"common.7b2b5cd2aad8960f.js",revision:null},{url:"main.80ec1349c5625a72.js",revision:null},{url:"polyfills.d9c4a2c80012cec1.js",revision:null},{url:"remoteEntry.mjs",revision:"481443a9785c8253ed4d4269c2a4f5f6"},{url:"styles.929803f8e1978dbe.css",revision:null}],{})}));
