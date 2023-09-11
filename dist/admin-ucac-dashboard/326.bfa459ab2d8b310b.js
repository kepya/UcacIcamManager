"use strict";(self.webpackChunkadmin_ucac_dashboard=self.webpackChunkadmin_ucac_dashboard||[]).push([[326],{9930:(N,Z,d)=>{d.d(Z,{u:()=>f});var b=d(2340),m=d(7587),g=d(520),v=d(4920);let f=(()=>{class h{constructor(n,_){this.http=n,this.baseUrlSvr=_,this.url="",this.url=`${this.baseUrlSvr.getOrigin()}${b.N.candidaturePath}`,this.url+="candidature/"}liste(){return this.http.get(this.url+"candidats")}update(n,_){return this.http.patch(this.url+"candidats/update/"+n,_)}allByZone(n){return this.http.get(this.url+"allbyzone/"+n)}allSolvableByZone(n,_){return this.http.get(this.url+"allbysolvabilitezone/"+n+"/"+_)}allAdmissibleByZone(n){return this.http.get(this.url+"admissiblebyzone/"+n)}allAdmissByZone(n){return this.http.get(this.url+"admisbyzone/"+n)}allByCentre(n){return this.http.get(this.url+"allbycentreexamen/"+n)}allSolvableByCentre(n,_){return this.http.get(this.url+"allbysolvabilitecentreexamen/"+n+"/"+_)}allAdmissibleByCentre(n){return this.http.get(this.url+"admissiblebycentreexamen/"+n)}allAdmissByCentre(n){return this.http.get(this.url+"admisbycentreexamen/"+n)}allBySite(n){return this.http.get(this.url+"allbysite/"+n)}allSolvableBySite(n,_){return this.http.get(this.url+"allbysolvabilitesite/"+n+"/"+_)}allAdmissibleBySite(n){return this.http.get(this.url+"admissiblebysite/"+n)}allAdmissBySite(n){return this.http.get(this.url+"admisbysite/"+n)}getOne(n){return this.http.get(this.url+n)}getStatistics(){return this.http.get(this.url+"statistics")}downloadCandidatureFile(){return this.http.get(this.url+"candidatures/download",{responseType:"blob"})}downloadAdmissibleCandidatureFile(){return this.http.get(this.url+"candidatures/download",{responseType:"blob"})}downloadAdmissibleCandidatureFileByZone(n){return this.http.get(this.url+"download/admissiblebyzone/"+n,{responseType:"blob"})}downloadAdmissibleCandidatureFileByCentre(n){return this.http.get(this.url+"download/admissiblebycentreexamen/"+n,{responseType:"blob"})}downloadAdmissibleCandidatureFileBySite(n){return this.http.get(this.url+"download/admissiblebysite/"+n,{responseType:"blob"})}downloadAdmissCandidatureFile(){return this.http.get(this.url+"candidatures/download",{responseType:"blob"})}downloadAdmisCandidatureFileByZone(n){return this.http.get(this.url+"download/admisbyzone/"+n,{responseType:"blob"})}downloadAdmisCandidatureFileByCentre(n){return this.http.get(this.url+"download/admisbycentreexamen/"+n,{responseType:"blob"})}downloadAdmisCandidatureFileBySite(n){return this.http.get(this.url+"download/admisbyste/"+n,{responseType:"blob"})}delete(n){return this.http.delete(this.url+n)}}return h.\u0275fac=function(n){return new(n||h)(m.LFG(g.eN),m.LFG(v.x))},h.\u0275prov=m.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()},5326:(N,Z,d)=>{d.r(Z),d.d(Z,{CalendrierDisponibiliteModule:()=>ie});var b=d(9808),m=(()=>{return(t=m||(m={}))[t.premier=0]="premier",t[t.second=1]="second",m;var t})(),g=(()=>{return(t=g||(g={}))[t.M=0]="M",t[t.F=1]="F",g;var t})(),v=(()=>{return(t=v||(v={}))[t.Francais=0]="Francais",t[t.Anglais=1]="Anglais",v;var t})(),f=d(5193),h=d(7231);const n=[{id:1,lieu_de_naissance:"",date_naissance:"",nationalite:"",dernier_Etablissement:"",email_parents:"",tel_parents:"",formation1:"",formation2:"",formation3:"",centre:"",paiement:"",reference_paiement:"",image:"",telephone_paiement:"",ville:"",code_examen:0,centreExamenId:1,nombre_choix:0,compteID:0,cycle:m.premier,statut:h.d.En_Attente,genre:g.M,langue:v.Francais,compte:{name:"Christian",prenom:"kepya",password:"",email:"",telephone:"",role:f.u.CANDIDAT,id_disponibilite:0,idZone:0}},{id:2,lieu_de_naissance:"",date_naissance:"",nationalite:"",dernier_Etablissement:"",email_parents:"",tel_parents:"",formation1:"",formation2:"",formation3:"",centre:"",paiement:"",reference_paiement:"",image:"",telephone_paiement:"",ville:"",code_examen:0,nombre_choix:0,compteID:0,cycle:m.premier,statut:h.d.En_Attente,centreExamenId:1,genre:g.M,langue:v.Francais,compte:{name:"Arthur",prenom:"Scoty",password:"",email:"",telephone:"",role:f.u.CANDIDAT,idZone:0,id_disponibilite:0}},{id:3,lieu_de_naissance:"",date_naissance:"",centreExamenId:1,nationalite:"",dernier_Etablissement:"",email_parents:"",tel_parents:"",formation1:"",formation2:"",formation3:"",centre:"",paiement:"",reference_paiement:"",image:"",telephone_paiement:"",ville:"",code_examen:0,nombre_choix:0,compteID:0,cycle:m.premier,statut:h.d.En_Attente,genre:g.M,langue:v.Francais,compte:{name:"Darryl",prenom:"Leon",password:"",email:"",telephone:"",role:f.u.CANDIDAT,id_disponibilite:0,idZone:0}}];new Date("2023-03-23"),new Date("2023-03-23"),new Date("2023-03-24"),new Date("2023-03-24"),new Date("2023-03-25"),new Date("2023-03-25"),new Date("2023-03-26"),new Date("2023-03-26");var S=d(6093),e=d(7587),E=d(9930),I=d(62),M=d(8766),F=d(7212),B=d(9099),q=d(9783),x=d(7671),Y=d(7921),A=d(2382);function J(t,a){if(1&t&&(e.TgZ(0,"th"),e._uU(1),e.ALo(2,"date"),e.qZA()),2&t){const i=a.$implicit;e.xp6(1),e.Oqu(e.lcZ(2,1,i))}}function H(t,a){if(1&t&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&t){const i=a.$implicit;e.xp6(1),e.hij(" ",i," ")}}const Q=function(t){return{interviewer:t}};function L(t,a){if(1&t&&(e.TgZ(0,"td",18),e.YNc(1,H,2,1,"div",8),e.qZA()),2&t){const i=a.$implicit,o=e.oxw().$implicit,l=e.oxw();let r;e.Q6J("ngClass",e.VKq(2,Q,(null==(r=l.interverwerMap.get(o+" - "+i.toString()))?null:r.length)||!1)),e.xp6(1),e.Q6J("ngForOf",l.interverwerMap.get(o+" - "+i.toString()))}}function z(t,a){if(1&t&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.YNc(3,L,2,4,"td",17),e.qZA()),2&t){const i=a.$implicit,o=e.oxw();e.xp6(2),e.hij("",i," "),e.xp6(1),e.Q6J("ngForOf",o.datesOfDisponibilities)}}function P(t,a){if(1&t){const i=e.EpF();e.TgZ(0,"button",19),e.NdJ("click",function(){return e.CHM(i),e.oxw().prochaineDate()}),e._uU(1," Prochaine Date "),e.qZA()}}function $(t,a){if(1&t&&(e.TgZ(0,"h3",5),e._uU(1),e.ALo(2,"date"),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Oqu(e.lcZ(2,1,i.currentDate))}}function j(t,a){if(1&t&&(e.TgZ(0,"option",27),e._uU(1),e.qZA()),2&t){const i=a.$implicit;e.Q6J("value",i.compte.email),e.xp6(1),e.hij(" ",i.compte.name+" "+i.compte.prenom,"")}}function R(t,a){if(1&t){const i=e.EpF();e.TgZ(0,"select",24),e.NdJ("change",function(l){e.CHM(i);const r=e.oxw().$implicit;return e.oxw(2).handleCandidatSelect(l,r)}),e.TgZ(1,"option",25),e._uU(2,"Choisir un candidat"),e.qZA(),e.YNc(3,j,2,2,"option",26),e.qZA()}if(2&t){const i=e.oxw(3);e.xp6(3),e.Q6J("ngForOf",i.candidats)}}function K(t,a){if(1&t&&(e.TgZ(0,"option",27),e._uU(1),e.qZA()),2&t){const i=a.$implicit;e.Q6J("value",i),e.xp6(1),e.hij(" ",i,"")}}function W(t,a){if(1&t){const i=e.EpF();e.ynx(0),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td")(8,"select",28),e.NdJ("change",function(l){e.CHM(i);const r=e.oxw().$implicit;return e.oxw(2).handleInterviewerSelect(l,r)}),e.TgZ(9,"option",25),e._uU(10,"Choisir un interviewer"),e.qZA(),e.YNc(11,K,2,2,"option",26),e.qZA()(),e.BQk()}if(2&t){const i=e.oxw(3);e.xp6(2),e.Oqu(""),e.xp6(2),e.Oqu(""),e.xp6(2),e.Oqu(""),e.xp6(5),e.Q6J("ngForOf",i.interviewers)}}function G(t,a){1&t&&(e.TgZ(0,"td",29),e._uU(1,"Pause"),e.qZA())}function X(t,a){if(1&t&&(e.TgZ(0,"tr")(1,"td")(2,"p"),e._uU(3),e.qZA(),e.YNc(4,R,4,1,"select",21),e.qZA(),e.YNc(5,W,12,4,"ng-container",22),e.YNc(6,G,2,0,"td",23),e.qZA()),2&t){const i=a.$implicit;e.xp6(3),e.Oqu(i),e.xp6(1),e.Q6J("ngIf","12h00 - 13h00"!=i),e.xp6(1),e.Q6J("ngIf","12h00 - 13h00"!=i),e.xp6(1),e.Q6J("ngIf","12h00 - 13h00"===i)}}function V(t,a){if(1&t&&(e.TgZ(0,"div",20)(1,"table",7)(2,"thead")(3,"th"),e._uU(4,"Horaire"),e.qZA(),e.TgZ(5,"th"),e._uU(6,"Centre d'examen"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Noms"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"Pr\xe9noms"),e.qZA(),e.TgZ(11,"th"),e._uU(12,"Interviewer"),e.qZA()(),e.TgZ(13,"tbody"),e.YNc(14,X,7,4,"tr",8),e.qZA()()()),2&t){const i=e.oxw();e.xp6(14),e.Q6J("ngForOf",i.entretienTimes)}}let k=(()=>{class t{constructor(i,o,l,r,c,u,s,p){this.candidatureSrv=i,this.commonService=o,this.noteService=l,this.compteDisponibiliteService=r,this.compteService=c,this.messageService=u,this.router=s,this.sessionSrv=p,this.entretienTimes=["08h30 - 09h00","09h00 - 09h30","09h30 - 10h00","10h00 - 10h30","10h30 - 11h00","11h00 - 11h30","11h30 - 12h00","12h00 - 13h00","13h00 - 13h30","13h30 - 14h00","14h00 - 14h30","14h30 - 15h00","15h00 - 15h30","15h30 - 16h00","16h00 - 16h30"],this.interviewers=[],this.datesOfDisponibilities=[],this.horaires=[],this.juries=[],this.candidats=[]}ngOnInit(){this.entretienNoteMap=new Map,this.interverwerMap=new Map,this.getActiveSession(),this.getCandidatures(),this.getCompteDisponibilite()}getActiveSession(){this.sessionSrv.getActive().subscribe({next:i=>{this.session=i}})}getCandidatures(){this.candidatureSrv.liste().subscribe({next:i=>{console.log("candidatures: ",i),this.candidats=i}})}getCompteDisponibilite(){this.compteDisponibiliteService.liste().subscribe({next:i=>{var o,l;let r=[],c=[];for(let s of i){let p=new Date(s.disponibilite.date_disponibilite).getTime();r.findIndex(D=>D==p)<=-1&&r.push(p),this.juries.push(s.compte);let ne=this.commonService.buildDateWithTime(s.disponibilite.debut_disponibilite.toString()),re=this.commonService.buildDateWithTime(s.disponibilite.fin_disponibilite.toString()),C=this.commonService.formatDate(ne)+" - "+this.commonService.formatDate(re);this.horaires.findIndex(D=>D==C)<=-1&&this.horaires.push(C);let y=[],O=(null===(o=s.compte)||void 0===o?void 0:o.name)+" "+(null===(l=s.compte)||void 0===l?void 0:l.prenom);if(this.interverwerMap.has(C+" - "+p)){let D=this.interverwerMap.get(C+" - "+p)||[];y.push(...D)}y.push(O),c.push(O),this.interverwerMap.set(C+" - "+p,y)}let u=new Set(r);this.datesOfDisponibilities=[...u],this.datesOfDisponibilities.sort(),this.currentDate=new Date(this.datesOfDisponibilities[0]),this.interviewers=[...new Set(c)]}})}handleCandidatSelect(i,o){let l=i.target.value,r=new S.j,c=this.commonService.buildDate(this.currentDate,o);r.debut_entretien=new Date(c.startDate),r.fin_entretien=new Date(c.endDate);let u=n.find(s=>s.compte.email==l);if(r.candidature_id=u.id||0,r.candidature=u,this.entretienNoteMap.has(o+" - "+this.currentDate.getTime().toString())){let s=this.entretienNoteMap.get(o+" - "+this.currentDate.getTime().toString());s.candidature=r.candidature,s.candidature_id=r.candidature_id,s.debut_entretien=r.debut_entretien,s.fin_entretien=r.fin_entretien,r=s}this.entretienNoteMap.set(o+" - "+this.currentDate.getTime().toString(),r)}handleInterviewerSelect(i,o){let l=i.target.value,r=new S.j,c=this.commonService.buildDate(this.currentDate,o);r.debut_entretien=new Date(c.startDate),r.fin_entretien=new Date(c.endDate);let u=this.juries.find(s=>(null==s?void 0:s.name)+" "+(null==s?void 0:s.prenom)==l);if(r.compte_id=u.id||0,r.compte=u,this.entretienNoteMap.has(o+" - "+this.currentDate.getTime().toString())){let s=this.entretienNoteMap.get(o+" - "+this.currentDate.getTime().toString());s.compte=r.compte,s.compte_id=r.compte_id,s.debut_entretien=r.debut_entretien,s.fin_entretien=r.fin_entretien,r=s}this.entretienNoteMap.set(o+" - "+this.currentDate.getTime().toString(),r)}addNote(){this.entretienNoteMap.forEach((i,o,l)=>{let r=i;this.noteService.create(r).subscribe({next:c=>{var u,s,p,T;this.messageService.add({severity:"success",summary:"Assignation du jury ",detail:"Assignation du jury "+(null===(u=r.compte)||void 0===u?void 0:u.name)+" "+(null===(s=r.compte)||void 0===s?void 0:s.prenom)+" \xe0 "+(null===(p=r.candidature)||void 0===p?void 0:p.compte.name)+" "+(null===(T=r.candidature)||void 0===T?void 0:T.compte.prenom)+" effectu\xe9e avec success pour la date du "+this.currentDate.toString()})},error:c=>{this.messageService.add({severity:"error",summary:"Erreur d'assignation",detail:c.message}),console.log("Error: ",c)}})}),this.router.navigate(["/calendrier_entretiens"])}prochaineDate(){let i=this.datesOfDisponibilities.findIndex(o=>o==this.currentDate.getTime());i>-1&&(this.currentDate=new Date(this.datesOfDisponibilities[i>=this.datesOfDisponibilities.length-1?0:i+1]))}reset(){this.entretienNoteMap=new Map}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(E.u),e.Y36(I.v),e.Y36(M.Y),e.Y36(F.R),e.Y36(B.D),e.Y36(q.ez),e.Y36(x.F0),e.Y36(Y.K))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-calendrier-disponibilite"]],decls:35,vars:8,consts:[[1,"calendrier-disponibilite-page","calendrier-page","page-content"],[1,"page-title"],[1,"pi","pi-angle-right"],[1,"page-header"],[1,"header"],[1,"title"],[1,"line"],["id","table"],[4,"ngFor","ngForOf"],[1,"card"],["class","btn btn-danger",3,"click",4,"ngIf"],[1,"sub-header"],["class","title",4,"ngIf"],["class","calendrier",4,"ngIf"],[1,"footer"],[1,"btn-group"],["type","submit",1,"btn","btn-info",3,"click"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],[1,"btn","btn-danger",3,"click"],[1,"calendrier"],["name","candidat","id","candidat",3,"change",4,"ngIf"],[4,"ngIf"],["colspan","4","class","pause",4,"ngIf"],["name","candidat","id","candidat",3,"change"],["value","","disabled",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["name","interviewer","id","interviewer",3,"change"],["colspan","4",1,"pause"]],template:function(i,o){1&i&&(e.TgZ(0,"section",0)(1,"h1",1),e._uU(2," Entretiens "),e._UZ(3,"i",2),e._uU(4," Calendrier des disponibilit\xe9s"),e.qZA(),e.TgZ(5,"div",3)(6,"div",4)(7,"h3",5),e._uU(8,"Disponibilit\xe9 des membres du jury"),e.qZA()(),e._UZ(9,"div",6),e.qZA(),e.TgZ(10,"div")(11,"table",7)(12,"thead")(13,"th"),e._uU(14,"Horaire"),e.qZA(),e.YNc(15,J,3,3,"th",8),e.qZA(),e.TgZ(16,"tbody"),e.YNc(17,z,4,2,"tr",8),e.qZA()()(),e.TgZ(18,"div",9)(19,"div",4)(20,"h3",5),e._uU(21),e.ALo(22,"date"),e.qZA(),e.YNc(23,P,2,0,"button",10),e.qZA(),e._UZ(24,"div",6),e.TgZ(25,"div",11)(26,"h3",5),e._uU(27,"Entretiens concours Ucac-Icam"),e.qZA(),e.YNc(28,$,3,3,"h3",12),e.qZA(),e.YNc(29,V,15,1,"div",13),e.TgZ(30,"div",14),e._UZ(31,"div",6),e.TgZ(32,"div",15)(33,"button",16),e.NdJ("click",function(){return o.addNote()}),e._uU(34," Soumettre "),e.qZA()()()()()),2&i&&(e.xp6(15),e.Q6J("ngForOf",o.datesOfDisponibilities),e.xp6(2),e.Q6J("ngForOf",o.horaires),e.xp6(4),e.hij("Entretiens concours, session du ",e.lcZ(22,6,null==o.session?null:o.session.date_examen),""),e.xp6(2),e.Q6J("ngIf",o.datesOfDisponibilities.length>1),e.xp6(5),e.Q6J("ngIf",null!=o.currentDate&&null!=o.currentDate),e.xp6(1),e.Q6J("ngIf",null!=o.currentDate&&null!=o.currentDate))},directives:[b.sg,b.mk,b.O5,A.YN,A.Kr],pipes:[b.uU],encapsulation:2}),t})();var U=d(7618);const ee=[{path:"",component:k,canActivate:[U.a]}];let te=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[U.a],imports:[[x.Bz.forChild(ee)],x.Bz]}),t})(),ie=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[b.ez,te,A.u5,A.UX]]}),t})()}}]);