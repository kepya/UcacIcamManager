"use strict";(self.webpackChunkadmin_ucac_dashboard=self.webpackChunkadmin_ucac_dashboard||[]).push([[358],{5358:(q,b,c)=>{c.r(b),c.d(b,{CentreExamenPageModule:()=>W});var n=c(9808),h=c(7671),p=c(2382);class v{constructor(){this.ville=""}}var Z=c(4074),_=c(5193),e=c(7587),m=c(9783),T=c(5119),y=c(1303),I=c(9965),P=c(7773),A=c(7307);function U(i,u){if(1&i){const t=e.EpF();e.TgZ(0,"i",31),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).searchValue=""}),e.qZA()}}function M(i,u){if(1&i){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td")(10,"button",32),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.oxw(2).updateCentre(a)}),e.TgZ(11,"div"),e._UZ(12,"i",33),e.qZA(),e.TgZ(13,"span"),e._uU(14," Modifier "),e.qZA()(),e.TgZ(15,"button",34),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.oxw(2).deleteCentre(a.id||0)}),e.TgZ(16,"div"),e._UZ(17,"i",35),e.qZA(),e.TgZ(18,"span"),e._uU(19," Supprimer "),e.qZA()()()()}if(2&i){const t=u.$implicit;e.xp6(2),e.Oqu(null==t||null==t.site?null:t.site.nom),e.xp6(2),e.Oqu(null==t?null:t.nom),e.xp6(2),e.Oqu(null==t?null:t.contacts),e.xp6(2),e.Oqu(null==t?null:t.ville)}}function l(i,u){1&i&&(e.TgZ(0,"tr")(1,"td",36)(2,"span",37),e._uU(3," Aucune centres trouv\xe9s avec ces lettres dans son nom "),e.qZA()()())}function f(i,u){1&i&&(e.TgZ(0,"tr")(1,"td",36)(2,"span",37),e._uU(3," Aucune centres presents dans la base "),e.qZA()()())}function s(i,u){if(1&i){const t=e.EpF();e.TgZ(0,"li",38)(1,"a",39),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).previous()}),e._uU(2,"Pr\xe9cedent"),e.qZA()()}}function g(i,u){if(1&i){const t=e.EpF();e.TgZ(0,"li",40)(1,"a",41),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).next()}),e._uU(2,"Suivant"),e.qZA()()}}const d=function(i){return{bold:i}};function C(i,u){if(1&i){const t=e.EpF();e.TgZ(0,"section",2)(1,"h1",3),e._uU(2,"Centres d'examen"),e.qZA(),e.TgZ(3,"div",4)(4,"div",5)(5,"h3",6),e._uU(6,"Liste des centres d'examen Ucac-Icam"),e.qZA(),e.TgZ(7,"button",7),e.NdJ("click",function(){return e.CHM(t),e.oxw().viewCentre("form")}),e._uU(8," Ajouter un centre "),e.qZA()(),e._UZ(9,"div",8),e.TgZ(10,"div",9)(11,"div",10)(12,"div",11)(13,"span"),e._uU(14,"Voir"),e.qZA(),e.TgZ(15,"select",12),e.NdJ("change",function(o){return e.CHM(t),e.oxw().handlePageSize(o)})("ngModelChange",function(o){return e.CHM(t),e.oxw().pageSize=o}),e.TgZ(16,"option",13),e._uU(17,"10"),e.qZA(),e.TgZ(18,"option",14),e._uU(19,"25"),e.qZA(),e.TgZ(20,"option",15),e._uU(21,"50"),e.qZA(),e.TgZ(22,"option",16),e._uU(23,"100"),e.qZA()(),e.TgZ(24,"span"),e._uU(25,"entr\xe9es"),e.qZA()(),e.TgZ(26,"div",17)(27,"span"),e._uU(28,"Rechercher"),e.qZA(),e.TgZ(29,"div")(30,"input",18),e.NdJ("ngModelChange",function(o){return e.CHM(t),e.oxw().searchValue=o})("keyup",function(o){return e.CHM(t),e.oxw().handleSearchValue(o)}),e.qZA(),e.YNc(31,U,1,0,"i",19),e.qZA()()(),e.TgZ(32,"div",20)(33,"table",21)(34,"tr")(35,"th")(36,"div"),e._uU(37," Site d'appartenance "),e.TgZ(38,"i",22),e.NdJ("click",function(){return e.CHM(t),e.oxw().sort("site")}),e.qZA()()(),e.TgZ(39,"th")(40,"div"),e._uU(41," Nom "),e.TgZ(42,"i",22),e.NdJ("click",function(){return e.CHM(t),e.oxw().sort("nom")}),e.qZA()()(),e.TgZ(43,"th")(44,"div"),e._uU(45," Contacts "),e.TgZ(46,"i",22),e.NdJ("click",function(){return e.CHM(t),e.oxw().sort("contacts")}),e.qZA()()(),e.TgZ(47,"th")(48,"div"),e._uU(49," Villes "),e.TgZ(50,"i",22),e.NdJ("click",function(){return e.CHM(t),e.oxw().sort("ville")}),e.qZA()()(),e.TgZ(51,"th")(52,"div"),e._uU(53," # "),e.qZA()()(),e.YNc(54,M,20,4,"tr",23),e.YNc(55,l,4,0,"tr",24),e.YNc(56,f,4,0,"tr",24),e.qZA()(),e.TgZ(57,"div",25)(58,"span"),e._uU(59),e.qZA(),e.TgZ(60,"ul",26),e.YNc(61,s,3,0,"li",27),e.TgZ(62,"li",28)(63,"a",29),e._uU(64,"1"),e.qZA()(),e.YNc(65,g,3,0,"li",30),e.qZA()()()()()}if(2&i){const t=e.oxw();e.xp6(15),e.Q6J("ngModel",t.pageSize),e.xp6(15),e.Q6J("ngModel",t.searchValue),e.xp6(1),e.Q6J("ngIf",t.searchValue),e.xp6(7),e.Gre("icon-sort ","site"==t.sortProperty?t.sortIcon:t.downUpIcon,""),e.Q6J("ngClass",e.VKq(27,d,"site"==t.sortProperty)),e.xp6(4),e.Gre("icon-sort ","nom"==t.sortProperty?t.sortIcon:t.downUpIcon,""),e.Q6J("ngClass",e.VKq(29,d,"nom"==t.sortProperty)),e.xp6(4),e.Gre("icon-sort ","contacts"==t.sortProperty?t.sortIcon:t.downUpIcon,""),e.Q6J("ngClass",e.VKq(31,d,"contacts"==t.sortProperty)),e.xp6(4),e.Gre("icon-sort ","ville"==t.sortProperty?t.sortIcon:t.downUpIcon,""),e.Q6J("ngClass",e.VKq(33,d,"ville"==t.sortProperty)),e.xp6(4),e.Q6J("ngForOf",t.centres),e.xp6(1),e.Q6J("ngIf",t.searchValue&&0===t.centres.length),e.xp6(1),e.Q6J("ngIf",!t.searchValue&&0===t.centres.length),e.xp6(3),e.lnq("Page ",t.page," sur ",t.nbrOfPage,", avec ",t.centres.length," entr\xe9es affich\xe9es"),e.xp6(2),e.Q6J("ngIf",t.page>1),e.xp6(4),e.Q6J("ngIf",t.page<t.nbrOfPage)}}function O(i,u){if(1&i&&(e.TgZ(0,"option",59),e._uU(1),e.qZA()),2&i){const t=u.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.nom)}}function w(i,u){1&i&&(e.TgZ(0,"div"),e._uU(1," Veuillez s'il vous plait entrer une valeur "),e.qZA())}function E(i,u){if(1&i&&(e.TgZ(0,"div",60),e.YNc(1,w,2,0,"div",24),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.formCentreControl.siteid.errors.required)}}function L(i,u){1&i&&(e.TgZ(0,"div"),e._uU(1," Veuillez s'il vous plait entrer une valeur "),e.qZA())}function N(i,u){1&i&&(e.TgZ(0,"div"),e._uU(1," Nom doit avoir au minimun 4 charact\xe8res "),e.qZA())}function k(i,u){if(1&i&&(e.TgZ(0,"div",60),e.YNc(1,L,2,0,"div",24),e.YNc(2,N,2,0,"div",24),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.formCentreControl.nom.errors.required),e.xp6(1),e.Q6J("ngIf",t.formCentreControl.nom.errors.minlength)}}function z(i,u){1&i&&(e.TgZ(0,"div"),e._uU(1," Veuillez s'il vous plait entrer une valeur "),e.qZA())}function j(i,u){1&i&&(e.TgZ(0,"div"),e._uU(1," Votre contact doit avoir au minimun 4 charact\xe8res "),e.qZA())}function B(i,u){if(1&i&&(e.TgZ(0,"div",60),e.YNc(1,z,2,0,"div",24),e.YNc(2,j,2,0,"div",24),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.formCentreControl.contacts.errors.required),e.xp6(1),e.Q6J("ngIf",t.formCentreControl.contacts.errors.minlength)}}function D(i,u){1&i&&(e.TgZ(0,"div"),e._uU(1," Veuillez s'il vous plait entrer une valeur "),e.qZA())}function Y(i,u){1&i&&(e.TgZ(0,"div"),e._uU(1," Votre Email doit respecter le format des emails "),e.qZA())}function F(i,u){if(1&i&&(e.TgZ(0,"div",60),e.YNc(1,D,2,0,"div",24),e.YNc(2,Y,2,0,"div",24),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.formCentreControl.email.errors.required),e.xp6(1),e.Q6J("ngIf",t.formCentreControl.email.errors.email)}}const S=function(i){return{required:i}};function Q(i,u){if(1&i){const t=e.EpF();e.TgZ(0,"section",2)(1,"h1",3)(2,"img",42),e.NdJ("click",function(){return e.CHM(t),e.oxw().viewCentre()}),e.qZA(),e._uU(3," centres d'examen "),e._UZ(4,"i",43),e._uU(5),e.qZA(),e.TgZ(6,"div",4)(7,"form",44),e.NdJ("ngSubmit",function(){return e.CHM(t),e.oxw().createOrUpdateCentre()}),e.TgZ(8,"div",5),e._uU(9," Veullez remplir les champs suivants "),e._UZ(10,"div",8),e.qZA(),e.TgZ(11,"div",45)(12,"div",20)(13,"div",46)(14,"label",47),e._uU(15,"Site d'appartenance *"),e.qZA(),e.TgZ(16,"select",48)(17,"option",49),e._uU(18,"Site d'appartenance"),e.qZA(),e.YNc(19,O,2,2,"option",50),e.qZA()(),e.YNc(20,E,2,1,"div",51),e.qZA(),e.TgZ(21,"div",20)(22,"div",46)(23,"label",47),e._uU(24,"Nom *"),e.qZA(),e._UZ(25,"input",52),e.qZA(),e.YNc(26,k,3,2,"div",51),e.qZA(),e.TgZ(27,"div",20)(28,"div",46)(29,"label",47),e._uU(30,"Contacts *"),e.qZA(),e._UZ(31,"input",53),e.qZA(),e.YNc(32,B,3,2,"div",51),e.qZA(),e.TgZ(33,"div",20)(34,"div",46)(35,"label",47),e._uU(36,"Email *"),e.qZA(),e._UZ(37,"input",54),e.qZA(),e.YNc(38,F,3,2,"div",51),e.qZA()(),e.TgZ(39,"div",55),e._UZ(40,"div",8),e.TgZ(41,"div",56)(42,"button",57),e._uU(43," Soumettre "),e.qZA(),e.TgZ(44,"button",58),e.NdJ("click",function(){return e.CHM(t),e.oxw().formCentre.reset()}),e._uU(45," Renitialiser "),e.qZA()()()()()()}if(2&i){const t=e.oxw();e.xp6(5),e.hij("",t.isFormCentre?"Modification des informations d'un centre d'examen":"Ajouter un centre d'examen"," "),e.xp6(2),e.Q6J("formGroup",t.formCentre),e.xp6(9),e.Q6J("ngClass",e.VKq(12,S,t.formCentre.get("siteid").invalid)),e.xp6(3),e.Q6J("ngForOf",t.sites),e.xp6(1),e.Q6J("ngIf",t.formCentreControl.siteid.errors),e.xp6(5),e.Q6J("ngClass",e.VKq(14,S,t.formCentre.get("nom").invalid)),e.xp6(1),e.Q6J("ngIf",t.formCentreControl.nom.errors),e.xp6(5),e.Q6J("ngClass",e.VKq(16,S,t.formCentre.get("contacts").invalid)),e.xp6(1),e.Q6J("ngIf",t.formCentreControl.contacts.errors),e.xp6(5),e.Q6J("ngClass",e.VKq(18,S,t.formCentre.get("email").invalid)),e.xp6(1),e.Q6J("ngIf",t.formCentreControl.email.errors),e.xp6(4),e.Q6J("disabled",t.formCentre.invalid)}}let V=(()=>{class i{constructor(t,r,o,a,x){this.confirmationService=t,this.centreSrv=r,this.storageService=o,this.siteSrv=a,this.messageService=x,this.centres=[],this.sites=[],this.searchCentres=[],this.loading=!0,this.formCentre=new p.cw({nom:new p.NI("",[p.kI.required]),contacts:new p.NI("",[p.kI.required]),siteid:new p.NI("",[p.kI.required]),email:new p.NI("",[p.kI.email])})}ngOnInit(){this.sortProperty="nom",this.sortIcon="fa-solid fa-arrow-down-short-wide",this.downUpIcon="pi pi-sort-alt",this.pageSize=10,this.page=1,this.compte=this.storageService.getUserConnected(),this.compte.role==_.u.SUPER_ADMIN?(this.getCentres(),this.getSites()):(this.getCentreByZone(this.compte.idZone),this.getSitesByZone(this.compte.idZone))}confirm(t,r){this.confirmationService.confirm({target:t.target,message:"\xcates vous sures de vouloir continuer ?",icon:"pi pi-question",acceptLabel:"Oui",rejectLabel:"Non",accept:()=>{this.deleteCentre(r)},reject:()=>{this.messageService.add({severity:"error",summary:"Non",detail:"vous avez annul\xe9 la suppresion"})}})}sort(t,r=this.centres){return this.sortProperty=t,this.isAsc=!this.isAsc,this.sortIcon=this.isAsc?"fa-solid fa-arrow-down-short-wide":"fa-solid fa-arrow-down-wide-short","nom"===t&&r.sort(this.isAsc?(o,a)=>o.nom>a.nom?1:a.nom>o.nom?-1:0:(o,a)=>o.nom>a.nom?-1:a.nom>o.nom?1:0),"site"===t&&r.sort(this.isAsc?(o,a)=>o.site.nom>a.site.nom?1:a.site.nom>o.site.nom?-1:0:(o,a)=>o.site.nom>a.site.nom?-1:a.site.nom>o.site.nom?1:0),"contacts"===t&&r.sort(this.isAsc?(o,a)=>o.contacts>a.contacts?1:a.contacts>o.contacts?-1:0:(o,a)=>o.contacts>a.contacts?-1:a.contacts>o.contacts?1:0),"ville"===t&&r.sort(this.isAsc?(o,a)=>o.ville>a.ville?1:a.ville>o.ville?-1:0:(o,a)=>o.ville>a.ville?-1:a.ville>o.ville?1:0),r}get formCentreControl(){return this.formCentre.controls}checkSite(t){var r;""==t.target.value&&alert(null===(r=this.formCentre.get("siteid"))||void 0===r?void 0:r.value)}handlePageSize(t){this.page=1,this.getCentres()}handleSearchValue(t){if(this.searchValue=t.target.value,""!==this.searchValue){let o=this.searchCentres.map(a=>a.nom).filter(a=>a.toLowerCase().indexOf(this.searchValue.toLowerCase()+"")>-1);if(0===o.length)this.centres=[];else{let a=[];for(let x=0;x<o.length;x++){const $=o[x];let G=this.searchCentres.filter(X=>X.nom.indexOf(""+$)>-1);a.push(...G)}this.centres=a}}else this.centres=this.searchCentres}next(){this.page++,this.getCentres()}previous(){this.page--,this.getCentres()}getCentres(){this.centreSrv.liste().subscribe({next:t=>{t=this.sort("nom",t),this.searchCentres=[],this.searchCentres=t,this.centres=t.map((r,o)=>Object.assign({id:o+1},r)).slice((this.page-1)*this.pageSize,(this.page-1)*this.pageSize+this.pageSize),this.collectionSize=t.length,this.nbrOfPage=Math.ceil(t.length/this.pageSize)},error:t=>{console.log("error: ",t)}})}getCentreByZone(t){this.centreSrv.allByZone(t).subscribe({next:r=>{r=this.sort("nom",r),this.searchCentres=[],this.searchCentres=r,this.centres=r.map((o,a)=>Object.assign({id:a+1},o)).slice((this.page-1)*this.pageSize,(this.page-1)*this.pageSize+this.pageSize),this.collectionSize=r.length,this.nbrOfPage=Math.ceil(r.length/this.pageSize)},error:r=>{console.log("error: ",r)}})}viewCentre(t="data"){"data"===t?(this.isFormCentre=!1,this.centre=new v):(this.isFormCentre=!0,this.compte=this.storageService.getUserConnected(),this.compte.role==_.u.SUPER_ADMIN?this.getSites():this.getSitesByZone(this.compte.idZone))}getSitesByZone(t){this.siteSrv.allByZone(t).subscribe({next:r=>{this.sites=r},error:r=>{console.log("error: ",r)}})}getSites(){this.siteSrv.liste().subscribe({next:t=>{this.sites=t},error:t=>{console.log("error: ",t)}})}updateCentre(t){this.isFormCentre=!0,this.centre=t,this.formCentre.patchValue({nom:t.nom,email:t.email,contacts:t.contacts,ville:t.ville,siteid:t.siteid})}createOrUpdateCentre(){var t;let r=new Z.T;if(null===(t=this.centre)||void 0===t?void 0:t.id){let o=Object.assign({},this.formCentre.value);delete o.siteid,o=Object.assign(Object.assign({},o),{siteid:parseInt(this.formCentre.value.siteid,10)}),this.centreSrv.update(Object.assign(Object.assign({},o),{site:r,id:this.centre.id})).subscribe({next:a=>{this.getCentres(),this.centre=new v,this.formCentre.reset(),this.messageService.add({severity:"success",summary:"Modification de session",detail:"Modification effectu\xe9e avec success"}),this.isFormCentre=!1},error:a=>{this.messageService.add({severity:"error",summary:"Erreur de modification",detail:a.message}),console.log("Error: ",a)}})}else{let o=Object.assign({},this.formCentre.value);delete o.siteid,o=Object.assign(Object.assign({},o),{siteid:parseInt(this.formCentre.value.siteid,10)}),this.centreSrv.create(o).subscribe({next:a=>{this.getCentres(),this.messageService.add({severity:"success",summary:"Cr\xe9ation de session",detail:"Cr\xe9ation effectu\xe9e avec success"}),this.centre=new v,this.formCentre.reset(),this.isFormCentre=!1},error:a=>{this.messageService.add({severity:"error",summary:"Erreur de creation",detail:a.message}),console.log("Error: ",a)}})}}deleteCentre(t){this.centreSrv.delete(t||0).subscribe({next:r=>{this.getCentres(),this.messageService.add({severity:"success",summary:"Suppression de centre ",detail:"Suppression effectu\xe9e avec success"})},error:r=>{console.log("Error: ",r),this.messageService.add({severity:"error",summary:"Erreur de suppression",detail:r.message})}})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(m.YP),e.Y36(T.T),e.Y36(y.V),e.Y36(I.P),e.Y36(m.ez))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-centre-examen-page"]],decls:5,vars:2,consts:[["class","Centre-page page-content",4,"ngIf","ngIfElse"],["addCentre",""],[1,"Centre-page","page-content"],[1,"page-title"],[1,"card"],[1,"header"],[1,"title"],[1,"btn","btn-danger",3,"click"],[1,"line"],[1,"table-content"],[1,"search-content"],[1,"select-page-size"],["name","page-size","id","page-size",3,"ngModel","change","ngModelChange"],["value","10"],["value","25"],["value","50"],["value","100"],[1,"search_value"],["type","text","name","value","id","value",3,"ngModel","ngModelChange","keyup"],["class","fa fa-close pull-right",3,"click",4,"ngIf"],[1,"row"],["id","table"],[3,"ngClass","click"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"pagination_content"],[1,"pagination"],["class","paginate_button previous disabled","id","datatable-responsive_previous",4,"ngIf"],[1,"paginate_button","active"],["aria-controls","datatable-responsive","data-dt-idx","1","tabindex","0"],["class","paginate_button next disabled","id","datatable-responsive_next",4,"ngIf"],[1,"fa","fa-close","pull-right",3,"click"],[1,"btn",3,"click"],[1,"fa-solid","fa-pencil"],[1,"btn","mt-2",3,"click"],[1,"fa-solid","fa-trash"],["colspan","5"],[1,"vh-center"],["id","datatable-responsive_previous",1,"paginate_button","previous","disabled"],["aria-controls","datatable-responsive","data-dt-idx","0","tabindex","0",3,"click"],["id","datatable-responsive_next",1,"paginate_button","next","disabled"],["aria-controls","datatable-responsive","data-dt-idx","2","tabindex","0",3,"click"],["src","/assets/icons/undo-outline.svg","alt","","srcset","",1,"icon",3,"click"],[1,"pi","pi-angle-right"],[1,"form",3,"formGroup","ngSubmit"],[1,"main",2,"height","25em"],[1,"form-group"],["for",""],["formControlName","siteid",3,"ngClass"],["value",""],[3,"value",4,"ngFor","ngForOf"],["class","alert",4,"ngIf"],["type","text","formControlName","nom",3,"ngClass"],["type","text","formControlName","contacts",3,"ngClass"],["type","text","formControlName","email",3,"ngClass"],[1,"footer"],[1,"btn-group"],["type","submit",1,"btn","btn-info",3,"disabled"],["type","reset",1,"btn","btn-danger",3,"click"],[3,"value"],[1,"alert"]],template:function(t,r){if(1&t&&(e.YNc(0,C,66,35,"section",0),e.YNc(1,Q,46,20,"ng-template",null,1,e.W1O),e._UZ(3,"p-toast")(4,"p-confirmPopup")),2&t){const o=e.MAs(2);e.Q6J("ngIf",!r.isFormCentre)("ngIfElse",o)}},directives:[n.O5,p.EJ,p.JJ,p.On,p.YN,p.Kr,p.Fj,n.mk,n.sg,p._Y,p.JL,p.sg,p.u,P.FN,A.P],encapsulation:2}),i})();var J=c(437);const R=[{path:"",component:V,canActivate:[J.u]}];let H=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[J.u],imports:[[h.Bz.forChild(R)],h.Bz]}),i})();var K=c(520);let W=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[n.ez,H,p.u5,K.JF,A.n,P.EV,p.UX]]}),i})()},5119:(q,b,c)=>{c.d(b,{T:()=>Z});var n=c(2340),h=c(7587),p=c(520),v=c(4920);let Z=(()=>{class _{constructor(m,T){this.http=m,this.baseUrlSvr=T,this.url="",this.url=`${this.baseUrlSvr.getOrigin()}${n.N.administrationPath}`,this.url+="centre_examen/"}liste(){return this.http.get(this.url+"all")}allByZone(m){return this.http.get(this.url+"allbyzone/"+m)}allBySite(m){return this.http.get(this.url+"allbysite/"+m)}getOne(m){return this.http.get(this.url+m)}create(m){return this.http.post(this.url+"create",m)}update(m){return this.http.patch(this.url+(null==m?void 0:m.id),m)}delete(m){return this.http.delete(this.url+m)}}return _.\u0275fac=function(m){return new(m||_)(h.LFG(p.eN),h.LFG(v.x))},_.\u0275prov=h.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},7307:(q,b,c)=>{c.d(b,{P:()=>U,n:()=>M});var n=c(7587),h=c(9808),p=c(9783),v=c(845),Z=c(5921),_=c(1777),e=c(5730);function m(l,f){if(1&l&&n._UZ(0,"i",8),2&l){const s=n.oxw(2);n.Tol(s.confirmation.icon),n.Q6J("ngClass","p-confirm-popup-icon")}}function T(l,f){if(1&l){const s=n.EpF();n.TgZ(0,"button",9),n.NdJ("click",function(){return n.CHM(s),n.oxw(2).reject()}),n.qZA()}if(2&l){const s=n.oxw(2);n.Tol(s.confirmation.rejectButtonStyleClass||"p-button-text"),n.Q6J("icon",s.confirmation.rejectIcon)("label",s.rejectButtonLabel)("ngClass","p-confirm-popup-reject p-button-sm"),n.uIk("aria-label",s.rejectButtonLabel)}}function y(l,f){if(1&l){const s=n.EpF();n.TgZ(0,"button",9),n.NdJ("click",function(){return n.CHM(s),n.oxw(2).accept()}),n.qZA()}if(2&l){const s=n.oxw(2);n.Tol(s.confirmation.acceptButtonStyleClass),n.Q6J("icon",s.confirmation.acceptIcon)("label",s.acceptButtonLabel)("ngClass","p-confirm-popup-accept p-button-sm"),n.uIk("aria-label",s.acceptButtonLabel)}}const I=function(l,f){return{showTransitionParams:l,hideTransitionParams:f}},P=function(l){return{value:"open",params:l}};function A(l,f){if(1&l){const s=n.EpF();n.TgZ(0,"div",1),n.NdJ("click",function(d){return n.CHM(s),n.oxw().onOverlayClick(d)})("@animation.start",function(d){return n.CHM(s),n.oxw().onAnimationStart(d)})("@animation.done",function(d){return n.CHM(s),n.oxw().onAnimationEnd(d)}),n.TgZ(1,"div",2,3),n.YNc(3,m,1,3,"i",4),n.TgZ(4,"span",5),n._uU(5),n.qZA()(),n.TgZ(6,"div",6),n.YNc(7,T,1,6,"button",7),n.YNc(8,y,1,6,"button",7),n.qZA()()}if(2&l){const s=n.oxw();n.Tol(s.styleClass),n.Q6J("ngClass","p-confirm-popup p-component")("ngStyle",s.style)("@animation",n.VKq(12,P,n.WLB(9,I,s.showTransitionOptions,s.hideTransitionOptions))),n.xp6(3),n.Q6J("ngIf",s.confirmation.icon),n.xp6(2),n.Oqu(s.confirmation.message),n.xp6(2),n.Q6J("ngIf",!1!==s.confirmation.rejectVisible),n.xp6(1),n.Q6J("ngIf",!1!==s.confirmation.acceptVisible)}}let U=(()=>{class l{constructor(s,g,d,C,O,w){this.el=s,this.confirmationService=g,this.renderer=d,this.cd=C,this.config=O,this.overlayService=w,this.defaultFocus="accept",this.showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)",this.hideTransitionOptions=".1s linear",this.autoZIndex=!0,this.baseZIndex=0,this.subscription=this.confirmationService.requireConfirmation$.subscribe(E=>{E?E.key===this.key&&(this.confirmation=E,this.confirmation.accept&&(this.confirmation.acceptEvent=new n.vpe,this.confirmation.acceptEvent.subscribe(this.confirmation.accept)),this.confirmation.reject&&(this.confirmation.rejectEvent=new n.vpe,this.confirmation.rejectEvent.subscribe(this.confirmation.reject)),this.visible=!0):this.hide()})}get visible(){return this._visible}set visible(s){this._visible=s,this.cd.markForCheck()}onAnimationStart(s){if("open"===s.toState){this.container=s.element,document.body.appendChild(this.container),this.align(),this.bindListeners();const g=this.getElementToFocus();g&&g.focus()}}onAnimationEnd(s){"void"===s.toState&&this.onContainerDestroy()}getElementToFocus(){switch(this.defaultFocus){case"accept":return e.p.findSingle(this.container,".p-confirm-popup-accept");case"reject":return e.p.findSingle(this.container,".p-confirm-popup-reject");case"none":return null}}align(){this.autoZIndex&&Z.P9.set("overlay",this.container,this.config.zIndex.overlay),e.p.absolutePosition(this.container,this.confirmation.target);const s=e.p.getOffset(this.container),g=e.p.getOffset(this.confirmation.target);let d=0;s.left<g.left&&(d=g.left-s.left),this.container.style.setProperty("--overlayArrowLeft",`${d}px`),s.top<g.top&&e.p.addClass(this.container,"p-confirm-popup-flipped")}hide(){this.visible=!1}accept(){this.confirmation.acceptEvent&&this.confirmation.acceptEvent.emit(),this.hide()}reject(){this.confirmation.rejectEvent&&this.confirmation.rejectEvent.emit(),this.hide()}onOverlayClick(s){this.overlayService.add({originalEvent:s,target:this.el.nativeElement})}bindListeners(){this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener()}unbindListeners(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}bindDocumentClickListener(){if(!this.documentClickListener){let s=e.p.isIOS()?"touchstart":"click";const g=this.el?this.el.nativeElement.ownerDocument:document;this.documentClickListener=this.renderer.listen(g,s,d=>{let C=this.confirmation.target;this.container!==d.target&&!this.container.contains(d.target)&&C!==d.target&&!C.contains(d.target)&&this.hide()})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}onWindowResize(){this.hide()}bindDocumentResizeListener(){this.documentResizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.documentResizeListener)}unbindDocumentResizeListener(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new e.V(this.confirmation.target,()=>{this.visible&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unsubscribeConfirmationSubscriptions(){this.confirmation&&(this.confirmation.acceptEvent&&this.confirmation.acceptEvent.unsubscribe(),this.confirmation.rejectEvent&&this.confirmation.rejectEvent.unsubscribe())}onContainerDestroy(){this.unbindListeners(),this.unsubscribeConfirmationSubscriptions(),this.autoZIndex&&Z.P9.clear(this.container),this.confirmation=null,this.container=null}restoreAppend(){this.container&&document.body.removeChild(this.container),this.onContainerDestroy()}get acceptButtonLabel(){return this.confirmation.acceptLabel||this.config.getTranslation(p.ws.ACCEPT)}get rejectButtonLabel(){return this.confirmation.rejectLabel||this.config.getTranslation(p.ws.REJECT)}ngOnDestroy(){this.restoreAppend(),this.subscription&&this.subscription.unsubscribe()}}return l.\u0275fac=function(s){return new(s||l)(n.Y36(n.SBq),n.Y36(p.YP),n.Y36(n.Qsj),n.Y36(n.sBO),n.Y36(p.b4),n.Y36(p.F0))},l.\u0275cmp=n.Xpm({type:l,selectors:[["p-confirmPopup"]],hostAttrs:[1,"p-element"],inputs:{key:"key",defaultFocus:"defaultFocus",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",style:"style",styleClass:"styleClass",visible:"visible"},decls:1,vars:1,consts:[[3,"ngClass","ngStyle","class","click",4,"ngIf"],[3,"ngClass","ngStyle","click"],[1,"p-confirm-popup-content"],["content",""],[3,"ngClass","class",4,"ngIf"],[1,"p-confirm-popup-message"],[1,"p-confirm-popup-footer"],["type","button","pButton","",3,"icon","label","ngClass","class","click",4,"ngIf"],[3,"ngClass"],["type","button","pButton","",3,"icon","label","ngClass","click"]],template:function(s,g){1&s&&n.YNc(0,A,9,14,"div",0),2&s&&n.Q6J("ngIf",g.visible)},directives:[h.O5,h.mk,h.PC,v.Hq],styles:['.p-confirm-popup{position:absolute;margin-top:10px;top:0;left:0}.p-confirm-popup-flipped{margin-top:0;margin-bottom:10px}.p-confirm-popup:after,.p-confirm-popup:before{bottom:100%;left:calc(var(--overlayArrowLeft, 0) + 1.25rem);content:" ";height:0;width:0;position:absolute;pointer-events:none}.p-confirm-popup:after{border-width:8px;margin-left:-8px}.p-confirm-popup:before{border-width:10px;margin-left:-10px}.p-confirm-popup-flipped:after,.p-confirm-popup-flipped:before{bottom:auto;top:100%}.p-confirm-popup.p-confirm-popup-flipped:after{border-bottom-color:transparent}.p-confirm-popup.p-confirm-popup-flipped:before{border-bottom-color:transparent}.p-confirm-popup .p-confirm-popup-content{display:flex;align-items:center}\n'],encapsulation:2,data:{animation:[(0,_.X$)("animation",[(0,_.SB)("void",(0,_.oB)({transform:"scaleY(0.8)",opacity:0})),(0,_.SB)("open",(0,_.oB)({transform:"translateY(0)",opacity:1})),(0,_.eR)("void => open",(0,_.jt)("{{showTransitionParams}}")),(0,_.eR)("open => void",(0,_.jt)("{{hideTransitionParams}}"))])]},changeDetection:0}),l})(),M=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=n.oAB({type:l}),l.\u0275inj=n.cJS({imports:[[h.ez,v.hJ]]}),l})()}}]);