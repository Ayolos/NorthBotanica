import{_ as w}from"./NorthBotanicaLayout-e2ab28e5.js";import{J as v}from"./JetSectionTemplate-34a72ec7.js";import{o as C,e as H,a as m,r as y,b as d,u as l,I as k,i as S,c as $,w as r,g as c,t as u}from"./app-13a90ddc.js";import{u as j}from"./fetchContentfullApi-ccf683b7.js";import"./_plugin-vue_export-helper-c27b6911.js";const z=["href"],B={class:"z-20 border-2 border-white inline-flex items-center rounded-full py-2 px-5"},I={class:"text-xl text-white font-semibold"},N=m("div",{class:"z-10 absolute inset-0 bg-black/30 hover:bg-black/60 rounded-xl"},null,-1),x={__name:"jetCardMore",props:{href:String,url:String},setup(g){return(o,b)=>(C(),H("a",{href:g.href,style:S({backgroundImage:"url("+g.url+")"}),class:"relative z-0 bg-cover bg-gray-200 shadow-lg rounded-xl gap-4 w-full h-full flex flex-row justify-center items-center hover:scale-[102%] hover:ease-in-out duration-500"},[m("div",B,[m("div",I,[y(o.$slots,"title")]),d(l(k),{icon:"majesticons:arrow-right",class:"text-4xl text-white"})]),N],12,z))}},V={class:"w-full h-[55vh]"},J={class:"w-full h-full flex md:flex-row flex-col justify-center gap-4"},T=`{
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
    }`,G={__name:"CatalogueHome",setup(g){const{data:o,isLoading:b,error:q}=j(T);return(f,D)=>(C(),$(w,null,{"banner-name":r(()=>{var e,t,a;return[c(u((a=(t=(e=l(o))==null?void 0:e.pageCatalogueHomeCollection)==null?void 0:t.items[0].banner)==null?void 0:a.title),1)]}),"banner-description":r(()=>{var e,t,a;return[c(u((a=(t=(e=l(o))==null?void 0:e.pageCatalogueHomeCollection)==null?void 0:t.items[0].banner)==null?void 0:a.description),1)]}),default:r(()=>[m("main",V,[d(v,null,{title:r(()=>{var e,t;return[c(u((t=(e=l(o))==null?void 0:e.pageCatalogueHomeCollection)==null?void 0:t.items[0].title),1)]}),default:r(()=>{var e,t,a,h,p,_;return[m("section",J,[d(x,{href:f.route("catalogue.pro"),url:(a=(t=(e=l(o))==null?void 0:e.pageCatalogueHomeCollection)==null?void 0:t.items[0].card1)==null?void 0:a.img.url},{title:r(()=>{var s,i,n;return[c(u((n=(i=(s=l(o))==null?void 0:s.pageCatalogueHomeCollection)==null?void 0:i.items[0].card1)==null?void 0:n.text),1)]}),_:1},8,["href","url"]),d(x,{href:f.route("catalogue.customer"),url:(_=(p=(h=l(o))==null?void 0:h.pageCatalogueHomeCollection)==null?void 0:p.items[0].card2)==null?void 0:_.img.url},{title:r(()=>{var s,i,n;return[c(u((n=(i=(s=l(o))==null?void 0:s.pageCatalogueHomeCollection)==null?void 0:i.items[0].card2)==null?void 0:n.text),1)]}),_:1},8,["href","url"])])]}),_:1})])]),_:1}))}};export{G as default};
