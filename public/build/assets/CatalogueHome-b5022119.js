import{_ as v}from"./NorthBotanicaLayout-7f4928ae.js";import{J as S}from"./JetSectionTemplate-1a743f8a.js";import{o as b,e as y,a as n,r as $,b as s,u as l,I as j,i as k,j as z,w as r,F as B,t as i,Z as F,g as h}from"./app-c246124d.js";import{u as I}from"./fetchContentfullApi-e0b58761.js";import{g as N}from"./index-4db78ffb.js";import"./_plugin-vue_export-helper-c27b6911.js";const V=["href"],J={class:"z-20 border-2 border-white inline-flex items-center rounded-full py-2 px-5"},L={class:"text-xl text-white font-semibold"},M=n("div",{class:"z-10 absolute inset-0 bg-black/30 hover:bg-black/60 rounded-xl"},null,-1),x={__name:"jetCardMore",props:{href:String,url:String},setup(_){return(o,w)=>(b(),y("a",{href:_.href,style:k({backgroundImage:"url("+_.url+")"}),class:"relative z-0 bg-cover bg-gray-200 shadow-lg rounded-xl gap-4 w-full h-full flex flex-row justify-center items-center hover:scale-[102%] hover:ease-in-out duration-500"},[n("div",J,[n("div",L,[$(o.$slots,"title")]),s(l(j),{icon:"majesticons:arrow-right",class:"text-4xl text-white"})]),M],12,V))}},T=["content"],q={class:"w-full h-[55vh] animate-left"},D={class:"w-full h-full flex md:flex-row flex-col justify-center gap-4"},E=`{
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
    }`,Q={__name:"CatalogueHome",setup(_){const{data:o,isLoading:w,error:W}=I(E),H=(c,C,t)=>{const e=N.timeline();e.set(c,{x:C,y:t,opacity:0}),e.to(c,{duration:.5,ease:"sine",opacity:1,x:0,y:0}),e.play()};return z(()=>{H(".animate-left",-50,-20)}),(c,C)=>(b(),y(B,null,[s(l(F),null,{default:r(()=>{var t,e,a,u,m,d;return[n("title",null,i((a=(e=(t=l(o))==null?void 0:t.pageCatalogueHomeCollection)==null?void 0:e.items[0].banner)==null?void 0:a.title),1),n("meta",{name:"description",content:(d=(m=(u=l(o))==null?void 0:u.pageCatalogueHomeCollection)==null?void 0:m.items[0].banner)==null?void 0:d.description},null,8,T)]}),_:1}),s(v,null,{"banner-name":r(()=>{var t,e,a;return[h(i((a=(e=(t=l(o))==null?void 0:t.pageCatalogueHomeCollection)==null?void 0:e.items[0].banner)==null?void 0:a.title),1)]}),"banner-description":r(()=>{var t,e,a;return[h(i((a=(e=(t=l(o))==null?void 0:t.pageCatalogueHomeCollection)==null?void 0:e.items[0].banner)==null?void 0:a.description),1)]}),default:r(()=>[n("section",q,[s(S,null,{title:r(()=>{var t,e;return[h(i((e=(t=l(o))==null?void 0:t.pageCatalogueHomeCollection)==null?void 0:e.items[0].title),1)]}),default:r(()=>{var t,e,a,u,m,d;return[n("div",D,[s(x,{href:c.route("catalogue.pro"),url:(a=(e=(t=l(o))==null?void 0:t.pageCatalogueHomeCollection)==null?void 0:e.items[0].card1)==null?void 0:a.img.url},{title:r(()=>{var g,f,p;return[h(i((p=(f=(g=l(o))==null?void 0:g.pageCatalogueHomeCollection)==null?void 0:f.items[0].card1)==null?void 0:p.text),1)]}),_:1},8,["href","url"]),s(x,{href:c.route("catalogue.customer"),url:(d=(m=(u=l(o))==null?void 0:u.pageCatalogueHomeCollection)==null?void 0:m.items[0].card2)==null?void 0:d.img.url},{title:r(()=>{var g,f,p;return[h(i((p=(f=(g=l(o))==null?void 0:g.pageCatalogueHomeCollection)==null?void 0:f.items[0].card2)==null?void 0:p.text),1)]}),_:1},8,["href","url"])])]}),_:1})])]),_:1})],64))}};export{Q as default};
