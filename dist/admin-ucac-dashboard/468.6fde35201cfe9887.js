"use strict";(self.webpackChunkadmin_ucac_dashboard=self.webpackChunkadmin_ucac_dashboard||[]).push([[468],{9468:(A,s,r)=>{r.r(s),r.d(s,{CalendrierEntretienModule:()=>m});var o=r(9808),e=r(7587);function p(t,i){if(1&t&&(e.TgZ(0,"td",13)(1,"div"),e._uU(2),e.qZA()()),2&t){const n=e.oxw().$implicit,a=e.oxw();e.uIk("rowspan",a.entretiens.length+1),e.xp6(2),e.Oqu(n.interviewer)}}function g(t,i){if(1&t&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.ALo(3,"date"),e.ALo(4,"date"),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.YNc(11,p,3,2,"td",12),e.qZA()),2&t){const n=i.$implicit,a=i.index;e.xp6(2),e.hij("",e.xi3(3,5,n.disponibility.debut_disponibilite,"H:mm")+" - "+e.xi3(4,8,n.disponibility.fin_disponibilite,"H:mm")," "),e.xp6(4),e.Oqu(n.centre),e.xp6(2),e.Oqu(""),e.xp6(2),e.Oqu(""),e.xp6(1),e.Q6J("ngIf",0==a)}}let l=(()=>{class t{constructor(){this.entretiens=[{centre:"Libreville",interviewer:"DIANA MENGUELE",disponibility:{date_disponibilite:new Date,debut_disponibilite:new Date,fin_disponibilite:new Date}},{centre:"Libreville",interviewer:"DIANA MENGUELE",disponibility:{date_disponibilite:new Date,debut_disponibilite:new Date,fin_disponibilite:new Date}},{centre:"Libreville",interviewer:"DIANA MENGUELE",disponibility:{date_disponibilite:new Date,debut_disponibilite:new Date,fin_disponibilite:new Date}}],this.dateIndex=0,this.dates=[]}ngOnInit(){this.currentDate=new Date,this.getEntretiens()}getEntretiens(){}prochaineDate(){this.currentDate=new Date(this.dates[this.dateIndex+1])}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-calendrier-entretien"]],decls:36,vars:4,consts:[[1,"calendrier-entretien-page","calendrier-page","page-content"],[1,"page-title"],[1,"pi","pi-angle-right"],[1,"card"],[1,"header"],[1,"title"],[1,"line"],[1,"sub-header"],[1,"calendrier"],["id","table"],[4,"ngFor","ngForOf"],["colspan","3",1,"pause"],["class","rowspan",4,"ngIf"],[1,"rowspan"]],template:function(n,a){1&n&&(e.TgZ(0,"section",0)(1,"h1",1),e._uU(2," Entretiens "),e._UZ(3,"i",2),e._uU(4," Calendrier des entretiens"),e.qZA(),e.TgZ(5,"div",3)(6,"div",4)(7,"h3",5),e._uU(8,"Entretiens concours"),e.qZA()(),e._UZ(9,"div",6),e.TgZ(10,"div",7)(11,"h3",5),e._uU(12,"Entretiens concours Ucac-Icam"),e.qZA(),e.TgZ(13,"h3",5),e._uU(14),e.ALo(15,"date"),e.qZA()(),e.TgZ(16,"div",8)(17,"table",9)(18,"thead")(19,"th"),e._uU(20,"Horaire"),e.qZA(),e.TgZ(21,"th"),e._uU(22,"Centre d'examen"),e.qZA(),e.TgZ(23,"th"),e._uU(24,"Noms"),e.qZA(),e.TgZ(25,"th"),e._uU(26,"Pr\xe9noms"),e.qZA(),e.TgZ(27,"th"),e._uU(28,"Interviewer"),e.qZA()(),e.TgZ(29,"tbody"),e.YNc(30,g,12,11,"tr",10),e.TgZ(31,"tr")(32,"td"),e._uU(33,"12h00 - 13h00"),e.qZA(),e.TgZ(34,"td",11),e._uU(35,"Pause"),e.qZA()()()()()()()),2&n&&(e.xp6(14),e.Oqu(e.lcZ(15,2,a.currentDate)),e.xp6(16),e.Q6J("ngForOf",a.entretiens))},directives:[o.sg,o.O5],pipes:[o.uU],encapsulation:2}),t})();var u=r(7671),d=r(7618);const Z=[{path:"",component:l,canActivate:[d.a]},{path:"**",component:l,canActivate:[d.a]}];let h=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[d.a],imports:[[u.Bz.forChild(Z)],u.Bz]}),t})();var c=r(2382);let m=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[o.ez,h,c.u5,c.UX]]}),t})()}}]);