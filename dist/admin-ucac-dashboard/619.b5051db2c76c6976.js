"use strict";(self.webpackChunkadmin_ucac_dashboard=self.webpackChunkadmin_ucac_dashboard||[]).push([[619],{6169:(re,C,l)=>{l.r(C),l.d(C,{GestionAdmissibiliteModule:()=>oe});var p=l(9808),v=l(7671),b=l(4725),g=l(5193),h=l(7231),m=l(4327),O=l(1729),e=l(7587),x=l(9930),z=l(1303),U=l(2042),q=l(3149),G=l(5119),J=l(62),N=l(7755),Z=l(9783),A=l(845),u=l(2382),T=l(7773),S=l(7307),B=l(5515);function E(o,r){if(1&o&&(e.TgZ(0,"option",49),e._uU(1),e.qZA()),2&o){const n=r.$implicit;e.Q6J("value",n.id),e.xp6(1),e.Oqu(n.nom)}}function M(o,r){if(1&o){const n=e.EpF();e.TgZ(0,"select",48),e.NdJ("change",function(i){return e.CHM(n),e.oxw().handleZoneSelect(i)}),e.TgZ(1,"option",49),e._uU(2,"Select zones"),e.qZA(),e.YNc(3,E,2,2,"option",50),e.qZA()}if(2&o){const n=e.oxw();e.xp6(3),e.Q6J("ngForOf",n.zones)}}function P(o,r){if(1&o&&(e.TgZ(0,"option",49),e._uU(1),e.qZA()),2&o){const n=r.$implicit;e.Q6J("value",n.id),e.xp6(1),e.Oqu(n.nom)}}function I(o,r){if(1&o){const n=e.EpF();e.TgZ(0,"select",48),e.NdJ("change",function(i){return e.CHM(n),e.oxw().handleSiteSelect(i)}),e.YNc(1,P,2,2,"option",50),e.qZA()}if(2&o){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",n.sites)}}function w(o,r){if(1&o&&(e.TgZ(0,"option",49),e._uU(1),e.qZA()),2&o){const n=r.$implicit;e.Q6J("value",n.id),e.xp6(1),e.Oqu(n.nom)}}function F(o,r){if(1&o){const n=e.EpF();e.TgZ(0,"select",48),e.NdJ("change",function(i){return e.CHM(n),e.oxw().handleCentreSelect(i)}),e.YNc(1,w,2,2,"option",50),e.qZA()}if(2&o){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",n.centres)}}function Q(o,r){if(1&o){const n=e.EpF();e.TgZ(0,"select",48),e.NdJ("change",function(i){return e.CHM(n),e.oxw().handleSexeSelect(i)}),e.TgZ(1,"option",51),e._uU(2,"M"),e.qZA(),e.TgZ(3,"option",52),e._uU(4,"F"),e.qZA()()}}function k(o,r){if(1&o&&(e.TgZ(0,"option",49),e._uU(1),e.qZA()),2&o){const n=r.$implicit;e.Q6J("value",n),e.xp6(1),e.Oqu(n)}}function Y(o,r){if(1&o){const n=e.EpF();e.TgZ(0,"select",48),e.NdJ("change",function(i){return e.CHM(n),e.oxw().handleNationalitySelect(i)}),e.YNc(1,k,2,2,"option",50),e.qZA()}if(2&o){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",n.nationalites)}}function V(o,r){if(1&o&&(e.TgZ(0,"option",49),e._uU(1),e.qZA()),2&o){const n=r.$implicit;e.Q6J("value",n),e.xp6(1),e.Oqu(n)}}function j(o,r){if(1&o){const n=e.EpF();e.TgZ(0,"select",48),e.NdJ("change",function(i){return e.CHM(n),e.oxw().handleFormationSelect(i)}),e.YNc(1,V,2,2,"option",50),e.qZA()}if(2&o){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",n.formations)}}function D(o,r){if(1&o){const n=e.EpF();e.TgZ(0,"select",48),e.NdJ("change",function(i){return e.CHM(n),e.oxw().handleCycleSelect(i)}),e.TgZ(1,"option",53),e._uU(2,"Premier"),e.qZA(),e.TgZ(3,"option",54),e._uU(4,"Second"),e.qZA()()}}function H(o,r){if(1&o){const n=e.EpF();e.TgZ(0,"p-calendar",55),e.NdJ("onSelect",function(i){return e.CHM(n),e.oxw().handleDateNaissanceSelect(i)})("ngModelChange",function(i){return e.CHM(n),e.oxw().date_naissance=i}),e.qZA()}if(2&o){const n=e.oxw();e.Q6J("ngModel",n.date_naissance)}}function L(o,r){if(1&o){const n=e.EpF();e.TgZ(0,"i",56),e.NdJ("click",function(){return e.CHM(n),e.oxw().searchValue=""}),e.qZA()}}function K(o,r){if(1&o){const n=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"input",57),e.NdJ("change",function(i){const a=e.CHM(n).$implicit;return e.oxw().validateAdmissibilityOfCandidats(i,a)}),e.qZA()(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.qZA(),e.TgZ(17,"td"),e._uU(18),e.qZA(),e.TgZ(19,"td"),e._uU(20),e.qZA(),e.TgZ(21,"td"),e._uU(22),e.qZA(),e.TgZ(23,"td"),e._uU(24),e.qZA()()}if(2&o){const n=r.$implicit;e.xp6(4),e.Oqu(null==n?null:n.code_examen),e.xp6(2),e.Oqu(n.compte.name),e.xp6(2),e.Oqu(n.compte.prenom),e.xp6(2),e.Oqu(null==n?null:n.cycle),e.xp6(2),e.Oqu(null==n?null:n.centre),e.xp6(2),e.Oqu(null==n?null:n.nationalite),e.xp6(2),e.lnq("",null==n?null:n.formation1,", ",n.formation2,", ",n.formation3,""),e.xp6(2),e.Oqu(n.genre),e.xp6(2),e.Oqu(n.langue),e.xp6(2),e.Oqu(n.date_naissance),e.xp6(2),e.Oqu(null==n?null:n.statut)}}function R(o,r){1&o&&(e.TgZ(0,"tr")(1,"td",58)(2,"span",59),e._uU(3," Aucune candidatures trouv\xe9s avec ces lettres dans son nom "),e.qZA()()())}function $(o,r){1&o&&(e.TgZ(0,"tr")(1,"td",58)(2,"span",59),e._uU(3," Aucune candidatures presents dans la base "),e.qZA()()())}function X(o,r){if(1&o){const n=e.EpF();e.TgZ(0,"li",60)(1,"a",61),e.NdJ("click",function(){return e.CHM(n),e.oxw().previous()}),e._uU(2,"Pr\xe9cedent"),e.qZA()()}}function W(o,r){if(1&o){const n=e.EpF();e.TgZ(0,"li",62)(1,"a",63),e.NdJ("click",function(){return e.CHM(n),e.oxw().next()}),e._uU(2,"Suivant"),e.qZA()()}}function ee(o,r){if(1&o){const n=e.EpF();e.TgZ(0,"app-parcours-dialog",64),e.NdJ("criteria",function(i){return e.CHM(n),e.oxw().getCriteria(i)}),e.qZA()}if(2&o){const n=e.oxw();e.Q6J("visible",n.visible)}}const d=function(o){return{bold:o}};let te=(()=>{class o{constructor(n,t,i,s,a,c,_,f,ae){this.candidatureSrv=n,this.storageService=t,this.siteSrv=i,this.exportExcelService=s,this.centreSrv=a,this.commonSrv=c,this.zoneService=_,this.messageService=f,this.confirmationService=ae,this.visible=!1,this.formations=O.wL,this.downloadFile=!1,this.nationalites=[],this.candidatures=[],this.admissiblesCandidats=[],this.searchCandidatures=[],this.loading=!1,this.zones=[],this.sites=[],this.centres=[]}ngAfterViewInit(){}showDialog(){this.visible=!0}ngOnInit(){this.sortProperty="code_examen",this.sortIcon="fa-solid fa-arrow-down-short-wide",this.downUpIcon="pi pi-sort-alt",this.pageSize=10,this.page=1,this.compte=this.storageService.getUserConnected(),this.getZonesOfUser()}sort(n,t=this.candidatures){return this.sortProperty=n,this.isAsc=!this.isAsc,this.sortIcon=this.isAsc?"fa-solid fa-arrow-down-short-wide":"fa-solid fa-arrow-down-wide-short","nom"===n&&t.sort(this.isAsc?(i,s)=>i.compte.name>s.compte.name?1:s.compte.name>i.compte.name?-1:0:(i,s)=>i.compte.name>s.compte.name?-1:s.compte.name>i.compte.name?1:0),"prenom"===n&&t.sort(this.isAsc?(i,s)=>i.compte.prenom>s.compte.prenom?1:s.compte.prenom>i.compte.prenom?-1:0:(i,s)=>i.compte.prenom>s.compte.prenom?-1:s.compte.prenom>i.compte.prenom?1:0),"statut"===n&&t.sort(this.isAsc?(i,s)=>i.statut>s.statut?1:s.statut>i.statut?-1:0:(i,s)=>i.statut>s.statut?-1:s.statut>i.statut?1:0),"nationalite"===n&&t.sort(this.isAsc?(i,s)=>i.nationalite>s.nationalite?1:s.nationalite>i.nationalite?-1:0:(i,s)=>i.nationalite>s.nationalite?-1:s.nationalite>i.nationalite?1:0),"photo"===n&&t.sort(this.isAsc?(i,s)=>i.image>s.image?1:s.image>i.image?-1:0:(i,s)=>i.image>s.image?-1:s.image>i.image?1:0),"datenaissance"===n&&t.sort(this.isAsc?(i,s)=>i.date_naissance>s.date_naissance?1:s.date_naissance>i.date_naissance?-1:0:(i,s)=>i.date_naissance>s.date_naissance?-1:s.date_naissance>i.date_naissance?1:0),t}exportToExcel(){this.loading=!0,this.exportExcelService.downloadCandidatureExcel().subscribe(n=>{const t=new Blob([n],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),i=window.URL.createObjectURL(t),s=document.createElement("a");s.href=i,s.download="data.xlsx",s.click(),window.URL.revokeObjectURL(i),this.loading=!1})}handleFormationSelect(n){this.getCandidaturesByParcours(this.commonSrv.getFormationLabel(n.target.value))}handleCycleSelect(n){this.getCandidaturesByCycle(n.target.value)}handleDateNaissanceSelect(n){this.getCandidaturesByDateNaissance()}handleNationalitySelect(n){this.getCandidaturesByNationality(n.target.value)}handleSexeSelect(n){this.getCandidaturesBySexe("M"==n.target.value?b.m.M:b.m.F)}handlePageSize(n){var t,i,s;this.page=1,"centre"==this.actifOption&&this.getCandidaturesByCentre(null!==(t=this.centre.id)&&void 0!==t?t:0),"site"==this.actifOption&&this.getCandidaturesBySite(null!==(i=this.site.id)&&void 0!==i?i:0),"zone"==this.actifOption&&this.getCandidaturesByZone(null!==(s=this.zone.id)&&void 0!==s?s:0)}handleCategorieSelect(n){this.compte.role==g.u.SUPER_ADMIN&&("centre"==n.target.value&&this.getCentres(),"site"==n.target.value&&this.getSites())}handleZoneSelect(n){var t;this.zone=this.zones.find(i=>i.id==n.target.value),this.getCandidaturesByZone(null!==(t=n.target.value)&&void 0!==t?t:0)}handleCentreSelect(n){var t;this.centre=this.centres.find(i=>i.id==n.target.value),this.getCandidaturesByCentre(null!==(t=n.target.value)&&void 0!==t?t:0)}handleSiteSelect(n){var t;this.site=this.sites.find(i=>i.id==n.target.value),this.getCandidaturesBySite(null!==(t=n.target.value)&&void 0!==t?t:0)}handleSearchValue(n){if(this.searchValue=n.target.value,""!==this.searchValue){let i=this.searchCandidatures.map(s=>s.compte.name).filter(s=>s.toLowerCase().indexOf(this.searchValue.toLowerCase()+"")>-1);if(0===i.length)this.candidatures=[];else{let s=[];for(let a=0;a<i.length;a++){const c=i[a];let _=this.searchCandidatures.filter(f=>f.compte.name.indexOf(""+c)>-1);s.push(..._)}this.candidatures=s}}else this.candidatures=this.searchCandidatures}next(){var n,t,i;this.page++,"centre"==this.actifOption&&this.getCandidaturesByCentre(null!==(n=this.centre.id)&&void 0!==n?n:0),"site"==this.actifOption&&this.getCandidaturesBySite(null!==(t=this.site.id)&&void 0!==t?t:0),"zone"==this.actifOption&&this.getCandidaturesByZone(null!==(i=this.zone.id)&&void 0!==i?i:0)}previous(){var n,t,i;this.page--,"centre"==this.actifOption&&this.getCandidaturesByCentre(null!==(n=this.centre.id)&&void 0!==n?n:0),"site"==this.actifOption&&this.getCandidaturesBySite(null!==(t=this.site.id)&&void 0!==t?t:0),"zone"==this.actifOption&&this.getCandidaturesByZone(null!==(i=this.zone.id)&&void 0!==i?i:0)}getCandidaturesByZone(n){this.actifOption="zone",this.idZone=n,this.candidatureSrv.allByZone(n).subscribe({next:t=>{t=t.filter(i=>i.statut.toString()==h.d.En_Attente.toString()&&i.solvable),this.totalElement=t.length,console.log("candidatures: ",t),t=this.sort("nom",t),this.searchCandidatures=[],this.searchCandidatures=t,this.candidatures=t.map((i,s)=>Object.assign({id:s+1},i)).slice((this.page-1)*this.pageSize,(this.page-1)*this.pageSize+this.pageSize),this.collectionSize=t.length,this.nbrOfPage=Math.ceil(t.length/this.pageSize)},error:t=>{this.candidatures=[],console.log("error: ",t)}})}getCandidaturesByCentre(n){this.actifOption="centre",this.candidatureSrv.allByCentre(n).subscribe({next:t=>{t=t.filter(i=>i.statut.toString()==h.d.En_Attente.toString()&&i.solvable),this.totalElement=t.length,t=this.sort("nom",t),this.searchCandidatures=[],this.searchCandidatures=t,this.candidatures=t.map((i,s)=>Object.assign({id:s+1},i)).slice((this.page-1)*this.pageSize,(this.page-1)*this.pageSize+this.pageSize),this.collectionSize=t.length,this.nbrOfPage=Math.ceil(t.length/this.pageSize)},error:t=>{this.candidatures=[],console.log("error: ",t)}})}getCandidaturesBySite(n){this.actifOption="site",this.candidatureSrv.allBySite(n).subscribe({next:t=>{t=t.filter(i=>i.statut.toString()==h.d.En_Attente.toString()&&i.solvable),this.totalElement=t.length,t=this.sort("nom",t),this.searchCandidatures=[],this.searchCandidatures=t,this.candidatures=t.map((i,s)=>Object.assign({id:s+1},i)).slice((this.page-1)*this.pageSize,(this.page-1)*this.pageSize+this.pageSize),this.collectionSize=t.length,this.nbrOfPage=Math.ceil(t.length/this.pageSize)},error:t=>{this.candidatures=[],console.log("error: ",t)}})}getCandidaturesByNationality(n){this.actifOption="zone",this.candidatureSrv.allByZone(this.idZone).subscribe({next:t=>{let i=t.filter(s=>"En_Attente"==s.statut&&1==s.solvable);this.totalElement=i.length,i=this.sort("nom",i.filter(s=>s.nationalite==n)),this.searchCandidatures=[],this.searchCandidatures=i,this.candidatures=i.map((s,a)=>Object.assign({id:a+1},s)).slice((this.page-1)*this.pageSize,(this.page-1)*this.pageSize+this.pageSize),this.collectionSize=i.length,this.nbrOfPage=Math.ceil(i.length/this.pageSize)},error:t=>{this.candidatures=[],console.log("error: ",t)}})}getCandidaturesBySexe(n){this.actifOption="zone",this.candidatureSrv.allByZone(this.idZone).subscribe({next:t=>{let i=t.filter(s=>"En_Attente"==s.statut&&1==s.solvable);this.totalElement=i.length,i=this.sort("nom",i.filter(s=>s.genre==n)),this.searchCandidatures=[],this.searchCandidatures=i,this.candidatures=i.map((s,a)=>Object.assign({id:a+1},s)).slice((this.page-1)*this.pageSize,(this.page-1)*this.pageSize+this.pageSize),this.collectionSize=i.length,this.nbrOfPage=Math.ceil(i.length/this.pageSize)},error:t=>{this.candidatures=[],console.log("error: ",t)}})}getCandidaturesByDateNaissance(){this.actifOption="zone";let n=this.date_naissance.getFullYear()+"-"+this.date_naissance.getMonth()+"-"+this.date_naissance.getDate();this.candidatureSrv.allByZone(this.idZone).subscribe({next:t=>{let i=t.filter(s=>"En_Attente"==s.statut&&1==s.solvable);this.totalElement=i.length,i=this.sort("nom",i.filter(s=>s.date_naissance==n)),this.searchCandidatures=[],this.searchCandidatures=i,this.candidatures=i.map((s,a)=>Object.assign({id:a+1},s)).slice((this.page-1)*this.pageSize,(this.page-1)*this.pageSize+this.pageSize),this.collectionSize=i.length,this.nbrOfPage=Math.ceil(i.length/this.pageSize)},error:t=>{this.candidatures=[],console.log("error: ",t)}})}getCandidaturesByParcours(n){this.candidatureSrv.allByParcours(n).subscribe({next:t=>{let i=t.filter(s=>"En_Attente"==s.statut&&1==s.solvable);this.totalElement=i.length,i=this.sort("nom",i),this.searchCandidatures=[],this.searchCandidatures=i,this.candidatures=i.map((s,a)=>Object.assign({id:a+1},s)).slice((this.page-1)*this.pageSize,(this.page-1)*this.pageSize+this.pageSize),this.collectionSize=i.length,this.nbrOfPage=Math.ceil(i.length/this.pageSize)},error:t=>{this.candidatures=[],console.log("error: ",t)}})}getCandidaturesByCycle(n){this.candidatureSrv.allByCycle(n).subscribe({next:t=>{let i=t.filter(s=>"En_Attente"==s.statut&&1==s.solvable);this.totalElement=i.length,i=this.sort("nom",i),this.searchCandidatures=[],this.searchCandidatures=i,this.candidatures=i.map((s,a)=>Object.assign({id:a+1},s)).slice((this.page-1)*this.pageSize,(this.page-1)*this.pageSize+this.pageSize),this.collectionSize=i.length,this.nbrOfPage=Math.ceil(i.length/this.pageSize)},error:t=>{this.candidatures=[],console.log("error: ",t)}})}getCandidaturesByCycleAndParcours(n,t){this.candidatureSrv.allByCycleAndParcours(n,t).subscribe({next:i=>{let s=i.filter(a=>"En_Attente"==a.statut&&1==a.solvable);this.totalElement=s.length,s=this.sort("nom",s),this.searchCandidatures=[],this.searchCandidatures=s,this.candidatures=s.map((a,c)=>Object.assign({id:c+1},a)).slice((this.page-1)*this.pageSize,(this.page-1)*this.pageSize+this.pageSize),this.collectionSize=s.length,this.nbrOfPage=Math.ceil(s.length/this.pageSize)},error:i=>{this.candidatures=[],console.log("error: ",i)}})}getZonesOfUser(){var n;this.compte.role==g.u.SUPER_ADMIN&&this.zoneService.liste().subscribe({next:t=>{var i,s,a;this.zone=t[0],this.zones=t,this.getCandidaturesByZone(null!==(i=this.zone.id)&&void 0!==i?i:0),this.getSitesByZone(null!==(s=this.zone.id)&&void 0!==s?s:0),this.getCentreByZone(null!==(a=this.zone.id)&&void 0!==a?a:0)},error:t=>{console.log("error: ",t)}}),(this.compte.role==g.u.ADMIN||this.compte.role==g.u.JURY)&&this.zoneService.getOne(null!==(n=this.compte.idZone)&&void 0!==n?n:0).subscribe({next:t=>{var i,s,a;this.zone=t,this.zones=[t],this.getCandidaturesByZone(null!==(i=t.id)&&void 0!==i?i:0),this.getSitesByZone(null!==(s=t.id)&&void 0!==s?s:0),this.getCentreByZone(null!==(a=t.id)&&void 0!==a?a:0)},error:t=>{console.log("error: ",t)}})}getCentreByZone(n){this.centreSrv.allByZone(n).subscribe({next:t=>{this.centres=t},error:t=>{console.log("error: ",t)}})}getSitesByZone(n){this.siteSrv.allByZone(n).subscribe({next:t=>{this.sites=t},error:t=>{console.log("error: ",t)}})}getCentres(){this.centreSrv.liste().subscribe({next:n=>{this.centres=n},error:n=>{console.log("error: ",n)}})}getSites(){this.siteSrv.liste().subscribe({next:n=>{this.sites=n},error:n=>{console.log("error: ",n)}})}downloadAdmissibleCandidatureFile(){this.downloadFile=!0,this.showDialog()}validateAdmissibilityOfCandidats(n,t){if(n.target.checked)this.admissiblesCandidats.push(t);else{let i=this.admissiblesCandidats.findIndex(s=>s.id==t.id);i>-1&&this.admissiblesCandidats.splice(i)}}validateAdmissibleCandidats(){for(let n=0;n<this.admissiblesCandidats.length;n++){let t=this.admissiblesCandidats[n];t.statut=h.d.Admissible,t.compteID=t.compte.id||0,this.candidatureSrv.update(t.id||0,t).subscribe({next:i=>{var s,a,c;this.messageService.add({severity:"success",summary:"Pass\xe9 en admissible",detail:"Le candidat "+t.compte.name+" est pass\xe9 en admissible"}),"centre"==this.actifOption&&this.getCandidaturesByCentre(null!==(s=this.centre.id)&&void 0!==s?s:0),"site"==this.actifOption&&this.getCandidaturesBySite(null!==(a=this.site.id)&&void 0!==a?a:0),"zone"==this.actifOption&&this.getCandidaturesByZone(null!==(c=this.zone.id)&&void 0!==c?c:0)},error:i=>{console.log("error: ",i)}})}}confirm(n){this.confirmationService.confirm({target:n.target,message:"\xcates vous sures de vouloir continuer ?",icon:"pi pi-question",acceptLabel:"Oui",rejectLabel:"Non",accept:()=>{this.validateAdmissibleCandidats()},reject:()=>{this.messageService.add({severity:"error",summary:"Non",detail:"vous avez annul\xe9 la validation"})}})}confirmFail(n){this.confirmationService.confirm({target:n.target,message:"\xcates vous sures de vouloir continuer ?",icon:"pi pi-question",acceptLabel:"Oui",rejectLabel:"Non",accept:()=>{this.passAdmisCandidatsToEchec()},reject:()=>{this.messageService.add({severity:"error",summary:"Non",detail:"vous avez annul\xe9 le passage en echec des candidatures"})}})}passAdmisCandidatsToEchec(){for(let n=0;n<this.admissiblesCandidats.length;n++){let t=this.admissiblesCandidats[n];t.statut=h.d.Echec,t.compteID=t.compte.id||0,this.candidatureSrv.update(t.id||0,t).subscribe({next:i=>{var s,a,c;this.messageService.add({severity:"success",summary:"Pass\xe9 en echec",detail:"Le candidat "+t.compte.name+" est pass\xe9 en echec"}),"centre"==this.actifOption&&this.getCandidaturesByCentre(null!==(s=this.centre.id)&&void 0!==s?s:0),"site"==this.actifOption&&this.getCandidaturesBySite(null!==(a=this.site.id)&&void 0!==a?a:0),"zone"==this.actifOption&&this.getCandidaturesByZone(null!==(c=this.zone.id)&&void 0!==c?c:0)},error:i=>{console.log("error: ",i)}})}}getCriteria(n){var t,i,s;this.visible=!1,this.downloadFile?("centre"==this.actifOption&&this.candidatureSrv.downloadAdmissibleCandidatureFileByCentre(null!==(t=this.centre.id)&&void 0!==t?t:0).subscribe({next:a=>{(0,m.saveAs)(a,"liste_candidat_admissible_centre_"+this.centre.id+".xlsx")},error:a=>{console.log("error: ",a)}}),"site"==this.actifOption&&this.candidatureSrv.downloadAdmissibleCandidatureFileBySite(null!==(i=this.site.id)&&void 0!==i?i:0).subscribe({next:a=>{(0,m.saveAs)(a,"liste_candidat_admissible_site_"+this.site.id+".xlsx")},error:a=>{console.log("error: ",a)}}),"zone"==this.actifOption&&this.candidatureSrv.downloadAdmissibleCandidatureFileByZone(null!==(s=this.zone.id)&&void 0!==s?s:0).subscribe({next:a=>{(0,m.saveAs)(a,"liste_candidat_admissible_zone_"+this.zone.id+".xlsx")},error:a=>{console.log("error: ",a)}})):this.getCandidaturesByCycleAndParcours(n.cycle,n.formation)}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(x.u),e.Y36(z.V),e.Y36(U.P),e.Y36(q.O),e.Y36(G.T),e.Y36(J.v),e.Y36(N.b),e.Y36(Z.ez),e.Y36(Z.YP))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-gestion-admissibilite"]],decls:137,vars:88,consts:[[1,"Candidature-page","page-content"],[1,"flex","align-items-center","justify-content-between","gap-2"],[1,"page-title"],[1,"pi","pi-angle-right"],[1,"btn","btn-danger",3,"click"],[1,"card"],[1,"header"],[1,"title"],["pButton","","pRipple","","icon","pi pi-filter",1,"p-button-warning","p-button-rounded","p-button-raised","p-button-text",2,"width","32px","height","32px",3,"click"],[1,"btn","btn-primary",3,"click"],[1,"line"],[1,"table-content"],[1,"search-content"],[1,"select-page-size"],["name","page-size","id","page-size",3,"ngModel","change","ngModelChange"],["value","10"],["value","25"],["value","50"],["value","100"],[1,"search"],[1,"select-item"],[1,"label"],[1,"form","form-control",3,"ngModel","ngModelChange","change"],["value","centre"],["value","site"],["value","zone"],["value","formation"],["value","cycle"],["value","nationalite"],["value","date_naissance"],["value","genre"],["class","form form-control",3,"change",4,"ngIf"],["class","ms-2",3,"ngModel","onSelect","ngModelChange",4,"ngIf"],[1,"search_value"],["type","text","name","value","id","value",3,"ngModel","ngModelChange","keyup"],["class","fa fa-close pull-right",3,"click",4,"ngIf"],[1,"row"],["id","table"],[3,"ngClass","click"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"pagination_content"],[1,"pagination"],["class","paginate_button previous disabled","id","datatable-responsive_previous",4,"ngIf"],[1,"paginate_button","active"],["aria-controls","datatable-responsive","data-dt-idx","1","tabindex","0"],["class","paginate_button next disabled","id","datatable-responsive_next",4,"ngIf"],[3,"visible","criteria",4,"ngIf"],[1,"form","form-control",3,"change"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],["value","M"],["value","F"],["value","premier"],["value","second"],[1,"ms-2",3,"ngModel","onSelect","ngModelChange"],[1,"fa","fa-close","pull-right",3,"click"],["type","checkbox","name","validate",1,"checkbox",3,"change"],["colspan","12"],[1,"vh-center"],["id","datatable-responsive_previous",1,"paginate_button","previous","disabled"],["aria-controls","datatable-responsive","data-dt-idx","0","tabindex","0",3,"click"],["id","datatable-responsive_next",1,"paginate_button","next","disabled"],["aria-controls","datatable-responsive","data-dt-idx","2","tabindex","0",3,"click"],[3,"visible","criteria"]],template:function(n,t){1&n&&(e.TgZ(0,"section",0)(1,"div",1)(2,"h1",2),e._uU(3," Candidatures "),e._UZ(4,"i",3),e._uU(5," Gestion d'admissibilit\xe9"),e.qZA(),e.TgZ(6,"button",4),e.NdJ("click",function(){return t.downloadAdmissibleCandidatureFile()}),e._uU(7," Exporter la liste des canditats "),e.qZA()(),e.TgZ(8,"div",5)(9,"div",6)(10,"h3",7),e._uU(11,"Liste des candidatures et notes associ\xe9es "),e.TgZ(12,"button",8),e.NdJ("click",function(){return t.showDialog()}),e.qZA()(),e.TgZ(13,"div"),e._uU(14," \xa0 "),e.TgZ(15,"button",9),e.NdJ("click",function(s){return t.confirm(s)}),e._uU(16," valider "),e.qZA(),e._uU(17," \xa0 "),e.TgZ(18,"button",4),e.NdJ("click",function(s){return t.confirmFail(s)}),e._uU(19," Passer en \xe9chec "),e.qZA()()(),e._UZ(20,"div",10),e.TgZ(21,"div",11)(22,"div",12)(23,"div",13)(24,"span"),e._uU(25,"Voir"),e.qZA(),e.TgZ(26,"select",14),e.NdJ("change",function(s){return t.handlePageSize(s)})("ngModelChange",function(s){return t.pageSize=s}),e.TgZ(27,"option",15),e._uU(28,"10"),e.qZA(),e.TgZ(29,"option",16),e._uU(30,"25"),e.qZA(),e.TgZ(31,"option",17),e._uU(32,"50"),e.qZA(),e.TgZ(33,"option",18),e._uU(34,"100"),e.qZA()(),e.TgZ(35,"span"),e._uU(36,"entr\xe9es"),e.qZA()(),e.TgZ(37,"div",19)(38,"div",20)(39,"span",21),e._uU(40,"Categories"),e.qZA(),e.TgZ(41,"select",22),e.NdJ("ngModelChange",function(s){return t.searchOption=s})("change",function(s){return t.handleCategorieSelect(s)}),e.TgZ(42,"option",23),e._uU(43,"Centre"),e.qZA(),e.TgZ(44,"option",24),e._uU(45,"Site"),e.qZA(),e.TgZ(46,"option",25),e._uU(47,"Zone"),e.qZA(),e.TgZ(48,"option",26),e._uU(49,"Formation"),e.qZA(),e.TgZ(50,"option",27),e._uU(51,"Cycle"),e.qZA(),e.TgZ(52,"option",28),e._uU(53,"Nationalit\xe9"),e.qZA(),e.TgZ(54,"option",29),e._uU(55,"Date de naissance"),e.qZA(),e.TgZ(56,"option",30),e._uU(57,"Genre"),e.qZA()(),e.YNc(58,M,4,1,"select",31),e.YNc(59,I,2,1,"select",31),e.YNc(60,F,2,1,"select",31),e.YNc(61,Q,5,0,"select",31),e.YNc(62,Y,2,1,"select",31),e.YNc(63,j,2,1,"select",31),e.YNc(64,D,5,0,"select",31),e.YNc(65,H,1,1,"p-calendar",32),e.qZA(),e.TgZ(66,"div",33)(67,"span"),e._uU(68,"Rechercher"),e.qZA(),e.TgZ(69,"div")(70,"input",34),e.NdJ("ngModelChange",function(s){return t.searchValue=s})("keyup",function(s){return t.handleSearchValue(s)}),e.qZA(),e.YNc(71,L,1,0,"i",35),e.qZA()()()(),e.TgZ(72,"div",36)(73,"table",37)(74,"tr")(75,"th")(76,"div"),e._uU(77," D\xe9cision Admissibilit\xe9 "),e.qZA()(),e.TgZ(78,"th")(79,"div"),e._uU(80," Code d'examen "),e.TgZ(81,"i",38),e.NdJ("click",function(){return t.sort("code_examen")}),e.qZA()()(),e.TgZ(82,"th")(83,"div"),e._uU(84," Nom "),e.TgZ(85,"i",38),e.NdJ("click",function(){return t.sort("nom")}),e.qZA()()(),e.TgZ(86,"th")(87,"div"),e._uU(88," Pr\xe9nom "),e.TgZ(89,"i",38),e.NdJ("click",function(){return t.sort("prenom")}),e.qZA()()(),e.TgZ(90,"th")(91,"div"),e._uU(92," Cycle "),e.TgZ(93,"i",38),e.NdJ("click",function(){return t.sort("cycle")}),e.qZA()()(),e.TgZ(94,"th")(95,"div"),e._uU(96," Centre d'examen "),e.TgZ(97,"i",38),e.NdJ("click",function(){return t.sort("centre")}),e.qZA()()(),e.TgZ(98,"th")(99,"div"),e._uU(100," Nationalit\xe9 "),e.TgZ(101,"i",38),e.NdJ("click",function(){return t.sort("nationalite")}),e.qZA()()(),e.TgZ(102,"th")(103,"div"),e._uU(104," Formations "),e.TgZ(105,"i",38),e.NdJ("click",function(){return t.sort("formation")}),e.qZA()()(),e.TgZ(106,"th")(107,"div"),e._uU(108," Genre "),e.TgZ(109,"i",38),e.NdJ("click",function(){return t.sort("genre")}),e.qZA()()(),e.TgZ(110,"th")(111,"div"),e._uU(112," Langue "),e.TgZ(113,"i",38),e.NdJ("click",function(){return t.sort("langue")}),e.qZA()()(),e.TgZ(114,"th")(115,"div"),e._uU(116," Date naissance "),e.TgZ(117,"i",38),e.NdJ("click",function(){return t.sort("datenaissance")}),e.qZA()()(),e.TgZ(118,"th")(119,"div"),e._uU(120," Etat "),e.TgZ(121,"i",38),e.NdJ("click",function(){return t.sort("statut")}),e.qZA()()()(),e.YNc(122,K,25,13,"tr",39),e.YNc(123,R,4,0,"tr",40),e.YNc(124,$,4,0,"tr",40),e.qZA()(),e.TgZ(125,"div",41)(126,"span"),e._uU(127),e.qZA(),e.TgZ(128,"ul",42),e.YNc(129,X,3,0,"li",43),e.TgZ(130,"li",44)(131,"a",45),e._uU(132,"1"),e.qZA()(),e.YNc(133,W,3,0,"li",46),e.qZA()()()(),e._UZ(134,"p-toast")(135,"p-confirmPopup"),e.qZA(),e.YNc(136,ee,1,1,"app-parcours-dialog",47)),2&n&&(e.xp6(26),e.Q6J("ngModel",t.pageSize),e.xp6(15),e.Q6J("ngModel",t.searchOption),e.xp6(17),e.Q6J("ngIf",t.searchOption&&"zone"==t.searchOption),e.xp6(1),e.Q6J("ngIf",t.searchOption&&"site"==t.searchOption),e.xp6(1),e.Q6J("ngIf",t.searchOption&&"centre"==t.searchOption),e.xp6(1),e.Q6J("ngIf",t.searchOption&&"genre"==t.searchOption),e.xp6(1),e.Q6J("ngIf",t.searchOption&&"nationalite"==t.searchOption),e.xp6(1),e.Q6J("ngIf",t.searchOption&&"formation"==t.searchOption),e.xp6(1),e.Q6J("ngIf",t.searchOption&&"cycle"==t.searchOption),e.xp6(1),e.Q6J("ngIf",t.searchOption&&"date_naissance"==t.searchOption),e.xp6(5),e.Q6J("ngModel",t.searchValue),e.xp6(1),e.Q6J("ngIf",t.searchValue),e.xp6(10),e.Gre("icon-sort ","code_examen"==t.sortProperty?t.sortIcon:t.downUpIcon,""),e.Q6J("ngClass",e.VKq(66,d,"code_examen"==t.sortProperty)),e.xp6(4),e.Gre("icon-sort ","nom"==t.sortProperty?t.sortIcon:t.downUpIcon,""),e.Q6J("ngClass",e.VKq(68,d,"nom"==t.sortProperty)),e.xp6(4),e.Gre("icon-sort ","prenom"==t.sortProperty?t.sortIcon:t.downUpIcon,""),e.Q6J("ngClass",e.VKq(70,d,"prenom"==t.sortProperty)),e.xp6(4),e.Gre("icon-sort ","cycle"==t.sortProperty?t.sortIcon:t.downUpIcon,""),e.Q6J("ngClass",e.VKq(72,d,"cycle"==t.sortProperty)),e.xp6(4),e.Gre("icon-sort ","centre"==t.sortProperty?t.sortIcon:t.downUpIcon,""),e.Q6J("ngClass",e.VKq(74,d,"centre"==t.sortProperty)),e.xp6(4),e.Gre("icon-sort ","nationalite"==t.sortProperty?t.sortIcon:t.downUpIcon,""),e.Q6J("ngClass",e.VKq(76,d,"nationalite"==t.sortProperty)),e.xp6(4),e.Gre("icon-sort ","formation"==t.sortProperty?t.sortIcon:t.downUpIcon,""),e.Q6J("ngClass",e.VKq(78,d,"formation"==t.sortProperty)),e.xp6(4),e.Gre("icon-sort ","genre"==t.sortProperty?t.sortIcon:t.downUpIcon,""),e.Q6J("ngClass",e.VKq(80,d,"genre"==t.sortProperty)),e.xp6(4),e.Gre("icon-sort ","langue"==t.sortProperty?t.sortIcon:t.downUpIcon,""),e.Q6J("ngClass",e.VKq(82,d,"langue"==t.sortProperty)),e.xp6(4),e.Gre("icon-sort ","datenaissance"==t.sortProperty?t.sortIcon:t.downUpIcon,""),e.Q6J("ngClass",e.VKq(84,d,"datenaissance"==t.sortProperty)),e.xp6(4),e.Gre("icon-sort ","statut"==t.sortProperty?t.sortIcon:t.downUpIcon,""),e.Q6J("ngClass",e.VKq(86,d,"statut"==t.sortProperty)),e.xp6(1),e.Q6J("ngForOf",t.candidatures),e.xp6(1),e.Q6J("ngIf",t.searchValue&&0===t.candidatures.length),e.xp6(1),e.Q6J("ngIf",!t.searchValue&&0===t.candidatures.length),e.xp6(3),e.HOy("Page ",t.page," sur ",t.nbrOfPage,", avec ",t.candidatures.length," entr\xe9es affich\xe9es, ",t.totalElement," \xe9l\xe9ments au total"),e.xp6(2),e.Q6J("ngIf",t.page>1),e.xp6(4),e.Q6J("ngIf",t.page<t.nbrOfPage),e.xp6(3),e.Q6J("ngIf",t.visible))},directives:[A.Hq,u.EJ,u.JJ,u.On,u.YN,u.Kr,p.O5,p.sg,u.Fj,p.mk,T.FN,S.P,B.j],encapsulation:2}),o})();var y=l(437);const ie=[{path:"",component:te,canActivate:[y.u]}];let ne=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[y.u],imports:[[v.Bz.forChild(ie)],v.Bz]}),o})();var se=l(4466);let oe=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[p.ez,ne,u.u5,T.EV,S.n,A.hJ,se.m]]}),o})()}}]);