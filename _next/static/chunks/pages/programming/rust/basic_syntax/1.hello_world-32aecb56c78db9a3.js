(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[402],{6743:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/programming/rust/basic_syntax/1.hello_world",function(){return r(6475)}])},6648:function(e,n,r){"use strict";r.d(n,{Z:function(){return i}});var a=r(5893),s=r(1163),i={logo:function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{children:"wis-garden"})})},project:{link:"https://path-of-reason.github.io/wis-garden/"},docsRepositoryBase:"https://github.com/path-of-reason/wis-garden",footer:{text:"made by wis"},head:function(){let e="wis-garden";return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("meta",{name:"msapplication-TileColor",content:"#fff"}),(0,a.jsx)("meta",{httpEquiv:"Content-Language",content:"en"}),(0,a.jsx)("meta",{name:"description",content:"글"}),(0,a.jsx)("meta",{property:"og:title",content:e}),(0,a.jsx)("meta",{property:"og:description",content:"글"}),(0,a.jsx)("meta",{name:"apple-mobile-web-app-title",content:e}),(0,a.jsx)("link",{rel:"icon",type:"image/x-icon",href:"".concat("/wis-garden","/favicon.ico")})]})},feedback:{content:()=>(0,a.jsx)(a.Fragment,{children:"Question? Give me feedback →"}),labels:"feedback"},useNextSeoProps:function(){let{route:e}=(0,s.useRouter)(),n={description:"글"};return"/"!==e?n.titleTemplate="%s – Reading notes":n.titleTemplate="%s",n},i18n:[]}},6475:function(e,n,r){"use strict";r.r(n);var a=r(5893),s=r(2673),i=r(3931),l=r(6648);r(8594),r(9966);var t=r(1151);r(5675);let o={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/programming/rust/basic_syntax/1.hello_world.md",route:"/programming/rust/basic_syntax/1.hello_world",headings:[{depth:1,value:'println 함수로 "hello world" 작성하기',id:"println-함수로-hello-world-작성하기"},{depth:2,value:"cargo new프로젝트 생성",id:"cargo-new프로젝트-생성"},{depth:2,value:"hello, world! 컴파일과 실행",id:"hello-world-컴파일과-실행"}],pageMap:[{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"katalk",route:"/katalk",children:[{kind:"MdxPage",name:"learn_lang",route:"/katalk/learn_lang"},{kind:"Meta",data:{learn_lang:"Learn Lang"}}]},{kind:"Folder",name:"marblewriter_magazin",route:"/marblewriter_magazin",children:[{kind:"Meta",data:{expressions:"말과 표정",search_path_for_concept_map:"개념지도에 관해"}},{kind:"MdxPage",name:"expressions",route:"/marblewriter_magazin/expressions"},{kind:"MdxPage",name:"search_path_for_concept_map",route:"/marblewriter_magazin/search_path_for_concept_map"}]},{kind:"MdxPage",name:"marblewriter_magazin",route:"/marblewriter_magazin"},{kind:"Folder",name:"programming",route:"/programming",children:[{kind:"Folder",name:"lunarvim",route:"/programming/lunarvim",children:[{kind:"MdxPage",name:"lunarvim",route:"/programming/lunarvim/lunarvim"},{kind:"MdxPage",name:"nvim-surround",route:"/programming/lunarvim/nvim-surround"},{kind:"Meta",data:{lunarvim:"Lunarvim","nvim-surround":"Nvim Surround"}}]},{kind:"Folder",name:"mac",route:"/programming/mac",children:[{kind:"MdxPage",name:"hangul",route:"/programming/mac/hangul"},{kind:"Meta",data:{hangul:"Hangul"}}]},{kind:"Folder",name:"rust",route:"/programming/rust",children:[{kind:"Folder",name:"basic_syntax",route:"/programming/rust/basic_syntax",children:[{kind:"MdxPage",name:"1.hello_world",route:"/programming/rust/basic_syntax/1.hello_world"},{kind:"MdxPage",name:"2.comment",route:"/programming/rust/basic_syntax/2.comment"},{kind:"MdxPage",name:"3.primitive_types",route:"/programming/rust/basic_syntax/3.primitive_types"},{kind:"Meta",data:{"1.hello_world":"1.hello World","2.comment":"2.comment","3.primitive_types":"3.primitive Types"}}]},{kind:"Folder",name:"mini_project",route:"/programming/rust/mini_project",children:[{kind:"MdxPage",name:"1.mini_project(with_chatgpt)",route:"/programming/rust/mini_project/1.mini_project(with_chatgpt)"},{kind:"Meta",data:{"1.mini_project(with_chatgpt)":"1.mini Project(with Chatgpt)"}}]}]}]},{kind:"Meta",data:{index:"Index",marblewriter_magazin:"Marblewriter Magazin"}}],flexsearch:{codeblocks:!0},title:'println 함수로 "hello world" 작성하기'},pageNextRoute:"/programming/rust/basic_syntax/1.hello_world",nextraLayout:i.ZP,themeConfig:l.Z};function c(e){let n=Object.assign({h1:"h1",code:"code",h2:"h2",pre:"pre",span:"span",p:"p"},(0,t.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{children:[(0,a.jsx)(n.code,{children:"println"}),' 함수로 "hello world" 작성하기']}),"\n",(0,a.jsxs)(n.h2,{id:"cargo-new프로젝트-생성",children:[(0,a.jsx)(n.code,{children:"cargo new"}),"프로젝트 생성"]}),"\n",(0,a.jsx)(n.pre,{"data-language":"shell","data-theme":"default",children:(0,a.jsx)(n.code,{"data-language":"shell","data-theme":"default",children:(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" cargo new hello_rust"})]})})}),"\n",(0,a.jsx)(n.p,{children:"프로젝트를 생성하면 루트폴더에 다음과 같은 파일이 생성되어있다.\n이 파일을 통해 디펜던시를 관리할 수 있다."}),"\n",(0,a.jsx)(n.pre,{"data-language":"toml","data-theme":"default",filename:"cargo.toml",children:(0,a.jsxs)(n.code,{"data-language":"toml","data-theme":"default",children:[(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"[package]"})}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"name "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"hello_rust"'})]}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"version "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"0.1.0"'})]}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"edition "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"2021"'}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"# 현재시간이 아니라 카고의 버전을 뜻한다."})]}),"\n",(0,a.jsx)(n.span,{className:"line",children:" "}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"[dependencies]"})})]})}),"\n",(0,a.jsx)(n.p,{children:"실행파일로 이동해보자."}),"\n",(0,a.jsx)(n.pre,{"data-language":"rust","data-theme":"default",filename:"src/main.rs",children:(0,a.jsxs)(n.code,{"data-language":"rust","data-theme":"default",children:[(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"fn"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"main"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"println!"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"hello, world!"'}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,a.jsx)(n.h2,{id:"hello-world-컴파일과-실행",children:"hello, world! 컴파일과 실행"}),"\n",(0,a.jsx)(n.p,{children:"기본셋팅값으로 헬로월드 출력문이 작성되어있다.\n개별 파일을 실행할때는 개별로 컴파일 하고 이후 바이너리 파일을 직접\n실행시켜줄 수 있다"}),"\n",(0,a.jsx)(n.pre,{"data-language":"shell","data-theme":"default",children:(0,a.jsxs)(n.code,{"data-language":"shell","data-theme":"default",children:[(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" rustc src/main.rs"})]}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" ./main"})]}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"hello,"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"world!"})]})]})}),"\n",(0,a.jsx)(n.p,{children:"rustc 명령어를 통해 코드를 컴파일하고"}),"\n",(0,a.jsx)(n.p,{children:"이를 실행하려면 빌드하고 컴파일된 파일을 실행해줄 수 있으나,\n러스트의 cargo는 이 두 과정을 한번에 처리할 수 있는 구문을 제공하고 있다."}),"\n",(0,a.jsx)(n.pre,{"data-language":"shell","data-theme":"default",children:(0,a.jsxs)(n.code,{"data-language":"shell","data-theme":"default",children:[(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" cargo run"})]}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"hello,"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"world!"})]})]})})]})}n.default=(0,s.j)(o)}},function(e){e.O(0,[774,186,888,179],function(){return e(e.s=6743)}),_N_E=e.O()}]);