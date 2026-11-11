import{d as p}from"./chunk-7RGSFMKD.js";var e={trimW:3.5,trimH:2,bleed:.125,safe:.125,minNamePt:9,minTextPt:7};e.w=e.trimW+2*e.bleed;e.h=e.trimH+2*e.bleed;e.safeBox={x:e.bleed+e.safe,y:e.bleed+e.safe,w:e.trimW-2*e.safe,h:e.trimH-2*e.safe};var g={company:"Lintel",person:"Alex Rivera",title:"Founder",email:"alex@yourdomain.com",phone:"(555) 010-0142",web:"yourdomain.com"},s=t=>String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function h(){let t=e.safeBox;return`
.card{position:relative;width:${e.w}in;height:${e.h}in;overflow:hidden;box-sizing:border-box;flex:none}
.card .safe{position:absolute;left:${t.x}in;top:${t.y}in;width:${t.w}in;height:${t.h}in;display:flex;box-sizing:border-box}
.card.front .safe{align-items:center;justify-content:flex-start}
.card .lockup{display:flex;align-items:center;gap:0.11in;max-width:100%}
.card .lockup.stacked{flex-direction:column;align-items:flex-start;gap:0.07in}
.card .lockup svg{width:0.42in;height:0.42in;flex:none}
.card .lockup .wm{white-space:nowrap;line-height:1;display:block}
.card .lockup.stacked .wm{white-space:normal;line-height:1.02;max-width:${t.w}in}
.card.back .safe{flex-direction:column;justify-content:space-between}
.card.back .who b{display:block;font-size:11pt;line-height:1.15}
.card.back .who span{display:block;font-size:8pt;margin-top:2pt}
.card.back .lines{font-size:7.5pt;line-height:1.45}
.card.back .row{display:flex;justify-content:space-between;align-items:flex-end;gap:0.1in}
.card.back .row svg{width:0.26in;height:0.26in;flex:none}
.card .guides{position:absolute;inset:0;pointer-events:none;display:none}
.card.show-guides .guides{display:block}
.card .guides i{position:absolute;box-sizing:border-box}
.card .guides .trim{left:${e.bleed}in;top:${e.bleed}in;width:${e.trimW}in;height:${e.trimH}in;border:1px solid rgba(220,40,40,.9)}
.card .guides .safeg{left:${t.x}in;top:${t.y}in;width:${t.w}in;height:${t.h}in;border:1px dashed rgba(30,120,220,.95)}
`}function u(t,r,d){let o=t.colors,n=t.fonts,a={...g,...r},l='<div class="guides" aria-hidden="true"><i class="trim"></i><i class="safeg"></i></div>';if(d==="front"){let i={...o,primary:o.onPrimary,accent:o.accent};return`<div class="card front" data-dir="${t.id}" style="background:${o.primary};color:${o.onPrimary}">
      <div class="safe"><div class="lockup">${p(t,i)}<span class="wm" style="font-family:'${n.display}';font-weight:${n.displayWeight};letter-spacing:${n.tracking}em">${s(a.company)}</span></div></div>${l}</div>`}return`<div class="card back" data-dir="${t.id}" style="background:${o.paper};color:${o.ink};font-family:'${n.body}'">
    <div class="safe"><div class="who"><b style="font-family:'${n.display}';font-weight:${n.displayWeight}">${s(a.person)}</b><span style="color:${o.muted}">${s(a.title)}, ${s(a.company)}</span></div>
    <div class="row"><div class="lines">${s(a.email)}<br>${s(a.phone)}<br>${s(a.web)}</div>${p(t)}</div></div>${l}</div>`}function b(t){let r=i=>i*96/72,d=t.querySelector(".safe"),o=t.querySelector(".lockup"),n=t.querySelector(".wm"),a=()=>d.getBoundingClientRect(),l=()=>{let i=a(),c=o.getBoundingClientRect(),f=n.getBoundingClientRect();return c.right<=i.right+.01&&c.bottom<=i.bottom+.01&&f.right<=i.right+.01&&c.top>=i.top-.01&&n.scrollWidth<=Math.ceil(f.width)};o.classList.remove("stacked");for(let i=24;i>=13;i-=.5)if(n.style.fontSize=r(i)+"px",l())return{layout:"one line",pt:i};o.classList.add("stacked");for(let i=20;i>=e.minNamePt;i-=.5){n.style.fontSize=r(i)+"px";let c=Math.round(n.getBoundingClientRect().height/(r(i)*1.02));if(l()&&c<=2)return{layout:"stacked",pt:i,lines:c}}return n.style.fontSize=r(e.minNamePt)+"px",{layout:"too long",pt:e.minNamePt}}export{e as a,g as b,h as c,u as d,b as e};
