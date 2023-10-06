import{_ as B}from"./NorthBotanicaLayout-6df9153f.js";import{J as G,_ as S}from"./JetGrid-e4e9516d.js";import{u as F}from"./fetchContentfullApi-0ebbf3cd.js";import{o as p,d as f,h as _,w as i,u as o,F as b,b as a,t as n,Z as N,a as c,e as k,c as V,n as j}from"./app-de02c8a7.js";const q=["content"],J={class:"h-full w-full min-h-screen"},L={class:"w-full pt-24 relative flex flex-col gap-2 sm:gap-24 justify-center items-center"},$={class:"h-3/4 w-full pb-24 border-b border-gray-300 sm:px-10 px-0"},z={class:"ease-in-out duration-700 items-center flex lg:flex-row flex-col gap-2 sm:gap-5 w-full h-full p-4 mx-auto overflow-auto"},D={class:"w-full h-max relative pb-24 px-0"},E={class:"w-full h-full md:pb-5 md:px-7 px-4 pt-16 pb-4"},I={class:"flex flex-col gap-12 h-full w-full"},T={class:"h-1/4",title:"banner"},Z={class:"h-full flex flex-col items-start text-start justify-start gap-2 overflow-clip"},A={class:"font-semibold drop-shadow-xl text-md lg:text-lg w-full lg:w-1/3"},H={class:"text-black drop-shadow-lg py-1 font-mono subpixel-antialiased font-black text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-l from-darkGreen via-darkGreen to-clearGreen"},K=a("div",{class:"absolute inset-0 bg-black/30 rounded-lg"},null,-1),M=[K],O=`{
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
    }`,le={__name:"CatalogueCustomer",setup(P){const{data:s,isLoading:Q,error:R}=F(O);return(U,W)=>(p(),f(b,null,[_(o(N),null,{default:i(()=>{var e,t,l,u,d,m;return[a("title",null,n((l=(t=(e=o(s))==null?void 0:e.pageCatalogueCollection)==null?void 0:t.items[0].banner)==null?void 0:l.title),1),a("meta",{name:"description",content:(m=(d=(u=o(s))==null?void 0:u.pageCatalogueCollection)==null?void 0:d.items[0].banner)==null?void 0:m.description},null,8,q)]}),_:1}),_(B,null,{"banner-label":i(()=>{var e,t,l;return[c(n((l=(t=(e=o(s))==null?void 0:e.pageCatalogueCollection)==null?void 0:t.items[0].banner)==null?void 0:l.label),1)]}),"banner-name":i(()=>{var e,t,l;return[c(n((l=(t=(e=o(s))==null?void 0:e.pageCatalogueCollection)==null?void 0:t.items[0].banner)==null?void 0:l.title),1)]}),"banner-description":i(()=>{var e,t,l;return[c(n((l=(t=(e=o(s))==null?void 0:e.pageCatalogueCollection)==null?void 0:t.items[0].banner)==null?void 0:l.description),1)]}),default:i(()=>{var e,t,l,u,d,m,h,x,C;return[a("main",J,[a("section",L,[a("div",$,[a("div",z,[(p(!0),f(b,null,k((l=(t=(e=o(s))==null?void 0:e.pageCatalogueCollection)==null?void 0:t.items[0].cardCollection)==null?void 0:l.items,r=>{var g;return p(),V(S,{imageSrc:(g=r.imageCard)==null?void 0:g.url,class:"shadow-lg h-[60vh]"},{label:i(()=>[c(n(r.label),1)]),title:i(()=>[c(n(r.title),1)]),description:i(()=>[c(n(r.description),1)]),_:2},1032,["imageSrc"])}),256))])])]),a("section",D,[a("div",E,[a("div",I,[a("section",T,[a("div",Z,[a("div",A,n((m=(d=(u=o(s))==null?void 0:u.pageCatalogueCollection)==null?void 0:d.items[0].section)==null?void 0:m.label),1),a("div",H,n((C=(x=(h=o(s))==null?void 0:h.pageCatalogueCollection)==null?void 0:x.items[0].section)==null?void 0:C.title),1)])]),_(G,null,{default:i(()=>{var r,g,v,w;return[(p(!0),f(b,null,k((w=(v=(g=(r=o(s))==null?void 0:r.pageCatalogueCollection)==null?void 0:g.items[0].section)==null?void 0:v.imagesCollection)==null?void 0:w.items,y=>(p(),f("div",{style:j({backgroundImage:"url("+y.url+")"}),class:"h-full w-full hover:transition hover:ease-in-out hover:scale-[102%] relative grid gap-4 h-auto max-w-full rounded-lg aspect-square bg-cover bg-center"},M,4))),256))]}),_:1})])])])])]}),_:1})],64))}};export{le as default};
