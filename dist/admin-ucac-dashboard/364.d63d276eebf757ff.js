"use strict";(self.webpackChunkadmin_ucac_dashboard=self.webpackChunkadmin_ucac_dashboard||[]).push([[364],{1364:(P,f,r)=>{r.r(f),r.d(f,{NoteSummaryModule:()=>$});var e=r(9808),u=r(7671),x=r(4327),t=r(7587),_=r(9783),l=r(7755),y=r(8766),a=r(702),C=r(9930),O=r(845),d=r(2382),b=r(1424),p=r(3407),c=r(5515),h=r(7773),g=r(7307);function S(i,s){if(1&i&&(t.TgZ(0,"td",10),t._uU(1),t.qZA()),2&i){const o=s.$implicit,n=s.index;t.xp6(1),t.AsE("Jury ",n+1,": ",o,"")}}function U(i,s){if(1&i&&(t.TgZ(0,"td",20),t._UZ(1,"button",22),t.qZA()),2&i){const o=s.$implicit,n=t.oxw().$implicit,m=t.oxw();t.xp6(1),t.s9C("label",null==m.noteJury?null:m.noteJury.get(o+(null==n?null:n.parcours)))}}const J=function(i,s){return{"p-button-success":i,"p-button-danger":s}};function D(i,s){if(1&i&&(t.TgZ(0,"tr",8)(1,"td"),t._UZ(2,"input",18),t.qZA(),t.YNc(3,U,2,1,"td",19),t.TgZ(4,"td",20),t._UZ(5,"button",21),t.qZA()()),2&i){const o=s.$implicit,n=t.oxw();t.xp6(2),t.Q6J("readOnly",!0)("disabled",!0)("ngModel","Note "+o.parcours),t.xp6(1),t.Q6J("ngForOf",n.juries),t.xp6(2),t.s9C("label",null==o?null:o.totalNotes),t.Q6J("ngClass",t.WLB(6,J,o.totalNotes>0&&o.totalNotes<3,o.totalNotes>=3))}}function I(i,s){if(1&i&&(t.TgZ(0,"div",25)(1,"div",26)(2,"label",27),t._uU(3),t.qZA(),t._UZ(4,"textarea",28),t.qZA()()),2&i){const o=s.$implicit,n=s.index,m=t.oxw(2);let v;t.xp6(3),t.hij("Commentaire jury ",n+1,":"),t.xp6(1),t.Q6J("readOnly",!0)("disabled",!0)("ngModel",null!==(v=m.commentJury.get(o))&&void 0!==v?v:"")("rows",10)("autoResize",!0)}}function B(i,s){if(1&i&&(t.TgZ(0,"div",23),t.YNc(1,I,5,6,"div",24),t.qZA()),2&i){const o=t.oxw();t.xp6(1),t.Q6J("ngForOf",o.juries)}}function F(i,s){if(1&i&&(t.TgZ(0,"div",26)(1,"label",27),t._uU(2,"Commentaire du jury :"),t.qZA(),t._UZ(3,"textarea",28),t.qZA()),2&i){const o=t.oxw();let n;t.xp6(3),t.Q6J("readOnly",!0)("disabled",!0)("ngModel",null!==(n=o.commentJury.get(o.juries[0]))&&void 0!==n?n:"")("rows",10)("autoResize",!0)}}function w(i,s){if(1&i){const o=t.EpF();t.TgZ(0,"app-parcours-dialog",29),t.NdJ("criteria",function(m){return t.CHM(o),t.oxw().getCriteria(m)}),t.qZA()}if(2&i){const o=t.oxw();t.Q6J("visible",o.visible)("showExportAllCandidature",!1)}}let N=(()=>{class i{constructor(o,n,m,v,E,Z,T){this.messageService=o,this.zoneService=n,this.noteService=m,this.noteParcoursService=v,this.route=E,this.confirmationService=Z,this.candidatService=T,this.second=0,this.minute=20,this.nombre_choix=0,this.cycle="",this.candidat="",this.visible=!1,this.downloadFile=!1,this.juries=[],this.noteJury=new Map,this.noteJuryB=new Map,this.commentJury=new Map,this.hasBourse=!1,this.timeout=!1,this.formationsForFirstCycle=[{name:"Ing\xe9nieur g\xe9n\xe9raliste par apprentissage ou g\xe9nie des proc\xe9d\xe9s",code:"L"},{name:"Ing\xe9nieur g\xe9n\xe9raliste parcours international",code:"OP"},{name:"Ing\xe9nieur g\xe9nie Informatique",code:"X"}],this.formationsForSecondCycle=[{name:"Ing\xe9nieur genie des proc\xe9d\xe9s",code:"IP"},{name:"Ing\xe9nieur g\xe9neraliste parcours international et innovation",code:"I"},{name:"Ing\xe9nieur g\xe9nie Informatique",code:"X"}],this.formations=[],this.notes=[]}ngOnInit(){this.route.snapshot.params.idCandidature&&this.getEntretienByCandidat(parseInt(this.route.snapshot.params.idCandidature,10)),this.getZones()}getFormation(o,n){return 0==o?n.formation1:1==o?n.formation2:3==o?n.formation3:""}getZones(){this.zoneService.liste().subscribe({next:o=>{this.zones=o},error:o=>{console.log("error: ",o)}})}getEntretienByCandidat(o){this.noteService.getByCandidatureId(o).subscribe({next:n=>{var m,v;this.hasBourse=n.candidature.has_exchange||!1,this.nombre_choix=n.candidature.nombre_choix,this.notes=null==n?void 0:n.noteParcoursJuryList,this.cycle=n.candidature.cycle.toString(),this.candidat=(null===(m=n.candidature.compte)||void 0===m?void 0:m.name)+" "+(null===(v=n.candidature.compte)||void 0===v?void 0:v.prenom),console.log("result: ",n);for(let E=0;E<n.noteParcoursJuryList.length;E++){const Z=n.noteParcoursJuryList[E];for(let T=0;T<Z.notes.length;T++){const M=Z.notes[T];let A=M.jury.name+" "+M.jury.prenom;this.commentJury.set(A+"",M.commentaires),this.juries.includes(A)||this.juries.push(A),this.noteJury.set(A+Z.parcours,M.note)}}console.log("this.commentJury: ",this.commentJury)},error:n=>{console.log("error: ",n)}})}showDialog(){this.visible=!0}getCriteria(o){this.visible=!1,this.noteService.downloadNoteEntretienUrlFile(o.cycle,o.formation).subscribe({next:n=>{(0,x.saveAs)(n,"note_entretien_"+o.cycle+"_cycle_"+o.formation+".xlsx")},error:n=>{console.log("error: ",n)}})}}return i.\u0275fac=function(o){return new(o||i)(t.Y36(_.ez),t.Y36(l.b),t.Y36(y.Y),t.Y36(a.k),t.Y36(u.gz),t.Y36(_.YP),t.Y36(C.u))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-note-summary"]],decls:34,vars:7,consts:[[1,"note-summary-page","page-content","flex","justify-content-between","flex-column"],[1,"flex-wrap","vh-space-between","mt-2"],["pButton","","pRipple","","type","button","label","Note candidat",1,"p-button-sm","p-button-raised","p-button-secondary"],[1,"flex-wrap","vh-space-between","mt-4"],[1,"vh-center"],[1,"mr-4"],[1,"font-medium","capitalize"],[1,"mt-4"],[1,"w-full"],["class","text-lg text-center",4,"ngFor","ngForOf"],[1,"text-lg","text-center"],["class","w-full",4,"ngFor","ngForOf"],["class","grid text-center",4,"ngIf"],["class","px-5",4,"ngIf"],[1,"vh-start"],[1,"mb-1"],["pButton","","pRipple","","type","button","label","Telecharger les notes",1,"ml-2","p-button-sm","p-button-raised","bg-orange-500","border-orange-500",3,"click"],[3,"visible","showExportAllCandidature","criteria",4,"ngIf"],["type","text","pInputText","",1,"mt-2",3,"readOnly","disabled","ngModel"],["class","text-center",4,"ngFor","ngForOf"],[1,"text-center"],["pButton","","pRipple","","type","button",1,"mt-2","p-button-sm","p-button-raised","p-button-rounded",3,"label","ngClass"],["pButton","","pRipple","","type","button",1,"mt-2","p-button-sm","p-button-raised","p-button-success","p-button-rounded",3,"label"],[1,"grid","text-center"],["class"," col-12 md:col-6",4,"ngFor","ngForOf"],[1,"col-12","md:col-6"],[1,"px-5"],[1,"text-center","text-lg","font-semibold"],["placeholder","Ajoutez un commentaire","pInputTextarea","",1,"w-full","mt-3",3,"readOnly","disabled","ngModel","rows","autoResize"],[3,"visible","showExportAllCandidature","criteria"]],template:function(o,n){1&o&&(t.TgZ(0,"section",0)(1,"div")(2,"div",1),t._UZ(3,"button",2),t.qZA(),t.TgZ(4,"div",3)(5,"div",4)(6,"h1",5),t._uU(7,"Entretien de : "),t.qZA(),t.TgZ(8,"h3",6),t._uU(9),t.qZA()(),t.TgZ(10,"div",4)(11,"h3",5),t._uU(12,"Cycle : "),t.qZA(),t.TgZ(13,"h3",6),t._uU(14),t.qZA()()(),t.TgZ(15,"div",7)(16,"table",8)(17,"thead")(18,"tr"),t._UZ(19,"td"),t.YNc(20,S,2,2,"td",9),t.TgZ(21,"td",10),t._uU(22,"Note globale"),t.qZA()()(),t.TgZ(23,"tbody"),t.YNc(24,D,6,9,"tr",11),t.qZA()()(),t.TgZ(25,"div",7),t.YNc(26,B,2,1,"div",12),t.YNc(27,F,4,5,"div",13),t.qZA()(),t.TgZ(28,"div",14)(29,"div",15)(30,"button",16),t.NdJ("click",function(){return n.showDialog()}),t.qZA()()()(),t.YNc(31,w,1,2,"app-parcours-dialog",17),t._UZ(32,"p-toast")(33,"p-confirmPopup")),2&o&&(t.xp6(9),t.Oqu(n.candidat),t.xp6(5),t.Oqu(n.cycle),t.xp6(6),t.Q6J("ngForOf",n.juries),t.xp6(4),t.Q6J("ngForOf",n.notes),t.xp6(2),t.Q6J("ngIf",n.juries.length>1),t.xp6(1),t.Q6J("ngIf",1==n.juries.length),t.xp6(4),t.Q6J("ngIf",n.visible))},directives:[O.Hq,e.sg,d.Fj,b.o,d.JJ,d.On,e.mk,e.O5,p.g,c.j,h.FN,g.P],encapsulation:2}),i})();const R=[{path:"",component:N},{path:":idCandidature",component:N}];let L=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[u.Bz.forChild(R)],u.Bz]}),i})();var j=r(4466),Y=r(9142),z=r(4036),W=r(4255),Q=r(5315),K=r(1208);let $=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[e.ez,L,j.m,d.u5,d.UX,h.EV,g.n,O.hJ,Y.W,z.kW,W.U$,b.j,Q.S,p.A,K.nD]]}),i})()},5515:(P,f,r)=>{r.d(f,{j:()=>O});var e=r(7587),u=r(3149),x=r(5315),t=r(9808),_=r(845),l=r(4036),y=r(2382);function a(d,b){if(1&d){const p=e.EpF();e.TgZ(0,"div")(1,"button",8),e.NdJ("click",function(){return e.CHM(p),e.oxw().exportToExcel()}),e.qZA(),e.TgZ(2,"div"),e._uU(3,"\xa0"),e.qZA(),e.TgZ(4,"p",9),e._uU(5," OU Exporter par parcours et par cycle de formation "),e.qZA()()}}const C=function(){return{width:"50vw"}};let O=(()=>{class d{constructor(p){this.exportExcelService=p,this.formations=["OP","L","IP","I","X"],this.cycles=["premier","second"],this.loading=!1,this.showExportAllCandidature=!0,this.criteria=new e.vpe}ngOnInit(){}validate(){this.cycle&&this.formation&&this.criteria.emit({cycle:this.cycle,formation:this.formation})}exportToExcel(){this.loading=!0,this.exportExcelService.downloadCandidatureExcel().subscribe(p=>{const c=new Blob([p],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),h=window.URL.createObjectURL(c),g=document.createElement("a");g.href=h,g.download="data.xlsx",g.click(),window.URL.revokeObjectURL(h),this.loading=!1})}}return d.\u0275fac=function(p){return new(p||d)(e.Y36(u.O))},d.\u0275cmp=e.Xpm({type:d,selectors:[["app-parcours-dialog"]],inputs:{showExportAllCandidature:"showExportAllCandidature",visible:"visible"},outputs:{criteria:"criteria"},decls:12,vars:16,consts:[["header","S\xe9lection du parcours et du cycle",3,"closable","visible","modal","maximizable","draggable","resizable","visibleChange"],[4,"ngIf"],[1,"w-full","parcours-dialog-form"],[1,"mb-4","mt-5"],[1,"block","text-900","font-medium","mb-2"],["placeholder","S\xe9lectionner le parcours de formation",3,"options","ngModel","showClear","ngModelChange"],["placeholder","S\xe9lectionner le cycle de formation",3,"options","ngModel","showClear","ngModelChange"],["pButton","","pRipple","","label","Valider","icon","pi pi-check",1,"w-full","mt-5",3,"click"],["pButton","","pRipple","","label","Exporter toutes les candidatures","icon","pi pi-check",1,"w-full","mt-5",3,"click"],[1,"m-0"]],template:function(p,c){1&p&&(e.TgZ(0,"p-dialog",0),e.NdJ("visibleChange",function(g){return c.visible=g}),e.YNc(1,a,6,0,"div",1),e.TgZ(2,"div",2)(3,"div",3)(4,"label",4),e._uU(5,"Parcours"),e.qZA(),e.TgZ(6,"p-dropdown",5),e.NdJ("ngModelChange",function(g){return c.formation=g}),e.qZA()(),e.TgZ(7,"div")(8,"label",4),e._uU(9,"Cycle de formation"),e.qZA(),e.TgZ(10,"p-dropdown",6),e.NdJ("ngModelChange",function(g){return c.cycle=g}),e.qZA()(),e.TgZ(11,"button",7),e.NdJ("click",function(){return c.validate()}),e.qZA()()()),2&p&&(e.Akn(e.DdM(15,C)),e.Q6J("closable",!0)("visible",c.visible)("modal",!0)("maximizable",!0)("draggable",!1)("resizable",!1),e.xp6(1),e.Q6J("ngIf",c.showExportAllCandidature),e.xp6(5),e.Q6J("options",c.formations)("ngModel",c.formation)("showClear",!0),e.xp6(4),e.Q6J("options",c.cycles)("ngModel",c.cycle)("showClear",!0))},directives:[x.V,t.O5,_.Hq,l.Lt,y.JJ,y.On],encapsulation:2}),d})()},3149:(P,f,r)=>{r.d(f,{O:()=>_});var e=r(2340),u=r(7587),x=r(520),t=r(4920);let _=(()=>{class l{constructor(a,C){this.http=a,this.baseUrlSvr=C,this.url="",this.url=`${this.baseUrlSvr.getOrigin()}${e.N.candidaturePath}`,this.url+="candidature/candidatures/download"}downloadCandidatureExcel(){return this.http.get(this.url,{responseType:"arraybuffer"})}}return l.\u0275fac=function(a){return new(a||l)(u.LFG(x.eN),u.LFG(t.x))},l.\u0275prov=u.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},7755:(P,f,r)=>{r.d(f,{b:()=>_});var e=r(2340),u=r(7587),x=r(520),t=r(4920);let _=(()=>{class l{constructor(a,C){this.http=a,this.baseUrlSvr=C,this.url="",this.url=`${this.baseUrlSvr.getOrigin()}${e.N.administrationPath}`,this.url+="zone/"}liste(){return this.http.get(this.url+"all")}getOne(a){return this.http.get(this.url+a)}create(a){return this.http.post(this.url+"create",a)}update(a){return this.http.patch(this.url+(null==a?void 0:a.id),a)}delete(a){return this.http.delete(this.url+a)}}return l.\u0275fac=function(a){return new(a||l)(u.LFG(x.eN),u.LFG(t.x))},l.\u0275prov=u.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()}}]);