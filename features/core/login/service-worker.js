if(!self.define){let e,l={};const n=(n,i)=>(n=new URL(n+".js",i).href,l[n]||new Promise((l=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=l,document.head.appendChild(e)}else e=n,importScripts(n),l()})).then((()=>{let e=l[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(l[r])return;let o={};const u=e=>n(e,r),d={module:{uri:r},exports:o,require:u};l[r]=Promise.all(i.map((e=>d[e]||u(e)))).then((e=>(s(...e),o)))}}define(["./workbox-099bf95e"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"123.21c289d0075fac59.js",revision:null},{url:"356.1651b7fd4e7b2148.js",revision:null},{url:"365.7a575788fff2d45b.js",revision:null},{url:"367.461da326e1554f4b.js",revision:null},{url:"40.0c95a712d013a237.js",revision:null},{url:"446.b414e23543e4a39b.js",revision:null},{url:"487.6bb0e9749dac8e84.js",revision:null},{url:"544.b895e7c155d636b9.js",revision:null},{url:"597.13f52d162432ab6d.js",revision:null},{url:"609.25be961e861db21d.js",revision:null},{url:"64.46fe9cd95fea2c9d.js",revision:null},{url:"673.648591c79e0bb519.js",revision:null},{url:"__federation_expose_confirm.b9dd6cfb086ddf9c.js",revision:null},{url:"__federation_expose_login.eab118ee6a572ded.js",revision:null},{url:"__federation_expose_signup.aa55fd109dfb844c.js",revision:null},{url:"common.f38054ad5d92a7bb.js",revision:null},{url:"main.b050a29ab40d631c.js",revision:null},{url:"polyfills.47cc19a55f55c8ae.js",revision:null},{url:"remoteEntry.mjs",revision:"6a856be1aa00ee50252af3903258178a"},{url:"styles.929803f8e1978dbe.css",revision:null}],{})}));
