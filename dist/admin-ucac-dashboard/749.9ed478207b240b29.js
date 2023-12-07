"use strict";(self.webpackChunkadmin_ucac_dashboard=self.webpackChunkadmin_ucac_dashboard||[]).push([[749],{4749:(O,f,o)=>{o.r(f),o.d(f,{ListeAdmissibiliteModule:()=>F});var d=o(2382),c=o(9808),g=o(5193),_=o(4327),e=o(7587),h=o(9930),A=o(3270),l=o(2042),p=o(5119),S=o(7755);function v(r,a){if(1&r&&(e.TgZ(0,"option",38),e._uU(1),e.qZA()),2&r){const i=a.$implicit;e.Q6J("value",i.id),e.xp6(1),e.Oqu(i.nom)}}function Z(r,a){if(1&r){const i=e.EpF();e.TgZ(0,"select",37),e.NdJ("change",function(n){return e.CHM(i),e.oxw().handleZoneSelect(n)}),e.TgZ(1,"option",38),e._uU(2,"Select zones"),e.qZA(),e.YNc(3,v,2,2,"option",39),e.qZA()}if(2&r){const i=e.oxw();e.xp6(3),e.Q6J("ngForOf",i.zones)}}function C(r,a){if(1&r&&(e.TgZ(0,"option",38),e._uU(1),e.qZA()),2&r){const i=a.$implicit;e.Q6J("value",i.id),e.xp6(1),e.Oqu(i.nom)}}function m(r,a){if(1&r){const i=e.EpF();e.TgZ(0,"select",37),e.NdJ("change",function(n){return e.CHM(i),e.oxw().handleSiteSelect(n)}),e.YNc(1,C,2,2,"option",39),e.qZA()}if(2&r){const i=e.oxw();e.xp6(1),e.Q6J("ngForOf",i.sites)}}function T(r,a){if(1&r&&(e.TgZ(0,"option",38),e._uU(1),e.qZA()),2&r){const i=a.$implicit;e.Q6J("value",i.id),e.xp6(1),e.Oqu(i.nom)}}function z(r,a){if(1&r){const i=e.EpF();e.TgZ(0,"select",37),e.NdJ("change",function(n){return e.CHM(i),e.oxw().handleCentreSelect(n)}),e.YNc(1,T,2,2,"option",39),e.qZA()}if(2&r){const i=e.oxw();e.xp6(1),e.Q6J("ngForOf",i.centres)}}function M(r,a){if(1&r){const i=e.EpF();e.TgZ(0,"i",40),e.NdJ("click",function(){return e.CHM(i),e.oxw().searchValue=""}),e.qZA()}}function y(r,a){if(1&r&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA()()),2&r){const i=a.$implicit;e.xp6(2),e.Oqu(i.id),e.xp6(2),e.Oqu(i.centre),e.xp6(2),e.Oqu(i.compte.name),e.xp6(2),e.Oqu(i.compte.prenom)}}function x(r,a){1&r&&(e.TgZ(0,"tr")(1,"td",41)(2,"span",42),e._uU(3," Aucune candidatures trouv\xe9s avec ces lettres dans son nom "),e.qZA()()())}function E(r,a){1&r&&(e.TgZ(0,"tr")(1,"td",41)(2,"span",42),e._uU(3," Aucune candidatures presents dans la base "),e.qZA()()())}function B(r,a){if(1&r){const i=e.EpF();e.TgZ(0,"li",43)(1,"a",44),e.NdJ("click",function(){return e.CHM(i),e.oxw().previous()}),e._uU(2,"Pr\xe9cedent"),e.qZA()()}}function P(r,a){if(1&r){const i=e.EpF();e.TgZ(0,"li",45)(1,"a",46),e.NdJ("click",function(){return e.CHM(i),e.oxw().next()}),e._uU(2,"Suivant"),e.qZA()()}}const b=function(r){return{bold:r}};let I=(()=>{class r{constructor(i,t,n,s,u){this.candidatureSrv=i,this.storageService=t,this.siteSrv=n,this.centreSrv=s,this.zoneService=u,this.candidatures=[],this.searchCandidatures=[],this.loading=!1,this.zones=[],this.sites=[],this.centres=[]}ngOnInit(){this.sortProperty="code_examen",this.sortIcon="fa-solid fa-arrow-down-short-wide",this.downUpIcon="pi pi-sort-alt",this.pageSize=10,this.page=1,this.compte=this.storageService.getUserConnected(),this.getZonesOfUser()}sort(i,t=this.candidatures){return this.sortProperty=i,this.isAsc=!this.isAsc,this.sortIcon=this.isAsc?"fa-solid fa-arrow-down-short-wide":"fa-solid fa-arrow-down-wide-short","nom"===i&&t.sort(this.isAsc?(n,s)=>n.compte.name>s.compte.name?1:s.compte.name>n.compte.name?-1:0:(n,s)=>n.compte.name>s.compte.name?-1:s.compte.name>n.compte.name?1:0),"prenom"===i&&t.sort(this.isAsc?(n,s)=>n.compte.prenom>s.compte.prenom?1:s.compte.prenom>n.compte.prenom?-1:0:(n,s)=>n.compte.prenom>s.compte.prenom?-1:s.compte.prenom>n.compte.prenom?1:0),"centre"===i&&t.sort(this.isAsc?(n,s)=>n.centre>s.centre?1:s.centre>n.centre?-1:0:(n,s)=>n.centre>s.centre?-1:s.centre>n.centre?1:0),t}handlePageSize(i){var t,n,s;"centre"==this.actifOption&&this.getCandidaturesByCentre(null!==(t=this.centre.id)&&void 0!==t?t:0),"site"==this.actifOption&&this.getCandidaturesBySite(null!==(n=this.site.id)&&void 0!==n?n:0),"zone"==this.actifOption&&this.getCandidaturesByZone(null!==(s=this.zone.id)&&void 0!==s?s:0)}handleCategorieSelect(i){this.compte.role==g.u.SUPER_ADMIN&&("centre"==i.target.value&&this.getCentres(),"site"==i.target.value&&this.getSites())}handleZoneSelect(i){var t;this.zone=this.zones.find(n=>n.id==i.target.value),this.getCandidaturesByZone(null!==(t=i.target.value)&&void 0!==t?t:0)}handleCentreSelect(i){var t;this.centre=this.centres.find(n=>n.id==i.target.value),this.getCandidaturesByCentre(null!==(t=i.target.value)&&void 0!==t?t:0)}handleSiteSelect(i){var t;this.site=this.sites.find(n=>n.id==i.target.value),this.getCandidaturesBySite(null!==(t=i.target.value)&&void 0!==t?t:0)}handleSearchValue(i){if(this.searchValue=i.target.value,""!==this.searchValue){let n=this.searchCandidatures.map(s=>s.compte.name).filter(s=>s.toLowerCase().indexOf(this.searchValue.toLowerCase()+"")>-1);if(0===n.length)this.candidatures=[];else{let s=[];for(let u=0;u<n.length;u++){const q=n[u];let D=this.searchCandidatures.filter(Q=>Q.compte.name.indexOf(""+q)>-1);s.push(...D)}this.candidatures=s}}else this.candidatures=this.searchCandidatures}next(){var i,t,n;this.page++,"centre"==this.actifOption&&this.getCandidaturesByCentre(null!==(i=this.centre.id)&&void 0!==i?i:0),"site"==this.actifOption&&this.getCandidaturesBySite(null!==(t=this.site.id)&&void 0!==t?t:0),"zone"==this.actifOption&&this.getCandidaturesByZone(null!==(n=this.zone.id)&&void 0!==n?n:0)}previous(){var i,t,n;this.page--,"centre"==this.actifOption&&this.getCandidaturesByCentre(null!==(i=this.centre.id)&&void 0!==i?i:0),"site"==this.actifOption&&this.getCandidaturesBySite(null!==(t=this.site.id)&&void 0!==t?t:0),"zone"==this.actifOption&&this.getCandidaturesByZone(null!==(n=this.zone.id)&&void 0!==n?n:0)}getCandidaturesByZone(i){this.actifOption="zone",this.candidatureSrv.allAdmissibleByZone(i).subscribe({next:t=>{t=this.sort("nom",t),this.searchCandidatures=[],this.searchCandidatures=t,this.candidatures=t.map((n,s)=>Object.assign({id:s+1},n)).slice((this.page-1)*this.pageSize,(this.page-1)*this.pageSize+this.pageSize),this.collectionSize=t.length,this.nbrOfPage=Math.ceil(t.length/this.pageSize)},error:t=>{console.log("error: ",t)}})}getCandidaturesByCentre(i){this.actifOption="centre",this.candidatureSrv.allAdmissibleByCentre(i).subscribe({next:t=>{t=this.sort("nom",t),this.searchCandidatures=[],this.searchCandidatures=t,this.candidatures=t.map((n,s)=>Object.assign({id:s+1},n)).slice((this.page-1)*this.pageSize,(this.page-1)*this.pageSize+this.pageSize),this.collectionSize=t.length,this.nbrOfPage=Math.ceil(t.length/this.pageSize)},error:t=>{console.log("error: ",t)}})}getCandidaturesBySite(i){this.actifOption="site",this.candidatureSrv.allAdmissibleBySite(i).subscribe({next:t=>{t=this.sort("nom",t),this.searchCandidatures=[],this.searchCandidatures=t,this.candidatures=t.map((n,s)=>Object.assign({id:s+1},n)).slice((this.page-1)*this.pageSize,(this.page-1)*this.pageSize+this.pageSize),this.collectionSize=t.length,this.nbrOfPage=Math.ceil(t.length/this.pageSize)},error:t=>{console.log("error: ",t)}})}getZonesOfUser(){var i;this.compte.role==g.u.SUPER_ADMIN&&this.zoneService.liste().subscribe({next:t=>{var n,s,u;this.zone=t[0],this.zones=t,this.getCandidaturesByZone(null!==(n=this.zone.id)&&void 0!==n?n:0),this.getSitesByZone(null!==(s=this.zone.id)&&void 0!==s?s:0),this.getCentreByZone(null!==(u=this.zone.id)&&void 0!==u?u:0)},error:t=>{console.log("error: ",t)}}),(this.compte.role==g.u.ADMIN||this.compte.role==g.u.JURY)&&this.zoneService.getOne(null!==(i=this.compte.idZone)&&void 0!==i?i:0).subscribe({next:t=>{var n,s,u;this.zone=t,this.zones=[t],this.getCandidaturesByZone(null!==(n=t.id)&&void 0!==n?n:0),this.getSitesByZone(null!==(s=t.id)&&void 0!==s?s:0),this.getCentreByZone(null!==(u=t.id)&&void 0!==u?u:0)},error:t=>{console.log("error: ",t)}})}getCentreByZone(i){this.centreSrv.allByZone(i).subscribe({next:t=>{this.centres=t},error:t=>{console.log("error: ",t)}})}getSitesByZone(i){this.siteSrv.allByZone(i).subscribe({next:t=>{this.sites=t},error:t=>{console.log("error: ",t)}})}getCentres(){this.centreSrv.liste().subscribe({next:i=>{this.centres=i},error:i=>{console.log("error: ",i)}})}getSites(){this.siteSrv.liste().subscribe({next:i=>{this.sites=i},error:i=>{console.log("error: ",i)}})}downloadAdmissibleCandidatureFile(){var i,t,n;"centre"==this.actifOption&&this.candidatureSrv.downloadAdmissibleCandidatureFileByCentre(null!==(i=this.centre.id)&&void 0!==i?i:0).subscribe({next:s=>{(0,_.saveAs)(s,"liste_candidat_admissible_centre_"+this.centre.id+".xlsx")},error:s=>{console.log("error: ",s)}}),"site"==this.actifOption&&this.candidatureSrv.downloadAdmissibleCandidatureFileBySite(null!==(t=this.site.id)&&void 0!==t?t:0).subscribe({next:s=>{(0,_.saveAs)(s,"liste_candidat_admissible_site_"+this.site.id+".xlsx")},error:s=>{console.log("error: ",s)}}),"zone"==this.actifOption&&this.candidatureSrv.downloadAdmissibleCandidatureFileByZone(null!==(n=this.zone.id)&&void 0!==n?n:0).subscribe({next:s=>{(0,_.saveAs)(s,"liste_candidat_admissible_zone_"+this.zone.id+".xlsx")},error:s=>{console.log("error: ",s)}})}}return r.\u0275fac=function(i){return new(i||r)(e.Y36(h.u),e.Y36(A.V),e.Y36(l.P),e.Y36(p.T),e.Y36(S.b))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-liste-admissibilite"]],decls:77,vars:39,consts:[[1,"Candidature-page","page-content"],[1,"page-title"],[1,"pi","pi-angle-right"],[1,"card"],[1,"header"],[1,"title"],[1,"line"],[1,"table-content"],[1,"search-content"],[1,"select-page-size"],["name","page-size","id","page-size",3,"ngModel","change","ngModelChange"],["value","10"],["value","25"],["value","50"],["value","100"],[1,"search"],[1,"select-item"],[1,"label"],[1,"form","form-control",3,"ngModel","ngModelChange","change"],["value","centre"],["value","site"],["value","zone"],["class","form form-control",3,"change",4,"ngIf"],[1,"search_value"],["type","text","name","value","id","value",3,"ngModel","ngModelChange","keyup"],["class","fa fa-close pull-right",3,"click",4,"ngIf"],[1,"row"],["id","table"],[3,"ngClass","click"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"pagination_content"],[1,"pagination"],["class","paginate_button previous disabled","id","datatable-responsive_previous",4,"ngIf"],[1,"paginate_button","active"],["aria-controls","datatable-responsive","data-dt-idx","1","tabindex","0"],["class","paginate_button next disabled","id","datatable-responsive_next",4,"ngIf"],[1,"form","form-control",3,"change"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],[1,"fa","fa-close","pull-right",3,"click"],["colspan","4"],[1,"vh-center"],["id","datatable-responsive_previous",1,"paginate_button","previous","disabled"],["aria-controls","datatable-responsive","data-dt-idx","0","tabindex","0",3,"click"],["id","datatable-responsive_next",1,"paginate_button","next","disabled"],["aria-controls","datatable-responsive","data-dt-idx","2","tabindex","0",3,"click"]],template:function(i,t){1&i&&(e.TgZ(0,"section",0)(1,"h1",1),e._uU(2," Listes "),e._UZ(3,"i",2),e._uU(4," Liste d'admissibilit\xe9"),e.qZA(),e.TgZ(5,"div",3)(6,"div",4)(7,"h3",5),e._uU(8,"Liste d'admissibilit\xe9"),e.qZA()(),e._UZ(9,"div",6),e.TgZ(10,"div",7)(11,"div",8)(12,"div",9)(13,"span"),e._uU(14,"Voir"),e.qZA(),e.TgZ(15,"select",10),e.NdJ("change",function(s){return t.handlePageSize(s)})("ngModelChange",function(s){return t.pageSize=s}),e.TgZ(16,"option",11),e._uU(17,"10"),e.qZA(),e.TgZ(18,"option",12),e._uU(19,"25"),e.qZA(),e.TgZ(20,"option",13),e._uU(21,"50"),e.qZA(),e.TgZ(22,"option",14),e._uU(23,"100"),e.qZA()(),e.TgZ(24,"span"),e._uU(25,"entr\xe9es"),e.qZA()(),e.TgZ(26,"div",15)(27,"div",16)(28,"span",17),e._uU(29,"Categories"),e.qZA(),e.TgZ(30,"select",18),e.NdJ("ngModelChange",function(s){return t.searchOption=s})("change",function(s){return t.handleCategorieSelect(s)}),e.TgZ(31,"option",19),e._uU(32,"Centre"),e.qZA(),e.TgZ(33,"option",20),e._uU(34,"Site"),e.qZA(),e.TgZ(35,"option",21),e._uU(36,"Zone"),e.qZA()(),e.YNc(37,Z,4,1,"select",22),e.YNc(38,m,2,1,"select",22),e.YNc(39,z,2,1,"select",22),e.qZA(),e.TgZ(40,"div",23)(41,"span"),e._uU(42,"Rechercher"),e.qZA(),e.TgZ(43,"div")(44,"input",24),e.NdJ("ngModelChange",function(s){return t.searchValue=s})("keyup",function(s){return t.handleSearchValue(s)}),e.qZA(),e.YNc(45,M,1,0,"i",25),e.qZA()()()(),e.TgZ(46,"div",26)(47,"table",27)(48,"tr")(49,"th")(50,"div"),e._uU(51," Numero "),e.TgZ(52,"i",28),e.NdJ("click",function(){return t.sort("numero")}),e.qZA()()(),e.TgZ(53,"th")(54,"div"),e._uU(55," Centre d'examen "),e.TgZ(56,"i",28),e.NdJ("click",function(){return t.sort("centre")}),e.qZA()()(),e.TgZ(57,"th")(58,"div"),e._uU(59," Nom "),e.TgZ(60,"i",28),e.NdJ("click",function(){return t.sort("nom")}),e.qZA()()(),e.TgZ(61,"th")(62,"div"),e._uU(63," Pr\xe9nom "),e.TgZ(64,"i",28),e.NdJ("click",function(){return t.sort("prenom")}),e.qZA()()()(),e.YNc(65,y,9,4,"tr",29),e.YNc(66,x,4,0,"tr",30),e.YNc(67,E,4,0,"tr",30),e.qZA()(),e.TgZ(68,"div",31)(69,"span"),e._uU(70),e.qZA(),e.TgZ(71,"ul",32),e.YNc(72,B,3,0,"li",33),e.TgZ(73,"li",34)(74,"a",35),e._uU(75,"1"),e.qZA()(),e.YNc(76,P,3,0,"li",36),e.qZA()()()()()),2&i&&(e.xp6(15),e.Q6J("ngModel",t.pageSize),e.xp6(15),e.Q6J("ngModel",t.searchOption),e.xp6(7),e.Q6J("ngIf",t.searchOption&&"zone"==t.searchOption),e.xp6(1),e.Q6J("ngIf",t.searchOption&&"site"==t.searchOption),e.xp6(1),e.Q6J("ngIf",t.searchOption&&"centre"==t.searchOption),e.xp6(5),e.Q6J("ngModel",t.searchValue),e.xp6(1),e.Q6J("ngIf",t.searchValue),e.xp6(7),e.Gre("icon-sort ","numero"==t.sortProperty?t.sortIcon:t.downUpIcon,""),e.Q6J("ngClass",e.VKq(31,b,"numero"==t.sortProperty)),e.xp6(4),e.Gre("icon-sort ","centre"==t.sortProperty?t.sortIcon:t.downUpIcon,""),e.Q6J("ngClass",e.VKq(33,b,"centre"==t.sortProperty)),e.xp6(4),e.Gre("icon-sort ","nom"==t.sortProperty?t.sortIcon:t.downUpIcon,""),e.Q6J("ngClass",e.VKq(35,b,"nom"==t.sortProperty)),e.xp6(4),e.Gre("icon-sort ","prenom"==t.sortProperty?t.sortIcon:t.downUpIcon,""),e.Q6J("ngClass",e.VKq(37,b,"prenom"==t.sortProperty)),e.xp6(1),e.Q6J("ngForOf",t.candidatures),e.xp6(1),e.Q6J("ngIf",t.searchValue&&0===t.candidatures.length),e.xp6(1),e.Q6J("ngIf",!t.searchValue&&0===t.candidatures.length),e.xp6(3),e.lnq("Page ",t.page," sur ",t.nbrOfPage,", avec ",t.candidatures.length," entr\xe9es affich\xe9es"),e.xp6(2),e.Q6J("ngIf",t.page>1),e.xp6(4),e.Q6J("ngIf",t.page<t.nbrOfPage))},directives:[d.EJ,d.JJ,d.On,d.YN,d.Kr,c.O5,c.sg,d.Fj,c.mk],encapsulation:2}),r})();var L=o(7671),U=o(437);const J=[{path:"",component:I,canActivate:[U.u]}];let N=(()=>{class r{}return r.\u0275fac=function(i){return new(i||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({providers:[U.u],imports:[[L.Bz.forChild(J)],L.Bz]}),r})(),F=(()=>{class r{}return r.\u0275fac=function(i){return new(i||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[c.ez,N,d.u5]]}),r})()},437:(O,f,o)=>{o.d(f,{u:()=>l});var d=o(5193),c=o(7587),g=o(7671),_=o(3936),e=o(629),h=o(3270),A=o(9783);let l=(()=>{class p{constructor(v,Z,C,m,T){this.router=v,this.tokenService=Z,this.authService=C,this.storageService=m,this.messageService=T}canActivate(v,Z){let C=this.storageService.getUserTokenConnected();if(null!=C){let m=this.tokenService.decodeToken(C).scope;if(this.tokenService.isLogged()&&(m==d.u.ADMIN||m==d.u.SUPER_ADMIN||m==d.u.JURY))return this.authService.isLogin.next(!0),!0}return this.authService.isLogin.next(!1),this.messageService.add({severity:"error",summary:"Erreur de connexion",detail:"Veuillez les identifiants d'un administrateur ou bien d'un super admin pour y avoir acc\xe8ss \xe0 la plateforme"}),this.router.navigate(["login"]),!1}}return p.\u0275fac=function(v){return new(v||p)(c.LFG(g.F0),c.LFG(_.B),c.LFG(e.e),c.LFG(h.V),c.LFG(A.ez))},p.\u0275prov=c.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},7755:(O,f,o)=>{o.d(f,{b:()=>e});var d=o(2340),c=o(7587),g=o(520),_=o(4920);let e=(()=>{class h{constructor(l,p){this.http=l,this.baseUrlSvr=p,this.url="",this.url=`${this.baseUrlSvr.getOrigin()}${d.N.administrationPath}`,this.url+="zone/"}liste(){return this.http.get(this.url+"all")}getOne(l){return this.http.get(this.url+l)}create(l){return this.http.post(this.url+"create",l)}update(l){return this.http.patch(this.url+(null==l?void 0:l.id),l)}delete(l){return this.http.delete(this.url+l)}}return h.\u0275fac=function(l){return new(l||h)(c.LFG(g.eN),c.LFG(_.x))},h.\u0275prov=c.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()}}]);