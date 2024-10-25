import{f as $,c as B,g as P,a as T,k as x,s as W,_ as s,b as C,u as q,d as z,e as H,h as K,__tla as L}from"./styled-05492574.js";import{r as U,j as V,__tla as D}from"./index-b11dd0ba.js";let S,G=Promise.all([(()=>{try{return L}catch{}})(),(()=>{try{return D}catch{}})()]).then(async()=>{function k(t,e=0,n=1){return B(t,e,n)}function _(t){t=t.slice(1);const e=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let n=t.match(e);return n&&n[0].length===1&&(n=n.map(a=>a+a)),n?`rgb${n.length===4?"a":""}(${n.map((a,r)=>r<3?parseInt(a,16):Math.round(parseInt(a,16)/255*1e3)/1e3).join(", ")})`:""}function h(t){if(t.type)return t;if(t.charAt(0)==="#")return h(_(t));const e=t.indexOf("("),n=t.substring(0,e);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error($(9,t));let a=t.substring(e+1,t.length-1),r;if(n==="color"){if(a=a.split(" "),r=a.shift(),a.length===4&&a[3].charAt(0)==="/"&&(a[3]=a[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(r)===-1)throw new Error($(10,r))}else a=a.split(",");return a=a.map(i=>parseFloat(i)),{type:n,values:a,colorSpace:r}}function R(t){const{type:e,colorSpace:n}=t;let{values:a}=t;return e.indexOf("rgb")!==-1?a=a.map((r,i)=>i<3?parseInt(r,10):r):e.indexOf("hsl")!==-1&&(a[1]=`${a[1]}%`,a[2]=`${a[2]}%`),e.indexOf("color")!==-1?a=`${n} ${a.join(" ")}`:a=`${a.join(", ")}`,`${e}(${a})`}function O(t,e){return t=h(t),e=k(e),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${e}`:t.values[3]=e,R(t)}function A(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function M(t){return parseFloat(t)}function j(t){return P("MuiSkeleton",t)}T("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const X=["animation","className","component","height","style","variant","width"];let o=t=>t,d,c,u,p,g,m,f,b,w;g=t=>{const{classes:e,variant:n,animation:a,hasChildren:r,width:i,height:l}=t;return K({root:["root",n,a,r&&"withChildren",r&&!i&&"fitContent",r&&!l&&"heightAuto"]},j,e)},m=x(d||(d=o`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),f=x(c||(c=o`
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
`)),b=W("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],n.animation!==!1&&e[n.animation],n.hasChildren&&e.withChildren,n.hasChildren&&!n.width&&e.fitContent,n.hasChildren&&!n.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{const n=A(t.shape.borderRadius)||"px",a=M(t.shape.borderRadius);return s({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:O(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},e.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${n}/${Math.round(a/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},e.variant==="circular"&&{borderRadius:"50%"},e.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&C(u||(u=o`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),m),({ownerState:t,theme:e})=>t.animation==="wave"&&C(p||(p=o`
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
    `),f,(e.vars||e).palette.action.hover)),w=U.forwardRef(function(t,e){const n=q({props:t,name:"MuiSkeleton"}),{animation:a="pulse",className:r,component:i="span",height:l,style:E,variant:F="text",width:I}=n,v=z(n,X),y=s({},n,{animation:a,component:i,variant:F,hasChildren:!!v.children}),N=g(y);return V.jsx(b,s({as:i,ref:e,className:H(N.root,r),ownerState:y},v,{style:s({width:I,height:l},E)}))}),S=w});export{S,G as __tla};
