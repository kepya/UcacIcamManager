(self.webpackChunkadmin_ucac_dashboard=self.webpackChunkadmin_ucac_dashboard||[]).push([[592],{7921:(E,_,r)=>{"use strict";r.d(_,{K:()=>v});var l=r(2340),i=r(7587),h=r(520),u=r(4920);let v=(()=>{class e{constructor(t,c){this.http=t,this.baseUrlSvr=c,this.url="",this.url=`${this.baseUrlSvr.getOrigin()}${l.N.administrationPath}`,this.url+="session/"}liste(){return this.http.get(this.url+"all")}getOne(t){return this.http.get(this.url+t)}getActive(){return this.http.get(this.url+"active")}getNext(){return this.http.get(this.url+"next")}create(t){return this.http.post(this.url+"create",t)}update(t){return this.http.patch(this.url+(null==t?void 0:t.id),t)}updateForEntretien(t){return this.http.patch(this.url+"date_entretiens/"+(null==t?void 0:t.id),t)}delete(t){return this.http.delete(this.url+t)}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(h.eN),i.LFG(u.x))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},7231:(E,_,r)=>{"use strict";r.d(_,{d:()=>l});var l=(()=>{return(i=l||(l={})).Echec="Echec",i.En_Attente="En_Attente",i.Admissible="Admissible",i.Admis="Admis",l;var i})()},4109:(E,_,r)=>{"use strict";r.d(_,{h:()=>l});class l{}},6093:(E,_,r)=>{"use strict";r.d(_,{j:()=>l});class l{}},4074:(E,_,r)=>{"use strict";r.d(_,{T:()=>l});class l{constructor(){this.description="",this.centreExamenList=[]}}},62:(E,_,r)=>{"use strict";r.d(_,{v:()=>h});var l=r(9808),i=r(7587);let h=(()=>{class u{constructor(){}calculerJours(e,o){var t=Math.abs(o-e);return Math.floor(t/864e5)}genererDates(e,o){let t=this.calculerJours(e,o);console.log("Nombre de jours : "+t);var c=[];let n=new Date(e);for(let s=0;s<t;s++)n.setDate(n.getDate()+s),c.push(new Date(n));return c}formatDate(e){let t=(0,l.p6)(e,"shortTime","fr-FR").split(":");return t[0]+"h"+t[1]}buildDateWithTime(e){const o=new Date,t=new Date(`${o.getFullYear()}-${o.getMonth()+1}-${o.getDate()} ${e}`);return console.log("time",t),t}buildDate(e,o){let c,n,t=o.split("-"),p=t[0].split("h");e.setHours(parseInt(p[0],10)),e.setMinutes(parseInt(p[1],10)),c=e.getTime();let d=t[1].split("h");return e.setHours(parseInt(d[0],10)),e.setMinutes(parseInt(d[1],10)),n=e.getTime(),{startDate:c,endDate:n}}}return u.\u0275fac=function(e){return new(e||u)},u.\u0275prov=i.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},7212:(E,_,r)=>{"use strict";r.d(_,{R:()=>v});var l=r(2340),i=r(7587),h=r(520),u=r(4920);let v=(()=>{class e{constructor(t,c){this.http=t,this.baseUrlSvr=c,this.url="",this.url=`${this.baseUrlSvr.getOrigin()}${l.N.interviewPath}`,this.url+="comptedisponibilite/"}liste(){return this.http.get(this.url+"all")}getOne(t){return this.http.get(this.url+t)}create(t){return this.http.post(this.url+"create",t)}update(t){return this.http.patch(this.url+(null==t?void 0:t.id),t)}delete(t){return this.http.delete(this.url+t)}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(h.eN),i.LFG(u.x))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},3322:(E,_,r)=>{"use strict";r.d(_,{T:()=>v});var l=r(2340),i=r(7587),h=r(520),u=r(4920);let v=(()=>{class e{constructor(t,c){this.http=t,this.baseUrlSvr=c,this.url="",this.url=`${this.baseUrlSvr.getOrigin()}${l.N.interviewPath}`,this.url+="disponibilite/"}liste(){return this.http.get(this.url+"all")}getOne(t){return this.http.get(this.url+t)}create(t){return this.http.post(this.url+"create",t)}update(t){return this.http.patch(this.url+(null==t?void 0:t.id),t)}delete(t){return this.http.delete(this.url+t)}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(h.eN),i.LFG(u.x))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},8766:(E,_,r)=>{"use strict";r.d(_,{Y:()=>v});var l=r(2340),i=r(7587),h=r(520),u=r(4920);let v=(()=>{class e{constructor(t,c){this.http=t,this.baseUrlSvr=c,this.url="",this.url=`${this.baseUrlSvr.getOrigin()}${l.N.interviewPath}`,this.url+="note/"}liste(){return this.http.get(this.url+"all")}getOne(t){return this.http.get(this.url+t)}create(t){return this.http.post(this.url+"create",t)}update(t){return this.http.patch(this.url+(null==t?void 0:t.id),t)}delete(t){return this.http.delete(this.url+t)}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(h.eN),i.LFG(u.x))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},9965:(E,_,r)=>{"use strict";r.d(_,{P:()=>v});var l=r(2340),i=r(7587),h=r(520),u=r(4920);let v=(()=>{class e{constructor(t,c){this.http=t,this.baseUrlSvr=c,this.url="",this.url=`${this.baseUrlSvr.getOrigin()}${l.N.administrationPath}`,this.url+="site/"}liste(){return this.http.get(this.url+"all")}allByZone(t){return this.http.get(this.url+"allbyzone/"+t)}getOne(t){return this.http.get(this.url+t)}create(t){return this.http.post(this.url+"create",t)}update(t){return this.http.patch(this.url+(null==t?void 0:t.id),t)}delete(t){return this.http.delete(this.url+t)}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(h.eN),i.LFG(u.x))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},4327:function(E,_){var i;void 0!==(i=function(){"use strict";function u(n,s,p){var a=new XMLHttpRequest;a.open("GET",n),a.responseType="blob",a.onload=function(){c(a.response,s,p)},a.onerror=function(){console.error("could not download file")},a.send()}function v(n){var s=new XMLHttpRequest;s.open("HEAD",n,!1);try{s.send()}catch(p){}return 200<=s.status&&299>=s.status}function e(n){try{n.dispatchEvent(new MouseEvent("click"))}catch(p){var s=document.createEvent("MouseEvents");s.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),n.dispatchEvent(s)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,t=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!t?function(n,s,p){var a=o.URL||o.webkitURL,d=document.createElement("a");d.download=s=s||n.name||"download",d.rel="noopener","string"==typeof n?(d.href=n,d.origin===location.origin?e(d):v(d.href)?u(n,s,p):e(d,d.target="_blank")):(d.href=a.createObjectURL(n),setTimeout(function(){a.revokeObjectURL(d.href)},4e4),setTimeout(function(){e(d)},0))}:"msSaveOrOpenBlob"in navigator?function(n,s,p){if(s=s||n.name||"download","string"!=typeof n)navigator.msSaveOrOpenBlob(function h(n,s){return void 0===s?s={autoBom:!1}:"object"!=typeof s&&(console.warn("Deprecated: Expected third argument to be a object"),s={autoBom:!s}),s.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(n.type)?new Blob(["\ufeff",n],{type:n.type}):n}(n,p),s);else if(v(n))u(n,s,p);else{var a=document.createElement("a");a.href=n,a.target="_blank",setTimeout(function(){e(a)})}}:function(n,s,p,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof n)return u(n,s,p);var d="application/octet-stream"===n.type,M=/constructor/i.test(o.HTMLElement)||o.safari,O=/CriOS\/[\d]+/.test(navigator.userAgent);if((O||d&&M||t)&&"undefined"!=typeof FileReader){var f=new FileReader;f.onloadend=function(){var m=f.result;m=O?m:m.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=m:location=m,a=null},f.readAsDataURL(n)}else{var g=o.URL||o.webkitURL,D=g.createObjectURL(n);a?a.location=D:location.href=D,a=null,setTimeout(function(){g.revokeObjectURL(D)},4e4)}});o.saveAs=c.saveAs=c,E.exports=c}.apply(_,[]))&&(E.exports=i)}}]);