import{_ as S}from"./NorthBotanicaLayout-e1b6a308.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import{o as r,e as h,r as m,a as t,d,j,c as b,w as o,g as u,t as n,i as w,h as $,F as y,b as z}from"./app-3743d282.js";const N={},q={class:"grid grid-cols-1 md:grid-cols-3 gap-2 rounded-xl"};function O(p,e){return r(),h("div",q,[m(p.$slots,"default")])}const T=B(N,[["render",O]]),J={class:"z-0 m-2 relative max-w-full max-h-full button bg-white rounded-2xl md:w-full w-3/4 mx-auto aspect-square md:aspect-auto shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-[102%] hover:transition hover:ease-in"},M={href:"#",class:"-z-10 absolute inset-0"},V=["src"],X=t("div",{class:"-z-10 absolute inset-0 bg-black/50 rounded-2xl"},null,-1),E={class:"aspect-square md:aspect-auto p-5 h-full flex flex-col gap-2 drop-shadow-xl"},F={href:"#"},K={class:"text-sm tracking-tight text-white dark:text-white"},P={href:"#"},Z={class:"md:text-2xl text-sm font-bold tracking-tight text-lime-50 dark:text-white"},A={class:"mb-3 font-normal text-lg text-white dark:text-gray-400"},D={__name:"JetCardPost",props:{imageSrc:String},setup(p){return(e,_)=>(r(),h("div",J,[t("a",M,[t("img",{class:"rounded-2xl h-full w-full",src:p.imageSrc,alt:""},null,8,V)]),X,t("div",E,[t("a",F,[t("h5",K,[m(e.$slots,"label")])]),t("a",P,[t("h5",Z,[m(e.$slots,"title")])]),t("p",A,[m(e.$slots,"description")])])]))}},G={class:"h-full w-full min-h-screen"},I={class:"w-full pt-24 relative snap-start flex flex-col gap-2 sm:gap-24 justify-center items-center"},L={class:"h-3/4 w-full pb-24 border-b border-gray-300 sm:px-10 px-0"},U={class:"w-full h-max relative snap-start pb-24 md:px-10 px-0"},Y={class:"w-full h-full md:pb-5 md:px-7 px-4 pt-16 pb-4"},H={class:"flex flex-col gap-12 h-full w-full"},Q={class:"h-1/4",title:"banner"},R={class:"h-full flex flex-col items-start text-start justify-start gap-2 overflow-clip"},W={class:"font-semibold drop-shadow-xl text-md lg:text-lg w-full lg:w-1/3"},tt={class:"text-black drop-shadow-lg py-1 font-mono subpixel-antialiased font-black text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-l from-green-500 via-green-600 to-green-700"},et=t("div",{class:"absolute inset-0 bg-black/30 rounded-lg"},null,-1),st=[et],nt={__name:"Catalogue",setup(p){const e=d([]),_=d(!0),g=d(0),f=d(100);j(()=>{C()}),d("0");const C=async()=>{var i,c;const x=`{
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
    }`,v="https://graphql.contentful.com/content/v1/spaces/6zdudstotpon",s={method:"POST",headers:{Authorization:"Bearer 4-BvNhM2BNwaCavXg0Z9MiOB31O82kKjvta3YZ8K0g4","Content-Type":"application/json"},body:JSON.stringify({query:x})};try{const a=await fetch(v,s).then(l=>l.json());e.value=(c=(i=a.data)==null?void 0:i.pageCatalogueCollection)==null?void 0:c.items[0],_.value=!1,setTimeout(()=>{g.value=1,f.value=0},150)}catch{throw new Error("Could not receive the data from Contentful!")}};return(x,v)=>(r(),b(S,null,{"banner-name":o(()=>{var s;return[u(n((s=e.value.banner)==null?void 0:s.title),1)]}),"banner-description":o(()=>{var s;return[u(n((s=e.value.banner)==null?void 0:s.description),1)]}),default:o(()=>{var s,i,c;return[t("main",G,[t("section",I,[t("div",L,[t("div",{style:w({opacity:g.value,transform:`translateX(${f.value}px)`}),class:"ease-in-out duration-700 items-center flex lg:flex-row flex-col gap-2 sm:gap-5 sm:w-6/7 w-full h-full p-4 mx-auto overflow-auto"},[(r(!0),h(y,null,$((s=e.value.cardCollection)==null?void 0:s.items,a=>{var l;return r(),b(D,{imageSrc:(l=a.imageCard)==null?void 0:l.url,class:"shadow-lg h-[60vh]"},{label:o(()=>[u(n(a.label),1)]),title:o(()=>[u(n(a.title),1)]),description:o(()=>[u(n(a.description),1)]),_:2},1032,["imageSrc"])}),256))],4)])]),t("section",U,[t("div",Y,[t("div",H,[t("section",Q,[t("div",R,[t("div",W,n((i=e.value.section)==null?void 0:i.label),1),t("div",tt,n((c=e.value.section)==null?void 0:c.title),1)])]),z(T,null,{default:o(()=>{var a,l;return[(r(!0),h(y,null,$((l=(a=e.value.section)==null?void 0:a.imagesCollection)==null?void 0:l.items,k=>(r(),h("div",{class:"hover:transition hover:ease-in-out hover:scale-[102%] relative grid gap-4 h-auto max-w-full rounded-lg aspect-square md:aspect-auto bg-cover bg-center",style:w({backgroundImage:"url("+k.url+")"})},st,4))),256))]}),_:1})])])])])]}),_:1}))}};export{nt as default};
