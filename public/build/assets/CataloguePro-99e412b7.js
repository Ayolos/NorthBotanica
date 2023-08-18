import{_ as k}from"./NorthBotanicaLayout-7f4928ae.js";import{J as B,_ as S}from"./JetCardPost-9cf3820e.js";import{u as F}from"./fetchContentfullApi-e0b58761.js";import{o as p,e as f,b as _,w as i,u as a,F as b,a as o,t as n,Z as N,g as c,h as P,c as V,i as j}from"./app-c246124d.js";import"./_plugin-vue_export-helper-c27b6911.js";const q=["content"],J={class:"h-full w-full min-h-screen"},L={class:"w-full pt-24 relative flex flex-col gap-2 sm:gap-24 justify-center items-center"},$={class:"h-3/4 w-full pb-24 border-b border-gray-300 sm:px-10 px-0"},z={class:"ease-in-out duration-700 items-center flex lg:flex-row flex-col gap-2 sm:gap-5 w-full h-full p-4 mx-auto overflow-auto"},D={class:"w-full h-max relative pb-24 px-0"},E={class:"w-full h-full md:pb-5 md:px-7 px-4 pt-16 pb-4"},G={class:"flex flex-col gap-12 h-full w-full"},I={class:"h-1/4",title:"banner"},T={class:"h-full flex flex-col items-start text-start justify-start gap-2 overflow-clip"},Z={class:"font-semibold drop-shadow-xl text-md lg:text-lg w-full lg:w-1/3"},A={class:"text-black drop-shadow-lg py-1 font-mono subpixel-antialiased font-black text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-l from-green-500 via-green-600 to-green-700"},H=o("div",{class:"absolute inset-0 bg-black/30 rounded-lg"},null,-1),K=[H],M=`{
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
    }`,oe={__name:"CataloguePro",setup(O){const{data:s,isLoading:Q,error:R}=F(M);return(U,W)=>(p(),f(b,null,[_(a(N),null,{default:i(()=>{var e,t,l,u,d,g;return[o("title",null,n((l=(t=(e=a(s))==null?void 0:e.pageCatalogueProCollection)==null?void 0:t.items[0].banner)==null?void 0:l.title),1),o("meta",{name:"description",content:(g=(d=(u=a(s))==null?void 0:u.pageCatalogueProCollection)==null?void 0:d.items[0].banner)==null?void 0:g.description},null,8,q)]}),_:1}),_(k,null,{"banner-label":i(()=>{var e,t,l;return[c(n((l=(t=(e=a(s))==null?void 0:e.pageCatalogueProCollection)==null?void 0:t.items[0].banner)==null?void 0:l.label),1)]}),"banner-name":i(()=>{var e,t,l;return[c(n((l=(t=(e=a(s))==null?void 0:e.pageCatalogueProCollection)==null?void 0:t.items[0].banner)==null?void 0:l.title),1)]}),"banner-description":i(()=>{var e,t,l;return[c(n((l=(t=(e=a(s))==null?void 0:e.pageCatalogueProCollection)==null?void 0:t.items[0].banner)==null?void 0:l.description),1)]}),default:i(()=>{var e,t,l,u,d,g,h,x,C;return[o("main",J,[o("section",L,[o("div",$,[o("div",z,[(p(!0),f(b,null,P((l=(t=(e=a(s))==null?void 0:e.pageCatalogueProCollection)==null?void 0:t.items[0].cardCollection)==null?void 0:l.items,r=>{var m;return p(),V(S,{imageSrc:(m=r.imageCard)==null?void 0:m.url,class:"shadow-lg h-[60vh]"},{label:i(()=>[c(n(r.label),1)]),title:i(()=>[c(n(r.title),1)]),description:i(()=>[c(n(r.description),1)]),_:2},1032,["imageSrc"])}),256))])])]),o("section",D,[o("div",E,[o("div",G,[o("section",I,[o("div",T,[o("div",Z,n((g=(d=(u=a(s))==null?void 0:u.pageCatalogueProCollection)==null?void 0:d.items[0].section)==null?void 0:g.label),1),o("div",A,n((C=(x=(h=a(s))==null?void 0:h.pageCatalogueProCollection)==null?void 0:x.items[0].section)==null?void 0:C.title),1)])]),_(B,null,{default:i(()=>{var r,m,v,w;return[(p(!0),f(b,null,P((w=(v=(m=(r=a(s))==null?void 0:r.pageCatalogueProCollection)==null?void 0:m.items[0].section)==null?void 0:v.imagesCollection)==null?void 0:w.items,y=>(p(),f("div",{style:j({backgroundImage:"url("+y.url+")"}),class:"h-full w-full hover:transition hover:ease-in-out hover:scale-[102%] relative grid gap-4 max-w-full rounded-lg aspect-square bg-cover bg-center"},K,4))),256))]}),_:1})])])])])]}),_:1})],64))}};export{oe as default};
