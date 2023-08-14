import{_ as d}from"./NorthBotanicaLayout-e1b6a308.js";import{u as p}from"./fetchContentfullApi-1dd75fe8.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";import{o as n,e as _,a as r,r as b,d as m,c as f,w as l,g as o,t as a,u as c,h,F as x,i as C}from"./app-3743d282.js";const w={},k={class:"aspect-square w-1/2 mx-auto"},v={class:"w-full flex flex-col"},y=r("p",null,"zefezfefrefefefefrfefef",-1);function A(u,s){return n(),_("div",k,[r("div",v,[b(u.$slots,"image"),y])])}const B=g(w,[["render",A]]),S={class:"h-full"},T=`{
        pageAProposCollection {
            items {
              banner {
                title
                label
              }
              sectionExpert {
                title
                label
                imagesCollection {
                  items {
                    url
                    title
                    description
                  }
                }
              }
            }
          }
          sectionTemplateCollection {
            items {
              title
              description
              img {
                url
              }
            }
          }
    }`,V={__name:"About",setup(u){m(0),m(100);const{data:s,isLoading:$}=p(T);return(z,F)=>(n(),f(d,null,{"banner-name":l(()=>{var e,t;return[o(a((t=(e=c(s))==null?void 0:e.pageAProposCollection)==null?void 0:t.items[0].banner.title),1)]}),"banner-label":l(()=>{var e,t;return[o(a((t=(e=c(s))==null?void 0:e.pageAProposCollection)==null?void 0:t.items[0].banner.label),1)]}),default:l(()=>{var e,t;return[r("section",S,[(n(!0),_(x,null,h((t=(e=c(s))==null?void 0:e.sectionTemplateCollection)==null?void 0:t.items,(i,P)=>(n(),f(B,null,{title:l(()=>[o(a(i.title),1)]),description:l(()=>[o(a(i.description),1)]),image:l(()=>[r("div",{class:"w-full h-full bg-cover bg-center rounded-xl shadow-xl",style:C({backgroundImage:"url("+i.img.url+")"})},null,4)]),_:2},1024))),256))])]}),_:1}))}};export{V as default};
