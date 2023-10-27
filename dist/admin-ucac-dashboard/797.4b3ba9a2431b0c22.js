"use strict";(self.webpackChunkadmin_ucac_dashboard=self.webpackChunkadmin_ucac_dashboard||[]).push([[797],{9797:(pt,se,h)=>{h.d(se,{xd:()=>ot,x0:()=>ut,N7:()=>ie,Cl:()=>ft});var o=h(7587);function D(i,t=0){return function le(i){return!isNaN(parseFloat(i))&&!isNaN(Number(i))}(i)?Number(i):t}var z=h(8421),g=h(8306),de=h(5577),ce=h(1144),p=h(576),he=h(3268);const ue=["addListener","removeListener"],fe=["addEventListener","removeEventListener"],pe=["on","off"];function R(i,t,e,n){if((0,p.m)(e)&&(n=e,e=void 0),n)return R(i,t,e).pipe((0,he.Z)(n));const[r,s]=function _e(i){return(0,p.m)(i.addEventListener)&&(0,p.m)(i.removeEventListener)}(i)?fe.map(l=>d=>i[l](t,d,e)):function me(i){return(0,p.m)(i.addListener)&&(0,p.m)(i.removeListener)}(i)?ue.map(U(i,t)):function ge(i){return(0,p.m)(i.on)&&(0,p.m)(i.off)}(i)?pe.map(U(i,t)):[];if(!r&&(0,ce.z)(i))return(0,de.z)(l=>R(l,t,e))((0,z.Xf)(i));if(!r)throw new TypeError("Invalid event target");return new g.y(l=>{const d=(...a)=>l.next(1<a.length?a:a[0]);return r(d),()=>s(d)})}function U(i,t){return e=>n=>i[e](t,n)}var T=h(727);class ve extends T.w0{constructor(t,e){super()}schedule(t,e=0){return this}}const b={setInterval(i,t,...e){const{delegate:n}=b;return(null==n?void 0:n.setInterval)?n.setInterval(i,t,...e):setInterval(i,t,...e)},clearInterval(i){const{delegate:t}=b;return((null==t?void 0:t.clearInterval)||clearInterval)(i)},delegate:void 0};var we=h(8737);class F extends ve{constructor(t,e){super(t,e),this.scheduler=t,this.work=e,this.pending=!1}schedule(t,e=0){var n;if(this.closed)return this;this.state=t;const r=this.id,s=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(s,r,e)),this.pending=!0,this.delay=e,this.id=null!==(n=this.id)&&void 0!==n?n:this.requestAsyncId(s,this.id,e),this}requestAsyncId(t,e,n=0){return b.setInterval(t.flush.bind(t,this),n)}recycleAsyncId(t,e,n=0){if(null!=n&&this.delay===n&&!1===this.pending)return e;null!=e&&b.clearInterval(e)}execute(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const n=this._execute(t,e);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,e){let r,n=!1;try{this.work(t)}catch(s){n=!0,r=s||new Error("Scheduled action threw falsy error")}if(n)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){const{id:t,scheduler:e}=this,{actions:n}=e;this.work=this.state=this.scheduler=null,this.pending=!1,(0,we.P)(n,this),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null,super.unsubscribe()}}}const v={schedule(i){let t=requestAnimationFrame,e=cancelAnimationFrame;const{delegate:n}=v;n&&(t=n.requestAnimationFrame,e=n.cancelAnimationFrame);const r=t(s=>{e=void 0,i(s)});return new T.w0(()=>null==e?void 0:e(r))},requestAnimationFrame(...i){const{delegate:t}=v;return((null==t?void 0:t.requestAnimationFrame)||requestAnimationFrame)(...i)},cancelAnimationFrame(...i){const{delegate:t}=v;return((null==t?void 0:t.cancelAnimationFrame)||cancelAnimationFrame)(...i)},delegate:void 0},M={now:()=>(M.delegate||Date).now(),delegate:void 0};class w{constructor(t,e=w.now){this.schedulerActionCtor=t,this.now=e}schedule(t,e=0,n){return new this.schedulerActionCtor(this,t).schedule(n,e)}}w.now=M.now;class O extends w{constructor(t,e=w.now){super(t,e),this.actions=[],this._active=!1}flush(t){const{actions:e}=this;if(this._active)return void e.push(t);let n;this._active=!0;do{if(n=t.execute(t.state,t.delay))break}while(t=e.shift());if(this._active=!1,n){for(;t=e.shift();)t.unsubscribe();throw n}}}const Ce=new class ye extends O{flush(t){this._active=!0;const e=this._scheduled;this._scheduled=void 0;const{actions:n}=this;let r;t=t||n.shift();do{if(r=t.execute(t.state,t.delay))break}while((t=n[0])&&t.id===e&&n.shift());if(this._active=!1,r){for(;(t=n[0])&&t.id===e&&n.shift();)t.unsubscribe();throw r}}}(class Se extends F{constructor(t,e){super(t,e),this.scheduler=t,this.work=e}requestAsyncId(t,e,n=0){return null!==n&&n>0?super.requestAsyncId(t,e,n):(t.actions.push(this),t._scheduled||(t._scheduled=v.requestAnimationFrame(()=>t.flush(void 0))))}recycleAsyncId(t,e,n=0){var r;if(null!=n?n>0:this.delay>0)return super.recycleAsyncId(t,e,n);const{actions:s}=t;null!=e&&(null===(r=s[s.length-1])||void 0===r?void 0:r.id)!==e&&(v.cancelAnimationFrame(e),t._scheduled=void 0)}});let B,xe=1;const E={};function j(i){return i in E&&(delete E[i],!0)}const De={setImmediate(i){const t=xe++;return E[t]=!0,B||(B=Promise.resolve()),B.then(()=>j(t)&&i()),t},clearImmediate(i){j(i)}},{setImmediate:Re,clearImmediate:be}=De,k={setImmediate(...i){const{delegate:t}=k;return((null==t?void 0:t.setImmediate)||Re)(...i)},clearImmediate(i){const{delegate:t}=k;return((null==t?void 0:t.clearImmediate)||be)(i)},delegate:void 0},Ae=new class ke extends O{flush(t){this._active=!0;const e=this._scheduled;this._scheduled=void 0;const{actions:n}=this;let r;t=t||n.shift();do{if(r=t.execute(t.state,t.delay))break}while((t=n[0])&&t.id===e&&n.shift());if(this._active=!1,r){for(;(t=n[0])&&t.id===e&&n.shift();)t.unsubscribe();throw r}}}(class Ee extends F{constructor(t,e){super(t,e),this.scheduler=t,this.work=e}requestAsyncId(t,e,n=0){return null!==n&&n>0?super.requestAsyncId(t,e,n):(t.actions.push(this),t._scheduled||(t._scheduled=k.setImmediate(t.flush.bind(t,void 0))))}recycleAsyncId(t,e,n=0){var r;if(null!=n?n>0:this.delay>0)return super.recycleAsyncId(t,e,n);const{actions:s}=t;null!=e&&(null===(r=s[s.length-1])||void 0===r?void 0:r.id)!==e&&(k.clearImmediate(e),t._scheduled=void 0)}});function G(i){return!!i&&(i instanceof g.y||(0,p.m)(i.lift)&&(0,p.m)(i.subscribe))}var f=h(7579),L=h(9646),Ve=h(4671),A=h(4482),S=h(5403);function ze(i,t){return i===t}const H=new O(F),Te=H;var Me=h(3532);function P(i,t=H){return function Fe(i){return(0,A.e)((t,e)=>{let n=!1,r=null,s=null,l=!1;const d=()=>{if(null==s||s.unsubscribe(),s=null,n){n=!1;const c=r;r=null,e.next(c)}l&&e.complete()},a=()=>{s=null,l&&e.complete()};t.subscribe((0,S.x)(e,c=>{n=!0,r=c,s||(0,z.Xf)(i(c)).subscribe(s=(0,S.x)(e,d,a))},()=>{l=!0,(!n||!s||s.closed)&&e.complete()}))})}(()=>function Be(i=0,t,e=Te){let n=-1;return null!=t&&((0,Me.K)(t)?e=t:n=t),new g.y(r=>{let s=function Oe(i){return i instanceof Date&&!isNaN(i)}(i)?+i-e.now():i;s<0&&(s=0);let l=0;return e.schedule(function(){r.closed||(r.next(l++),0<=n?this.schedule(void 0,n):r.complete())},s)})}(i,t))}var Le=h(5032);function N(i){return(0,A.e)((t,e)=>{(0,z.Xf)(i).subscribe((0,S.x)(e,()=>e.complete(),Le.Z)),!e.closed&&t.subscribe(e)})}class Ne extends f.x{constructor(t=1/0,e=1/0,n=M){super(),this._bufferSize=t,this._windowTime=e,this._timestampProvider=n,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,t),this._windowTime=Math.max(1,e)}next(t){const{isStopped:e,_buffer:n,_infiniteTimeWindow:r,_timestampProvider:s,_windowTime:l}=this;e||(n.push(t),!r&&n.push(s.now()+l)),this._trimBuffer(),super.next(t)}_subscribe(t){this._throwIfClosed(),this._trimBuffer();const e=this._innerSubscribe(t),{_infiniteTimeWindow:n,_buffer:r}=this,s=r.slice();for(let l=0;l<s.length&&!t.closed;l+=n?1:2)t.next(s[l]);return this._checkFinalizedStatuses(t),e}_trimBuffer(){const{_bufferSize:t,_timestampProvider:e,_buffer:n,_infiniteTimeWindow:r}=this,s=(r?1:2)*t;if(t<1/0&&s<n.length&&n.splice(0,n.length-s),!r){const l=e.now();let d=0;for(let a=1;a<n.length&&n[a]<=l;a+=2)d=a;d&&n.splice(0,d+1)}}}var We=h(3099),Ue=h(9300),Z=h(8675),je=h(3900),V=h(9808);let W;try{W="undefined"!=typeof Intl&&Intl.v8BreakIterator}catch(i){W=!1}let I,m,$=(()=>{class i{constructor(e){this._platformId=e,this.isBrowser=this._platformId?(0,V.NF)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!W)&&"undefined"!=typeof CSS&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return i.\u0275fac=function(e){return new(e||i)(o.LFG(o.Lbi))},i.\u0275prov=o.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();function C(){if("object"!=typeof document||!document)return 0;if(null==I){const i=document.createElement("div"),t=i.style;i.dir="rtl",t.width="1px",t.overflow="auto",t.visibility="hidden",t.pointerEvents="none",t.position="absolute";const e=document.createElement("div"),n=e.style;n.width="2px",n.height="1px",i.appendChild(e),document.body.appendChild(i),I=0,0===i.scrollLeft&&(i.scrollLeft=1,I=0===i.scrollLeft?1:2),i.remove()}return I}const $e=new o.OlP("cdk-dir-doc",{providedIn:"root",factory:function qe(){return(0,o.f3M)(V.K0)}}),Ke=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;let K=(()=>{class i{constructor(e){if(this.value="ltr",this.change=new o.vpe,e){const r=e.documentElement?e.documentElement.dir:null;this.value=function Xe(i){const t=(null==i?void 0:i.toLowerCase())||"";return"auto"===t&&"undefined"!=typeof navigator&&(null==navigator?void 0:navigator.language)?Ke.test(navigator.language)?"rtl":"ltr":"rtl"===t?"rtl":"ltr"}((e.body?e.body.dir:null)||r||"ltr")}}ngOnDestroy(){this.change.complete()}}return i.\u0275fac=function(e){return new(e||i)(o.LFG($e,8))},i.\u0275prov=o.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),X=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({}),i})();class et extends class Je{}{constructor(t){super(),this._data=t}connect(){return G(this._data)?this._data:(0,L.of)(this._data)}disconnect(){}}class tt{constructor(){this.viewCacheSize=20,this._viewCache=[]}applyChanges(t,e,n,r,s){t.forEachOperation((l,d,a)=>{let c,u;null==l.previousIndex?(c=this._insertView(()=>n(l,d,a),a,e,r(l)),u=c?1:0):null==a?(this._detachAndCacheView(d,e),u=3):(c=this._moveView(d,a,e,r(l)),u=2),s&&s({context:null==c?void 0:c.context,operation:u,record:l})})}detach(){for(const t of this._viewCache)t.destroy();this._viewCache=[]}_insertView(t,e,n,r){const s=this._insertViewFromCache(e,n);if(s)return void(s.context.$implicit=r);const l=t();return n.createEmbeddedView(l.templateRef,l.context,l.index)}_detachAndCacheView(t,e){const n=e.detach(t);this._maybeCacheView(n,e)}_moveView(t,e,n,r){const s=n.get(t);return n.move(s,e),s.context.$implicit=r,s}_maybeCacheView(t,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(t);else{const n=e.indexOf(t);-1===n?t.destroy():e.remove(n)}}_insertViewFromCache(t,e){const n=this._viewCache.pop();return n&&e.insert(n,t),n||null}}const J=new o.OlP("_ViewRepeater"),it=["contentWrapper"],nt=["*"],Q=new o.OlP("VIRTUAL_SCROLL_STRATEGY");class rt{constructor(t,e,n){this._scrolledIndexChange=new f.x,this.scrolledIndexChange=this._scrolledIndexChange.pipe(function Ie(i,t=Ve.y){return i=null!=i?i:ze,(0,A.e)((e,n)=>{let r,s=!0;e.subscribe((0,S.x)(n,l=>{const d=t(l);(s||!i(r,d))&&(s=!1,r=d,n.next(l))}))})}()),this._viewport=null,this._itemSize=t,this._minBufferPx=e,this._maxBufferPx=n}attach(t){this._viewport=t,this._updateTotalContentSize(),this._updateRenderedRange()}detach(){this._scrolledIndexChange.complete(),this._viewport=null}updateItemAndBufferSize(t,e,n){this._itemSize=t,this._minBufferPx=e,this._maxBufferPx=n,this._updateTotalContentSize(),this._updateRenderedRange()}onContentScrolled(){this._updateRenderedRange()}onDataLengthChanged(){this._updateTotalContentSize(),this._updateRenderedRange()}onContentRendered(){}onRenderedOffsetChanged(){}scrollToIndex(t,e){this._viewport&&this._viewport.scrollToOffset(t*this._itemSize,e)}_updateTotalContentSize(){!this._viewport||this._viewport.setTotalContentSize(this._viewport.getDataLength()*this._itemSize)}_updateRenderedRange(){if(!this._viewport)return;const t=this._viewport.getRenderedRange(),e={start:t.start,end:t.end},n=this._viewport.getViewportSize(),r=this._viewport.getDataLength();let s=this._viewport.measureScrollOffset(),l=this._itemSize>0?s/this._itemSize:0;if(e.end>r){const a=Math.ceil(n/this._itemSize),c=Math.max(0,Math.min(l,r-a));l!=c&&(l=c,s=c*this._itemSize,e.start=Math.floor(l)),e.end=Math.max(0,Math.min(r,e.start+a))}const d=s-e.start*this._itemSize;if(d<this._minBufferPx&&0!=e.start){const a=Math.ceil((this._maxBufferPx-d)/this._itemSize);e.start=Math.max(0,e.start-a),e.end=Math.min(r,Math.ceil(l+(n+this._minBufferPx)/this._itemSize))}else{const a=e.end*this._itemSize-(s+n);if(a<this._minBufferPx&&e.end!=r){const c=Math.ceil((this._maxBufferPx-a)/this._itemSize);c>0&&(e.end=Math.min(r,e.end+c),e.start=Math.max(0,Math.floor(l-this._minBufferPx/this._itemSize)))}}this._viewport.setRenderedRange(e),this._viewport.setRenderedContentOffset(this._itemSize*e.start),this._scrolledIndexChange.next(Math.floor(l))}}function st(i){return i._scrollStrategy}let ot=(()=>{class i{constructor(){this._itemSize=20,this._minBufferPx=100,this._maxBufferPx=200,this._scrollStrategy=new rt(this.itemSize,this.minBufferPx,this.maxBufferPx)}get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=D(e)}get minBufferPx(){return this._minBufferPx}set minBufferPx(e){this._minBufferPx=D(e)}get maxBufferPx(){return this._maxBufferPx}set maxBufferPx(e){this._maxBufferPx=D(e)}ngOnChanges(){this._scrollStrategy.updateItemAndBufferSize(this.itemSize,this.minBufferPx,this.maxBufferPx)}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275dir=o.lG2({type:i,selectors:[["cdk-virtual-scroll-viewport","itemSize",""]],inputs:{itemSize:"itemSize",minBufferPx:"minBufferPx",maxBufferPx:"maxBufferPx"},features:[o._Bn([{provide:Q,useFactory:st,deps:[(0,o.Gpc)(()=>i)]}]),o.TTD]}),i})(),ee=(()=>{class i{constructor(e,n,r){this._ngZone=e,this._platform=n,this._scrolled=new f.x,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=r}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){const n=this.scrollContainers.get(e);n&&(n.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=20){return this._platform.isBrowser?new g.y(n=>{this._globalSubscription||this._addGlobalListener();const r=e>0?this._scrolled.pipe(P(e)).subscribe(n):this._scrolled.subscribe(n);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):(0,L.of)()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,n)=>this.deregister(n)),this._scrolled.complete()}ancestorScrolled(e,n){const r=this.getAncestorScrollContainers(e);return this.scrolled(n).pipe((0,Ue.h)(s=>!s||r.indexOf(s)>-1))}getAncestorScrollContainers(e){const n=[];return this.scrollContainers.forEach((r,s)=>{this._scrollableContainsElement(s,e)&&n.push(s)}),n}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,n){let r=function ae(i){return i instanceof o.SBq?i.nativeElement:i}(n),s=e.getElementRef().nativeElement;do{if(r==s)return!0}while(r=r.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>R(this._getWindow().document,"scroll").subscribe(()=>this._scrolled.next()))}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}}return i.\u0275fac=function(e){return new(e||i)(o.LFG(o.R0b),o.LFG($),o.LFG(V.K0,8))},i.\u0275prov=o.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),te=(()=>{class i{constructor(e,n,r,s){this.elementRef=e,this.scrollDispatcher=n,this.ngZone=r,this.dir=s,this._destroyed=new f.x,this._elementScrolled=new g.y(l=>this.ngZone.runOutsideAngular(()=>R(this.elementRef.nativeElement,"scroll").pipe(N(this._destroyed)).subscribe(l)))}ngOnInit(){this.scrollDispatcher.register(this)}ngOnDestroy(){this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){const n=this.elementRef.nativeElement,r=this.dir&&"rtl"==this.dir.value;null==e.left&&(e.left=r?e.end:e.start),null==e.right&&(e.right=r?e.start:e.end),null!=e.bottom&&(e.top=n.scrollHeight-n.clientHeight-e.bottom),r&&0!=C()?(null!=e.left&&(e.right=n.scrollWidth-n.clientWidth-e.left),2==C()?e.left=e.right:1==C()&&(e.left=e.right?-e.right:e.right)):null!=e.right&&(e.left=n.scrollWidth-n.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){const n=this.elementRef.nativeElement;!function He(){if(null==m){if("object"!=typeof document||!document||"function"!=typeof Element||!Element)return m=!1,m;if("scrollBehavior"in document.documentElement.style)m=!0;else{const i=Element.prototype.scrollTo;m=!!i&&!/\{\s*\[native code\]\s*\}/.test(i.toString())}}return m}()?(null!=e.top&&(n.scrollTop=e.top),null!=e.left&&(n.scrollLeft=e.left)):n.scrollTo(e)}measureScrollOffset(e){const n="left",r="right",s=this.elementRef.nativeElement;if("top"==e)return s.scrollTop;if("bottom"==e)return s.scrollHeight-s.clientHeight-s.scrollTop;const l=this.dir&&"rtl"==this.dir.value;return"start"==e?e=l?r:n:"end"==e&&(e=l?n:r),l&&2==C()?e==n?s.scrollWidth-s.clientWidth-s.scrollLeft:s.scrollLeft:l&&1==C()?e==n?s.scrollLeft+s.scrollWidth-s.clientWidth:-s.scrollLeft:e==n?s.scrollLeft:s.scrollWidth-s.clientWidth-s.scrollLeft}}return i.\u0275fac=function(e){return new(e||i)(o.Y36(o.SBq),o.Y36(ee),o.Y36(o.R0b),o.Y36(K,8))},i.\u0275dir=o.lG2({type:i,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]}),i})(),dt=(()=>{class i{constructor(e,n,r){this._platform=e,this._change=new f.x,this._changeListener=s=>{this._change.next(s)},this._document=r,n.runOutsideAngular(()=>{if(e.isBrowser){const s=this._getWindow();s.addEventListener("resize",this._changeListener),s.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){const e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();const e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){const e=this.getViewportScrollPosition(),{width:n,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+n,height:r,width:n}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};const e=this._document,n=this._getWindow(),r=e.documentElement,s=r.getBoundingClientRect();return{top:-s.top||e.body.scrollTop||n.scrollY||r.scrollTop||0,left:-s.left||e.body.scrollLeft||n.scrollX||r.scrollLeft||0}}change(e=20){return e>0?this._change.pipe(P(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){const e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}}return i.\u0275fac=function(e){return new(e||i)(o.LFG($),o.LFG(o.R0b),o.LFG(V.K0,8))},i.\u0275prov=o.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();const ht="undefined"!=typeof requestAnimationFrame?Ce:Ae;let ie=(()=>{class i extends te{constructor(e,n,r,s,l,d,a){super(e,d,r,l),this.elementRef=e,this._changeDetectorRef=n,this._scrollStrategy=s,this._detachedSubject=new f.x,this._renderedRangeSubject=new f.x,this._orientation="vertical",this._appendOnly=!1,this.scrolledIndexChange=new g.y(c=>this._scrollStrategy.scrolledIndexChange.subscribe(u=>Promise.resolve().then(()=>this.ngZone.run(()=>c.next(u))))),this.renderedRangeStream=this._renderedRangeSubject,this._totalContentSize=0,this._totalContentWidth="",this._totalContentHeight="",this._renderedRange={start:0,end:0},this._dataLength=0,this._viewportSize=0,this._renderedContentOffset=0,this._renderedContentOffsetNeedsRewrite=!1,this._isChangeDetectionPending=!1,this._runAfterChangeDetection=[],this._viewportChanges=T.w0.EMPTY,this._viewportChanges=a.change().subscribe(()=>{this.checkViewportSize()})}get orientation(){return this._orientation}set orientation(e){this._orientation!==e&&(this._orientation=e,this._calculateSpacerSize())}get appendOnly(){return this._appendOnly}set appendOnly(e){this._appendOnly=function oe(i){return null!=i&&"false"!=`${i}`}(e)}ngOnInit(){super.ngOnInit(),this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._measureViewportSize(),this._scrollStrategy.attach(this),this.elementScrolled().pipe((0,Z.O)(null),P(0,ht)).subscribe(()=>this._scrollStrategy.onContentScrolled()),this._markChangeDetectionNeeded()}))}ngOnDestroy(){this.detach(),this._scrollStrategy.detach(),this._renderedRangeSubject.complete(),this._detachedSubject.complete(),this._viewportChanges.unsubscribe(),super.ngOnDestroy()}attach(e){this.ngZone.runOutsideAngular(()=>{this._forOf=e,this._forOf.dataStream.pipe(N(this._detachedSubject)).subscribe(n=>{const r=n.length;r!==this._dataLength&&(this._dataLength=r,this._scrollStrategy.onDataLengthChanged()),this._doChangeDetection()})})}detach(){this._forOf=null,this._detachedSubject.next()}getDataLength(){return this._dataLength}getViewportSize(){return this._viewportSize}getRenderedRange(){return this._renderedRange}setTotalContentSize(e){this._totalContentSize!==e&&(this._totalContentSize=e,this._calculateSpacerSize(),this._markChangeDetectionNeeded())}setRenderedRange(e){(function ct(i,t){return i.start==t.start&&i.end==t.end})(this._renderedRange,e)||(this.appendOnly&&(e={start:0,end:Math.max(this._renderedRange.end,e.end)}),this._renderedRangeSubject.next(this._renderedRange=e),this._markChangeDetectionNeeded(()=>this._scrollStrategy.onContentRendered()))}getOffsetToRenderedContentStart(){return this._renderedContentOffsetNeedsRewrite?null:this._renderedContentOffset}setRenderedContentOffset(e,n="to-start"){const s="horizontal"==this.orientation,l=s?"X":"Y";let a=`translate${l}(${Number((s&&this.dir&&"rtl"==this.dir.value?-1:1)*e)}px)`;this._renderedContentOffset=e=this.appendOnly&&"to-start"===n?0:e,"to-end"===n&&(a+=` translate${l}(-100%)`,this._renderedContentOffsetNeedsRewrite=!0),this._renderedContentTransform!=a&&(this._renderedContentTransform=a,this._markChangeDetectionNeeded(()=>{this._renderedContentOffsetNeedsRewrite?(this._renderedContentOffset-=this.measureRenderedContentSize(),this._renderedContentOffsetNeedsRewrite=!1,this.setRenderedContentOffset(this._renderedContentOffset)):this._scrollStrategy.onRenderedOffsetChanged()}))}scrollToOffset(e,n="auto"){const r={behavior:n};"horizontal"===this.orientation?r.start=e:r.top=e,this.scrollTo(r)}scrollToIndex(e,n="auto"){this._scrollStrategy.scrollToIndex(e,n)}measureScrollOffset(e){return super.measureScrollOffset(e||("horizontal"===this.orientation?"start":"top"))}measureRenderedContentSize(){const e=this._contentWrapper.nativeElement;return"horizontal"===this.orientation?e.offsetWidth:e.offsetHeight}measureRangeSize(e){return this._forOf?this._forOf.measureRangeSize(e,this.orientation):0}checkViewportSize(){this._measureViewportSize(),this._scrollStrategy.onDataLengthChanged()}_measureViewportSize(){const e=this.elementRef.nativeElement;this._viewportSize="horizontal"===this.orientation?e.clientWidth:e.clientHeight}_markChangeDetectionNeeded(e){e&&this._runAfterChangeDetection.push(e),this._isChangeDetectionPending||(this._isChangeDetectionPending=!0,this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._doChangeDetection()})))}_doChangeDetection(){this._isChangeDetectionPending=!1,this._contentWrapper.nativeElement.style.transform=this._renderedContentTransform,this.ngZone.run(()=>this._changeDetectorRef.markForCheck());const e=this._runAfterChangeDetection;this._runAfterChangeDetection=[];for(const n of e)n()}_calculateSpacerSize(){this._totalContentHeight="horizontal"===this.orientation?"":`${this._totalContentSize}px`,this._totalContentWidth="horizontal"===this.orientation?`${this._totalContentSize}px`:""}}return i.\u0275fac=function(e){return new(e||i)(o.Y36(o.SBq),o.Y36(o.sBO),o.Y36(o.R0b),o.Y36(Q,8),o.Y36(K,8),o.Y36(ee),o.Y36(dt))},i.\u0275cmp=o.Xpm({type:i,selectors:[["cdk-virtual-scroll-viewport"]],viewQuery:function(e,n){if(1&e&&o.Gf(it,7),2&e){let r;o.iGM(r=o.CRH())&&(n._contentWrapper=r.first)}},hostAttrs:[1,"cdk-virtual-scroll-viewport"],hostVars:4,hostBindings:function(e,n){2&e&&o.ekj("cdk-virtual-scroll-orientation-horizontal","horizontal"===n.orientation)("cdk-virtual-scroll-orientation-vertical","horizontal"!==n.orientation)},inputs:{orientation:"orientation",appendOnly:"appendOnly"},outputs:{scrolledIndexChange:"scrolledIndexChange"},features:[o._Bn([{provide:te,useExisting:i}]),o.qOj],ngContentSelectors:nt,decls:4,vars:4,consts:[[1,"cdk-virtual-scroll-content-wrapper"],["contentWrapper",""],[1,"cdk-virtual-scroll-spacer"]],template:function(e,n){1&e&&(o.F$t(),o.TgZ(0,"div",0,1),o.Hsn(2),o.qZA(),o._UZ(3,"div",2)),2&e&&(o.xp6(3),o.Udp("width",n._totalContentWidth)("height",n._totalContentHeight))},styles:["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"],encapsulation:2,changeDetection:0}),i})();function ne(i,t,e){if(!e.getBoundingClientRect)return 0;const r=e.getBoundingClientRect();return"horizontal"===i?"start"===t?r.left:r.right:"start"===t?r.top:r.bottom}let ut=(()=>{class i{constructor(e,n,r,s,l,d){this._viewContainerRef=e,this._template=n,this._differs=r,this._viewRepeater=s,this._viewport=l,this.viewChange=new f.x,this._dataSourceChanges=new f.x,this.dataStream=this._dataSourceChanges.pipe((0,Z.O)(null),function Pe(){return(0,A.e)((i,t)=>{let e,n=!1;i.subscribe((0,S.x)(t,r=>{const s=e;e=r,n&&t.next([s,r]),n=!0}))})}(),(0,je.w)(([a,c])=>this._changeDataSource(a,c)),function Ye(i,t,e){let n,r=!1;return i&&"object"==typeof i?({bufferSize:n=1/0,windowTime:t=1/0,refCount:r=!1,scheduler:e}=i):n=null!=i?i:1/0,(0,We.B)({connector:()=>new Ne(n,t,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}(1)),this._differ=null,this._needsUpdate=!1,this._destroyed=new f.x,this.dataStream.subscribe(a=>{this._data=a,this._onRenderedDataChange()}),this._viewport.renderedRangeStream.pipe(N(this._destroyed)).subscribe(a=>{this._renderedRange=a,this.viewChange.observers.length&&d.run(()=>this.viewChange.next(this._renderedRange)),this._onRenderedDataChange()}),this._viewport.attach(this)}get cdkVirtualForOf(){return this._cdkVirtualForOf}set cdkVirtualForOf(e){this._cdkVirtualForOf=e,function Qe(i){return i&&"function"==typeof i.connect}(e)?this._dataSourceChanges.next(e):this._dataSourceChanges.next(new et(G(e)?e:Array.from(e||[])))}get cdkVirtualForTrackBy(){return this._cdkVirtualForTrackBy}set cdkVirtualForTrackBy(e){this._needsUpdate=!0,this._cdkVirtualForTrackBy=e?(n,r)=>e(n+(this._renderedRange?this._renderedRange.start:0),r):void 0}set cdkVirtualForTemplate(e){e&&(this._needsUpdate=!0,this._template=e)}get cdkVirtualForTemplateCacheSize(){return this._viewRepeater.viewCacheSize}set cdkVirtualForTemplateCacheSize(e){this._viewRepeater.viewCacheSize=D(e)}measureRangeSize(e,n){if(e.start>=e.end)return 0;const r=e.start-this._renderedRange.start,s=e.end-e.start;let l,d;for(let a=0;a<s;a++){const c=this._viewContainerRef.get(a+r);if(c&&c.rootNodes.length){l=d=c.rootNodes[0];break}}for(let a=s-1;a>-1;a--){const c=this._viewContainerRef.get(a+r);if(c&&c.rootNodes.length){d=c.rootNodes[c.rootNodes.length-1];break}}return l&&d?ne(n,"end",d)-ne(n,"start",l):0}ngDoCheck(){if(this._differ&&this._needsUpdate){const e=this._differ.diff(this._renderedItems);e?this._applyChanges(e):this._updateContext(),this._needsUpdate=!1}}ngOnDestroy(){this._viewport.detach(),this._dataSourceChanges.next(void 0),this._dataSourceChanges.complete(),this.viewChange.complete(),this._destroyed.next(),this._destroyed.complete(),this._viewRepeater.detach()}_onRenderedDataChange(){!this._renderedRange||(this._renderedItems=this._data.slice(this._renderedRange.start,this._renderedRange.end),this._differ||(this._differ=this._differs.find(this._renderedItems).create((e,n)=>this.cdkVirtualForTrackBy?this.cdkVirtualForTrackBy(e,n):n)),this._needsUpdate=!0)}_changeDataSource(e,n){return e&&e.disconnect(this),this._needsUpdate=!0,n?n.connect(this):(0,L.of)()}_updateContext(){const e=this._data.length;let n=this._viewContainerRef.length;for(;n--;){const r=this._viewContainerRef.get(n);r.context.index=this._renderedRange.start+n,r.context.count=e,this._updateComputedContextProperties(r.context),r.detectChanges()}}_applyChanges(e){this._viewRepeater.applyChanges(e,this._viewContainerRef,(s,l,d)=>this._getEmbeddedViewArgs(s,d),s=>s.item),e.forEachIdentityChange(s=>{this._viewContainerRef.get(s.currentIndex).context.$implicit=s.item});const n=this._data.length;let r=this._viewContainerRef.length;for(;r--;){const s=this._viewContainerRef.get(r);s.context.index=this._renderedRange.start+r,s.context.count=n,this._updateComputedContextProperties(s.context)}}_updateComputedContextProperties(e){e.first=0===e.index,e.last=e.index===e.count-1,e.even=e.index%2==0,e.odd=!e.even}_getEmbeddedViewArgs(e,n){return{templateRef:this._template,context:{$implicit:e.item,cdkVirtualForOf:this._cdkVirtualForOf,index:-1,count:-1,first:!1,last:!1,odd:!1,even:!1},index:n}}}return i.\u0275fac=function(e){return new(e||i)(o.Y36(o.s_b),o.Y36(o.Rgc),o.Y36(o.ZZ4),o.Y36(J),o.Y36(ie,4),o.Y36(o.R0b))},i.\u0275dir=o.lG2({type:i,selectors:[["","cdkVirtualFor","","cdkVirtualForOf",""]],inputs:{cdkVirtualForOf:"cdkVirtualForOf",cdkVirtualForTrackBy:"cdkVirtualForTrackBy",cdkVirtualForTemplate:"cdkVirtualForTemplate",cdkVirtualForTemplateCacheSize:"cdkVirtualForTemplateCacheSize"},features:[o._Bn([{provide:J,useClass:tt}])]}),i})(),re=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({}),i})(),ft=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[[X,re],X,re]}),i})()}}]);