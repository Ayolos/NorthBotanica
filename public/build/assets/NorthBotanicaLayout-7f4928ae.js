import{j as h,L as m,o as n,e as a,a as e,n as r,g as i,J as f,r as o,b as u,c as p,M as _,w as d,f as g}from"./app-c246124d.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";const b={class:"z-50 bg-gray-200/30 dark:bg-gray-900 w-full top-0 left-0"},y={class:"max-w-screen-xl flex flex-wrap items-center md:justify-around justify-between gap-8 mx-auto p-3"},w=["href"],$=e("i",{class:"fa-solid fa-seedling fa-xl",style:{color:"#1ae316"}},null,-1),v=e("span",{class:"self-center text-xl font-semibold whitespace-nowrap dark:text-white"},"North Botanica",-1),k=[$,v],j=e("button",{"data-collapse-toggle":"navbar-default",type:"button",class:"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600","aria-controls":"navbar-default","aria-expanded":"false"},[e("span",{class:"sr-only"},"Open main menu"),e("svg",{class:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 17 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 1h15M1 7h15M1 13h15"})])],-1),B={class:"hidden h-screen md:h-full w-full md:block md:w-auto",id:"navbar-default"},N={class:"flex md:text-sm text-2xl text-center flex-col md:gap-4 gap-2 p-2 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0"},C=["href"],M=["href"],A=["href"],J=["href"],S={__name:"JetHeader",setup(s){return h(()=>{m()}),(t,l)=>(n(),a("nav",b,[e("div",y,[e("a",{href:t.route("home"),class:"flex items-center w-max gap-2"},k,8,w),j,e("div",B,[e("ul",N,[e("li",null,[e("a",{class:r([[t.route().current()==="home"?"md:text-green-700 text-green-700":""],"block py-2 pl-3 pr-4 rounded hover:text-gray-400 md:bg-transparent md:p-0"]),href:t.route("home")},"Accueil",10,C)]),e("li",null,[e("a",{class:r([[t.route().current()==="catalogue"?"md:text-green-700 text-green-700":""],"block py-2 pl-3 pr-4 rounded hover:text-gray-400 md:bg-transparent md:p-0"]),href:t.route("catalogue")},"Services",10,M)]),e("li",null,[e("a",{class:r([[t.route().current()==="aboutv2"?"md:text-green-700 text-green-700":""],"block py-2 pl-3 pr-4 rounded hover:text-gray-400 md:bg-transparent md:p-0"]),href:t.route("aboutv2")},"A Propos",10,A)]),e("li",null,[e("a",{class:r([[t.route().current()==="contact"?"md:text-green-700 text-green-700":""],"block py-2 pl-3 pr-4 rounded hover:text-gray-400 md:bg-transparent md:p-0"]),href:t.route("contact")},"Contact",10,J)])])])])]))}},V={},z={class:"bg-green-700 text-white border-top border-green-800"},O={class:"w-full py-8"},R={class:"sm:flex sm:items-center sm:justify-between md:px-16 px-12 mx-auto"},F=["href"],L=e("i",{class:"fa-solid fa-seedling fa-2xl",style:{color:"#1ae316"}},null,-1),P=e("span",{class:"self-center text-2xl font-semibold whitespace-nowrap dark:text-white"},"North Botanica",-1),T=[L,P],D={class:"flex flex-wrap items-center justify-center mb-6 text-sm text-white font-normal sm:mb-0 dark:text-gray-400"},E=["href"],H=["href"],I=e("hr",{class:"my-6 border-green-800 sm:mx-auto lg:my-8"},null,-1),U=e("span",{class:"block text-sm text-white text-center dark:text-gray-400"},[i("© 2023 "),e("a",{href:"",class:"hover:underline"},"North Botanica™"),i(". All Rights Reserved.")],-1);function q(s,t){return n(),a("footer",z,[e("div",O,[e("div",R,[e("a",{href:s.route("home"),class:"flex mx-auto sm:mx-0 items-center w-max gap-2"},T,8,F),e("ul",D,[e("li",null,[e("a",{href:s.route("aboutv2"),class:"mr-4 hover:underline md:mr-6"},"A propos",8,E)]),e("li",null,[e("a",{href:s.route("contact"),class:"hover:underline"},"Contact",8,H)])])]),I,U])])}const G=x(V,[["render",q]]);let K=!1;try{K=!0}catch{}const Q={class:"h-full w-full md:py-36 py-20 flex items-center justify-center border-b border-gray-200"},W={class:"w-full text-lg md:text-2xl font-bold"},X={class:"w-full text-3xl md:text-4xl font-bold pb-4 drop-shadow-xl text-transparent bg-clip-text bg-gradient-to-l from-green-500 via-green-600 to-green-700"},Y={class:"w-full text-md md:text-lg text-gray-400"},Z={__name:"JetBanner",props:{},setup(s){const t=f(),l=()=>t.label?"justify-start text-start":"justify-center text-center";return(c,se)=>(n(),a("div",Q,[e("div",{class:r([[l()],"flex flex-col h-max items-center w-3/4"])},[e("label",W,[o(c.$slots,"label")]),e("h1",X,[o(c.$slots,"title")]),e("p",Y,[o(c.$slots,"description")])],2)]))}},ee={class:"relative z-0 h-full min-h-screen max-h-full"},te={class:"h-full w-full"},ne={__name:"NorthBotanicaLayout",setup(s){return(t,l)=>(n(),a("div",ee,[u(S),t.$slots["banner-name"]||t.$slots["banner-description"]||t.$slots["banner-label"]?(n(),p(Z,{key:0,class:"bg-black/5"},_({_:2},[t.$slots["banner-name"]?{name:"title",fn:d(()=>[o(t.$slots,"banner-name")]),key:"0"}:void 0,t.$slots["banner-label"]?{name:"label",fn:d(()=>[o(t.$slots,"banner-label")]),key:"1"}:void 0,t.$slots["banner-description"]?{name:"description",fn:d(()=>[o(t.$slots,"banner-description")]),key:"2"}:void 0]),1024)):g("",!0),e("main",te,[o(t.$slots,"default")]),u(G)]))}};export{ne as _};