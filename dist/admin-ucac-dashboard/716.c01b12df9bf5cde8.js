"use strict";(self.webpackChunkadmin_ucac_dashboard=self.webpackChunkadmin_ucac_dashboard||[]).push([[716],{6716:(C,m,o)=>{o.r(m),o.d(m,{PeriodeEntretienModule:()=>S});var n=o(2382),d=o(9808),v=o(7671);class _{}var i=o(7587),g=o(7921),b=o(3322),a=o(9783);function E(e,r){if(1&e&&(i.TgZ(0,"option",22),i._uU(1),i.qZA()),2&e){const t=r.$implicit;i.Q6J("value",t.id),i.xp6(1),i.Oqu(t.nom)}}function c(e,r){1&e&&(i.TgZ(0,"div"),i._uU(1," Veuillez s'il vous plait entrer une valeur "),i.qZA())}function f(e,r){if(1&e&&(i.TgZ(0,"div",23),i.YNc(1,c,2,0,"div",24),i.qZA()),2&e){const t=i.oxw();i.xp6(1),i.Q6J("ngIf",t.formDisponibilityControl.session_id.errors.required)}}function p(e,r){1&e&&(i.TgZ(0,"div"),i._uU(1," Veuillez s'il vous plait entrer une valeur "),i.qZA())}function u(e,r){if(1&e&&(i.TgZ(0,"div",23),i.YNc(1,p,2,0,"div",24),i.qZA()),2&e){const t=i.oxw();i.xp6(1),i.Q6J("ngIf",t.formDisponibilityControl.debut_disponibilite.errors.required)}}function h(e,r){1&e&&(i.TgZ(0,"div"),i._uU(1," Veuillez s'il vous plait entrer une valeur "),i.qZA())}function A(e,r){if(1&e&&(i.TgZ(0,"div",23),i.YNc(1,h,2,0,"div",24),i.qZA()),2&e){const t=i.oxw();i.xp6(1),i.Q6J("ngIf",t.formDisponibilityControl.fin_disponibilite.errors.required)}}const Z=function(e){return{required:e}};let T=(()=>{class e{constructor(t,s,l){this.sessionSrv=t,this.disponibiliteService=s,this.messageService=l,this.loading=!0,this.sessions=[],this.formDisponibility=new n.cw({session_id:new n.NI("",[n.kI.required]),debut_disponibilite:new n.NI(null,[n.kI.required]),fin_disponibilite:new n.NI(null,[n.kI.required])})}ngOnInit(){this.getSessions()}get formDisponibilityControl(){return this.formDisponibility.controls}getSessions(){this.sessionSrv.liste().subscribe({next:t=>{this.sessions=t},error:t=>{console.log("error: ",t)}})}createDisponibility(){let t=Object.assign({},this.formDisponibility.value);delete t.session_id,t=Object.assign(Object.assign({},t),{session_id:parseInt(this.formDisponibility.value.session_id,10)});let s=this.sessions.find(l=>l.id==t.session_id);s&&(s.date_debut_entretien=this.formDisponibility.value.debut_disponibilite,s.date_fin_entretien=this.formDisponibility.value.fin_disponibilite,this.sessionSrv.updateForEntretien(Object.assign({},s)).subscribe({next:l=>{this.messageService.add({severity:"success",summary:"Modification de session",detail:"Modification effectu\xe9e avec success"}),this.disponibility=new _,this.formDisponibility.reset()},error:l=>{console.log("Error: ",l),this.messageService.add({severity:"error",summary:"Erreur de modification",detail:l.message})}}))}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(g.K),i.Y36(b.T),i.Y36(a.ez))},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-periode-entretien"]],decls:43,vars:16,consts:[[1,"session-page","page-content"],[1,"page-title"],[1,"pi","pi-angle-right"],[1,"card"],[1,"header"],[1,"title"],[1,"line"],[1,"form",3,"formGroup","ngSubmit"],[1,"main"],[1,"row"],[1,"form-group"],["for",""],["formControlName","session_id",3,"ngClass"],["value",""],[3,"value",4,"ngFor","ngForOf"],["class","alert",4,"ngIf"],["type","datetime-local","formControlName","debut_disponibilite","id","",3,"ngClass"],["type","datetime-local","formControlName","fin_disponibilite","id","",3,"value","ngClass"],[1,"footer"],[1,"btn-group"],["type","submit",1,"btn","btn-info",3,"disabled"],[1,"btn","btn-danger",3,"click"],[3,"value"],[1,"alert"],[4,"ngIf"]],template:function(t,s){if(1&t&&(i.TgZ(0,"section",0)(1,"h1",1),i._uU(2,"Entretiens "),i._UZ(3,"i",2),i._uU(4," D\xe9finition p\xe9riode entretiens"),i.qZA(),i.TgZ(5,"div",3)(6,"div",4)(7,"h3",5),i._uU(8,"P\xe9riode des entretiens "),i.qZA()(),i._UZ(9,"div",6),i.TgZ(10,"form",7),i.NdJ("ngSubmit",function(){return s.createDisponibility()}),i.TgZ(11,"div",4),i._uU(12," Veullez remplir les champs suivants "),i._UZ(13,"div",6),i.qZA(),i.TgZ(14,"div",8)(15,"div",9)(16,"div",10)(17,"label",11),i._uU(18,"Session *"),i.qZA(),i.TgZ(19,"select",12)(20,"option",13),i._uU(21,"Session d'entretion"),i.qZA(),i.YNc(22,E,2,2,"option",14),i.qZA()(),i.YNc(23,f,2,1,"div",15),i.qZA(),i.TgZ(24,"div",9)(25,"div",10)(26,"label",11),i._uU(27,"Date de d\xe9but *"),i.qZA(),i._UZ(28,"input",16),i.qZA(),i.YNc(29,u,2,1,"div",15),i.qZA(),i.TgZ(30,"div",9)(31,"div",10)(32,"label",11),i._uU(33,"Date de fin *"),i.qZA(),i._UZ(34,"input",17),i.qZA(),i.YNc(35,A,2,1,"div",15),i.qZA()(),i.TgZ(36,"div",18),i._UZ(37,"div",6),i.TgZ(38,"div",19)(39,"button",20),i._uU(40," Soumettre "),i.qZA(),i.TgZ(41,"button",21),i.NdJ("click",function(){return s.formDisponibility.reset()}),i._uU(42," Renitialiser "),i.qZA()()()()()()),2&t){let l;i.xp6(10),i.Q6J("formGroup",s.formDisponibility),i.xp6(9),i.Q6J("ngClass",i.VKq(10,Z,s.formDisponibility.get("session_id").invalid)),i.xp6(3),i.Q6J("ngForOf",s.sessions),i.xp6(1),i.Q6J("ngIf",s.formDisponibilityControl.session_id.errors),i.xp6(5),i.Q6J("ngClass",i.VKq(12,Z,s.formDisponibility.get("debut_disponibilite").invalid)),i.xp6(1),i.Q6J("ngIf",s.formDisponibilityControl.debut_disponibilite.errors),i.xp6(5),i.Q6J("value",null==(l=s.formDisponibility.get("fin_disponibilite"))?null:l.value)("ngClass",i.VKq(14,Z,s.formDisponibility.get("fin_disponibilite").invalid)),i.xp6(1),i.Q6J("ngIf",s.formDisponibilityControl.fin_disponibilite.errors),i.xp6(4),i.Q6J("disabled",s.formDisponibility.invalid)}},directives:[n._Y,n.JL,n.sg,n.EJ,n.JJ,n.u,d.mk,n.YN,n.Kr,d.sg,d.O5,n.Fj],encapsulation:2}),e})();var y=o(437);const P=[{path:"",component:T,canActivate:[y.u]}];let U=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({providers:[y.u],imports:[[v.Bz.forChild(P)],v.Bz]}),e})(),S=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[d.ez,U,n.u5,n.UX]]}),e})()},437:(C,m,o)=>{o.d(m,{u:()=>b});var n=o(5193),d=o(7587),v=o(7671),_=o(3936),D=o(629),i=o(3270),g=o(9783);let b=(()=>{class a{constructor(c,f,p,u,h){this.router=c,this.tokenService=f,this.authService=p,this.storageService=u,this.messageService=h}canActivate(c,f){let p=this.storageService.getUserTokenConnected();if(null!=p){let u=this.tokenService.decodeToken(p).scope;if(this.tokenService.isLogged()&&(u==n.u.ADMIN||u==n.u.SUPER_ADMIN||u==n.u.JURY))return this.authService.isLogin.next(!0),!0}return this.authService.isLogin.next(!1),this.messageService.add({severity:"error",summary:"Erreur de connexion",detail:"Veuillez les identifiants d'un administrateur ou bien d'un super admin pour y avoir acc\xe8ss \xe0 la plateforme"}),this.router.navigate(["login"]),!1}}return a.\u0275fac=function(c){return new(c||a)(d.LFG(v.F0),d.LFG(_.B),d.LFG(D.e),d.LFG(i.V),d.LFG(g.ez))},a.\u0275prov=d.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()}}]);