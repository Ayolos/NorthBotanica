import{_ as B}from"./NorthBotanicaLayout-7f4928ae.js";import{J as S,_ as F}from"./JetCardPost-9cf3820e.js";import{u as N}from"./fetchContentfullApi-e0b58761.js";import{o as p,e as f,b as _,w as i,u as o,F as b,a,t as n,Z as V,g as c,h as y,c as j,i as q}from"./app-c246124d.js";import"./_plugin-vue_export-helper-c27b6911.js";const J=["content"],L={class:"h-full w-full min-h-screen"},$={class:"w-full pt-24 relative flex flex-col gap-2 sm:gap-24 justify-center items-center"},z={class:"h-3/4 w-full pb-24 border-b border-gray-300 sm:px-10 px-0"},D={class:"ease-in-out duration-700 items-center flex lg:flex-row flex-col gap-2 sm:gap-5 w-full h-full p-4 mx-auto overflow-auto"},E={class:"w-full h-max relative pb-24 px-0"},G={class:"w-full h-full md:pb-5 md:px-7 px-4 pt-16 pb-4"},I={class:"flex flex-col gap-12 h-full w-full"},T={class:"h-1/4",title:"banner"},Z={class:"h-full flex flex-col items-start text-start justify-start gap-2 overflow-clip"},A={class:"font-semibold drop-shadow-xl text-md lg:text-lg w-full lg:w-1/3"},H={class:"text-black drop-shadow-lg py-1 font-mono subpixel-antialiased font-black text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-l from-green-500 via-green-600 to-green-700"},K=a("div",{class:"absolute inset-0 bg-black/30 rounded-lg"},null,-1),M=[K],O=`{
        pageCatalogueCollection {
            items {
              banner {
                label
                title
                description
              }
              cardCollection {
                items {
                  title
                  description
                  imageCard {
                    url
                  }
                  label
                }
              }
              section {
                title
                imagesCollection {
                  items {
                    url
                  }
                }
              }
            }
        }
    }`,ae={__name:"CatalogueCustomer",setup(P){const{data:s,isLoading:Q,error:R}=N(O);return(U,W)=>(p(),f(b,null,[_(o(V),null,{default:i(()=>{var e,t,l,u,d,g;return[a("title",null,n((l=(t=(e=o(s))==null?void 0:e.pageCatalogueCollection)==null?void 0:t.items[0].banner)==null?void 0:l.title),1),a("meta",{name:"description",content:(g=(d=(u=o(s))==null?void 0:u.pageCatalogueCollection)==null?void 0:d.items[0].banner)==null?void 0:g.description},null,8,J)]}),_:1}),_(B,null,{"banner-label":i(()=>{var e,t,l;return[c(n((l=(t=(e=o(s))==null?void 0:e.pageCatalogueCollection)==null?void 0:t.items[0].banner)==null?void 0:l.label),1)]}),"banner-name":i(()=>{var e,t,l;return[c(n((l=(t=(e=o(s))==null?void 0:e.pageCatalogueCollection)==null?void 0:t.items[0].banner)==null?void 0:l.title),1)]}),"banner-description":i(()=>{var e,t,l;return[c(n((l=(t=(e=o(s))==null?void 0:e.pageCatalogueCollection)==null?void 0:t.items[0].banner)==null?void 0:l.description),1)]}),default:i(()=>{var e,t,l,u,d,g,h,x,C;return[a("main",L,[a("section",$,[a("div",z,[a("div",D,[(p(!0),f(b,null,y((l=(t=(e=o(s))==null?void 0:e.pageCatalogueCollection)==null?void 0:t.items[0].cardCollection)==null?void 0:l.items,r=>{var m;return p(),j(F,{imageSrc:(m=r.imageCard)==null?void 0:m.url,class:"shadow-lg h-[60vh]"},{label:i(()=>[c(n(r.label),1)]),title:i(()=>[c(n(r.title),1)]),description:i(()=>[c(n(r.description),1)]),_:2},1032,["imageSrc"])}),256))])])]),a("section",E,[a("div",G,[a("div",I,[a("section",T,[a("div",Z,[a("div",A,n((g=(d=(u=o(s))==null?void 0:u.pageCatalogueCollection)==null?void 0:d.items[0].section)==null?void 0:g.label),1),a("div",H,n((C=(x=(h=o(s))==null?void 0:h.pageCatalogueCollection)==null?void 0:x.items[0].section)==null?void 0:C.title),1)])]),_(S,null,{default:i(()=>{var r,m,v,w;return[(p(!0),f(b,null,y((w=(v=(m=(r=o(s))==null?void 0:r.pageCatalogueCollection)==null?void 0:m.items[0].section)==null?void 0:v.imagesCollection)==null?void 0:w.items,k=>(p(),f("div",{style:q({backgroundImage:"url("+k.url+")"}),class:"h-full w-full hover:transition hover:ease-in-out hover:scale-[102%] relative grid gap-4 h-auto max-w-full rounded-lg aspect-square bg-cover bg-center"},M,4))),256))]}),_:1})])])])])]}),_:1})],64))}};export{ae as default};
