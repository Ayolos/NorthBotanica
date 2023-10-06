import{f as m,x as f,o as l,d,b as e,u as p,q as n,a as u,y as _,i as r,h,c as b,z as x,w as c,s as g}from"./app-de02c8a7.js";const y="/build/assets/logo-3e34bd7b.png",k={class:"z-50 bg-gray-100 dark:bg-gray-900 w-full top-0 left-0 sticky"},w={class:"max-w-screen-xl flex flex-wrap items-center md:justify-around justify-between gap-8 mx-auto p-3"},$=["href"],v=["src"],G=e("span",{class:"self-center text-xl font-semibold whitespace-nowrap dark:text-white"},"North Botanica",-1),B=e("button",{"data-collapse-toggle":"navbar-default",type:"button",class:"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600","aria-controls":"navbar-default","aria-expanded":"false"},[e("span",{class:"sr-only"},"Open main menu"),e("svg",{class:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 17 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 1h15M1 7h15M1 13h15"})])],-1),j={class:"hidden h-screen md:h-full w-full md:block md:w-auto",id:"navbar-default"},N={class:"flex md:text-sm text-2xl text-center flex-col md:gap-4 gap-2 p-2 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0"},C=["href"],z=["href"],A=["href"],M=["href"],O={__name:"JetHeader",setup(s){return m(()=>{f()}),(t,o)=>(l(),d("nav",k,[e("div",w,[e("a",{href:t.route("home"),class:"flex items-center w-max gap-2"},[e("img",{src:p(y),alt:"Image",class:"w-10"},null,8,v),G],8,$),B,e("div",j,[e("ul",N,[e("li",null,[e("a",{class:n([[t.route().current()==="home"?"md:text-darkGreen text-darkGreen":""],"block py-2 pl-3 pr-4 rounded hover:text-gray-400 md:bg-transparent md:p-0"]),href:t.route("home")},"Accueil",10,C)]),e("li",null,[e("a",{class:n([[t.route().current()==="catalogue"?"md:text-darkGreen text-darkGreen":""],"block py-2 pl-3 pr-4 rounded hover:text-gray-400 md:bg-transparent md:p-0"]),href:t.route("catalogue")},"Services",10,z)]),e("li",null,[e("a",{class:n([[t.route().current()==="aboutv2"?"md:text-darkGreen text-darkGreen":""],"block py-2 pl-3 pr-4 rounded hover:text-gray-400 md:bg-transparent md:p-0"]),href:t.route("aboutv2")},"A Propos",10,A)]),e("li",null,[e("a",{class:n([[t.route().current()==="contact"?"md:text-darkGreen text-darkGreen":""],"block py-2 pl-3 pr-4 rounded hover:text-gray-400 md:bg-transparent md:p-0"]),href:t.route("contact")},"Contact",10,M)])])])])]))}},S=(s,t)=>{const o=s.__vccOpts||s;for(const[a,i]of t)o[a]=i;return o},V={},J={class:"bg-darkGreen text-white border-top border-darkGreen"},R={class:"w-full py-8"},F={class:"sm:flex sm:items-center sm:justify-between md:px-16 px-12 mx-auto"},I=["href"],P=e("i",{class:"fa-solid fa-seedling fa-2xl",style:{color:"#1ae316"}},null,-1),T=e("span",{class:"self-center text-2xl font-semibold whitespace-nowrap dark:text-white"},"North Botanica",-1),q=[P,T],D={class:"flex flex-wrap items-center justify-center mb-6 text-sm text-white font-normal sm:mb-0 dark:text-gray-400"},E=["href"],H=["href"],L=e("hr",{class:"my-6 border-green-800 sm:mx-auto lg:my-8"},null,-1),U=e("span",{class:"block text-sm text-white text-center dark:text-gray-400"},[u("© 2023 "),e("a",{href:"",class:"hover:underline"},"North Botanica™"),u(". All Rights Reserved.")],-1);function K(s,t){return l(),d("footer",J,[e("div",R,[e("div",F,[e("a",{href:s.route("home"),class:"flex mx-auto sm:mx-0 items-center w-max gap-2"},q,8,I),e("ul",D,[e("li",null,[e("a",{href:s.route("aboutv2"),class:"mr-4 hover:underline md:mr-6"},"A propos",8,E)]),e("li",null,[e("a",{href:s.route("contact"),class:"hover:underline"},"Contact",8,H)])])]),L,U])])}const Q=S(V,[["render",K]]);let W=!1;try{W=!0}catch{}const X={class:"h-full w-full md:py-36 py-20 flex items-center justify-center border-b border-gray-200"},Y={class:"w-full text-lg md:text-2xl font-bold"},Z={class:"w-full text-3xl md:text-4xl font-bold pb-4 drop-shadow-xl text-transparent bg-clip-text bg-gradient-to-l from-darkGreen via-darkGreen to-clearGreen"},ee={class:"w-full text-md md:text-lg text-gray-400"},te={__name:"JetBanner",props:{},setup(s){const t=_(),o=()=>t.label?"justify-start text-start":"justify-center text-center";return(a,i)=>(l(),d("div",X,[e("div",{class:n([[o()],"flex flex-col h-max items-center w-3/4"])},[e("label",Y,[r(a.$slots,"label")]),e("h1",Z,[r(a.$slots,"title")]),e("p",ee,[r(a.$slots,"description")])],2)]))}},se={class:"relative z-0 h-full min-h-screen max-h-full bg-gray-100"},re={class:"h-full w-full"},ae={__name:"NorthBotanicaLayout",setup(s){return(t,o)=>(l(),d("div",se,[h(O),t.$slots["banner-name"]||t.$slots["banner-description"]||t.$slots["banner-label"]?(l(),b(te,{key:0,class:"bg-gray-100"},x({_:2},[t.$slots["banner-name"]?{name:"title",fn:c(()=>[r(t.$slots,"banner-name")]),key:"0"}:void 0,t.$slots["banner-label"]?{name:"label",fn:c(()=>[r(t.$slots,"banner-label")]),key:"1"}:void 0,t.$slots["banner-description"]?{name:"description",fn:c(()=>[r(t.$slots,"banner-description")]),key:"2"}:void 0]),1024)):g("",!0),e("main",re,[r(t.$slots,"default")]),h(Q)]))}};export{ae as _,S as a};