"use strict";(self.webpackChunkadmin_ucac_dashboard=self.webpackChunkadmin_ucac_dashboard||[]).push([[364],{1364:(A,f,r)=>{r.r(f),r.d(f,{NoteSummaryModule:()=>R});var h=r(9808),p=r(7671),t=r(7587),y=r(9783),x=r(7755),m=r(8766),Z=r(702),s=r(9930),b=r(845),v=r(2382),S=r(1424),N=r(3407),M=r(4036),T=r(7773),O=r(7307);function J(o,u){if(1&o&&(t.TgZ(0,"td",10),t._uU(1),t.qZA()),2&o){const n=u.$implicit,e=u.index;t.xp6(1),t.AsE("Jury ",e+1,": ",n,"")}}function E(o,u){if(1&o&&(t.TgZ(0,"td",20),t._UZ(1,"button",22),t.qZA()),2&o){const n=u.$implicit,e=t.oxw().$implicit,i=t.oxw();t.xp6(1),t.s9C("label",i.noteJury.get(n+e.parcours))}}const U=function(o,u){return{"p-button-success":o,"p-button-danger":u}};function I(o,u){if(1&o&&(t.TgZ(0,"tr",8)(1,"td"),t._UZ(2,"input",18),t.qZA(),t.YNc(3,E,2,1,"td",19),t.TgZ(4,"td",20),t._UZ(5,"button",21),t.qZA()()),2&o){const n=u.$implicit,e=t.oxw();t.xp6(2),t.Q6J("readOnly",!0)("disabled",!0)("ngModel","Note "+n.parcours),t.xp6(1),t.Q6J("ngForOf",e.juries),t.xp6(2),t.s9C("label",n.moyenne),t.Q6J("ngClass",t.WLB(6,U,n.moyenne>0&&n.moyenne<3,n.moyenne>=3))}}function P(o,u){if(1&o){const n=t.EpF();t.TgZ(0,"div",23)(1,"div",24)(2,"label",25),t._uU(3,"Commentaire Jury 1:"),t.qZA(),t.TgZ(4,"textarea",26),t.NdJ("ngModelChange",function(i){return t.CHM(n),t.oxw().comment=i}),t.qZA()()()}if(2&o){const n=t.oxw();t.xp6(4),t.Q6J("readOnly",!0)("disabled",!0)("ngModel",n.comment)("rows",10)("autoResize",!0)}}let F=(()=>{class o{constructor(n,e,i,a,d,l,c){this.messageService=n,this.zoneService=e,this.noteService=i,this.noteParcoursService=a,this.route=d,this.confirmationService=l,this.candidatService=c,this.second=0,this.minute=20,this.nombre_choix=0,this.juries=[],this.noteJury=new Map,this.noteJuryB=new Map,this.hasBourse=!1,this.timeout=!1,this.formationsForFirstCycle=[{name:"Ing\xe9nieur g\xe9n\xe9raliste par apprentissage ou g\xe9nie des proc\xe9d\xe9s",code:"L"},{name:"Ing\xe9nieur g\xe9n\xe9raliste parcours international",code:"OP"},{name:"Ing\xe9nieur g\xe9nie Informatique",code:"X"}],this.formationsForSecondCycle=[{name:"Ing\xe9nieur genie des proc\xe9d\xe9s",code:"IP"},{name:"Ing\xe9nieur g\xe9neraliste parcours international et innovation",code:"I"},{name:"Ing\xe9nieur g\xe9nie Informatique",code:"X"}],this.formations=[],this.notes=[]}ngOnInit(){this.route.snapshot.params.idEntretien&&this.getEntretien(parseInt(this.route.snapshot.params.idEntretien,10)),this.getZones()}getFormation(n,e){return 0==n?e.formation1:1==n?e.formation2:3==n?e.formation3:""}getZones(){this.zoneService.liste().subscribe({next:n=>{this.zones=n},error:n=>{console.log("error: ",n)}})}getNotes(n){this.noteService.allNotesEntretien().subscribe({next:e=>{let i=e.find(a=>a.candidature.id==n);if(this.notes=(null==i?void 0:i.noteParcoursJuryList)||[],i)for(let a=0;a<i.noteParcoursJuryList.length;a++){const d=i.noteParcoursJuryList[a];for(let l=0;l<d.notes.length;l++){const c=d.notes[l];let g=c.jury.name+" "+c.jury.prenom;this.juries.includes(g)||this.juries.push(g),this.noteJury.set(g+d.parcours,c.note)}}},error:e=>{console.log("error: ",e)}})}getEntretien(n){this.noteService.getOne(n).subscribe({next:e=>{var i,a,d,l,c,g;this.hasBourse=e.candidature.has_exchange||!1,this.nombre_choix=e.candidature.nombre_choix,this.getNotes(e.candidature.id||0);for(let C=0;C<e.candidature.nombre_choix;C++)this.formations.push({cycle:e.candidature.cycle,id:0,note:0,noteId:n,parcours:this.getFormation(C,e.candidature)});this.entretien={id:null!==(i=e.id)&&void 0!==i?i:0,candidat:(null===(a=e.candidature.compte)||void 0===a?void 0:a.name)+" "+(null===(d=e.candidature.compte)||void 0===d?void 0:d.prenom),commentaires:e.commentaires,done:e.done,cycle:e.candidature.cycle.toString(),centre:(null===(l=e.candidature)||void 0===l?void 0:l.centre)||"",jury:(null===(c=e.compte)||void 0===c?void 0:c.name)+" "+(null===(g=e.compte)||void 0===g?void 0:g.prenom),candidature:e.candidature,debut_entretien:new Date(e.debut_entretien),fin_entretien:new Date(e.fin_entretien)}},error:e=>{console.log("error: ",e)}})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(y.ez),t.Y36(x.b),t.Y36(m.Y),t.Y36(Z.k),t.Y36(p.gz),t.Y36(y.YP),t.Y36(s.u))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-note-summary"]],decls:34,vars:11,consts:[[1,"note-summary-page","page-content","flex","justify-content-between","flex-column"],[1,"flex-wrap","vh-space-between","mt-2"],["pButton","","pRipple","","type","button","label","Note candidat",1,"p-button-sm","p-button-raised","p-button-secondary"],[1,"flex-wrap","vh-space-between","mt-4"],[1,"vh-center"],[1,"mr-4"],[1,"font-medium","capitalize"],[1,"mt-4"],[1,"w-full"],["class","text-lg text-center",4,"ngFor","ngForOf"],[1,"text-lg","text-center"],["class","w-full",4,"ngFor","ngForOf"],[1,"grid","text-center"],["class"," col-12 md:col-6",4,"ngFor","ngForOf"],[1,"vh-start"],[1,"mb-1"],["optionLabel","nom","placeholder","Choisir une zone",3,"tooltipPosition","options","filter","showClear","ngModel","ngModelChange"],["pButton","","pRipple","","type","button","label","Telecharger les notes",1,"ml-2","p-button-sm","p-button-raised","bg-orange-500","border-orange-500"],["type","text","pInputText","",1,"mt-2",3,"readOnly","disabled","ngModel"],["class","text-center",4,"ngFor","ngForOf"],[1,"text-center"],["pButton","","pRipple","","type","button",1,"mt-2","p-button-sm","p-button-raised","p-button-rounded",3,"label","ngClass"],["pButton","","pRipple","","type","button",1,"mt-2","p-button-sm","p-button-raised","p-button-success","p-button-rounded",3,"label"],[1,"col-12","md:col-6"],[1,"px-5"],[1,"text-center","text-lg","font-semibold"],["placeholder","Ajoutez un commentaire","pInputTextarea","",1,"w-full","mt-3",3,"readOnly","disabled","ngModel","rows","autoResize","ngModelChange"]],template:function(n,e){if(1&n&&(t.TgZ(0,"section",0)(1,"div")(2,"div",1),t._UZ(3,"button",2),t.qZA(),t.TgZ(4,"div",3)(5,"div",4)(6,"h1",5),t._uU(7,"Entretien de : "),t.qZA(),t.TgZ(8,"h3",6),t._uU(9),t.qZA()(),t.TgZ(10,"div",4)(11,"h3",5),t._uU(12,"Cycle : "),t.qZA(),t.TgZ(13,"h3",6),t._uU(14),t.qZA()()(),t.TgZ(15,"div",7)(16,"table",8)(17,"thead")(18,"tr"),t._UZ(19,"td"),t.YNc(20,J,2,2,"td",9),t.TgZ(21,"td",10),t._uU(22,"Note globale"),t.qZA()()(),t.TgZ(23,"tbody"),t.YNc(24,I,6,9,"tr",11),t.qZA()()(),t.TgZ(25,"div",7)(26,"div",12),t.YNc(27,P,5,5,"div",13),t.qZA()()(),t.TgZ(28,"div",14)(29,"div",15)(30,"p-dropdown",16),t.NdJ("ngModelChange",function(a){return e.zone=a}),t.qZA(),t._UZ(31,"button",17),t.qZA()()(),t._UZ(32,"p-toast")(33,"p-confirmPopup")),2&n){let i,a;t.xp6(9),t.Oqu(null!==(i=null==e.entretien?null:e.entretien.candidat)&&void 0!==i?i:""),t.xp6(5),t.Oqu(null!==(a=null==e.entretien?null:e.entretien.cycle)&&void 0!==a?a:""),t.xp6(6),t.Q6J("ngForOf",e.juries),t.xp6(4),t.Q6J("ngForOf",e.notes),t.xp6(3),t.Q6J("ngForOf",e.juries),t.xp6(3),t.Q6J("tooltipPosition","top")("options",e.zones)("filter",!0)("showClear",!0)("ngModel",e.zone)("showClear",!0)}},directives:[b.Hq,h.sg,v.Fj,S.o,v.JJ,v.On,h.mk,N.g,M.Lt,T.FN,O.P],encapsulation:2}),o})();const _=[{path:"",component:F},{path:":idEntretien",component:F}];let j=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[p.Bz.forChild(_)],p.Bz]}),o})();var z=r(9142),B=r(4255),Y=r(5315),L=r(1208);let R=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[h.ez,j,v.u5,v.UX,T.EV,O.n,b.hJ,z.W,M.kW,B.U$,S.j,Y.S,N.A,L.nD]]}),o})()},7755:(A,f,r)=>{r.d(f,{b:()=>x});var h=r(2340),p=r(7587),t=r(520),y=r(4920);let x=(()=>{class m{constructor(s,b){this.http=s,this.baseUrlSvr=b,this.url="",this.url=`${this.baseUrlSvr.getOrigin()}${h.N.administrationPath}`,this.url+="zone/"}liste(){return this.http.get(this.url+"all")}getOne(s){return this.http.get(this.url+s)}create(s){return this.http.post(this.url+"create",s)}update(s){return this.http.patch(this.url+(null==s?void 0:s.id),s)}delete(s){return this.http.delete(this.url+s)}}return m.\u0275fac=function(s){return new(s||m)(p.LFG(t.eN),p.LFG(y.x))},m.\u0275prov=p.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()}}]);