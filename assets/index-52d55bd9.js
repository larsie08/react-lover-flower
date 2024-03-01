import{j as e,p as _,r as p,f as F,n as C,l as A,D as m,N as k,O as L,q as S,t as U,__tla as D}from"./index-670f167d.js";import{S as n,__tla as I}from"./Skeleton-852e7b33.js";let q,G=Promise.all([(()=>{try{return D}catch{}})(),(()=>{try{return I}catch{}})()]).then(async()=>{let r,j,b,w,N,v,y;r=({className:t})=>e.jsx("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M10.2713 12.1045L6.5 8.33316L10.2713 4.56183L10.7427 5.03316L7.44267 8.33316L10.7427 11.6332L10.2713 12.1045Z",fill:"white"})}),j=()=>e.jsx("svg",{className:"absolute -top-3.5",xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",children:e.jsx("circle",{cx:"15",cy:"15",r:"15",fill:"black"})}),b=()=>e.jsxs("svg",{className:"absolute top-0",xmlns:"http://www.w3.org/2000/svg",width:"374",height:"397",viewBox:"0 0 374 397",fill:"none",children:[e.jsx("g",{filter:"url(#filter0_f_1_641)",children:e.jsx("ellipse",{cx:"34.4266",cy:"40.1955",rx:"108.512",ry:"86.9639",transform:"rotate(-71.8595 34.4266 40.1955)",fill:"#43FFD2"})}),e.jsx("defs",{children:e.jsxs("filter",{id:"filter0_f_1_641",x:"-304.877",y:"-316.445",width:"678.608",height:"713.281",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[e.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),e.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),e.jsx("feGaussianBlur",{stdDeviation:"110",result:"effect1_foregroundBlur_1_641"})]})})]}),w=({id:t,name:a,cost:s,imageUrl:x,onClick:d})=>{const u=_(),[i,l]=p.useState(1),c=()=>{u("/catalog")},o=()=>{d(t,a,x,s,i)},g=h=>{h.preventDefault(),l(i+1)},f=h=>{h.preventDefault(),l(i-1)};return e.jsxs("div",{className:"h-[450px] bouquet mt-16 flex gap-20",children:[e.jsxs("div",{className:"flex flex-col items-center justify-between gap-5",children:[e.jsx(r,{className:"h-[20px] w-[20px] rotate-90"}),Array.from({length:2}).map((h,B)=>e.jsx("img",{className:"w-[160px] h-[175px]",src:x,alt:"bouquet"},B)),e.jsx(r,{className:"h-[20px] w-[20px] -rotate-90"})]}),e.jsxs("div",{className:"flex gap-14",children:[e.jsx("img",{className:"w-[350px]",src:x,alt:"bouquet"}),e.jsxs("div",{className:"flex flex-col justify-between",children:[e.jsxs("button",{onClick:c,className:"flex gap-2 items-center text-[10px] font-normal tracking-[0.4px] uppercase",children:[e.jsx(r,{className:"w-[16px] h-[16px]"})," \u043D\u0430\u0437\u0430\u0434"]}),e.jsxs("div",{className:"title",children:[e.jsx("h1",{className:"text-[40px] font-cormorant font-normal tracking-[0.8px] uppercase",children:a}),e.jsxs("h2",{className:"text-[30px] text-light-turquoise font-bold tracking-[1.2px] uppercase",children:[s," \u20BD"]})]}),e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsxs("p",{className:"max-w-[490px] text-[14px] font-normal tracking-[0.56px] uppercase",children:[e.jsx("span",{className:"font-bold",children:"\u0421\u043E\u0441\u0442\u0430\u0432:"})," \u0413\u0432\u043E\u0437\u0434\u0438\u043A\u0430 (\u0414\u0438\u0430\u043D\u0442\u0443\u0441), \u041B\u0435\u0443\u043A\u043E\u0434\u0435\u043D\u0434\u0440\u043E\u043D, \u041B\u0435\u0443\u043A\u043E\u0441\u043F\u0435\u0440\u043C\u0443\u043C (\u041D\u0443\u0442\u0430\u043D), \u041B\u043E\u0442\u043E\u0441, \u0420\u043E\u0437\u0430"]}),e.jsx("p",{className:"max-w-[490px] text-[14px] font-normal tracking-[0.56px] uppercase",children:"\u0417\u0430\u0432\u043E\u0440\u0430\u0436\u0438\u0432\u0430\u044E\u0449\u0430\u044F \u0433\u043B\u0443\u0431\u0438\u043D\u0430 \u0432\u0430\u0448\u0438\u0445 \u0447\u0443\u0432\u0441\u0442\u0432 \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u0430 \u043E\u0433\u043D\u0435\u043D\u043D\u044B\u043C\u0438 \u043A\u0440\u0430\u0441\u043A\u0430\u043C\u0438 \u044D\u0442\u043E\u0433\u043E \u0431\u0443\u043A\u0435\u0442\u0430"}),e.jsxs("div",{className:"max-w-[428px] text-[12px] font-light tracking-[0.48px] uppercase",children:[e.jsxs("p",{children:[e.jsx("span",{className:"font-bold",children:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438:"})," 8 \u043C\u0430\u0440\u0442\u0430, \u0411\u0443\u043A\u0435\u0442 \u043D\u0430 14 \u0444\u0435\u0432\u0440\u0430\u043B\u044F, \u0411\u0443\u043A\u0435\u0442 \u043D\u0430 \u043F\u0440\u0430\u0437\u0434\u043D\u0438\u043A, \u0411\u0443\u043A\u0435\u0442\u044B \u0446\u0432\u0435\u0442\u043E\u0432 \u043D\u0430 \u0414\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F, \u041A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0438\u0437 \u0446\u0432\u0435\u0442\u043E\u0432, \u041A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0438\u0437 \u0446\u0432\u0435\u0442\u043E\u0432 \u0432 \u043A\u043E\u0440\u043E\u0431\u043A\u0435"]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-bold",children:"\u041C\u0435\u0442\u043A\u0438:"})," \u0414\u043B\u044F \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A\u0430, \u041C\u0443\u0436\u0441\u043A\u0438\u0435 \u0431\u0443\u043A\u0435\u0442\u044B"]})]})]}),e.jsxs("div",{className:"flex gap-8",children:[e.jsx("button",{onClick:o,className:"border-[.5px] w-[255px] p-4 text-[12px] font-bold tracking-[1.2px] uppercase hover:bg-light-turquoise hover:text-[black] focus:border-light-turquoise active:shadow-[0_0_10px_0_#01281F_inset]",children:"\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443"}),e.jsxs("form",{className:"flex justify-around items-center w-[160px] border-[0.5px] border-[#555]",children:[e.jsx("button",{onClick:f,className:"h-full w-[8px] text-[#555]",disabled:i===1,children:"\u2013"}),e.jsx("b",{children:i}),e.jsx("button",{onClick:g,className:"h-full w-[8px] text-[#555]",children:"+"})]})]})]})]})]})},N=[{title:"\u0423\u0434\u043E\u0431\u0440\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0441\u0440\u0435\u0437\u0430\u043D\u043D\u044B\u0445 \u0446\u0432\u0435\u0442\u043E\u0432",content:"\u041F\u0440\u0438 \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u0438 \u043E\u0431 \u044D\u0442\u043E\u043C \u0432 \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u044F\u0445 \u043A \u0431\u0443\u043A\u0435\u0442\u0443, \u043C\u044B \u043F\u0440\u0438\u043B\u043E\u0436\u0438\u043C \u043F\u0430\u043A\u0435\u0442\u0438\u043A \u0443\u0434\u043E\u0431\u0440\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0432\u0430\u0441"},{title:"\u043F\u043E\u0434\u043F\u0438\u0448\u0435\u043C \u043E\u0442\u043A\u0440\u044B\u0442\u043A\u0443",content:"\u0412 \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u044F\u0445 \u043A \u0431\u0443\u043A\u0435\u0442\u0443 \u0443\u043A\u0430\u0436\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442, \u043A\u0430\u043A\u043E\u0439 \u0445\u043E\u0442\u0438\u0442\u0435 \u0440\u0430\u0437\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0438 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u0441\u0430\u043C\u0443 \u043E\u0442\u043A\u0440\u044B\u0442\u043A\u0443"},{title:"\u0424\u043E\u0442\u043E \u0431\u0443\u043A\u0435\u0442\u0430 \u043F\u0435\u0440\u0435\u0434 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u043E\u0439",content:"\u0412 \u043F\u0440\u0438\u043C\u0435\u0447\u0430\u043D\u0438\u0438 \u043A \u0437\u0430\u043A\u0430\u0437\u0443 \u0443\u043A\u0430\u0436\u0438\u0442\u0435 \u043E\u0431 \u044D\u0442\u043E\u043C \u0438 \u043C\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043C \u0444\u043E\u0442\u043E \u0433\u043E\u0442\u043E\u0432\u043E\u0433\u043E \u0431\u0443\u043A\u0435\u0442\u0430 \u043F\u0435\u0440\u0435\u0434 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u043E\u0439. \u0412 \u043F\u0440\u0430\u0437\u0434\u043D\u0438\u0447\u043D\u044B\u0435 \u0434\u043D\u0438 \u0432 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u044C\u044E \u0442\u0430\u043A\u043E\u0439 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u043D\u0435\u0442"},{title:"\u0411\u0443\u043A\u0435\u0442-\u0441\u044E\u0440\u043F\u0440\u0438\u0437",content:"\u0415\u0441\u043B\u0438 \u0445\u043E\u0442\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044C \u043D\u0435 \u0437\u043D\u0430\u043B, \u0447\u0442\u043E \u0435\u043C\u0443 \u0432\u0440\u0443\u0447\u0430\u0442 \u0430 \u0442\u0430\u043A\u0436\u0435 \u043E\u0442 \u043A\u043E\u0433\u043E, \u0442\u043E \u0443\u043A\u0430\u0436\u0438\u0442\u0435 \u043E\u0431 \u044D\u0442\u043E\u043C \u0432 \u043F\u0440\u0438\u043C\u0435\u0447\u0430\u043D\u0438\u0438 \u043A \u0437\u0430\u043A\u0430\u0437\u0443"}],v=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"title text-[20px] text-pink font-bold tracking-[0.8px] uppercase",children:"\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043A \u0437\u0430\u043A\u0430\u0437\u0443:"}),e.jsx("div",{className:"cards flex gap-8",children:N.map((t,a)=>e.jsxs("div",{className:"card [&:last-of-type_p]:mt-6 relative p-6 flex flex-col items-center gap-5 rounded-[20px] bg-[#000]/[0.30] backdrop-blur-[10px] z-10",children:[e.jsx(j,{}),e.jsx("h2",{className:"max-w-[125px] text-center text-[14px] mt-2 text-light-turquoise font-normal tracking-[0.56px] uppercase",children:t.title}),e.jsx("p",{className:" max-w-[218px] text-center text-[14px] font-normal tracking-[0.84px]",children:t.content})]},a))})]}),y=()=>{const t=_(),a=()=>{t("/catalog")};return e.jsxs("div",{className:"flex gap-20 mt-16 h-[450px]",children:[e.jsxs("div",{className:"flex flex-col items-center justify-between gap-5",children:[e.jsx(r,{className:"h-[20px] w-[20px] rotate-90"}),Array.from({length:2}).map((s,x)=>e.jsx(n,{variant:"rectangular",animation:"wave",sx:{bgcolor:"grey.900",opacity:"0.6"},width:160,height:185},x)),e.jsx(r,{className:"h-[20px] w-[20px] -rotate-90"})]}),e.jsxs("div",{className:"flex gap-14",children:[e.jsx(n,{variant:"rectangular",animation:"wave",sx:{bgcolor:"grey.900",opacity:"0.6"},width:350,height:450}),e.jsxs("div",{className:"flex flex-col justify-between",children:[e.jsxs("button",{onClick:a,className:"flex gap-2 items-center text-[10px] font-normal tracking-[0.4px] uppercase",children:[e.jsx(r,{className:"w-[16px] h-[16px]"})," \u043D\u0430\u0437\u0430\u0434"]}),e.jsxs("div",{className:"title mt-5",children:[e.jsx(n,{variant:"text",animation:"wave",width:400,height:50,sx:{bgcolor:"grey.900",opacity:"0.6"}}),e.jsx(n,{variant:"text",animation:"wave",width:120,height:50,sx:{bgcolor:"grey.900",opacity:"0.6"}})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx(n,{variant:"text",animation:"wave",width:450,height:60,sx:{bgcolor:"grey.900",opacity:"0.7"}}),e.jsx(n,{variant:"text",animation:"wave",width:450,height:60,sx:{bgcolor:"grey.900",opacity:"0.6"}}),e.jsx(n,{variant:"text",animation:"wave",width:450,height:60,sx:{bgcolor:"grey.900",marginTop:"10px",opacity:"0.6"}})]}),e.jsxs("div",{className:"flex gap-8",children:[e.jsx("button",{disabled:!0,className:"border-[.5px] w-[255px] p-4 text-[12px] font-bold tracking-[1.2px] uppercase text-[#555555] border-[#555555] ",children:"\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443"}),e.jsxs("form",{className:"flex justify-around items-center w-[160px] border-[0.5px] border-[#555]",children:[e.jsx("button",{disabled:!0,className:"h-full w-[8px] text-[#555] cursor-pointer",children:"\u2013"}),e.jsx("b",{children:"1"}),e.jsx("button",{disabled:!0,className:"h-full w-[8px] text-[#555] cursor-pointer",children:"+"})]})]})]})]})]})},q=()=>{const t=F(),{id:a}=C(),[s,x]=p.useState(),[d,u]=p.useState();p.useEffect(()=>{async function l(){try{const{data:c}=await S.get(`https://655b76e2ab37729791a92825.mockapi.io/items/${a}`),{payload:o}=await t(U({id:a}));x(c),u(o)}catch(c){console.log(c)}}l()},[a,t]);const i=p.useMemo(()=>(l,c,o,g,f)=>{t(A({id:l,name:c,imageUrl:o,cost:g,count:f}))},[t]);return e.jsxs("div",{className:"bouquet_page pt-[120px] pb-[120px] relative bg-[#040A0A]",children:[e.jsx(b,{}),e.jsx(m,{className:"absolute top-0 right-0 w-[504px] h-[360px] rounded-[504px] bg-cherry blur-[125px]"}),e.jsx(m,{className:"absolute top-[18rem] left-[10rem] rotate-[32.828deg] w-[589px] h-[360px] rounded-[580px] bg-cherry blur-[125px]"}),e.jsx(m,{className:"absolute top-[52rem] left-[15rem] rotate-[21.185deg] w-[560px] h-[255px] rounded-[560px] bg-cherry blur-[125px]"}),e.jsx(m,{className:"absolute top-[58rem] right-[5rem] rotate-[21.095deg] w-[711px] h-[218px] rounded-[711px] bg-light-turquoise blur-[125px]"}),e.jsxs("div",{className:"bouquet_page__wrapper container mx-auto relative z-20",children:[e.jsxs("div",{className:"title text-[12px] font-normal tracking-[0.48px] uppercase",children:["\u0413\u043B\u0430\u0432\u043D\u0430\u044F / \u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u0431\u0443\u043A\u0435\u0442\u043E\u0432 / \u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0435 / ",s==null?void 0:s.name]}),s?e.jsx(w,{id:s.id,name:s.name,cost:s.cost,imageUrl:s.imageUrl,onClick:i}):e.jsx(y,{}),e.jsx("div",{className:"bouquet_addition_order__block flex flex-col items-center mt-20 gap-11",children:e.jsx(v,{})}),e.jsxs("div",{className:"switch_block mt-24",children:[e.jsxs("div",{className:"title flex justify-center",children:[e.jsx(k,{to:"",end:!0,className:({isActive:l})=>l?"w-[358px] flex flex-col justify-center border-b-[3px] rounded-[2px] text-light-turquoise":"w-[358px] flex flex-col justify-center border-b-[1px] text-[#555555] hover:text-light-turquoise",children:e.jsx("h1",{className:"text-[20px] text-center font-light tracking-[0.8px] uppercase pb-7",children:"\u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0438 \u043E\u043F\u043B\u0430\u0442\u0430"})}),e.jsx(k,{to:"reviews",end:!0,className:({isActive:l})=>l?"w-[358px] flex flex-col justify-center border-b-[3px] rounded-[2px] text-light-turquoise":"w-[358px] flex flex-col justify-center border-b-[1px] text-[#555555] hover:text-light-turquoise",children:e.jsxs("h1",{className:"text-[20px] text-center font-light tracking-[0.8px] uppercase pb-7",children:["\u043E\u0442\u0437\u044B\u0432\u044B (",d?d.length:0,")"]})})]}),e.jsx(L,{context:a})]})]}),e.jsx("img",{className:"absolute bottom-4 right-0",src:"./img/bgElements/BouquetBg/leafsBg.png",alt:"leafs"})]})}});export{G as __tla,q as default};