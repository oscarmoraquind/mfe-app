(self.webpackChunklogin=self.webpackChunklogin||[]).push([[76],{4335:($,M,n)=>{n.d(M,{U:()=>I});var l=n(2424),h=n(3352),O=n(9895);function x(E,S){1&E&&(l.\u0275\u0275elementStart(0,"div"),l.\u0275\u0275element(1,"pi-component",3),l.\u0275\u0275elementEnd())}function f(E,S){1&E&&(l.\u0275\u0275elementStart(0,"div"),l.\u0275\u0275element(1,"pi-component",4),l.\u0275\u0275elementEnd())}function j(E,S){1&E&&(l.\u0275\u0275elementStart(0,"div"),l.\u0275\u0275element(1,"pi-component",5),l.\u0275\u0275elementEnd())}function W(E,S){1&E&&(l.\u0275\u0275elementStart(0,"div"),l.\u0275\u0275element(1,"pi-component",6),l.\u0275\u0275elementEnd())}function F(E,S){1&E&&(l.\u0275\u0275elementStart(0,"div"),l.\u0275\u0275element(1,"pi-component",3),l.\u0275\u0275elementEnd())}class C{constructor(S){this.route=S,this.mfeParam=null}ngOnInit(){this.route.queryParams.subscribe(S=>{this.mfeParam=S.mfe||null})}static{this.\u0275fac=function(U){return new(U||C)(l.\u0275\u0275directiveInject(h.ActivatedRoute))}}static{this.\u0275cmp=l.\u0275\u0275defineComponent({type:C,selectors:[["app-mfe-container"]],decls:6,vars:5,consts:[[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["name","login","source","https://oscarmoraquind.github.io/mfe-app/features/core/login/mf-manifest.json","format","module"],["name","signup","source","https://oscarmoraquind.github.io/mfe-app/features/core/login/mf-manifest.json","format","module"],["name","signin","source","https://oscarmoraquind.github.io/mfe-app/features/core/login/mf-manifest.json","format","module"],["name","confirm","source","https://oscarmoraquind.github.io/mfe-app/features/core/login/mf-manifest.json","format","module"]],template:function(U,r){1&U&&(l.\u0275\u0275elementStart(0,"div",0),l.\u0275\u0275template(1,x,2,0,"div",1)(2,f,2,0,"div",1)(3,j,2,0,"div",1)(4,W,2,0,"div",1)(5,F,2,0,"div",2),l.\u0275\u0275elementEnd()),2&U&&(l.\u0275\u0275property("ngSwitch",r.mfeParam),l.\u0275\u0275advance(),l.\u0275\u0275property("ngSwitchCase","login"),l.\u0275\u0275advance(),l.\u0275\u0275property("ngSwitchCase","signup"),l.\u0275\u0275advance(),l.\u0275\u0275property("ngSwitchCase","signin"),l.\u0275\u0275advance(),l.\u0275\u0275property("ngSwitchCase","confirm"))},dependencies:[O.CommonModule,O.NgSwitch,O.NgSwitchCase,O.NgSwitchDefault],encapsulation:2})}}const y=[{path:"",component:C}],I={providers:[(0,l.provideZoneChangeDetection)({eventCoalescing:!0}),(0,h.provideRouter)(y)]}},3880:($,M,n)=>{n.d(M,{M:()=>W});var l=n(8885),h=n(9895),x=n(6467),f=n(2424);class W{constructor(){this.global=globalThis,this.docNumber=""}onDocumentInput(C){const y=C.target;this.docNumber=y.value}checkIfUserExists(){var C=this;const y=`https://test.security.flypass.co/flypass/user-service/loginExists/${this.docNumber}`;fetch(y,{method:"GET"}).then(function(){var I=(0,l.A)(function*(E){if(!E.ok)throw new Error(`Error en petici\xf3n: ${E.status} - ${E.statusText}`);const S=yield E.json();1===S?.body?(C.global?.LoginEvent?.postMessage(JSON.stringify({event:"LoginExitoso",value:C.docNumber})),console.log("Usuario existe:",S)):C.global?.LoginEvent?.postMessage(JSON.stringify({event:"LoginFallido",value:C.docNumber}))});return function(E){return I.apply(this,arguments)}}()).catch(I=>{console.error("Ocurri\xf3 un error:",I.message),alert("No fue posible validar tu usuario. Intenta m\xe1s tarde.")})}signupUser(){this.global?.LoginEvent?.postMessage(JSON.stringify({event:"RegistroExitoso"}))}static{this.\u0275fac=function(y){return new(y||W)}}static{this.\u0275cmp=f.\u0275\u0275defineComponent({type:W,selectors:[["app-login-entry"],["pi-component","name","login"]],decls:22,vars:0,consts:[[2,"text-align","center"],["size","small","type","logo","variant","full-color"],["autocapitalize","off","autocomplete","off","autocorrect","off","inputmode","text","name","bq-input","placeholder","Escribe tu documento","type","text",3,"input"],["slot","label",1,"flex","flex-grow","items-center"],["block","",3,"click"],["href","#"],["textColor","text--alt",3,"click"]],template:function(y,I){1&y&&(f.\u0275\u0275elementStart(0,"bq-grid")(1,"bq-row")(2,"bq-col",0),f.\u0275\u0275element(3,"bq-logo",1),f.\u0275\u0275elementEnd()(),f.\u0275\u0275elementStart(4,"bq-row")(5,"bq-col")(6,"bq-input",2),f.\u0275\u0275listener("input",function(S){return I.onDocumentInput(S)}),f.\u0275\u0275elementStart(7,"label",3),f.\u0275\u0275text(8," Documento "),f.\u0275\u0275elementEnd()()()(),f.\u0275\u0275elementStart(9,"bq-row")(10,"bq-col")(11,"bq-button",4),f.\u0275\u0275listener("click",function(){return I.checkIfUserExists()}),f.\u0275\u0275text(12,"Continuar"),f.\u0275\u0275elementEnd()()(),f.\u0275\u0275elementStart(13,"bq-row")(14,"bq-col",0)(15,"bq-text"),f.\u0275\u0275text(16,"\xbfEres nuevo en Flypass?"),f.\u0275\u0275elementEnd()()(),f.\u0275\u0275elementStart(17,"bq-row")(18,"bq-col",0)(19,"a",5)(20,"bq-text",6),f.\u0275\u0275listener("click",function(){return I.signupUser()}),f.\u0275\u0275text(21,"Reg\xedstrate"),f.\u0275\u0275elementEnd()()()()())},dependencies:[h.CommonModule,x.U$,x.oB,x.nk,x.aU,x.AD,x.cC,x.dv],encapsulation:2})}}},1182:($,M,n)=>{n.r(M),n.d(M,{audit:()=>l.s,auditTime:()=>h.Z,buffer:()=>O.r,bufferCount:()=>x.S,bufferTime:()=>f.w,bufferToggle:()=>j.H,bufferWhen:()=>W.n,catchError:()=>F.W,combineAll:()=>C.p,combineLatest:()=>I.z,combineLatestAll:()=>y.A,combineLatestWith:()=>E.v,concat:()=>S.x,concatAll:()=>U.K,concatMap:()=>r.H,concatMapTo:()=>a.S,concatWith:()=>o.$,connect:()=>c.N,count:()=>p.U,debounce:()=>P.s,debounceTime:()=>L.B,defaultIfEmpty:()=>D.U,delay:()=>T.c,delayWhen:()=>g.o,dematerialize:()=>i.Z,distinct:()=>u.d,distinctUntilChanged:()=>d.F,distinctUntilKeyChanged:()=>m.w,elementAt:()=>N.s,endWith:()=>R.q,every:()=>B.S,exhaust:()=>w.B,exhaustAll:()=>X.C,exhaustMap:()=>b.p,expand:()=>J.f,filter:()=>K.p,finalize:()=>z.j,find:()=>Y.I,findIndex:()=>k.S,first:()=>lt.$,flatMap:()=>e.q,groupBy:()=>H.$,ignoreElements:()=>q.w,isEmpty:()=>tt.I,last:()=>Z.H,map:()=>nt.T,mapTo:()=>et.u,materialize:()=>G.O,max:()=>rt.T,merge:()=>ot.h,mergeAll:()=>t.U,mergeMap:()=>v.Z,mergeMapTo:()=>s.C,mergeScan:()=>V.i,mergeWith:()=>it.X,min:()=>at.j,multicast:()=>st.f,observeOn:()=>A.Q,onErrorResumeNext:()=>mt.g,pairwise:()=>dt.J,partition:()=>ht,pluck:()=>pt.E,publish:()=>gt.m,publishBehavior:()=>yt.K,publishLast:()=>Et.k,publishReplay:()=>Ct.H,race:()=>Tt,raceWith:()=>ut.w,reduce:()=>Nt.T,refCount:()=>Wt.B,repeat:()=>xt.u,repeatWhen:()=>It.Y,retry:()=>Ot.L,retryWhen:()=>At.l,sample:()=>Pt.X,sampleTime:()=>Lt.q,scan:()=>Rt.S,sequenceEqual:()=>Mt.m,share:()=>Ut.u,shareReplay:()=>Dt.t,single:()=>jt.J,skip:()=>Ft.i,skipLast:()=>Bt.G,skipUntil:()=>Vt.U,skipWhile:()=>wt.j,startWith:()=>zt.Z,subscribeOn:()=>Kt._,switchAll:()=>Gt.w,switchMap:()=>$t.n,switchMapTo:()=>bt.K,switchScan:()=>Jt.m,take:()=>Ht.s,takeLast:()=>Zt.o,takeUntil:()=>Qt.Q,takeWhile:()=>Xt.v,tap:()=>Yt.M,throttle:()=>kt.n,throttleTime:()=>qt.c,throwIfEmpty:()=>_t.v,timeInterval:()=>tn.f,timeout:()=>nn.w,timeoutWith:()=>en.o,timestamp:()=>rn.v,toArray:()=>on.$,window:()=>an.x,windowCount:()=>sn.k,windowTime:()=>ln.s,windowToggle:()=>un.J,windowWhen:()=>cn.p,withLatestFrom:()=>fn.E,zip:()=>mn.y,zipAll:()=>dn.x,zipWith:()=>vn.O});var l=n(4461),h=n(3528),O=n(1186),x=n(1559),f=n(2759),j=n(306),W=n(4366),F=n(6159),C=n(1772),y=n(2013),I=n(2772),E=n(6236),S=n(2776),U=n(6313),r=n(792),a=n(7465),o=n(3808),c=n(697),p=n(445),P=n(5111),L=n(2290),D=n(8751),T=n(6389),g=n(1765),i=n(9546),u=n(6372),d=n(412),m=n(9235),N=n(3119),R=n(8407),B=n(7489),w=n(2856),X=n(7849),b=n(2248),J=n(7608),K=n(6670),z=n(2970),Y=n(8887),k=n(3979),lt=n(5100),H=n(2024),q=n(2959),tt=n(4619),Z=n(3464),nt=n(7928),et=n(5753),G=n(5851),rt=n(3360),ot=n(546),t=n(6759),e=n(4805),v=n(2678),s=n(4315),V=n(3795),it=n(1262),at=n(9070),st=n(4224),A=n(8071),mt=n(6457),dt=n(6552),vt=n(7848);function ht(Q,ct){return ft=>[(0,K.p)(Q,ct)(ft),(0,K.p)((0,vt.A)(Q,ct))(ft)]}var pt=n(4403),gt=n(8829),yt=n(2091),Et=n(6825),Ct=n(2806),St=n(7636),ut=n(517);function Tt(...Q){return(0,ut.w)(...(0,St.K)(Q))}var Nt=n(1766),xt=n(8611),It=n(7195),Ot=n(8168),At=n(5188),Wt=n(5912),Pt=n(1082),Lt=n(4415),Rt=n(9949),Mt=n(1705),Ut=n(6013),Dt=n(1238),jt=n(4512),Ft=n(4471),Bt=n(7703),Vt=n(3543),wt=n(5742),zt=n(9422),Kt=n(5983),Gt=n(5961),$t=n(4616),bt=n(7353),Jt=n(8845),Ht=n(8607),Zt=n(8927),Qt=n(8319),Xt=n(9814),Yt=n(2571),kt=n(9184),qt=n(8413),_t=n(7544),tn=n(6220),nn=n(7089),en=n(3669),rn=n(2794),on=n(9324),an=n(5896),sn=n(8125),ln=n(6773),un=n(900),cn=n(2164),fn=n(543),mn=n(8381),dn=n(4082),vn=n(9697)},7833:($,M,n)=>{function l(t,e){return Object.is(t,e)}n.r(M),n.d(M,{REACTIVE_NODE:()=>y,SIGNAL:()=>f,SIGNAL_NODE:()=>Z,consumerAfterComputation:()=>p,consumerBeforeComputation:()=>c,consumerDestroy:()=>L,consumerMarkDirty:()=>a,consumerPollProducersForChange:()=>P,createComputed:()=>m,createSignal:()=>Y,createWatch:()=>et,defaultEquals:()=>l,getActiveConsumer:()=>W,isInNotificationPhase:()=>F,isReactive:()=>C,producerAccessed:()=>I,producerIncrementEpoch:()=>E,producerMarkClean:()=>o,producerNotifyConsumers:()=>U,producerUpdateValueVersion:()=>S,producerUpdatesAllowed:()=>r,runPostSignalSetFn:()=>tt,setActiveConsumer:()=>j,setAlternateWeakRefImpl:()=>ot,setPostSignalSetFn:()=>k,setThrowInvalidWriteToSignalError:()=>K,signalSetFn:()=>H,signalUpdateFn:()=>q});let h=null,O=!1,x=1;const f=Symbol("SIGNAL");function j(t){const e=h;return h=t,e}function W(){return h}function F(){return O}function C(t){return void 0!==t[f]}const y={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function I(t){if(O)throw new Error("");if(null===h)return;h.consumerOnSignalRead(t);const e=h.nextProducerIndex++;if(i(h),e<h.producerNode.length&&h.producerNode[e]!==t&&g(h)){T(h.producerNode[e],h.producerIndexOfThis[e])}h.producerNode[e]!==t&&(h.producerNode[e]=t,h.producerIndexOfThis[e]=g(h)?D(t,h,e):0),h.producerLastReadVersion[e]=t.version}function E(){x++}function S(t){if((!g(t)||t.dirty)&&(t.dirty||t.lastCleanEpoch!==x)){if(!t.producerMustRecompute(t)&&!P(t))return void o(t);t.producerRecomputeValue(t),o(t)}}function U(t){if(void 0===t.liveConsumerNode)return;const e=O;O=!0;try{for(const v of t.liveConsumerNode)v.dirty||a(v)}finally{O=e}}function r(){return!1!==h?.consumerAllowSignalWrites}function a(t){t.dirty=!0,U(t),t.consumerMarkedDirty?.(t)}function o(t){t.dirty=!1,t.lastCleanEpoch=x}function c(t){return t&&(t.nextProducerIndex=0),j(t)}function p(t,e){if(j(e),t&&void 0!==t.producerNode&&void 0!==t.producerIndexOfThis&&void 0!==t.producerLastReadVersion){if(g(t))for(let v=t.nextProducerIndex;v<t.producerNode.length;v++)T(t.producerNode[v],t.producerIndexOfThis[v]);for(;t.producerNode.length>t.nextProducerIndex;)t.producerNode.pop(),t.producerLastReadVersion.pop(),t.producerIndexOfThis.pop()}}function P(t){i(t);for(let e=0;e<t.producerNode.length;e++){const v=t.producerNode[e],s=t.producerLastReadVersion[e];if(s!==v.version||(S(v),s!==v.version))return!0}return!1}function L(t){if(i(t),g(t))for(let e=0;e<t.producerNode.length;e++)T(t.producerNode[e],t.producerIndexOfThis[e]);t.producerNode.length=t.producerLastReadVersion.length=t.producerIndexOfThis.length=0,t.liveConsumerNode&&(t.liveConsumerNode.length=t.liveConsumerIndexOfThis.length=0)}function D(t,e,v){if(u(t),0===t.liveConsumerNode.length&&d(t))for(let s=0;s<t.producerNode.length;s++)t.producerIndexOfThis[s]=D(t.producerNode[s],t,s);return t.liveConsumerIndexOfThis.push(v),t.liveConsumerNode.push(e)-1}function T(t,e){if(u(t),1===t.liveConsumerNode.length&&d(t))for(let s=0;s<t.producerNode.length;s++)T(t.producerNode[s],t.producerIndexOfThis[s]);const v=t.liveConsumerNode.length-1;if(t.liveConsumerNode[e]=t.liveConsumerNode[v],t.liveConsumerIndexOfThis[e]=t.liveConsumerIndexOfThis[v],t.liveConsumerNode.length--,t.liveConsumerIndexOfThis.length--,e<t.liveConsumerNode.length){const s=t.liveConsumerIndexOfThis[e],V=t.liveConsumerNode[e];i(V),V.producerIndexOfThis[s]=e}}function g(t){return t.consumerIsAlwaysLive||(t?.liveConsumerNode?.length??0)>0}function i(t){t.producerNode??=[],t.producerIndexOfThis??=[],t.producerLastReadVersion??=[]}function u(t){t.liveConsumerNode??=[],t.liveConsumerIndexOfThis??=[]}function d(t){return void 0!==t.producerNode}function m(t){const e=Object.create(w);e.computation=t;const v=()=>{if(S(e),I(e),e.value===B)throw e.error;return e.value};return v[f]=e,v}const N=Symbol("UNSET"),R=Symbol("COMPUTING"),B=Symbol("ERRORED"),w={...y,value:N,dirty:!0,error:null,equal:l,producerMustRecompute:t=>t.value===N||t.value===R,producerRecomputeValue(t){if(t.value===R)throw new Error("Detected cycle in computations.");const e=t.value;t.value=R;const v=c(t);let s;try{s=t.computation()}catch(V){s=B,t.error=V}finally{p(t,v)}e!==N&&e!==B&&s!==B&&t.equal(e,s)?t.value=e:(t.value=s,t.version++)}};let b=function X(){throw new Error};function J(){b()}function K(t){b=t}let z=null;function Y(t){const e=Object.create(Z);e.value=t;const v=()=>(I(e),e.value);return v[f]=e,v}function k(t){const e=z;return z=t,e}function H(t,e){r()||J(),t.equal(t.value,e)||(t.value=e,function nt(t){t.version++,E(),U(t),z?.()}(t))}function q(t,e){r()||J(),H(t,e(t.value))}function tt(){z?.()}const Z={...y,equal:l,value:void 0};function et(t,e,v){const s=Object.create(rt);v&&(s.consumerAllowSignalWrites=!0),s.fn=t,s.schedule=e;const V=A=>{s.cleanupFn=A};return s.ref={notify:()=>a(s),run:()=>{if(null===s.fn)return;if(F())throw new Error("Schedulers cannot synchronously execute watches while scheduling.");if(s.dirty=!1,s.hasRun&&!P(s))return;s.hasRun=!0;const A=c(s);try{s.cleanupFn(),s.cleanupFn=G,s.fn(V)}finally{p(s,A)}},cleanup:()=>s.cleanupFn(),destroy:()=>function at(A){(function it(A){return null===A.fn&&null===A.schedule})(A)||(L(A),A.cleanupFn(),A.fn=null,A.schedule=null,A.cleanupFn=G)}(s),[f]:s},s.ref}const G=()=>{},rt={...y,consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!1,consumerMarkedDirty:t=>{null!==t.schedule&&t.schedule(t.ref)},hasRun:!1,cleanupFn:G};function ot(t){}},3959:($,M,n)=>{n.r(M),n.d(M,{Workbox:()=>U,WorkboxEvent:()=>C,messageSW:()=>l});try{self["workbox:window:7.2.0"]&&_()}catch{}function l(r,a){return new Promise(function(o){var c=new MessageChannel;c.port1.onmessage=function(p){o(p.data)},r.postMessage(a,[c.port2])})}function h(r){var a=function(o){if("object"!=typeof o||!o)return o;var p=o[Symbol.toPrimitive];if(void 0!==p){var P=p.call(o,"string");if("object"!=typeof P)return P;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(r);return"symbol"==typeof a?a:a+""}function O(r,a){for(var o=0;o<a.length;o++){var c=a[o];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(r,h(c.key),c)}}function x(r,a){return(x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,c){return o.__proto__=c,o})(r,a)}function f(r,a){(null==a||a>r.length)&&(a=r.length);for(var o=0,c=new Array(a);o<a;o++)c[o]=r[o];return c}try{self["workbox:core:7.2.0"]&&_()}catch{}var W=function(){var r=this;this.promise=new Promise(function(a,o){r.resolve=a,r.reject=o})};function F(r,a){var o=location.href;return new URL(r,o).href===new URL(a,o).href}var C=function(r,a){this.type=r,Object.assign(this,a)};function y(r,a,o){return o?a?a(r):r:(r&&r.then||(r=Promise.resolve(r)),a?r.then(a):r)}function I(){}var E={type:"SKIP_WAITING"};function S(r,a){if(!a)return r&&r.then?r.then(I):Promise.resolve()}var U=function(r){function a(T,g){var i,u;return void 0===g&&(g={}),(i=r.call(this)||this).nn={},i.tn=0,i.rn=new W,i.en=new W,i.on=new W,i.un=0,i.an=new Set,i.cn=function(){var d=i.fn,m=d.installing;i.tn>0||!F(m.scriptURL,i.sn.toString())||performance.now()>i.un+6e4?(i.vn=m,d.removeEventListener("updatefound",i.cn)):(i.hn=m,i.an.add(m),i.rn.resolve(m)),++i.tn,m.addEventListener("statechange",i.ln)},i.ln=function(d){var m=i.fn,N=d.target,R=N.state,B=N===i.vn,w={sw:N,isExternal:B,originalEvent:d};!B&&i.mn&&(w.isUpdate=!0),i.dispatchEvent(new C(R,w)),"installed"===R?i.wn=self.setTimeout(function(){"installed"===R&&m.waiting===N&&i.dispatchEvent(new C("waiting",w))},200):"activating"===R&&(clearTimeout(i.wn),B||i.en.resolve(N))},i.yn=function(d){var m=i.hn,N=m!==navigator.serviceWorker.controller;i.dispatchEvent(new C("controlling",{isExternal:N,originalEvent:d,sw:m,isUpdate:i.mn})),N||i.on.resolve(m)},i.gn=(u=function(d){var m=d.data,N=d.ports,R=d.source;return y(i.getSW(),function(){i.an.has(R)&&i.dispatchEvent(new C("message",{data:m,originalEvent:d,ports:N,sw:R}))})},function(){for(var d=[],m=0;m<arguments.length;m++)d[m]=arguments[m];try{return Promise.resolve(u.apply(this,d))}catch(N){return Promise.reject(N)}}),i.sn=T,i.nn=g,navigator.serviceWorker.addEventListener("message",i.gn),i}var o,c;c=r,(o=a).prototype=Object.create(c.prototype),o.prototype.constructor=o,x(o,c);var p,P,D=a.prototype;return D.register=function(T){var m,N,g=(void 0===T?{}:T).immediate,i=void 0!==g&&g;try{var u=this;return y((m=function(){return u.mn=!!navigator.serviceWorker.controller,u.dn=u.pn(),y(u.bn(),function(d){u.fn=d,u.dn&&(u.hn=u.dn,u.en.resolve(u.dn),u.on.resolve(u.dn),u.dn.addEventListener("statechange",u.ln,{once:!0}));var m=u.fn.waiting;return m&&F(m.scriptURL,u.sn.toString())&&(u.hn=m,Promise.resolve().then(function(){u.dispatchEvent(new C("waiting",{sw:m,wasWaitingBeforeRegister:!0}))}).then(function(){})),u.hn&&(u.rn.resolve(u.hn),u.an.add(u.hn)),u.fn.addEventListener("updatefound",u.cn),navigator.serviceWorker.addEventListener("controllerchange",u.yn),u.fn})},(N=function(){if(!i&&"complete"!==document.readyState)return S(new Promise(function(d){return window.addEventListener("load",d)}))}())&&N.then?N.then(m):m()))}catch(d){return Promise.reject(d)}},D.update=function(){try{return this.fn?y(S(this.fn.update())):y()}catch(T){return Promise.reject(T)}},D.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},D.messageSW=function(T){try{return y(this.getSW(),function(g){return l(g,T)})}catch(g){return Promise.reject(g)}},D.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&l(this.fn.waiting,E)},D.pn=function(){var T=navigator.serviceWorker.controller;return T&&F(T.scriptURL,this.sn.toString())?T:void 0},D.bn=function(){try{var T=this;return y(function(g,i){try{var u=y(navigator.serviceWorker.register(T.sn,T.nn),function(g){return T.un=performance.now(),g})}catch(d){return i(d)}return u&&u.then?u.then(void 0,i):u}(0,function(g){throw g}))}catch(g){return Promise.reject(g)}},p=a,(P=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&O(p.prototype,P),Object.defineProperty(p,"prototype",{writable:!1}),p}(function(){function r(){this.Pn=new Map}var a=r.prototype;return a.addEventListener=function(o,c){this.jn(o).add(c)},a.removeEventListener=function(o,c){this.jn(o).delete(c)},a.dispatchEvent=function(o){o.target=this;for(var c,p=function j(r,a){var o=typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(o)return(o=o.call(r)).next.bind(o);if(Array.isArray(r)||(o=function(p,P){if(p){if("string"==typeof p)return f(p,P);var L=Object.prototype.toString.call(p).slice(8,-1);return"Object"===L&&p.constructor&&(L=p.constructor.name),"Map"===L||"Set"===L?Array.from(p):"Arguments"===L||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(L)?f(p,P):void 0}}(r))||a&&r&&"number"==typeof r.length){o&&(r=o);var c=0;return function(){return c>=r.length?{done:!0}:{done:!1,value:r[c++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(this.jn(o.type));!(c=p()).done;)(0,c.value)(o)},a.jn=function(o){return this.Pn.has(o)||this.Pn.set(o,new Set),this.Pn.get(o)},r}())}}]);