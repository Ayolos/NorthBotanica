import{_ as p}from"./NorthBotanicaLayout-660eff6b.js";import{u as d}from"./fetchContentfullApi-92300d1a.js";import{J as g}from"./JetSectionTemplate-90f41da5.js";import{d as c,o as s,c as m,w as l,g as a,t as o,u as r,a as u,e as _,h as f,F as b,i as h}from"./app-20b874c7.js";import"./_plugin-vue_export-helper-c27b6911.js";const x={class:"h-full"},C=`{
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
    }`,E={__name:"About",setup(k){c(0),c(100);const{data:i,isLoading:w}=d(C);return(y,A)=>(s(),m(p,null,{"banner-name":l(()=>{var e,t;return[a(o((t=(e=r(i))==null?void 0:e.pageAProposCollection)==null?void 0:t.items[0].banner.title),1)]}),"banner-label":l(()=>{var e,t;return[a(o((t=(e=r(i))==null?void 0:e.pageAProposCollection)==null?void 0:t.items[0].banner.label),1)]}),default:l(()=>{var e,t;return[u("section",x,[(s(!0),_(b,null,f((t=(e=r(i))==null?void 0:e.sectionTemplateCollection)==null?void 0:t.items,(n,B)=>(s(),m(g,null,{title:l(()=>[a(o(n.title),1)]),description:l(()=>[a(o(n.description),1)]),image:l(()=>[u("div",{class:"w-full h-full bg-cover bg-center rounded-xl shadow-xl",style:h({backgroundImage:"url("+n.img.url+")"})},null,4)]),_:2},1024))),256))])]}),_:1}))}};export{E as default};
