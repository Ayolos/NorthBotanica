import{_ as j}from"./NorthBotanicaLayout-0f8deeb3.js";import{J as k}from"./JetSectionTemplate-836fadc6.js";import{o as w,e as H,a as n,r as z,b as i,u as a,I as B,i as F,j as I,w as r,F as N,t as c,Z as V,g as u}from"./app-ef59c617.js";import{u as J}from"./fetchContentfullApi-86f4c46f.js";import{g as L}from"./index-4db78ffb.js";import"./_plugin-vue_export-helper-c27b6911.js";const M=["href"],T={class:"text-xl text-white font-semibold"},q=n("div",{class:"z-10 absolute inset-0 bg-black/30 rounded-xl"},null,-1),C={__name:"jetCardMore",props:{href:String,url:String},setup(_){return(o,S)=>(w(),H("div",{style:F({backgroundImage:"url("+_.url+")"}),class:"relative z-0 bg-cover bg-gray-200 shadow-lg rounded-xl gap-4 w-full h-full flex flex-row justify-center items-center hover:scale-[102%] hover:ease-in-out duration-500"},[n("a",{href:_.href,class:"z-20 border border-white inline-flex items-center rounded-full py-2 px-5 hover:scale-[98%] hover:ease-in-out duration-500"},[n("div",T,[z(o.$slots,"title")]),i(a(B),{icon:"majesticons:arrow-right",class:"text-4xl text-white"})],8,M),q],4))}},D=["content"],E={class:"w-full h-[55vh] animate-left"},P={class:"w-full h-full flex md:flex-row flex-col justify-center gap-4"},W=`{
        pageCatalogueHomeCollection {
            items {
              banner {
                title,
                description
              }
              title
              card1 {
                img {
                  url
                }
                text
              }
              card2 {
                img {
                  url
                }
                text
              }
            }
          }
    }`,U={__name:"CatalogueHome",setup(_){const{data:o,isLoading:S,error:Z}=J(W),$=(s,x,t)=>{const e=L.timeline();e.set(s,{x,y:t,opacity:0}),e.to(s,{duration:.5,ease:"sine",opacity:1,x:0,y:0}),e.play()};return I(()=>{$(".animate-left",-50,-20)}),(s,x)=>(w(),H(N,null,[i(a(V),null,{default:r(()=>{var t,e,l,m,d,g;return[n("title",null,c((l=(e=(t=a(o))==null?void 0:t.pageCatalogueHomeCollection)==null?void 0:e.items[0].banner)==null?void 0:l.title),1),n("meta",{name:"description",content:(g=(d=(m=a(o))==null?void 0:m.pageCatalogueHomeCollection)==null?void 0:d.items[0].banner)==null?void 0:g.description},null,8,D)]}),_:1}),i(j,null,{"banner-name":r(()=>{var t,e,l;return[u(c((l=(e=(t=a(o))==null?void 0:t.pageCatalogueHomeCollection)==null?void 0:e.items[0].banner)==null?void 0:l.title),1)]}),"banner-description":r(()=>{var t,e,l;return[u(c((l=(e=(t=a(o))==null?void 0:t.pageCatalogueHomeCollection)==null?void 0:e.items[0].banner)==null?void 0:l.description),1)]}),default:r(()=>[n("section",E,[i(k,null,{title:r(()=>{var t,e;return[u(c((e=(t=a(o))==null?void 0:t.pageCatalogueHomeCollection)==null?void 0:e.items[0].title),1)]}),default:r(()=>{var t,e,l,m,d,g,b,y,v;return[n("div",P,[i(C,{href:s.route("catalogue.pro"),url:(l=(e=(t=a(o))==null?void 0:t.pageCatalogueHomeCollection)==null?void 0:e.items[0].card1)==null?void 0:l.img.url},{title:r(()=>{var f,p,h;return[u(c((h=(p=(f=a(o))==null?void 0:f.pageCatalogueHomeCollection)==null?void 0:p.items[0].card1)==null?void 0:h.text),1)]}),_:1},8,["href","url"]),i(C,{href:s.route("catalogue.customer"),url:(g=(d=(m=a(o))==null?void 0:m.pageCatalogueHomeCollection)==null?void 0:d.items[0].card2)==null?void 0:g.img.url},{title:r(()=>{var f,p,h;return[u(c((h=(p=(f=a(o))==null?void 0:f.pageCatalogueHomeCollection)==null?void 0:p.items[0].card2)==null?void 0:h.text),1)]}),_:1},8,["href","url"]),i(C,{href:s.route("catalogue.collectivity"),url:(v=(y=(b=a(o))==null?void 0:b.pageCatalogueHomeCollection)==null?void 0:y.items[0].card2)==null?void 0:v.img.url},{title:r(()=>[u(" Pour les collectivité ")]),_:1},8,["href","url"])])]}),_:1})])]),_:1})],64))}};export{U as default};
