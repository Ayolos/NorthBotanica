import{_ as lt}from"./NorthBotanicaLayout-6df9153f.js";import{o as c,d as a,h as et,w as m,u as e,F as r,b as t,t as n,Z as ot,a as x,e as _}from"./app-de02c8a7.js";import{u as st}from"./fetchContentfullApi-0ebbf3cd.js";const it=t("meta",{name:"description"},null,-1),nt={class:"flex flex-col gap-12 py-16 lg:px-32 px-10"},ct={class:"text-2xl font-semibold"},at={class:"flex flex-row h-full gap-10"},dt=["src"],mt={class:"flex flex-col gap-4 md:basis-2/3 text-start"},rt={class:"text-sm"},_t={class:"flex flex-col gap-12 py-16 lg:px-32 px-10"},xt={class:"text-2xl font-semibold"},pt={class:"flex flex-col text-center gap-10"},ut=["src"],gt={class:"flex flex-col gap-4 md:basis-2/3 h-max text-justify text-md"},Ct={class:"md:basis-2/3 text-justify text-sm"},ht={class:"flex flex-col gap-12 py-16 lg:px-32 px-10"},ft={class:"text-2xl font-semibold"},vt={class:"flex flex-row-reverse h-full gap-10"},bt=["src"],yt={class:"flex flex-col gap-4 md:basis-2/3 text-justify text-md"},jt={class:"md:basis-2/3 text-justify text-sm"},wt={class:"flex flex-col gap-12 py-16 lg:px-32 px-10"},kt={class:"text-2xl font-semibold"},Bt={class:"flex flex-col-reverse text-center gap-10"},Ft=["src"],Nt={class:"flex flex-col gap-4 md:basis-2/3 h-max text-justify text-md"},Vt={class:"md:basis-2/3 text-justify text-sm"},Lt=`{
        pageCollectiviteCollection(limit: 10, skip: 0) {
            items {
              banner {
                title
                description
                label
              }
              contentCollection {
                items {
                  title
                  img { url }
                  content {json}
                }
              }
            }
          }
    }`,At={__name:"CatalogueCollectivity",setup(qt){const{data:l,isLoading:Dt,error:Et}=st(Lt);return(St,Tt)=>(c(),a(r,null,[et(e(ot),null,{default:m(()=>{var o,s,i;return[t("title",null,n((i=(s=(o=e(l))==null?void 0:o.pageCollectiviteCollection)==null?void 0:s.items[0].banner)==null?void 0:i.title),1),it]}),_:1}),et(lt,null,{"banner-label":m(()=>{var o,s,i;return[x(n((i=(s=(o=e(l))==null?void 0:o.pageCollectiviteCollection)==null?void 0:s.items[0].banner)==null?void 0:i.label),1)]}),"banner-name":m(()=>{var o,s,i;return[x(n((i=(s=(o=e(l))==null?void 0:o.pageCollectiviteCollection)==null?void 0:s.items[0].banner)==null?void 0:i.title),1)]}),"banner-description":m(()=>{var o,s,i;return[x(n((i=(s=(o=e(l))==null?void 0:o.pageCollectiviteCollection)==null?void 0:s.items[0].banner)==null?void 0:i.description),1)]}),default:m(()=>{var o,s,i,p,u,g,C,h,f,v,b,y,j,w,k,B,F,N,V,L,q,D,E,S,T,Z,$,z,A,G,H,I,J,K,M,O,P,Q,R,U,W,X,Y,tt;return[t("section",nt,[t("h2",ct,n((i=(s=(o=e(l))==null?void 0:o.pageCollectiviteCollection)==null?void 0:s.items[0].contentCollection)==null?void 0:i.items[0].title),1),t("div",at,[t("img",{src:(g=(u=(p=e(l))==null?void 0:p.pageCollectiviteCollection)==null?void 0:u.items[0].contentCollection)==null?void 0:g.items[0].img.url,class:"w-[40%] shadow-lg rounded-md md:block hidden"},null,8,dt),t("div",mt,[(c(!0),a(r,null,_((b=(v=(f=(h=(C=e(l))==null?void 0:C.pageCollectiviteCollection)==null?void 0:h.items[0].contentCollection)==null?void 0:f.items[0].content)==null?void 0:v.json)==null?void 0:b.content,d=>(c(),a("p",rt,n(d.content[0].value),1))),256))])])]),t("section",_t,[t("h2",xt,n((w=(j=(y=e(l))==null?void 0:y.pageCollectiviteCollection)==null?void 0:j.items[0].contentCollection)==null?void 0:w.items[1].title),1),t("div",pt,[t("img",{src:(F=(B=(k=e(l))==null?void 0:k.pageCollectiviteCollection)==null?void 0:B.items[0].contentCollection)==null?void 0:F.items[1].img.url,class:"shadow-lg rounded-md bg-cover h-[35vh] md:block hidden"},null,8,ut),t("div",gt,[(c(!0),a(r,null,_((D=(q=(L=(V=(N=e(l))==null?void 0:N.pageCollectiviteCollection)==null?void 0:V.items[0].contentCollection)==null?void 0:L.items[1].content)==null?void 0:q.json)==null?void 0:D.content,d=>(c(),a("p",Ct,n(d.content[0].value),1))),256))])])]),t("section",ht,[t("h2",ft,n((T=(S=(E=e(l))==null?void 0:E.pageCollectiviteCollection)==null?void 0:S.items[0].contentCollection)==null?void 0:T.items[2].title),1),t("div",vt,[t("img",{src:(z=($=(Z=e(l))==null?void 0:Z.pageCollectiviteCollection)==null?void 0:$.items[0].contentCollection)==null?void 0:z.items[2].img.url,class:"basis-1/3 w-[40%] h-[100%] shadow-lg rounded-md md:block hidden"},null,8,bt),t("div",yt,[(c(!0),a(r,null,_((J=(I=(H=(G=(A=e(l))==null?void 0:A.pageCollectiviteCollection)==null?void 0:G.items[0].contentCollection)==null?void 0:H.items[2].content)==null?void 0:I.json)==null?void 0:J.content,d=>(c(),a("p",jt,n(d.content[0].value),1))),256))])])]),t("section",wt,[t("h2",kt,n((O=(M=(K=e(l))==null?void 0:K.pageCollectiviteCollection)==null?void 0:M.items[0].contentCollection)==null?void 0:O.items[3].title),1),t("div",Bt,[t("img",{src:(R=(Q=(P=e(l))==null?void 0:P.pageCollectiviteCollection)==null?void 0:Q.items[0].contentCollection)==null?void 0:R.items[3].img.url,class:"shadow-lg rounded-md bg-cover h-[35vh] md:block hidden"},null,8,Ft),t("div",Nt,[(c(!0),a(r,null,_((tt=(Y=(X=(W=(U=e(l))==null?void 0:U.pageCollectiviteCollection)==null?void 0:W.items[0].contentCollection)==null?void 0:X.items[3].content)==null?void 0:Y.json)==null?void 0:tt.content,d=>(c(),a("p",Vt,n(d.content[0].value),1))),256))])])])]}),_:1})],64))}};export{At as default};