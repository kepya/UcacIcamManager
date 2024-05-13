"use strict";(self.webpackChunkadmin_ucac_dashboard=self.webpackChunkadmin_ucac_dashboard||[]).push([[716],{6716:(b,a,r)=>{r.r(a),r.d(a,{PeriodeEntretienModule:()=>S});var o=r(2382),u=r(9808),p=r(7671);class c{}var i=r(7587),m=r(7921),n=r(3322),v=r(9783);function h(e,l){if(1&e&&(i.TgZ(0,"option",23),i._uU(1),i.qZA()),2&e){const t=l.$implicit;i.Q6J("value",t.id),i.xp6(1),i.Oqu(t.nom)}}function E(e,l){1&e&&(i.TgZ(0,"div"),i._uU(1," Veuillez s'il vous plait entrer une valeur "),i.qZA())}function Z(e,l){if(1&e&&(i.TgZ(0,"div",24),i.YNc(1,E,2,0,"div",25),i.qZA()),2&e){const t=i.oxw();i.xp6(1),i.Q6J("ngIf",t.formDisponibilityControl.session_id.errors.required)}}function y(e,l){1&e&&(i.TgZ(0,"div"),i._uU(1," Veuillez s'il vous plait entrer une valeur "),i.qZA())}function D(e,l){if(1&e&&(i.TgZ(0,"div",24),i.YNc(1,y,2,0,"div",25),i.qZA()),2&e){const t=i.oxw();i.xp6(1),i.Q6J("ngIf",t.formDisponibilityControl.debut_disponibilite.errors.required)}}function C(e,l){1&e&&(i.TgZ(0,"div"),i._uU(1," Veuillez s'il vous plait entrer une valeur "),i.qZA())}function T(e,l){if(1&e&&(i.TgZ(0,"div",24),i.YNc(1,C,2,0,"div",25),i.qZA()),2&e){const t=i.oxw();i.xp6(1),i.Q6J("ngIf",t.formDisponibilityControl.fin_disponibilite.errors.required)}}const f=function(e){return{required:e}};let A=(()=>{class e{constructor(t,s,d){this.sessionSrv=t,this.disponibiliteService=s,this.messageService=d,this.loading=!0,this.sessions=[],this.formDisponibility=new o.cw({session_id:new o.NI("",[o.kI.required]),debut_disponibilite:new o.NI(null,[o.kI.required]),fin_disponibilite:new o.NI(null,[o.kI.required])})}ngOnInit(){this.getSessions()}get formDisponibilityControl(){return this.formDisponibility.controls}getSessions(){this.sessionSrv.liste().subscribe({next:t=>{this.sessions=t},error:t=>{console.log("error: ",t)}})}createDisponibility(){let t=Object.assign({},this.formDisponibility.value);delete t.session_id,t=Object.assign(Object.assign({},t),{session_id:parseInt(this.formDisponibility.value.session_id,10)});let s=this.sessions.find(d=>d.id==t.session_id);s&&(s.date_debut_entretien=this.formDisponibility.value.debut_disponibilite,s.date_fin_entretien=this.formDisponibility.value.fin_disponibilite,this.sessionSrv.updateForEntretien(Object.assign({},s)).subscribe({next:d=>{this.messageService.add({severity:"success",summary:"Modification de session",detail:"Modification de la p\xe9riode des entretiens effectu\xe9e avec success"}),this.disponibility=new c,this.formDisponibility.reset()},error:d=>{console.log("Error: ",d),this.messageService.add({severity:"error",summary:"Erreur de modification",detail:d.message})}}))}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(m.K),i.Y36(n.T),i.Y36(v.ez))},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-periode-entretien"]],decls:47,vars:16,consts:[[1,"session-page","page-content"],[1,"page-title"],[1,"pi","pi-angle-right"],[1,"card"],[1,"header"],[1,"title"],[1,"form",3,"formGroup","ngSubmit"],[2,"margin-bottom","1em","margin-left","3em"],[1,"line"],[1,"main"],[1,"row"],[1,"form-group"],["for",""],["formControlName","session_id",3,"ngClass"],["value",""],[3,"value",4,"ngFor","ngForOf"],["class","alert",4,"ngIf"],["type","date","formControlName","debut_disponibilite","id","",3,"ngClass"],["type","date","formControlName","fin_disponibilite","id","",3,"value","ngClass"],[1,"footer"],[1,"btn-group"],["type","submit",1,"btn","btn-info",3,"disabled"],[1,"btn","btn-danger",3,"click"],[3,"value"],[1,"alert"],[4,"ngIf"]],template:function(t,s){if(1&t&&(i.TgZ(0,"section",0)(1,"h1",1),i._uU(2,"Entretiens "),i._UZ(3,"i",2),i._uU(4," D\xe9finition p\xe9riode entretiens"),i.qZA(),i.TgZ(5,"div",3)(6,"div",4)(7,"h3",5),i._uU(8,"P\xe9riode des entretiens "),i.qZA()(),i.TgZ(9,"form",6),i.NdJ("ngSubmit",function(){return s.createDisponibility()}),i.TgZ(10,"div",4),i._uU(11," Veullez remplir les champs suivants "),i.TgZ(12,"ul",7)(13,"li"),i._uU(14," Date d\xe9but correspond \xe0 la date de d\xe9but des entretiens. "),i.qZA(),i.TgZ(15,"li"),i._uU(16," Date fin correspond \xe0 la date de fin des entretiens. "),i.qZA()(),i._UZ(17,"div",8),i.qZA(),i.TgZ(18,"div",9)(19,"div",10)(20,"div",11)(21,"label",12),i._uU(22,"Session *"),i.qZA(),i.TgZ(23,"select",13)(24,"option",14),i._uU(25,"Session d'entretion"),i.qZA(),i.YNc(26,h,2,2,"option",15),i.qZA()(),i.YNc(27,Z,2,1,"div",16),i.qZA(),i.TgZ(28,"div",10)(29,"div",11)(30,"label",12),i._uU(31,"Date de d\xe9but *"),i.qZA(),i._UZ(32,"input",17),i.qZA(),i.YNc(33,D,2,1,"div",16),i.qZA(),i.TgZ(34,"div",10)(35,"div",11)(36,"label",12),i._uU(37,"Date de fin *"),i.qZA(),i._UZ(38,"input",18),i.qZA(),i.YNc(39,T,2,1,"div",16),i.qZA()(),i.TgZ(40,"div",19),i._UZ(41,"div",8),i.TgZ(42,"div",20)(43,"button",21),i._uU(44," Soumettre "),i.qZA(),i.TgZ(45,"button",22),i.NdJ("click",function(){return s.formDisponibility.reset()}),i._uU(46," Renitialiser "),i.qZA()()()()()()),2&t){let d;i.xp6(9),i.Q6J("formGroup",s.formDisponibility),i.xp6(14),i.Q6J("ngClass",i.VKq(10,f,s.formDisponibility.get("session_id").invalid)),i.xp6(3),i.Q6J("ngForOf",s.sessions),i.xp6(1),i.Q6J("ngIf",s.formDisponibilityControl.session_id.errors),i.xp6(5),i.Q6J("ngClass",i.VKq(12,f,s.formDisponibility.get("debut_disponibilite").invalid)),i.xp6(1),i.Q6J("ngIf",s.formDisponibilityControl.debut_disponibilite.errors),i.xp6(5),i.Q6J("value",null==(d=s.formDisponibility.get("fin_disponibilite"))?null:d.value)("ngClass",i.VKq(14,f,s.formDisponibility.get("fin_disponibilite").invalid)),i.xp6(1),i.Q6J("ngIf",s.formDisponibilityControl.fin_disponibilite.errors),i.xp6(4),i.Q6J("disabled",s.formDisponibility.invalid)}},directives:[o._Y,o.JL,o.sg,o.EJ,o.JJ,o.u,u.mk,o.YN,o.Kr,u.sg,u.O5,o.Fj],encapsulation:2}),e})();var _=r(437);const P=[{path:"",component:A,canActivate:[_.u]}];let U=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({providers:[_.u],imports:[[p.Bz.forChild(P)],p.Bz]}),e})(),S=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[u.ez,U,o.u5,o.UX]]}),e})()},7921:(b,a,r)=>{r.d(a,{K:()=>g});var o=r(2340),u=r(7587),p=r(520),c=r(4920);let g=(()=>{class i{constructor(n,v){this.http=n,this.baseUrlSvr=v,this.url="",this.url=`${this.baseUrlSvr.getOrigin()}${o.N.administrationPath}`,this.url+="session/"}liste(){return this.http.get(this.url+"all")}getOne(n){return this.http.get(this.url+n)}getActive(){return this.http.get(this.url+"active")}getNext(){return this.http.get(this.url+"next")}create(n){return this.http.post(this.url+"create",n)}update(n){return this.http.patch(this.url+(null==n?void 0:n.id),n)}updateForEntretien(n){return this.http.patch(this.url+"date_entretiens/"+(null==n?void 0:n.id),n)}delete(n){return this.http.delete(this.url+n)}}return i.\u0275fac=function(n){return new(n||i)(u.LFG(p.eN),u.LFG(c.x))},i.\u0275prov=u.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()}}]);