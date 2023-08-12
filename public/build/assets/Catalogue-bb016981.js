import{_ as S}from"./NorthBotanicaLayout-5e987a2f.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import{o as r,e as h,r as m,a as t,d,j,c as b,w as o,g as u,t as n,i as w,h as $,F as y,b as z}from"./app-6780cdf8.js";const N={},q={class:"grid grid-cols-2 md:grid-cols-3 gap-2 rounded-xl"};function O(p,e){return r(),h("div",q,[m(p.$slots,"default")])}const T=B(N,[["render",O]]),J={class:"z-0 m-2 relative max-w-full max-h-full button bg-white rounded-2xl md:w-full w-3/4 mx-auto aspect-square md:aspect-auto shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-[102%] hover:transition hover:ease-in"},M={href:"#",class:"-z-10 absolute inset-0"},V=["src"],X=t("div",{class:"-z-10 absolute inset-0 bg-black/50 rounded-2xl"},null,-1),E={class:"aspect-square p-5 h-full flex flex-col gap-2 drop-shadow-xl"},F={href:"#"},K={class:"text-sm tracking-tight text-white dark:text-white"},P={href:"#"},Z={class:"md:text-2xl text-sm font-bold tracking-tight text-lime-50 dark:text-white"},A={class:"mb-3 font-normal text-lg text-white dark:text-gray-400"},D={__name:"JetCardPost",props:{imageSrc:String},setup(p){return(e,_)=>(r(),h("div",J,[t("a",M,[t("img",{class:"rounded-2xl h-full w-full",src:p.imageSrc,alt:""},null,8,V)]),X,t("div",E,[t("a",F,[t("h5",K,[m(e.$slots,"label")])]),t("a",P,[t("h5",Z,[m(e.$slots,"title")])]),t("p",A,[m(e.$slots,"description")])])]))}},G={ref:"snapContainer",class:"w-full pt-24 relative snap-start flex flex-col gap-2 sm:gap-24 justify-center items-center"},I={class:"h-3/4 w-full pb-24 border-b border-gray-300 sm:px-10 px-0"},L={ref:"snapContainer",class:"w-full h-max relative snap-start pb-24 md:px-10 px-0"},U={class:"w-full h-full md:pb-5 md:px-7 px-4 pt-16 pb-4"},Y={class:"flex flex-col gap-12 h-full w-full"},H={class:"h-1/4",title:"banner"},Q={class:"h-full flex flex-col items-start text-start justify-start gap-2 overflow-clip"},R={class:"font-semibold drop-shadow-xl text-md lg:text-lg w-full lg:w-2/3"},W={class:"text-black drop-shadow-lg py-1 font-mono subpixel-antialiased font-black text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-l from-green-500 via-green-600 to-green-700"},tt=t("div",{class:"absolute inset-0 bg-black/30 rounded-lg"},null,-1),et=[tt],ot={__name:"Catalogue",setup(p){const e=d([]),_=d(!0),x=d(0),v=d(100);j(()=>{C()}),d("0");const C=async()=>{var i,c;const f=`{
        pageCatalogueCollection {
            items {
              banner {
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
    }`,g="https://graphql.contentful.com/content/v1/spaces/6zdudstotpon",l={method:"POST",headers:{Authorization:"Bearer 4-BvNhM2BNwaCavXg0Z9MiOB31O82kKjvta3YZ8K0g4","Content-Type":"application/json"},body:JSON.stringify({query:f})};try{const s=await fetch(g,l).then(a=>a.json());e.value=(c=(i=s.data)==null?void 0:i.pageCatalogueCollection)==null?void 0:c.items[0],_.value=!1,setTimeout(()=>{x.value=1,v.value=0},150)}catch{throw new Error("Could not receive the data from Contentful!")}};return(f,g)=>(r(),b(S,null,{"banner-name":o(()=>{var l;return[u(n((l=e.value.banner)==null?void 0:l.title),1)]}),"banner-description":o(()=>{var l;return[u(n((l=e.value.banner)==null?void 0:l.description),1)]}),default:o(()=>{var l,i,c;return[t("main",{class:"h-full w-full min-h-screen",onScroll:g[0]||(g[0]=(...s)=>f.handleScroll&&f.handleScroll(...s))},[t("section",G,[t("div",I,[t("div",{style:w({opacity:x.value,transform:`translateX(${v.value}px)`}),class:"ease-in-out duration-700 flex lg:flex-row flex-col gap-2 sm:gap-5 sm:w-6/7 w-full h-full p-4 mx-auto overflow-auto"},[(r(!0),h(y,null,$((l=e.value.cardCollection)==null?void 0:l.items,s=>{var a;return r(),b(D,{imageSrc:(a=s.imageCard)==null?void 0:a.url,class:"shadow-lg w-full h-full"},{label:o(()=>[u(n(s.label),1)]),title:o(()=>[u(n(s.title),1)]),description:o(()=>[u(n(s.description),1)]),_:2},1032,["imageSrc"])}),256))],4)])],512),t("section",L,[t("div",U,[t("div",Y,[t("section",H,[t("div",Q,[t("div",R,n((i=e.value.section)==null?void 0:i.label),1),t("div",W,n((c=e.value.section)==null?void 0:c.title),1)])]),z(T,null,{default:o(()=>{var s,a;return[(r(!0),h(y,null,$((a=(s=e.value.section)==null?void 0:s.imagesCollection)==null?void 0:a.items,k=>(r(),h("div",{class:"hover:transition hover:ease-in-out hover:scale-[102%] relative grid gap-4 h-auto max-w-full rounded-lg aspect-square bg-cover bg-center",style:w({backgroundImage:"url("+k.url+")"})},et,4))),256))]}),_:1})])])],512)],32)]}),_:1}))}};export{ot as default};
