"use strict";(self.webpackChunkadmin_ucac_dashboard=self.webpackChunkadmin_ucac_dashboard||[]).push([[298],{7755:(N,A,c)=>{c.d(A,{b:()=>p});var n=c(2340),S=c(7587),h=c(520),P=c(4920);let p=(()=>{class d{constructor(m,t){this.http=m,this.baseUrlSvr=t,this.url="",this.url=`${this.baseUrlSvr.getOrigin()}${n.N.administrationPath}`,this.url+="zone/"}liste(){return this.http.get(this.url+"all")}getOne(m){return this.http.get(this.url+m)}create(m){return this.http.post(this.url+"create",m)}update(m){return this.http.patch(this.url+(null==m?void 0:m.id),m)}delete(m){return this.http.delete(this.url+m)}}return d.\u0275fac=function(m){return new(m||d)(S.LFG(h.eN),S.LFG(P.x))},d.\u0275prov=S.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},7298:(N,A,c)=>{c.r(A),c.d(A,{SitePageModule:()=>at});var n=c(845),S=c(4255),h=c(9808),P=c(7671),p=c(2382),d=c(4074),v=c(6449),m=c(5193),t=c(7587),U=c(9783),M=c(9965),O=c(1303),J=c(7755),q=c(7773),z=c(7307);function u(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"i",31),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).searchValue=""}),t.qZA()}}function x(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td")(10,"button",32),t.NdJ("click",function(){const a=t.CHM(e).$implicit;return t.oxw(2).updateSite(a)}),t.TgZ(11,"div"),t._UZ(12,"i",33),t.qZA(),t.TgZ(13,"span"),t._uU(14," Modifier "),t.qZA()(),t.TgZ(15,"button",34),t.NdJ("click",function(o){const f=t.CHM(e).$implicit;return t.oxw(2).confirm(o,f.id||0)}),t.TgZ(16,"div"),t._UZ(17,"i",35),t.qZA(),t.TgZ(18,"span"),t._uU(19," Supprimer "),t.qZA()()()()}if(2&i){const e=l.$implicit;t.xp6(2),t.Oqu(null==e.zone?null:e.zone.nom),t.xp6(2),t.Oqu(e.nom),t.xp6(2),t.Oqu(e.description),t.xp6(2),t.Oqu(e.pays)}}function r(i,l){1&i&&(t.TgZ(0,"tr")(1,"td",36)(2,"span",37),t._uU(3," Aucun sites trouv\xe9s avec ces lettres dans son nom "),t.qZA()()())}function _(i,l){1&i&&(t.TgZ(0,"tr")(1,"td",36)(2,"span",37),t._uU(3," Aucun sites present dans la base "),t.qZA()()())}function g(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"li",38)(1,"a",39),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).previous()}),t._uU(2,"Pr\xe9cedent"),t.qZA()()}}function Z(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"li",40)(1,"a",41),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).next()}),t._uU(2,"Suivant"),t.qZA()()}}const y=function(i){return{bold:i}};function w(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"section",2)(1,"h1",3),t._uU(2,"Sites"),t.qZA(),t.TgZ(3,"div",4)(4,"div",5)(5,"h3",6),t._uU(6,"Liste des sites Ucac-Icam"),t.qZA(),t.TgZ(7,"button",7),t.NdJ("click",function(){return t.CHM(e),t.oxw().viewSite("form")}),t._uU(8," Ajouter un site "),t.qZA()(),t._UZ(9,"div",8),t.TgZ(10,"div",9)(11,"div",10)(12,"div",11)(13,"span"),t._uU(14,"Voir"),t.qZA(),t.TgZ(15,"select",12),t.NdJ("change",function(o){return t.CHM(e),t.oxw().handlePageSize(o)})("ngModelChange",function(o){return t.CHM(e),t.oxw().pageSize=o}),t.TgZ(16,"option",13),t._uU(17,"10"),t.qZA(),t.TgZ(18,"option",14),t._uU(19,"25"),t.qZA(),t.TgZ(20,"option",15),t._uU(21,"50"),t.qZA(),t.TgZ(22,"option",16),t._uU(23,"100"),t.qZA()(),t.TgZ(24,"span"),t._uU(25,"entr\xe9es"),t.qZA()(),t.TgZ(26,"div",17)(27,"span"),t._uU(28,"Rechercher"),t.qZA(),t.TgZ(29,"div")(30,"input",18),t.NdJ("ngModelChange",function(o){return t.CHM(e),t.oxw().searchValue=o})("keyup",function(o){return t.CHM(e),t.oxw().handleSearchValue(o)}),t.qZA(),t.YNc(31,u,1,0,"i",19),t.qZA()()(),t.TgZ(32,"div",20)(33,"table",21)(34,"tr")(35,"th")(36,"div"),t._uU(37," Zone d'appartenance "),t.TgZ(38,"i",22),t.NdJ("click",function(){return t.CHM(e),t.oxw().sort("zone")}),t.qZA()()(),t.TgZ(39,"th")(40,"div"),t._uU(41," Nom "),t.TgZ(42,"i",22),t.NdJ("click",function(){return t.CHM(e),t.oxw().sort("nom")}),t.qZA()()(),t.TgZ(43,"th")(44,"div"),t._uU(45," Description "),t.TgZ(46,"i",22),t.NdJ("click",function(){return t.CHM(e),t.oxw().sort("description")}),t.qZA()()(),t.TgZ(47,"th")(48,"div"),t._uU(49," Pays "),t.TgZ(50,"i",22),t.NdJ("click",function(){return t.CHM(e),t.oxw().sort("pays")}),t.qZA()()(),t.TgZ(51,"th")(52,"div"),t._uU(53," # "),t.qZA()()(),t.YNc(54,x,20,4,"tr",23),t.YNc(55,r,4,0,"tr",24),t.YNc(56,_,4,0,"tr",24),t.qZA()(),t.TgZ(57,"div",25)(58,"span"),t._uU(59),t.qZA(),t.TgZ(60,"ul",26),t.YNc(61,g,3,0,"li",27),t.TgZ(62,"li",28)(63,"a",29),t._uU(64,"1"),t.qZA()(),t.YNc(65,Z,3,0,"li",30),t.qZA()()()()()}if(2&i){const e=t.oxw();t.xp6(15),t.Q6J("ngModel",e.pageSize),t.xp6(15),t.Q6J("ngModel",e.searchValue),t.xp6(1),t.Q6J("ngIf",e.searchValue),t.xp6(7),t.Gre("icon-sort ","zone"==e.sortProperty?e.sortIcon:e.downUpIcon,""),t.Q6J("ngClass",t.VKq(27,y,"zone"==e.sortProperty)),t.xp6(4),t.Gre("icon-sort ","nom"==e.sortProperty?e.sortIcon:e.downUpIcon,""),t.Q6J("ngClass",t.VKq(29,y,"nom"==e.sortProperty)),t.xp6(4),t.Gre("icon-sort ","description"==e.sortProperty?e.sortIcon:e.downUpIcon,""),t.Q6J("ngClass",t.VKq(31,y,"description"==e.sortProperty)),t.xp6(4),t.Gre("icon-sort ","pays"==e.sortProperty?e.sortIcon:e.downUpIcon,""),t.Q6J("ngClass",t.VKq(33,y,"pays"==e.sortProperty)),t.xp6(4),t.Q6J("ngForOf",e.sites),t.xp6(1),t.Q6J("ngIf",e.searchValue&&0===e.sites.length),t.xp6(1),t.Q6J("ngIf",!e.searchValue&&0===e.sites.length),t.xp6(3),t.lnq("Page ",e.page," sur ",e.nbrOfPage,", avec ",e.sites.length," entr\xe9es affich\xe9es"),t.xp6(2),t.Q6J("ngIf",e.page>1),t.xp6(4),t.Q6J("ngIf",e.page<e.nbrOfPage)}}function E(i,l){if(1&i&&(t.TgZ(0,"option",61),t._uU(1),t.qZA()),2&i){const e=l.$implicit;t.Q6J("value",e.id),t.xp6(1),t.Oqu(e.nom)}}function k(i,l){1&i&&(t.TgZ(0,"div"),t._uU(1," Veuillez s'il vous plait entrer une valeur "),t.qZA())}function Q(i,l){if(1&i&&(t.TgZ(0,"div",62),t.YNc(1,k,2,0,"div",24),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.formSiteControl.zone_id.errors.required)}}function Y(i,l){1&i&&(t.TgZ(0,"div"),t._uU(1," Veuillez s'il vous plait entrer une valeur "),t.qZA())}function D(i,l){1&i&&(t.TgZ(0,"div"),t._uU(1," Nom doit avoir au minimun 4 charact\xe8res "),t.qZA())}function j(i,l){if(1&i&&(t.TgZ(0,"div",62),t.YNc(1,Y,2,0,"div",24),t.YNc(2,D,2,0,"div",24),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.formSiteControl.nom.errors.required),t.xp6(1),t.Q6J("ngIf",e.formSiteControl.nom.errors.minlength)}}function F(i,l){1&i&&(t.TgZ(0,"div"),t._uU(1," Veuillez s'il vous plait entrer une valeur "),t.qZA())}function B(i,l){1&i&&(t.TgZ(0,"div"),t._uU(1," Description doit avoir au minimun 4 charact\xe8res "),t.qZA())}function V(i,l){if(1&i&&(t.TgZ(0,"div",62),t.YNc(1,F,2,0,"div",24),t.YNc(2,B,2,0,"div",24),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.formSiteControl.description.errors.required),t.xp6(1),t.Q6J("ngIf",e.formSiteControl.description.errors.minlength)}}function R(i,l){1&i&&(t.TgZ(0,"div"),t._uU(1," Veuillez s'il vous plait entrer une valeur "),t.qZA())}function H(i,l){1&i&&(t.TgZ(0,"div"),t._uU(1," Description doit avoir au minimun 4 charact\xe8res "),t.qZA())}function K(i,l){if(1&i&&(t.TgZ(0,"div",62),t.YNc(1,R,2,0,"div",24),t.YNc(2,H,2,0,"div",24),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.formSiteControl.msgPaiement.errors.required),t.xp6(1),t.Q6J("ngIf",e.formSiteControl.msgPaiement.errors.minlength)}}function W(i,l){1&i&&(t.TgZ(0,"div"),t._uU(1," Veuillez s'il vous plait entrer une valeur "),t.qZA())}function $(i,l){1&i&&(t.TgZ(0,"div"),t._uU(1," Pays doit avoir au minimun 4 charact\xe8res "),t.qZA())}function G(i,l){if(1&i&&(t.TgZ(0,"div",62),t.YNc(1,W,2,0,"div",24),t.YNc(2,$,2,0,"div",24),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.formSiteControl.pays.errors.required),t.xp6(1),t.Q6J("ngIf",e.formSiteControl.pays.errors.minlength)}}function X(i,l){1&i&&(t.TgZ(0,"div"),t._uU(1," Veuillez s'il vous plait entrer une valeur "),t.qZA())}function tt(i,l){1&i&&(t.TgZ(0,"div"),t._uU(1," Pays doit avoir au minimun 4 charact\xe8res "),t.qZA())}function et(i,l){if(1&i&&(t.TgZ(0,"div",62),t.YNc(1,X,2,0,"div",24),t.YNc(2,tt,2,0,"div",24),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.formSiteControl.indicatif.errors.required),t.xp6(1),t.Q6J("ngIf",e.formSiteControl.indicatif.errors.minlength)}}const I=function(i){return{required:i}};function it(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"section",2)(1,"h1",3)(2,"img",42),t.NdJ("click",function(){return t.CHM(e),t.oxw().viewSite()}),t.qZA(),t._uU(3," sites "),t._UZ(4,"i",43),t._uU(5),t.qZA(),t.TgZ(6,"div",4)(7,"form",44),t.NdJ("ngSubmit",function(){return t.CHM(e),t.oxw().createOrUpdateSite()}),t.TgZ(8,"div",5),t._uU(9," Veullez remplir les champs suivants "),t._UZ(10,"div",8),t.qZA(),t.TgZ(11,"div",45)(12,"div",20)(13,"div",46)(14,"label",47),t._uU(15,"Zone d'appartenance *"),t.qZA(),t.TgZ(16,"select",48)(17,"option",49),t._uU(18,"Zone d'appartenance"),t.qZA(),t.YNc(19,E,2,2,"option",50),t.qZA()(),t.YNc(20,Q,2,1,"div",51),t.qZA(),t.TgZ(21,"div",20)(22,"div",46)(23,"label",47),t._uU(24,"Nom *"),t.qZA(),t._UZ(25,"input",52),t.qZA(),t.YNc(26,j,3,2,"div",51),t.qZA(),t.TgZ(27,"div",20)(28,"div",46)(29,"label",47),t._uU(30,"Description *"),t.qZA(),t._UZ(31,"textarea",53),t.qZA(),t.YNc(32,V,3,2,"div",51),t.qZA(),t.TgZ(33,"div",20)(34,"div",46)(35,"label",47),t._uU(36,"Message de paiement *"),t.qZA(),t._UZ(37,"textarea",54),t.qZA(),t.YNc(38,K,3,2,"div",51),t.qZA(),t.TgZ(39,"div",20)(40,"div",46)(41,"label",47),t._uU(42,"Pays *"),t.qZA(),t._UZ(43,"input",55),t.qZA(),t.YNc(44,G,3,2,"div",51),t.qZA(),t.TgZ(45,"div",20)(46,"div",46)(47,"label",47),t._uU(48,"Indicatif *"),t.qZA(),t._UZ(49,"input",56),t.qZA(),t.YNc(50,et,3,2,"div",51),t.qZA()(),t.TgZ(51,"div",57),t._UZ(52,"div",8),t.TgZ(53,"div",58)(54,"button",59),t._uU(55," Soumettre "),t.qZA(),t.TgZ(56,"button",60),t.NdJ("click",function(){return t.CHM(e),t.oxw().formSite.reset()}),t._uU(57," Renitialiser "),t.qZA()()()()()()}if(2&i){const e=t.oxw();t.xp6(5),t.hij(" ",null!=e.site&&e.site.zoneid?"Modification des informations d'un site":"Ajouter un site"," "),t.xp6(2),t.Q6J("formGroup",e.formSite),t.xp6(9),t.Q6J("ngClass",t.VKq(16,I,e.formSite.get("zone_id").invalid)),t.xp6(3),t.Q6J("ngForOf",e.zones),t.xp6(1),t.Q6J("ngIf",e.formSiteControl.zone_id.errors),t.xp6(5),t.Q6J("ngClass",t.VKq(18,I,e.formSite.get("nom").invalid)),t.xp6(1),t.Q6J("ngIf",e.formSiteControl.nom.errors),t.xp6(5),t.Q6J("ngClass",t.VKq(20,I,e.formSite.get("description").invalid)),t.xp6(1),t.Q6J("ngIf",e.formSiteControl.description.errors),t.xp6(5),t.Q6J("ngClass",t.VKq(22,I,e.formSite.get("msgPaiement").invalid)),t.xp6(1),t.Q6J("ngIf",e.formSiteControl.msgPaiement.errors),t.xp6(5),t.Q6J("ngClass",t.VKq(24,I,e.formSite.get("pays").invalid)),t.xp6(1),t.Q6J("ngIf",e.formSiteControl.pays.errors),t.xp6(5),t.Q6J("ngClass",t.VKq(26,I,e.formSite.get("indicatif").invalid)),t.xp6(1),t.Q6J("ngIf",e.formSiteControl.indicatif.errors),t.xp6(4),t.Q6J("disabled",e.formSite.invalid)}}let nt=(()=>{class i{constructor(e,s,o,a,f){this.confirmationService=e,this.siteSrv=s,this.storageService=o,this.zoneSrv=a,this.messageService=f,this.sites=[],this.zones=[],this.searchSites=[],this.loading=!0,this.formSite=new p.cw({nom:new p.NI("",[p.kI.required]),description:new p.NI("",[p.kI.required]),pays:new p.NI("",[p.kI.required]),msgPaiement:new p.NI("",[p.kI.required]),indicatif:new p.NI("",[p.kI.required]),zone_id:new p.NI("",[p.kI.required])})}ngOnInit(){this.sortProperty="nom",this.sortIcon="fa-solid fa-arrow-down-short-wide",this.downUpIcon="pi pi-sort-alt",this.pageSize=10,this.page=1,this.compte=this.storageService.getUserConnected(),this.compte.role==m.u.SUPER_ADMIN?(this.getZones(),this.getSites()):(this.getZonesById(this.compte.idZone),this.getSitesByZone(this.compte.idZone))}sort(e,s=this.sites){return this.sortProperty=e,this.isAsc=!this.isAsc,this.sortIcon=this.isAsc?"fa-solid fa-arrow-down-short-wide":"fa-solid fa-arrow-down-wide-short","nom"===e&&s.sort(this.isAsc?(o,a)=>o.nom>a.nom?1:a.nom>o.nom?-1:0:(o,a)=>o.nom>a.nom?-1:a.nom>o.nom?1:0),"pays"===e&&s.sort(this.isAsc?(o,a)=>o.pays>a.pays?1:a.pays>o.pays?-1:0:(o,a)=>o.pays>a.pays?-1:a.pays>o.pays?1:0),"zone"===e&&s.sort(this.isAsc?(o,a)=>{var f,C,b,T;return(null===(f=o.zone)||void 0===f?void 0:f.nom)>(null===(C=a.zone)||void 0===C?void 0:C.nom)?1:(null===(b=a.zone)||void 0===b?void 0:b.nom)>(null===(T=o.zone)||void 0===T?void 0:T.nom)?-1:0}:(o,a)=>{var f,C,b,T;return(null===(f=o.zone)||void 0===f?void 0:f.nom)>(null===(C=a.zone)||void 0===C?void 0:C.nom)?-1:(null===(b=a.zone)||void 0===b?void 0:b.nom)>(null===(T=o.zone)||void 0===T?void 0:T.nom)?1:0}),"description"===e&&s.sort(this.isAsc?(o,a)=>o.description>a.description?1:a.description>o.description?-1:0:(o,a)=>o.description>a.description?-1:a.description>o.description?1:0),s}get formSiteControl(){return this.formSite.controls}confirm(e,s){this.confirmationService.confirm({target:e.target,message:"\xcates vous sures de vouloir continuer ?",icon:"pi pi-question",acceptLabel:"Oui",rejectLabel:"Non",accept:()=>{this.deleteSite(s)},reject:()=>{this.messageService.add({severity:"error",summary:"Non",detail:"vous avez annul\xe9 la suppresion"})}})}handleSearchValue(e){if(this.searchValue=e.target.value,""!==this.searchValue){let o=this.searchSites.map(a=>a.nom).filter(a=>a.toLowerCase().indexOf(this.searchValue.toLowerCase()+"")>-1);if(0===o.length)this.sites=[];else{let a=[];for(let f=0;f<o.length;f++){const C=o[f];let b=this.searchSites.filter(T=>T.nom.indexOf(""+C)>-1);a.push(...b)}this.sites=a}}else this.sites=this.searchSites}handlePageSize(e){this.page=1,this.getSites()}next(){this.page++,this.getSites()}previous(){this.page--,this.getSites()}getSites(){this.siteSrv.liste().subscribe({next:e=>{e=this.sort("nom",e),this.searchSites=[],this.searchSites=e,this.sites=e.map((s,o)=>Object.assign({id:o+1},s)).slice((this.page-1)*this.pageSize,(this.page-1)*this.pageSize+this.pageSize),this.collectionSize=e.length,this.nbrOfPage=Math.ceil(e.length/this.pageSize)},error:e=>{console.log("error: ",e)}})}getSitesByZone(e){this.siteSrv.allByZone(e).subscribe({next:s=>{s=this.sort("nom",s),this.searchSites=[],this.searchSites=s,this.sites=s.map((o,a)=>Object.assign({id:a+1},o)).slice((this.page-1)*this.pageSize,(this.page-1)*this.pageSize+this.pageSize),this.collectionSize=s.length,this.nbrOfPage=Math.ceil(s.length/this.pageSize)},error:s=>{console.log("error: ",s)}})}viewSite(e="data"){"data"===e?(this.site=new d.T,this.isFormSite=!1):(this.isFormSite=!0,this.compte.role==m.u.SUPER_ADMIN?this.getZones():this.getZonesById(this.compte.idZone))}getZones(){this.zoneSrv.liste().subscribe({next:e=>{this.zones=e},error:e=>{console.log("error: ",e)}})}getZonesById(e){this.zoneSrv.getOne(e).subscribe({next:s=>{this.zones=[s]},error:s=>{console.log("error: ",s)}})}updateSite(e){this.isFormSite=!0,this.site=e,this.formSite.setValue({nom:e.nom,zone_id:e.zoneid,description:e.description,msgPaiement:e.msgPaiement,indicatif:e.indicatif,pays:e.pays})}createOrUpdateSite(){var e;let s=new v.l;if(null===(e=this.site)||void 0===e?void 0:e.id){let o=Object.assign({},this.formSite.value);delete o.zone_id,o=Object.assign(Object.assign({},o),{zoneid:parseInt(this.formSite.value.zone_id,10)}),this.siteSrv.update(Object.assign(Object.assign({},o),{image:this.site.image,zone:s,id:this.site.id})).subscribe({next:a=>{this.getSites(),this.site=new d.T,this.formSite.reset(),this.isFormSite=!1,this.messageService.add({severity:"success",summary:"Modification de site",detail:"Modification effectu\xe9e avec success"})},error:a=>{this.messageService.add({severity:"error",summary:"Erreur de modification",detail:a.message}),console.log("Error: ",a)}})}else{let o=Object.assign({},this.formSite.value);delete o.zone_id,o=Object.assign(Object.assign({},o),{zoneid:parseInt(this.formSite.value.zone_id,10)}),this.siteSrv.create(Object.assign(Object.assign({},o),{zone:s})).subscribe({next:a=>{this.getSites(),this.site=new d.T,this.formSite.reset(),this.messageService.add({severity:"success",summary:"Cr\xe9ation de site",detail:"Cr\xe9ation effectu\xe9e avec success"}),this.isFormSite=!1},error:a=>{this.messageService.add({severity:"error",summary:"Erreur de creation",detail:a.message}),console.log("Error: ",a)}})}}deleteSite(e){this.siteSrv.delete(e||0).subscribe({next:s=>{this.getSites(),this.messageService.add({severity:"success",summary:"Suppression de site ",detail:"Suppression effectu\xe9e avec success"})},error:s=>{console.log("Error: ",s),this.messageService.add({severity:"error",summary:"Erreur de suppression",detail:s.message})}})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(U.YP),t.Y36(M.P),t.Y36(O.V),t.Y36(J.b),t.Y36(U.ez))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-site-page"]],decls:5,vars:2,consts:[["class","site-page page-content",4,"ngIf","ngIfElse"],["addSite",""],[1,"site-page","page-content"],[1,"page-title"],[1,"card"],[1,"header"],[1,"title"],[1,"btn","btn-danger",3,"click"],[1,"line"],[1,"table-content"],[1,"search-content"],[1,"select-page-size"],["name","page-size","id","page-size",3,"ngModel","change","ngModelChange"],["value","10"],["value","25"],["value","50"],["value","100"],[1,"search_value"],["type","text","name","value","id","value",3,"ngModel","ngModelChange","keyup"],["class","fa fa-close pull-right",3,"click",4,"ngIf"],[1,"row"],["id","table"],[3,"ngClass","click"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"pagination_content"],[1,"pagination"],["class","paginate_button previous disabled","id","datatable-responsive_previous",4,"ngIf"],[1,"paginate_button","active"],["aria-controls","datatable-responsive","data-dt-idx","1","tabindex","0"],["class","paginate_button next disabled","id","datatable-responsive_next",4,"ngIf"],[1,"fa","fa-close","pull-right",3,"click"],[1,"btn",3,"click"],[1,"fa-solid","fa-pencil"],[1,"btn","mt-2",3,"click"],[1,"fa-solid","fa-trash"],["colspan","5"],[1,"vh-center"],["id","datatable-responsive_previous",1,"paginate_button","previous","disabled"],["aria-controls","datatable-responsive","data-dt-idx","0","tabindex","0",3,"click"],["id","datatable-responsive_next",1,"paginate_button","next","disabled"],["aria-controls","datatable-responsive","data-dt-idx","2","tabindex","0",3,"click"],["src","/assets/icons/undo-outline.svg","alt","","srcset","",1,"icon",3,"click"],[1,"pi","pi-angle-right"],[1,"form",3,"formGroup","ngSubmit"],[1,"main",2,"height","25em"],[1,"form-group"],["for",""],["formControlName","zone_id",3,"ngClass"],["value",""],[3,"value",4,"ngFor","ngForOf"],["class","alert",4,"ngIf"],["type","text","formControlName","nom",3,"ngClass"],["formControlName","description","id","","rows","4",3,"ngClass"],["formControlName","msgPaiement","id","","rows","4",3,"ngClass"],["type","text","formControlName","pays",3,"ngClass"],["type","text","formControlName","indicatif",3,"ngClass"],[1,"footer"],[1,"btn-group"],["type","submit",1,"btn","btn-info",3,"disabled"],["type","reset",1,"btn","btn-danger",3,"click"],[3,"value"],[1,"alert"]],template:function(e,s){if(1&e&&(t.YNc(0,w,66,35,"section",0),t.YNc(1,it,58,28,"ng-template",null,1,t.W1O),t._UZ(3,"p-toast")(4,"p-confirmPopup")),2&e){const o=t.MAs(2);t.Q6J("ngIf",!s.isFormSite)("ngIfElse",o)}},directives:[h.O5,p.EJ,p.JJ,p.On,p.YN,p.Kr,p.Fj,h.mk,h.sg,p._Y,p.JL,p.sg,p.u,q.FN,z.P],encapsulation:2}),i})();var L=c(437);const ot=[{path:"",component:nt,canActivate:[L.u]}];let st=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[L.u],imports:[[P.Bz.forChild(ot)],P.Bz]}),i})();var rt=c(520);let at=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[h.ez,st,S.U$,n.hJ,U.m8,p.u5,rt.JF,z.n,q.EV,p.UX]]}),i})()},7307:(N,A,c)=>{c.d(A,{P:()=>q,n:()=>z});var n=c(7587),S=c(9808),h=c(9783),P=c(845),p=c(5921),d=c(1777),v=c(5730);function m(u,x){if(1&u&&n._UZ(0,"i",8),2&u){const r=n.oxw(2);n.Tol(r.confirmation.icon),n.Q6J("ngClass","p-confirm-popup-icon")}}function t(u,x){if(1&u){const r=n.EpF();n.TgZ(0,"button",9),n.NdJ("click",function(){return n.CHM(r),n.oxw(2).reject()}),n.qZA()}if(2&u){const r=n.oxw(2);n.Tol(r.confirmation.rejectButtonStyleClass||"p-button-text"),n.Q6J("icon",r.confirmation.rejectIcon)("label",r.rejectButtonLabel)("ngClass","p-confirm-popup-reject p-button-sm"),n.uIk("aria-label",r.rejectButtonLabel)}}function U(u,x){if(1&u){const r=n.EpF();n.TgZ(0,"button",9),n.NdJ("click",function(){return n.CHM(r),n.oxw(2).accept()}),n.qZA()}if(2&u){const r=n.oxw(2);n.Tol(r.confirmation.acceptButtonStyleClass),n.Q6J("icon",r.confirmation.acceptIcon)("label",r.acceptButtonLabel)("ngClass","p-confirm-popup-accept p-button-sm"),n.uIk("aria-label",r.acceptButtonLabel)}}const M=function(u,x){return{showTransitionParams:u,hideTransitionParams:x}},O=function(u){return{value:"open",params:u}};function J(u,x){if(1&u){const r=n.EpF();n.TgZ(0,"div",1),n.NdJ("click",function(g){return n.CHM(r),n.oxw().onOverlayClick(g)})("@animation.start",function(g){return n.CHM(r),n.oxw().onAnimationStart(g)})("@animation.done",function(g){return n.CHM(r),n.oxw().onAnimationEnd(g)}),n.TgZ(1,"div",2,3),n.YNc(3,m,1,3,"i",4),n.TgZ(4,"span",5),n._uU(5),n.qZA()(),n.TgZ(6,"div",6),n.YNc(7,t,1,6,"button",7),n.YNc(8,U,1,6,"button",7),n.qZA()()}if(2&u){const r=n.oxw();n.Tol(r.styleClass),n.Q6J("ngClass","p-confirm-popup p-component")("ngStyle",r.style)("@animation",n.VKq(12,O,n.WLB(9,M,r.showTransitionOptions,r.hideTransitionOptions))),n.xp6(3),n.Q6J("ngIf",r.confirmation.icon),n.xp6(2),n.Oqu(r.confirmation.message),n.xp6(2),n.Q6J("ngIf",!1!==r.confirmation.rejectVisible),n.xp6(1),n.Q6J("ngIf",!1!==r.confirmation.acceptVisible)}}let q=(()=>{class u{constructor(r,_,g,Z,y,w){this.el=r,this.confirmationService=_,this.renderer=g,this.cd=Z,this.config=y,this.overlayService=w,this.defaultFocus="accept",this.showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)",this.hideTransitionOptions=".1s linear",this.autoZIndex=!0,this.baseZIndex=0,this.subscription=this.confirmationService.requireConfirmation$.subscribe(E=>{E?E.key===this.key&&(this.confirmation=E,this.confirmation.accept&&(this.confirmation.acceptEvent=new n.vpe,this.confirmation.acceptEvent.subscribe(this.confirmation.accept)),this.confirmation.reject&&(this.confirmation.rejectEvent=new n.vpe,this.confirmation.rejectEvent.subscribe(this.confirmation.reject)),this.visible=!0):this.hide()})}get visible(){return this._visible}set visible(r){this._visible=r,this.cd.markForCheck()}onAnimationStart(r){if("open"===r.toState){this.container=r.element,document.body.appendChild(this.container),this.align(),this.bindListeners();const _=this.getElementToFocus();_&&_.focus()}}onAnimationEnd(r){"void"===r.toState&&this.onContainerDestroy()}getElementToFocus(){switch(this.defaultFocus){case"accept":return v.p.findSingle(this.container,".p-confirm-popup-accept");case"reject":return v.p.findSingle(this.container,".p-confirm-popup-reject");case"none":return null}}align(){this.autoZIndex&&p.P9.set("overlay",this.container,this.config.zIndex.overlay),v.p.absolutePosition(this.container,this.confirmation.target);const r=v.p.getOffset(this.container),_=v.p.getOffset(this.confirmation.target);let g=0;r.left<_.left&&(g=_.left-r.left),this.container.style.setProperty("--overlayArrowLeft",`${g}px`),r.top<_.top&&v.p.addClass(this.container,"p-confirm-popup-flipped")}hide(){this.visible=!1}accept(){this.confirmation.acceptEvent&&this.confirmation.acceptEvent.emit(),this.hide()}reject(){this.confirmation.rejectEvent&&this.confirmation.rejectEvent.emit(),this.hide()}onOverlayClick(r){this.overlayService.add({originalEvent:r,target:this.el.nativeElement})}bindListeners(){this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener()}unbindListeners(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}bindDocumentClickListener(){if(!this.documentClickListener){let r=v.p.isIOS()?"touchstart":"click";const _=this.el?this.el.nativeElement.ownerDocument:document;this.documentClickListener=this.renderer.listen(_,r,g=>{let Z=this.confirmation.target;this.container!==g.target&&!this.container.contains(g.target)&&Z!==g.target&&!Z.contains(g.target)&&this.hide()})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}onWindowResize(){this.hide()}bindDocumentResizeListener(){this.documentResizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.documentResizeListener)}unbindDocumentResizeListener(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new v.V(this.confirmation.target,()=>{this.visible&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unsubscribeConfirmationSubscriptions(){this.confirmation&&(this.confirmation.acceptEvent&&this.confirmation.acceptEvent.unsubscribe(),this.confirmation.rejectEvent&&this.confirmation.rejectEvent.unsubscribe())}onContainerDestroy(){this.unbindListeners(),this.unsubscribeConfirmationSubscriptions(),this.autoZIndex&&p.P9.clear(this.container),this.confirmation=null,this.container=null}restoreAppend(){this.container&&document.body.removeChild(this.container),this.onContainerDestroy()}get acceptButtonLabel(){return this.confirmation.acceptLabel||this.config.getTranslation(h.ws.ACCEPT)}get rejectButtonLabel(){return this.confirmation.rejectLabel||this.config.getTranslation(h.ws.REJECT)}ngOnDestroy(){this.restoreAppend(),this.subscription&&this.subscription.unsubscribe()}}return u.\u0275fac=function(r){return new(r||u)(n.Y36(n.SBq),n.Y36(h.YP),n.Y36(n.Qsj),n.Y36(n.sBO),n.Y36(h.b4),n.Y36(h.F0))},u.\u0275cmp=n.Xpm({type:u,selectors:[["p-confirmPopup"]],hostAttrs:[1,"p-element"],inputs:{key:"key",defaultFocus:"defaultFocus",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",style:"style",styleClass:"styleClass",visible:"visible"},decls:1,vars:1,consts:[[3,"ngClass","ngStyle","class","click",4,"ngIf"],[3,"ngClass","ngStyle","click"],[1,"p-confirm-popup-content"],["content",""],[3,"ngClass","class",4,"ngIf"],[1,"p-confirm-popup-message"],[1,"p-confirm-popup-footer"],["type","button","pButton","",3,"icon","label","ngClass","class","click",4,"ngIf"],[3,"ngClass"],["type","button","pButton","",3,"icon","label","ngClass","click"]],template:function(r,_){1&r&&n.YNc(0,J,9,14,"div",0),2&r&&n.Q6J("ngIf",_.visible)},directives:[S.O5,S.mk,S.PC,P.Hq],styles:['.p-confirm-popup{position:absolute;margin-top:10px;top:0;left:0}.p-confirm-popup-flipped{margin-top:0;margin-bottom:10px}.p-confirm-popup:after,.p-confirm-popup:before{bottom:100%;left:calc(var(--overlayArrowLeft, 0) + 1.25rem);content:" ";height:0;width:0;position:absolute;pointer-events:none}.p-confirm-popup:after{border-width:8px;margin-left:-8px}.p-confirm-popup:before{border-width:10px;margin-left:-10px}.p-confirm-popup-flipped:after,.p-confirm-popup-flipped:before{bottom:auto;top:100%}.p-confirm-popup.p-confirm-popup-flipped:after{border-bottom-color:transparent}.p-confirm-popup.p-confirm-popup-flipped:before{border-bottom-color:transparent}.p-confirm-popup .p-confirm-popup-content{display:flex;align-items:center}\n'],encapsulation:2,data:{animation:[(0,d.X$)("animation",[(0,d.SB)("void",(0,d.oB)({transform:"scaleY(0.8)",opacity:0})),(0,d.SB)("open",(0,d.oB)({transform:"translateY(0)",opacity:1})),(0,d.eR)("void => open",(0,d.jt)("{{showTransitionParams}}")),(0,d.eR)("open => void",(0,d.jt)("{{hideTransitionParams}}"))])]},changeDetection:0}),u})(),z=(()=>{class u{}return u.\u0275fac=function(r){return new(r||u)},u.\u0275mod=n.oAB({type:u}),u.\u0275inj=n.cJS({imports:[[S.ez,P.hJ]]}),u})()}}]);