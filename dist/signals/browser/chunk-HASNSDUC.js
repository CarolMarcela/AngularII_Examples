import{d as I,n as Ae}from"./chunk-SQJOW4CT.js";import{$a as we,Ba as Ie,Ca as Y,Da as Ee,F as Z,H as G,Ia as A,J as ve,Pa as y,Q as V,R as ye,T as U,X as h,Y as g,_ as E,a as u,aa as c,ba as _,fa as b,g as fe,ha as v,ia as L,j as R,k as pe,n as ge,r as B,s as _e,v as be,wa as w,xa as H}from"./chunk-A455DTG6.js";var X;try{X=typeof Intl<"u"&&Intl.v8BreakIterator}catch{X=!1}var p=(()=>{let e=class e{constructor(t){this._platformId=t,this.isBrowser=this._platformId?Ae(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||X)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}};e.\u0275fac=function(i){return new(i||e)(c(Ie))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var O,De=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function wt(){if(O)return O;if(typeof document!="object"||!document)return O=new Set(De),O;let n=document.createElement("input");return O=new Set(De.filter(e=>(n.setAttribute("type",e),n.type===e))),O}var S;function Ge(){if(S==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>S=!0}))}finally{S=S||!1}return S}function N(n){return Ge()?n:!!n.capture}var k;function At(){if(k==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return k=!1,k;if("scrollBehavior"in document.documentElement.style)k=!0;else{let n=Element.prototype.scrollTo;n?k=!/\{\s*\[native code\]\s*\}/.test(n.toString()):k=!1}}return k}var q;function Ye(){if(q==null){let n=typeof document<"u"?document.head:null;q=!!(n&&(n.createShadowRoot||n.attachShadow))}return q}function Te(n){if(Ye()){let e=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&e instanceof ShadowRoot)return e}return null}function D(n){return n.composedPath?n.composedPath()[0]:n.target}function ke(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function qe(n){return n!=null&&`${n}`!="false"}function J(n){return Array.isArray(n)?n:[n]}function Tt(n){return n==null?"":typeof n=="string"?n:`${n}px`}function x(n){return n instanceof w?n.nativeElement:n}var Xe=(()=>{let e=class e{create(t){return typeof MutationObserver>"u"?null:new MutationObserver(t)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var xt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=v({type:e}),e.\u0275inj=g({providers:[Xe]});let n=e;return n})();var Ce=new Set,C,Qe=(()=>{let e=class e{constructor(t,i){this._platform=t,this._nonce=i,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):et}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&Je(t,this._nonce),this._matchMedia(t)}};e.\u0275fac=function(i){return new(i||e)(c(p),c(Ee,8))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function Je(n,e){if(!Ce.has(n))try{C||(C=document.createElement("style"),e&&C.setAttribute("nonce",e),C.setAttribute("type","text/css"),document.head.appendChild(C)),C.sheet&&(C.sheet.insertRule(`@media ${n} {body{ }}`,0),Ce.add(n))}catch(r){console.error(r)}}function et(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var Oe=(()=>{let e=class e{constructor(t,i){this._mediaMatcher=t,this._zone=i,this._queries=new Map,this._destroySubject=new R}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return Me(J(t)).some(s=>this._registerQuery(s).mql.matches)}observe(t){let s=Me(J(t)).map(a=>this._registerQuery(a).observable),o=_e(s);return o=be(o.pipe(G(1)),o.pipe(V(1),Z(0))),o.pipe(B(a=>{let d={matches:!1,breakpoints:{}};return a.forEach(({matches:m,query:l})=>{d.matches=d.matches||m,d.breakpoints[l]=m}),d}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let i=this._mediaMatcher.matchMedia(t),o={observable:new fe(a=>{let d=m=>this._zone.run(()=>a.next(m));return i.addListener(d),()=>{i.removeListener(d)}}).pipe(ye(i),B(({matches:a})=>({query:t,matches:a})),U(this._destroySubject)),mql:i};return this._queries.set(t,o),o}};e.\u0275fac=function(i){return new(i||e)(c(Qe),c(y))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function Me(n){return n.map(e=>e.split(",")).reduce((e,r)=>e.concat(r)).map(e=>e.trim())}function te(n){return n.buttons===0||n.detail===0}function ie(n){let e=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!e&&e.identifier===-1&&(e.radiusX==null||e.radiusX===1)&&(e.radiusY==null||e.radiusY===1)}var it=new E("cdk-input-modality-detector-options"),nt={ignoreKeys:[18,17,224,91,16]},Re=650,F=N({passive:!0,capture:!0}),st=(()=>{let e=class e{get mostRecentModality(){return this._modality.value}constructor(t,i,s,o){this._platform=t,this._mostRecentTarget=null,this._modality=new pe(null),this._lastTouchMs=0,this._onKeydown=a=>{this._options?.ignoreKeys?.some(d=>d===a.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=D(a))},this._onMousedown=a=>{Date.now()-this._lastTouchMs<Re||(this._modality.next(te(a)?"keyboard":"mouse"),this._mostRecentTarget=D(a))},this._onTouchstart=a=>{if(ie(a)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=D(a)},this._options=u(u({},nt),o),this.modalityDetected=this._modality.pipe(V(1)),this.modalityChanged=this.modalityDetected.pipe(ve()),t.isBrowser&&i.runOutsideAngular(()=>{s.addEventListener("keydown",this._onKeydown,F),s.addEventListener("mousedown",this._onMousedown,F),s.addEventListener("touchstart",this._onTouchstart,F)})}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,F),document.removeEventListener("mousedown",this._onMousedown,F),document.removeEventListener("touchstart",this._onTouchstart,F))}};e.\u0275fac=function(i){return new(i||e)(c(p),c(y),c(I),c(it,8))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var z=function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n}(z||{}),rt=new E("cdk-focus-monitor-default-options"),$=N({passive:!0,capture:!0}),mi=(()=>{let e=class e{constructor(t,i,s,o,a){this._ngZone=t,this._platform=i,this._inputModalityDetector=s,this._origin=null,this._windowFocused=!1,this._originFromTouchInteraction=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=window.setTimeout(()=>this._windowFocused=!1)},this._stopInputModalityDetector=new R,this._rootNodeFocusAndBlurListener=d=>{let m=D(d);for(let l=m;l;l=l.parentElement)d.type==="focus"?this._onFocus(d,l):this._onBlur(d,l)},this._document=o,this._detectionMode=a?.detectionMode||z.IMMEDIATE}monitor(t,i=!1){let s=x(t);if(!this._platform.isBrowser||s.nodeType!==1)return ge();let o=Te(s)||this._getDocument(),a=this._elementInfo.get(s);if(a)return i&&(a.checkChildren=!0),a.subject;let d={checkChildren:i,subject:new R,rootNode:o};return this._elementInfo.set(s,d),this._registerGlobalListeners(d),d.subject}stopMonitoring(t){let i=x(t),s=this._elementInfo.get(i);s&&(s.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(s))}focusVia(t,i,s){let o=x(t),a=this._getDocument().activeElement;o===a?this._getClosestElementsInfo(o).forEach(([d,m])=>this._originChanged(d,i,m)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(s))}ngOnDestroy(){this._elementInfo.forEach((t,i)=>this.stopMonitoring(i))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===z.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,i){t.classList.toggle("cdk-focused",!!i),t.classList.toggle("cdk-touch-focused",i==="touch"),t.classList.toggle("cdk-keyboard-focused",i==="keyboard"),t.classList.toggle("cdk-mouse-focused",i==="mouse"),t.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(t,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&i,this._detectionMode===z.IMMEDIATE){clearTimeout(this._originTimeoutId);let s=this._originFromTouchInteraction?Re:1;this._originTimeoutId=setTimeout(()=>this._origin=null,s)}})}_onFocus(t,i){let s=this._elementInfo.get(i),o=D(t);!s||!s.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),s)}_onBlur(t,i){let s=this._elementInfo.get(i);!s||s.checkChildren&&t.relatedTarget instanceof Node&&i.contains(t.relatedTarget)||(this._setClasses(i),this._emitOrigin(s,null))}_emitOrigin(t,i){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(i))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let i=t.rootNode,s=this._rootNodeFocusListenerCount.get(i)||0;s||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,$),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,$)}),this._rootNodeFocusListenerCount.set(i,s+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(U(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(t){let i=t.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let s=this._rootNodeFocusListenerCount.get(i);s>1?this._rootNodeFocusListenerCount.set(i,s-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,$),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,$),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,i,s){this._setClasses(t,i),this._emitOrigin(s,i),this._lastFocusOrigin=i}_getClosestElementsInfo(t){let i=[];return this._elementInfo.forEach((s,o)=>{(o===t||s.checkChildren&&o.contains(t))&&i.push([o,s])}),i}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:i,mostRecentModality:s}=this._inputModalityDetector;if(s!=="mouse"||!i||i===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let o=t.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(i))return!0}return!1}};e.\u0275fac=function(i){return new(i||e)(c(y),c(p),c(st),c(I,8),c(rt,8))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var M=function(n){return n[n.NONE=0]="NONE",n[n.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",n[n.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",n}(M||{}),Ne="cdk-high-contrast-black-on-white",Fe="cdk-high-contrast-white-on-black",ee="cdk-high-contrast-active",Le=(()=>{let e=class e{constructor(t,i){this._platform=t,this._document=i,this._breakpointSubscription=_(Oe).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return M.NONE;let t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);let i=this._document.defaultView||window,s=i&&i.getComputedStyle?i.getComputedStyle(t):null,o=(s&&s.backgroundColor||"").replace(/ /g,"");switch(t.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return M.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return M.BLACK_ON_WHITE}return M.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(ee,Ne,Fe),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===M.BLACK_ON_WHITE?t.add(ee,Ne):i===M.WHITE_ON_BLACK&&t.add(ee,Fe)}}};e.\u0275fac=function(i){return new(i||e)(c(p),c(I))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var dt=new E("cdk-dir-doc",{providedIn:"root",factory:lt});function lt(){return _(I)}var ht=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function ut(n){let e=n?.toLowerCase()||"";return e==="auto"&&typeof navigator<"u"&&navigator?.language?ht.test(navigator.language)?"rtl":"ltr":e==="rtl"?"rtl":"ltr"}var Ai=(()=>{let e=class e{constructor(t){if(this.value="ltr",this.change=new H,t){let i=t.body?t.body.dir:null,s=t.documentElement?t.documentElement.dir:null;this.value=ut(i||s||"ltr")}}ngOnDestroy(){this.change.complete()}};e.\u0275fac=function(i){return new(i||e)(c(dt,8))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var ne=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=v({type:e}),e.\u0275inj=g({});let n=e;return n})();function mt(){return!0}var ft=new E("mat-sanity-checks",{providedIn:"root",factory:mt}),Se=(()=>{let e=class e{constructor(t,i,s){this._sanityChecks=i,this._document=s,this._hasDoneGlobalChecks=!1,t._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(t){return ke()?!1:typeof this._sanityChecks=="boolean"?this._sanityChecks:!!this._sanityChecks[t]}};e.\u0275fac=function(i){return new(i||e)(c(Le),c(ft,8),c(I))},e.\u0275mod=v({type:e}),e.\u0275inj=g({imports:[ne,ne]});let n=e;return n})();var je=class{constructor(e,r,t,i,s){this._defaultMatcher=e,this.ngControl=r,this._parentFormGroup=t,this._parentForm=i,this._stateChanges=s,this.errorState=!1}updateErrorState(){let e=this.errorState,r=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,i=this.ngControl?this.ngControl.control:null,s=t?.isErrorState(i,r)??!1;s!==e&&(this.errorState=s,this._stateChanges.next())}};var fn=(()=>{let e=class e{isErrorState(t,i){return!!(t&&t.invalid&&(t.touched||i&&i.submitted))}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var f=function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n}(f||{}),oe=class{constructor(e,r,t,i=!1){this._renderer=e,this.element=r,this.config=t,this._animationForciblyDisabledThroughCss=i,this.state=f.HIDDEN}fadeOut(){this._renderer.fadeOutRipple(this)}},Pe=N({passive:!0,capture:!0}),ae=class{constructor(){this._events=new Map,this._delegateEventHandler=e=>{let r=D(e);r&&this._events.get(e.type)?.forEach((t,i)=>{(i===r||i.contains(r))&&t.forEach(s=>s.handleEvent(e))})}}addHandler(e,r,t,i){let s=this._events.get(r);if(s){let o=s.get(t);o?o.add(i):s.set(t,new Set([i]))}else this._events.set(r,new Map([[t,new Set([i])]])),e.runOutsideAngular(()=>{document.addEventListener(r,this._delegateEventHandler,Pe)})}removeHandler(e,r,t){let i=this._events.get(e);if(!i)return;let s=i.get(r);s&&(s.delete(t),s.size===0&&i.delete(r),i.size===0&&(this._events.delete(e),document.removeEventListener(e,this._delegateEventHandler,Pe)))}},Be={enterDuration:225,exitDuration:150},pt=800,Ve=N({passive:!0,capture:!0}),Ue=["mousedown","touchstart"],He=["mouseup","mouseleave","touchend","touchcancel"],P=class P{constructor(e,r,t,i){this._target=e,this._ngZone=r,this._platform=i,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,i.isBrowser&&(this._containerElement=x(t))}fadeInRipple(e,r,t={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),s=u(u({},Be),t.animation);t.centered&&(e=i.left+i.width/2,r=i.top+i.height/2);let o=t.radius||gt(e,r,i),a=e-i.left,d=r-i.top,m=s.enterDuration,l=document.createElement("div");l.classList.add("mat-ripple-element"),l.style.left=`${a-o}px`,l.style.top=`${d-o}px`,l.style.height=`${o*2}px`,l.style.width=`${o*2}px`,t.color!=null&&(l.style.backgroundColor=t.color),l.style.transitionDuration=`${m}ms`,this._containerElement.appendChild(l);let de=window.getComputedStyle(l),Ze=de.transitionProperty,le=de.transitionDuration,K=Ze==="none"||le==="0s"||le==="0s, 0s"||i.width===0&&i.height===0,T=new oe(this,l,t,K);l.style.transform="scale3d(1, 1, 1)",T.state=f.FADING_IN,t.persistent||(this._mostRecentTransientRipple=T);let he=null;return!K&&(m||s.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let ue=()=>this._finishRippleTransition(T),me=()=>this._destroyRipple(T);l.addEventListener("transitionend",ue),l.addEventListener("transitioncancel",me),he={onTransitionEnd:ue,onTransitionCancel:me}}),this._activeRipples.set(T,he),(K||!m)&&this._finishRippleTransition(T),T}fadeOutRipple(e){if(e.state===f.FADING_OUT||e.state===f.HIDDEN)return;let r=e.element,t=u(u({},Be),e.config.animation);r.style.transitionDuration=`${t.exitDuration}ms`,r.style.opacity="0",e.state=f.FADING_OUT,(e._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(e)}fadeOutAll(){this._getActiveRipples().forEach(e=>e.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(e=>{e.config.persistent||e.fadeOut()})}setupTriggerEvents(e){let r=x(e);!this._platform.isBrowser||!r||r===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=r,Ue.forEach(t=>{P._eventManager.addHandler(this._ngZone,t,r,this)}))}handleEvent(e){e.type==="mousedown"?this._onMousedown(e):e.type==="touchstart"?this._onTouchStart(e):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{He.forEach(r=>{this._triggerElement.addEventListener(r,this,Ve)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(e){e.state===f.FADING_IN?this._startFadeOutTransition(e):e.state===f.FADING_OUT&&this._destroyRipple(e)}_startFadeOutTransition(e){let r=e===this._mostRecentTransientRipple,{persistent:t}=e.config;e.state=f.VISIBLE,!t&&(!r||!this._isPointerDown)&&e.fadeOut()}_destroyRipple(e){let r=this._activeRipples.get(e)??null;this._activeRipples.delete(e),this._activeRipples.size||(this._containerRect=null),e===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),e.state=f.HIDDEN,r!==null&&(e.element.removeEventListener("transitionend",r.onTransitionEnd),e.element.removeEventListener("transitioncancel",r.onTransitionCancel)),e.element.remove()}_onMousedown(e){let r=te(e),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+pt;!this._target.rippleDisabled&&!r&&!t&&(this._isPointerDown=!0,this.fadeInRipple(e.clientX,e.clientY,this._target.rippleConfig))}_onTouchStart(e){if(!this._target.rippleDisabled&&!ie(e)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let r=e.changedTouches;if(r)for(let t=0;t<r.length;t++)this.fadeInRipple(r[t].clientX,r[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(e=>{let r=e.state===f.VISIBLE||e.config.terminateOnPointerUp&&e.state===f.FADING_IN;!e.config.persistent&&r&&e.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let e=this._triggerElement;e&&(Ue.forEach(r=>P._eventManager.removeHandler(r,e,this)),this._pointerUpEventsRegistered&&(He.forEach(r=>e.removeEventListener(r,this,Ve)),this._pointerUpEventsRegistered=!1))}};P._eventManager=new ae;var ce=P;function gt(n,e,r){let t=Math.max(Math.abs(n-r.left),Math.abs(n-r.right)),i=Math.max(Math.abs(e-r.top),Math.abs(e-r.bottom));return Math.sqrt(t*t+i*i)}var Ke=new E("mat-ripple-global-options"),_t=(()=>{let e=class e{get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}constructor(t,i,s,o,a){this._elementRef=t,this._animationMode=a,this.radius=0,this._disabled=!1,this._isInitialized=!1,this._globalOptions=o||{},this._rippleRenderer=new ce(this,i,t,s)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:u(u(u({},this._globalOptions.animation),this._animationMode==="NoopAnimations"?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,i=0,s){return typeof t=="number"?this._rippleRenderer.fadeInRipple(t,i,u(u({},this.rippleConfig),s)):this._rippleRenderer.fadeInRipple(0,0,u(u({},this.rippleConfig),t))}};e.\u0275fac=function(i){return new(i||e)(A(w),A(y),A(p),A(Ke,8),A(Y,8))},e.\u0275dir=L({type:e,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,s){i&2&&we("mat-ripple-unbounded",s.unbounded)},inputs:{color:[b.None,"matRippleColor","color"],unbounded:[b.None,"matRippleUnbounded","unbounded"],centered:[b.None,"matRippleCentered","centered"],radius:[b.None,"matRippleRadius","radius"],animation:[b.None,"matRippleAnimation","animation"],disabled:[b.None,"matRippleDisabled","disabled"],trigger:[b.None,"matRippleTrigger","trigger"]},exportAs:["matRipple"],standalone:!0});let n=e;return n})(),pn=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=v({type:e}),e.\u0275inj=g({imports:[Se,Se]});let n=e;return n})();var $e={capture:!0},ze=["focus","click","mouseenter","touchstart"],se="mat-ripple-loader-uninitialized",re="mat-ripple-loader-class-name",We="mat-ripple-loader-centered",W="mat-ripple-loader-disabled",gn=(()=>{let e=class e{constructor(){this._document=_(I,{optional:!0}),this._animationMode=_(Y,{optional:!0}),this._globalRippleOptions=_(Ke,{optional:!0}),this._platform=_(p),this._ngZone=_(y),this._hosts=new Map,this._onInteraction=t=>{if(!(t.target instanceof HTMLElement))return;let s=t.target.closest(`[${se}]`);s&&this._createRipple(s)},this._ngZone.runOutsideAngular(()=>{for(let t of ze)this._document?.addEventListener(t,this._onInteraction,$e)})}ngOnDestroy(){let t=this._hosts.keys();for(let i of t)this.destroyRipple(i);for(let i of ze)this._document?.removeEventListener(i,this._onInteraction,$e)}configureRipple(t,i){t.setAttribute(se,""),(i.className||!t.hasAttribute(re))&&t.setAttribute(re,i.className||""),i.centered&&t.setAttribute(We,""),i.disabled&&t.setAttribute(W,"")}getRipple(t){return this._hosts.get(t)||this._createRipple(t)}setDisabled(t,i){let s=this._hosts.get(t);if(s){s.disabled=i;return}i?t.setAttribute(W,""):t.removeAttribute(W)}_createRipple(t){if(!this._document)return;let i=this._hosts.get(t);if(i)return i;t.querySelector(".mat-ripple")?.remove();let s=this._document.createElement("span");s.classList.add("mat-ripple",t.getAttribute(re)),t.append(s);let o=new _t(new w(s),this._ngZone,this._platform,this._globalRippleOptions?this._globalRippleOptions:void 0,this._animationMode?this._animationMode:void 0);return o._isInitialized=!0,o.trigger=t,o.centered=t.hasAttribute(We),o.disabled=t.hasAttribute(W),this.attachRipple(t,o),o}attachRipple(t,i){t.removeAttribute(se),this._hosts.set(t,i)}destroyRipple(t){let i=this._hosts.get(t);i&&(i.ngOnDestroy(),this._hosts.delete(t))}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();export{p as a,wt as b,N as c,At as d,D as e,ke as f,qe as g,J as h,Tt as i,x as j,xt as k,mi as l,Ai as m,ne as n,Se as o,je as p,fn as q,pn as r,gn as s};
