(self.webpackChunklogin=self.webpackChunklogin||[]).push([[609],{5609:(it,I,M)=>{M.r(I),M.d(I,{Attribute:()=>m,EventContract:()=>P,EventContractContainer:()=>Me,EventDispatcher:()=>He,EventInfoWrapper:()=>d,EventPhase:()=>W,bootstrapAppScopedEarlyEventContract:()=>Je,clearAppScopedEarlyEventContract:()=>tt,getActionCache:()=>J,getAppScopedQueuedEventInfos:()=>ze,isCaptureEventType:()=>g,isEarlyEventType:()=>re,registerAppScopedDispatcher:()=>Ze,registerDispatcher:()=>We,removeAllAppScopedEventListeners:()=>et});const m={JSACTION:"jsaction"},l={JSACTION:"__jsaction",OWNER:"__owner"},U={};function _(t){return t[l.JSACTION]}function J(t){const e=_(t)??{};return A(t,e),e}function A(t,e){t[l.JSACTION]=e}const o_CLICK="click",o_CLICKMOD="clickmod",o_KEYDOWN="keydown",o_MOUSEOVER="mouseover",o_MOUSEOUT="mouseout",o_MOUSEENTER="mouseenter",o_MOUSELEAVE="mouseleave",o_POINTEROVER="pointerover",o_POINTEROUT="pointerout",o_POINTERENTER="pointerenter",o_POINTERLEAVE="pointerleave",ee=[o_MOUSEENTER,o_MOUSELEAVE,"pointerenter","pointerleave"],L=["focus","blur","error","load","toggle"],g=t=>L.indexOf(t)>=0,ne=[o_CLICK,"dblclick","focusin","focusout",o_KEYDOWN,"keyup","keypress",o_MOUSEOVER,o_MOUSEOUT,"submit","touchstart","touchend","touchmove","touchcancel","auxclick","change","compositionstart","compositionupdate","compositionend","beforeinput","input","select","copy","cut","paste","mousedown","mouseup","wheel","contextmenu","dragover","dragenter","dragleave","drop","dragstart","dragend","pointerdown","pointermove","pointerup","pointercancel","pointerover","pointerout","gotpointercapture","lostpointercapture","ended","loadedmetadata","pagehide","pageshow","visibilitychange","beforematch"].concat(L),re=t=>ne.indexOf(t)>=0;function se(t,e){if(t.removeEventListener){const n="boolean"==typeof e.passive?{capture:e.capture}:e.capture;t.removeEventListener(e.eventType,e.handler,n)}else t.detachEvent&&t.detachEvent(`on${e.eventType}`,e.handler)}let S=typeof navigator<"u"&&/Macintosh/.test(navigator.userAgent);typeof navigator<"u"&&!/Opera/.test(navigator.userAgent)&&/WebKit/.test(navigator.userAgent),typeof navigator<"u"&&(/MSIE/.test(navigator.userAgent)||/Trident/.test(navigator.userAgent)),typeof navigator<"u"&&!/Opera|WebKit/.test(navigator.userAgent)&&/Gecko/.test(navigator.product);const Ie=typeof navigator<"u"&&/iPhone|iPad|iPod/.test(navigator.userAgent);class Me{element;handlerInfos=[];constructor(e){this.element=e}addEventListener(e,n,r){Ie&&(this.element.style.cursor="pointer"),this.handlerInfos.push(function oe(t,e,n,r){let i=!1;g(e)&&(i=!0);const s="boolean"==typeof r?{capture:i,passive:r}:i;return t.addEventListener(e,n,s),{eventType:e,handler:n,capture:i,passive:r}}(this.element,e,n(this.element),r))}cleanUp(){for(let e=0;e<this.handlerInfos.length;e++)se(this.element,this.handlerInfos[e]);this.handlerInfos=[]}}const me_EVENT_ACTION_SEPARATOR=":";function u(t){return t.eventType}function C(t,e){t.eventType=e}function T(t){return t.event}function k(t,e){t.event=e}function K(t){return t.targetElement}function V(t,e){t.targetElement=e}function B(t){return t.eic}function f(t){return t.eia}function F(t,e,n){t.eia=[e,n]}function y(t){t.eia=void 0}function h(t){return t[1]}function Y(t,e){t.eirp=e}function H(t){return t.eir}function G(t,e){t.eir=e}function X(t){return{eventType:t.eventType,event:t.event,targetElement:t.targetElement,eic:t.eic,eia:t.eia,timeStamp:t.timeStamp,eirp:t.eirp,eiack:t.eiack,eir:t.eir}}function j(t,e,n,r,i,s,c,E){return{eventType:t,event:e,targetElement:n,eic:r,timeStamp:i,eia:s,eirp:c,eiack:E}}class d{eventInfo;constructor(e){this.eventInfo=e}getEventType(){return u(this.eventInfo)}setEventType(e){C(this.eventInfo,e)}getEvent(){return T(this.eventInfo)}setEvent(e){k(this.eventInfo,e)}getTargetElement(){return K(this.eventInfo)}setTargetElement(e){V(this.eventInfo,e)}getContainer(){return B(this.eventInfo)}setContainer(e){!function Ue(t,e){t.eic=e}(this.eventInfo,e)}getTimestamp(){return function _e(t){return t.timeStamp}(this.eventInfo)}setTimestamp(e){!function Le(t,e){t.timeStamp=e}(this.eventInfo,e)}getAction(){const e=f(this.eventInfo);if(e)return{name:e[0],element:e[1]}}setAction(e){e?F(this.eventInfo,e.name,e.element):y(this.eventInfo)}getIsReplay(){return function De(t){return t.eirp}(this.eventInfo)}setIsReplay(e){Y(this.eventInfo,e)}getResolved(){return H(this.eventInfo)}setResolved(e){G(this.eventInfo,e)}clone(){return new d(X(this.eventInfo))}}const we={},be=/\s*;\s*/,ke=o_CLICK;class Ke{a11yClickSupport=!1;clickModSupport=!0;syntheticMouseEventSupport;updateEventInfoForA11yClick=void 0;preventDefaultForA11yClick=void 0;populateClickOnlyAction=void 0;constructor({syntheticMouseEventSupport:e=!1,clickModSupport:n=!0}={}){this.syntheticMouseEventSupport=e,this.clickModSupport=n}resolveEventType(e){this.clickModSupport&&u(e)===o_CLICK&&function Ee(t){return S&&t.metaKey||!S&&t.ctrlKey||function ae(t){return 2===t.which||null==t.which&&4===t.button}(t)||t.shiftKey}(T(e))?C(e,o_CLICKMOD):this.a11yClickSupport&&this.updateEventInfoForA11yClick(e)}resolveAction(e){H(e)||(this.populateAction(e,K(e)),G(e,!0))}resolveParentAction(e){const n=f(e),r=n&&h(n);y(e);const i=r&&this.getParentNode(r);i&&this.populateAction(e,i)}populateAction(e,n){let r=n;for(;r&&r!==B(e)&&(r.nodeType===Node.ELEMENT_NODE&&this.populateActionOnElement(r,e),!f(e));)r=this.getParentNode(r);const i=f(e);if(i&&(this.a11yClickSupport&&this.preventDefaultForA11yClick(e),this.syntheticMouseEventSupport&&(u(e)===o_MOUSEENTER||u(e)===o_MOUSELEAVE||u(e)===o_POINTERENTER||u(e)===o_POINTERLEAVE)))if(function de(t,e,n){const r=t.relatedTarget;return(t.type===o_MOUSEOVER&&e===o_MOUSEENTER||t.type===o_MOUSEOUT&&e===o_MOUSELEAVE||t.type===o_POINTEROVER&&e===o_POINTERENTER||t.type===o_POINTEROUT&&e===o_POINTERLEAVE)&&(!r||r!==n&&!n.contains(r))}(T(e),u(e),h(i))){const s=function Oe(t,e){const n={};for(const r in t){if("srcElement"===r||"target"===r)continue;const i=r,s=t[i];"function"!=typeof s&&(n[i]=s)}return t.type===o_MOUSEOVER?n.type=o_MOUSEENTER:t.type===o_MOUSEOUT?n.type=o_MOUSELEAVE:t.type===o_POINTEROVER?n.type=o_POINTERENTER:n.type=o_POINTERLEAVE,n.target=n.srcElement=e,n.bubbles=!1,n}(T(e),h(i));k(e,s),V(e,h(i))}else y(e)}getParentNode(e){const n=e[l.OWNER];if(n)return n;const r=e.parentNode;return"#document-fragment"===r?.nodeName?r?.host??null:r}populateActionOnElement(e,n){const r=this.parseActions(e),i=r[u(n)];void 0!==i&&F(n,i,e),this.a11yClickSupport&&this.populateClickOnlyAction(e,n,r)}parseActions(e){let n=_(e);if(!n){const r=e.getAttribute(m.JSACTION);if(r){if(n=function z(t){return U[t]}(r),!n){n={};const i=r.split(be);for(let s=0;s<i.length;s++){const c=i[s];if(!c)continue;const E=c.indexOf(me_EVENT_ACTION_SEPARATOR),v=-1!==E,nt=v?c.substr(0,E).trim():ke,rt=v?c.substr(E+1).trim():c;n[nt]=rt}!function Z(t,e){U[t]=e}(r,n)}A(e,n)}else n=we,A(e,n)}return n}addA11yClickSupport(e,n,r){this.a11yClickSupport=!0,this.updateEventInfoForA11yClick=e,this.preventDefaultForA11yClick=n,this.populateClickOnlyAction=r}}var O,t;(t=O||(O={}))[t.I_AM_THE_JSACTION_FRAMEWORK=0]="I_AM_THE_JSACTION_FRAMEWORK";class Ve{dispatchDelegate;actionResolver;eventReplayer;eventReplayScheduled=!1;replayEventInfoWrappers=[];constructor(e,{actionResolver:n,eventReplayer:r}={}){this.dispatchDelegate=e,this.actionResolver=n,this.eventReplayer=r}dispatch(e){const n=new d(e);this.actionResolver?.resolveEventType(e),this.actionResolver?.resolveAction(e);const r=n.getAction();r&&function Be(t,e){return"A"===t.tagName&&(e.getEventType()===o_CLICK||e.getEventType()===o_CLICKMOD)}(r.element,n)&&function ce(t){t.preventDefault?t.preventDefault():t.returnValue=!1}(n.getEvent()),this.eventReplayer&&n.getIsReplay()?this.scheduleEventInfoWrapperReplay(n):this.dispatchDelegate(n)}scheduleEventInfoWrapperReplay(e){this.replayEventInfoWrappers.push(e),!this.eventReplayScheduled&&(this.eventReplayScheduled=!0,Promise.resolve().then(()=>{this.eventReplayScheduled=!1,this.eventReplayer(this.replayEventInfoWrappers)}))}}const x=Symbol.for("propagationStopped"),W={REPLAY:101},Fe="`preventDefault` called during event replay.",Ye="`composedPath` called during event replay.";class He{dispatchDelegate;clickModSupport;actionResolver;dispatcher;constructor(e,n=!0){this.dispatchDelegate=e,this.clickModSupport=n,this.actionResolver=new Ke({clickModSupport:n}),this.dispatcher=new Ve(r=>{this.dispatchToDelegate(r)},{actionResolver:this.actionResolver})}dispatch(e){this.dispatcher.dispatch(e)}dispatchToDelegate(e){for(e.getIsReplay()&&function je(t){const e=t.getEvent(),n=t.getTargetElement(),r=e.preventDefault.bind(e);p(e,"target",n),p(e,"eventPhase",W.REPLAY),p(e,"preventDefault",()=>{throw r(),new Error(Fe+"")}),p(e,"composedPath",()=>{throw new Error(Ye+"")})}(e),function Ge(t){const e=t.getEvent(),n=t.getEvent().stopPropagation.bind(e),r=()=>{e[x]=!0,n()};p(e,"stopPropagation",r),p(e,"stopImmediatePropagation",r)}(e);e.getAction();){if(xe(e),g(e.getEventType())&&e.getAction().element!==e.getTargetElement()||(this.dispatchDelegate(e.getEvent(),e.getAction().name),Xe(e)))return;this.actionResolver.resolveParentAction(e.eventInfo)}}}function Xe(t){return!!t.getEvent()[x]}function xe(t){const e=t.getEvent(),n=t.getAction()?.element;n&&p(e,"currentTarget",n,{configurable:!0})}function p(t,e,n,{configurable:r=!1}={}){Object.defineProperty(t,e,{value:n,configurable:r})}function We(t,e){t.ecrd(n=>{e.dispatch(n)},O.I_AM_THE_JSACTION_FRAMEWORK)}function q(t){const e=[],n=i=>{e.push(i)};return{c:t,q:e,et:[],etc:[],d:n,h:i=>{n(j(i.type,i,i.target,t,Date.now()))}}}function N(t,e,n){for(let r=0;r<e.length;r++){const i=e[r];(n?t.etc:t.et).push(i),t.c.addEventListener(i,t.h,n)}}function Q(t){t&&($(t.c,t.et,t.h),$(t.c,t.etc,t.h,!0))}function $(t,e,n,r){for(let i=0;i<e.length;i++)t.removeEventListener(e[i],n,r)}class P{static MOUSE_SPECIAL_SUPPORT=false;containerManager;eventHandlers={};browserEventTypeToExtraEventTypes={};dispatcher=null;queuedEventInfos=[];constructor(e){this.containerManager=e}handleEvent(e,n,r){const i=j(e,n,n.target,r,Date.now());this.handleEventInfo(i)}handleEventInfo(e){if(!this.dispatcher)return Y(e,!0),void this.queuedEventInfos?.push(e);this.dispatcher(e)}addEvent(e,n,r){if(e in this.eventHandlers||!this.containerManager||!P.MOUSE_SPECIAL_SUPPORT&&ee.indexOf(e)>=0)return;const i=(c,E,v)=>{this.handleEvent(c,E,v)};this.eventHandlers[e]=i;const s=function ie(t){return t===o_MOUSEENTER?o_MOUSEOVER:t===o_MOUSELEAVE?o_MOUSEOUT:t===o_POINTERENTER?o_POINTEROVER:t===o_POINTERLEAVE?o_POINTEROUT:t}(n||e);if(s!==e){const c=this.browserEventTypeToExtraEventTypes[s]||[];c.push(e),this.browserEventTypeToExtraEventTypes[s]=c}this.containerManager.addEventListener(s,c=>E=>{i(e,E,c)},r)}replayEarlyEvents(e=window._ejsa){e&&(this.replayEarlyEventInfos(e.q),Q(e),delete window._ejsa)}replayEarlyEventInfos(e){for(let n=0;n<e.length;n++){const r=e[n],i=this.getEventTypesForBrowserEventType(r.eventType);for(let s=0;s<i.length;s++){const c=X(r);C(c,i[s]),this.handleEventInfo(c)}}}getEventTypesForBrowserEventType(e){const n=[];return this.eventHandlers[e]&&n.push(e),this.browserEventTypeToExtraEventTypes[e]&&n.push(...this.browserEventTypeToExtraEventTypes[e]),n}handler(e){return this.eventHandlers[e]}cleanUp(){this.containerManager?.cleanUp(),this.containerManager=null,this.eventHandlers={},this.browserEventTypeToExtraEventTypes={},this.dispatcher=null,this.queuedEventInfos=[]}registerDispatcher(e,n){this.ecrd(e,n)}ecrd(e,n){if(this.dispatcher=e,this.queuedEventInfos?.length){for(let r=0;r<this.queuedEventInfos.length;r++)this.handleEventInfo(this.queuedEventInfos[r]);this.queuedEventInfos=null}}}function Je(t,e,n,r,i=window){const s=q(t);i._ejsas||(i._ejsas={}),i._ejsas[e]=s,N(s,n),N(s,r,!0)}function ze(t,e=window){return function qe(t){return t?.q??[]}(e._ejsas?.[t])}function Ze(t,e,n,r=window){!function Qe(t,e){t&&(t.d=e)}(r._ejsas?.[e],n)}function et(t,e=window){Q(e._ejsas?.[t])}function tt(t,e=window){e._ejsas&&(e._ejsas[t]=void 0)}}}]);