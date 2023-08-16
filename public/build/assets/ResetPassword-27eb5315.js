import{T as c,o as f,e as w,b as e,u as o,w as l,F as _,Z as g,a as r,n as V,g as b,l as k}from"./app-13a90ddc.js";import{A as v}from"./AuthenticationCard-0079b643.js";import{_ as x}from"./AuthenticationCardLogo-ee0ecc82.js";import{_ as m,a as i}from"./TextInput-09c0704d.js";import{_ as n}from"./InputLabel-4b82d9ad.js";import{_ as y}from"./PrimaryButton-8b7085dc.js";import"./_plugin-vue_export-helper-c27b6911.js";const P=["onSubmit"],$={class:"mt-4"},C={class:"mt-4"},S={class:"flex items-center justify-end mt-4"},E={__name:"ResetPassword",props:{email:String,token:String},setup(p){const d=p,s=c({token:d.token,email:d.email,password:"",password_confirmation:""}),u=()=>{s.post(route("password.update"),{onFinish:()=>s.reset("password","password_confirmation")})};return(h,a)=>(f(),w(_,null,[e(o(g),{title:"Reset Password"}),e(v,null,{logo:l(()=>[e(x)]),default:l(()=>[r("form",{onSubmit:k(u,["prevent"])},[r("div",null,[e(n,{for:"email",value:"Email"}),e(m,{id:"email",modelValue:o(s).email,"onUpdate:modelValue":a[0]||(a[0]=t=>o(s).email=t),type:"email",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),e(i,{class:"mt-2",message:o(s).errors.email},null,8,["message"])]),r("div",$,[e(n,{for:"password",value:"Password"}),e(m,{id:"password",modelValue:o(s).password,"onUpdate:modelValue":a[1]||(a[1]=t=>o(s).password=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(i,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),r("div",C,[e(n,{for:"password_confirmation",value:"Confirm Password"}),e(m,{id:"password_confirmation",modelValue:o(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=t=>o(s).password_confirmation=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(i,{class:"mt-2",message:o(s).errors.password_confirmation},null,8,["message"])]),r("div",S,[e(y,{class:V({"opacity-25":o(s).processing}),disabled:o(s).processing},{default:l(()=>[b(" Reset Password ")]),_:1},8,["class","disabled"])])],40,P)]),_:1})],64))}};export{E as default};
