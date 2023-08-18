import{_ as B}from"./NorthBotanicaLayout-660eff6b.js";import{J as S,_ as F}from"./JetCardPost-0e9b2c77.js";import{u as N}from"./fetchContentfullApi-92300d1a.js";import{o as d,c as v,w as o,g as c,t as s,u as r,a as e,e as g,h as w,F as y,b as V,i as j}from"./app-20b874c7.js";import"./_plugin-vue_export-helper-c27b6911.js";const q={class:"h-full w-full min-h-screen"},J={class:"w-full pt-24 relative flex flex-col gap-2 sm:gap-24 justify-center items-center"},L={class:"h-3/4 w-full pb-24 border-b border-gray-300 sm:px-10 px-0"},$={class:"ease-in-out duration-700 items-center flex lg:flex-row flex-col gap-2 sm:gap-5 w-full h-full p-4 mx-auto overflow-auto"},z={class:"w-full h-max relative pb-24 px-0"},D={class:"w-full h-full md:pb-5 md:px-7 px-4 pt-16 pb-4"},E={class:"flex flex-col gap-12 h-full w-full"},G={class:"h-1/4",title:"banner"},I={class:"h-full flex flex-col items-start text-start justify-start gap-2 overflow-clip"},T={class:"font-semibold drop-shadow-xl text-md lg:text-lg w-full lg:w-1/3"},A={class:"text-black drop-shadow-lg py-1 font-mono subpixel-antialiased font-black text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-l from-green-500 via-green-600 to-green-700"},H=e("div",{class:"absolute inset-0 bg-black/30 rounded-lg"},null,-1),K=[H],M=`{
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
    }`,te={__name:"CatalogueCustomer",setup(O){const{data:i,isLoading:P,error:Q}=N(M);return(R,U)=>(d(),v(B,null,{"banner-label":o(()=>{var t,l,a;return[c(s((a=(l=(t=r(i))==null?void 0:t.pageCatalogueCollection)==null?void 0:l.items[0].banner)==null?void 0:a.label),1)]}),"banner-name":o(()=>{var t,l,a;return[c(s((a=(l=(t=r(i))==null?void 0:t.pageCatalogueCollection)==null?void 0:l.items[0].banner)==null?void 0:a.title),1)]}),"banner-description":o(()=>{var t,l,a;return[c(s((a=(l=(t=r(i))==null?void 0:t.pageCatalogueCollection)==null?void 0:l.items[0].banner)==null?void 0:a.description),1)]}),default:o(()=>{var t,l,a,m,p,f,_,h,b;return[e("main",q,[e("section",J,[e("div",L,[e("div",$,[(d(!0),g(y,null,w((a=(l=(t=r(i))==null?void 0:t.pageCatalogueCollection)==null?void 0:l.items[0].cardCollection)==null?void 0:a.items,n=>{var u;return d(),v(F,{imageSrc:(u=n.imageCard)==null?void 0:u.url,class:"shadow-lg h-[60vh]"},{label:o(()=>[c(s(n.label),1)]),title:o(()=>[c(s(n.title),1)]),description:o(()=>[c(s(n.description),1)]),_:2},1032,["imageSrc"])}),256))])])]),e("section",z,[e("div",D,[e("div",E,[e("section",G,[e("div",I,[e("div",T,s((f=(p=(m=r(i))==null?void 0:m.pageCatalogueCollection)==null?void 0:p.items[0].section)==null?void 0:f.label),1),e("div",A,s((b=(h=(_=r(i))==null?void 0:_.pageCatalogueCollection)==null?void 0:h.items[0].section)==null?void 0:b.title),1)])]),V(S,null,{default:o(()=>{var n,u,x,C;return[(d(!0),g(y,null,w((C=(x=(u=(n=r(i))==null?void 0:n.pageCatalogueCollection)==null?void 0:u.items[0].section)==null?void 0:x.imagesCollection)==null?void 0:C.items,k=>(d(),g("div",{style:j({backgroundImage:"url("+k.url+")"}),class:"h-full w-full hover:transition hover:ease-in-out hover:scale-[102%] relative grid gap-4 h-auto max-w-full rounded-lg aspect-square bg-cover bg-center"},K,4))),256))]}),_:1})])])])])]}),_:1}))}};export{te as default};
