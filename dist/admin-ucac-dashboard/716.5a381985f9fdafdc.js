"use strict";(self.webpackChunkadmin_ucac_dashboard=self.webpackChunkadmin_ucac_dashboard||[]).push([[716],{6716:(y,p,n)=>{n.r(p),n.d(p,{PeriodeEntretienModule:()=>S});var o=n(2382),l=n(9808),v=n(7671);class f{}var e=n(7587),g=n(7921),r=n(3322),a=n(9783);function b(i,d){if(1&i&&(e.TgZ(0,"option",23),e._uU(1),e.qZA()),2&i){const t=d.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.nom)}}function m(i,d){1&i&&(e.TgZ(0,"div"),e._uU(1," Veuillez s'il vous plait entrer une valeur "),e.qZA())}function E(i,d){if(1&i&&(e.TgZ(0,"div",24),e.YNc(1,m,2,0,"div",25),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.formDisponibilityControl.session_id.errors.required)}}function _(i,d){1&i&&(e.TgZ(0,"div"),e._uU(1," Veuillez s'il vous plait entrer une valeur "),e.qZA())}function c(i,d){if(1&i&&(e.TgZ(0,"div",24),e.YNc(1,_,2,0,"div",25),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.formDisponibilityControl.debut_disponibilite.errors.required)}}function D(i,d){1&i&&(e.TgZ(0,"div"),e._uU(1," Veuillez s'il vous plait entrer une valeur "),e.qZA())}function C(i,d){if(1&i&&(e.TgZ(0,"div",24),e.YNc(1,D,2,0,"div",25),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.formDisponibilityControl.fin_disponibilite.errors.required)}}const Z=function(i){return{required:i}};let P=(()=>{class i{constructor(t,s,u){this.sessionSrv=t,this.disponibiliteService=s,this.messageService=u,this.loading=!0,this.sessions=[],this.formDisponibility=new o.cw({session_id:new o.NI("",[o.kI.required]),debut_disponibilite:new o.NI(null,[o.kI.required]),fin_disponibilite:new o.NI(null,[o.kI.required])})}ngOnInit(){this.getSessions()}get formDisponibilityControl(){return this.formDisponibility.controls}getSessions(){this.sessionSrv.liste().subscribe({next:t=>{this.sessions=t},error:t=>{console.log("error: ",t)}})}createDisponibility(){let t=Object.assign({},this.formDisponibility.value);delete t.session_id,t=Object.assign(Object.assign({},t),{session_id:parseInt(this.formDisponibility.value.session_id,10)});let s=this.sessions.find(u=>u.id==t.session_id);s&&(s.date_debut_entretien=this.formDisponibility.value.debut_disponibilite,s.date_fin_entretien=this.formDisponibility.value.fin_disponibilite,this.sessionSrv.updateForEntretien(Object.assign({},s)).subscribe({next:u=>{this.messageService.add({severity:"success",summary:"Modification de session",detail:"Modification de la p\xe9riode des entretiens effectu\xe9e avec success"}),this.disponibility=new f,this.formDisponibility.reset()},error:u=>{console.log("Error: ",u),this.messageService.add({severity:"error",summary:"Erreur de modification",detail:u.message})}}))}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(g.K),e.Y36(r.T),e.Y36(a.ez))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-periode-entretien"]],decls:47,vars:16,consts:[[1,"session-page","page-content"],[1,"page-title"],[1,"pi","pi-angle-right"],[1,"card"],[1,"header"],[1,"title"],[1,"form",3,"formGroup","ngSubmit"],[2,"margin-bottom","1em","margin-left","3em"],[1,"line"],[1,"main"],[1,"row"],[1,"form-group"],["for",""],["formControlName","session_id",3,"ngClass"],["value",""],[3,"value",4,"ngFor","ngForOf"],["class","alert",4,"ngIf"],["type","date","formControlName","debut_disponibilite","id","",3,"ngClass"],["type","date","formControlName","fin_disponibilite","id","",3,"value","ngClass"],[1,"footer"],[1,"btn-group"],["type","submit",1,"btn","btn-info",3,"disabled"],[1,"btn","btn-danger",3,"click"],[3,"value"],[1,"alert"],[4,"ngIf"]],template:function(t,s){if(1&t&&(e.TgZ(0,"section",0)(1,"h1",1),e._uU(2,"Entretiens "),e._UZ(3,"i",2),e._uU(4," D\xe9finition p\xe9riode entretiens"),e.qZA(),e.TgZ(5,"div",3)(6,"div",4)(7,"h3",5),e._uU(8,"P\xe9riode des entretiens "),e.qZA()(),e.TgZ(9,"form",6),e.NdJ("ngSubmit",function(){return s.createDisponibility()}),e.TgZ(10,"div",4),e._uU(11," Veullez remplir les champs suivants "),e.TgZ(12,"ul",7)(13,"li"),e._uU(14," Date d\xe9but correspond \xe0 la date de d\xe9but des entretiens. "),e.qZA(),e.TgZ(15,"li"),e._uU(16," Date fin correspond \xe0 la date de fin des entretiens. "),e.qZA()(),e._UZ(17,"div",8),e.qZA(),e.TgZ(18,"div",9)(19,"div",10)(20,"div",11)(21,"label",12),e._uU(22,"Session *"),e.qZA(),e.TgZ(23,"select",13)(24,"option",14),e._uU(25,"Session d'entretion"),e.qZA(),e.YNc(26,b,2,2,"option",15),e.qZA()(),e.YNc(27,E,2,1,"div",16),e.qZA(),e.TgZ(28,"div",10)(29,"div",11)(30,"label",12),e._uU(31,"Date de d\xe9but *"),e.qZA(),e._UZ(32,"input",17),e.qZA(),e.YNc(33,c,2,1,"div",16),e.qZA(),e.TgZ(34,"div",10)(35,"div",11)(36,"label",12),e._uU(37,"Date de fin *"),e.qZA(),e._UZ(38,"input",18),e.qZA(),e.YNc(39,C,2,1,"div",16),e.qZA()(),e.TgZ(40,"div",19),e._UZ(41,"div",8),e.TgZ(42,"div",20)(43,"button",21),e._uU(44," Soumettre "),e.qZA(),e.TgZ(45,"button",22),e.NdJ("click",function(){return s.formDisponibility.reset()}),e._uU(46," Renitialiser "),e.qZA()()()()()()),2&t){let u;e.xp6(9),e.Q6J("formGroup",s.formDisponibility),e.xp6(14),e.Q6J("ngClass",e.VKq(10,Z,s.formDisponibility.get("session_id").invalid)),e.xp6(3),e.Q6J("ngForOf",s.sessions),e.xp6(1),e.Q6J("ngIf",s.formDisponibilityControl.session_id.errors),e.xp6(5),e.Q6J("ngClass",e.VKq(12,Z,s.formDisponibility.get("debut_disponibilite").invalid)),e.xp6(1),e.Q6J("ngIf",s.formDisponibilityControl.debut_disponibilite.errors),e.xp6(5),e.Q6J("value",null==(u=s.formDisponibility.get("fin_disponibilite"))?null:u.value)("ngClass",e.VKq(14,Z,s.formDisponibility.get("fin_disponibilite").invalid)),e.xp6(1),e.Q6J("ngIf",s.formDisponibilityControl.fin_disponibilite.errors),e.xp6(4),e.Q6J("disabled",s.formDisponibility.invalid)}},directives:[o._Y,o.JL,o.sg,o.EJ,o.JJ,o.u,l.mk,o.YN,o.Kr,l.sg,l.O5,o.Fj],encapsulation:2}),i})();var A=n(437);const T=[{path:"",component:P,canActivate:[A.u]}];let U=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[A.u],imports:[[v.Bz.forChild(T)],v.Bz]}),i})(),S=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[l.ez,U,o.u5,o.UX]]}),i})()},7921:(y,p,n)=>{n.d(p,{K:()=>h});var o=n(2340),l=n(7587),v=n(520),f=n(4920);let h=(()=>{class e{constructor(r,a){this.http=r,this.baseUrlSvr=a,this.url="",this.url=`${this.baseUrlSvr.getOrigin()}${o.N.administrationPath}`,this.url+="session/"}liste(){return this.http.get(this.url+"all")}getOne(r){return this.http.get(this.url+r)}getActive(){return this.http.get(this.url+"active")}getNext(){return this.http.get(this.url+"next")}create(r){return this.http.post(this.url+"create",r)}update(r){return this.http.patch(this.url+(null==r?void 0:r.id),r)}updateForEntretien(r){return this.http.patch(this.url+"date_entretiens/"+(null==r?void 0:r.id),r)}delete(r){return this.http.delete(this.url+r)}}return e.\u0275fac=function(r){return new(r||e)(l.LFG(v.eN),l.LFG(f.x))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},437:(y,p,n)=>{n.d(p,{u:()=>r});var o=n(5193),l=n(7587),v=n(7671),f=n(3936),h=n(629),e=n(3270),g=n(9783);let r=(()=>{class a{constructor(m,E,_,c,D){this.router=m,this.tokenService=E,this.authService=_,this.storageService=c,this.messageService=D}canActivate(m,E){let _=this.storageService.getUserTokenConnected();if(null!=_){let c=this.tokenService.decodeToken(_).scope;if(this.tokenService.isLogged()&&(c==o.u.ADMIN||c==o.u.SUPER_ADMIN||c==o.u.JURY))return this.authService.isLogin.next(!0),!0}return this.authService.isLogin.next(!1),this.messageService.add({severity:"error",summary:"Erreur de connexion",detail:"Veuillez les identifiants d'un administrateur ou bien d'un super admin pour y avoir acc\xe8ss \xe0 la plateforme"}),this.router.navigate(["login"]),!1}}return a.\u0275fac=function(m){return new(m||a)(l.LFG(v.F0),l.LFG(f.B),l.LFG(h.e),l.LFG(e.V),l.LFG(g.ez))},a.\u0275prov=l.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()}}]);