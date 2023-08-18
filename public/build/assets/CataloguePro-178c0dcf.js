import{_ as k}from"./NorthBotanicaLayout-888606e2.js";import{J as B,_ as S}from"./JetCardPost-83ff9baa.js";import{u as F}from"./fetchContentfullApi-9cbfe9d8.js";import{o as d,c as v,w as a,g as c,t as s,u as r,a as e,e as g,h as w,F as P,b as N,i as V}from"./app-dfa9ab94.js";import"./_plugin-vue_export-helper-c27b6911.js";const j={class:"h-full w-full min-h-screen"},q={class:"w-full pt-24 relative flex flex-col gap-2 sm:gap-24 justify-center items-center"},J={class:"h-3/4 w-full pb-24 border-b border-gray-300 sm:px-10 px-0"},L={class:"ease-in-out duration-700 items-center flex lg:flex-row flex-col gap-2 sm:gap-5 w-full h-full p-4 mx-auto overflow-auto"},$={class:"w-full h-max relative pb-24 px-0"},z={class:"w-full h-full md:pb-5 md:px-7 px-4 pt-16 pb-4"},D={class:"flex flex-col gap-12 h-full w-full"},E={class:"h-1/4",title:"banner"},G={class:"h-full flex flex-col items-start text-start justify-start gap-2 overflow-clip"},I={class:"font-semibold drop-shadow-xl text-md lg:text-lg w-full lg:w-1/3"},T={class:"text-black drop-shadow-lg py-1 font-mono subpixel-antialiased font-black text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-l from-green-500 via-green-600 to-green-700"},A=e("div",{class:"absolute inset-0 bg-black/30 rounded-lg"},null,-1),H=[A],K=`{
        pageCatalogueProCollection {
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
    }`,te={__name:"CataloguePro",setup(M){const{data:i,isLoading:O,error:Q}=F(K);return(R,U)=>(d(),v(k,null,{"banner-label":a(()=>{var t,l,o;return[c(s((o=(l=(t=r(i))==null?void 0:t.pageCatalogueProCollection)==null?void 0:l.items[0].banner)==null?void 0:o.label),1)]}),"banner-name":a(()=>{var t,l,o;return[c(s((o=(l=(t=r(i))==null?void 0:t.pageCatalogueProCollection)==null?void 0:l.items[0].banner)==null?void 0:o.title),1)]}),"banner-description":a(()=>{var t,l,o;return[c(s((o=(l=(t=r(i))==null?void 0:t.pageCatalogueProCollection)==null?void 0:l.items[0].banner)==null?void 0:o.description),1)]}),default:a(()=>{var t,l,o,m,p,f,_,b,h;return[e("main",j,[e("section",q,[e("div",J,[e("div",L,[(d(!0),g(P,null,w((o=(l=(t=r(i))==null?void 0:t.pageCatalogueProCollection)==null?void 0:l.items[0].cardCollection)==null?void 0:o.items,n=>{var u;return d(),v(S,{imageSrc:(u=n.imageCard)==null?void 0:u.url,class:"shadow-lg h-[60vh]"},{label:a(()=>[c(s(n.label),1)]),title:a(()=>[c(s(n.title),1)]),description:a(()=>[c(s(n.description),1)]),_:2},1032,["imageSrc"])}),256))])])]),e("section",$,[e("div",z,[e("div",D,[e("section",E,[e("div",G,[e("div",I,s((f=(p=(m=r(i))==null?void 0:m.pageCatalogueProCollection)==null?void 0:p.items[0].section)==null?void 0:f.label),1),e("div",T,s((h=(b=(_=r(i))==null?void 0:_.pageCatalogueProCollection)==null?void 0:b.items[0].section)==null?void 0:h.title),1)])]),N(B,null,{default:a(()=>{var n,u,x,C;return[(d(!0),g(P,null,w((C=(x=(u=(n=r(i))==null?void 0:n.pageCatalogueProCollection)==null?void 0:u.items[0].section)==null?void 0:x.imagesCollection)==null?void 0:C.items,y=>(d(),g("div",{style:V({backgroundImage:"url("+y.url+")"}),class:"h-full w-full hover:transition hover:ease-in-out hover:scale-[102%] relative grid gap-4 max-w-full rounded-lg aspect-square bg-cover bg-center"},H,4))),256))]}),_:1})])])])])]}),_:1}))}};export{te as default};
