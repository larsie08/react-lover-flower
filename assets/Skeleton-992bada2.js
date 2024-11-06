import{o as u,i as $,g as R,a as S,p as v,s as _,b as o,q as c,c as M,_ as j,e as O,f as U}from"./styled-70604888.js";import{r as A,j as E}from"./index-d3b526ce.js";function X(t,e=0,n=1){return $(t,e,n)}function F(t){t=t.slice(1);const e=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let n=t.match(e);return n&&n[0].length===1&&(n=n.map(a=>a+a)),n?`rgb${n.length===4?"a":""}(${n.map((a,i)=>i<3?parseInt(a,16):Math.round(parseInt(a,16)/255*1e3)/1e3).join(", ")})`:""}function x(t){if(t.type)return t;if(t.charAt(0)==="#")return x(F(t));const e=t.indexOf("("),n=t.substring(0,e);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(u(9,t));let a=t.substring(e+1,t.length-1),i;if(n==="color"){if(a=a.split(" "),i=a.shift(),a.length===4&&a[3].charAt(0)==="/"&&(a[3]=a[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error(u(10,i))}else a=a.split(",");return a=a.map(s=>parseFloat(s)),{type:n,values:a,colorSpace:i}}function I(t){const{type:e,colorSpace:n}=t;let{values:a}=t;return e.indexOf("rgb")!==-1?a=a.map((i,s)=>s<3?parseInt(i,10):i):e.indexOf("hsl")!==-1&&(a[1]=`${a[1]}%`,a[2]=`${a[2]}%`),e.indexOf("color")!==-1?a=`${n} ${a.join(" ")}`:a=`${a.join(", ")}`,`${e}(${a})`}function N(t,e){return t=x(t),e=X(e),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${e}`:t.values[3]=e,I(t)}function T(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function W(t){return parseFloat(t)}function B(t){return R("MuiSkeleton",t)}S("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const K=["animation","className","component","height","style","variant","width"];let l=t=>t,f,g,m,b;const P=t=>{const{classes:e,variant:n,animation:a,hasChildren:i,width:s,height:r}=t;return U({root:["root",n,a,i&&"withChildren",i&&!s&&"fitContent",i&&!r&&"heightAuto"]},B,e)},q=v(f||(f=l`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),L=v(g||(g=l`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),V=_("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],n.animation!==!1&&e[n.animation],n.hasChildren&&e.withChildren,n.hasChildren&&!n.width&&e.fitContent,n.hasChildren&&!n.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{const n=T(t.shape.borderRadius)||"px",a=W(t.shape.borderRadius);return o({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:N(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},e.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${n}/${Math.round(a/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},e.variant==="circular"&&{borderRadius:"50%"},e.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&c(m||(m=l`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),q),({ownerState:t,theme:e})=>t.animation==="wave"&&c(b||(b=l`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),L,(e.vars||e).palette.action.hover)),z=A.forwardRef(function(e,n){const a=M({props:e,name:"MuiSkeleton"}),{animation:i="pulse",className:s,component:r="span",height:h,style:y,variant:C="text",width:k}=a,p=j(a,K),d=o({},a,{animation:i,component:r,variant:C,hasChildren:!!p.children}),w=P(d);return E.jsx(V,o({as:r,ref:n,className:O(w.root,s),ownerState:d},p,{style:o({width:k,height:h},y)}))}),H=z;export{H as S};
