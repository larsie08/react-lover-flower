import{j as e,L as m,a as u,l as d,b as n,r as g,c as b,D as a,i as f,m as _,__tla as j}from"./index-8fe979ab.js";let x,N=Promise.all([(()=>{try{return j}catch{}})()]).then(async()=>{let l;l=()=>e.jsxs("div",{className:"flex flex-col gap-5 mt-8",children:[e.jsx("h1",{className:"max-w-[295px] text-[14px] font-normal tracking-[0.56px] uppercase",children:"\u041F\u043E \u0434\u0430\u043D\u043D\u043E\u043C\u0443 \u0437\u0430\u043F\u0440\u043E\u0441\u0443 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437 \u0438\u043B\u0438 \u043F\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433"}),e.jsx(m,{to:"/catalog",className:"bg-light-turquoise h-[50px] w-[220px] text-center text-[black] px-12 py-4 border border-light-turquoise uppercase text-standart font-bold tracking-[1.2px] hover:bg-cherry hover:border-cherry hover:text-[white] focus:border-cherry focus active:bg-cherry active:text-[white] active:shadow-[0_0_10px_0_#1B000E_inset]",children:"\u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433"})]}),x=()=>{const c=u(),{searchValue:s}=d(),r=n(t=>t.filter.searchItems);return g.useEffect(()=>{(async()=>{try{await c(_({searchValue:s}))}catch(t){console.log(t)}})()},[c,s]),e.jsxs("div",{className:b("result_search max-h-[3000px] relative bg-[#040A0A] pt-[120px] pb-20",{"h-[900px]":r.length===0}),children:[e.jsx(a,{className:"absolute top-0 left-0 w-[217px] h-[173px] bg-light-turquoise blur-[125px]"}),e.jsx(a,{className:"absolute -top-[20rem] right-0 w-[504px] h-[625px] bg-cherry rounded-[625px] blur-[125px]"}),e.jsxs("div",{className:"wrapper container mx-auto flex flex-col gap-12",children:[e.jsxs("div",{className:"title",children:[e.jsxs("h1",{className:"text-[30px] text-light-turquoise font-bold tracking-[1.2px] uppercase",children:["\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043F\u043E\u0438\u0441\u043A\u0430: ",s]}),r.length===0&&e.jsx(l,{})]}),e.jsx("div",{className:"search__cards relative grid grid-cols-[repeat(4,_255px)] mx-auto gap-7 mt-3",children:r.map(({id:t,name:i,cost:o,imageUrl:p,filters:h})=>e.jsx(f,{id:t,name:i,cost:o,imageUrl:p,filters:h,imgClassName:"h-[335px]"},t))})]}),e.jsx(a,{className:"absolute -bottom-[13rem] right-[45rem] w-[879px] h-[211px] rotate-[21.097deg] bg-light-turquoise rounded-[879px] blur-[125px]"}),e.jsx(a,{className:"absolute -bottom-[10rem] left-0 w-[166px] h-[353px] bg-cherry rounded-[353px] blur-[125px]"})]})}});export{N as __tla,x as default};
