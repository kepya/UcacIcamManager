"use strict";(self.webpackChunkadmin_ucac_dashboard=self.webpackChunkadmin_ucac_dashboard||[]).push([[590],{5119:(O,b,i)=>{i.d(b,{T:()=>t});var e=i(2340),d=i(7587),h=i(520),g=i(4920);let t=(()=>{class o{constructor(n,c){this.http=n,this.baseUrlSvr=c,this.url="",this.url=`${this.baseUrlSvr.getOrigin()}${e.N.administrationPath}`,this.url+="centre_examen/"}liste(){return this.http.get(this.url+"all")}allByZone(n){return this.http.get(this.url+"allbyzone/"+n)}allBySite(n){return this.http.get(this.url+"allbysite/"+n)}getOne(n){return this.http.get(this.url+n)}create(n){return this.http.post(this.url+"create",n)}update(n){return this.http.patch(this.url+(null==n?void 0:n.id),n)}delete(n){return this.http.delete(this.url+n)}}return o.\u0275fac=function(n){return new(n||o)(d.LFG(h.eN),d.LFG(g.x))},o.\u0275prov=d.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},1590:(O,b,i)=>{i.r(b),i.d(b,{NoteEntretienModule:()=>k});var e=i(9808),d=i(7671),h=i(5193),g=i(4327),t=i(7587),o=i(5119),s=i(1303),n=i(7755),c=i(9783),f=i(62),T=i(8766),M=i(7921),x=i(845),_=i(4255),D=i(1424),l=i(5515),y=i(7773),a=i(7307);function v(p,P){if(1&p){const r=t.EpF();t.TgZ(0,"div",17)(1,"div")(2,"h2",18),t._uU(3,"Note Entretiens"),t.qZA(),t.TgZ(4,"h4",19),t._uU(5),t.ALo(6,"date"),t.qZA()(),t.TgZ(7,"div")(8,"button",20),t.NdJ("click",function(){t.CHM(r);const m=t.oxw(),C=t.MAs(14);return m.commonService.clear(C)}),t.qZA(),t.TgZ(9,"span",21),t._UZ(10,"i",22),t.TgZ(11,"input",23),t.NdJ("input",function(m){t.CHM(r);const C=t.oxw();return t.MAs(14).filterGlobal(C.getEventValue(m),"contains")}),t.qZA()()()()}if(2&p){const r=t.oxw();t.xp6(5),t.hij("Session de ",t.Dn7(6,1,null==r.session?null:r.session.date_examen,"MMMM","fr"),"")}}function E(p,P){1&p&&(t.TgZ(0,"tr")(1,"th",24)(2,"div",25),t._uU(3," Nom "),t._UZ(4,"p-columnFilter",26),t.qZA()(),t.TgZ(5,"th",24)(6,"div",25),t._uU(7," Prenom "),t._UZ(8,"p-columnFilter",27),t.qZA()(),t.TgZ(9,"th",24)(10,"div",25),t._uU(11," Centre "),t._UZ(12,"p-columnFilter",28),t.qZA()(),t.TgZ(13,"th",24)(14,"div",25),t._uU(15," Nationalit\xe9 "),t._UZ(16,"p-columnFilter",29),t.qZA()(),t.TgZ(17,"th",30)(18,"div",25),t._uU(19," Veut la bourse "),t._UZ(20,"p-columnFilter",31),t.qZA()(),t._UZ(21,"th",32),t.qZA())}function A(p,P){if(1&p){const r=t.EpF();t.TgZ(0,"button",36),t.NdJ("click",function(){t.CHM(r);const m=t.oxw().$implicit;return t.oxw().showUpdateNoteModal(m)}),t.qZA()}}function N(p,P){if(1&p){const r=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td",33)(12,"button",34),t.NdJ("click",function(){const C=t.CHM(r).$implicit;return t.oxw().goToNoteSumaryPage(C.idCandidature)}),t.qZA(),t.YNc(13,A,1,0,"button",35),t.qZA()()}if(2&p){const r=P.$implicit,u=t.oxw();t.xp6(2),t.hij(" ",r.nom," "),t.xp6(2),t.hij(" ",r.prenom," "),t.xp6(2),t.hij(" ",r.centre," "),t.xp6(2),t.hij(" ",r.nationalite," "),t.xp6(2),t.hij(" ",r.has_exchange?"Oui":"Non"," "),t.xp6(3),t.Q6J("ngIf",u.isSuperAdmin)}}function R(p,P){1&p&&(t.TgZ(0,"tr")(1,"td",37),t._uU(2,"Aucune note pour le moment."),t.qZA()())}function Z(p,P){if(1&p){const r=t.EpF();t.TgZ(0,"app-parcours-dialog",38),t.NdJ("criteria",function(m){return t.CHM(r),t.oxw().getCriteria(m)}),t.qZA()}if(2&p){const r=t.oxw();t.Q6J("visible",r.visible)("showExportAllCandidature",!1)}}const j=function(){return[5,10,25,50]},Y=function(){return["nom","prenom","nationalite","centre","has_exchange"]};let W=(()=>{class p{constructor(r,u,m,C,S,L,U,I,w){this.centreSrv=r,this.storageService=u,this.zoneService=m,this.messageService=C,this.commonService=S,this.confirmationService=L,this.noteService=U,this.router=I,this.sessionSrv=w,this.loading=!1,this.visible=!1,this.notes=[],this.entretiens=[],this.isJury=!1,this.showNote=!1,this.isSuperAdmin=!1,this.isComptable=!1,this.isAdmin=!1}ngOnInit(){this.compte=this.storageService.getUserConnected(),this.isJury=this.compte.role==h.u.JURY,this.isAdmin=this.compte.role==h.u.ADMIN,this.isComptable=this.compte.role==h.u.COMPTABLE,this.isSuperAdmin=this.compte.role==h.u.SUPER_ADMIN,this.statuses=this.commonService.getStatuses(),this.compte=this.storageService.getUserConnected(),this.getNotes(),this.getActiveSession()}getActiveSession(){this.sessionSrv.getActive().subscribe({next:r=>{this.session=r}})}getZones(){this.zoneService.liste().subscribe({next:r=>{this.zones=r},error:r=>{console.log("error: ",r)}})}getNotes(){this.noteService.allNotesEntretien().subscribe({next:r=>{this.notes=r.map(u=>({nom:u.candidature.compte.name,idCandidature:u.candidature.id||0,prenom:u.candidature.compte.prenom,centre:u.candidature.centre,nationalite:u.candidature.nationalite,has_exchange:u.candidature.has_exchange||!1,noteParcours:new Map,juries:[]}))},error:r=>{console.log("error: ",r)}})}getEntretiens(){this.noteService.liste().subscribe({next:r=>{let u=r.map(m=>{var C,S,L,U,I,w;return{id:null!==(C=m.id)&&void 0!==C?C:0,candidat:(null===(S=m.candidature.compte)||void 0===S?void 0:S.name)+" "+(null===(L=m.candidature.compte)||void 0===L?void 0:L.prenom),commentaires:m.commentaires,done:m.done,cycle:m.candidature.cycle.toString(),centre:(null===(U=m.candidature)||void 0===U?void 0:U.centre)||"",jury:(null===(I=m.compte)||void 0===I?void 0:I.name)+" "+(null===(w=m.compte)||void 0===w?void 0:w.prenom),candidature:m.candidature,debut_entretien:this.commonService.formatDate1(new Date(m.debut_entretien)),fin_entretien:this.commonService.formatDate1(new Date(m.fin_entretien))}});u.sort((m,C)=>m.debut_entretien>C.debut_entretien?1:C.debut_entretien>m.debut_entretien?-1:0),this.entretiens=this.compte.role==h.u.JURY?u.filter(m=>m.jury==this.compte.name+" "+this.compte.prenom):u},error:r=>{console.log("error: ",r)}})}showUpdateNoteModal(r){}confirm(r,u){this.confirmationService.confirm({target:r.target,message:"\xcates vous sures de vouloir continuer ?",icon:"pi pi-question",acceptLabel:"Oui",rejectLabel:"Non",accept:()=>{this.deleteEntretien(u)},reject:()=>{this.messageService.add({severity:"error",summary:"Non",detail:"vous avez annul\xe9 la suppresion"})}})}deleteEntretien(r){this.noteService.delete(r||0).subscribe({next:u=>{this.getEntretiens(),this.messageService.add({severity:"success",summary:"Suppression de l'entretien",detail:"Suppression effectu\xe9e avec success"})},error:u=>{console.log("Error: ",u),this.messageService.add({severity:"error",summary:"Erreur de suppression",detail:u.message})}})}getEventValue(r){return null!=r.target?r.target.value:""}goToNoteSumaryPage(r){this.router.navigate(["/note_summary/"+r])}showDialog(){this.visible=!0}getCriteria(r){this.visible=!1,this.noteService.downloadNoteEntretienUrlFile(r.cycle,r.formation).subscribe({next:u=>{(0,g.saveAs)(u,"note_entretien_"+r.cycle+"_cycle_"+r.formation+".xlsx")},error:u=>{console.log("error: ",u)}})}}return p.\u0275fac=function(r){return new(r||p)(t.Y36(o.T),t.Y36(s.V),t.Y36(n.b),t.Y36(c.ez),t.Y36(f.v),t.Y36(c.YP),t.Y36(T.Y),t.Y36(d.F0),t.Y36(M.K))},p.\u0275cmp=t.Xpm({type:p,selectors:[["app-note-entretien"]],decls:22,vars:11,consts:[[1,"note-page","page-content"],[1,"page-title"],[1,"pi","pi-angle-right"],[1,"card"],[1,"header"],[1,"title"],[1,"mb-1"],["pButton","","pRipple","","type","button","label","Telecharger les notes",1,"ml-2","p-button-sm","p-button-raised","bg-orange-500","border-orange-500",3,"click"],[1,"line"],[1,"mt-3"],["selectionMode","single","dataKey","candidat","responsiveLayout","scroll","dataKey","idCandidature","currentPageReportTemplate","Pr\xe9sente {first} \xe0 {last} de {totalRecords} entr\xe9es",3,"selection","value","rows","showCurrentPageReport","rowsPerPageOptions","loading","paginator","globalFilterFields","selectionChange"],["dt1",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],[3,"visible","showExportAllCandidature","criteria",4,"ngIf"],[1,"vh-space-between","flex","justify-content-between"],[1,"text-lg","font-bold"],[1,"text-orange-500"],["pButton","","label","R\xe9initialiser","icon","pi pi-filter-slash",1,"p-button-outlined","mr-2",3,"click"],[1,"ml-2","p-input-icon-left","ml-auto"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Rechercher",3,"input"],[2,"min-width","15rem"],[1,"flex","align-items-center"],["type","text","field","nom","display","menu"],["type","text","field","prenom","display","menu"],["type","text","field","centre","display","menu"],["type","text","field","nationalite","display","menu"],[2,"min-width","10rem"],["type","text","field","has_exchange","display","menu"],[2,"width","6rem"],[1,"flex","gap-1"],["type","button","pButton","","pRipple","","icon","pi pi-arrow-right",1,"p-button-sm","p-button-raised",3,"click"],["type","button","class","p-button-sm p-button-raised p-button-danger","text","","raised","","pButton","","pRipple","","icon","pi pi-pencil","severity","danger",3,"click",4,"ngIf"],["type","button","text","","raised","","pButton","","pRipple","","icon","pi pi-pencil","severity","danger",1,"p-button-sm","p-button-raised","p-button-danger",3,"click"],["colspan","6"],[3,"visible","showExportAllCandidature","criteria"]],template:function(r,u){1&r&&(t.TgZ(0,"section",0)(1,"h1",1),t._uU(2," Entretiens "),t._UZ(3,"i",2),t._uU(4," Notes entretiens"),t.qZA(),t.TgZ(5,"div",3)(6,"div",4)(7,"h3",5),t._uU(8,"Liste des notes "),t.qZA(),t.TgZ(9,"div",6)(10,"button",7),t.NdJ("click",function(){return u.showDialog()}),t.qZA()()(),t._UZ(11,"div",8),t.TgZ(12,"section",9)(13,"p-table",10,11),t.NdJ("selectionChange",function(C){return u.selectedEntretien=C}),t.YNc(15,v,12,5,"ng-template",12),t.YNc(16,E,22,0,"ng-template",13),t.YNc(17,N,14,6,"ng-template",14),t.YNc(18,R,3,0,"ng-template",15),t.qZA()()()(),t.YNc(19,Z,1,2,"app-parcours-dialog",16),t._UZ(20,"p-toast")(21,"p-confirmPopup")),2&r&&(t.xp6(13),t.Q6J("selection",u.selectedEntretien)("value",u.notes)("rows",5)("showCurrentPageReport",!0)("rowsPerPageOptions",t.DdM(9,j))("loading",u.loading)("paginator",!0)("globalFilterFields",t.DdM(10,Y)),t.xp6(6),t.Q6J("ngIf",u.visible))},directives:[x.Hq,_.iA,c.jx,D.o,_.xl,e.O5,l.j,y.FN,a.P],pipes:[e.uU],encapsulation:2}),p})();var F=i(7618);const K=[{path:"",component:W,canActivate:[F.a]}];let z=(()=>{class p{}return p.\u0275fac=function(r){return new(r||p)},p.\u0275mod=t.oAB({type:p}),p.\u0275inj=t.cJS({providers:[F.a],imports:[[d.Bz.forChild(K)],d.Bz]}),p})();var B=i(2382),H=i(5315),Q=i(4036),$=i(9142),J=i(4466);let k=(()=>{class p{}return p.\u0275fac=function(r){return new(r||p)},p.\u0275mod=t.oAB({type:p}),p.\u0275inj=t.cJS({imports:[[e.ez,z,B.u5,B.UX,J.m,y.EV,a.n,x.hJ,J.m,B.u5,$.W,Q.kW,_.U$,D.j,H.S]]}),p})()},5515:(O,b,i)=>{i.d(b,{j:()=>f});var e=i(7587),d=i(3149),h=i(5315),g=i(9808),t=i(845),o=i(4036),s=i(2382);function n(T,M){if(1&T){const x=e.EpF();e.TgZ(0,"div")(1,"button",8),e.NdJ("click",function(){return e.CHM(x),e.oxw().exportToExcel()}),e.qZA(),e.TgZ(2,"div"),e._uU(3,"\xa0"),e.qZA(),e.TgZ(4,"p",9),e._uU(5," OU Exporter par parcours et par cycle de formation "),e.qZA()()}}const c=function(){return{width:"50vw"}};let f=(()=>{class T{constructor(x){this.exportExcelService=x,this.formations=["OP","L","IP","I","X"],this.cycles=["premier","second"],this.loading=!1,this.showExportAllCandidature=!0,this.criteria=new e.vpe}ngOnInit(){}validate(){this.cycle&&this.formation&&this.criteria.emit({cycle:this.cycle,formation:this.formation})}exportToExcel(){this.loading=!0,this.exportExcelService.downloadCandidatureExcel().subscribe(x=>{const _=new Blob([x],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),D=window.URL.createObjectURL(_),l=document.createElement("a");l.href=D,l.download="data.xlsx",l.click(),window.URL.revokeObjectURL(D),this.loading=!1})}}return T.\u0275fac=function(x){return new(x||T)(e.Y36(d.O))},T.\u0275cmp=e.Xpm({type:T,selectors:[["app-parcours-dialog"]],inputs:{showExportAllCandidature:"showExportAllCandidature",visible:"visible"},outputs:{criteria:"criteria"},decls:12,vars:16,consts:[["header","S\xe9lection du parcours et du cycle",3,"closable","visible","modal","maximizable","draggable","resizable","visibleChange"],[4,"ngIf"],[1,"w-full","parcours-dialog-form"],[1,"mb-4","mt-5"],[1,"block","text-900","font-medium","mb-2"],["placeholder","S\xe9lectionner le parcours de formation",3,"options","ngModel","showClear","ngModelChange"],["placeholder","S\xe9lectionner le cycle de formation",3,"options","ngModel","showClear","ngModelChange"],["pButton","","pRipple","","label","Valider","icon","pi pi-check",1,"w-full","mt-5",3,"click"],["pButton","","pRipple","","label","Exporter toutes les candidatures","icon","pi pi-check",1,"w-full","mt-5",3,"click"],[1,"m-0"]],template:function(x,_){1&x&&(e.TgZ(0,"p-dialog",0),e.NdJ("visibleChange",function(l){return _.visible=l}),e.YNc(1,n,6,0,"div",1),e.TgZ(2,"div",2)(3,"div",3)(4,"label",4),e._uU(5,"Parcours"),e.qZA(),e.TgZ(6,"p-dropdown",5),e.NdJ("ngModelChange",function(l){return _.formation=l}),e.qZA()(),e.TgZ(7,"div")(8,"label",4),e._uU(9,"Cycle de formation"),e.qZA(),e.TgZ(10,"p-dropdown",6),e.NdJ("ngModelChange",function(l){return _.cycle=l}),e.qZA()(),e.TgZ(11,"button",7),e.NdJ("click",function(){return _.validate()}),e.qZA()()()),2&x&&(e.Akn(e.DdM(15,c)),e.Q6J("closable",!0)("visible",_.visible)("modal",!0)("maximizable",!0)("draggable",!1)("resizable",!1),e.xp6(1),e.Q6J("ngIf",_.showExportAllCandidature),e.xp6(5),e.Q6J("options",_.formations)("ngModel",_.formation)("showClear",!0),e.xp6(4),e.Q6J("options",_.cycles)("ngModel",_.cycle)("showClear",!0))},directives:[h.V,g.O5,t.Hq,o.Lt,s.JJ,s.On],encapsulation:2}),T})()},62:(O,b,i)=>{i.d(b,{v:()=>h});var e=i(9808),d=i(7587);let h=(()=>{class g{constructor(){}calculerJours(o,s){var n=Math.abs(s-o);return Math.floor(n/864e5)}clear(o){o.clear()}getStatuses(){return[{label:!1,value:"A faire"},{label:!0,value:"R\xe9alis\xe9"}]}getSeverity(o){switch(o){case!1:return"danger";case!0:return"success";default:return"warning"}}getStatusLabel(o){switch(o){case!1:return"A faire";case!0:return"R\xe9alis\xe9";default:return""}}getFormationLabel(o){return"Ing\xe9nieur g\xe9n\xe9raliste parcours international"==o?"OP":"Ing\xe9nieur g\xe9n\xe9raliste par apprentissage ou g\xe9nie des proc\xe9d\xe9s"==o?"L":"Ing\xe9nieur genie des proc\xe9d\xe9s"==o?"IP":"Ing\xe9nieur g\xe9neraliste parcours international et innovation"==o?"I":"Ing\xe9nieur g\xe9nie Informtique"==o?"X":""}genererDates(o,s){let n=this.calculerJours(o,s);console.log("nombre jour:",n);let c=[],f=new Date(o);c.push(new Date(o));for(let T=0;T<n;T++)f.setDate(f.getDate()+1),c.push(new Date(f));return c}formatDate(o){let n=(0,e.p6)(o,"shortTime","fr-FR").split(":");return parseInt(n[0],10)-1+"h"+n[1]}formatDate1(o){const s=new Date(o),T=(s.getFullYear(),s.getMonth(),s.getDate(),s.getHours()),M=s.getMinutes();return s.setHours(T-1),s.setMinutes(M),s}buildDateWithTime(o){const s=new Date;return new Date(`${s.getFullYear()}-${s.getMonth()+1}-${s.getDate()} ${o}`)}buildDate(o,s){let c,f,n=s.split("-"),M=n[0].split("h");o.setHours(parseInt(M[0],10)+1),o.setMinutes(parseInt(M[1],10)),c=o.getTime();let _=n[1].split("h");return o.setHours(parseInt(_[0],10)+1),o.setMinutes(parseInt(_[1],10)),f=o.getTime(),{startDate:c,endDate:f}}}return g.\u0275fac=function(o){return new(o||g)},g.\u0275prov=d.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},3149:(O,b,i)=>{i.d(b,{O:()=>t});var e=i(2340),d=i(7587),h=i(520),g=i(4920);let t=(()=>{class o{constructor(n,c){this.http=n,this.baseUrlSvr=c,this.url="",this.url=`${this.baseUrlSvr.getOrigin()}${e.N.candidaturePath}`,this.url+="candidature/candidatures/download"}downloadCandidatureExcel(){return this.http.get(this.url,{responseType:"arraybuffer"})}}return o.\u0275fac=function(n){return new(n||o)(d.LFG(h.eN),d.LFG(g.x))},o.\u0275prov=d.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},8766:(O,b,i)=>{i.d(b,{Y:()=>t});var e=i(2340),d=i(7587),h=i(520),g=i(4920);let t=(()=>{class o{constructor(n,c){this.http=n,this.baseUrlSvr=c,this.url="",this.url=`${this.baseUrlSvr.getOrigin()}${e.N.interviewPath}`,this.url+="note/"}allNotesEntretien(){return this.http.get(this.url+"allNotesEntretien")}downloadPlanningEntretien(){return this.http.get(this.url+"download/planningEntretiens",{responseType:"arraybuffer"})}downloadPlanningEntretienUrl(){return this.url+"download/planningEntretiens"}downloadNoteEntretienUrl(n,c){return this.url+"download/noteEntretiens/"+n+"/"+c}downloadNoteEntretienUrlFile(n,c){return this.http.get(this.url+"download/noteEntretiens/"+n+"/"+c,{responseType:"blob"})}liste(){return this.http.get(this.url+"all")}getOne(n){return this.http.get(this.url+n)}getByCandidatureId(n){return this.http.get(this.url+"notesEntretienByCandidature/"+n)}create(n){return this.http.post(this.url+"create",n)}update(n){return this.http.patch(this.url+(null==n?void 0:n.id),n)}delete(n){return this.http.delete(this.url+n)}}return o.\u0275fac=function(n){return new(n||o)(d.LFG(h.eN),d.LFG(g.x))},o.\u0275prov=d.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},7755:(O,b,i)=>{i.d(b,{b:()=>t});var e=i(2340),d=i(7587),h=i(520),g=i(4920);let t=(()=>{class o{constructor(n,c){this.http=n,this.baseUrlSvr=c,this.url="",this.url=`${this.baseUrlSvr.getOrigin()}${e.N.administrationPath}`,this.url+="zone/"}liste(){return this.http.get(this.url+"all")}getOne(n){return this.http.get(this.url+n)}create(n){return this.http.post(this.url+"create",n)}update(n){return this.http.patch(this.url+(null==n?void 0:n.id),n)}delete(n){return this.http.delete(this.url+n)}}return o.\u0275fac=function(n){return new(n||o)(d.LFG(h.eN),d.LFG(g.x))},o.\u0275prov=d.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},7307:(O,b,i)=>{i.d(b,{P:()=>_,n:()=>D});var e=i(7587),d=i(9808),h=i(9783),g=i(845),t=i(5921),o=i(1777),s=i(5730);function n(l,y){if(1&l&&e._UZ(0,"i",8),2&l){const a=e.oxw(2);e.Tol(a.confirmation.icon),e.Q6J("ngClass","p-confirm-popup-icon")}}function c(l,y){if(1&l){const a=e.EpF();e.TgZ(0,"button",9),e.NdJ("click",function(){return e.CHM(a),e.oxw(2).reject()}),e.qZA()}if(2&l){const a=e.oxw(2);e.Tol(a.confirmation.rejectButtonStyleClass||"p-button-text"),e.Q6J("icon",a.confirmation.rejectIcon)("label",a.rejectButtonLabel)("ngClass","p-confirm-popup-reject p-button-sm"),e.uIk("aria-label",a.rejectButtonLabel)}}function f(l,y){if(1&l){const a=e.EpF();e.TgZ(0,"button",9),e.NdJ("click",function(){return e.CHM(a),e.oxw(2).accept()}),e.qZA()}if(2&l){const a=e.oxw(2);e.Tol(a.confirmation.acceptButtonStyleClass),e.Q6J("icon",a.confirmation.acceptIcon)("label",a.acceptButtonLabel)("ngClass","p-confirm-popup-accept p-button-sm"),e.uIk("aria-label",a.acceptButtonLabel)}}const T=function(l,y){return{showTransitionParams:l,hideTransitionParams:y}},M=function(l){return{value:"open",params:l}};function x(l,y){if(1&l){const a=e.EpF();e.TgZ(0,"div",1),e.NdJ("click",function(E){return e.CHM(a),e.oxw().onOverlayClick(E)})("@animation.start",function(E){return e.CHM(a),e.oxw().onAnimationStart(E)})("@animation.done",function(E){return e.CHM(a),e.oxw().onAnimationEnd(E)}),e.TgZ(1,"div",2,3),e.YNc(3,n,1,3,"i",4),e.TgZ(4,"span",5),e._uU(5),e.qZA()(),e.TgZ(6,"div",6),e.YNc(7,c,1,6,"button",7),e.YNc(8,f,1,6,"button",7),e.qZA()()}if(2&l){const a=e.oxw();e.Tol(a.styleClass),e.Q6J("ngClass","p-confirm-popup p-component")("ngStyle",a.style)("@animation",e.VKq(12,M,e.WLB(9,T,a.showTransitionOptions,a.hideTransitionOptions))),e.xp6(3),e.Q6J("ngIf",a.confirmation.icon),e.xp6(2),e.Oqu(a.confirmation.message),e.xp6(2),e.Q6J("ngIf",!1!==a.confirmation.rejectVisible),e.xp6(1),e.Q6J("ngIf",!1!==a.confirmation.acceptVisible)}}let _=(()=>{class l{constructor(a,v,E,A,N,R){this.el=a,this.confirmationService=v,this.renderer=E,this.cd=A,this.config=N,this.overlayService=R,this.defaultFocus="accept",this.showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)",this.hideTransitionOptions=".1s linear",this.autoZIndex=!0,this.baseZIndex=0,this.subscription=this.confirmationService.requireConfirmation$.subscribe(Z=>{Z?Z.key===this.key&&(this.confirmation=Z,this.confirmation.accept&&(this.confirmation.acceptEvent=new e.vpe,this.confirmation.acceptEvent.subscribe(this.confirmation.accept)),this.confirmation.reject&&(this.confirmation.rejectEvent=new e.vpe,this.confirmation.rejectEvent.subscribe(this.confirmation.reject)),this.visible=!0):this.hide()})}get visible(){return this._visible}set visible(a){this._visible=a,this.cd.markForCheck()}onAnimationStart(a){if("open"===a.toState){this.container=a.element,document.body.appendChild(this.container),this.align(),this.bindListeners();const v=this.getElementToFocus();v&&v.focus()}}onAnimationEnd(a){"void"===a.toState&&this.onContainerDestroy()}getElementToFocus(){switch(this.defaultFocus){case"accept":return s.p.findSingle(this.container,".p-confirm-popup-accept");case"reject":return s.p.findSingle(this.container,".p-confirm-popup-reject");case"none":return null}}align(){this.autoZIndex&&t.P9.set("overlay",this.container,this.config.zIndex.overlay),s.p.absolutePosition(this.container,this.confirmation.target);const a=s.p.getOffset(this.container),v=s.p.getOffset(this.confirmation.target);let E=0;a.left<v.left&&(E=v.left-a.left),this.container.style.setProperty("--overlayArrowLeft",`${E}px`),a.top<v.top&&s.p.addClass(this.container,"p-confirm-popup-flipped")}hide(){this.visible=!1}accept(){this.confirmation.acceptEvent&&this.confirmation.acceptEvent.emit(),this.hide()}reject(){this.confirmation.rejectEvent&&this.confirmation.rejectEvent.emit(),this.hide()}onOverlayClick(a){this.overlayService.add({originalEvent:a,target:this.el.nativeElement})}bindListeners(){this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener()}unbindListeners(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}bindDocumentClickListener(){if(!this.documentClickListener){let a=s.p.isIOS()?"touchstart":"click";const v=this.el?this.el.nativeElement.ownerDocument:document;this.documentClickListener=this.renderer.listen(v,a,E=>{let A=this.confirmation.target;this.container!==E.target&&!this.container.contains(E.target)&&A!==E.target&&!A.contains(E.target)&&this.hide()})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}onWindowResize(){this.hide()}bindDocumentResizeListener(){this.documentResizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.documentResizeListener)}unbindDocumentResizeListener(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new s.V(this.confirmation.target,()=>{this.visible&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unsubscribeConfirmationSubscriptions(){this.confirmation&&(this.confirmation.acceptEvent&&this.confirmation.acceptEvent.unsubscribe(),this.confirmation.rejectEvent&&this.confirmation.rejectEvent.unsubscribe())}onContainerDestroy(){this.unbindListeners(),this.unsubscribeConfirmationSubscriptions(),this.autoZIndex&&t.P9.clear(this.container),this.confirmation=null,this.container=null}restoreAppend(){this.container&&document.body.removeChild(this.container),this.onContainerDestroy()}get acceptButtonLabel(){return this.confirmation.acceptLabel||this.config.getTranslation(h.ws.ACCEPT)}get rejectButtonLabel(){return this.confirmation.rejectLabel||this.config.getTranslation(h.ws.REJECT)}ngOnDestroy(){this.restoreAppend(),this.subscription&&this.subscription.unsubscribe()}}return l.\u0275fac=function(a){return new(a||l)(e.Y36(e.SBq),e.Y36(h.YP),e.Y36(e.Qsj),e.Y36(e.sBO),e.Y36(h.b4),e.Y36(h.F0))},l.\u0275cmp=e.Xpm({type:l,selectors:[["p-confirmPopup"]],hostAttrs:[1,"p-element"],inputs:{key:"key",defaultFocus:"defaultFocus",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",style:"style",styleClass:"styleClass",visible:"visible"},decls:1,vars:1,consts:[[3,"ngClass","ngStyle","class","click",4,"ngIf"],[3,"ngClass","ngStyle","click"],[1,"p-confirm-popup-content"],["content",""],[3,"ngClass","class",4,"ngIf"],[1,"p-confirm-popup-message"],[1,"p-confirm-popup-footer"],["type","button","pButton","",3,"icon","label","ngClass","class","click",4,"ngIf"],[3,"ngClass"],["type","button","pButton","",3,"icon","label","ngClass","click"]],template:function(a,v){1&a&&e.YNc(0,x,9,14,"div",0),2&a&&e.Q6J("ngIf",v.visible)},directives:[d.O5,d.mk,d.PC,g.Hq],styles:['.p-confirm-popup{position:absolute;margin-top:10px;top:0;left:0}.p-confirm-popup-flipped{margin-top:0;margin-bottom:10px}.p-confirm-popup:after,.p-confirm-popup:before{bottom:100%;left:calc(var(--overlayArrowLeft, 0) + 1.25rem);content:" ";height:0;width:0;position:absolute;pointer-events:none}.p-confirm-popup:after{border-width:8px;margin-left:-8px}.p-confirm-popup:before{border-width:10px;margin-left:-10px}.p-confirm-popup-flipped:after,.p-confirm-popup-flipped:before{bottom:auto;top:100%}.p-confirm-popup.p-confirm-popup-flipped:after{border-bottom-color:transparent}.p-confirm-popup.p-confirm-popup-flipped:before{border-bottom-color:transparent}.p-confirm-popup .p-confirm-popup-content{display:flex;align-items:center}\n'],encapsulation:2,data:{animation:[(0,o.X$)("animation",[(0,o.SB)("void",(0,o.oB)({transform:"scaleY(0.8)",opacity:0})),(0,o.SB)("open",(0,o.oB)({transform:"translateY(0)",opacity:1})),(0,o.eR)("void => open",(0,o.jt)("{{showTransitionParams}}")),(0,o.eR)("open => void",(0,o.jt)("{{hideTransitionParams}}"))])]},changeDetection:0}),l})(),D=(()=>{class l{}return l.\u0275fac=function(a){return new(a||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[[d.ez,g.hJ]]}),l})()},9142:(O,b,i)=>{i.d(b,{V:()=>t,W:()=>o});var e=i(7587),d=i(9808);function h(s,n){if(1&s&&e._UZ(0,"span",3),2&s){const c=e.oxw();e.Q6J("ngClass",c.icon)}}const g=["*"];let t=(()=>{class s{containerClass(){return{"p-tag p-component":!0,"p-tag-info":"info"===this.severity,"p-tag-success":"success"===this.severity,"p-tag-warning":"warning"===this.severity,"p-tag-danger":"danger"===this.severity,"p-tag-rounded":this.rounded}}}return s.\u0275fac=function(c){return new(c||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["p-tag"]],hostAttrs:[1,"p-element"],inputs:{styleClass:"styleClass",style:"style",severity:"severity",value:"value",icon:"icon",rounded:"rounded"},ngContentSelectors:g,decls:5,vars:6,consts:[[3,"ngClass","ngStyle"],["class","p-tag-icon",3,"ngClass",4,"ngIf"],[1,"p-tag-value"],[1,"p-tag-icon",3,"ngClass"]],template:function(c,f){1&c&&(e.F$t(),e.TgZ(0,"span",0),e.Hsn(1),e.YNc(2,h,1,1,"span",1),e.TgZ(3,"span",2),e._uU(4),e.qZA()()),2&c&&(e.Tol(f.styleClass),e.Q6J("ngClass",f.containerClass())("ngStyle",f.style),e.xp6(2),e.Q6J("ngIf",f.icon),e.xp6(2),e.Oqu(f.value))},directives:[d.mk,d.PC,d.O5],styles:[".p-tag{display:inline-flex;align-items:center;justify-content:center}.p-tag-icon,.p-tag-value,.p-tag-icon.pi{line-height:1.5}.p-tag.p-tag-rounded{border-radius:10rem}\n"],encapsulation:2,changeDetection:0}),s})(),o=(()=>{class s{}return s.\u0275fac=function(c){return new(c||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[d.ez]]}),s})()}}]);