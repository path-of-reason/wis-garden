import{s as b,n as m,c as z,u as H,g as S,d as k}from"../chunks/scheduler.e108d1fd.js";import{S as y,i as L,g as d,s as x,h,j as T,y as g,c as M,f as _,k as u,a as j,x as p,z as C,r as D,u as I,v as N,d as $,t as w,w as V}from"../chunks/index.bd28377b.js";function B(o){let e,s,r='<div class="w-full flex justify-center"><svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.1336L4.583 9.7166L12 2.2834L9.7166 0L0 9.7166L9.7166 19.4332L12 17.1336Z" fill="gray"></path></svg></div>',l,n,a='<div class="whitespace-nowrap overflow-hidden"><a href="/note/test" class="svelte-1duwm2">test</a></div>',t,i,v;return{c(){e=d("div"),s=d("button"),s.innerHTML=r,l=x(),n=d("div"),n.innerHTML=a,this.h()},l(f){e=h(f,"DIV",{class:!0,style:!0});var c=T(e);s=h(c,"BUTTON",{class:!0,"data-svelte-h":!0}),g(s)!=="svelte-v09kpb"&&(s.innerHTML=r),l=M(c),n=h(c,"DIV",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-14j8pi8"&&(n.innerHTML=a),c.forEach(_),this.h()},h(){u(s,"class","absolute top-0 -right-5 w-5 h-full bg-[#111] hover:bg-zinc-800 flex flex-col justify-center"),u(n,"class","w-full h-full p-5"),u(e,"class","h-full bg-zinc-900 text-zinc-300 relative transition-all"),u(e,"style",t=`width: ${o[0]}px`)},m(f,c){j(f,e,c),p(e,s),p(e,l),p(e,n),i||(v=C(s,"click",o[1]),i=!0)},p(f,[c]){c&1&&t!==(t=`width: ${f[0]}px`)&&u(e,"style",t)},i:m,o:m,d(f){f&&_(e),i=!1,v()}}}function E(o,e,s){let r=200;return[r,()=>{s(0,r=r===200?0:200)}]}class q extends y{constructor(e){super(),L(this,e,E,B,b,{})}}function O(o){let e,s,r,l;s=new q({});const n=o[1].default,a=z(n,o,o[0],null);return{c(){e=d("div"),D(s.$$.fragment),r=x(),a&&a.c(),this.h()},l(t){e=h(t,"DIV",{class:!0});var i=T(e);I(s.$$.fragment,i),r=M(i),a&&a.l(i),i.forEach(_),this.h()},h(){u(e,"class","flex w-screen h-screen ")},m(t,i){j(t,e,i),N(s,e,null),p(e,r),a&&a.m(e,null),l=!0},p(t,[i]){a&&a.p&&(!l||i&1)&&H(a,n,t,t[0],l?k(n,t[0],i,null):S(t[0]),null)},i(t){l||($(s.$$.fragment,t),$(a,t),l=!0)},o(t){w(s.$$.fragment,t),w(a,t),l=!1},d(t){t&&_(e),V(s),a&&a.d(t)}}}function U(o,e,s){let{$$slots:r={},$$scope:l}=e;return o.$$set=n=>{"$$scope"in n&&s(0,l=n.$$scope)},[l,r]}class A extends y{constructor(e){super(),L(this,e,U,O,b,{})}}export{A as component};
