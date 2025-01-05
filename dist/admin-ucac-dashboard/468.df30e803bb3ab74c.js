"use strict";(self.webpackChunkadmin_ucac_dashboard=self.webpackChunkadmin_ucac_dashboard||[]).push([[468],{9468:(I,b,a)=>{a.r(b),a.d(b,{CalendrierEntretienModule:()=>k});var v=a(9808),C=a(5193),e=a(7587),g=a(8766),x=a(1303),i=a(7212),l=a(62),r=a(7921),u=a(845),_=a(4119),w=a(4036),f=a(2382);function U(n,c){1&n&&e._UZ(0,"i",21)}function D(n,c){1&n&&e._UZ(0,"i",22)}function y(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"span",18),e.NdJ("click",function(){return e.CHM(t),e.oxw().showAllInterviewer()}),e.YNc(1,U,1,0,"i",19),e.YNc(2,D,1,0,"i",20),e._uU(3," Visualisation pour l'ensemble des intervenants "),e.qZA()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.showForAllInterviwer),e.xp6(1),e.Q6J("ngIf",!t.showForAllInterviwer)}}function S(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"p-dropdown",23),e.NdJ("onChange",function(d){return e.CHM(t),e.oxw().handleInterviewerSelect(d)})("ngModelChange",function(d){return e.CHM(t),e.oxw().interviewer=d}),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("options",t.interviewers)("showClear",!0)("ngModel",t.interviewer)}}function J(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"button",24),e.NdJ("click",function(){return e.CHM(t),e.oxw().previousDate()}),e._uU(1," Date pr\xe9c\xe9dente "),e.qZA()}}function F(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"button",25),e.NdJ("click",function(){return e.CHM(t),e.oxw().prochaineDate()}),e._uU(1," Date suivante "),e.qZA()}}function B(n,c){if(1&n&&(e.TgZ(0,"h3",6),e._uU(1),e.ALo(2,"date"),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Oqu(e.lcZ(2,1,t.currentDate))}}function N(n,c){if(1&n&&(e.TgZ(0,"td",28)(1,"div"),e._uU(2),e.qZA()()),2&n){const t=e.oxw().$implicit,o=e.oxw();e.uIk("rowspan",o.entretiensBeforeBreak.length+1),e.xp6(2),e.Oqu(t.interviewer)}}function Y(n,c){if(1&n&&(e.TgZ(0,"td")(1,"div"),e._uU(2),e.qZA()()),2&n){const t=e.oxw().$implicit;e.xp6(2),e.Oqu(t.interviewer)}}function q(n,c){if(1&n&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.ALo(3,"date"),e.ALo(4,"date"),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.YNc(11,N,3,2,"td",26),e.YNc(12,Y,3,1,"td",27),e.qZA()),2&n){const t=c.$implicit,o=c.index,d=e.oxw();e.xp6(2),e.hij("",e.xi3(3,6,t.disponibility.debut_disponibilite,"H:mm")+" - "+e.xi3(4,9,t.disponibility.fin_disponibilite,"H:mm")," "),e.xp6(4),e.Oqu(t.centre),e.xp6(2),e.Oqu(t.candidat.compte.name),e.xp6(2),e.Oqu(t.candidat.compte.prenom),e.xp6(1),e.Q6J("ngIf",0==o&&!d.showForAllInterviwer),e.xp6(1),e.Q6J("ngIf",d.showForAllInterviwer)}}function P(n,c){if(1&n&&(e.TgZ(0,"td",28)(1,"div"),e._uU(2),e.qZA()()),2&n){const t=e.oxw().$implicit,o=e.oxw();e.uIk("rowspan",o.entretiensAfterBreak.length+1),e.xp6(2),e.Oqu(t.interviewer)}}function R(n,c){if(1&n&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.ALo(3,"date"),e.ALo(4,"date"),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.YNc(11,P,3,2,"td",26),e.qZA()),2&n){const t=c.$implicit,o=c.index;e.xp6(2),e.hij("",e.xi3(3,5,t.disponibility.debut_disponibilite,"H:mm")+" - "+e.xi3(4,8,t.disponibility.fin_disponibilite,"H:mm")," "),e.xp6(4),e.Oqu(t.centre),e.xp6(2),e.Oqu(t.candidat.compte.name),e.xp6(2),e.Oqu(t.candidat.compte.prenom),e.xp6(1),e.Q6J("ngIf",0==o)}}let O=(()=>{class n{constructor(t,o,d,m,s){this.noteService=t,this.storageService=o,this.compteDisponibiliteService=d,this.commonService=m,this.sessionSrv=s,this.interviewers=[],this.entretiensBeforeBreak=[],this.entretiensAfterBreak=[],this.datesOfEntretiens=[],this.indexCurrentDate=0,this.showForAllInterviwer=!1}ngOnInit(){this.currentDate=new Date,this.getActiveSession(),this.compte=this.storageService.getUserConnected(),this.interviewer=this.compte.name+" "+this.compte.prenom,this.compte.role==C.u.JURY&&this.getEntretiens(),this.getCompteDisponibilite()}downloadPlanningEntretien(){window.open(this.noteService.downloadPlanningEntretienUrl(),"_blank")}showAllInterviewer(){this.showForAllInterviwer?(this.entretiensBeforeBreak=[],this.entretiensAfterBreak=[],this.showForAllInterviwer=!1):(this.showForAllInterviwer=!0,this.getEntretiens())}getCompteDisponibilite(){this.compteDisponibiliteService.liste().subscribe({next:t=>{var o,d;let m=[];for(let s of t)m.push((null===(o=s.compte)||void 0===o?void 0:o.name)+" "+(null===(d=s.compte)||void 0===d?void 0:d.prenom));this.interviewers=[...new Set(m)]}})}getActiveSession(){this.sessionSrv.getActive().subscribe({next:t=>{let o=new Date(t.date_debut_entretien),d=new Date(t.date_fin_entretien);this.datesOfEntretiens=this.commonService.genererDates(o.getTime(),d.getTime()),this.indexCurrentDate=0,this.currentDate=this.datesOfEntretiens[this.indexCurrentDate]}})}handleInterviewerSelect(t){this.showForAllInterviwer=!1,this.getEntretiens(t.value)}getEntretiens(t){this.noteService.liste().subscribe({next:o=>{let d=[];d=o.filter(null!=t?s=>{var p,h;return new Date(s.debut_entretien).getDate()===this.currentDate.getDate()&&(null===(p=s.compte)||void 0===p?void 0:p.name)+" "+(null===(h=s.compte)||void 0===h?void 0:h.prenom)===t}:this.compte.role==C.u.JURY?s=>{var p,h;return new Date(s.debut_entretien).getDate()===this.currentDate.getDate()&&(null===(p=s.compte)||void 0===p?void 0:p.name)+" "+(null===(h=s.compte)||void 0===h?void 0:h.prenom)===this.interviewer}:s=>new Date(s.debut_entretien).getDate()===this.currentDate.getDate()),d.sort((s,p)=>new Date(s.fin_entretien).getTime()-new Date(p.fin_entretien).getTime());let m=d.map(s=>{var p,h,E;return{centre:(null===(p=s.candidature)||void 0===p?void 0:p.centre)||"",interviewer:(null===(h=s.compte)||void 0===h?void 0:h.name)+" "+(null===(E=s.compte)||void 0===E?void 0:E.prenom),candidat:s.candidature,disponibility:{date_disponibilite:s.debut_entretien,debut_disponibilite:this.commonService.formatDate1(new Date(s.debut_entretien)),fin_disponibilite:this.commonService.formatDate1(new Date(s.fin_entretien))}}});m.sort((s,p)=>{var h,E,A,Z;return(null===(h=s.disponibility)||void 0===h?void 0:h.debut_disponibilite)>(null===(E=p.disponibility)||void 0===E?void 0:E.debut_disponibilite)?1:(null===(A=p.disponibility)||void 0===A?void 0:A.debut_disponibilite)>(null===(Z=s.disponibility)||void 0===Z?void 0:Z.debut_disponibilite)?-1:0}),this.entretiensBeforeBreak=m.filter(s=>s.disponibility.fin_disponibilite.getHours()<=12),this.entretiensAfterBreak=m.filter(s=>s.disponibility.fin_disponibilite.getHours()>12)},error:o=>{console.log("error: ",o)}})}prochaineDate(){this.indexCurrentDate<this.datesOfEntretiens.length&&(this.indexCurrentDate=this.indexCurrentDate>this.datesOfEntretiens.length?this.datesOfEntretiens.length-1:this.indexCurrentDate+1,this.currentDate=this.datesOfEntretiens[this.indexCurrentDate],this.getEntretiens())}previousDate(){this.indexCurrentDate>0&&(this.indexCurrentDate=this.indexCurrentDate<0?0:this.indexCurrentDate-1,this.currentDate=this.datesOfEntretiens[this.indexCurrentDate],this.getEntretiens())}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.Y),e.Y36(x.V),e.Y36(i.R),e.Y36(l.v),e.Y36(r.K))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-calendrier-entretien"]],decls:42,vars:7,consts:[[1,"calendrier-entretien-page","calendrier-page","page-content"],[1,"page-title"],[1,"pi","pi-angle-right"],["pButton","","pRipple","","type","button","icon","pi pi-download","pTooltip","T\xe9l\xe9charger le calendrier des entretiens",1,"ml-2","p-button-sm","p-button-raised","p-button-rounded","p-button-warning","p-button-text",3,"click"],[1,"card"],[1,"header"],[1,"title"],["class","text-sm cursor-pointer hover:text-orange-500",3,"click",4,"ngIf"],["placeholder","Choisir un intervenant",3,"options","showClear","ngModel","onChange","ngModelChange",4,"ngIf"],["class","btn btn-danger ml-1 mr-1",3,"click",4,"ngIf"],["class","btn btn-primary",3,"click",4,"ngIf"],[1,"line"],[1,"sub-header"],["class","title",4,"ngIf"],[1,"calendrier"],["id","table"],[4,"ngFor","ngForOf"],["colspan","4",1,"pause"],[1,"text-sm","cursor-pointer","hover:text-orange-500",3,"click"],["class","pi pi-eye-slash",4,"ngIf"],["class","pi pi-eye",4,"ngIf"],[1,"pi","pi-eye-slash"],[1,"pi","pi-eye"],["placeholder","Choisir un intervenant",3,"options","showClear","ngModel","onChange","ngModelChange"],[1,"btn","btn-danger","ml-1","mr-1",3,"click"],[1,"btn","btn-primary",3,"click"],["class","rowspan",4,"ngIf"],[4,"ngIf"],[1,"rowspan"]],template:function(t,o){1&t&&(e.TgZ(0,"section",0)(1,"h1",1),e._uU(2," Entretiens "),e._UZ(3,"i",2),e._uU(4," Calendrier des entretiens "),e.TgZ(5,"button",3),e.NdJ("click",function(){return o.downloadPlanningEntretien()}),e.qZA()(),e.TgZ(6,"div",4)(7,"div",5)(8,"div")(9,"h3",6),e._uU(10,"Calendrier final des entretiens"),e.qZA(),e.YNc(11,y,4,2,"span",7),e.qZA(),e.TgZ(12,"div"),e.YNc(13,S,1,3,"p-dropdown",8),e.YNc(14,J,2,0,"button",9),e.YNc(15,F,2,0,"button",10),e.qZA()(),e._UZ(16,"div",11),e.TgZ(17,"div",12)(18,"h3",6),e._uU(19,"Entretiens concours Ucac-Icam"),e.qZA(),e.YNc(20,B,3,3,"h3",13),e.qZA(),e.TgZ(21,"div",14)(22,"table",15)(23,"thead")(24,"th"),e._uU(25,"Horaire"),e.qZA(),e.TgZ(26,"th"),e._uU(27,"Centre d'examen"),e.qZA(),e.TgZ(28,"th"),e._uU(29,"Noms"),e.qZA(),e.TgZ(30,"th"),e._uU(31,"Pr\xe9nom"),e.qZA(),e.TgZ(32,"th"),e._uU(33,"Intervenants"),e.qZA()(),e.TgZ(34,"tbody"),e.YNc(35,q,13,12,"tr",16),e.TgZ(36,"tr")(37,"td"),e._uU(38,"12h00 - 13h00"),e.qZA(),e.TgZ(39,"td",17),e._uU(40,"Pause"),e.qZA()(),e.YNc(41,R,12,11,"tr",16),e.qZA()()()()()),2&t&&(e.xp6(11),e.Q6J("ngIf","JURY"!=o.compte.role),e.xp6(2),e.Q6J("ngIf","JURY"!=o.compte.role),e.xp6(1),e.Q6J("ngIf",o.datesOfEntretiens.length>1),e.xp6(1),e.Q6J("ngIf",o.datesOfEntretiens.length>1),e.xp6(5),e.Q6J("ngIf",o.currentDate),e.xp6(15),e.Q6J("ngForOf",o.entretiensBeforeBreak),e.xp6(6),e.Q6J("ngForOf",o.entretiensAfterBreak))},directives:[u.Hq,_.u,v.O5,w.Lt,f.JJ,f.On,v.sg],pipes:[v.uU],encapsulation:2}),n})();var M=a(7671),T=a(7618);const H=[{path:"",component:O,canActivate:[T.a]},{path:"**",component:O,canActivate:[T.a]}];let L=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[T.a],imports:[[M.Bz.forChild(H)],M.Bz]}),n})(),k=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[v.ez,L,f.u5,f.UX,_.z,u.hJ,w.kW]]}),n})()},62:(I,b,a)=>{a.d(b,{v:()=>e});var v=a(9808),C=a(7587);let e=(()=>{class g{constructor(){}calculerJours(i,l){var r=Math.abs(l-i);return Math.floor(r/864e5)}clear(i){i.clear()}getStatuses(){return[{label:!1,value:"A faire"},{label:!0,value:"R\xe9alis\xe9"}]}getSeverity(i){switch(i){case!1:return"danger";case!0:return"success";default:return"warning"}}getStatusLabel(i){switch(i){case!1:return"A faire";case!0:return"R\xe9alis\xe9";default:return""}}getFormationLabel(i){return"Ing\xe9nieur g\xe9n\xe9raliste parcours international"==i?"OP":"Ing\xe9nieur g\xe9n\xe9raliste par apprentissage ou g\xe9nie des proc\xe9d\xe9s"==i?"L":"Ing\xe9nieur genie des proc\xe9d\xe9s"==i?"IP":"Ing\xe9nieur g\xe9neraliste parcours international et innovation"==i?"I":"Ing\xe9nieur g\xe9nie Informtique"==i?"X":""}genererDates(i,l){let r=this.calculerJours(i,l);console.log("nombre jour:",r);let u=[],_=new Date(i);u.push(new Date(i));for(let w=0;w<r;w++)_.setDate(_.getDate()+1),u.push(new Date(_));return u}formatDate(i){let r=(0,v.p6)(i,"shortTime","fr-FR").split(":");return parseInt(r[0],10)-1+"h"+r[1]}formatDate1(i){const l=new Date(i),w=(l.getFullYear(),l.getMonth(),l.getDate(),l.getHours()),f=l.getMinutes();return l.setHours(w-1),l.setMinutes(f),l}buildDateWithTime(i){const l=new Date;return new Date(`${l.getFullYear()}-${l.getMonth()+1}-${l.getDate()} ${i}`)}buildDate(i,l){let u,_,r=l.split("-"),f=r[0].split("h");i.setHours(parseInt(f[0],10)+1),i.setMinutes(parseInt(f[1],10)),u=i.getTime();let D=r[1].split("h");return i.setHours(parseInt(D[0],10)+1),i.setMinutes(parseInt(D[1],10)),_=i.getTime(),{startDate:u,endDate:_}}}return g.\u0275fac=function(i){return new(i||g)},g.\u0275prov=C.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},8766:(I,b,a)=>{a.d(b,{Y:()=>x});var v=a(2340),C=a(7587),e=a(520),g=a(4920);let x=(()=>{class i{constructor(r,u){this.http=r,this.baseUrlSvr=u,this.url="",this.url=`${this.baseUrlSvr.getOrigin()}${v.N.interviewPath}`,this.url+="note/"}allNotesEntretien(){return this.http.get(this.url+"allNotesEntretien")}downloadPlanningEntretien(){return this.http.get(this.url+"download/planningEntretiens",{responseType:"arraybuffer"})}downloadPlanningEntretienUrl(){return this.url+"download/planningEntretiens"}downloadNoteEntretienUrl(r,u){return this.url+"download/noteEntretiens/"+r+"/"+u}downloadNoteEntretienUrlFile(r,u){return this.http.get(this.url+"download/noteEntretiens/"+r+"/"+u,{responseType:"blob"})}liste(){return this.http.get(this.url+"all")}getOne(r){return this.http.get(this.url+r)}getByCandidatureId(r){return this.http.get(this.url+"notesEntretienByCandidature/"+r)}create(r){return this.http.post(this.url+"create",r)}update(r){return this.http.patch(this.url+(null==r?void 0:r.id),r)}delete(r){return this.http.delete(this.url+r)}}return i.\u0275fac=function(r){return new(r||i)(C.LFG(e.eN),C.LFG(g.x))},i.\u0275prov=C.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()}}]);