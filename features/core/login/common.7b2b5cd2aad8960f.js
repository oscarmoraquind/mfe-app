(self.webpackChunklogin=self.webpackChunklogin||[]).push([[76],{4335:(z,N,t)=>{t.d(N,{U:()=>T});var u=t(2424),h=t(3352),S=t(9895);function o(f,p){1&f&&(u.\u0275\u0275elementStart(0,"div"),u.\u0275\u0275element(1,"pi-component",3),u.\u0275\u0275elementEnd())}function n(f,p){1&f&&(u.\u0275\u0275elementStart(0,"div"),u.\u0275\u0275element(1,"pi-component",4),u.\u0275\u0275elementEnd())}function P(f,p){1&f&&(u.\u0275\u0275elementStart(0,"div"),u.\u0275\u0275element(1,"pi-component",5),u.\u0275\u0275elementEnd())}function M(f,p){1&f&&(u.\u0275\u0275elementStart(0,"div"),u.\u0275\u0275element(1,"pi-component",6),u.\u0275\u0275elementEnd())}function W(f,p){1&f&&(u.\u0275\u0275elementStart(0,"div"),u.\u0275\u0275element(1,"pi-component",3),u.\u0275\u0275elementEnd())}class g{constructor(p){this.route=p,this.mfeParam=null}ngOnInit(){this.route.queryParams.subscribe(p=>{this.mfeParam=p.mfe||null})}static{this.\u0275fac=function(c){return new(c||g)(u.\u0275\u0275directiveInject(h.ActivatedRoute))}}static{this.\u0275cmp=u.\u0275\u0275defineComponent({type:g,selectors:[["app-mfe-container"]],decls:6,vars:5,consts:[[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["name","login","source","https://oscarmoraquind.github.io/mfe-app/features/core/login/mf-manifest.json","format","module"],["name","signup","source","https://oscarmoraquind.github.io/mfe-app/features/core/login/mf-manifest.json","format","module"],["name","signin","source","https://oscarmoraquind.github.io/mfe-app/features/core/login/mf-manifest.json","format","module"],["name","confirm","source","https://oscarmoraquind.github.io/mfe-app/features/core/login/mf-manifest.json","format","module"]],template:function(c,r){1&c&&(u.\u0275\u0275elementStart(0,"div",0),u.\u0275\u0275template(1,o,2,0,"div",1)(2,n,2,0,"div",1)(3,P,2,0,"div",1)(4,M,2,0,"div",1)(5,W,2,0,"div",2),u.\u0275\u0275elementEnd()),2&c&&(u.\u0275\u0275property("ngSwitch",r.mfeParam),u.\u0275\u0275advance(),u.\u0275\u0275property("ngSwitchCase","login"),u.\u0275\u0275advance(),u.\u0275\u0275property("ngSwitchCase","signup"),u.\u0275\u0275advance(),u.\u0275\u0275property("ngSwitchCase","signin"),u.\u0275\u0275advance(),u.\u0275\u0275property("ngSwitchCase","confirm"))},dependencies:[S.CommonModule,S.NgSwitch,S.NgSwitchCase,S.NgSwitchDefault],encapsulation:2})}}const x=[{path:"",component:g},{path:"login",loadChildren:()=>Promise.all([t.e(61),t.e(69),t.e(467),t.e(76)]).then(t.bind(t,129)).then(f=>f.remoteRoutes)},{path:"signup",loadChildren:()=>Promise.all([t.e(61),t.e(69),t.e(467),t.e(76),t.e(123)]).then(t.bind(t,2123)).then(f=>f.remoteRoutes)},{path:"confirm",loadChildren:()=>Promise.all([t.e(61),t.e(69),t.e(467),t.e(76),t.e(365)]).then(t.bind(t,7365)).then(f=>f.remoteRoutes)}],T={providers:[(0,u.provideZoneChangeDetection)({eventCoalescing:!0}),(0,h.provideRouter)(x)]}},9660:(z,N,t)=>{t.d(N,{$:()=>T});var u=t(8885),h=t(9895),o=t(6467),n=t(2424);function M(f,p){if(1&f){const c=n.\u0275\u0275getCurrentView();n.\u0275\u0275elementContainerStart(0),n.\u0275\u0275elementStart(1,"bq-grid")(2,"bq-row")(3,"bq-col",3)(4,"bq-tag",4),n.\u0275\u0275element(5,"bq-icon",5),n.\u0275\u0275elementEnd()()(),n.\u0275\u0275elementStart(6,"bq-row")(7,"bq-col",3)(8,"bq-text",6)(9,"p")(10,"b"),n.\u0275\u0275text(11,"Datos del usuario"),n.\u0275\u0275elementEnd()()()()(),n.\u0275\u0275elementStart(12,"bq-row")(13,"bq-col",3)(14,"bq-text")(15,"b"),n.\u0275\u0275text(16,"Email:"),n.\u0275\u0275elementEnd(),n.\u0275\u0275text(17),n.\u0275\u0275elementEnd(),n.\u0275\u0275element(18,"br"),n.\u0275\u0275elementStart(19,"bq-text")(20,"b"),n.\u0275\u0275text(21,"Nombre:"),n.\u0275\u0275elementEnd(),n.\u0275\u0275text(22),n.\u0275\u0275elementEnd(),n.\u0275\u0275element(23,"br"),n.\u0275\u0275elementStart(24,"bq-text")(25,"b"),n.\u0275\u0275text(26,"Documento:"),n.\u0275\u0275elementEnd(),n.\u0275\u0275text(27),n.\u0275\u0275elementEnd()()(),n.\u0275\u0275elementStart(28,"bq-row")(29,"bq-col",7)(30,"bq-button",8),n.\u0275\u0275listener("click",function(){n.\u0275\u0275restoreView(c);const s=n.\u0275\u0275nextContext(2);return n.\u0275\u0275resetView(s.logout())}),n.\u0275\u0275text(31,"Cerrar sesi\xf3n"),n.\u0275\u0275elementEnd()()()(),n.\u0275\u0275elementContainerEnd()}if(2&f){const c=n.\u0275\u0275nextContext(2);n.\u0275\u0275advance(17),n.\u0275\u0275textInterpolate1(" ",null==c.userInfo||null==c.userInfo.secureUser||null==c.userInfo.secureUser.person?null:c.userInfo.secureUser.person.email," "),n.\u0275\u0275advance(5),n.\u0275\u0275textInterpolate1(" ",(null==c.userInfo||null==c.userInfo.secureUser||null==c.userInfo.secureUser.person?null:c.userInfo.secureUser.person.fullName)||(null==c.userInfo||null==c.userInfo.secureUser||null==c.userInfo.secureUser.person?null:c.userInfo.secureUser.person.registeredName)," "),n.\u0275\u0275advance(5),n.\u0275\u0275textInterpolate2(" ",null==c.userInfo||null==c.userInfo.secureUser||null==c.userInfo.secureUser.person?null:c.userInfo.secureUser.person.documentType," - ",null==c.userInfo||null==c.userInfo.secureUser||null==c.userInfo.secureUser.person?null:c.userInfo.secureUser.person.document," ")}}function W(f,p){1&f&&(n.\u0275\u0275elementStart(0,"bq-grid")(1,"bq-row")(2,"bq-col",3)(3,"bq-text"),n.\u0275\u0275text(4,"Cargando datos del usuario..."),n.\u0275\u0275elementEnd()()()())}function g(f,p){if(1&f&&(n.\u0275\u0275elementContainerStart(0),n.\u0275\u0275template(1,M,32,4,"ng-container",2)(2,W,5,0,"ng-template",null,1,n.\u0275\u0275templateRefExtractor),n.\u0275\u0275elementContainerEnd()),2&f){const c=n.\u0275\u0275reference(3),r=n.\u0275\u0275nextContext();n.\u0275\u0275advance(),n.\u0275\u0275property("ngIf",r.userInfo)("ngIfElse",c)}}function x(f,p){1&f&&(n.\u0275\u0275elementStart(0,"bq-grid")(1,"bq-row")(2,"bq-col",3)(3,"bq-text"),n.\u0275\u0275text(4,"Sin token v\xe1lido"),n.\u0275\u0275elementEnd()()()())}class T{constructor(){this.global=globalThis,this.hasToken=!1,this.userInfo=null}ngOnInit(){const p=this.getCookie("flypass_access_token")||sessionStorage.getItem("flypass_token");p?(this.hasToken=!0,this.fetchUserInformation(p)):this.global?.AppEvent?.postMessage(JSON.stringify({event:"LoginFallido"}))}fetchUserInformation(p){fetch("https://test.security.flypass.co/flypass/user-service/userinformation",{method:"GET",headers:{Authorization:`Bearer ${p}`}}).then(function(){var c=(0,u.A)(function*(r){if(!r.ok)throw new Error(`Error en petici\xf3n: ${r.status} - ${r.statusText}`);return r.json()});return function(r){return c.apply(this,arguments)}}()).then(c=>{this.userInfo=c.body}).catch(c=>{console.error("Error al obtener la informaci\xf3n del usuario:",c)})}logout(){document.cookie="flypass_access_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT",this.global?.AppEvent?.postMessage(JSON.stringify({event:"LoginFallido"}))}getCookie(p){const r=`; ${document.cookie}`.split(`; ${p}=`);if(2===r.length)return r.pop()?.split(";").shift()}static{this.\u0275fac=function(c){return new(c||T)}}static{this.\u0275cmp=n.\u0275\u0275defineComponent({type:T,selectors:[["app-confirm-entry"],["pi-component","name","confirm"]],decls:3,vars:2,consts:[["noToken",""],["loading",""],[4,"ngIf","ngIfElse"],[2,"text-align","center"],["color","white"],["name","envelope-simple","color","brand"],["size","xl"],[2,"text-align","center","margin-top","1rem"],["appearance","secondary",3,"click"]],template:function(c,r){if(1&c&&n.\u0275\u0275template(0,g,4,2,"ng-container",2)(1,x,5,0,"ng-template",null,0,n.\u0275\u0275templateRefExtractor),2&c){const s=n.\u0275\u0275reference(2);n.\u0275\u0275property("ngIf",r.hasToken)("ngIfElse",s)}},dependencies:[h.CommonModule,h.NgIf,o.U$,o.aU,o.AD,o.cC,o.dv,o.W6,o.jT],encapsulation:2})}}},3880:(z,N,t)=>{t.d(N,{M:()=>M});var u=t(8885),h=t(9895),o=t(6467),n=t(2424);class M{constructor(){this.global=globalThis,this.docNumber=""}onDocumentInput(g){const x=g.target;this.docNumber=x.value}checkIfUserExists(){var g=this;const x=`https://test.security.flypass.co/flypass/user-service/loginExists/${this.docNumber}`;fetch(x,{method:"GET"}).then(function(){var T=(0,u.A)(function*(f){if(!f.ok)throw new Error(`Error en petici\xf3n: ${f.status} - ${f.statusText}`);const p=yield f.json();1===p?.body?(g.global?.AppEvent?.postMessage(JSON.stringify({event:"LoginExitoso",value:g.docNumber})),console.log("Usuario existe:",p)):g.global?.AppEvent?.postMessage(JSON.stringify({event:"LoginFallido",value:g.docNumber}))});return function(f){return T.apply(this,arguments)}}()).catch(T=>{console.error("Ocurri\xf3 un error:",T.message),alert("No fue posible validar tu usuario. Intenta m\xe1s tarde.")})}signupUser(){this.global?.AppEvent?.postMessage(JSON.stringify({event:"RegistroExitoso"}))}getCookie(g){const T=`; ${document.cookie}`.split(`; ${g}=`);if(2===T.length)return T.pop().split(";").shift()}ngOnInit(){this.getCookie("flypass_access_token")&&(alert("isLogged"),this.global?.AppEvent?.postMessage(JSON.stringify({event:"LoginFinish",value:this.getCookie("flypass_access_token")})))}static{this.\u0275fac=function(x){return new(x||M)}}static{this.\u0275cmp=n.\u0275\u0275defineComponent({type:M,selectors:[["app-login-entry"],["pi-component","name","login"]],decls:22,vars:0,consts:[[2,"text-align","center"],["size","small","type","logo","variant","full-color"],["autocapitalize","off","autocomplete","off","autocorrect","off","inputmode","text","name","bq-input","placeholder","Escribe tu documento","type","text",3,"input"],["slot","label",1,"flex","flex-grow","items-center"],["block","",3,"click"],["href","#"],["textColor","text--alt",3,"click"]],template:function(x,T){1&x&&(n.\u0275\u0275elementStart(0,"bq-grid")(1,"bq-row")(2,"bq-col",0),n.\u0275\u0275element(3,"bq-logo",1),n.\u0275\u0275elementEnd()(),n.\u0275\u0275elementStart(4,"bq-row")(5,"bq-col")(6,"bq-input",2),n.\u0275\u0275listener("input",function(p){return T.onDocumentInput(p)}),n.\u0275\u0275elementStart(7,"label",3),n.\u0275\u0275text(8," Documento "),n.\u0275\u0275elementEnd()()()(),n.\u0275\u0275elementStart(9,"bq-row")(10,"bq-col")(11,"bq-button",4),n.\u0275\u0275listener("click",function(){return T.checkIfUserExists()}),n.\u0275\u0275text(12,"Continuar"),n.\u0275\u0275elementEnd()()(),n.\u0275\u0275elementStart(13,"bq-row")(14,"bq-col",0)(15,"bq-text"),n.\u0275\u0275text(16,"\xbfEres nuevo en Flypass?"),n.\u0275\u0275elementEnd()()(),n.\u0275\u0275elementStart(17,"bq-row")(18,"bq-col",0)(19,"a",5)(20,"bq-text",6),n.\u0275\u0275listener("click",function(){return T.signupUser()}),n.\u0275\u0275text(21,"Reg\xedstrate"),n.\u0275\u0275elementEnd()()()()())},dependencies:[h.CommonModule,o.U$,o.oB,o.nk,o.aU,o.AD,o.cC,o.dv],encapsulation:2})}}},129:(z,N,t)=>{t.r(N),t.d(N,{remoteRoutes:()=>h});const h=[{path:"",component:t(3880).M}]},4830:(z,N,t)=>{t.d(N,{$:()=>P});var u=t(9895),S=t(6467),o=t(2424);class P{static{this.\u0275fac=function(g){return new(g||P)}}static{this.\u0275cmp=o.\u0275\u0275defineComponent({type:P,selectors:[["app-signup-entry"],["pi-component","name","signup"]],decls:69,vars:0,consts:[[2,"text-align","center"],["autocapitalize","off","autocomplete","off","autocorrect","off","inputmode","text","name","bq-input","placeholder","Escribe tu nombre","type","text"],["slot","label",1,"flex","flex-grow","items-center"],["autocapitalize","off","autocomplete","off","autocorrect","off","inputmode","text","name","bq-input","placeholder","Escribe tus apellidos","type","text"],["size","6"],["placeholder","Selecciona uno"],["slot","label"],["value","CC"],["value","TI"],["autocapitalize","off","autocomplete","off","autocorrect","off","inputmode","text","name","bq-input","placeholder","Escribe tu documento","type","text"],["autocapitalize","off","autocomplete","off","autocorrect","off","inputmode","text","name","bq-input","placeholder","Escribe tu celular","type","text"],["value","ANTIOQUIA"],["value","CUNDINAMARCA"],["value","MEDELLIN"],["value","BOGOTA"],["autocapitalize","off","autocomplete","off","autocorrect","off","inputmode","text","name","bq-input","placeholder","Escribe tu direcci\xf3n","type","text"],["autocapitalize","off","autocomplete","off","autocorrect","off","inputmode","text","name","bq-input","placeholder","Escribe tu correo electr\xf3nico","type","text"],["autocapitalize","off","autocomplete","off","autocorrect","off","inputmode","text","name","bq-input","placeholder","Escribe tu nueva contrase\xf1a","type","text"],["block",""]],template:function(g,x){1&g&&(o.\u0275\u0275elementStart(0,"bq-grid")(1,"bq-row")(2,"bq-col",0)(3,"bq-input",1)(4,"label",2),o.\u0275\u0275text(5," Nombre* "),o.\u0275\u0275elementEnd()()()(),o.\u0275\u0275elementStart(6,"bq-row")(7,"bq-col")(8,"bq-input",3)(9,"label",2),o.\u0275\u0275text(10," Apellidos* "),o.\u0275\u0275elementEnd()()()(),o.\u0275\u0275elementStart(11,"bq-row")(12,"bq-col",4)(13,"bq-select",5)(14,"label",6),o.\u0275\u0275text(15,"Tipo de documento*"),o.\u0275\u0275elementEnd(),o.\u0275\u0275elementStart(16,"bq-option",7),o.\u0275\u0275text(17,"CC"),o.\u0275\u0275elementEnd(),o.\u0275\u0275elementStart(18,"bq-option",8),o.\u0275\u0275text(19,"TI"),o.\u0275\u0275elementEnd()()(),o.\u0275\u0275elementStart(20,"bq-col",4)(21,"bq-input",9)(22,"label",2),o.\u0275\u0275text(23," N\xfamero de documento* "),o.\u0275\u0275elementEnd()()()(),o.\u0275\u0275elementStart(24,"bq-row")(25,"bq-col")(26,"bq-input",10)(27,"label",2),o.\u0275\u0275text(28," Celular* "),o.\u0275\u0275elementEnd()()()(),o.\u0275\u0275elementStart(29,"bq-row")(30,"bq-col",4)(31,"bq-select",5)(32,"label",6),o.\u0275\u0275text(33,"Departamento*"),o.\u0275\u0275elementEnd(),o.\u0275\u0275elementStart(34,"bq-option",11),o.\u0275\u0275text(35,"Antioquia"),o.\u0275\u0275elementEnd(),o.\u0275\u0275elementStart(36,"bq-option",12),o.\u0275\u0275text(37,"Cundinamarca"),o.\u0275\u0275elementEnd()()(),o.\u0275\u0275elementStart(38,"bq-col",4)(39,"bq-select",5)(40,"label",6),o.\u0275\u0275text(41,"Ciudad*"),o.\u0275\u0275elementEnd(),o.\u0275\u0275elementStart(42,"bq-option",13),o.\u0275\u0275text(43,"Medell\xedn"),o.\u0275\u0275elementEnd(),o.\u0275\u0275elementStart(44,"bq-option",14),o.\u0275\u0275text(45,"Bogot\xe1"),o.\u0275\u0275elementEnd()()()(),o.\u0275\u0275elementStart(46,"bq-row")(47,"bq-col")(48,"bq-input",15)(49,"label",2),o.\u0275\u0275text(50," Direcci\xf3n* "),o.\u0275\u0275elementEnd()()()(),o.\u0275\u0275elementStart(51,"bq-row")(52,"bq-col")(53,"bq-input",16)(54,"label",2),o.\u0275\u0275text(55," Correo electr\xf3nico* "),o.\u0275\u0275elementEnd()()()(),o.\u0275\u0275elementStart(56,"bq-row")(57,"bq-col")(58,"bq-input",17)(59,"label",2),o.\u0275\u0275text(60," Contrase\xf1a nueva* "),o.\u0275\u0275elementEnd()()()(),o.\u0275\u0275elementStart(61,"bq-row")(62,"bq-col")(63,"bq-checkbox"),o.\u0275\u0275text(64,"Acepto las pol\xedticas de privacidad y t\xe9rminos condiciones"),o.\u0275\u0275elementEnd()()(),o.\u0275\u0275elementStart(65,"bq-row")(66,"bq-col")(67,"bq-button",18),o.\u0275\u0275text(68,"Registrarme"),o.\u0275\u0275elementEnd()()()())},dependencies:[u.CommonModule,S.U$,S.oB,S.aU,S.AD,S.cC,S.ED,S.v3,S.D3],encapsulation:2})}}},1182:(z,N,t)=>{t.r(N),t.d(N,{audit:()=>u.s,auditTime:()=>h.Z,buffer:()=>S.r,bufferCount:()=>o.S,bufferTime:()=>n.w,bufferToggle:()=>P.H,bufferWhen:()=>M.n,catchError:()=>W.W,combineAll:()=>g.p,combineLatest:()=>T.z,combineLatestAll:()=>x.A,combineLatestWith:()=>f.v,concat:()=>p.x,concatAll:()=>c.K,concatMap:()=>r.H,concatMapTo:()=>s.S,concatWith:()=>i.$,connect:()=>v.N,count:()=>I.U,debounce:()=>U.s,debounceTime:()=>D.B,defaultIfEmpty:()=>j.U,delay:()=>b.c,delayWhen:()=>O.o,dematerialize:()=>l.Z,distinct:()=>d.d,distinctUntilChanged:()=>y.F,distinctUntilKeyChanged:()=>E.w,elementAt:()=>A.s,endWith:()=>L.q,every:()=>F.S,exhaust:()=>K.B,exhaustAll:()=>X.C,exhaustMap:()=>w.p,expand:()=>J.f,filter:()=>$.p,finalize:()=>V.j,find:()=>Y.I,findIndex:()=>q.S,first:()=>st.$,flatMap:()=>a.q,groupBy:()=>H.$,ignoreElements:()=>k.w,isEmpty:()=>tt.I,last:()=>Z.H,map:()=>et.T,mapTo:()=>nt.u,materialize:()=>G.O,max:()=>ot.T,merge:()=>rt.h,mergeAll:()=>e.U,mergeMap:()=>C.Z,mergeMapTo:()=>m.C,mergeScan:()=>B.i,mergeWith:()=>at.X,min:()=>it.j,multicast:()=>lt.f,observeOn:()=>R.Q,onErrorResumeNext:()=>ft.g,pairwise:()=>dt.J,partition:()=>pt,pluck:()=>ht.E,publish:()=>gt.m,publishBehavior:()=>Et.K,publishLast:()=>yt.k,publishReplay:()=>Ct.H,race:()=>It,raceWith:()=>ut.w,reduce:()=>St.T,refCount:()=>Nt.B,repeat:()=>Tt.u,repeatWhen:()=>Ot.Y,retry:()=>bt.L,retryWhen:()=>At.l,sample:()=>Pt.X,sampleTime:()=>Mt.q,scan:()=>Rt.S,sequenceEqual:()=>Wt.m,share:()=>Ut.u,shareReplay:()=>Dt.t,single:()=>Lt.J,skip:()=>jt.i,skipLast:()=>Ft.G,skipUntil:()=>Bt.U,skipWhile:()=>zt.j,startWith:()=>Kt.Z,subscribeOn:()=>Vt._,switchAll:()=>$t.w,switchMap:()=>Gt.n,switchMapTo:()=>wt.K,switchScan:()=>Jt.m,take:()=>Ht.s,takeLast:()=>Zt.o,takeUntil:()=>Qt.Q,takeWhile:()=>Xt.v,tap:()=>Yt.M,throttle:()=>qt.n,throttleTime:()=>kt.c,throwIfEmpty:()=>_t.v,timeInterval:()=>te.f,timeout:()=>ee.w,timeoutWith:()=>ne.o,timestamp:()=>oe.v,toArray:()=>re.$,window:()=>ae.x,windowCount:()=>ie.k,windowTime:()=>le.s,windowToggle:()=>se.J,windowWhen:()=>ue.p,withLatestFrom:()=>ce.E,zip:()=>me.y,zipAll:()=>fe.x,zipWith:()=>de.O});var u=t(4461),h=t(3528),S=t(1186),o=t(1559),n=t(2759),P=t(306),M=t(4366),W=t(6159),g=t(1772),x=t(2013),T=t(2772),f=t(6236),p=t(2776),c=t(6313),r=t(792),s=t(7465),i=t(3808),v=t(697),I=t(445),U=t(5111),D=t(2290),j=t(8751),b=t(6389),O=t(1765),l=t(9546),d=t(6372),y=t(412),E=t(9235),A=t(3119),L=t(8407),F=t(7489),K=t(2856),X=t(7849),w=t(2248),J=t(7608),$=t(6670),V=t(2970),Y=t(8887),q=t(3979),st=t(5100),H=t(2024),k=t(2959),tt=t(4619),Z=t(3464),et=t(7928),nt=t(5753),G=t(5851),ot=t(3360),rt=t(546),e=t(6759),a=t(4805),C=t(2678),m=t(4315),B=t(3795),at=t(1262),it=t(9070),lt=t(4224),R=t(8071),ft=t(6457),dt=t(6552),vt=t(7848);function pt(Q,ct){return mt=>[(0,$.p)(Q,ct)(mt),(0,$.p)((0,vt.A)(Q,ct))(mt)]}var ht=t(4403),gt=t(8829),Et=t(2091),yt=t(6825),Ct=t(2806),xt=t(7636),ut=t(517);function It(...Q){return(0,ut.w)(...(0,xt.K)(Q))}var St=t(1766),Tt=t(8611),Ot=t(7195),bt=t(8168),At=t(5188),Nt=t(5912),Pt=t(1082),Mt=t(4415),Rt=t(9949),Wt=t(1705),Ut=t(6013),Dt=t(1238),Lt=t(4512),jt=t(4471),Ft=t(7703),Bt=t(3543),zt=t(5742),Kt=t(9422),Vt=t(5983),$t=t(5961),Gt=t(4616),wt=t(7353),Jt=t(8845),Ht=t(8607),Zt=t(8927),Qt=t(8319),Xt=t(9814),Yt=t(2571),qt=t(9184),kt=t(8413),_t=t(7544),te=t(6220),ee=t(7089),ne=t(3669),oe=t(2794),re=t(9324),ae=t(5896),ie=t(8125),le=t(6773),se=t(900),ue=t(2164),ce=t(543),me=t(8381),fe=t(4082),de=t(9697)},7833:(z,N,t)=>{function u(e,a){return Object.is(e,a)}t.r(N),t.d(N,{REACTIVE_NODE:()=>x,SIGNAL:()=>n,SIGNAL_NODE:()=>Z,consumerAfterComputation:()=>I,consumerBeforeComputation:()=>v,consumerDestroy:()=>D,consumerMarkDirty:()=>s,consumerPollProducersForChange:()=>U,createComputed:()=>E,createSignal:()=>Y,createWatch:()=>nt,defaultEquals:()=>u,getActiveConsumer:()=>M,isInNotificationPhase:()=>W,isReactive:()=>g,producerAccessed:()=>T,producerIncrementEpoch:()=>f,producerMarkClean:()=>i,producerNotifyConsumers:()=>c,producerUpdateValueVersion:()=>p,producerUpdatesAllowed:()=>r,runPostSignalSetFn:()=>tt,setActiveConsumer:()=>P,setAlternateWeakRefImpl:()=>rt,setPostSignalSetFn:()=>q,setThrowInvalidWriteToSignalError:()=>$,signalSetFn:()=>H,signalUpdateFn:()=>k});let h=null,S=!1,o=1;const n=Symbol("SIGNAL");function P(e){const a=h;return h=e,a}function M(){return h}function W(){return S}function g(e){return void 0!==e[n]}const x={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function T(e){if(S)throw new Error("");if(null===h)return;h.consumerOnSignalRead(e);const a=h.nextProducerIndex++;if(l(h),a<h.producerNode.length&&h.producerNode[a]!==e&&O(h)){b(h.producerNode[a],h.producerIndexOfThis[a])}h.producerNode[a]!==e&&(h.producerNode[a]=e,h.producerIndexOfThis[a]=O(h)?j(e,h,a):0),h.producerLastReadVersion[a]=e.version}function f(){o++}function p(e){if((!O(e)||e.dirty)&&(e.dirty||e.lastCleanEpoch!==o)){if(!e.producerMustRecompute(e)&&!U(e))return void i(e);e.producerRecomputeValue(e),i(e)}}function c(e){if(void 0===e.liveConsumerNode)return;const a=S;S=!0;try{for(const C of e.liveConsumerNode)C.dirty||s(C)}finally{S=a}}function r(){return!1!==h?.consumerAllowSignalWrites}function s(e){e.dirty=!0,c(e),e.consumerMarkedDirty?.(e)}function i(e){e.dirty=!1,e.lastCleanEpoch=o}function v(e){return e&&(e.nextProducerIndex=0),P(e)}function I(e,a){if(P(a),e&&void 0!==e.producerNode&&void 0!==e.producerIndexOfThis&&void 0!==e.producerLastReadVersion){if(O(e))for(let C=e.nextProducerIndex;C<e.producerNode.length;C++)b(e.producerNode[C],e.producerIndexOfThis[C]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}function U(e){l(e);for(let a=0;a<e.producerNode.length;a++){const C=e.producerNode[a],m=e.producerLastReadVersion[a];if(m!==C.version||(p(C),m!==C.version))return!0}return!1}function D(e){if(l(e),O(e))for(let a=0;a<e.producerNode.length;a++)b(e.producerNode[a],e.producerIndexOfThis[a]);e.producerNode.length=e.producerLastReadVersion.length=e.producerIndexOfThis.length=0,e.liveConsumerNode&&(e.liveConsumerNode.length=e.liveConsumerIndexOfThis.length=0)}function j(e,a,C){if(d(e),0===e.liveConsumerNode.length&&y(e))for(let m=0;m<e.producerNode.length;m++)e.producerIndexOfThis[m]=j(e.producerNode[m],e,m);return e.liveConsumerIndexOfThis.push(C),e.liveConsumerNode.push(a)-1}function b(e,a){if(d(e),1===e.liveConsumerNode.length&&y(e))for(let m=0;m<e.producerNode.length;m++)b(e.producerNode[m],e.producerIndexOfThis[m]);const C=e.liveConsumerNode.length-1;if(e.liveConsumerNode[a]=e.liveConsumerNode[C],e.liveConsumerIndexOfThis[a]=e.liveConsumerIndexOfThis[C],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,a<e.liveConsumerNode.length){const m=e.liveConsumerIndexOfThis[a],B=e.liveConsumerNode[a];l(B),B.producerIndexOfThis[m]=a}}function O(e){return e.consumerIsAlwaysLive||(e?.liveConsumerNode?.length??0)>0}function l(e){e.producerNode??=[],e.producerIndexOfThis??=[],e.producerLastReadVersion??=[]}function d(e){e.liveConsumerNode??=[],e.liveConsumerIndexOfThis??=[]}function y(e){return void 0!==e.producerNode}function E(e){const a=Object.create(K);a.computation=e;const C=()=>{if(p(a),T(a),a.value===F)throw a.error;return a.value};return C[n]=a,C}const A=Symbol("UNSET"),L=Symbol("COMPUTING"),F=Symbol("ERRORED"),K={...x,value:A,dirty:!0,error:null,equal:u,producerMustRecompute:e=>e.value===A||e.value===L,producerRecomputeValue(e){if(e.value===L)throw new Error("Detected cycle in computations.");const a=e.value;e.value=L;const C=v(e);let m;try{m=e.computation()}catch(B){m=F,e.error=B}finally{I(e,C)}a!==A&&a!==F&&m!==F&&e.equal(a,m)?e.value=a:(e.value=m,e.version++)}};let w=function X(){throw new Error};function J(){w()}function $(e){w=e}let V=null;function Y(e){const a=Object.create(Z);a.value=e;const C=()=>(T(a),a.value);return C[n]=a,C}function q(e){const a=V;return V=e,a}function H(e,a){r()||J(),e.equal(e.value,a)||(e.value=a,function et(e){e.version++,f(),c(e),V?.()}(e))}function k(e,a){r()||J(),H(e,a(e.value))}function tt(){V?.()}const Z={...x,equal:u,value:void 0};function nt(e,a,C){const m=Object.create(ot);C&&(m.consumerAllowSignalWrites=!0),m.fn=e,m.schedule=a;const B=R=>{m.cleanupFn=R};return m.ref={notify:()=>s(m),run:()=>{if(null===m.fn)return;if(W())throw new Error("Schedulers cannot synchronously execute watches while scheduling.");if(m.dirty=!1,m.hasRun&&!U(m))return;m.hasRun=!0;const R=v(m);try{m.cleanupFn(),m.cleanupFn=G,m.fn(B)}finally{I(m,R)}},cleanup:()=>m.cleanupFn(),destroy:()=>function it(R){(function at(R){return null===R.fn&&null===R.schedule})(R)||(D(R),R.cleanupFn(),R.fn=null,R.schedule=null,R.cleanupFn=G)}(m),[n]:m},m.ref}const G=()=>{},ot={...x,consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!1,consumerMarkedDirty:e=>{null!==e.schedule&&e.schedule(e.ref)},hasRun:!1,cleanupFn:G};function rt(e){}},3959:(z,N,t)=>{t.r(N),t.d(N,{Workbox:()=>c,WorkboxEvent:()=>g,messageSW:()=>u});try{self["workbox:window:7.2.0"]&&_()}catch{}function u(r,s){return new Promise(function(i){var v=new MessageChannel;v.port1.onmessage=function(I){i(I.data)},r.postMessage(s,[v.port2])})}function h(r){var s=function(i){if("object"!=typeof i||!i)return i;var I=i[Symbol.toPrimitive];if(void 0!==I){var U=I.call(i,"string");if("object"!=typeof U)return U;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}(r);return"symbol"==typeof s?s:s+""}function S(r,s){for(var i=0;i<s.length;i++){var v=s[i];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(r,h(v.key),v)}}function o(r,s){return(o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,v){return i.__proto__=v,i})(r,s)}function n(r,s){(null==s||s>r.length)&&(s=r.length);for(var i=0,v=new Array(s);i<s;i++)v[i]=r[i];return v}try{self["workbox:core:7.2.0"]&&_()}catch{}var M=function(){var r=this;this.promise=new Promise(function(s,i){r.resolve=s,r.reject=i})};function W(r,s){var i=location.href;return new URL(r,i).href===new URL(s,i).href}var g=function(r,s){this.type=r,Object.assign(this,s)};function x(r,s,i){return i?s?s(r):r:(r&&r.then||(r=Promise.resolve(r)),s?r.then(s):r)}function T(){}var f={type:"SKIP_WAITING"};function p(r,s){if(!s)return r&&r.then?r.then(T):Promise.resolve()}var c=function(r){function s(b,O){var l,d;return void 0===O&&(O={}),(l=r.call(this)||this).nn={},l.tn=0,l.rn=new M,l.en=new M,l.on=new M,l.un=0,l.an=new Set,l.cn=function(){var y=l.fn,E=y.installing;l.tn>0||!W(E.scriptURL,l.sn.toString())||performance.now()>l.un+6e4?(l.vn=E,y.removeEventListener("updatefound",l.cn)):(l.hn=E,l.an.add(E),l.rn.resolve(E)),++l.tn,E.addEventListener("statechange",l.ln)},l.ln=function(y){var E=l.fn,A=y.target,L=A.state,F=A===l.vn,K={sw:A,isExternal:F,originalEvent:y};!F&&l.mn&&(K.isUpdate=!0),l.dispatchEvent(new g(L,K)),"installed"===L?l.wn=self.setTimeout(function(){"installed"===L&&E.waiting===A&&l.dispatchEvent(new g("waiting",K))},200):"activating"===L&&(clearTimeout(l.wn),F||l.en.resolve(A))},l.yn=function(y){var E=l.hn,A=E!==navigator.serviceWorker.controller;l.dispatchEvent(new g("controlling",{isExternal:A,originalEvent:y,sw:E,isUpdate:l.mn})),A||l.on.resolve(E)},l.gn=(d=function(y){var E=y.data,A=y.ports,L=y.source;return x(l.getSW(),function(){l.an.has(L)&&l.dispatchEvent(new g("message",{data:E,originalEvent:y,ports:A,sw:L}))})},function(){for(var y=[],E=0;E<arguments.length;E++)y[E]=arguments[E];try{return Promise.resolve(d.apply(this,y))}catch(A){return Promise.reject(A)}}),l.sn=b,l.nn=O,navigator.serviceWorker.addEventListener("message",l.gn),l}var i,v;v=r,(i=s).prototype=Object.create(v.prototype),i.prototype.constructor=i,o(i,v);var I,U,j=s.prototype;return j.register=function(b){var E,A,O=(void 0===b?{}:b).immediate,l=void 0!==O&&O;try{var d=this;return x((E=function(){return d.mn=!!navigator.serviceWorker.controller,d.dn=d.pn(),x(d.bn(),function(y){d.fn=y,d.dn&&(d.hn=d.dn,d.en.resolve(d.dn),d.on.resolve(d.dn),d.dn.addEventListener("statechange",d.ln,{once:!0}));var E=d.fn.waiting;return E&&W(E.scriptURL,d.sn.toString())&&(d.hn=E,Promise.resolve().then(function(){d.dispatchEvent(new g("waiting",{sw:E,wasWaitingBeforeRegister:!0}))}).then(function(){})),d.hn&&(d.rn.resolve(d.hn),d.an.add(d.hn)),d.fn.addEventListener("updatefound",d.cn),navigator.serviceWorker.addEventListener("controllerchange",d.yn),d.fn})},(A=function(){if(!l&&"complete"!==document.readyState)return p(new Promise(function(y){return window.addEventListener("load",y)}))}())&&A.then?A.then(E):E()))}catch(y){return Promise.reject(y)}},j.update=function(){try{return this.fn?x(p(this.fn.update())):x()}catch(b){return Promise.reject(b)}},j.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},j.messageSW=function(b){try{return x(this.getSW(),function(O){return u(O,b)})}catch(O){return Promise.reject(O)}},j.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&u(this.fn.waiting,f)},j.pn=function(){var b=navigator.serviceWorker.controller;return b&&W(b.scriptURL,this.sn.toString())?b:void 0},j.bn=function(){try{var b=this;return x(function(O,l){try{var d=x(navigator.serviceWorker.register(b.sn,b.nn),function(O){return b.un=performance.now(),O})}catch(y){return l(y)}return d&&d.then?d.then(void 0,l):d}(0,function(O){throw O}))}catch(O){return Promise.reject(O)}},I=s,(U=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&S(I.prototype,U),Object.defineProperty(I,"prototype",{writable:!1}),I}(function(){function r(){this.Pn=new Map}var s=r.prototype;return s.addEventListener=function(i,v){this.jn(i).add(v)},s.removeEventListener=function(i,v){this.jn(i).delete(v)},s.dispatchEvent=function(i){i.target=this;for(var v,I=function P(r,s){var i=typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(i)return(i=i.call(r)).next.bind(i);if(Array.isArray(r)||(i=function(I,U){if(I){if("string"==typeof I)return n(I,U);var D=Object.prototype.toString.call(I).slice(8,-1);return"Object"===D&&I.constructor&&(D=I.constructor.name),"Map"===D||"Set"===D?Array.from(I):"Arguments"===D||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D)?n(I,U):void 0}}(r))||s&&r&&"number"==typeof r.length){i&&(r=i);var v=0;return function(){return v>=r.length?{done:!0}:{done:!1,value:r[v++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(this.jn(i.type));!(v=I()).done;)(0,v.value)(i)},s.jn=function(i){return this.Pn.has(i)||this.Pn.set(i,new Set),this.Pn.get(i)},r}())}}]);