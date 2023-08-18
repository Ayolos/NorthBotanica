import{j as $,d as r,K as O,s as T,o as n,c as z,w as U,a as e,i as N,t as p,b as _,u as h,I as k,e as d,h as D,F as K,p as u,x,y as Z,g as S,l as X,O as I}from"./app-20b874c7.js";import{_ as P}from"./NorthBotanicaLayout-660eff6b.js";import"./_plugin-vue_export-helper-c27b6911.js";const A=e("div",{class:"fixed -z-10 inset-0"},null,-1),F={class:"flex flex-col gap-24 pb-24 pt-48"},J={class:"h-1/4",title:"banner"},L={class:"text-black drop-shadow-xl font-mono subpixel-antialiased font-black text-3xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-l from-green-500 via-green-600 to-green-700"},Y={class:"text-gray-500 font-medium drop-shadow-xl text-md lg:text-lg mx-auto w-full lg:w-1/2"},G={class:"p-5"},H={class:"flex lg:flex-row flex-col h-full"},Q={class:"basis-2/5 rounded-t-lg lg:rounded-r-none lg:rounded-l-lg bg-green-700",title:"bannerform"},R={class:"w-full h-full p-12 flex flex-col gap-10 text-white"},W=e("h1",{class:"text-xl font font-semibold"},"Nos coordonnées",-1),ee=e("h1",{class:"text-md font-normal text-gray-100"},"Nous vous répondrons par mail le plus rapidement possible",-1),te={class:"flex flex-col gap-3"},oe={class:"flex flex-row gap-3"},le={class:"text-md truncate"},se=["href"],ae=["onSubmit"],re={class:"grid gap-6 mb-6 md:grid-cols-4 md:grid-flow-row"},ne={class:"md:col-span-2 col-span-3"},ie=e("label",{class:"block mb-2 text-md font-black text-gray-900 dark:text-white",for:"first_name"},"Nom",-1),de={class:"md:col-span-2 col-span-3"},ce=e("label",{class:"block mb-2 text-md font-black text-gray-900 dark:text-white",for:"phone"},"Téléphone",-1),ue={class:"col-span-4"},ge=e("label",{class:"block mb-2 text-md font-black text-gray-900 dark:text-white",for:"countries"},"Souhaitez vous donner une dimension écologique à votre projet",-1),be=e("option",{selected:""},"Choisis une réponse",-1),me=e("option",{value:"yes"},"oui",-1),fe=e("option",{value:"no"},"non",-1),pe=e("option",{value:"unknown"},"Ne sais pas",-1),he=[be,me,fe,pe],xe={class:"mb-6"},_e=e("label",{class:"block mb-2 text-md font-black text-gray-900 dark:text-white",for:"email"},"Adresse mail",-1),ke=e("label",{class:"block mb-2 text-md font-black text-gray-900 dark:text-white",for:"message"},"Votre question",-1),ye={class:"flex justify-end mt-8"},ve={key:0,class:"w-max justify-center text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center",disabled:"",type:"button"},we=e("svg",{"aria-hidden":"true",class:"inline w-4 h-4 mr-3 text-white animate-spin",fill:"none",role:"status",viewBox:"0 0 100 101",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"}),e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"})],-1),Ce={key:1,class:"w-max justify-center text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center",type:"submit"},$e={key:1,class:"w-full basis-3/5 h-full",title:"submitform"},Ne={class:"w-full h-full p-48 gap-8 text-white flex flex-col items-center"},Se=e("h1",{class:"text-5xl text-gray-600 font-black"},"Envoyé",-1),Ee={__name:"Contact",setup(qe){$(()=>{q()});const q=async()=>{const o=`{
        pageContactCollection {
            items {
              banner {
                title
                description
              }
              mail
            }
          }
          reseauSocialCollection {
            items {
              name
              link
              icon {
                url
              }
            }
          }
    }`,t="https://graphql.contentful.com/content/v1/spaces/6zdudstotpon",a={method:"POST",headers:{Authorization:"Bearer 4-BvNhM2BNwaCavXg0Z9MiOB31O82kKjvta3YZ8K0g4","Content-Type":"application/json"},body:JSON.stringify({query:o})};try{const c=await fetch(t,a).then(f=>f.json());i.value=c.data,B.value=!1,setTimeout(()=>{b.value=1,m.value=0},150)}catch{throw new Error("Could not receive the data from Contentful!")}},i=r([]),B=r(!0);function V(o){console.log(s),o.preventDefault(),y.value=!0,I.post(route("contact.send"),s)}r(null);const j=O(),s=T({name:"",lastname:"",phoneNumber:"",question:"",mail:"",message:""}),g=r(""),E=()=>{var a;let o=g.value.replace(/\D/g,""),t=o;o.length>2&&(t=o.replace(/(\d{2})/,"$1 ")),o.length>4&&(t=o.replace(/(\d{2})(\d{2})/,"$1 $2 ")),o.length>6&&(t=o.replace(/(\d{2})(\d{2})(\d{2})/,"$1 $2 $3 ")),o.length>8&&(t=o.replace(/(\d{2})(\d{2})(\d{2})(\d{2})/,"$1 $2 $3 $4 ")),g.value=t,s.phoneNumber=t,console.log((a=i.value.pageContactCollection)==null?void 0:a.items[0])},M=o=>{const t=o.which?o.which:o.keyCode;(t<48||t>57)&&o.preventDefault()},y=r(!1),b=r(0),m=r(100);return $(()=>{setTimeout(()=>{b.value=1,m.value=0},150)}),(o,t)=>(n(),z(P,{class:"h-max gap-10"},{default:U(()=>{var a,c,f,v,w,C;return[A,e("div",F,[e("section",J,[e("div",{style:N({opacity:b.value,transform:`translateX(${m.value}px)`}),class:"duration-500 ease-in-out h-full flex flex-col items-center text-center justify-center gap-5 sm:px-20 px-5 overflow-clip border-b border-gray-300 pb-24"},[e("div",L,p((a=i.value.pageContactCollection)==null?void 0:a.items[0].banner.title),1),e("div",Y,p((c=i.value.pageContactCollection)==null?void 0:c.items[0].banner.description),1)],4)]),e("div",G,[e("section",{style:N({opacity:b.value,transform:`translateX(${m.value}px)`}),class:"duration-700 ease-in-out lg:h-2/3 h-max rounded-lg shadow-xl w-full lg:w-4/5 lg:m-auto mx-auto bg-white border border-gray-200",title:"form"},[e("div",H,[e("section",Q,[e("div",R,[W,ee,e("div",te,[e("div",oe,[_(h(k),{class:"text-2xl",icon:"ic:outline-mail"}),e("h1",le,p((f=i.value.pageContactCollection)==null?void 0:f.items[0].mail),1)]),(n(!0),d(K,null,D((v=i.value.reseauSocialCollection)==null?void 0:v.items,l=>(n(),d("a",{href:l.link,class:"flex flex-row gap-3 text-md gap- hover:underline w-max"},[_(h(k),{class:"text-2xl",icon:"mdi:instagram"}),S(" "+p(l.name),1)],8,se))),256))])])]),(C=(w=h(j).props)==null?void 0:w.ziggy)!=null&&C.alert?(n(),d("section",$e,[e("div",Ne,[_(h(k),{class:"rotate-12 w-full h-full text-green-500",icon:"tabler:mail-check"}),Se])])):(n(),d("form",{key:0,class:"w-full h-full basis-3/5 md:p-12 p-6",onSubmit:X(V,["prevent"])},[e("div",re,[e("div",ne,[ie,u(e("input",{id:"first_name","onUpdate:modelValue":t[0]||(t[0]=l=>s.name=l),class:"bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"John",required:"",type:"text"},null,512),[[x,s.name]])]),e("div",de,[ce,u(e("input",{id:"phone","onUpdate:modelValue":t[1]||(t[1]=l=>g.value=l),maxlength:14,class:"bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",pattern:"^(\\d{2} ){4}\\d{2}$",placeholder:"07 10 12 13 14",required:"",type:"tel",onInput:E,onKeypress:M},null,544),[[x,g.value]])]),e("div",ue,[ge,u(e("select",{id:"countries","onUpdate:modelValue":t[2]||(t[2]=l=>s.question=l),class:"bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},he,512),[[Z,s.question]])])]),e("div",xe,[_e,u(e("input",{id:"email","onUpdate:modelValue":t[3]||(t[3]=l=>s.mail=l),class:"bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"north.botanica@gmail.com",required:"",type:"email"},null,512),[[x,s.mail]])]),ke,u(e("textarea",{id:"message","onUpdate:modelValue":t[4]||(t[4]=l=>s.message=l),class:"block max-h-[8rem] p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Votre message...",rows:"4"},null,512),[[x,s.message]]),e("div",ye,[y.value?(n(),d("button",ve,[we,S(" Envoie ... ")])):(n(),d("button",Ce," Envoyer "))])],40,ae))])],4)])])]}),_:1}))}};export{Ee as default};
