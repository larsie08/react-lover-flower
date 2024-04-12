import{j as e,r as d,a as _,b as l,D as a,d as b,e as w,f as y,g as v,h as N,i as B,k as I,s as F,__tla as C}from"./index-8fe979ab.js";import{S as t,__tla as k}from"./Skeleton-28f41765.js";let p,G=Promise.all([(()=>{try{return C}catch{}})(),(()=>{try{return k}catch{}})()]).then(async()=>{let i,o,x;i=()=>e.jsxs("svg",{className:"absolute -bottom-[20rem] right-0",xmlns:"http://www.w3.org/2000/svg",width:"489",height:"818",viewBox:"0 0 489 818",fill:"none",children:[e.jsx("g",{filter:"url(#filter0_f_1_291)",children:e.jsx("path",{d:"M562.127 491.246C523.706 550.8 435.621 690.35 353.262 637.217C270.903 584.083 225.458 358.388 263.879 298.833C302.301 239.279 400.212 234.073 482.571 287.206C564.93 340.339 600.549 431.691 562.127 491.246Z",fill:"#7D2253"})}),e.jsx("defs",{children:e.jsxs("filter",{id:"filter0_f_1_291",x:"0.0512695",y:"0.526367",width:"827.544",height:"898.525",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[e.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),e.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),e.jsx("feGaussianBlur",{stdDeviation:"125",result:"effect1_foregroundBlur_1_291"})]})})]}),o=()=>e.jsxs("svg",{className:"absolute -bottom-[20rem]",xmlns:"http://www.w3.org/2000/svg",width:"339",height:"689",viewBox:"0 0 339 689",fill:"none",children:[e.jsx("g",{filter:"url(#filter0_f_1_308)",children:e.jsx("ellipse",{cx:"28.4407",cy:"350.377",rx:"49.7935",ry:"105.527",transform:"rotate(21.0974 28.4407 350.377)",fill:"#43FFD2"})}),e.jsx("defs",{children:e.jsxs("filter",{id:"filter0_f_1_308",x:"-281.569",y:"0.287598",width:"620.021",height:"700.179",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[e.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),e.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),e.jsx("feGaussianBlur",{stdDeviation:"125",result:"effect1_foregroundBlur_1_308"})]})})]}),x=()=>e.jsxs("div",{children:[e.jsx(t,{variant:"rectangular",animation:"wave",sx:{bgcolor:"grey.900",opacity:"0.6"},width:255,height:335}),e.jsx(t,{variant:"text",animation:"wave",height:50,sx:{bgcolor:"grey.900",opacity:"0.6"}}),e.jsx(t,{variant:"text",animation:"wave",height:30,sx:{bgcolor:"grey.900",opacity:"0.6"}}),e.jsx(t,{variant:"rectangular",animation:"wave",height:50,sx:{bgcolor:"grey.900",marginTop:"10px",opacity:"0.6"}})]}),p=d.memo(()=>{const r=_(),{items:m,status:c}=l(s=>s.bouquets),n=l(s=>s.filter.sort.sortProperty),{categoryId:g,isConfirm:h,filtersId:u}=l(s=>s.filter);d.useEffect(()=>{(async()=>{try{await r(I({sortBy:n,categoryId:g,filtersId:u})),r(F(!1))}catch(s){console.log(s)}})()},[r,n,g,h]);const f=[...new Array(9)].map((s,j)=>e.jsx(x,{},j));return e.jsxs("div",{className:"catalog_page relative pt-[120px] pb-[200px] max-h-[3000px] bg-[#040A0A]",children:[e.jsx("img",{className:"absolute top-0 left-0 z-10",src:"./img/PagesImg/CatalogImg/CatalogFlowerLeft.png"}),e.jsx(a,{className:"absolute top-0 right-0 w-[393px] h-[280px] bg-cherry rounded-[393px] blur-[125px]"}),e.jsx(a,{className:"absolute top-[35rem] right-[15rem] w-[435px] h-[257px] rotate-[32.828deg] bg-cherry rounded-[435px] blur-[125px]"}),e.jsx(a,{className:"absolute top-[25rem] left-[5rem] w-[505px] h-[360px] rotate-[32.828deg] bg-cherry rounded-[505px] blur-[125px]"}),e.jsx(a,{className:"absolute top-[50rem] left-0 w-[505px] h-[360px] rotate-[32.828deg] bg-cherry rounded-[505px] blur-[125px]"}),e.jsx(a,{className:"absolute top-[95rem] left-0 w-[750px] h-[175px] -rotate-[71.859deg] bg-light-turquoise rounded-[750px] blur-[125px]"}),e.jsx("img",{className:"absolute top-0 right-0",src:"./img/PagesImg/CatalogImg/CatalogFlowerRight.png"}),e.jsxs("div",{className:"catalog_page__wrapper container mx-auto",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx(b,{}),e.jsx(w,{})]}),e.jsxs("div",{className:"catalog_page__content flex flex-col mt-8",children:[e.jsxs("div",{className:"flex justify-between relative z-30",children:[e.jsx(y,{}),e.jsx(v,{})]}),e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"catalog_page__sticky w-[255px]",children:e.jsx(N,{})}),e.jsx("div",{className:"catalog_page__cards relative grid grid-cols-[repeat(3,_255px)] mx-auto gap-x-7 gap-y-14 mt-3",children:c==="error"?e.jsx("h1",{className:"mt-4 text-[18px] font-normal uppercase w-[600px]",children:"\u041D\u0438\u0447\u0435\u0433\u043E \u043F\u043E \u0434\u0430\u043D\u043D\u043E\u043C\u0443 \u0437\u0430\u043F\u0440\u043E\u0441\u0443 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E"}):c==="success"?m.map(s=>e.jsx(B,{id:s.id,name:s.name,cost:s.cost,imageUrl:s.imageUrl,filters:s.filters,imgClassName:"h-[335px]"},s.id)):f})]})]})]}),e.jsx(o,{}),e.jsx(a,{className:"absolute -bottom-[13rem] right-[15rem] w-[880px] h-[212px] rotate-[21.097deg] bg-light-turquoise rounded-[880px] blur-[125px]"}),e.jsx(i,{})]})})});export{G as __tla,p as default};
