import{s as I,n as w,c as A,u as N,g as O,d as B}from"../chunks/scheduler.f69bda83.js";import{S as M,i as V,g,s as y,h as $,j as b,y as C,c as x,f as v,k as h,a as L,x as p,z as H,A as k,m as q,n as P,r as U,u as W,v as Z,d as T,t as S,w as F}from"../chunks/index.92139430.js";import{b as G}from"../chunks/paths.904b6b76.js";function j(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}const J=!0,le=Object.freeze(Object.defineProperty({__proto__:null,prerender:J},Symbol.toStringTag,{value:"Module"})),z=["markdown-test"];function E(n,e,t){const o=n.slice();return o[2]=e[t],o}function D(n){let e,t,o=n[2]+"",i,r;return{c(){e=g("div"),t=g("a"),i=q(o),r=y(),this.h()},l(l){e=$(l,"DIV",{class:!0});var s=b(e);t=$(s,"A",{href:!0,class:!0});var u=b(t);i=P(u,o),u.forEach(v),r=x(s),s.forEach(v),this.h()},h(){h(t,"href",`${G}/note/${n[2]}`),h(t,"class","svelte-1duwm2"),h(e,"class","whitespace-nowrap overflow-hidden")},m(l,s){L(l,e,s),p(e,t),p(t,i),p(e,r)},p:w,d(l){l&&v(e)}}}function K(n){let e,t,o='<div class="w-full flex justify-center"><svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.1336L4.583 9.7166L12 2.2834L9.7166 0L0 9.7166L9.7166 19.4332L12 17.1336Z" fill="gray"></path></svg></div>',i,r,l,s,u,m=j(z),f=[];for(let c=0;c<m.length;c+=1)f[c]=D(E(n,m,c));return{c(){e=g("div"),t=g("button"),t.innerHTML=o,i=y(),r=g("div");for(let c=0;c<f.length;c+=1)f[c].c();this.h()},l(c){e=$(c,"DIV",{class:!0,style:!0});var d=b(e);t=$(d,"BUTTON",{class:!0,"data-svelte-h":!0}),C(t)!=="svelte-v09kpb"&&(t.innerHTML=o),i=x(d),r=$(d,"DIV",{class:!0});var a=b(r);for(let _=0;_<f.length;_+=1)f[_].l(a);a.forEach(v),d.forEach(v),this.h()},h(){h(t,"class","absolute top-0 -right-5 w-5 h-full bg-[#111] hover:bg-zinc-800 flex flex-col justify-center"),h(r,"class","w-full h-full p-5"),h(e,"class","h-full bg-zinc-900 text-zinc-300 relative transition-all"),h(e,"style",l=`width: ${n[0]}px`)},m(c,d){L(c,e,d),p(e,t),p(e,i),p(e,r);for(let a=0;a<f.length;a+=1)f[a]&&f[a].m(r,null);s||(u=H(t,"click",n[1]),s=!0)},p(c,[d]){if(d&0){m=j(z);let a;for(a=0;a<m.length;a+=1){const _=E(c,m,a);f[a]?f[a].p(_,d):(f[a]=D(_),f[a].c(),f[a].m(r,null))}for(;a<f.length;a+=1)f[a].d(1);f.length=m.length}d&1&&l!==(l=`width: ${c[0]}px`)&&h(e,"style",l)},i:w,o:w,d(c){c&&v(e),k(f,c),s=!1,u()}}}function Q(n,e,t){let o=200;return[o,()=>{t(0,o=o===200?0:200)}]}class R extends M{constructor(e){super(),V(this,e,Q,K,I,{})}}function X(n){let e,t,o,i;t=new R({});const r=n[1].default,l=A(r,n,n[0],null);return{c(){e=g("div"),U(t.$$.fragment),o=y(),l&&l.c(),this.h()},l(s){e=$(s,"DIV",{class:!0});var u=b(e);W(t.$$.fragment,u),o=x(u),l&&l.l(u),u.forEach(v),this.h()},h(){h(e,"class","flex w-screen h-screen ")},m(s,u){L(s,e,u),Z(t,e,null),p(e,o),l&&l.m(e,null),i=!0},p(s,[u]){l&&l.p&&(!i||u&1)&&N(l,r,s,s[0],i?B(r,s[0],u,null):O(s[0]),null)},i(s){i||(T(t.$$.fragment,s),T(l,s),i=!0)},o(s){S(t.$$.fragment,s),S(l,s),i=!1},d(s){s&&v(e),F(t),l&&l.d(s)}}}function Y(n,e,t){let{$$slots:o={},$$scope:i}=e;return n.$$set=r=>{"$$scope"in r&&t(0,i=r.$$scope)},[i,o]}class ne extends M{constructor(e){super(),V(this,e,Y,X,I,{})}}export{ne as component,le as universal};
