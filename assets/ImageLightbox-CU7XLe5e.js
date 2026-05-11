import{c as n,j as t,X as b}from"./index-CzDGcjh2.js";/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],p=n("chevron-left",x);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],f=n("chevron-right",g);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],y=n("external-link",w);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],v=n("maximize-2",k);function N({images:m,title:i,activeIndex:a,onClose:r,onChange:l}){if(a==null)return null;const s=m||[],c=s[a],h=s.length>1;if(!c)return null;const d=e=>{e.stopPropagation(),l((a-1+s.length)%s.length)},u=e=>{e.stopPropagation(),l((a+1)%s.length)};return t.jsx("div",{className:"fixed inset-0 z-[80] bg-slate-950/92 px-4 py-5 backdrop-blur-sm md:px-8",role:"dialog","aria-modal":"true","aria-label":`Preview gambar ${i}`,onClick:r,children:t.jsxs("div",{className:"mx-auto flex h-full max-w-6xl flex-col justify-center",children:[t.jsxs("div",{className:"mb-3 flex items-center justify-between gap-3 text-white",onClick:e=>e.stopPropagation(),children:[t.jsx("p",{className:"truncate text-sm font-semibold md:text-base",children:i}),t.jsx("button",{type:"button",onClick:r,className:"inline-flex h-11 w-11 items-center justify-center rounded-md bg-white/10 text-white transition hover:bg-white/20","aria-label":"Tutup",children:t.jsx(b,{size:22})})]}),t.jsxs("div",{className:"relative flex min-h-0 flex-1 items-center justify-center",children:[t.jsx("img",{src:c,alt:`${i} diperbesar ${a+1}`,onClick:e=>e.stopPropagation(),className:"max-h-[78vh] w-full rounded-lg object-contain shadow-2xl md:max-h-[82vh]"}),h&&t.jsxs(t.Fragment,{children:[t.jsx("button",{type:"button",onClick:d,className:"absolute left-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md bg-black/45 text-white transition hover:bg-black/65 md:left-4 md:h-12 md:w-12","aria-label":"Gambar sebelumnya",children:t.jsx(p,{size:24})}),t.jsx("button",{type:"button",onClick:u,className:"absolute right-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md bg-black/45 text-white transition hover:bg-black/65 md:right-4 md:h-12 md:w-12","aria-label":"Gambar berikutnya",children:t.jsx(f,{size:24})})]})]}),h&&t.jsx("div",{className:"mt-4 flex justify-center gap-2",onClick:e=>e.stopPropagation(),children:s.map((e,o)=>t.jsx("button",{type:"button",onClick:()=>l(o),className:`h-2.5 rounded-full transition ${o===a?"w-8 bg-white":"w-2.5 bg-white/35 hover:bg-white/60"}`,"aria-label":`Buka gambar ${o+1}`},e))})]})})}export{p as C,y as E,N as I,v as M,f as a};
