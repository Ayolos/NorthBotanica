import{_ as v}from"./NorthBotanicaLayout-888606e2.js";import{J as H}from"./JetSectionTemplate-3eba344b.js";import{o as b,e as S,a as d,r as k,b as g,u as l,I as j,i as $,j as z,c as B,w as r,g as u,t as m}from"./app-dfa9ab94.js";import{u as I}from"./fetchContentfullApi-9cbfe9d8.js";import{g as N}from"./index-4db78ffb.js";import"./_plugin-vue_export-helper-c27b6911.js";const V=["href"],J={class:"z-20 border-2 border-white inline-flex items-center rounded-full py-2 px-5"},L={class:"text-xl text-white font-semibold"},M=d("div",{class:"z-10 absolute inset-0 bg-black/30 hover:bg-black/60 rounded-xl"},null,-1),C={__name:"jetCardMore",props:{href:String,url:String},setup(f){return(o,y)=>(b(),S("a",{href:f.href,style:$({backgroundImage:"url("+f.url+")"}),class:"relative z-0 bg-cover bg-gray-200 shadow-lg rounded-xl gap-4 w-full h-full flex flex-row justify-center items-center hover:scale-[102%] hover:ease-in-out duration-500"},[d("div",J,[d("div",L,[k(o.$slots,"title")]),g(l(j),{icon:"majesticons:arrow-right",class:"text-4xl text-white"})]),M],12,V))}},T={class:"w-full h-[55vh] animate-left"},q={class:"w-full h-full flex md:flex-row flex-col justify-center gap-4"},D=`{
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
    }`,P={__name:"CatalogueHome",setup(f){const{data:o,isLoading:y,error:E}=I(D),w=(s,p,t)=>{const e=N.timeline();e.set(s,{x:p,y:t,opacity:0}),e.to(s,{duration:.5,ease:"sine",opacity:1,x:0,y:0}),e.play()};return z(()=>{w(".animate-left",-50,-20)}),(s,p)=>(b(),B(v,null,{"banner-name":r(()=>{var t,e,a;return[u(m((a=(e=(t=l(o))==null?void 0:t.pageCatalogueHomeCollection)==null?void 0:e.items[0].banner)==null?void 0:a.title),1)]}),"banner-description":r(()=>{var t,e,a;return[u(m((a=(e=(t=l(o))==null?void 0:t.pageCatalogueHomeCollection)==null?void 0:e.items[0].banner)==null?void 0:a.description),1)]}),default:r(()=>[d("main",T,[g(H,null,{title:r(()=>{var t,e;return[u(m((e=(t=l(o))==null?void 0:t.pageCatalogueHomeCollection)==null?void 0:e.items[0].title),1)]}),default:r(()=>{var t,e,a,h,_,x;return[d("section",q,[g(C,{href:s.route("catalogue.pro"),url:(a=(e=(t=l(o))==null?void 0:t.pageCatalogueHomeCollection)==null?void 0:e.items[0].card1)==null?void 0:a.img.url},{title:r(()=>{var i,n,c;return[u(m((c=(n=(i=l(o))==null?void 0:i.pageCatalogueHomeCollection)==null?void 0:n.items[0].card1)==null?void 0:c.text),1)]}),_:1},8,["href","url"]),g(C,{href:s.route("catalogue.customer"),url:(x=(_=(h=l(o))==null?void 0:h.pageCatalogueHomeCollection)==null?void 0:_.items[0].card2)==null?void 0:x.img.url},{title:r(()=>{var i,n,c;return[u(m((c=(n=(i=l(o))==null?void 0:i.pageCatalogueHomeCollection)==null?void 0:n.items[0].card2)==null?void 0:c.text),1)]}),_:1},8,["href","url"])])]}),_:1})])]),_:1}))}};export{P as default};
