(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[987],{9317:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/programming/lunarvim/nvim-surround",function(){return r(93)}])},6648:function(e,n,r){"use strict";r.d(n,{Z:function(){return a}});var s=r(5893),i=r(1163),a={logo:function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{children:"wis-garden"})})},project:{link:"https://path-of-reason.github.io/wis-garden/"},docsRepositoryBase:"https://github.com/path-of-reason/wis-garden",footer:{text:"made by wis"},head:function(){let e="wis-garden";return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("meta",{name:"msapplication-TileColor",content:"#fff"}),(0,s.jsx)("meta",{httpEquiv:"Content-Language",content:"en"}),(0,s.jsx)("meta",{name:"description",content:"글"}),(0,s.jsx)("meta",{property:"og:title",content:e}),(0,s.jsx)("meta",{property:"og:description",content:"글"}),(0,s.jsx)("meta",{name:"apple-mobile-web-app-title",content:e}),(0,s.jsx)("link",{rel:"icon",type:"image/x-icon",href:"".concat("/wis-garden","/favicon.ico")})]})},feedback:{content:()=>(0,s.jsx)(s.Fragment,{children:"Question? Give me feedback →"}),labels:"feedback"},useNextSeoProps:function(){let{route:e}=(0,i.useRouter)(),n={description:"글"};return"/"!==e?n.titleTemplate="%s – Reading notes":n.titleTemplate="%s",n},i18n:[]}},93:function(e,n,r){"use strict";r.r(n);var s=r(5893),i=r(2673),a=r(3931),t=r(6648);r(8594),r(9966);var l=r(1151);r(5675);let o={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/programming/lunarvim/nvim-surround.md",route:"/programming/lunarvim/nvim-surround",headings:[{depth:1,value:" nvim surround plugin ",id:"-nvim-surround-plugin-"},{depth:2,value:"설치",id:"설치"},{depth:2,value:"사용법",id:"사용법"}],pageMap:[{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"katalk",route:"/katalk",children:[{kind:"MdxPage",name:"learn_lang",route:"/katalk/learn_lang"},{kind:"Meta",data:{learn_lang:"Learn Lang"}}]},{kind:"Folder",name:"marblewriter_magazin",route:"/marblewriter_magazin",children:[{kind:"Meta",data:{expressions:"말과 표정",search_path_for_concept_map:"개념지도에 관해"}},{kind:"MdxPage",name:"expressions",route:"/marblewriter_magazin/expressions"},{kind:"MdxPage",name:"search_path_for_concept_map",route:"/marblewriter_magazin/search_path_for_concept_map"}]},{kind:"MdxPage",name:"marblewriter_magazin",route:"/marblewriter_magazin"},{kind:"Folder",name:"programming",route:"/programming",children:[{kind:"Folder",name:"lunarvim",route:"/programming/lunarvim",children:[{kind:"MdxPage",name:"lunarvim",route:"/programming/lunarvim/lunarvim"},{kind:"MdxPage",name:"nvim-surround",route:"/programming/lunarvim/nvim-surround"},{kind:"Meta",data:{lunarvim:"Lunarvim","nvim-surround":"Nvim Surround"}}]},{kind:"Folder",name:"mac",route:"/programming/mac",children:[{kind:"MdxPage",name:"hangul",route:"/programming/mac/hangul"},{kind:"Meta",data:{hangul:"Hangul"}}]},{kind:"Folder",name:"rust",route:"/programming/rust",children:[{kind:"Folder",name:"basic_syntax",route:"/programming/rust/basic_syntax",children:[{kind:"MdxPage",name:"1.hello_world",route:"/programming/rust/basic_syntax/1.hello_world"},{kind:"MdxPage",name:"2.comment",route:"/programming/rust/basic_syntax/2.comment"},{kind:"MdxPage",name:"3.primitive_types",route:"/programming/rust/basic_syntax/3.primitive_types"},{kind:"Meta",data:{"1.hello_world":"1.hello World","2.comment":"2.comment","3.primitive_types":"3.primitive Types"}}]},{kind:"Folder",name:"mini_project",route:"/programming/rust/mini_project",children:[{kind:"MdxPage",name:"1.mini_project(with_chatgpt)",route:"/programming/rust/mini_project/1.mini_project(with_chatgpt)"},{kind:"Meta",data:{"1.mini_project(with_chatgpt)":"1.mini Project(with Chatgpt)"}}]}]}]},{kind:"Meta",data:{index:"Index",marblewriter_magazin:"Marblewriter Magazin"}}],flexsearch:{codeblocks:!0},title:" nvim surround plugin "},pageNextRoute:"/programming/lunarvim/nvim-surround",nextraLayout:a.ZP,themeConfig:t.Z};function c(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",pre:"pre",span:"span"},(0,l.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{children:(0,s.jsx)(n.a,{href:"https://github.com/kylechui/nvim-surround",children:" nvim surround plugin "})}),"\n",(0,s.jsxs)(n.p,{children:["빔의 기본설정에는 브라켓을 씌우는 로직이 없어서 일일히 찾아가서 씌워줘야 한다.\nvscode나 다른 여타 IDE 를 사용하면 브라켓을 씌울 글자를 셀렉트하고\n브라켓을 입력하면 바로 입력된다. 키보드 입력은",(0,s.jsx)(n.code,{children:"shift"})," + ",(0,s.jsx)(n.code,{children:"opt"})," + ",(0,s.jsx)(n.code,{children:"arrowkey"})," + ",(0,s.jsx)(n.code,{children:"["}),"\n이렇게 네번의 키입력이 있을때 작동한다."]}),"\n",(0,s.jsx)(n.p,{children:"이번에 소개하는 플러그인은 해당 위치를 직접 찾아가서 브라켓을 씌우지 않고\n다른 IDE 에서 사용하듯이 적당한 키입력을 통해 브라켓을 씌워주는 플러그인이다."}),"\n",(0,s.jsx)(n.h2,{id:"설치",children:"설치"}),"\n",(0,s.jsx)(n.p,{children:"설치법은 깃헙페이지에서 제시한대로 다음과 같다."}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",filename:"init.lua",children:(0,s.jsxs)(n.code,{"data-language":"lua","data-theme":"default",children:[(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"lvim.plugins "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  {"})}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"kylechui/nvim-surround"'}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    version "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"*"'}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Use for stability; omit to use `main` branch for the latest features"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    event "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"VeryLazy"'}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"config"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"require"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"nvim-surround"'}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"setup"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Configuration here, or leave empty to use defaults"})]}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        })"})}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})]}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,s.jsx)(n.p,{children:"/.config/lvim/init.lua 파일을 열고 위 설정값을 입력한 후 빔을 실행하면 플러그인 매니저인 Lazy가 자동으로 설치를 해준다."}),"\n",(0,s.jsx)(n.h2,{id:"사용법",children:"사용법"}),"\n",(0,s.jsx)(n.p,{children:"이후 메뉴얼에서 소개하는 사용방법을 통해 브라켓 씌우기, 브라켓 변형하기등의\n기능을 사용할 수 있다."}),"\n",(0,s.jsx)(n.pre,{"data-language":"help","data-theme":"default",children:(0,s.jsxs)(n.code,{"data-language":"help","data-theme":"default",children:[(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    Old text                    Command         New text"})}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"--------------------------------------------------------------------------------"})}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    surr*ound_words             ysiw)           (surround_words)"})}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'    *make strings               ys$"            "make strings"'})}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    [delete ar*ound me!]        ds]             delete around me!"})}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    remove <b>HTML t*ags</b>    dst             remove HTML tags"})}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    'change quot*es'            cs'\"            \"change quotes\""})}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    <b>or tag* types</b>        csth1<CR>       <h1>or tag types</h1>"})}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    delete(functi*on calls)     dsf             function calls"})})]})})]})}n.default=(0,i.j)(o)}},function(e){e.O(0,[774,186,888,179],function(){return e(e.s=9317)}),_N_E=e.O()}]);