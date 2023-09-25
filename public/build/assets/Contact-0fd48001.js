import{j as $,d as u,K as z,s as U,o as n,e as i,b as x,w as N,u as _,F as y,a as e,t as g,h as S,Z,i as q,I as V,l as D,p as b,x as k,y as K,g as j,O as X}from"./app-82405192.js";import{_ as I}from"./NorthBotanicaLayout-1c4c8892.js";import"./_plugin-vue_export-helper-c27b6911.js";const P=["content"],A=["property","content"],F=e("div",{class:"fixed -z-10 inset-0"},null,-1),J={class:"flex flex-col gap-24 pb-24 pt-48"},L={class:"h-1/4",title:"banner"},Y={class:"text-black drop-shadow-xl font-mono subpixel-antialiased font-black text-3xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-l from-darkGreen via-darkGreen to-clearGreen"},H={class:"text-gray-500 font-medium drop-shadow-xl text-md lg:text-lg mx-auto w-full lg:w-1/2"},Q={class:"p-5"},R={class:"flex lg:flex-row flex-col h-full"},W={class:"basis-2/5 rounded-t-lg lg:rounded-r-none lg:rounded-l-lg bg-darkGreen",title:"bannerform"},ee={class:"w-full h-full p-12 flex flex-col gap-10 text-white"},te=e("p",{class:"text-xl font font-semibold"},"Nos coordonnées",-1),oe=e("p",{class:"text-md font-normal text-gray-100"},"Nous vous répondrons par mail le plus rapidement possible",-1),le={class:"flex flex-col gap-3"},se={class:"flex flex-row gap-3"},ae={class:"text-md truncate"},re=["href"],ne=["src"],ie=["onSubmit"],de={class:"grid gap-6 mb-6 md:grid-cols-4 md:grid-flow-row"},ce={class:"md:col-span-2 col-span-3"},ue=e("label",{class:"block mb-2 text-md font-black text-gray-900 dark:text-white",for:"first_name"},"Nom",-1),me={class:"md:col-span-2 col-span-3"},ge=e("label",{class:"block mb-2 text-md font-black text-gray-900 dark:text-white",for:"phone"},"Téléphone",-1),be={class:"col-span-4"},pe=e("label",{class:"block mb-2 text-md font-black text-gray-900 dark:text-white",for:"countries"},"Souhaitez vous donner une dimension écologique à votre projet",-1),fe=e("option",{selected:""},"Choisis une réponse",-1),he=e("option",{value:"yes"},"oui",-1),xe=e("option",{value:"no"},"non",-1),_e=e("option",{value:"unknown"},"Ne sais pas",-1),ke=[fe,he,xe,_e],ye={class:"mb-6"},ve=e("label",{class:"block mb-2 text-md font-black text-gray-900 dark:text-white",for:"email"},"Adresse mail",-1),we=e("label",{class:"block mb-2 text-md font-black text-gray-900 dark:text-white",for:"message"},"Votre question",-1),Ce={class:"flex justify-end mt-8"},$e={key:0,class:"w-max justify-center text-white bg-darkGreen hover:bg-clearGreen focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center",disabled:"",type:"button"},Ne=e("svg",{"aria-hidden":"true",class:"inline w-4 h-4 mr-3 text-white animate-spin",fill:"none",role:"status",viewBox:"0 0 100 101",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"}),e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"})],-1),Se={key:1,class:"w-max justify-center text-white bg-darkGreen hover:bg-clearGreen focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center",type:"submit"},qe={key:1,class:"w-full basis-3/5 h-full",title:"submitform"},Ve={class:"w-full h-full p-48 gap-8 text-white flex flex-col items-center"},je=e("h1",{class:"text-5xl text-gray-600 font-black"},"Envoyé",-1),Oe={__name:"Contact",setup(Be){$(()=>{B()});const B=async()=>{const o=`{
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
    }`,t="https://graphql.contentful.com/content/v1/spaces/6zdudstotpon",a={method:"POST",headers:{Authorization:"Bearer 4-BvNhM2BNwaCavXg0Z9MiOB31O82kKjvta3YZ8K0g4","Content-Type":"application/json"},body:JSON.stringify({query:o})};try{const d=await fetch(t,a).then(c=>c.json());r.value=d.data,E.value=!1,setTimeout(()=>{f.value=1,h.value=0},150)}catch{throw new Error("Could not receive the data from Contentful!")}},r=u([]),E=u(!0);function M(o){console.log(s),o.preventDefault(),v.value=!0,X.post(route("contact.send"),s)}u(null);const G=z(),s=U({name:"",lastname:"",phoneNumber:"",question:"",mail:"",message:""}),p=u(""),O=()=>{var a;let o=p.value.replace(/\D/g,""),t=o;o.length>2&&(t=o.replace(/(\d{2})/,"$1 ")),o.length>4&&(t=o.replace(/(\d{2})(\d{2})/,"$1 $2 ")),o.length>6&&(t=o.replace(/(\d{2})(\d{2})(\d{2})/,"$1 $2 $3 ")),o.length>8&&(t=o.replace(/(\d{2})(\d{2})(\d{2})(\d{2})/,"$1 $2 $3 $4 ")),p.value=t,s.phoneNumber=t,console.log((a=r.value.pageContactCollection)==null?void 0:a.items[0])},T=o=>{const t=o.which?o.which:o.keyCode;(t<48||t>57)&&o.preventDefault()},v=u(!1),f=u(0),h=u(100);return $(()=>{setTimeout(()=>{f.value=1,h.value=0},150)}),(o,t)=>(n(),i(y,null,[x(_(Z),null,{default:N(()=>{var a,d,c;return[e("title",null,g((a=r.value.pageContactCollection)==null?void 0:a.items[0].banner.title),1),e("meta",{name:"description",content:(d=r.value.pageContactCollection)==null?void 0:d.items[0].banner.description},null,8,P),(n(!0),i(y,null,S((c=r.value.reseauSocialCollection)==null?void 0:c.items,m=>(n(),i("meta",{property:"og:"+m.name,content:m.name+": "+m.link},null,8,A))),256))]}),_:1}),x(I,{class:"h-max gap-10"},{default:N(()=>{var a,d,c,m,w,C;return[F,e("div",J,[e("section",L,[e("div",{style:q({opacity:f.value,transform:`translateX(${h.value}px)`}),class:"duration-500 ease-in-out h-full flex flex-col items-center text-center justify-center gap-5 sm:px-20 px-5 overflow-clip border-b border-gray-300 pb-24"},[e("h1",Y,g((a=r.value.pageContactCollection)==null?void 0:a.items[0].banner.title),1),e("p",H,g((d=r.value.pageContactCollection)==null?void 0:d.items[0].banner.description),1)],4)]),e("div",Q,[e("section",{style:q({opacity:f.value,transform:`translateX(${h.value}px)`}),class:"duration-700 ease-in-out lg:h-2/3 h-max rounded-lg shadow-xl w-full lg:w-4/5 lg:m-auto mx-auto bg-white border border-gray-200",title:"form"},[e("div",R,[e("section",W,[e("div",ee,[te,oe,e("div",le,[e("div",se,[x(_(V),{class:"text-2xl",icon:"ic:outline-mail"}),e("span",ae,g((c=r.value.pageContactCollection)==null?void 0:c.items[0].mail),1)]),(n(!0),i(y,null,S((m=r.value.reseauSocialCollection)==null?void 0:m.items,l=>(n(),i("a",{href:l.link,class:"flex flex-row gap-3 items-center text-md gap- hover:underline w-max"},[e("img",{src:l.icon.url,alt:"image",class:"w-6"},null,8,ne),j(" "+g(l.name),1)],8,re))),256))])])]),(C=(w=_(G).props)==null?void 0:w.ziggy)!=null&&C.alert?(n(),i("section",qe,[e("div",Ve,[x(_(V),{class:"rotate-12 w-full h-full text-green-500",icon:"tabler:mail-check"}),je])])):(n(),i("form",{key:0,class:"w-full h-full basis-3/5 md:p-12 p-6",onSubmit:D(M,["prevent"])},[e("div",de,[e("div",ce,[ue,b(e("input",{id:"first_name","onUpdate:modelValue":t[0]||(t[0]=l=>s.name=l),class:"bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"John",required:"",type:"text"},null,512),[[k,s.name]])]),e("div",me,[ge,b(e("input",{id:"phone","onUpdate:modelValue":t[1]||(t[1]=l=>p.value=l),maxlength:14,class:"bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",pattern:"^(\\d{2} ){4}\\d{2}$",placeholder:"07 10 12 13 14",required:"",type:"tel",onInput:O,onKeypress:T},null,544),[[k,p.value]])]),e("div",be,[pe,b(e("select",{id:"countries","onUpdate:modelValue":t[2]||(t[2]=l=>s.question=l),class:"bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},ke,512),[[K,s.question]])])]),e("div",ye,[ve,b(e("input",{id:"email","onUpdate:modelValue":t[3]||(t[3]=l=>s.mail=l),class:"bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"north.botanica@gmail.com",required:"",type:"email"},null,512),[[k,s.mail]])]),we,b(e("textarea",{id:"message","onUpdate:modelValue":t[4]||(t[4]=l=>s.message=l),class:"block max-h-[8rem] p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Votre message...",rows:"4"},null,512),[[k,s.message]]),e("div",Ce,[v.value?(n(),i("button",$e,[Ne,j(" Envoie ... ")])):(n(),i("button",Se," Envoyer "))])],40,ie))])],4)])])]}),_:1})],64))}};export{Oe as default};
