(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[141],{6673:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/programming/rust/basic_syntax/3.primitive_types",function(){return r(5823)}])},6648:function(e,n,r){"use strict";r.d(n,{Z:function(){return t}});var i=r(5893),a=r(1163),t={logo:function(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{children:"wis-garden"})})},project:{link:"https://path-of-reason.github.io/wis-garden/"},docsRepositoryBase:"https://github.com/path-of-reason/wis-garden",footer:{text:"made by wis"},head:function(){let e="wis-garden";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("meta",{name:"msapplication-TileColor",content:"#fff"}),(0,i.jsx)("meta",{httpEquiv:"Content-Language",content:"en"}),(0,i.jsx)("meta",{name:"description",content:"글"}),(0,i.jsx)("meta",{property:"og:title",content:e}),(0,i.jsx)("meta",{property:"og:description",content:"글"}),(0,i.jsx)("meta",{name:"apple-mobile-web-app-title",content:e}),(0,i.jsx)("link",{rel:"icon",type:"image/x-icon",href:"".concat("/wis-garden","/favicon.ico")})]})},feedback:{content:()=>(0,i.jsx)(i.Fragment,{children:"Question? Give me feedback →"}),labels:"feedback"},useNextSeoProps:function(){let{route:e}=(0,a.useRouter)(),n={description:"글"};return"/"!==e?n.titleTemplate="%s – Reading notes":n.titleTemplate="%s",n},i18n:[]}},5823:function(e,n,r){"use strict";r.r(n);var i=r(5893),a=r(2673),t=r(3931),s=r(6648);r(8594),r(9966);var l=r(1151);r(5675);let o={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/programming/rust/basic_syntax/3.primitive_types.md",route:"/programming/rust/basic_syntax/3.primitive_types",headings:[{depth:1,value:"원시 타입",id:"원시-타입"}],pageMap:[{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"katalk",route:"/katalk",children:[{kind:"MdxPage",name:"learn_lang",route:"/katalk/learn_lang"},{kind:"Meta",data:{learn_lang:"Learn Lang"}}]},{kind:"Folder",name:"marblewriter_magazin",route:"/marblewriter_magazin",children:[{kind:"Meta",data:{expressions:"말과 표정",search_path_for_concept_map:"개념지도에 관해"}},{kind:"MdxPage",name:"expressions",route:"/marblewriter_magazin/expressions"},{kind:"MdxPage",name:"search_path_for_concept_map",route:"/marblewriter_magazin/search_path_for_concept_map"}]},{kind:"MdxPage",name:"marblewriter_magazin",route:"/marblewriter_magazin"},{kind:"Folder",name:"programming",route:"/programming",children:[{kind:"Folder",name:"lunarvim",route:"/programming/lunarvim",children:[{kind:"MdxPage",name:"lunarvim",route:"/programming/lunarvim/lunarvim"},{kind:"MdxPage",name:"nvim-surround",route:"/programming/lunarvim/nvim-surround"},{kind:"Meta",data:{lunarvim:"Lunarvim","nvim-surround":"Nvim Surround"}}]},{kind:"Folder",name:"mac",route:"/programming/mac",children:[{kind:"MdxPage",name:"hangul",route:"/programming/mac/hangul"},{kind:"Meta",data:{hangul:"Hangul"}}]},{kind:"Folder",name:"rust",route:"/programming/rust",children:[{kind:"Folder",name:"basic_syntax",route:"/programming/rust/basic_syntax",children:[{kind:"MdxPage",name:"1.hello_world",route:"/programming/rust/basic_syntax/1.hello_world"},{kind:"MdxPage",name:"2.comment",route:"/programming/rust/basic_syntax/2.comment"},{kind:"MdxPage",name:"3.primitive_types",route:"/programming/rust/basic_syntax/3.primitive_types"},{kind:"Meta",data:{"1.hello_world":"1.hello World","2.comment":"2.comment","3.primitive_types":"3.primitive Types"}}]}]}]},{kind:"Meta",data:{index:"Index",marblewriter_magazin:"Marblewriter Magazin"}}],flexsearch:{codeblocks:!0},title:"원시 타입"},pageNextRoute:"/programming/rust/basic_syntax/3.primitive_types",nextraLayout:t.ZP,themeConfig:s.Z};function d(e){let n=Object.assign({h1:"h1",ul:"ul",li:"li",code:"code"},(0,l.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{children:"원시 타입"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["양의 정수","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"u8"}),"  : 0 ~ 255"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"u64"})," : 0 ~ 18,446,744,073,709,551,615"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["정수","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"i8"})," : -128 ~ 127"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"i64"})," : -9,223,372,036,854,775,808 ~ 9,223,372,036,854,775,807"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["부동소수점","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"f32"})," : -3.4_10^38 ~ 3.4_10^38, 대략 소수점 이하 7자리 수 -> 잘 안씀"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"f64"})," : f32대비 속도차이가 잘 나지않아 자주 씀"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["boolean : ",(0,i.jsx)(n.code,{children:"true"})," / ",(0,i.jsx)(n.code,{children:"false"})]}),"\n",(0,i.jsx)(n.li,{children:"문자 : 'a'"}),"\n",(0,i.jsxs)(n.li,{children:["문자열","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"&str"}),' : "hello", 레퍼런스타입']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"String"})," : ",(0,i.jsx)(n.code,{children:'"hello".to_string()'}),", ",(0,i.jsx)(n.code,{children:'String::from("hello")'})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"튜플 : ('a', \"hello\", 32)"}),"\n",(0,i.jsx)(n.li,{children:"배열 : [1, 2, 3, 4, 5] 배열의 내부는 같은 타입들로 구성"}),"\n"]})]})}n.default=(0,a.j)(o)}},function(e){e.O(0,[774,186,888,179],function(){return e(e.s=6673)}),_N_E=e.O()}]);