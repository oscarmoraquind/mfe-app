(self.webpackChunklogin=self.webpackChunklogin||[]).push([[470],{8051:(S,u,n)=>{n.r(u),n.d(u,{default:()=>y});var d=n(3169),g=n(4335),f=n(8885),h=n(9895),a=n(6467),b=n(3352),t=n(2424);class l{constructor(e){this.route=e,this.global=globalThis,this.username="",this.password=""}ngOnInit(){this.route.queryParams.subscribe(e=>{e.id&&(this.username=e.id)})}onPasswordInput(e){const o=e.target;this.password=o.value}login(){var e=this;if(0===this.password.length)return;const r=`client_id=flypass&grant_type=password&username=${this.username}&version=2&password=${this.password}`;fetch("https://test.security.flypass.co/flypass/secure/oauth/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=utf-8",Authorization:`Basic ${btoa("flypass:Rmx5dGVjaC4yMDE3")}`},body:r}).then(function(){var i=(0,f.A)(function*(s){if(!s.ok)throw new Error(`Error en petici\xf3n: ${s.status} - ${s.statusText}`);const m=yield s.json();console.log("Respuesta exitosa:",m);const p=m.access_token,c=new Date;c.setTime(c.getTime()+6e4);const w=c.toUTCString();document.cookie=`flypass_access_token=${p}; Expires=${w}; Path=/; Max-Age=60; Secure; SameSite=Strict;`,e.global?.LoginEvent?.postMessage(JSON.stringify({event:"LoginFinish",value:p}))});return function(s){return i.apply(this,arguments)}}()).catch(i=>{console.error("Ocurri\xf3 un error:",i.message)})}static{this.\u0275fac=function(o){return new(o||l)(t.\u0275\u0275directiveInject(b.ActivatedRoute))}}static{this.\u0275cmp=t.\u0275\u0275defineComponent({type:l,selectors:[["app-signin-entry"],["pi-component","name","signin"]],decls:17,vars:1,consts:[[2,"text-align","center"],["size","small","type","logo","variant","full-color"],["autocapitalize","off","autocomplete","off","autocorrect","off","inputmode","text","name","bq-input","placeholder","Escribe tu contrase\xf1a","type","password",3,"input","disabled"],["slot","label",1,"flex","flex-grow","items-center"],["block","",3,"click"],["appearance","secondary","block",""]],template:function(o,r){1&o&&(t.\u0275\u0275elementStart(0,"bq-grid")(1,"bq-row")(2,"bq-col",0),t.\u0275\u0275element(3,"bq-logo",1),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(4,"bq-row")(5,"bq-col")(6,"bq-input",2),t.\u0275\u0275listener("input",function(s){return r.onPasswordInput(s)}),t.\u0275\u0275elementStart(7,"label",3),t.\u0275\u0275text(8," Contrase\xf1a "),t.\u0275\u0275elementEnd()()()(),t.\u0275\u0275elementStart(9,"bq-row")(10,"bq-col")(11,"bq-button",4),t.\u0275\u0275listener("click",function(){return r.login()}),t.\u0275\u0275text(12,"Ingresar"),t.\u0275\u0275elementEnd()()(),t.\u0275\u0275elementStart(13,"bq-row")(14,"bq-col",0)(15,"bq-button",5),t.\u0275\u0275text(16,"Olvid\xe9 mi contrase\xf1a"),t.\u0275\u0275elementEnd()()()()),2&o&&(t.\u0275\u0275advance(6),t.\u0275\u0275property("disabled",!r.username))},dependencies:[h.CommonModule,a.U$,a.oB,a.nk,a.aU,a.AD,a.cC],encapsulation:2})}}const y={mount(v){console.log("load mf"),console.log(v),(0,d.bootstrapApplication)(l,g.U).catch(e=>console.error(e))},update(){},unmount(){}}}}]);