import{j as e,m as _,n as F,a as q,r as b,u as S,o as I,p as D,k as $,__tla as E}from"./index-b11dd0ba.js";import{s as B}from"./selectors-ced8fbfe.js";let v,L=Promise.all([(()=>{try{return E}catch{}})()]).then(async()=>{let u,h;u="/react-lover-flower/assets/ratingOn-0015b8ca.svg",h=({rating:n,feedback:x,name:r,currentDate:t})=>{const l=[...new Array(Number(n))].map((p,d)=>e.jsx("img",{className:"star absolute h-[2em] top-0 left-0",src:u,alt:"star"},d));return e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"h-[25px] text-light-turquoise text-[30px] font-normal tracking-[0.6px] uppercase",children:"\u201C"}),e.jsx("h2",{className:"max-w-[540px] text-[16px] font-normal tracking-[0.32px]",children:x}),e.jsx("div",{className:"rating__group mt-1 relative w-[10em] h-[2em]",children:l}),e.jsxs("div",{className:"flex gap-1",children:[e.jsxs("h4",{className:"text-[14px] font-normal tracking-[0.14px] text-[#555]",children:[r,","]}),e.jsx("h4",{className:"text-[14px] font-normal tracking-[0.28px] text-[#555]",children:t})]})]})},v=()=>{const n=_(),x=new Date,r=F(),t=q(B(r)),[l,p]=b.useState(),d=x.toLocaleDateString().split(".").join("/"),{register:i,handleSubmit:f,formState:{errors:m}}=S(),j=a=>{w(a.rating,a.review,a.name,a.email)},N=a=>{console.log(a)};b.useEffect(()=>{async function a(){try{const{payload:s}=await n(I({bouquetId:r}));p(s)}catch(s){console.log(s)}}a()},[r,n]);const w=async(a,s,k,y)=>{try{const o={rating:a,feedback:s,name:k,email:y,currentDate:d},g=l==null?void 0:l.reduce((c,A)=>(Number(A.reviewId)===c&&c++,c),1);p(c=>[...c||[],{reviewId:String(g),bouquetId:String(r),review:o}]),n(D({reviewId:String(g),bouquetId:String(r),review:o})),await $.post(`https://655b76e2ab37729791a92825.mockapi.io/items/${r}/reviews`,{review:o})}catch(o){console.log(o)}};return e.jsxs("div",{className:"mt-16",children:[e.jsx("div",{className:"reviews",children:l?l.map(a=>e.jsx(h,{rating:a.review.rating,feedback:a.review.feedback,name:a.review.name,currentDate:a.review.currentDate},a.reviewId)):e.jsx("h3",{className:"text-[14px] font-normal tracking-[0.84px]",children:"\u041E\u0442\u0437\u044B\u0432\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442"})}),e.jsxs("div",{className:"mt-16 flex flex-col gap-2",children:[e.jsx("h2",{className:"text-[14px] text-light-turquoise font-normal tracking-[0.84px] uppercase",children:l?`\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0441\u0432\u043E\u0439 \u043E\u0442\u0437\u044B\u0432 \u043D\u0430 \u201C${t==null?void 0:t.name}\u201D`:`\u0411\u0443\u0434\u044C\u0442\u0435 \u043F\u0435\u0440\u0432\u044B\u043C, \u043A\u0442\u043E \u043E\u0441\u0442\u0430\u0432\u0438\u043B \u043E\u0442\u0437\u044B\u0432 \u043D\u0430 \u201C${t==null?void 0:t.name}\u201D`}),e.jsx("h3",{className:"text-[14px] font-normal tracking-[0.84px]",children:"\u0412\u0430\u0448 \u0430\u0434\u0440\u0435\u0441 email \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D. \u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u043B\u044F \u043F\u043E\u043C\u0435\u0447\u0435\u043D\u044B *"})]}),e.jsxs("form",{onSubmit:f(j,N),className:"flex flex-col gap-5 mt-5",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"rating-group",children:"\u0412\u0430\u0448\u0430 \u043E\u0446\u0435\u043D\u043A\u0430:"}),e.jsxs("div",{className:"rating__group mt-1 relative p-0 w-[10em] h-[2em]",children:[e.jsx("input",{className:"absolute border-none top-0 left-0 m-0 h-[2em] cursor-pointer",type:"radio",id:"rating",value:"1","aria-label":"\u0423\u0436\u0430\u0441\u043D\u043E",...i("rating",{required:!0})}),e.jsx("input",{className:"absolute border-none top-0 left-0 m-0 h-[2em] cursor-pointer",type:"radio",id:"rating",value:"2","aria-label":"\u0421\u043D\u043E\u0441\u043D\u043E",...i("rating",{required:!0})}),e.jsx("input",{className:"absolute border-none top-0 left-0 m-0 h-[2em] cursor-pointer",type:"radio",id:"rating",value:"3","aria-label":"\u041D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u043E",...i("rating",{required:!0})}),e.jsx("input",{className:"absolute border-none top-0 left-0 m-0 h-[2em] cursor-pointer",type:"radio",id:"rating",value:"4","aria-label":"\u0425\u043E\u0440\u043E\u0448\u043E",...i("rating",{required:!0})}),e.jsx("input",{className:"absolute border-none top-0 left-0 m-0 h-[2em] cursor-pointer",type:"radio",id:"rating",value:"5","aria-label":"\u041E\u0442\u043B\u0438\u0447\u043D\u043E",...i("rating",{required:!0})})]})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"text-[14px] font-normal tracking-[0.84px]",htmlFor:"review",children:"\u0412\u0430\u0448 \u043E\u0442\u0437\u044B\u0432*"}),e.jsx("textarea",{className:"w-[540px] h-[180px] border border-[#555] bg-[#040A0A] p-4 placeholder:bg-[#040A0A] placeholder:text-[#395959] text-[14px] font-normal tracking-[.56px] uppercase outline-none aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]",id:"review",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439",...i("review",{required:!0}),"aria-invalid":!!m.name})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"text-[14px] font-normal tracking-[0.84px]",htmlFor:"name",children:"\u0418\u043C\u044F*"}),e.jsx("input",{className:"w-[540px] h-[60px] border border-[#555] bg-[#040A0A] p-4 placeholder:bg-[#040A0A] placeholder:text-[#395959] text-[14px] font-normal tracking-[.56px] uppercase outline-none aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]",type:"text",id:"name",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043C\u044F",...i("name",{required:!0}),"aria-invalid":!!m.name})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"text-[14px] font-normal tracking-[0.84px]",htmlFor:"email",children:"E-mail*"}),e.jsx("input",{className:"w-[540px] h-[60px] border border-[#555] bg-[#040A0A] p-4 placeholder:bg-[#040A0A] placeholder:text-[#395959] text-[14px] font-normal tracking-[.56px] uppercase outline-none aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]",type:"email",id:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u043F\u043E\u0447\u0442\u0443",...i("email",{required:!0}),"aria-invalid":!!m.name})]}),e.jsx("button",{className:"w-[255px] mt-2 text-[black] text-[12px] border border-light-turquoise font-bold tracking-[1.2px] uppercase bg-light-turquoise p-4 hover:border-cherry hover:bg-cherry hover:text-[white] focus:border-cherry active:bg-cherry active:text-[white] active:shadow-[0_0_10px_0_#1B000E_inset]",children:"\u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"}),e.jsxs("p",{className:"max-w-[342px] text-[10px] font-normal tracking-[0.2px] font-roboto_condensed",children:["\u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443 \xAB\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C\xBB, \u044F \u0434\u0430\u044E \u0441\u0432\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441",e.jsx("span",{className:"text-pink underline ml-1",children:"\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"})]})]})]})}});export{L as __tla,v as default};