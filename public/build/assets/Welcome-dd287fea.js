import{_ as C}from"./NorthBotanicaLayout-6df9153f.js";import{r as b,f as w,p as $,o as l,d as i,b as t,F as v,e as k,q as A,t as m,s as r,h as p,w as y,u as a,Z as G,n as j,a as B}from"./app-de02c8a7.js";import{u as L}from"./fetchContentfullApi-0ebbf3cd.js";import{g as N}from"./index-4db78ffb.js";const z={class:"relative flex flex-col rounded-xl bg-black/5 w-5/6 shadow-md gap-3"},S={class:"flex flex-row items-center justify-center"},V=["onClick"],F={class:"py-24 px-18"},M={class:"flex flex-row gap-6 justify-center items-center"},T={key:0,class:"basis-1/4 shadow-lg m-16 hidden lg:block bg-darkGreen rounded-lg"},q=["src"],D={class:"flex flex-col basis-3/4 gap-2 md:text-start text-start"},E={key:0,class:"text-3xl font-black text-darkGreen"},H={key:1,class:"text-start w-full md:w-3/4"},I={key:2},W={__name:"JetCardMoreInfo",props:{datat:Object},setup(x){const f=x,s=b(f.datat),h=b(0);w(()=>{$(()=>f.datat,o=>{o&&o.length>0&&(s.value=[...o],s.value.forEach((n,e)=>{n.isActive=e===0,n.id=e,n.progress=e===0}))},{immediate:!0})});const _=o=>{let n=s.value.find(e=>e.isActive===!0);s.value[n.id].isActive=!1,h.value=o,s.value[o].isActive=!0};return(o,n)=>(l(),i("div",z,[t("div",S,[(l(!0),i(v,null,k(s.value,e=>(l(),i("button",{onClick:c=>_(e.id),class:A([[e!=null&&e.isActive?"text-darkGreen border-b-2 border-darkGreen":""],"rounded-sm hover:bg-black/5 pt-6 pb-5 px-2 md:px-4 text-xs md:text-lg font-semibold w-max"]),type:"button"},m(e.title),11,V))),256))]),t("div",F,[(l(!0),i(v,null,k(s.value,e=>(l(),i("div",M,[e.isActive?(l(),i("div",T,[t("img",{class:"p-10 w-fit h-fit -rotate-12",src:e==null?void 0:e.icon.url,alt:""},null,8,q)])):r("",!0),t("div",D,[e!=null&&e.isActive?(l(),i("h3",E,m(e==null?void 0:e.title),1)):r("",!0),e!=null&&e.isActive?(l(),i("p",H,m(e==null?void 0:e.description),1)):r("",!0),(e==null?void 0:e.id)===2?(l(),i("div",I)):r("",!0)])]))),256))])]))}},J=["content"],O={class:"h-full min-h-screen"},R={class:"h-full w-full flex items-center flex-col gap-24 pb-24"},Z={key:0,class:"z-0 absolute inset-0 bg-black/50"},K={class:"load h-full flex flex-col justify-center gap-8 animateBounce md:mx-10 mx-5"},P={class:"w-full"},Q={class:"drop-shadow-xl text-xl sm:text-4xl md:text-6xls font-black text-center text-transparent bg-clip-text bg-gradient-to-l from-darkGreen via-darkGreen to-clearGreen py-3"},U=t("div",{class:"flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"},null,-1),X={key:0,class:"flex flex-row justify-center gap-4 z-10"},Y=["href"],ee=t("svg",{class:"w-3.5 h-3.5 ml-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 10"},[t("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 5h12m0 0L9 1m4 4L9 9"})],-1),te=["href"],se=`{
    accueilCollection{
      items{
        title
        image {
            url
        }
        cardHomeCollection{
          items{
            icon{
              url
            }
            title
            description
          }
        }
      }
    }
  }`,ae={__name:"Welcome",props:["canLogin","canRegister","laravelVersion","phpVersion","analyticsData"],setup(x){const{props:f}=x,{data:s,isLoading:h}=L(se);w(()=>{console.log(f),_(".animateBounce")});const _=o=>{const n=N.timeline();n.set(o,{x:-20,y:-20,opacity:0}),n.to(o,{duration:1,ease:"bounce",opacity:1,x:0,y:0},"<"),n.play()};return(o,n)=>(l(),i(v,null,[p(a(G),null,{default:y(()=>{var e,c,u,d;return[t("title",null,m((c=(e=a(s))==null?void 0:e.accueilCollection)==null?void 0:c.items[0].title),1),t("meta",{name:"description",content:(d=(u=a(s))==null?void 0:u.accueilCollection)==null?void 0:d.items[0].title},null,8,J)]}),_:1}),p(C,null,{default:y(()=>{var e,c,u,d,g;return[t("div",O,[t("div",R,[t("div",{class:"relative flex flex-col gap-12 w-full h-[50vh] bg-cover lg:bg-contain bg-bottom bg-fixed backdrop-blur-xl",style:j({backgroundImage:"url("+((c=(e=a(s))==null?void 0:e.accueilCollection)==null?void 0:c.items[0].image.url)+")"})},[a(h)?r("",!0):(l(),i("div",Z)),t("div",K,[t("div",P,[t("h1",Q,m((d=(u=a(s))==null?void 0:u.accueilCollection)==null?void 0:d.items[0].title),1),U]),a(h)?r("",!0):(l(),i("div",X,[t("a",{href:o.route("catalogue"),class:"bg-darkGreen rounded-full py-3 shadow-2xl hover:scale-[102%] hover:duration-300 hover:ease-in-out px-6 text-white inline-flex items-center"},[B(" Nos travaux "),ee],8,Y),t("a",{href:o.route("contact"),class:"border border-gray-300 text-sm hover:scale-[102%] hover:duration-300 hover:ease-in-out bg-gray-100 rounded-full py-3 px-6 text-black inline-flex items-center"}," Nous contactez ",8,te)]))])],4),p(W,{class:"animateBounce",datat:(g=a(s))==null?void 0:g.accueilCollection.items[0].cardHomeCollection.items},null,8,["datat"])])])]}),_:1})],64))}};export{ae as default};
