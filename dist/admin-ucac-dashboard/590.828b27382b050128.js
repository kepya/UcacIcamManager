"use strict";(self.webpackChunkadmin_ucac_dashboard=self.webpackChunkadmin_ucac_dashboard||[]).push([[590],{1590:(A,h,l)=>{l.r(h),l.d(h,{NoteEntretienModule:()=>pt});var g=l(9808),v=l(7671),i=l(2382),d=l(5193),N=l(6093),t=l(7587),_=l(8766),c=l(3270),m=l(9783),f=l(62),Z=l(2042);function C(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"i",29),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).searchValue=""}),t.qZA()}}function I(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td")(14,"button",34),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw(3).updateNote(s)}),t.TgZ(15,"div"),t._UZ(16,"i",35),t.qZA(),t.TgZ(17,"span"),t._uU(18," Note "),t.qZA()()()()}if(2&n){const e=a.$implicit,r=t.oxw(3);t.xp6(2),t.Oqu(r.getHoraire(e)),t.xp6(2),t.Oqu(null==e.candidature||null==e.candidature.compte?null:e.candidature.compte.name),t.xp6(2),t.Oqu(null==e.candidature||null==e.candidature.compte?null:e.candidature.compte.prenom),t.xp6(2),t.Oqu(e.noteX),t.xp6(2),t.Oqu(e.noteOP),t.xp6(2),t.Oqu(e.noteL)}}function q(n,a){1&n&&(t.TgZ(0,"tr")(1,"td",36)(2,"span",37),t._uU(3," Aucune notes trouv\xe9es avec ces elements de recherche "),t.qZA()()())}function E(n,a){1&n&&(t.TgZ(0,"tr")(1,"td",36)(2,"span",37),t._uU(3," Aucune notes presentent dans la base "),t.qZA()()())}const p=function(n){return{bold:n}};function J(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"table",30)(1,"tr")(2,"th")(3,"div"),t._uU(4," Horaires "),t.TgZ(5,"i",31),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).sort("horaire")}),t.qZA()()(),t.TgZ(6,"th")(7,"div"),t._uU(8," Nom "),t.TgZ(9,"i",31),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).sort("nom")}),t.qZA()()(),t.TgZ(10,"th")(11,"div"),t._uU(12," Pr\xe9nom "),t.TgZ(13,"i",31),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).sort("prenom")}),t.qZA()()(),t.TgZ(14,"th")(15,"div"),t._uU(16," Note X "),t.TgZ(17,"i",31),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).sort("noteX")}),t.qZA()()(),t.TgZ(18,"th")(19,"div"),t._uU(20," Note OP "),t.TgZ(21,"i",31),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).sort("noteOP")}),t.qZA()()(),t.TgZ(22,"th")(23,"div"),t._uU(24," Note L "),t.TgZ(25,"i",31),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).sort("noteL")}),t.qZA()()(),t.TgZ(26,"th")(27,"div"),t._uU(28," # "),t.qZA()()(),t.YNc(29,I,19,6,"tr",32),t.YNc(30,q,4,0,"tr",33),t.YNc(31,E,4,0,"tr",33),t.qZA()}if(2&n){const e=t.oxw(2);t.xp6(5),t.Gre("icon-sort ","horaire"==e.sortProperty?e.sortIcon:e.downUpIcon,""),t.Q6J("ngClass",t.VKq(27,p,"horaire"==e.sortProperty)),t.xp6(4),t.Gre("icon-sort ","nom"==e.sortProperty?e.sortIcon:e.downUpIcon,""),t.Q6J("ngClass",t.VKq(29,p,"nom"==e.sortProperty)),t.xp6(4),t.Gre("icon-sort ","prenom"==e.sortProperty?e.sortIcon:e.downUpIcon,""),t.Q6J("ngClass",t.VKq(31,p,"prenom"==e.sortProperty)),t.xp6(4),t.Gre("icon-sort ","noteX"==e.sortProperty?e.sortIcon:e.downUpIcon,""),t.Q6J("ngClass",t.VKq(33,p,"noteX"==e.sortProperty)),t.xp6(4),t.Gre("icon-sort ","noteOP"==e.sortProperty?e.sortIcon:e.downUpIcon,""),t.Q6J("ngClass",t.VKq(35,p,"noteOP"==e.sortProperty)),t.xp6(4),t.Gre("icon-sort ","noteL"==e.sortProperty?e.sortIcon:e.downUpIcon,""),t.Q6J("ngClass",t.VKq(37,p,"noteL"==e.sortProperty)),t.xp6(4),t.Q6J("ngForOf",e.notes),t.xp6(1),t.Q6J("ngIf",e.searchValue&&0===e.notes.length),t.xp6(1),t.Q6J("ngIf",!e.searchValue&&0===e.notes.length)}}function b(n,a){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA()()),2&n){const e=a.$implicit,r=t.oxw(3);t.xp6(2),t.Oqu(r.getHoraire(e)),t.xp6(2),t.Oqu(null==e.candidature||null==e.candidature.compte?null:e.candidature.compte.name),t.xp6(2),t.Oqu(null==e.candidature||null==e.candidature.compte?null:e.candidature.compte.prenom),t.xp6(2),t.AsE("",null==e.compte?null:e.compte.name," ",null==e.compte?null:e.compte.prenom,""),t.xp6(2),t.Oqu(e.noteX),t.xp6(2),t.Oqu(e.noteOP),t.xp6(2),t.Oqu(e.noteL)}}function w(n,a){1&n&&(t.TgZ(0,"tr")(1,"td",36)(2,"span",37),t._uU(3," Aucune notes trouv\xe9es avec ces elements de recherche "),t.qZA()()())}function P(n,a){1&n&&(t.TgZ(0,"tr")(1,"td",36)(2,"span",37),t._uU(3," Aucune notes presentent dans la base "),t.qZA()()())}function O(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"table",30)(1,"tr")(2,"th")(3,"div"),t._uU(4," Horaires "),t.TgZ(5,"i",31),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).sort("horaire")}),t.qZA()()(),t.TgZ(6,"th")(7,"div"),t._uU(8," Nom "),t.TgZ(9,"i",31),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).sort("nom")}),t.qZA()()(),t.TgZ(10,"th")(11,"div"),t._uU(12," Pr\xe9nom "),t.TgZ(13,"i",31),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).sort("prenom")}),t.qZA()()(),t.TgZ(14,"th")(15,"div"),t._uU(16," Intervenant "),t.TgZ(17,"i",31),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).sort("intervenant")}),t.qZA()()(),t.TgZ(18,"th")(19,"div"),t._uU(20," Note X "),t.TgZ(21,"i",31),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).sort("noteX")}),t.qZA()()(),t.TgZ(22,"th")(23,"div"),t._uU(24," Note OP "),t.TgZ(25,"i",31),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).sort("noteOP")}),t.qZA()()(),t.TgZ(26,"th")(27,"div"),t._uU(28," Note L "),t.TgZ(29,"i",31),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).sort("noteL")}),t.qZA()()()(),t.YNc(30,b,15,8,"tr",32),t.YNc(31,w,4,0,"tr",33),t.YNc(32,P,4,0,"tr",33),t.qZA()}if(2&n){const e=t.oxw(2);t.xp6(5),t.Gre("icon-sort ","horaire"==e.sortProperty?e.sortIcon:e.downUpIcon,""),t.Q6J("ngClass",t.VKq(31,p,"horaire"==e.sortProperty)),t.xp6(4),t.Gre("icon-sort ","nom"==e.sortProperty?e.sortIcon:e.downUpIcon,""),t.Q6J("ngClass",t.VKq(33,p,"nom"==e.sortProperty)),t.xp6(4),t.Gre("icon-sort ","prenom"==e.sortProperty?e.sortIcon:e.downUpIcon,""),t.Q6J("ngClass",t.VKq(35,p,"prenom"==e.sortProperty)),t.xp6(4),t.Gre("icon-sort ","intervenant"==e.sortProperty?e.sortIcon:e.downUpIcon,""),t.Q6J("ngClass",t.VKq(37,p,"intervenant"==e.sortProperty)),t.xp6(4),t.Gre("icon-sort ","noteX"==e.sortProperty?e.sortIcon:e.downUpIcon,""),t.Q6J("ngClass",t.VKq(39,p,"noteX"==e.sortProperty)),t.xp6(4),t.Gre("icon-sort ","noteOP"==e.sortProperty?e.sortIcon:e.downUpIcon,""),t.Q6J("ngClass",t.VKq(41,p,"noteOP"==e.sortProperty)),t.xp6(4),t.Gre("icon-sort ","noteL"==e.sortProperty?e.sortIcon:e.downUpIcon,""),t.Q6J("ngClass",t.VKq(43,p,"noteL"==e.sortProperty)),t.xp6(1),t.Q6J("ngForOf",e.notes),t.xp6(1),t.Q6J("ngIf",e.searchValue&&0===e.notes.length),t.xp6(1),t.Q6J("ngIf",!e.searchValue&&0===e.notes.length)}}function M(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"li",38)(1,"a",39),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).previous()}),t._uU(2,"Pr\xe9cedent"),t.qZA()()}}function k(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"li",40)(1,"a",41),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).next()}),t._uU(2,"Suivant"),t.qZA()()}}function Q(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"section",3)(1,"h1",4),t._uU(2," Entretiens "),t._UZ(3,"i",5),t._uU(4," Notes entretiens"),t.qZA(),t.TgZ(5,"div",6)(6,"div",7)(7,"h3",8),t._uU(8,"Liste de passage de vos entretiens"),t.qZA()(),t._UZ(9,"div",9),t.TgZ(10,"div",10)(11,"div",11)(12,"div",12)(13,"span"),t._uU(14,"Voir"),t.qZA(),t.TgZ(15,"select",13),t.NdJ("change",function(o){return t.CHM(e),t.oxw().handlePageSize(o)})("ngModelChange",function(o){return t.CHM(e),t.oxw().pageSize=o}),t.TgZ(16,"option",14),t._uU(17,"10"),t.qZA(),t.TgZ(18,"option",15),t._uU(19,"25"),t.qZA(),t.TgZ(20,"option",16),t._uU(21,"50"),t.qZA(),t.TgZ(22,"option",17),t._uU(23,"100"),t.qZA()(),t.TgZ(24,"span"),t._uU(25,"entr\xe9es"),t.qZA()(),t.TgZ(26,"div",18)(27,"span"),t._uU(28,"Rechercher"),t.qZA(),t.TgZ(29,"div")(30,"input",19),t.NdJ("ngModelChange",function(o){return t.CHM(e),t.oxw().searchValue=o})("keyup",function(o){return t.CHM(e),t.oxw().handleSearchValue(o)}),t.qZA(),t.YNc(31,C,1,0,"i",20),t.qZA()()(),t.TgZ(32,"div",21),t.YNc(33,J,32,39,"table",22),t.YNc(34,O,33,45,"table",22),t.qZA(),t.TgZ(35,"div",23)(36,"span"),t._uU(37),t.qZA(),t.TgZ(38,"ul",24),t.YNc(39,M,3,0,"li",25),t.TgZ(40,"li",26)(41,"a",27),t._uU(42,"1"),t.qZA()(),t.YNc(43,k,3,0,"li",28),t.qZA()()()()()}if(2&n){const e=t.oxw();t.xp6(15),t.Q6J("ngModel",e.pageSize),t.xp6(15),t.Q6J("ngModel",e.searchValue),t.xp6(1),t.Q6J("ngIf",e.searchValue),t.xp6(2),t.Q6J("ngIf",e.isJury),t.xp6(1),t.Q6J("ngIf",!e.isJury),t.xp6(3),t.lnq("Page ",e.page," sur ",e.nbrOfPage,", avec ",e.notes.length," entr\xe9es affich\xe9es"),t.xp6(2),t.Q6J("ngIf",e.page>1),t.xp6(4),t.Q6J("ngIf",e.page<e.nbrOfPage)}}function F(n,a){if(1&n&&(t.TgZ(0,"option",59),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.Q6J("value",e.id),t.xp6(1),t.Oqu(e.nom)}}function y(n,a){1&n&&(t.TgZ(0,"div"),t._uU(1," Veuillez s'il vous plait entrer une valeur "),t.qZA())}function S(n,a){if(1&n&&(t.TgZ(0,"div",60),t.YNc(1,y,2,0,"div",33),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.formNoteControl.siteid.errors.required)}}function V(n,a){1&n&&(t.TgZ(0,"div"),t._uU(1," Veuillez s'il vous plait entrer une valeur "),t.qZA())}function Y(n,a){1&n&&(t.TgZ(0,"div"),t._uU(1," Nom doit avoir au minimun 4 charact\xe8res "),t.qZA())}function L(n,a){if(1&n&&(t.TgZ(0,"div",60),t.YNc(1,V,2,0,"div",33),t.YNc(2,Y,2,0,"div",33),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.formNoteControl.nom.errors.required),t.xp6(1),t.Q6J("ngIf",e.formNoteControl.nom.errors.minlength)}}function X(n,a){1&n&&(t.TgZ(0,"div"),t._uU(1," Veuillez s'il vous plait entrer une valeur "),t.qZA())}function z(n,a){1&n&&(t.TgZ(0,"div"),t._uU(1," Votre contact doit avoir au minimun 4 charact\xe8res "),t.qZA())}function H(n,a){if(1&n&&(t.TgZ(0,"div",60),t.YNc(1,X,2,0,"div",33),t.YNc(2,z,2,0,"div",33),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.formNoteControl.contacts.errors.required),t.xp6(1),t.Q6J("ngIf",e.formNoteControl.contacts.errors.minlength)}}function D(n,a){1&n&&(t.TgZ(0,"div"),t._uU(1," Veuillez s'il vous plait entrer une valeur "),t.qZA())}function K(n,a){1&n&&(t.TgZ(0,"div"),t._uU(1," Votre Email doit respecter le format des emails "),t.qZA())}function G(n,a){if(1&n&&(t.TgZ(0,"div",60),t.YNc(1,D,2,0,"div",33),t.YNc(2,K,2,0,"div",33),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.formNoteControl.email.errors.required),t.xp6(1),t.Q6J("ngIf",e.formNoteControl.email.errors.email)}}const x=function(n){return{required:n}};function j(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"section",42)(1,"h1",4)(2,"img",43),t.NdJ("click",function(){return t.CHM(e),t.oxw().viewNote()}),t.qZA(),t._uU(3," notes d'examen "),t._UZ(4,"i",5),t._uU(5," Ajouter un note d'examen"),t.qZA(),t.TgZ(6,"div",6)(7,"div",7)(8,"h3",8),t._uU(9,"Ajouter un note d'examen "),t.qZA()(),t._UZ(10,"div",9),t.TgZ(11,"form",44),t.NdJ("ngSubmit",function(){return t.CHM(e),t.oxw().createNote()}),t.TgZ(12,"div",7),t._uU(13," Veullez remplir les champs suivants "),t._UZ(14,"div",9),t.qZA(),t.TgZ(15,"div",45)(16,"div",21)(17,"div",46)(18,"label",47),t._uU(19,"Site d'appartenance *"),t.qZA(),t.TgZ(20,"select",48)(21,"option",49),t._uU(22,"Site d'appartenance"),t.qZA(),t.YNc(23,F,2,2,"option",50),t.qZA()(),t.YNc(24,S,2,1,"div",51),t.qZA(),t.TgZ(25,"div",21)(26,"div",46)(27,"label",47),t._uU(28,"Nom *"),t.qZA(),t._UZ(29,"input",52),t.qZA(),t.YNc(30,L,3,2,"div",51),t.qZA(),t.TgZ(31,"div",21)(32,"div",46)(33,"label",47),t._uU(34,"Contacts *"),t.qZA(),t._UZ(35,"input",53),t.qZA(),t.YNc(36,H,3,2,"div",51),t.qZA(),t.TgZ(37,"div",21)(38,"div",46)(39,"label",47),t._uU(40,"Email *"),t.qZA(),t._UZ(41,"input",54),t.qZA(),t.YNc(42,G,3,2,"div",51),t.qZA()(),t.TgZ(43,"div",55),t._UZ(44,"div",9),t.TgZ(45,"div",56)(46,"button",57),t._uU(47," Soumettre "),t.qZA(),t.TgZ(48,"button",58),t.NdJ("click",function(){return t.CHM(e),t.oxw().formNote.reset()}),t._uU(49," Renitialiser "),t.qZA()()()()()()}if(2&n){const e=t.oxw();t.xp6(11),t.Q6J("formGroup",e.formNote),t.xp6(9),t.Q6J("ngClass",t.VKq(11,x,e.formNote.get("siteid").invalid)),t.xp6(3),t.Q6J("ngForOf",e.sites),t.xp6(1),t.Q6J("ngIf",e.formNoteControl.siteid.errors),t.xp6(5),t.Q6J("ngClass",t.VKq(13,x,e.formNote.get("nom").invalid)),t.xp6(1),t.Q6J("ngIf",e.formNoteControl.nom.errors),t.xp6(5),t.Q6J("ngClass",t.VKq(15,x,e.formNote.get("contacts").invalid)),t.xp6(1),t.Q6J("ngIf",e.formNoteControl.contacts.errors),t.xp6(5),t.Q6J("ngClass",t.VKq(17,x,e.formNote.get("email").invalid)),t.xp6(1),t.Q6J("ngIf",e.formNoteControl.email.errors),t.xp6(4),t.Q6J("disabled",e.formNote.invalid)}}function R(n,a){1&n&&(t.TgZ(0,"div"),t._uU(1," Veuillez s'il vous plait entrer une valeur "),t.qZA())}function B(n,a){1&n&&(t.TgZ(0,"div"),t._uU(1," Nom doit avoir au minimun 4 charact\xe8res "),t.qZA())}function $(n,a){if(1&n&&(t.TgZ(0,"div",60),t.YNc(1,R,2,0,"div",33),t.YNc(2,B,2,0,"div",33),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.updateFormNoteControl.nom.errors.required),t.xp6(1),t.Q6J("ngIf",e.updateFormNoteControl.nom.errors.minlength)}}function W(n,a){1&n&&(t.TgZ(0,"div"),t._uU(1," Veuillez s'il vous plait entrer une valeur "),t.qZA())}function tt(n,a){1&n&&(t.TgZ(0,"div"),t._uU(1," Veuillez s'il vous plait entrer une valeur maximale de 4 "),t.qZA())}function et(n,a){if(1&n&&(t.TgZ(0,"div",60),t.YNc(1,W,2,0,"div",33),t.YNc(2,tt,2,0,"div",33),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.updateFormNoteControl.noteX.errors.required),t.xp6(1),t.Q6J("ngIf",e.updateFormNoteControl.noteX.errors.max)}}function nt(n,a){1&n&&(t.TgZ(0,"div"),t._uU(1," Veuillez s'il vous plait entrer une valeur "),t.qZA())}function ot(n,a){1&n&&(t.TgZ(0,"div"),t._uU(1," Veuillez s'il vous plait entrer une valeur maximale de 4 "),t.qZA())}function rt(n,a){if(1&n&&(t.TgZ(0,"div",60),t.YNc(1,nt,2,0,"div",33),t.YNc(2,ot,2,0,"div",33),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.updateFormNoteControl.noteOP.errors.required),t.xp6(1),t.Q6J("ngIf",e.updateFormNoteControl.noteOP.errors.max)}}function it(n,a){1&n&&(t.TgZ(0,"div"),t._uU(1," Veuillez s'il vous plait entrer une valeur "),t.qZA())}function st(n,a){1&n&&(t.TgZ(0,"div"),t._uU(1," Veuillez s'il vous plait entrer une valeur maximale de 4 "),t.qZA())}function at(n,a){if(1&n&&(t.TgZ(0,"div",60),t.YNc(1,it,2,0,"div",33),t.YNc(2,st,2,0,"div",33),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.updateFormNoteControl.noteL.errors.required),t.xp6(1),t.Q6J("ngIf",e.updateFormNoteControl.noteL.errors.max)}}function ct(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"section",42)(1,"h1",4)(2,"img",43),t.NdJ("click",function(){return t.CHM(e),t.oxw().viewNote()}),t.qZA(),t._uU(3," notes d'entretien "),t._UZ(4,"i",5),t._uU(5," Modification d'une note"),t.qZA(),t.TgZ(6,"div",6)(7,"div",7)(8,"h3",8),t._uU(9,"Modification de la note d'entretien "),t.qZA()(),t._UZ(10,"div",9),t.TgZ(11,"form",44),t.NdJ("ngSubmit",function(){return t.CHM(e),t.oxw().updateNoteObjet()}),t.TgZ(12,"div",7),t._uU(13," Veullez remplir les champs suivants "),t._UZ(14,"div",9),t.qZA(),t.TgZ(15,"div",45)(16,"div",21)(17,"div",46)(18,"label",47),t._uU(19,"Nom *"),t.qZA(),t._UZ(20,"input",52),t.qZA(),t.YNc(21,$,3,2,"div",51),t.qZA(),t.TgZ(22,"div",21)(23,"div",46)(24,"label",47),t._uU(25,"Note X *"),t.qZA(),t._UZ(26,"input",61),t.qZA(),t.YNc(27,et,3,2,"div",51),t.qZA(),t.TgZ(28,"div",21)(29,"div",46)(30,"label",47),t._uU(31,"Note OP *"),t.qZA(),t._UZ(32,"input",62),t.qZA(),t.YNc(33,rt,3,2,"div",51),t.qZA(),t.TgZ(34,"div",21)(35,"div",46)(36,"label",47),t._uU(37,"Note L *"),t.qZA(),t._UZ(38,"input",63),t.qZA(),t.YNc(39,at,3,2,"div",51),t.qZA()(),t.TgZ(40,"div",55),t._UZ(41,"div",9),t.TgZ(42,"div",56)(43,"button",57),t._uU(44," Soumettre "),t.qZA(),t.TgZ(45,"button",58),t.NdJ("click",function(){return t.CHM(e),t.oxw().updateFormNote.reset()}),t._uU(46," Renitialiser "),t.qZA()()()()()()}if(2&n){const e=t.oxw();t.xp6(11),t.Q6J("formGroup",e.updateFormNote),t.xp6(9),t.Q6J("ngClass",t.VKq(10,x,e.updateFormNote.get("nom").invalid)),t.xp6(1),t.Q6J("ngIf",e.updateFormNoteControl.nom.errors),t.xp6(5),t.Q6J("ngClass",t.VKq(12,x,e.updateFormNote.get("noteX").invalid)),t.xp6(1),t.Q6J("ngIf",e.updateFormNoteControl.noteX.errors),t.xp6(5),t.Q6J("ngClass",t.VKq(14,x,e.updateFormNote.get("noteOP").invalid)),t.xp6(1),t.Q6J("ngIf",e.updateFormNoteControl.noteOP.errors),t.xp6(5),t.Q6J("ngClass",t.VKq(16,x,e.updateFormNote.get("noteL").invalid)),t.xp6(1),t.Q6J("ngIf",e.updateFormNoteControl.noteL.errors),t.xp6(4),t.Q6J("disabled",e.updateFormNote.invalid)}}let lt=(()=>{class n{constructor(e,r,o,s,u){this.noteSrv=e,this.storageService=r,this.messageService=o,this.commonService=s,this.siteSrv=u,this.notes=[],this.sites=[],this.searchNotes=[],this.loading=!0,this.isJury=!1,this.isSuperAdmin=!1,this.isAdmin=!1,this.formNote=new i.cw({nom:new i.NI("",[i.kI.required]),prenom:new i.NI("",[i.kI.required]),horaire:new i.NI("",[i.kI.required]),centre:new i.NI("",[i.kI.required]),noteL:new i.NI(0,[i.kI.required,i.kI.min(0),i.kI.max(4)]),noteX:new i.NI(0,[i.kI.required,i.kI.min(0),i.kI.max(4)]),noteOP:new i.NI(0,[i.kI.required,i.kI.min(0),i.kI.max(4)])}),this.updateFormNote=new i.cw({nom:new i.NI("",[i.kI.required]),prenom:new i.NI("",[i.kI.required]),noteOP:new i.NI(0,[i.kI.required,i.kI.min(0),i.kI.max(4)]),noteL:new i.NI(0,[i.kI.required,i.kI.min(0),i.kI.max(4)]),noteX:new i.NI(0,[i.kI.required,i.kI.min(0),i.kI.max(4)])})}ngOnInit(){this.sortProperty="horaire",this.sortIcon="fa-solid fa-arrow-down-short-wide",this.downUpIcon="pi pi-sort-alt",this.pageSize=10,this.page=1,this.compte=this.storageService.getUserConnected(),this.isJury=this.compte.role==d.u.JURY,this.isAdmin=this.compte.role==d.u.ADMIN,this.isSuperAdmin=this.compte.role==d.u.SUPER_ADMIN,this.getSites(),this.getNotes()}sort(e,r=this.notes){return this.sortProperty=e,this.isAsc=!this.isAsc,this.sortIcon=this.isAsc?"fa-solid fa-arrow-down-short-wide":"fa-solid fa-arrow-down-wide-short","nom"===e&&r.sort(this.isAsc?(o,s)=>o.candidature.compte.name>s.candidature.compte.name?1:s.candidature.compte.name>o.candidature.compte.name?-1:0:(o,s)=>o.candidature.compte.name>s.candidature.compte.name?-1:s.candidature.compte.name>o.candidature.compte.name?1:0),"prenom"===e&&r.sort(this.isAsc?(o,s)=>o.candidature.compte.prenom>s.candidature.compte.prenom?1:s.candidature.compte.prenom>o.candidature.compte.prenom?-1:0:(o,s)=>o.candidature.compte.prenom>s.candidature.compte.prenom?-1:s.candidature.compte.prenom>o.candidature.compte.prenom?1:0),"noteL"===e&&r.sort(this.isAsc?(o,s)=>o.noteL>s.noteL?1:s.noteL>o.noteL?-1:0:(o,s)=>o.noteL>s.noteL?-1:s.noteL>o.noteL?1:0),"noteX"===e&&r.sort(this.isAsc?(o,s)=>o.noteX>s.noteX?1:s.noteX>o.noteX?-1:0:(o,s)=>o.noteX>s.noteX?-1:s.noteX>o.noteX?1:0),"noteOP"===e&&r.sort(this.isAsc?(o,s)=>o.noteOP>s.noteOP?1:s.noteOP>o.noteOP?-1:0:(o,s)=>o.noteOP>s.noteOP?-1:s.noteOP>o.noteOP?1:0),r}get formNoteControl(){return this.formNote.controls}get updateFormNoteControl(){return this.updateFormNote.controls}handlePageSize(e){this.page=1,this.getNotes()}handleSearchValue(e){if(this.searchValue=e.target.value,""!==this.searchValue){let o=this.searchNotes.map(s=>{var u,T;return null===(T=null===(u=s.candidature)||void 0===u?void 0:u.compte)||void 0===T?void 0:T.name}).filter(s=>s.toLowerCase().indexOf(this.searchValue.toLowerCase()+"")>-1);if(0===o.length)this.notes=[];else{let s=[];for(let u=0;u<o.length;u++){const T=o[u];let dt=this.searchNotes.filter(mt=>mt.candidature.compte.name.indexOf(""+T)>-1);s.push(...dt)}this.notes=s}}else this.notes=this.searchNotes}next(){this.page++,this.getNotes()}previous(){this.page--,this.getNotes()}getSites(){this.siteSrv.liste().subscribe({next:e=>{this.sites=e},error:e=>{console.log("error: ",e)}})}getNotes(){this.noteSrv.liste().subscribe({next:e=>{let r=this.isJury?e.filter(o=>o.compteid===this.compte.id):e;r=this.sort("nom",r),this.searchNotes=[],this.searchNotes=r,this.notes=r.map((o,s)=>Object.assign({id:s+1},o)).slice((this.page-1)*this.pageSize,(this.page-1)*this.pageSize+this.pageSize),this.collectionSize=r.length,this.nbrOfPage=Math.ceil(r.length/this.pageSize)},error:e=>{console.log("error: ",e)}})}viewNote(e="data"){"data"===e?(this.note=new N.jC,this.isFormNote=!1):this.isFormNote=!0}getHoraire(e){return this.commonService.formatDate(e.debut_entretien)+" - "+this.commonService.formatDate(e.fin_entretien)}updateNote(e){var r,o,s,u;this.isFormNote=!0,this.note=e,this.updateFormNote.patchValue({nom:null===(o=null===(r=e.candidature)||void 0===r?void 0:r.compte)||void 0===o?void 0:o.name,prenom:null===(u=null===(s=e.candidature)||void 0===s?void 0:s.compte)||void 0===u?void 0:u.prenom,noteL:e.noteL,noteOP:e.noteOP,noteX:e.noteX})}createNote(){let e=Object.assign({},this.formNote.value);delete e.note,e=Object.assign(Object.assign({},e),{noteL:parseInt(this.formNote.value.noteL,10),noteOP:parseInt(this.formNote.value.noteOP,10),noteX:parseInt(this.formNote.value.noteX,10)}),this.noteSrv.create(e).subscribe({next:r=>{this.getNotes(),this.note=new N.jC,this.formNote.reset(),this.isFormNote=!1},error:r=>{console.log("Error: ",r)}})}updateNoteObjet(){this.note.noteL=parseInt(this.updateFormNote.value.noteL,10),this.note.noteOP=parseInt(this.updateFormNote.value.noteOP,10),this.note.noteX=parseInt(this.updateFormNote.value.noteX,10),this.noteSrv.update(Object.assign({},this.note)).subscribe({next:e=>{this.getNotes(),this.note=new N.jC,this.updateFormNote.reset(),this.isFormNote=!1,this.messageService.add({severity:"success",summary:"Modification de la note",detail:"Modification de la note des entretiens effectu\xe9e avec success"})},error:e=>{this.messageService.add({severity:"error",summary:"Erreur de modification",detail:e.message}),console.log("Error: ",e)}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(_.Y),t.Y36(c.V),t.Y36(m.ez),t.Y36(f.v),t.Y36(Z.P))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-note-entretien"]],decls:5,vars:2,consts:[["class","note-page page-content",4,"ngIf","ngIfElse"],["addNote",""],["updateNoteForm",""],[1,"note-page","page-content"],[1,"page-title"],[1,"pi","pi-angle-right"],[1,"card"],[1,"header"],[1,"title"],[1,"line"],[1,"table-content"],[1,"search-content"],[1,"select-page-size"],["name","page-size","id","page-size",3,"ngModel","change","ngModelChange"],["value","10"],["value","25"],["value","50"],["value","100"],[1,"search_value"],["type","text","name","value","id","value",3,"ngModel","ngModelChange","keyup"],["class","fa fa-close pull-right",3,"click",4,"ngIf"],[1,"row"],["id","table",4,"ngIf"],[1,"pagination_content"],[1,"pagination"],["class","paginate_button previous disabled","id","datatable-responsive_previous",4,"ngIf"],[1,"paginate_button","active"],["aria-controls","datatable-responsive","data-dt-idx","1","tabindex","0"],["class","paginate_button next disabled","id","datatable-responsive_next",4,"ngIf"],[1,"fa","fa-close","pull-right",3,"click"],["id","table"],[3,"ngClass","click"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"btn",3,"click"],[1,"fa-solid","fa-pencil"],["colspan","7"],[1,"vh-center"],["id","datatable-responsive_previous",1,"paginate_button","previous","disabled"],["aria-controls","datatable-responsive","data-dt-idx","0","tabindex","0",3,"click"],["id","datatable-responsive_next",1,"paginate_button","next","disabled"],["aria-controls","datatable-responsive","data-dt-idx","2","tabindex","0",3,"click"],[1,"Note-page","page-content"],["src","/assets/icons/undo-outline.svg","alt","","srcset","",1,"icon",3,"click"],[1,"form",3,"formGroup","ngSubmit"],[1,"main"],[1,"form-group"],["for",""],["formControlName","siteid",3,"ngClass"],["value",""],[3,"value",4,"ngFor","ngForOf"],["class","alert",4,"ngIf"],["type","text","formControlName","nom",3,"ngClass"],["type","text","formControlName","contacts",3,"ngClass"],["type","text","formControlName","email",3,"ngClass"],[1,"footer"],[1,"btn-group"],["type","submit",1,"btn","btn-info",3,"disabled"],[1,"btn","btn-danger",3,"click"],[3,"value"],[1,"alert"],["type","number","formControlName","noteX","max","4","min","0",3,"ngClass"],["type","number","formControlName","noteOP","max","4","min","0",3,"ngClass"],["type","number","formControlName","noteL","max","4","min","0",3,"ngClass"]],template:function(e,r){if(1&e&&(t.YNc(0,Q,44,10,"section",0),t.YNc(1,j,50,19,"ng-template",null,1,t.W1O),t.YNc(3,ct,47,18,"ng-template",null,2,t.W1O)),2&e){const o=t.MAs(4);t.Q6J("ngIf",!r.isFormNote)("ngIfElse",o)}},directives:[g.O5,i.EJ,i.JJ,i.On,i.YN,i.Kr,i.Fj,g.mk,g.sg,i._Y,i.JL,i.sg,i.u,i.wV,i.Fd,i.qQ],encapsulation:2}),n})();var U=l(7618);const _t=[{path:"",component:lt,canActivate:[U.a]}];let ut=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[U.a],imports:[[v.Bz.forChild(_t)],v.Bz]}),n})(),pt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.ez,ut,i.u5,i.UX]]}),n})()},62:(A,h,l)=>{l.d(h,{v:()=>i});var g=l(9808),v=l(7587);let i=(()=>{class d{constructor(){}calculerJours(t,_){var c=Math.abs(_-t);return Math.floor(c/864e5)}getFormationLabel(t){return"Ing\xe9nieur g\xe9n\xe9raliste parcours international"==t?"OP":"Ing\xe9nieur g\xe9n\xe9raliste par apprentissage ou g\xe9nie des proc\xe9d\xe9s"==t?"L":"Ing\xe9nieur genie des proc\xe9d\xe9s"==t?"IP":"Ing\xe9nieur g\xe9neraliste parcours international et innovation"==t?"I":"Ing\xe9nieur g\xe9nie Informtique"==t?"X":""}genererDates(t,_){let c=this.calculerJours(t,_);console.log("nombre jour:",c);let m=[],f=new Date(t);m.push(new Date(t));for(let Z=0;Z<c;Z++)f.setDate(f.getDate()+1),m.push(new Date(f));return m}formatDate(t){let c=(0,g.p6)(t,"shortTime","fr-FR").split(":");return c[0]+"h"+c[1]}buildDateWithTime(t){const _=new Date;return new Date(`${_.getFullYear()}-${_.getMonth()+1}-${_.getDate()} ${t}`)}buildDate(t,_){let m,f,c=_.split("-"),C=c[0].split("h");t.setHours(parseInt(C[0],10)),t.setMinutes(parseInt(C[1],10)),m=t.getTime();let q=c[1].split("h");return t.setHours(parseInt(q[0],10)),t.setMinutes(parseInt(q[1],10)),f=t.getTime(),{startDate:m,endDate:f}}}return d.\u0275fac=function(t){return new(t||d)},d.\u0275prov=v.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},2042:(A,h,l)=>{l.d(h,{P:()=>N});var g=l(2340),v=l(7587),i=l(520),d=l(4920);let N=(()=>{class t{constructor(c,m){this.http=c,this.baseUrlSvr=m,this.url="",this.url=`${this.baseUrlSvr.getOrigin()}${g.N.administrationPath}`,this.url+="site/"}liste(){return this.http.get(this.url+"all")}allByZone(c){return this.http.get(this.url+"allbyzone/"+c)}getOne(c){return this.http.get(this.url+c)}create(c){return this.http.post(this.url+"create",c)}update(c){return this.http.patch(this.url+(null==c?void 0:c.id),c)}delete(c){return this.http.delete(this.url+c)}}return t.\u0275fac=function(c){return new(c||t)(v.LFG(i.eN),v.LFG(d.x))},t.\u0275prov=v.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);