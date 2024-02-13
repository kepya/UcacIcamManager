"use strict";(self.webpackChunkadmin_ucac_dashboard=self.webpackChunkadmin_ucac_dashboard||[]).push([[169],{6169:(y,C,r)=>{r.r(C),r.d(C,{GestionAdmissibiliteModule:()=>w});var h=r(9808),d=r(7671),g=r(5193),m=r(7231),f=r(4327),e=r(7587),Z=r(9930),c=r(3270),p=r(2042),O=r(3149),A=r(5119),S=r(7755),v=r(9783),u=r(2382),T=r(7773),E=r(7307);function G(o,a){if(1&o&&(e.TgZ(0,"option",40),e._uU(1),e.qZA()),2&o){const i=a.$implicit;e.Q6J("value",i.id),e.xp6(1),e.Oqu(i.nom)}}function M(o,a){if(1&o){const i=e.EpF();e.TgZ(0,"select",39),e.NdJ("change",function(n){return e.CHM(i),e.oxw().handleZoneSelect(n)}),e.TgZ(1,"option",40),e._uU(2,"Select zones"),e.qZA(),e.YNc(3,G,2,2,"option",41),e.qZA()}if(2&o){const i=e.oxw();e.xp6(3),e.Q6J("ngForOf",i.zones)}}function P(o,a){if(1&o&&(e.TgZ(0,"option",40),e._uU(1),e.qZA()),2&o){const i=a.$implicit;e.Q6J("value",i.id),e.xp6(1),e.Oqu(i.nom)}}function B(o,a){if(1&o){const i=e.EpF();e.TgZ(0,"select",39),e.NdJ("change",function(n){return e.CHM(i),e.oxw().handleSiteSelect(n)}),e.YNc(1,P,2,2,"option",41),e.qZA()}if(2&o){const i=e.oxw();e.xp6(1),e.Q6J("ngForOf",i.sites)}}function J(o,a){if(1&o&&(e.TgZ(0,"option",40),e._uU(1),e.qZA()),2&o){const i=a.$implicit;e.Q6J("value",i.id),e.xp6(1),e.Oqu(i.nom)}}function I(o,a){if(1&o){const i=e.EpF();e.TgZ(0,"select",39),e.NdJ("change",function(n){return e.CHM(i),e.oxw().handleCentreSelect(n)}),e.YNc(1,J,2,2,"option",41),e.qZA()}if(2&o){const i=e.oxw();e.xp6(1),e.Q6J("ngForOf",i.centres)}}function N(o,a){if(1&o){const i=e.EpF();e.TgZ(0,"i",42),e.NdJ("click",function(){return e.CHM(i),e.oxw().searchValue=""}),e.qZA()}}function F(o,a){if(1&o){const i=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"input",43),e.NdJ("change",function(n){const l=e.CHM(i).$implicit;return e.oxw().validateAdmissibilityOfCandidats(n,l)}),e.qZA()(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA()()}if(2&o){const i=a.$implicit;e.xp6(4),e.Oqu(null==i?null:i.code_examen),e.xp6(2),e.Oqu(null==i?null:i.cycle),e.xp6(2),e.Oqu(null==i?null:i.centre),e.xp6(2),e.lnq("",null==i?null:i.formation1,", ",i.formation2,", ",i.formation3,""),e.xp6(2),e.Oqu(null==i?null:i.statut)}}function q(o,a){1&o&&(e.TgZ(0,"tr")(1,"td",44)(2,"span",45),e._uU(3," Aucune candidatures trouv\xe9s avec ces lettres dans son nom "),e.qZA()()())}function L(o,a){1&o&&(e.TgZ(0,"tr")(1,"td",44)(2,"span",45),e._uU(3," Aucune candidatures presents dans la base "),e.qZA()()())}function D(o,a){if(1&o){const i=e.EpF();e.TgZ(0,"li",46)(1,"a",47),e.NdJ("click",function(){return e.CHM(i),e.oxw().previous()}),e._uU(2,"Pr\xe9cedent"),e.qZA()()}}function Y(o,a){if(1&o){const i=e.EpF();e.TgZ(0,"li",48)(1,"a",49),e.NdJ("click",function(){return e.CHM(i),e.oxw().next()}),e._uU(2,"Suivant"),e.qZA()()}}const b=function(o){return{bold:o}};let R=(()=>{class o{constructor(i,t,n,s,l,_,x,U){this.candidatureSrv=i,this.storageService=t,this.siteSrv=n,this.exportExcelService=s,this.centreSrv=l,this.zoneService=_,this.messageService=x,this.confirmationService=U,this.candidatures=[],this.admissiblesCandidats=[],this.searchCandidatures=[],this.loading=!1,this.zones=[],this.sites=[],this.centres=[]}ngOnInit(){this.sortProperty="code_examen",this.sortIcon="fa-solid fa-arrow-down-short-wide",this.downUpIcon="pi pi-sort-alt",this.pageSize=10,this.page=1,this.compte=this.storageService.getUserConnected(),this.getZonesOfUser()}sort(i,t=this.candidatures){return this.sortProperty=i,this.isAsc=!this.isAsc,this.sortIcon=this.isAsc?"fa-solid fa-arrow-down-short-wide":"fa-solid fa-arrow-down-wide-short","nom"===i&&t.sort(this.isAsc?(n,s)=>n.compte.name>s.compte.name?1:s.compte.name>n.compte.name?-1:0:(n,s)=>n.compte.name>s.compte.name?-1:s.compte.name>n.compte.name?1:0),"prenom"===i&&t.sort(this.isAsc?(n,s)=>n.compte.prenom>s.compte.prenom?1:s.compte.prenom>n.compte.prenom?-1:0:(n,s)=>n.compte.prenom>s.compte.prenom?-1:s.compte.prenom>n.compte.prenom?1:0),"statut"===i&&t.sort(this.isAsc?(n,s)=>n.statut>s.statut?1:s.statut>n.statut?-1:0:(n,s)=>n.statut>s.statut?-1:s.statut>n.statut?1:0),"nationalite"===i&&t.sort(this.isAsc?(n,s)=>n.nationalite>s.nationalite?1:s.nationalite>n.nationalite?-1:0:(n,s)=>n.nationalite>s.nationalite?-1:s.nationalite>n.nationalite?1:0),"photo"===i&&t.sort(this.isAsc?(n,s)=>n.image>s.image?1:s.image>n.image?-1:0:(n,s)=>n.image>s.image?-1:s.image>n.image?1:0),t}exportToExcel(){this.loading=!0,this.exportExcelService.downloadCandidatureExcel().subscribe(i=>{const t=new Blob([i],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),n=window.URL.createObjectURL(t),s=document.createElement("a");s.href=n,s.download="data.xlsx",s.click(),window.URL.revokeObjectURL(n),this.loading=!1})}handlePageSize(i){var t,n,s;this.page=1,"centre"==this.actifOption&&this.getCandidaturesByCentre(null!==(t=this.centre.id)&&void 0!==t?t:0),"site"==this.actifOption&&this.getCandidaturesBySite(null!==(n=this.site.id)&&void 0!==n?n:0),"zone"==this.actifOption&&this.getCandidaturesByZone(null!==(s=this.zone.id)&&void 0!==s?s:0)}handleCategorieSelect(i){this.compte.role==g.u.SUPER_ADMIN&&("centre"==i.target.value&&this.getCentres(),"site"==i.target.value&&this.getSites())}handleZoneSelect(i){var t;this.zone=this.zones.find(n=>n.id==i.target.value),this.getCandidaturesByZone(null!==(t=i.target.value)&&void 0!==t?t:0)}handleCentreSelect(i){var t;this.centre=this.centres.find(n=>n.id==i.target.value),this.getCandidaturesByCentre(null!==(t=i.target.value)&&void 0!==t?t:0)}handleSiteSelect(i){var t;this.site=this.sites.find(n=>n.id==i.target.value),this.getCandidaturesBySite(null!==(t=i.target.value)&&void 0!==t?t:0)}handleSearchValue(i){if(this.searchValue=i.target.value,""!==this.searchValue){let n=this.searchCandidatures.map(s=>s.compte.name).filter(s=>s.toLowerCase().indexOf(this.searchValue.toLowerCase()+"")>-1);if(0===n.length)this.candidatures=[];else{let s=[];for(let l=0;l<n.length;l++){const _=n[l];let x=this.searchCandidatures.filter(U=>U.compte.name.indexOf(""+_)>-1);s.push(...x)}this.candidatures=s}}else this.candidatures=this.searchCandidatures}next(){var i,t,n;this.page++,"centre"==this.actifOption&&this.getCandidaturesByCentre(null!==(i=this.centre.id)&&void 0!==i?i:0),"site"==this.actifOption&&this.getCandidaturesBySite(null!==(t=this.site.id)&&void 0!==t?t:0),"zone"==this.actifOption&&this.getCandidaturesByZone(null!==(n=this.zone.id)&&void 0!==n?n:0)}previous(){var i,t,n;this.page--,"centre"==this.actifOption&&this.getCandidaturesByCentre(null!==(i=this.centre.id)&&void 0!==i?i:0),"site"==this.actifOption&&this.getCandidaturesBySite(null!==(t=this.site.id)&&void 0!==t?t:0),"zone"==this.actifOption&&this.getCandidaturesByZone(null!==(n=this.zone.id)&&void 0!==n?n:0)}getCandidaturesByZone(i){this.actifOption="zone",this.candidatureSrv.allByZone(i).subscribe({next:t=>{t=t.filter(n=>n.statut.toString()==m.d.Echec.toString()),console.log("candidatures: ",t),t=this.sort("nom",t),this.searchCandidatures=[],this.searchCandidatures=t,this.candidatures=t.map((n,s)=>Object.assign({id:s+1},n)).slice((this.page-1)*this.pageSize,(this.page-1)*this.pageSize+this.pageSize),console.log("c: ",t),console.log("candidatures: ",t),this.collectionSize=t.length,this.nbrOfPage=Math.ceil(t.length/this.pageSize)},error:t=>{console.log("error: ",t)}})}getCandidaturesByCentre(i){this.actifOption="centre",this.candidatureSrv.allByCentre(i).subscribe({next:t=>{t=t.filter(n=>n.statut.toString()==m.d.Echec.toString()),t=this.sort("nom",t),this.searchCandidatures=[],this.searchCandidatures=t,this.candidatures=t.map((n,s)=>Object.assign({id:s+1},n)).slice((this.page-1)*this.pageSize,(this.page-1)*this.pageSize+this.pageSize),this.collectionSize=t.length,this.nbrOfPage=Math.ceil(t.length/this.pageSize)},error:t=>{console.log("error: ",t)}})}getCandidaturesBySite(i){this.actifOption="site",this.candidatureSrv.allBySite(i).subscribe({next:t=>{t=t.filter(n=>n.statut.toString()==m.d.Echec.toString()),t=this.sort("nom",t),this.searchCandidatures=[],this.searchCandidatures=t,this.candidatures=t.map((n,s)=>Object.assign({id:s+1},n)).slice((this.page-1)*this.pageSize,(this.page-1)*this.pageSize+this.pageSize),this.collectionSize=t.length,this.nbrOfPage=Math.ceil(t.length/this.pageSize)},error:t=>{console.log("error: ",t)}})}getZonesOfUser(){var i;this.compte.role==g.u.SUPER_ADMIN&&this.zoneService.liste().subscribe({next:t=>{var n,s,l;this.zone=t[0],this.zones=t,this.getCandidaturesByZone(null!==(n=this.zone.id)&&void 0!==n?n:0),this.getSitesByZone(null!==(s=this.zone.id)&&void 0!==s?s:0),this.getCentreByZone(null!==(l=this.zone.id)&&void 0!==l?l:0)},error:t=>{console.log("error: ",t)}}),(this.compte.role==g.u.ADMIN||this.compte.role==g.u.JURY)&&this.zoneService.getOne(null!==(i=this.compte.idZone)&&void 0!==i?i:0).subscribe({next:t=>{var n,s,l;this.zone=t,this.zones=[t],this.getCandidaturesByZone(null!==(n=t.id)&&void 0!==n?n:0),this.getSitesByZone(null!==(s=t.id)&&void 0!==s?s:0),this.getCentreByZone(null!==(l=t.id)&&void 0!==l?l:0)},error:t=>{console.log("error: ",t)}})}getCentreByZone(i){this.centreSrv.allByZone(i).subscribe({next:t=>{this.centres=t},error:t=>{console.log("error: ",t)}})}getSitesByZone(i){this.siteSrv.allByZone(i).subscribe({next:t=>{this.sites=t},error:t=>{console.log("error: ",t)}})}getCentres(){this.centreSrv.liste().subscribe({next:i=>{this.centres=i},error:i=>{console.log("error: ",i)}})}getSites(){this.siteSrv.liste().subscribe({next:i=>{this.sites=i},error:i=>{console.log("error: ",i)}})}downloadAdmissibleCandidatureFile(){var i,t,n;"centre"==this.actifOption&&this.candidatureSrv.downloadAdmissibleCandidatureFileByCentre(null!==(i=this.centre.id)&&void 0!==i?i:0).subscribe({next:s=>{(0,f.saveAs)(s,"liste_candidat_admissible_centre_"+this.centre.id+".xlsx")},error:s=>{console.log("error: ",s)}}),"site"==this.actifOption&&this.candidatureSrv.downloadAdmissibleCandidatureFileBySite(null!==(t=this.site.id)&&void 0!==t?t:0).subscribe({next:s=>{(0,f.saveAs)(s,"liste_candidat_admissible_site_"+this.site.id+".xlsx")},error:s=>{console.log("error: ",s)}}),"zone"==this.actifOption&&this.candidatureSrv.downloadAdmissibleCandidatureFileByZone(null!==(n=this.zone.id)&&void 0!==n?n:0).subscribe({next:s=>{(0,f.saveAs)(s,"liste_candidat_admissible_zone_"+this.zone.id+".xlsx")},error:s=>{console.log("error: ",s)}})}validateAdmissibilityOfCandidats(i,t){if(i.target.checked)this.admissiblesCandidats.push(t);else{let n=this.admissiblesCandidats.findIndex(s=>s.id==t.id);n>-1&&this.admissiblesCandidats.splice(n)}}validateAdmissibleCandidats(){for(let i=0;i<this.admissiblesCandidats.length;i++){const t=this.admissiblesCandidats[i];t.statut=m.d.Admissible,this.candidatureSrv.update(t.id||0,t).subscribe({next:n=>{var s,l,_;this.messageService.add({severity:"success",summary:"Pass\xe9 en admissible",detail:"Le candidat "+t.compte.name+" est pass\xe9 en admissible"}),"centre"==this.actifOption&&this.getCandidaturesByCentre(null!==(s=this.centre.id)&&void 0!==s?s:0),"site"==this.actifOption&&this.getCandidaturesBySite(null!==(l=this.site.id)&&void 0!==l?l:0),"zone"==this.actifOption&&this.getCandidaturesByZone(null!==(_=this.zone.id)&&void 0!==_?_:0)},error:n=>{console.log("error: ",n)}})}}confirm(i){this.confirmationService.confirm({target:i.target,message:"\xcates vous sures de vouloir continuer ?",icon:"pi pi-question",acceptLabel:"Oui",rejectLabel:"Non",accept:()=>{this.validateAdmissibleCandidats()},reject:()=>{this.messageService.add({severity:"error",summary:"Non",detail:"vous avez annul\xe9 la validation"})}})}}return o.\u0275fac=function(i){return new(i||o)(e.Y36(Z.u),e.Y36(c.V),e.Y36(p.P),e.Y36(O.O),e.Y36(A.T),e.Y36(S.b),e.Y36(v.ez),e.Y36(v.YP))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-gestion-admissibilite"]],decls:92,vars:45,consts:[[1,"Candidature-page","page-content"],[1,"page-title"],[1,"pi","pi-angle-right"],[1,"card"],[1,"header"],[1,"title"],[1,"btn","btn-danger",3,"click"],[1,"btn","btn-primary",3,"click"],[1,"line"],[1,"table-content"],[1,"search-content"],[1,"select-page-size"],["name","page-size","id","page-size",3,"ngModel","change","ngModelChange"],["value","10"],["value","25"],["value","50"],["value","100"],[1,"search"],[1,"select-item"],[1,"label"],[1,"form","form-control",3,"ngModel","ngModelChange","change"],["value","centre"],["value","site"],["value","zone"],["class","form form-control",3,"change",4,"ngIf"],[1,"search_value"],["type","text","name","value","id","value",3,"ngModel","ngModelChange","keyup"],["class","fa fa-close pull-right",3,"click",4,"ngIf"],[1,"row"],["id","table"],[3,"ngClass","click"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"pagination_content"],[1,"pagination"],["class","paginate_button previous disabled","id","datatable-responsive_previous",4,"ngIf"],[1,"paginate_button","active"],["aria-controls","datatable-responsive","data-dt-idx","1","tabindex","0"],["class","paginate_button next disabled","id","datatable-responsive_next",4,"ngIf"],[1,"form","form-control",3,"change"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],[1,"fa","fa-close","pull-right",3,"click"],["type","checkbox","name","validate",1,"checkbox",3,"change"],["colspan","9"],[1,"vh-center"],["id","datatable-responsive_previous",1,"paginate_button","previous","disabled"],["aria-controls","datatable-responsive","data-dt-idx","0","tabindex","0",3,"click"],["id","datatable-responsive_next",1,"paginate_button","next","disabled"],["aria-controls","datatable-responsive","data-dt-idx","2","tabindex","0",3,"click"]],template:function(i,t){1&i&&(e.TgZ(0,"section",0)(1,"h1",1),e._uU(2," Candidatures "),e._UZ(3,"i",2),e._uU(4," Gestion d'admissibilit\xe9"),e.qZA(),e.TgZ(5,"div",3)(6,"div",4)(7,"h3",5),e._uU(8,"Liste des candidatures et notes associ\xe9es"),e.qZA(),e.TgZ(9,"div")(10,"button",6),e.NdJ("click",function(){return t.downloadAdmissibleCandidatureFile()}),e._uU(11," Exporter la liste des canditats "),e.qZA(),e._uU(12," \xa0 "),e.TgZ(13,"button",7),e.NdJ("click",function(s){return t.confirm(s)}),e._uU(14," valider "),e.qZA()()(),e._UZ(15,"div",8),e.TgZ(16,"div",9)(17,"div",10)(18,"div",11)(19,"span"),e._uU(20,"Voir"),e.qZA(),e.TgZ(21,"select",12),e.NdJ("change",function(s){return t.handlePageSize(s)})("ngModelChange",function(s){return t.pageSize=s}),e.TgZ(22,"option",13),e._uU(23,"10"),e.qZA(),e.TgZ(24,"option",14),e._uU(25,"25"),e.qZA(),e.TgZ(26,"option",15),e._uU(27,"50"),e.qZA(),e.TgZ(28,"option",16),e._uU(29,"100"),e.qZA()(),e.TgZ(30,"span"),e._uU(31,"entr\xe9es"),e.qZA()(),e.TgZ(32,"div",17)(33,"div",18)(34,"span",19),e._uU(35,"Categories"),e.qZA(),e.TgZ(36,"select",20),e.NdJ("ngModelChange",function(s){return t.searchOption=s})("change",function(s){return t.handleCategorieSelect(s)}),e.TgZ(37,"option",21),e._uU(38,"Centre"),e.qZA(),e.TgZ(39,"option",22),e._uU(40,"Site"),e.qZA(),e.TgZ(41,"option",23),e._uU(42,"Zone"),e.qZA()(),e.YNc(43,M,4,1,"select",24),e.YNc(44,B,2,1,"select",24),e.YNc(45,I,2,1,"select",24),e.qZA(),e.TgZ(46,"div",25)(47,"span"),e._uU(48,"Rechercher"),e.qZA(),e.TgZ(49,"div")(50,"input",26),e.NdJ("ngModelChange",function(s){return t.searchValue=s})("keyup",function(s){return t.handleSearchValue(s)}),e.qZA(),e.YNc(51,N,1,0,"i",27),e.qZA()()()(),e.TgZ(52,"div",28)(53,"table",29)(54,"tr")(55,"th")(56,"div"),e._uU(57," D\xe9cision Admissibilit\xe9 "),e.qZA()(),e.TgZ(58,"th")(59,"div"),e._uU(60," Code d'examen "),e.TgZ(61,"i",30),e.NdJ("click",function(){return t.sort("code_examen")}),e.qZA()()(),e.TgZ(62,"th")(63,"div"),e._uU(64," Cycle "),e.TgZ(65,"i",30),e.NdJ("click",function(){return t.sort("cycle")}),e.qZA()()(),e.TgZ(66,"th")(67,"div"),e._uU(68," Centre d'examen "),e.TgZ(69,"i",30),e.NdJ("click",function(){return t.sort("centre")}),e.qZA()()(),e.TgZ(70,"th")(71,"div"),e._uU(72," Formations "),e.TgZ(73,"i",30),e.NdJ("click",function(){return t.sort("formation")}),e.qZA()()(),e.TgZ(74,"th")(75,"div"),e._uU(76," Etat "),e.TgZ(77,"i",30),e.NdJ("click",function(){return t.sort("statut")}),e.qZA()()()(),e.YNc(78,F,13,7,"tr",31),e.YNc(79,q,4,0,"tr",32),e.YNc(80,L,4,0,"tr",32),e.qZA()(),e.TgZ(81,"div",33)(82,"span"),e._uU(83),e.qZA(),e.TgZ(84,"ul",34),e.YNc(85,D,3,0,"li",35),e.TgZ(86,"li",36)(87,"a",37),e._uU(88,"1"),e.qZA()(),e.YNc(89,Y,3,0,"li",38),e.qZA()()()(),e._UZ(90,"p-toast")(91,"p-confirmPopup"),e.qZA()),2&i&&(e.xp6(21),e.Q6J("ngModel",t.pageSize),e.xp6(15),e.Q6J("ngModel",t.searchOption),e.xp6(7),e.Q6J("ngIf",t.searchOption&&"zone"==t.searchOption),e.xp6(1),e.Q6J("ngIf",t.searchOption&&"site"==t.searchOption),e.xp6(1),e.Q6J("ngIf",t.searchOption&&"centre"==t.searchOption),e.xp6(5),e.Q6J("ngModel",t.searchValue),e.xp6(1),e.Q6J("ngIf",t.searchValue),e.xp6(10),e.Gre("icon-sort ","code_examen"==t.sortProperty?t.sortIcon:t.downUpIcon,""),e.Q6J("ngClass",e.VKq(35,b,"code_examen"==t.sortProperty)),e.xp6(4),e.Gre("icon-sort ","cycle"==t.sortProperty?t.sortIcon:t.downUpIcon,""),e.Q6J("ngClass",e.VKq(37,b,"cycle"==t.sortProperty)),e.xp6(4),e.Gre("icon-sort ","centre"==t.sortProperty?t.sortIcon:t.downUpIcon,""),e.Q6J("ngClass",e.VKq(39,b,"centre"==t.sortProperty)),e.xp6(4),e.Gre("icon-sort ","formation"==t.sortProperty?t.sortIcon:t.downUpIcon,""),e.Q6J("ngClass",e.VKq(41,b,"formation"==t.sortProperty)),e.xp6(4),e.Gre("icon-sort ","statut"==t.sortProperty?t.sortIcon:t.downUpIcon,""),e.Q6J("ngClass",e.VKq(43,b,"statut"==t.sortProperty)),e.xp6(1),e.Q6J("ngForOf",t.candidatures),e.xp6(1),e.Q6J("ngIf",t.searchValue&&0===t.candidatures.length),e.xp6(1),e.Q6J("ngIf",!t.searchValue&&0===t.candidatures.length),e.xp6(3),e.lnq("Page ",t.page," sur ",t.nbrOfPage,", avec ",t.candidatures.length," entr\xe9es affich\xe9es"),e.xp6(2),e.Q6J("ngIf",t.page>1),e.xp6(4),e.Q6J("ngIf",t.page<t.nbrOfPage))},directives:[u.EJ,u.JJ,u.On,u.YN,u.Kr,h.O5,h.sg,u.Fj,h.mk,T.FN,E.P],encapsulation:2}),o})();var z=r(437);const Q=[{path:"",component:R,canActivate:[z.u]}];let k=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[z.u],imports:[[d.Bz.forChild(Q)],d.Bz]}),o})();var V=r(845);let w=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[h.ez,k,u.u5,T.EV,E.n,V.hJ]]}),o})()},437:(y,C,r)=>{r.d(C,{u:()=>c});var h=r(5193),d=r(7587),g=r(7671),m=r(3936),f=r(629),e=r(3270),Z=r(9783);let c=(()=>{class p{constructor(A,S,v,u,T){this.router=A,this.tokenService=S,this.authService=v,this.storageService=u,this.messageService=T}canActivate(A,S){let v=this.storageService.getUserTokenConnected();if(null!=v){let u=this.tokenService.decodeToken(v).scope;if(this.tokenService.isLogged()&&(u==h.u.ADMIN||u==h.u.SUPER_ADMIN||u==h.u.JURY))return this.authService.isLogin.next(!0),!0}return this.authService.isLogin.next(!1),this.messageService.add({severity:"error",summary:"Erreur de connexion",detail:"Veuillez les identifiants d'un administrateur ou bien d'un super admin pour y avoir acc\xe8ss \xe0 la plateforme"}),this.router.navigate(["login"]),!1}}return p.\u0275fac=function(A){return new(A||p)(d.LFG(g.F0),d.LFG(m.B),d.LFG(f.e),d.LFG(e.V),d.LFG(Z.ez))},p.\u0275prov=d.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},7755:(y,C,r)=>{r.d(C,{b:()=>f});var h=r(2340),d=r(7587),g=r(520),m=r(4920);let f=(()=>{class e{constructor(c,p){this.http=c,this.baseUrlSvr=p,this.url="",this.url=`${this.baseUrlSvr.getOrigin()}${h.N.administrationPath}`,this.url+="zone/"}liste(){return this.http.get(this.url+"all")}getOne(c){return this.http.get(this.url+c)}create(c){return this.http.post(this.url+"create",c)}update(c){return this.http.patch(this.url+(null==c?void 0:c.id),c)}delete(c){return this.http.delete(this.url+c)}}return e.\u0275fac=function(c){return new(c||e)(d.LFG(g.eN),d.LFG(m.x))},e.\u0275prov=d.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);