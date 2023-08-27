import{_ as C}from"./NorthBotanicaLayout-7f4928ae.js";import{d as b,j as k,A as $,o as l,e as i,a as t,F as g,h as y,n as A,t as m,f as r,b as p,w,u as a,Z as j,i as B,g as L}from"./app-c246124d.js";import{u as N}from"./fetchContentfullApi-e0b58761.js";import{g as z}from"./index-4db78ffb.js";import"./_plugin-vue_export-helper-c27b6911.js";const S={class:"relative flex flex-col rounded-xl bg-black/5 w-5/6 shadow-md gap-3"},V={class:"flex flex-row items-center justify-center"},F=["onClick"],M={class:"py-24 px-18"},T={class:"flex flex-row gap-6 justify-center items-center"},D={key:0,class:"basis-1/4 shadow-lg m-16 hidden lg:block bg-green-700 rounded-lg"},E=["src"],H={class:"flex flex-col basis-3/4 gap-2 md:text-start text-start"},I={key:0,class:"text-3xl font-black text-green-700"},W={key:1,class:"text-start w-full md:w-3/4"},q={key:2},J={__name:"JetCardMoreInfo",props:{datat:Object},setup(x){const f=x,s=b(f.datat),h=b(0);k(()=>{$(()=>f.datat,o=>{o&&o.length>0&&(s.value=[...o],s.value.forEach((n,e)=>{n.isActive=e===0,n.id=e,n.progress=e===0}))},{immediate:!0})});const _=o=>{let n=s.value.find(e=>e.isActive===!0);s.value[n.id].isActive=!1,h.value=o,s.value[o].isActive=!0};return(o,n)=>(l(),i("div",S,[t("div",V,[(l(!0),i(g,null,y(s.value,e=>(l(),i("button",{onClick:c=>_(e.id),class:A([[e!=null&&e.isActive?"text-green-700 border-b-2 border-green-700":""],"rounded-sm hover:bg-black/5 pt-6 pb-5 px-2 md:px-4 text-xs md:text-lg font-semibold w-max"]),type:"button"},m(e.title),11,F))),256))]),t("div",M,[(l(!0),i(g,null,y(s.value,e=>(l(),i("div",T,[e.isActive?(l(),i("div",D,[t("img",{class:"p-10 w-fit h-fit -rotate-12",src:e==null?void 0:e.icon.url,alt:""},null,8,E)])):r("",!0),t("div",H,[e!=null&&e.isActive?(l(),i("h3",I,m(e==null?void 0:e.title),1)):r("",!0),e!=null&&e.isActive?(l(),i("p",W,m(e==null?void 0:e.description),1)):r("",!0),(e==null?void 0:e.id)===2?(l(),i("div",q)):r("",!0)])]))),256))])]))}},O=["content"],R={class:"h-full min-h-screen"},Z={class:"h-full w-full flex items-center flex-col gap-24 pb-24"},G={key:0,class:"z-0 absolute inset-0 bg-black/50"},K={class:"load h-full flex flex-col justify-center gap-8 animateBounce"},P={class:"w-full"},Q={class:"drop-shadow-xl text-4xl md:text-6xls font-black text-center text-transparent bg-clip-text bg-gradient-to-l from-green-500 via-green-600 to-green-700 py-3 w-3/4 mx-auto"},U=t("div",{class:"flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"},null,-1),X={key:0,class:"flex flex-row justify-center gap-8 z-10"},Y=["href"],ee=t("svg",{class:"w-3.5 h-3.5 ml-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 10"},[t("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 5h12m0 0L9 1m4 4L9 9"})],-1),te=["href"],se=`{
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
  }`,ce={__name:"Welcome",props:["canLogin","canRegister","laravelVersion","phpVersion","analyticsData"],setup(x){const{props:f}=x,{data:s,isLoading:h}=N(se);k(()=>{console.log(f),_(".animateBounce")});const _=o=>{const n=z.timeline();n.set(o,{x:-20,y:-20,opacity:0}),n.to(o,{duration:1,ease:"bounce",opacity:1,x:0,y:0},"<"),n.play()};return(o,n)=>(l(),i(g,null,[p(a(j),null,{default:w(()=>{var e,c,u,d;return[t("title",null,m((c=(e=a(s))==null?void 0:e.accueilCollection)==null?void 0:c.items[0].title),1),t("meta",{name:"description",content:(d=(u=a(s))==null?void 0:u.accueilCollection)==null?void 0:d.items[0].title},null,8,O)]}),_:1}),p(C,null,{default:w(()=>{var e,c,u,d,v;return[t("div",R,[t("div",Z,[t("div",{class:"relative flex flex-col gap-12 w-full h-[50vh] bg-cover lg:bg-contain bg-bottom bg-fixed",style:B({backgroundImage:"url("+((c=(e=a(s))==null?void 0:e.accueilCollection)==null?void 0:c.items[0].image.url)+")"})},[a(h)?r("",!0):(l(),i("div",G)),t("div",K,[t("div",P,[t("h1",Q,m((d=(u=a(s))==null?void 0:u.accueilCollection)==null?void 0:d.items[0].title),1),U]),a(h)?r("",!0):(l(),i("div",X,[t("a",{href:o.route("catalogue"),class:"bg-green-700 rounded-full py-3 shadow-2xl hover:scale-[102%] hover:duration-300 hover:ease-in-out px-6 text-white inline-flex items-center"},[L(" Nos travaux "),ee],8,Y),t("a",{href:o.route("contact"),class:"border border-gray-300 text-sm hover:scale-[102%] hover:duration-300 hover:ease-in-out bg-gray-100 rounded-full py-3 px-6 text-black inline-flex items-center"}," Nous contactez ",8,te)]))])],4),p(J,{class:"animateBounce",datat:(v=a(s))==null?void 0:v.accueilCollection.items[0].cardHomeCollection.items},null,8,["datat"])])])]}),_:1})],64))}};export{ce as default};