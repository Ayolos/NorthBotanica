import{_ as p}from"./NorthBotanicaLayout-6df9153f.js";import{u as d}from"./fetchContentfullApi-0ebbf3cd.js";import{J as _}from"./JetSectionTemplate-faef0669.js";import{r as c,o as r,c as m,w as l,a,t as o,u as i,b as u,d as b,e as f,F as g,n as x}from"./app-de02c8a7.js";const C={class:"h-full"},h=`{
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
    }`,v={__name:"About",setup(k){c(0),c(100);const{data:n,isLoading:w}=d(h);return(y,A)=>(r(),m(p,null,{"banner-name":l(()=>{var e,t;return[a(o((t=(e=i(n))==null?void 0:e.pageAProposCollection)==null?void 0:t.items[0].banner.title),1)]}),"banner-label":l(()=>{var e,t;return[a(o((t=(e=i(n))==null?void 0:e.pageAProposCollection)==null?void 0:t.items[0].banner.label),1)]}),default:l(()=>{var e,t;return[u("section",C,[(r(!0),b(g,null,f((t=(e=i(n))==null?void 0:e.sectionTemplateCollection)==null?void 0:t.items,(s,B)=>(r(),m(_,null,{title:l(()=>[a(o(s.title),1)]),description:l(()=>[a(o(s.description),1)]),image:l(()=>[u("div",{class:"w-full h-full bg-cover bg-center rounded-xl shadow-xl",style:x({backgroundImage:"url("+s.img.url+")"})},null,4)]),_:2},1024))),256))])]}),_:1}))}};export{v as default};
