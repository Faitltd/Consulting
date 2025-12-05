import{n as m,E as x,C as s,u as z,F as _,y as N,G as W,t as w,D as v,m as C,p as A,q as S}from"./index2.js";/**
 * @license lucide-svelte v0.555.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const j={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function p(t,e){const i=m(e),c=x(i,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);A();let o=s(e.name,void 0),h=s(e.color,"currentColor"),r=s(e.size,24),l=s(e.strokeWidth,2),f=s(e.absoluteStrokeWidth,!1),k=s(e.iconNode,()=>[],!0);const b=(...n)=>n.filter((u,d,a)=>!!u&&a.indexOf(u)===d).join(" "),g=z(k);t.out+=`<svg${_({...j,...c,width:r,height:r,stroke:h,"stroke-width":f?Number(l)*24/Number(r):l,class:N(b("lucide-icon","lucide",o?`lucide-${o}`:"",i.class))},null,void 0,void 0,3)}><!--[-->`;for(let n=0,u=g.length;n<u;n++){let[d,a]=g[n];W(t,d,()=>{t.out+=`${_({...a},null,void 0,void 0,3)}`})}t.out+="<!--]--><!---->",w(t,e,"default",{}),t.out+="<!----></svg>",v(e,{name:o,color:h,size:r,strokeWidth:l,absoluteStrokeWidth:f,iconNode:k}),C()}function I(t,e){const i=m(e);p(t,S([{name:"arrow-up-right"},i,{iconNode:[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]],children:o=>{o.out+="<!---->",w(o,e,"default",{}),o.out+="<!---->"},$$slots:{default:!0}}]))}export{I as A,p as I};
