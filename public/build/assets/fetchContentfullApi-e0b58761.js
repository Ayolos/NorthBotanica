import{d as e,j as r}from"./app-c246124d.js";function h(s){const o=e(null),a=e(!1),c=e(null),u=async()=>{a.value=!0;const n="https://graphql.contentful.com/content/v1/spaces/6zdudstotpon",l={method:"POST",headers:{Authorization:"Bearer 4-BvNhM2BNwaCavXg0Z9MiOB31O82kKjvta3YZ8K0g4","Content-Type":"application/json"},body:JSON.stringify({query:s})};try{const t=await fetch(n,l).then(i=>i.json());o.value=t!=null&&t.data?t==null?void 0:t.data:void 0}catch(t){c.value=t}finally{a.value=!1}};return r(async()=>{await u().then(n=>n)}),{data:o,isLoading:a,error:c}}export{h as u};
