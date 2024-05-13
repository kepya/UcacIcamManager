"use strict";(self.webpackChunkadmin_ucac_dashboard=self.webpackChunkadmin_ucac_dashboard||[]).push([[590],{5119:(R,E,r)=>{r.d(E,{T:()=>C});var e=r(2340),h=r(7587),g=r(520),t=r(4920);let C=(()=>{class n{constructor(o,f){this.http=o,this.baseUrlSvr=f,this.url="",this.url=`${this.baseUrlSvr.getOrigin()}${e.N.administrationPath}`,this.url+="centre_examen/"}liste(){return this.http.get(this.url+"all")}allByZone(o){return this.http.get(this.url+"allbyzone/"+o)}allBySite(o){return this.http.get(this.url+"allbysite/"+o)}getOne(o){return this.http.get(this.url+o)}create(o){return this.http.post(this.url+"create",o)}update(o){return this.http.patch(this.url+(null==o?void 0:o.id),o)}delete(o){return this.http.delete(this.url+o)}}return n.\u0275fac=function(o){return new(o||n)(h.LFG(g.eN),h.LFG(t.x))},n.\u0275prov=h.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},1590:(R,E,r)=>{r.r(E),r.d(E,{NoteEntretienModule:()=>W});var e=r(9808),h=r(7671),g=r(5193),t=r(7587),C=r(5119),n=r(1303),l=r(7755),o=r(9783),f=r(62),T=r(8766),P=r(7921),Z=r(4036),x=r(2382),M=r(845),D=r(4255),a=r(1424);function _(c,b){if(1&c){const s=t.EpF();t.TgZ(0,"div",17)(1,"div")(2,"h2",18),t._uU(3,"Note Entretiens"),t.qZA(),t.TgZ(4,"h4",19),t._uU(5),t.ALo(6,"date"),t.qZA()(),t.TgZ(7,"div")(8,"button",20),t.NdJ("click",function(){t.CHM(s);const u=t.oxw(),v=t.MAs(15);return u.commonService.clear(v)}),t.qZA(),t.TgZ(9,"span",21),t._UZ(10,"i",22),t.TgZ(11,"input",23),t.NdJ("input",function(u){t.CHM(s);const v=t.oxw();return t.MAs(15).filterGlobal(v.getEventValue(u),"contains")}),t.qZA()()()()}if(2&c){const s=t.oxw();t.xp6(5),t.hij("Session de ",t.Dn7(6,1,null==s.session?null:s.session.date_examen,"MMMM","fr"),"")}}function i(c,b){1&c&&(t.TgZ(0,"tr")(1,"th",24)(2,"div",25),t._uU(3," Candidat "),t._UZ(4,"p-columnFilter",26),t.qZA()(),t.TgZ(5,"th",24)(6,"div",25),t._uU(7," Centre "),t._UZ(8,"p-columnFilter",27),t.qZA()(),t.TgZ(9,"th",24)(10,"div",25),t._uU(11," Jury 1 "),t._UZ(12,"p-columnFilter",28),t.qZA()(),t.TgZ(13,"th",29)(14,"div",25),t._uU(15," Date "),t._UZ(16,"p-columnFilter",30),t.qZA()(),t.TgZ(17,"th",29)(18,"div",25),t._uU(19," Jury 2 "),t._UZ(20,"p-columnFilter",30),t.qZA()(),t.TgZ(21,"th",31),t._uU(22,"Note globale "),t._UZ(23,"p-columnFilter",30),t.qZA()())}function d(c,b){if(1&c&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"date"),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._UZ(13,"button",32),t.qZA()()),2&c){const s=b.$implicit;t.xp6(2),t.hij(" ",s.candidat," "),t.xp6(2),t.hij(" ",s.centre," "),t.xp6(2),t.hij(" ",s.jury1," "),t.xp6(2),t.hij(" ",t.xi3(9,5,s.debut_entretien,"MM/dd/yyyy")," "),t.xp6(3),t.hij(" ",s.jury2," ")}}function m(c,b){1&c&&(t.TgZ(0,"tr")(1,"td",33),t._uU(2,"Aucun entretien programm\xe9 pour le moment."),t.qZA()())}const y=function(){return[5,10,25,50]},j=function(){return["candidat","jury","done","centre","debut_entretien"]};let B=(()=>{class c{constructor(s,p,u,v,L,A,O,U,I){this.centreSrv=s,this.storageService=p,this.zoneService=u,this.messageService=v,this.commonService=L,this.confirmationService=A,this.noteService=O,this.router=U,this.sessionSrv=I,this.loading=!1,this.entretiens=[],this.isJury=!1}ngOnInit(){this.compte=this.storageService.getUserConnected(),this.isJury=this.compte.role==g.u.JURY,this.statuses=this.commonService.getStatuses(),this.compte=this.storageService.getUserConnected(),this.getActiveSession(),this.getEntretiens(),this.getZones()}getActiveSession(){this.sessionSrv.getActive().subscribe({next:s=>{this.session=s}})}getZones(){this.zoneService.liste().subscribe({next:s=>{this.zones=s},error:s=>{console.log("error: ",s)}})}getEntretiens(){this.noteService.liste().subscribe({next:s=>{let p=s.map(u=>{var v,L,A,O,U,I;return{id:null!==(v=u.id)&&void 0!==v?v:0,candidat:(null===(L=u.candidature.compte)||void 0===L?void 0:L.name)+" "+(null===(A=u.candidature.compte)||void 0===A?void 0:A.prenom),commentaires:u.commentaires,done:u.done,cycle:u.candidature.cycle.toString(),centre:(null===(O=u.candidature)||void 0===O?void 0:O.centre)||"",jury:(null===(U=u.compte)||void 0===U?void 0:U.name)+" "+(null===(I=u.compte)||void 0===I?void 0:I.prenom),candidature:u.candidature,debut_entretien:new Date(u.debut_entretien),fin_entretien:new Date(u.fin_entretien)}});this.entretiens=this.compte.role==g.u.JURY?p.filter(u=>u.jury==this.compte.name+" "+this.compte.prenom):p},error:s=>{console.log("error: ",s)}})}goToPlanificationPage(s){this.router.navigate(["/define_note_planning/"+s.id])}confirm(s,p){this.confirmationService.confirm({target:s.target,message:"\xcates vous sures de vouloir continuer ?",icon:"pi pi-question",acceptLabel:"Oui",rejectLabel:"Non",accept:()=>{this.deleteEntretien(p)},reject:()=>{this.messageService.add({severity:"error",summary:"Non",detail:"vous avez annul\xe9 la suppresion"})}})}deleteEntretien(s){this.noteService.delete(s||0).subscribe({next:p=>{this.getEntretiens(),this.messageService.add({severity:"success",summary:"Suppression de l'entretien",detail:"Suppression effectu\xe9e avec success"})},error:p=>{console.log("Error: ",p),this.messageService.add({severity:"error",summary:"Erreur de suppression",detail:p.message})}})}getEventValue(s){return null!=s.target?s.target.value:""}}return c.\u0275fac=function(s){return new(s||c)(t.Y36(C.T),t.Y36(n.V),t.Y36(l.b),t.Y36(o.ez),t.Y36(f.v),t.Y36(o.YP),t.Y36(T.Y),t.Y36(h.F0),t.Y36(P.K))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-note-entretien"]],decls:20,vars:16,consts:[[1,"note-page","page-content"],[1,"page-title"],[1,"pi","pi-angle-right"],[1,"card"],[1,"header"],[1,"title"],[1,"mb-1"],["optionLabel","nom","placeholder","Choisir une zone",3,"tooltipPosition","options","filter","showClear","ngModel","ngModelChange"],["pButton","","pRipple","","type","button","label","Telecharger les notes",1,"ml-2","p-button-sm","p-button-raised","bg-orange-500","border-orange-500"],[1,"line"],[1,"mt-3"],["selectionMode","single","dataKey","candidat","responsiveLayout","scroll","dataKey","id","currentPageReportTemplate","Pr\xe9sente {first} \xe0 {last} de {totalRecords} entr\xe9es",3,"selection","value","rows","showCurrentPageReport","rowsPerPageOptions","loading","paginator","globalFilterFields","selectionChange"],["dt1",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],[1,"vh-space-between","flex","justify-content-between"],[1,"text-lg","font-bold"],[1,"text-orange-500"],["pButton","","label","Reiniatialiser","icon","pi pi-filter-slash",1,"p-button-outlined","mr-2",3,"click"],[1,"ml-2","p-input-icon-left","ml-auto"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Rechercher",3,"input"],[2,"min-width","15rem"],[1,"flex","align-items-center"],["type","text","field","candidat","display","menu"],["type","text","field","centre","display","menu"],["type","text","field","jury","display","menu"],[2,"min-width","10rem"],["type","date","field","debut_entretien","display","menu"],[2,"width","4rem"],["pButton","","pRipple","","type","button","icon","pi pi-times",1,"p-button-rounded","p-button-danger"],["colspan","6"]],template:function(s,p){1&s&&(t.TgZ(0,"section",0)(1,"h1",1),t._uU(2," Entretiens "),t._UZ(3,"i",2),t._uU(4," Notes entretiens"),t.qZA(),t.TgZ(5,"div",3)(6,"div",4)(7,"h3",5),t._uU(8,"Liste des notes "),t.qZA(),t.TgZ(9,"div",6)(10,"p-dropdown",7),t.NdJ("ngModelChange",function(v){return p.zone=v}),t.qZA(),t._UZ(11,"button",8),t.qZA()(),t._UZ(12,"div",9),t.TgZ(13,"section",10)(14,"p-table",11,12),t.NdJ("selectionChange",function(v){return p.selectedEntretien=v}),t.YNc(16,_,12,5,"ng-template",13),t.YNc(17,i,24,0,"ng-template",14),t.YNc(18,d,14,8,"ng-template",15),t.YNc(19,m,3,0,"ng-template",16),t.qZA()()()()),2&s&&(t.xp6(10),t.Q6J("tooltipPosition","top")("options",p.zones)("filter",!0)("showClear",!0)("ngModel",p.zone)("showClear",!0),t.xp6(4),t.Q6J("selection",p.selectedEntretien)("value",p.entretiens)("rows",5)("showCurrentPageReport",!0)("rowsPerPageOptions",t.DdM(14,y))("loading",p.loading)("paginator",!0)("globalFilterFields",t.DdM(15,j)))},directives:[Z.Lt,x.JJ,x.On,M.Hq,D.iA,o.jx,a.o,D.xl],pipes:[e.uU],encapsulation:2}),c})();var S=r(7618);const w=[{path:"",component:B,canActivate:[S.a]}];let N=(()=>{class c{}return c.\u0275fac=function(s){return new(s||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({providers:[S.a],imports:[[h.Bz.forChild(w)],h.Bz]}),c})();var F=r(7307),J=r(5315),Y=r(9142),z=r(7773);let W=(()=>{class c{}return c.\u0275fac=function(s){return new(s||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[[e.ez,N,x.u5,x.UX,z.EV,F.n,M.hJ,o.m8,x.u5,Y.W,Z.kW,D.U$,a.j,J.S]]}),c})()},62:(R,E,r)=>{r.d(E,{v:()=>g});var e=r(9808),h=r(7587);let g=(()=>{class t{constructor(){}calculerJours(n,l){var o=Math.abs(l-n);return Math.floor(o/864e5)}clear(n){n.clear()}getStatuses(){return[{label:!1,value:"A faire"},{label:!0,value:"R\xe9alis\xe9"}]}getSeverity(n){switch(n){case!1:return"danger";case!0:return"success";default:return"warning"}}getStatusLabel(n){switch(n){case!1:return"A faire";case!0:return"R\xe9alis\xe9";default:return""}}getFormationLabel(n){return"Ing\xe9nieur g\xe9n\xe9raliste parcours international"==n?"OP":"Ing\xe9nieur g\xe9n\xe9raliste par apprentissage ou g\xe9nie des proc\xe9d\xe9s"==n?"L":"Ing\xe9nieur genie des proc\xe9d\xe9s"==n?"IP":"Ing\xe9nieur g\xe9neraliste parcours international et innovation"==n?"I":"Ing\xe9nieur g\xe9nie Informtique"==n?"X":""}genererDates(n,l){let o=this.calculerJours(n,l);console.log("nombre jour:",o);let f=[],T=new Date(n);f.push(new Date(n));for(let P=0;P<o;P++)T.setDate(T.getDate()+1),f.push(new Date(T));return f}formatDate(n){let o=(0,e.p6)(n,"shortTime","fr-FR").split(":");return o[0]+"h"+o[1]}buildDateWithTime(n){const l=new Date;return new Date(`${l.getFullYear()}-${l.getMonth()+1}-${l.getDate()} ${n}`)}buildDate(n,l){let f,T,o=l.split("-"),Z=o[0].split("h");n.setHours(parseInt(Z[0],10)+1),n.setMinutes(parseInt(Z[1],10)),f=n.getTime();let M=o[1].split("h");return n.setHours(parseInt(M[0],10)+1),n.setMinutes(parseInt(M[1],10)),T=n.getTime(),{startDate:f,endDate:T}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=h.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},7755:(R,E,r)=>{r.d(E,{b:()=>C});var e=r(2340),h=r(7587),g=r(520),t=r(4920);let C=(()=>{class n{constructor(o,f){this.http=o,this.baseUrlSvr=f,this.url="",this.url=`${this.baseUrlSvr.getOrigin()}${e.N.administrationPath}`,this.url+="zone/"}liste(){return this.http.get(this.url+"all")}getOne(o){return this.http.get(this.url+o)}create(o){return this.http.post(this.url+"create",o)}update(o){return this.http.patch(this.url+(null==o?void 0:o.id),o)}delete(o){return this.http.delete(this.url+o)}}return n.\u0275fac=function(o){return new(o||n)(h.LFG(g.eN),h.LFG(t.x))},n.\u0275prov=h.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},7307:(R,E,r)=>{r.d(E,{P:()=>M,n:()=>D});var e=r(7587),h=r(9808),g=r(9783),t=r(845),C=r(5921),n=r(1777),l=r(5730);function o(a,_){if(1&a&&e._UZ(0,"i",8),2&a){const i=e.oxw(2);e.Tol(i.confirmation.icon),e.Q6J("ngClass","p-confirm-popup-icon")}}function f(a,_){if(1&a){const i=e.EpF();e.TgZ(0,"button",9),e.NdJ("click",function(){return e.CHM(i),e.oxw(2).reject()}),e.qZA()}if(2&a){const i=e.oxw(2);e.Tol(i.confirmation.rejectButtonStyleClass||"p-button-text"),e.Q6J("icon",i.confirmation.rejectIcon)("label",i.rejectButtonLabel)("ngClass","p-confirm-popup-reject p-button-sm"),e.uIk("aria-label",i.rejectButtonLabel)}}function T(a,_){if(1&a){const i=e.EpF();e.TgZ(0,"button",9),e.NdJ("click",function(){return e.CHM(i),e.oxw(2).accept()}),e.qZA()}if(2&a){const i=e.oxw(2);e.Tol(i.confirmation.acceptButtonStyleClass),e.Q6J("icon",i.confirmation.acceptIcon)("label",i.acceptButtonLabel)("ngClass","p-confirm-popup-accept p-button-sm"),e.uIk("aria-label",i.acceptButtonLabel)}}const P=function(a,_){return{showTransitionParams:a,hideTransitionParams:_}},Z=function(a){return{value:"open",params:a}};function x(a,_){if(1&a){const i=e.EpF();e.TgZ(0,"div",1),e.NdJ("click",function(m){return e.CHM(i),e.oxw().onOverlayClick(m)})("@animation.start",function(m){return e.CHM(i),e.oxw().onAnimationStart(m)})("@animation.done",function(m){return e.CHM(i),e.oxw().onAnimationEnd(m)}),e.TgZ(1,"div",2,3),e.YNc(3,o,1,3,"i",4),e.TgZ(4,"span",5),e._uU(5),e.qZA()(),e.TgZ(6,"div",6),e.YNc(7,f,1,6,"button",7),e.YNc(8,T,1,6,"button",7),e.qZA()()}if(2&a){const i=e.oxw();e.Tol(i.styleClass),e.Q6J("ngClass","p-confirm-popup p-component")("ngStyle",i.style)("@animation",e.VKq(12,Z,e.WLB(9,P,i.showTransitionOptions,i.hideTransitionOptions))),e.xp6(3),e.Q6J("ngIf",i.confirmation.icon),e.xp6(2),e.Oqu(i.confirmation.message),e.xp6(2),e.Q6J("ngIf",!1!==i.confirmation.rejectVisible),e.xp6(1),e.Q6J("ngIf",!1!==i.confirmation.acceptVisible)}}let M=(()=>{class a{constructor(i,d,m,y,j,B){this.el=i,this.confirmationService=d,this.renderer=m,this.cd=y,this.config=j,this.overlayService=B,this.defaultFocus="accept",this.showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)",this.hideTransitionOptions=".1s linear",this.autoZIndex=!0,this.baseZIndex=0,this.subscription=this.confirmationService.requireConfirmation$.subscribe(S=>{S?S.key===this.key&&(this.confirmation=S,this.confirmation.accept&&(this.confirmation.acceptEvent=new e.vpe,this.confirmation.acceptEvent.subscribe(this.confirmation.accept)),this.confirmation.reject&&(this.confirmation.rejectEvent=new e.vpe,this.confirmation.rejectEvent.subscribe(this.confirmation.reject)),this.visible=!0):this.hide()})}get visible(){return this._visible}set visible(i){this._visible=i,this.cd.markForCheck()}onAnimationStart(i){if("open"===i.toState){this.container=i.element,document.body.appendChild(this.container),this.align(),this.bindListeners();const d=this.getElementToFocus();d&&d.focus()}}onAnimationEnd(i){"void"===i.toState&&this.onContainerDestroy()}getElementToFocus(){switch(this.defaultFocus){case"accept":return l.p.findSingle(this.container,".p-confirm-popup-accept");case"reject":return l.p.findSingle(this.container,".p-confirm-popup-reject");case"none":return null}}align(){this.autoZIndex&&C.P9.set("overlay",this.container,this.config.zIndex.overlay),l.p.absolutePosition(this.container,this.confirmation.target);const i=l.p.getOffset(this.container),d=l.p.getOffset(this.confirmation.target);let m=0;i.left<d.left&&(m=d.left-i.left),this.container.style.setProperty("--overlayArrowLeft",`${m}px`),i.top<d.top&&l.p.addClass(this.container,"p-confirm-popup-flipped")}hide(){this.visible=!1}accept(){this.confirmation.acceptEvent&&this.confirmation.acceptEvent.emit(),this.hide()}reject(){this.confirmation.rejectEvent&&this.confirmation.rejectEvent.emit(),this.hide()}onOverlayClick(i){this.overlayService.add({originalEvent:i,target:this.el.nativeElement})}bindListeners(){this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener()}unbindListeners(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}bindDocumentClickListener(){if(!this.documentClickListener){let i=l.p.isIOS()?"touchstart":"click";const d=this.el?this.el.nativeElement.ownerDocument:document;this.documentClickListener=this.renderer.listen(d,i,m=>{let y=this.confirmation.target;this.container!==m.target&&!this.container.contains(m.target)&&y!==m.target&&!y.contains(m.target)&&this.hide()})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}onWindowResize(){this.hide()}bindDocumentResizeListener(){this.documentResizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.documentResizeListener)}unbindDocumentResizeListener(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new l.V(this.confirmation.target,()=>{this.visible&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unsubscribeConfirmationSubscriptions(){this.confirmation&&(this.confirmation.acceptEvent&&this.confirmation.acceptEvent.unsubscribe(),this.confirmation.rejectEvent&&this.confirmation.rejectEvent.unsubscribe())}onContainerDestroy(){this.unbindListeners(),this.unsubscribeConfirmationSubscriptions(),this.autoZIndex&&C.P9.clear(this.container),this.confirmation=null,this.container=null}restoreAppend(){this.container&&document.body.removeChild(this.container),this.onContainerDestroy()}get acceptButtonLabel(){return this.confirmation.acceptLabel||this.config.getTranslation(g.ws.ACCEPT)}get rejectButtonLabel(){return this.confirmation.rejectLabel||this.config.getTranslation(g.ws.REJECT)}ngOnDestroy(){this.restoreAppend(),this.subscription&&this.subscription.unsubscribe()}}return a.\u0275fac=function(i){return new(i||a)(e.Y36(e.SBq),e.Y36(g.YP),e.Y36(e.Qsj),e.Y36(e.sBO),e.Y36(g.b4),e.Y36(g.F0))},a.\u0275cmp=e.Xpm({type:a,selectors:[["p-confirmPopup"]],hostAttrs:[1,"p-element"],inputs:{key:"key",defaultFocus:"defaultFocus",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",style:"style",styleClass:"styleClass",visible:"visible"},decls:1,vars:1,consts:[[3,"ngClass","ngStyle","class","click",4,"ngIf"],[3,"ngClass","ngStyle","click"],[1,"p-confirm-popup-content"],["content",""],[3,"ngClass","class",4,"ngIf"],[1,"p-confirm-popup-message"],[1,"p-confirm-popup-footer"],["type","button","pButton","",3,"icon","label","ngClass","class","click",4,"ngIf"],[3,"ngClass"],["type","button","pButton","",3,"icon","label","ngClass","click"]],template:function(i,d){1&i&&e.YNc(0,x,9,14,"div",0),2&i&&e.Q6J("ngIf",d.visible)},directives:[h.O5,h.mk,h.PC,t.Hq],styles:['.p-confirm-popup{position:absolute;margin-top:10px;top:0;left:0}.p-confirm-popup-flipped{margin-top:0;margin-bottom:10px}.p-confirm-popup:after,.p-confirm-popup:before{bottom:100%;left:calc(var(--overlayArrowLeft, 0) + 1.25rem);content:" ";height:0;width:0;position:absolute;pointer-events:none}.p-confirm-popup:after{border-width:8px;margin-left:-8px}.p-confirm-popup:before{border-width:10px;margin-left:-10px}.p-confirm-popup-flipped:after,.p-confirm-popup-flipped:before{bottom:auto;top:100%}.p-confirm-popup.p-confirm-popup-flipped:after{border-bottom-color:transparent}.p-confirm-popup.p-confirm-popup-flipped:before{border-bottom-color:transparent}.p-confirm-popup .p-confirm-popup-content{display:flex;align-items:center}\n'],encapsulation:2,data:{animation:[(0,n.X$)("animation",[(0,n.SB)("void",(0,n.oB)({transform:"scaleY(0.8)",opacity:0})),(0,n.SB)("open",(0,n.oB)({transform:"translateY(0)",opacity:1})),(0,n.eR)("void => open",(0,n.jt)("{{showTransitionParams}}")),(0,n.eR)("open => void",(0,n.jt)("{{hideTransitionParams}}"))])]},changeDetection:0}),a})(),D=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[h.ez,t.hJ]]}),a})()}}]);