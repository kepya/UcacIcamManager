"use strict";(self.webpackChunkadmin_ucac_dashboard=self.webpackChunkadmin_ucac_dashboard||[]).push([[603],{9603:(N,T,p)=>{p.r(T),p.d(T,{AdministrateurModule:()=>et});var n=p(2382),_=p(9808),h=p(7671),x=p(5193),Z=p(4109),t=p(7587),f=p(9783),d=p(7755),b=p(9099),I=p(7773),U=p(7307);function w(i,c){if(1&i){const e=t.EpF();t.TgZ(0,"i",32),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).searchValue=""}),t.qZA()}}function E(i,c){if(1&i){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td")(10,"button",33),t.NdJ("click",function(){const a=t.CHM(e).$implicit;return t.oxw(2).updateCompte(a)}),t.TgZ(11,"div"),t._UZ(12,"i",34),t.qZA(),t.TgZ(13,"span"),t._uU(14," Modifier "),t.qZA()(),t.TgZ(15,"button",35),t.NdJ("click",function(){const a=t.CHM(e).$implicit;return t.oxw(2).deleteCompte(a.id||0)}),t.TgZ(16,"div"),t._UZ(17,"i",36),t.qZA(),t.TgZ(18,"span"),t._uU(19," Supprimer "),t.qZA()()()()}if(2&i){const e=c.$implicit;t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(e.prenom),t.xp6(2),t.Oqu(e.email),t.xp6(2),t.Oqu(e.telephone)}}function y(i,c){1&i&&(t.TgZ(0,"tr")(1,"td",37)(2,"span",38),t._uU(3," Aucun comptes trouv\xe9es avec ces lettres dans son nom "),t.qZA()()())}function J(i,c){1&i&&(t.TgZ(0,"tr")(1,"td",37)(2,"span",38),t._uU(3," Aucun comptes presentent dans la base "),t.qZA()()())}function l(i,c){if(1&i){const e=t.EpF();t.TgZ(0,"li",39)(1,"a",40),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).previous()}),t._uU(2,"Pr\xe9cedent"),t.qZA()()}}function g(i,c){if(1&i){const e=t.EpF();t.TgZ(0,"li",41)(1,"a",42),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).next()}),t._uU(2,"Suivant"),t.qZA()()}}const r=function(i){return{bold:i}};function m(i,c){if(1&i){const e=t.EpF();t.TgZ(0,"section",2)(1,"h1",3),t._uU(2," R\xf4les utilisateur "),t._UZ(3,"i",4),t._uU(4," Administrateur"),t.qZA(),t.TgZ(5,"div",5)(6,"div",6)(7,"h3",7),t._uU(8,"Liste des administrateurs Ucac-Icam "),t.qZA(),t.TgZ(9,"button",8),t.NdJ("click",function(){return t.CHM(e),t.oxw().viewCompte("form")}),t._uU(10," Ajouter un administrateur "),t.qZA()(),t._UZ(11,"div",9),t.TgZ(12,"div",10)(13,"div",11)(14,"div",12)(15,"span"),t._uU(16,"Voir"),t.qZA(),t.TgZ(17,"select",13),t.NdJ("change",function(o){return t.CHM(e),t.oxw().handlePageSize(o)})("ngModelChange",function(o){return t.CHM(e),t.oxw().pageSize=o}),t.TgZ(18,"option",14),t._uU(19,"10"),t.qZA(),t.TgZ(20,"option",15),t._uU(21,"25"),t.qZA(),t.TgZ(22,"option",16),t._uU(23,"50"),t.qZA(),t.TgZ(24,"option",17),t._uU(25,"100"),t.qZA()(),t.TgZ(26,"span"),t._uU(27,"entr\xe9es"),t.qZA()(),t.TgZ(28,"div",18)(29,"span"),t._uU(30,"Rechercher"),t.qZA(),t.TgZ(31,"div")(32,"input",19),t.NdJ("ngModelChange",function(o){return t.CHM(e),t.oxw().searchValue=o})("keyup",function(o){return t.CHM(e),t.oxw().handleSearchValue(o)}),t.qZA(),t.YNc(33,w,1,0,"i",20),t.qZA()()(),t.TgZ(34,"div",21)(35,"table",22)(36,"tr")(37,"th")(38,"div"),t._uU(39," Nom "),t.TgZ(40,"i",23),t.NdJ("click",function(){return t.CHM(e),t.oxw().sort("nom")}),t.qZA()()(),t.TgZ(41,"th")(42,"div"),t._uU(43," Prenom "),t.TgZ(44,"i",23),t.NdJ("click",function(){return t.CHM(e),t.oxw().sort("prenom")}),t.qZA()()(),t.TgZ(45,"th")(46,"div"),t._uU(47," Email "),t.TgZ(48,"i",23),t.NdJ("click",function(){return t.CHM(e),t.oxw().sort("email")}),t.qZA()()(),t.TgZ(49,"th")(50,"div"),t._uU(51," Telephone "),t.TgZ(52,"i",23),t.NdJ("click",function(){return t.CHM(e),t.oxw().sort("telephone")}),t.qZA()()(),t.TgZ(53,"th")(54,"div"),t._uU(55," # "),t.qZA()()(),t.YNc(56,E,20,4,"tr",24),t.YNc(57,y,4,0,"tr",25),t.YNc(58,J,4,0,"tr",25),t.qZA()(),t.TgZ(59,"div",26)(60,"span"),t._uU(61),t.qZA(),t.TgZ(62,"ul",27),t.YNc(63,l,3,0,"li",28),t.TgZ(64,"li",29)(65,"a",30),t._uU(66,"1"),t.qZA()(),t.YNc(67,g,3,0,"li",31),t.qZA()()()()()}if(2&i){const e=t.oxw();t.xp6(17),t.Q6J("ngModel",e.pageSize),t.xp6(15),t.Q6J("ngModel",e.searchValue),t.xp6(1),t.Q6J("ngIf",e.searchValue),t.xp6(7),t.Gre("icon-sort ","nom"==e.sortProperty?e.sortIcon:e.downUpIcon,""),t.Q6J("ngClass",t.VKq(27,r,"nom"==e.sortProperty)),t.xp6(4),t.Gre("icon-sort ","prenom"==e.sortProperty?e.sortIcon:e.downUpIcon,""),t.Q6J("ngClass",t.VKq(29,r,"prenom"==e.sortProperty)),t.xp6(4),t.Gre("icon-sort ","email"==e.sortProperty?e.sortIcon:e.downUpIcon,""),t.Q6J("ngClass",t.VKq(31,r,"email"==e.sortProperty)),t.xp6(4),t.Gre("icon-sort ","telephone"==e.sortProperty?e.sortIcon:e.downUpIcon,""),t.Q6J("ngClass",t.VKq(33,r,"telephone"==e.sortProperty)),t.xp6(4),t.Q6J("ngForOf",e.comptes),t.xp6(1),t.Q6J("ngIf",e.searchValue&&0===e.comptes.length),t.xp6(1),t.Q6J("ngIf",!e.searchValue&&0===e.comptes.length),t.xp6(3),t.lnq("Page ",e.page," sur ",e.nbrOfPage,", avec ",e.comptes.length," entr\xe9es affich\xe9es"),t.xp6(2),t.Q6J("ngIf",e.page>1),t.xp6(4),t.Q6J("ngIf",e.page<e.nbrOfPage)}}function u(i,c){1&i&&(t.TgZ(0,"div"),t._uU(1," Veuillez s'il vous plait entrer une valeur "),t.qZA())}function v(i,c){1&i&&(t.TgZ(0,"div"),t._uU(1," Nom doit avoir au minimun 4 charact\xe8res "),t.qZA())}function M(i,c){if(1&i&&(t.TgZ(0,"div",62),t.YNc(1,u,2,0,"div",25),t.YNc(2,v,2,0,"div",25),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.formCompteControl.name.errors.required),t.xp6(1),t.Q6J("ngIf",e.formCompteControl.name.errors.minlength)}}function P(i,c){1&i&&(t.TgZ(0,"div"),t._uU(1," Veuillez s'il vous plait entrer une valeur "),t.qZA())}function q(i,c){1&i&&(t.TgZ(0,"div"),t._uU(1," Prenom doit avoir au minimun 4 charact\xe8res "),t.qZA())}function O(i,c){if(1&i&&(t.TgZ(0,"div",62),t.YNc(1,P,2,0,"div",25),t.YNc(2,q,2,0,"div",25),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.formCompteControl.prenom.errors.required),t.xp6(1),t.Q6J("ngIf",e.formCompteControl.prenom.errors.minlength)}}function k(i,c){1&i&&(t.TgZ(0,"div"),t._uU(1," Veuillez s'il vous plait entrer une valeur "),t.qZA())}function L(i,c){1&i&&(t.TgZ(0,"div"),t._uU(1," Votre Email doit respecter le format des emails "),t.qZA())}function Q(i,c){if(1&i&&(t.TgZ(0,"div",62),t.YNc(1,k,2,0,"div",25),t.YNc(2,L,2,0,"div",25),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.formCompteControl.email.errors.required),t.xp6(1),t.Q6J("ngIf",e.formCompteControl.email.errors.email)}}function Y(i,c){1&i&&(t.TgZ(0,"div"),t._uU(1," Veuillez s'il vous plait entrer une valeur "),t.qZA())}function z(i,c){1&i&&(t.TgZ(0,"div"),t._uU(1," Prenom doit avoir au minimun 4 charact\xe8res "),t.qZA())}function V(i,c){if(1&i&&(t.TgZ(0,"div",62),t.YNc(1,Y,2,0,"div",25),t.YNc(2,z,2,0,"div",25),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.formCompteControl.telephone.errors.required),t.xp6(1),t.Q6J("ngIf",e.formCompteControl.telephone.errors.minlength)}}function D(i,c){1&i&&(t.TgZ(0,"div"),t._uU(1," Veuillez s'il vous plait entrer une valeur "),t.qZA())}function F(i,c){1&i&&(t.TgZ(0,"div"),t._uU(1," Prenom doit avoir au minimun 4 charact\xe8res "),t.qZA())}function j(i,c){if(1&i&&(t.TgZ(0,"div",62),t.YNc(1,D,2,0,"div",25),t.YNc(2,F,2,0,"div",25),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.formCompteControl.password.errors.required),t.xp6(1),t.Q6J("ngIf",e.formCompteControl.password.errors.minlength)}}function B(i,c){1&i&&(t.TgZ(0,"div"),t._uU(1," Veuillez s'il vous plait entrer une valeur "),t.qZA())}function R(i,c){if(1&i&&(t.TgZ(0,"div",62),t.YNc(1,B,2,0,"div",25),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.formCompteControl.confirm_password.errors.required)}}function H(i,c){if(1&i&&(t.TgZ(0,"option",63),t._uU(1),t.qZA()),2&i){const e=c.$implicit;t.Q6J("value",e.id),t.xp6(1),t.Oqu(e.nom)}}function K(i,c){1&i&&(t.TgZ(0,"div"),t._uU(1," Veuillez s'il vous plait entrer une valeur "),t.qZA())}function W(i,c){if(1&i&&(t.TgZ(0,"div",62),t.YNc(1,K,2,0,"div",25),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.formCompteControl.idZone.errors.required)}}const A=function(i){return{required:i}};function $(i,c){if(1&i){const e=t.EpF();t.TgZ(0,"section",2)(1,"h1",3)(2,"img",43),t.NdJ("click",function(){return t.CHM(e),t.oxw().viewCompte()}),t.qZA(),t._uU(3," R\xf4les utilisateur "),t._UZ(4,"i",4),t._uU(5," Administrateur "),t._UZ(6,"i",4),t._uU(7," Ajouter un administrateur"),t.qZA(),t.TgZ(8,"div",5)(9,"div",6)(10,"h3",7),t._uU(11,"Ajouter un administrateur "),t.qZA()(),t._UZ(12,"div",9),t.TgZ(13,"form",44),t.NdJ("ngSubmit",function(){return t.CHM(e),t.oxw().createOrUpdateCompte()}),t.TgZ(14,"div",6),t._uU(15," Veullez remplir les champs suivants "),t._UZ(16,"div",9),t.qZA(),t.TgZ(17,"div",45)(18,"div",21)(19,"div",46)(20,"label",47),t._uU(21,"Nom *"),t.qZA(),t._UZ(22,"input",48),t.qZA(),t.YNc(23,M,3,2,"div",49),t.qZA(),t.TgZ(24,"div",21)(25,"div",46)(26,"label",47),t._uU(27,"Prenom *"),t.qZA(),t._UZ(28,"input",50),t.qZA(),t.YNc(29,O,3,2,"div",49),t.qZA(),t.TgZ(30,"div",21)(31,"div",46)(32,"label",47),t._uU(33,"Email *"),t.qZA(),t._UZ(34,"input",51),t.qZA(),t.YNc(35,Q,3,2,"div",49),t.qZA(),t.TgZ(36,"div",21)(37,"div",46)(38,"label",47),t._uU(39,"Telephone *"),t.qZA(),t._UZ(40,"input",52),t.qZA(),t.YNc(41,V,3,2,"div",49),t.qZA(),t.TgZ(42,"div",21)(43,"div",46)(44,"label",47),t._uU(45,"Mot de passe *"),t.qZA(),t._UZ(46,"input",53),t.qZA(),t.YNc(47,j,3,2,"div",49),t.qZA(),t.TgZ(48,"div",21)(49,"div",46)(50,"label",47),t._uU(51,"Confirmer le mot de passe *"),t.qZA(),t._UZ(52,"input",54),t.qZA(),t.YNc(53,R,2,1,"div",49),t.qZA(),t.TgZ(54,"div",21)(55,"div",46)(56,"label",47),t._uU(57,"Zone d'appartenance *"),t.qZA(),t.TgZ(58,"select",55)(59,"option",56),t._uU(60,"Zone d'appartenance"),t.qZA(),t.YNc(61,H,2,2,"option",57),t.qZA()(),t.YNc(62,W,2,1,"div",49),t.qZA()(),t.TgZ(63,"div",58),t._UZ(64,"div",9),t.TgZ(65,"div",59)(66,"button",60),t._uU(67," Soumettre "),t.qZA(),t.TgZ(68,"button",61),t.NdJ("click",function(){return t.CHM(e),t.oxw().formCompte.reset()}),t._uU(69," Renitialiser "),t.qZA()()()()()()}if(2&i){const e=t.oxw();t.xp6(13),t.Q6J("formGroup",e.formCompte),t.xp6(9),t.Q6J("ngClass",t.VKq(17,A,e.formCompte.get("name").invalid)),t.xp6(1),t.Q6J("ngIf",e.formCompteControl.name.errors),t.xp6(5),t.Q6J("ngClass",t.VKq(19,A,e.formCompte.get("prenom").invalid)),t.xp6(1),t.Q6J("ngIf",e.formCompteControl.prenom.errors),t.xp6(5),t.Q6J("ngClass",t.VKq(21,A,e.formCompte.get("email").invalid)),t.xp6(1),t.Q6J("ngIf",e.formCompteControl.email.errors),t.xp6(5),t.Q6J("ngClass",t.VKq(23,A,e.formCompte.get("telephone").invalid)),t.xp6(1),t.Q6J("ngIf",e.formCompteControl.telephone.errors),t.xp6(5),t.Q6J("ngClass",t.VKq(25,A,e.formCompte.get("password").invalid)),t.xp6(1),t.Q6J("ngIf",e.formCompteControl.password.errors),t.xp6(5),t.Q6J("ngClass",t.VKq(27,A,e.formCompte.get("confirm_password").invalid)),t.xp6(1),t.Q6J("ngIf",e.formCompteControl.confirm_password.errors),t.xp6(5),t.Q6J("ngClass",t.VKq(29,A,e.formCompte.get("idZone").invalid)),t.xp6(3),t.Q6J("ngForOf",e.zones),t.xp6(1),t.Q6J("ngIf",e.formCompteControl.idZone.errors),t.xp6(4),t.Q6J("disabled",e.formCompte.invalid)}}let G=(()=>{class i{constructor(e,s,o,a){this.confirmationService=e,this.zoneSrv=s,this.compteSrv=o,this.messageService=a,this.zones=[],this.comptes=[],this.searchComptes=[],this.loading=!0,this.formCompte=new n.cw({name:new n.NI("",[n.kI.required]),idZone:new n.NI("",[n.kI.required]),prenom:new n.NI("",[n.kI.required]),telephone:new n.NI("",[n.kI.required]),password:new n.NI("",[n.kI.required]),confirm_password:new n.NI("",[n.kI.required]),email:new n.NI("",[n.kI.required,n.kI.email])})}ngOnInit(){this.sortProperty="nom",this.sortIcon="fa-solid fa-arrow-down-short-wide",this.downUpIcon="pi pi-sort-alt",this.pageSize=10,this.page=1,this.getComptes(),this.getZones()}confirm(e,s){this.confirmationService.confirm({target:e.target,message:"\xcates vous sures de vouloir continuer ?",icon:"pi pi-question",acceptLabel:"Oui",rejectLabel:"Non",accept:()=>{this.deleteCompte(s)},reject:()=>{this.messageService.add({severity:"error",summary:"Non",detail:"vous avez annul\xe9 la suppresion"})}})}sort(e,s=this.comptes){return this.sortProperty=e,this.isAsc=!this.isAsc,this.sortIcon=this.isAsc?"fa-solid fa-arrow-down-short-wide":"fa-solid fa-arrow-down-wide-short","nom"===e&&s.sort(this.isAsc?(o,a)=>o.name>a.name?1:a.name>o.name?-1:0:(o,a)=>o.name>a.name?-1:a.name>o.name?1:0),"prenom"===e&&s.sort(this.isAsc?(o,a)=>o.prenom>a.prenom?1:a.prenom>o.prenom?-1:0:(o,a)=>o.prenom>a.prenom?-1:a.prenom>o.prenom?1:0),"email"===e&&s.sort(this.isAsc?(o,a)=>o.email>a.email?1:a.email>o.email?-1:0:(o,a)=>o.email>a.email?-1:a.email>o.email?1:0),"telephone"===e&&s.sort(this.isAsc?(o,a)=>o.telephone>a.telephone?1:a.telephone>o.telephone?-1:0:(o,a)=>o.telephone>a.telephone?-1:a.telephone>o.telephone?1:0),s}get formCompteControl(){return this.formCompte.controls}handlePageSize(e){this.page=1,this.getComptes()}handleSearchValue(e){if(this.searchValue=e.target.value,""!==this.searchValue){let o=this.searchComptes.map(a=>a.name).filter(a=>a.toLowerCase().indexOf(this.searchValue.toLowerCase()+"")>-1);if(0===o.length)this.comptes=[];else{let a=[];for(let C=0;C<o.length;C++){const nt=o[C];let it=this.searchComptes.filter(ot=>ot.name.indexOf(""+nt)>-1);a.push(...it)}this.comptes=a}}else this.comptes=this.searchComptes}next(){this.page++,this.getComptes()}previous(){this.page--,this.getComptes()}getZones(){this.zoneSrv.liste().subscribe({next:e=>{this.zones=e},error:e=>{console.log("error: ",e)}})}getComptes(){this.compteSrv.findByRole(x.u.ADMIN).subscribe({next:e=>{let s=this.sort("nom",e);this.searchComptes=[],this.searchComptes=s,this.comptes=s,this.collectionSize=s.length,this.nbrOfPage=Math.ceil(s.length/this.pageSize)},error:e=>{console.log("error: ",e)}})}viewCompte(e="data"){"data"===e?(this.compte=new Z.h,this.isFormCompte=!1):this.isFormCompte=!0}updateCompte(e){var s,o,a,C;this.isFormCompte=!0,this.compte=e,null===(s=this.formCompte.get("password"))||void 0===s||s.removeValidators([n.kI.required]),null===(o=this.formCompte.get("password"))||void 0===o||o.updateValueAndValidity(),null===(a=this.formCompte.get("confirm_password"))||void 0===a||a.removeValidators([n.kI.required]),null===(C=this.formCompte.get("confirm_password"))||void 0===C||C.updateValueAndValidity(),this.formCompte.updateValueAndValidity(),console.log("compte: ",e),this.formCompte.patchValue({nom:e.name,name:e.name,idZone:e.idZone,prenom:e.prenom,telephone:e.telephone,email:e.email})}createOrUpdateCompte(){var e,s;(null===(e=this.compte)||void 0===e?void 0:e.id)?this.compteSrv.update(Object.assign(Object.assign({},this.formCompte.value),{id:null===(s=this.compte)||void 0===s?void 0:s.id,role:x.u.ADMIN})).subscribe({next:o=>{this.getComptes(),this.compte=new Z.h,this.formCompte.reset(),this.messageService.add({severity:"success",summary:"Modification de compte administrateur",detail:"Modification effectu\xe9e avec success"}),this.isFormCompte=!1},error:o=>{console.log("Error: ",o),this.messageService.add({severity:"error",summary:"Erreur de creation",detail:o.error})}}):this.compteSrv.create(Object.assign(Object.assign({},this.formCompte.value),{role:x.u.ADMIN})).subscribe({next:o=>{this.getComptes(),this.compte=new Z.h,this.formCompte.reset(),this.messageService.add({severity:"success",summary:"Cr\xe9ation de compte administrateur",detail:"Cr\xe9ation effectu\xe9e avec success"}),this.isFormCompte=!1},error:o=>{console.log("Error: ",o),this.messageService.add({severity:"error",summary:"Erreur de creation",detail:o.error})}})}deleteCompte(e){this.compteSrv.delete(e||0).subscribe({next:s=>{this.getComptes(),this.messageService.add({severity:"success",summary:"Suppression de compte administrateur",detail:"Suppression effectu\xe9e avec success"})},error:s=>{console.log("Error: ",s),this.messageService.add({severity:"error",summary:"Erreur de suppression",detail:s.message})}})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(f.YP),t.Y36(d.b),t.Y36(b.D),t.Y36(f.ez))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-administrateur"]],decls:5,vars:2,consts:[["class","compte-page page-content",4,"ngIf","ngIfElse"],["addCompte",""],[1,"compte-page","page-content"],[1,"page-title"],[1,"pi","pi-angle-right"],[1,"card"],[1,"header"],[1,"title"],[1,"btn","btn-danger",3,"click"],[1,"line"],[1,"table-content"],[1,"search-content"],[1,"select-page-size"],["name","page-size","id","page-size",3,"ngModel","change","ngModelChange"],["value","10"],["value","25"],["value","50"],["value","100"],[1,"search_value"],["type","text","name","value","id","value",3,"ngModel","ngModelChange","keyup"],["class","fa fa-close pull-right",3,"click",4,"ngIf"],[1,"row"],["id","table"],[3,"ngClass","click"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"pagination_content"],[1,"pagination"],["class","paginate_button previous disabled","id","datatable-responsive_previous",4,"ngIf"],[1,"paginate_button","active"],["aria-controls","datatable-responsive","data-dt-idx","1","tabindex","0"],["class","paginate_button next disabled","id","datatable-responsive_next",4,"ngIf"],[1,"fa","fa-close","pull-right",3,"click"],[1,"btn",3,"click"],[1,"fa-solid","fa-pencil"],[1,"btn","mt-2",3,"click"],[1,"fa-solid","fa-trash"],["colspan","5"],[1,"vh-center"],["id","datatable-responsive_previous",1,"paginate_button","previous","disabled"],["aria-controls","datatable-responsive","data-dt-idx","0","tabindex","0",3,"click"],["id","datatable-responsive_next",1,"paginate_button","next","disabled"],["aria-controls","datatable-responsive","data-dt-idx","2","tabindex","0",3,"click"],["src","/assets/icons/undo-outline.svg","alt","","srcset","",1,"icon",3,"click"],[1,"form",3,"formGroup","ngSubmit"],[1,"main"],[1,"form-group"],["for",""],["type","text","formControlName","name",3,"ngClass"],["class","alert",4,"ngIf"],["type","text","formControlName","prenom",3,"ngClass"],["type","text","formControlName","email",3,"ngClass"],["type","text","formControlName","telephone",3,"ngClass"],["type","text","formControlName","password",3,"ngClass"],["type","text","formControlName","confirm_password",3,"ngClass"],["formControlName","idZone",3,"ngClass"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"footer"],[1,"btn-group"],["type","submit",1,"btn","btn-info",3,"disabled"],["type","reset",1,"btn","btn-danger",3,"click"],[1,"alert"],[3,"value"]],template:function(e,s){if(1&e&&(t.YNc(0,m,68,35,"section",0),t.YNc(1,$,70,31,"ng-template",null,1,t.W1O),t._UZ(3,"p-toast")(4,"p-confirmPopup")),2&e){const o=t.MAs(2);t.Q6J("ngIf",!s.isFormCompte)("ngIfElse",o)}},directives:[_.O5,n.EJ,n.JJ,n.On,n.YN,n.Kr,n.Fj,_.mk,_.sg,n._Y,n.JL,n.sg,n.u,I.FN,U.P],encapsulation:2}),i})();var S=p(437);const X=[{path:"",component:G,canActivate:[S.u]}];let tt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[S.u],imports:[[h.Bz.forChild(X)],h.Bz]}),i})(),et=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[_.ez,tt,n.u5,U.n,I.EV,n.UX]]}),i})()},7755:(N,T,p)=>{p.d(T,{b:()=>Z});var n=p(2340),_=p(7587),h=p(520),x=p(4920);let Z=(()=>{class t{constructor(d,b){this.http=d,this.baseUrlSvr=b,this.url="",this.url=`${this.baseUrlSvr.getOrigin()}${n.N.administrationPath}`,this.url+="zone/"}liste(){return this.http.get(this.url+"all")}getOne(d){return this.http.get(this.url+d)}create(d){return this.http.post(this.url+"create",d)}update(d){return this.http.patch(this.url+(null==d?void 0:d.id),d)}delete(d){return this.http.delete(this.url+d)}}return t.\u0275fac=function(d){return new(d||t)(_.LFG(h.eN),_.LFG(x.x))},t.\u0275prov=_.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},7307:(N,T,p)=>{p.d(T,{P:()=>y,n:()=>J});var n=p(7587),_=p(9808),h=p(9783),x=p(845),Z=p(5921),t=p(1777),f=p(5730);function d(l,g){if(1&l&&n._UZ(0,"i",8),2&l){const r=n.oxw(2);n.Tol(r.confirmation.icon),n.Q6J("ngClass","p-confirm-popup-icon")}}function b(l,g){if(1&l){const r=n.EpF();n.TgZ(0,"button",9),n.NdJ("click",function(){return n.CHM(r),n.oxw(2).reject()}),n.qZA()}if(2&l){const r=n.oxw(2);n.Tol(r.confirmation.rejectButtonStyleClass||"p-button-text"),n.Q6J("icon",r.confirmation.rejectIcon)("label",r.rejectButtonLabel)("ngClass","p-confirm-popup-reject p-button-sm"),n.uIk("aria-label",r.rejectButtonLabel)}}function I(l,g){if(1&l){const r=n.EpF();n.TgZ(0,"button",9),n.NdJ("click",function(){return n.CHM(r),n.oxw(2).accept()}),n.qZA()}if(2&l){const r=n.oxw(2);n.Tol(r.confirmation.acceptButtonStyleClass),n.Q6J("icon",r.confirmation.acceptIcon)("label",r.acceptButtonLabel)("ngClass","p-confirm-popup-accept p-button-sm"),n.uIk("aria-label",r.acceptButtonLabel)}}const U=function(l,g){return{showTransitionParams:l,hideTransitionParams:g}},w=function(l){return{value:"open",params:l}};function E(l,g){if(1&l){const r=n.EpF();n.TgZ(0,"div",1),n.NdJ("click",function(u){return n.CHM(r),n.oxw().onOverlayClick(u)})("@animation.start",function(u){return n.CHM(r),n.oxw().onAnimationStart(u)})("@animation.done",function(u){return n.CHM(r),n.oxw().onAnimationEnd(u)}),n.TgZ(1,"div",2,3),n.YNc(3,d,1,3,"i",4),n.TgZ(4,"span",5),n._uU(5),n.qZA()(),n.TgZ(6,"div",6),n.YNc(7,b,1,6,"button",7),n.YNc(8,I,1,6,"button",7),n.qZA()()}if(2&l){const r=n.oxw();n.Tol(r.styleClass),n.Q6J("ngClass","p-confirm-popup p-component")("ngStyle",r.style)("@animation",n.VKq(12,w,n.WLB(9,U,r.showTransitionOptions,r.hideTransitionOptions))),n.xp6(3),n.Q6J("ngIf",r.confirmation.icon),n.xp6(2),n.Oqu(r.confirmation.message),n.xp6(2),n.Q6J("ngIf",!1!==r.confirmation.rejectVisible),n.xp6(1),n.Q6J("ngIf",!1!==r.confirmation.acceptVisible)}}let y=(()=>{class l{constructor(r,m,u,v,M,P){this.el=r,this.confirmationService=m,this.renderer=u,this.cd=v,this.config=M,this.overlayService=P,this.defaultFocus="accept",this.showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)",this.hideTransitionOptions=".1s linear",this.autoZIndex=!0,this.baseZIndex=0,this.subscription=this.confirmationService.requireConfirmation$.subscribe(q=>{q?q.key===this.key&&(this.confirmation=q,this.confirmation.accept&&(this.confirmation.acceptEvent=new n.vpe,this.confirmation.acceptEvent.subscribe(this.confirmation.accept)),this.confirmation.reject&&(this.confirmation.rejectEvent=new n.vpe,this.confirmation.rejectEvent.subscribe(this.confirmation.reject)),this.visible=!0):this.hide()})}get visible(){return this._visible}set visible(r){this._visible=r,this.cd.markForCheck()}onAnimationStart(r){if("open"===r.toState){this.container=r.element,document.body.appendChild(this.container),this.align(),this.bindListeners();const m=this.getElementToFocus();m&&m.focus()}}onAnimationEnd(r){"void"===r.toState&&this.onContainerDestroy()}getElementToFocus(){switch(this.defaultFocus){case"accept":return f.p.findSingle(this.container,".p-confirm-popup-accept");case"reject":return f.p.findSingle(this.container,".p-confirm-popup-reject");case"none":return null}}align(){this.autoZIndex&&Z.P9.set("overlay",this.container,this.config.zIndex.overlay),f.p.absolutePosition(this.container,this.confirmation.target);const r=f.p.getOffset(this.container),m=f.p.getOffset(this.confirmation.target);let u=0;r.left<m.left&&(u=m.left-r.left),this.container.style.setProperty("--overlayArrowLeft",`${u}px`),r.top<m.top&&f.p.addClass(this.container,"p-confirm-popup-flipped")}hide(){this.visible=!1}accept(){this.confirmation.acceptEvent&&this.confirmation.acceptEvent.emit(),this.hide()}reject(){this.confirmation.rejectEvent&&this.confirmation.rejectEvent.emit(),this.hide()}onOverlayClick(r){this.overlayService.add({originalEvent:r,target:this.el.nativeElement})}bindListeners(){this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener()}unbindListeners(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}bindDocumentClickListener(){if(!this.documentClickListener){let r=f.p.isIOS()?"touchstart":"click";const m=this.el?this.el.nativeElement.ownerDocument:document;this.documentClickListener=this.renderer.listen(m,r,u=>{let v=this.confirmation.target;this.container!==u.target&&!this.container.contains(u.target)&&v!==u.target&&!v.contains(u.target)&&this.hide()})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}onWindowResize(){this.hide()}bindDocumentResizeListener(){this.documentResizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.documentResizeListener)}unbindDocumentResizeListener(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new f.V(this.confirmation.target,()=>{this.visible&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unsubscribeConfirmationSubscriptions(){this.confirmation&&(this.confirmation.acceptEvent&&this.confirmation.acceptEvent.unsubscribe(),this.confirmation.rejectEvent&&this.confirmation.rejectEvent.unsubscribe())}onContainerDestroy(){this.unbindListeners(),this.unsubscribeConfirmationSubscriptions(),this.autoZIndex&&Z.P9.clear(this.container),this.confirmation=null,this.container=null}restoreAppend(){this.container&&document.body.removeChild(this.container),this.onContainerDestroy()}get acceptButtonLabel(){return this.confirmation.acceptLabel||this.config.getTranslation(h.ws.ACCEPT)}get rejectButtonLabel(){return this.confirmation.rejectLabel||this.config.getTranslation(h.ws.REJECT)}ngOnDestroy(){this.restoreAppend(),this.subscription&&this.subscription.unsubscribe()}}return l.\u0275fac=function(r){return new(r||l)(n.Y36(n.SBq),n.Y36(h.YP),n.Y36(n.Qsj),n.Y36(n.sBO),n.Y36(h.b4),n.Y36(h.F0))},l.\u0275cmp=n.Xpm({type:l,selectors:[["p-confirmPopup"]],hostAttrs:[1,"p-element"],inputs:{key:"key",defaultFocus:"defaultFocus",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",style:"style",styleClass:"styleClass",visible:"visible"},decls:1,vars:1,consts:[[3,"ngClass","ngStyle","class","click",4,"ngIf"],[3,"ngClass","ngStyle","click"],[1,"p-confirm-popup-content"],["content",""],[3,"ngClass","class",4,"ngIf"],[1,"p-confirm-popup-message"],[1,"p-confirm-popup-footer"],["type","button","pButton","",3,"icon","label","ngClass","class","click",4,"ngIf"],[3,"ngClass"],["type","button","pButton","",3,"icon","label","ngClass","click"]],template:function(r,m){1&r&&n.YNc(0,E,9,14,"div",0),2&r&&n.Q6J("ngIf",m.visible)},directives:[_.O5,_.mk,_.PC,x.Hq],styles:['.p-confirm-popup{position:absolute;margin-top:10px;top:0;left:0}.p-confirm-popup-flipped{margin-top:0;margin-bottom:10px}.p-confirm-popup:after,.p-confirm-popup:before{bottom:100%;left:calc(var(--overlayArrowLeft, 0) + 1.25rem);content:" ";height:0;width:0;position:absolute;pointer-events:none}.p-confirm-popup:after{border-width:8px;margin-left:-8px}.p-confirm-popup:before{border-width:10px;margin-left:-10px}.p-confirm-popup-flipped:after,.p-confirm-popup-flipped:before{bottom:auto;top:100%}.p-confirm-popup.p-confirm-popup-flipped:after{border-bottom-color:transparent}.p-confirm-popup.p-confirm-popup-flipped:before{border-bottom-color:transparent}.p-confirm-popup .p-confirm-popup-content{display:flex;align-items:center}\n'],encapsulation:2,data:{animation:[(0,t.X$)("animation",[(0,t.SB)("void",(0,t.oB)({transform:"scaleY(0.8)",opacity:0})),(0,t.SB)("open",(0,t.oB)({transform:"translateY(0)",opacity:1})),(0,t.eR)("void => open",(0,t.jt)("{{showTransitionParams}}")),(0,t.eR)("open => void",(0,t.jt)("{{hideTransitionParams}}"))])]},changeDetection:0}),l})(),J=(()=>{class l{}return l.\u0275fac=function(r){return new(r||l)},l.\u0275mod=n.oAB({type:l}),l.\u0275inj=n.cJS({imports:[[_.ez,x.hJ]]}),l})()}}]);