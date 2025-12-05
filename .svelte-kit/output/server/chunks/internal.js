import{o as ae,a as ue,U as m,g as W,b as fe,i as It,H as et,c as Tt,r as At,d as oe,e as Pt,f as ce,h as _e,j as ve,k as de,l as he,p as pe,s as ge,m as me}from"./index2.js";import{s as ye,e as we}from"./equality.js";import"clsx";const Rt=!1;let at="",ut=at;const kn="_app",vt={base:at,assets:ut};function Tn(t){at=t.base,ut=t.assets}function Rn(){at=vt.base,ut=vt.assets}function Nn(t){ut=vt.assets=t}let be={},Ee={};function Cn(t){}function Fn(t){be=t}function On(t){Ee=t}const N=2,Mt=4,qt=8,Bt=16,B=32,H=64,wt=128,x=256,nt=512,E=1024,D=2048,L=4096,rt=8192,bt=16384,Lt=32768,xe=65536,Nt=1<<18,ke=1<<19,Te=1<<20,dt=1<<21,ct=Symbol("$state"),Re=Symbol("legacy props"),Ct=8;function Ne(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Ce(){throw new Error("https://svelte.dev/e/hydration_failed")}function Fe(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Oe(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function De(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Se=!1,S=null;function Ft(t){S=t}function Ie(t,e=!1,n){var s=S={p:S,c:null,d:!1,e:null,m:!1,s:t,x:null,l:null};He(()=>{s.d=!0})}function Ae(t){const e=S;if(e!==null){const i=e.e;if(i!==null){var n=h,s=d;e.e=null;try{for(var l=0;l<i.length;l++){var r=i[l];U(r.effect),I(r.reaction),We(r.fn)}}finally{U(n),I(s)}}S=e.p,e.m=!0}return{}}function Yt(){return!0}function K(t){if(typeof t!="object"||t===null||ct in t)return t;const e=fe(t);if(e!==ae&&e!==ue)return t;var n=new Map,s=It(t),l=F(0),r=d,i=f=>{var a=d;I(r);var u=f();return I(a),u};return s&&n.set("length",F(t.length)),new Proxy(t,{defineProperty(f,a,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&Fe();var _=n.get(a);return _===void 0?_=i(()=>{var o=F(u.value);return n.set(a,o),o}):R(_,u.value,!0),!0},deleteProperty(f,a){var u=n.get(a);if(u===void 0){if(a in f){const c=i(()=>F(m));n.set(a,c),_t(l)}}else{if(s&&typeof a=="string"){var _=n.get("length"),o=Number(a);Number.isInteger(o)&&o<_.v&&R(_,o)}R(u,m),_t(l)}return!0},get(f,a,u){if(a===ct)return t;var _=n.get(a),o=a in f;if(_===void 0&&(!o||W(f,a)?.writable)&&(_=i(()=>{var v=K(o?f[a]:m),g=F(v);return g}),n.set(a,_)),_!==void 0){var c=j(_);return c===m?void 0:c}return Reflect.get(f,a,u)},getOwnPropertyDescriptor(f,a){var u=Reflect.getOwnPropertyDescriptor(f,a);if(u&&"value"in u){var _=n.get(a);_&&(u.value=j(_))}else if(u===void 0){var o=n.get(a),c=o?.v;if(o!==void 0&&c!==m)return{enumerable:!0,configurable:!0,value:c,writable:!0}}return u},has(f,a){if(a===ct)return!0;var u=n.get(a),_=u!==void 0&&u.v!==m||Reflect.has(f,a);if(u!==void 0||h!==null&&(!_||W(f,a)?.writable)){u===void 0&&(u=i(()=>{var c=_?K(f[a]):m,v=F(c);return v}),n.set(a,u));var o=j(u);if(o===m)return!1}return _},set(f,a,u,_){var o=n.get(a),c=a in f;if(s&&a==="length")for(var v=u;v<o.v;v+=1){var g=n.get(v+"");g!==void 0?R(g,m):v in f&&(g=i(()=>F(m)),n.set(v+"",g))}if(o===void 0)(!c||W(f,a)?.writable)&&(o=i(()=>F(void 0)),R(o,K(u)),n.set(a,o));else{c=o.v!==m;var T=i(()=>K(u));R(o,T)}var J=Reflect.getOwnPropertyDescriptor(f,a);if(J?.set&&J.set.call(_,u),!c){if(s&&typeof a=="string"){var Q=n.get("length"),C=Number(a);Number.isInteger(C)&&C>=Q.v&&R(Q,C+1)}_t(l)}return!0},ownKeys(f){j(l);var a=Reflect.ownKeys(f).filter(o=>{var c=n.get(o);return c===void 0||c.v!==m});for(var[u,_]of n)_.v!==m&&!(u in f)&&a.push(u);return a},setPrototypeOf(){Oe()}})}function _t(t,e=1){R(t,t.v+e)}function jt(t){var e=t.effects;if(e!==null){t.effects=null;for(var n=0;n<e.length;n+=1)q(e[n])}}function Pe(t){for(var e=t.parent;e!==null;){if((e.f&N)===0)return e;e=e.parent}return null}function Ut(t){var e,n=h;U(Pe(t));try{jt(t),e=re(t)}finally{U(n)}return e}function Ht(t){var e=Ut(t);if(t.equals(e)||(t.v=e,t.wv=ee()),!$){var n=(O||(t.f&x)!==0)&&t.deps!==null?L:E;k(t,n)}}const G=new Map;function Kt(t,e){var n={f:0,v:t,reactions:null,equals:we,rv:0,wv:0};return n}function F(t,e){const n=Kt(t);return en(n),n}function Me(t,e=!1,n=!0){const s=Kt(t);return e||(s.equals=ye),s}function R(t,e,n=!1){d!==null&&(!A||(d.f&Nt)!==0)&&Yt()&&(d.f&(N|Bt|Nt))!==0&&!(b?.[1].includes(t)&&b[0]===d)&&De();let s=n?K(e):e;return qe(t,s)}function qe(t,e){if(!t.equals(e)){var n=t.v;$?G.set(t,e):G.set(t,n),t.v=e,(t.f&N)!==0&&((t.f&D)!==0&&Ut(t),k(t,(t.f&x)===0?E:L)),t.wv=ee(),Wt(t,D),h!==null&&(h.f&E)!==0&&(h.f&(B|H))===0&&(w===null?nn([t]):w.push(t))}return e}function Wt(t,e){var n=t.reactions;if(n!==null)for(var s=n.length,l=0;l<s;l++){var r=n[l],i=r.f;(i&D)===0&&(k(r,e),(i&(E|x))!==0&&((i&N)!==0?Wt(r,L):kt(r)))}}function zt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let st=!1;function X(t){st=t}let P;function ht(t){if(t===null)throw zt(),et;return P=t}function Be(){return ht(Et(P))}var Ot,Gt,Vt;function pt(){if(Ot===void 0){Ot=window;var t=Element.prototype,e=Node.prototype,n=Text.prototype;Gt=W(e,"firstChild").get,Vt=W(e,"nextSibling").get,Tt(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),Tt(n)&&(n.__t=void 0)}}function Le(t=""){return document.createTextNode(t)}function Ye(t){return Gt.call(t)}function Et(t){return Vt.call(t)}function je(t){t.textContent=""}function Ue(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function ft(t,e,n,s=!0){var l=h,r={ctx:S,deps:null,nodes_start:null,nodes_end:null,f:t|D,first:null,fn:e,last:null,next:null,parent:l,prev:null,teardown:null,transitions:null,wv:0};if(n)try{xt(r),r.f|=Lt}catch(a){throw q(r),a}else e!==null&&kt(r);var i=n&&r.deps===null&&r.first===null&&r.nodes_start===null&&r.teardown===null&&(r.f&(Te|wt))===0;if(!i&&s&&(l!==null&&Ue(r,l),d!==null&&(d.f&N)!==0)){var f=d;(f.effects??=[]).push(r)}return r}function He(t){const e=ft(qt,null,!1);return k(e,E),e.teardown=t,e}function Ke(t){const e=ft(H,t,!0);return(n={})=>new Promise(s=>{n.outro?Ze(e,()=>{q(e),s(void 0)}):(q(e),s(void 0))})}function We(t){return ft(Mt,t,!1)}function ze(t,e=!0){return ft(qt|B,t,!0,e)}function Zt(t){var e=t.teardown;if(e!==null){const n=$,s=d;Dt(!0),I(null);try{e.call(null)}finally{Dt(n),I(s)}}}function $t(t,e=!1){var n=t.first;for(t.first=t.last=null;n!==null;){var s=n.next;(n.f&H)!==0?n.parent=null:q(n,e),n=s}}function Ge(t){for(var e=t.first;e!==null;){var n=e.next;(e.f&B)===0&&q(e),e=n}}function q(t,e=!0){var n=!1;(e||(t.f&ke)!==0)&&t.nodes_start!==null&&t.nodes_end!==null&&(Ve(t.nodes_start,t.nodes_end),n=!0),$t(t,e&&!n),it(t,0),k(t,bt);var s=t.transitions;if(s!==null)for(const r of s)r.stop();Zt(t);var l=t.parent;l!==null&&l.first!==null&&Jt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ve(t,e){for(;t!==null;){var n=t===e?null:Et(t);t.remove(),t=n}}function Jt(t){var e=t.parent,n=t.prev,s=t.next;n!==null&&(n.next=s),s!==null&&(s.prev=n),e!==null&&(e.first===t&&(e.first=s),e.last===t&&(e.last=n))}function Ze(t,e){var n=[];Qt(t,n,!0),$e(n,()=>{q(t),e&&e()})}function $e(t,e){var n=t.length;if(n>0){var s=()=>--n||e();for(var l of t)l.out(s)}else e()}function Qt(t,e,n){if((t.f&rt)===0){if(t.f^=rt,t.transitions!==null)for(const i of t.transitions)(i.is_global||n)&&e.push(i);for(var s=t.first;s!==null;){var l=s.next,r=(s.f&xe)!==0||(s.f&B)!==0;Qt(s,e,r?n:!1),s=l}}}let gt=[],mt=[];function Je(){var t=gt;gt=[],At(t)}function Qe(){var t=mt;mt=[],At(t)}function Xe(){gt.length>0&&Je(),mt.length>0&&Qe()}function tn(t){var e=h;if((e.f&Lt)===0){if((e.f&wt)===0)throw t;e.fn(t)}else Xt(t,e)}function Xt(t,e){for(;e!==null;){if((e.f&wt)!==0)try{e.fn(t);return}catch{}e=e.parent}throw t}let V=!1,Z=null,M=!1,$=!1;function Dt(t){$=t}let z=[];let d=null,A=!1;function I(t){d=t}let h=null;function U(t){h=t}let b=null;function en(t){d!==null&&d.f&dt&&(b===null?b=[d,[t]]:b[1].push(t))}let p=null,y=0,w=null;function nn(t){w=t}let te=1,lt=0,O=!1;function ee(){return++te}function ot(t){var e=t.f;if((e&D)!==0)return!0;if((e&L)!==0){var n=t.deps,s=(e&x)!==0;if(n!==null){var l,r,i=(e&nt)!==0,f=s&&h!==null&&!O,a=n.length;if(i||f){var u=t,_=u.parent;for(l=0;l<a;l++)r=n[l],(i||!r?.reactions?.includes(u))&&(r.reactions??=[]).push(u);i&&(u.f^=nt),f&&_!==null&&(_.f&x)===0&&(u.f^=x)}for(l=0;l<a;l++)if(r=n[l],ot(r)&&Ht(r),r.wv>t.wv)return!0}(!s||h!==null&&!O)&&k(t,E)}return!1}function ne(t,e,n=!0){var s=t.reactions;if(s!==null)for(var l=0;l<s.length;l++){var r=s[l];b?.[1].includes(t)&&b[0]===d||((r.f&N)!==0?ne(r,e,!1):e===r&&(n?k(r,D):(r.f&E)!==0&&k(r,L),kt(r)))}}function re(t){var e=p,n=y,s=w,l=d,r=O,i=b,f=S,a=A,u=t.f;p=null,y=0,w=null,O=(u&x)!==0&&(A||!M||d===null),d=(u&(B|H))===0?t:null,b=null,Ft(t.ctx),A=!1,lt++,t.f|=dt;try{var _=(0,t.fn)(),o=t.deps;if(p!==null){var c;if(it(t,y),o!==null&&y>0)for(o.length=y+p.length,c=0;c<p.length;c++)o[y+c]=p[c];else t.deps=o=p;if(!O)for(c=y;c<o.length;c++)(o[c].reactions??=[]).push(t)}else o!==null&&y<o.length&&(it(t,y),o.length=y);if(Yt()&&w!==null&&!A&&o!==null&&(t.f&(N|L|D))===0)for(c=0;c<w.length;c++)ne(w[c],t);return l!==null&&l!==t&&(lt++,w!==null&&(s===null?s=w:s.push(...w))),_}catch(v){tn(v)}finally{p=e,y=n,w=s,d=l,O=r,b=i,Ft(f),A=a,t.f^=dt}}function rn(t,e){let n=e.reactions;if(n!==null){var s=oe.call(n,t);if(s!==-1){var l=n.length-1;l===0?n=e.reactions=null:(n[s]=n[l],n.pop())}}n===null&&(e.f&N)!==0&&(p===null||!p.includes(e))&&(k(e,L),(e.f&(x|nt))===0&&(e.f^=nt),jt(e),it(e,0))}function it(t,e){var n=t.deps;if(n!==null)for(var s=e;s<n.length;s++)rn(t,n[s])}function xt(t){var e=t.f;if((e&bt)===0){k(t,E);var n=h,s=M;h=t,M=!0;try{(e&Bt)!==0?Ge(t):$t(t),Zt(t);var l=re(t);t.teardown=typeof l=="function"?l:null,t.wv=te;var r;Rt&&Se&&(t.f&D)!==0&&t.deps}finally{M=s,h=n}}}function sn(){try{Ne()}catch(t){if(Z!==null)Xt(t,Z);else throw t}}function se(){var t=M;try{var e=0;for(M=!0;z.length>0;){e++>1e3&&sn();var n=z,s=n.length;z=[];for(var l=0;l<s;l++){var r=an(n[l]);ln(r)}G.clear()}}finally{V=!1,M=t,Z=null}}function ln(t){var e=t.length;if(e!==0)for(var n=0;n<e;n++){var s=t[n];(s.f&(bt|rt))===0&&ot(s)&&(xt(s),s.deps===null&&s.first===null&&s.nodes_start===null&&(s.teardown===null?Jt(s):s.fn=null))}}function kt(t){V||(V=!0,queueMicrotask(se));for(var e=Z=t;e.parent!==null;){e=e.parent;var n=e.f;if((n&(H|B))!==0){if((n&E)===0)return;e.f^=E}}z.push(e)}function an(t){for(var e=[],n=t;n!==null;){var s=n.f,l=(s&(B|H))!==0,r=l&&(s&E)!==0;if(!r&&(s&rt)===0){(s&Mt)!==0?e.push(n):l?n.f^=E:ot(n)&&xt(n);var i=n.first;if(i!==null){n=i;continue}}var f=n.parent;for(n=n.next;n===null&&f!==null;)n=f.next,f=f.parent}return e}function un(t){for(var e;;){if(Xe(),z.length===0)return V=!1,Z=null,e;V=!0,se()}}function j(t){var e=t.f,n=(e&N)!==0;if(d!==null&&!A){if(!b?.[1].includes(t)||b[0]!==d){var s=d.deps;t.rv<lt&&(t.rv=lt,p===null&&s!==null&&s[y]===t?y++:p===null?p=[t]:(!O||!p.includes(t))&&p.push(t))}}else if(n&&t.deps===null&&t.effects===null){var l=t,r=l.parent;r!==null&&(r.f&x)===0&&(l.f^=x)}return n&&(l=t,ot(l)&&Ht(l)),$&&G.has(t)?G.get(t):t.v}const fn=-7169;function k(t,e){t.f=t.f&fn|e}const on=new Set,St=new Set;function tt(t){var e=this,n=e.ownerDocument,s=t.type,l=t.composedPath?.()||[],r=l[0]||t.target,i=0,f=t.__root;if(f){var a=l.indexOf(f);if(a!==-1&&(e===document||e===window)){t.__root=e;return}var u=l.indexOf(e);if(u===-1)return;a<=u&&(i=a)}if(r=l[i]||t.target,r!==e){Pt(t,"currentTarget",{configurable:!0,get(){return r||n}});var _=d,o=h;I(null),U(null);try{for(var c,v=[];r!==null;){var g=r.assignedSlot||r.parentNode||r.host||null;try{var T=r["__"+s];if(T!=null&&(!r.disabled||t.target===r))if(It(T)){var[J,...Q]=T;J.apply(r,[t,...Q])}else T.call(r,t)}catch(C){c?v.push(C):c=C}if(t.cancelBubble||g===e||g===null)break;r=g}if(c){for(let C of v)queueMicrotask(()=>{throw C});throw c}}finally{t.__root=e,delete t.currentTarget,I(_),U(o)}}}function cn(t,e){var n=h;n.nodes_start===null&&(n.nodes_start=t,n.nodes_end=e)}function le(t,e){return ie(t,e)}function _n(t,e){pt(),e.intro=e.intro??!1;const n=e.target,s=st,l=P;try{for(var r=Ye(n);r&&(r.nodeType!==Ct||r.data!==ce);)r=Et(r);if(!r)throw et;X(!0),ht(r),Be();const i=ie(t,{...e,anchor:r});if(P===null||P.nodeType!==Ct||P.data!==_e)throw zt(),et;return X(!1),i}catch(i){if(i===et)return e.recover===!1&&Ce(),pt(),je(n),X(!1),le(t,e);throw i}finally{X(s),ht(l)}}const Y=new Map;function ie(t,{target:e,anchor:n,props:s={},events:l,context:r,intro:i=!0}){pt();var f=new Set,a=o=>{for(var c=0;c<o.length;c++){var v=o[c];if(!f.has(v)){f.add(v);var g=de(v);e.addEventListener(v,tt,{passive:g});var T=Y.get(v);T===void 0?(document.addEventListener(v,tt,{passive:g}),Y.set(v,1)):Y.set(v,T+1)}}};a(ve(on)),St.add(a);var u=void 0,_=Ke(()=>{var o=n??e.appendChild(Le());return ze(()=>{if(r){Ie({});var c=S;c.c=r}l&&(s.$$events=l),st&&cn(o,null),u=t(o,s)||{},st&&(h.nodes_end=P),r&&Ae()}),()=>{for(var c of f){e.removeEventListener(c,tt);var v=Y.get(c);--v===0?(document.removeEventListener(c,tt),Y.delete(c)):Y.set(c,v)}St.delete(a),o!==n&&o.parentNode?.removeChild(o)}});return yt.set(u,_),u}let yt=new WeakMap;function vn(t,e){const n=yt.get(t);return n?(yt.delete(t),n(e)):Promise.resolve()}function dn(t){return class extends hn{constructor(e){super({component:t,...e})}}}class hn{#e;#t;constructor(e){var n=new Map,s=(r,i)=>{var f=Me(i,!1,!1);return n.set(r,f),f};const l=new Proxy({...e.props||{},$$events:{}},{get(r,i){return j(n.get(i)??s(i,Reflect.get(r,i)))},has(r,i){return i===Re?!0:(j(n.get(i)??s(i,Reflect.get(r,i))),Reflect.has(r,i))},set(r,i,f){return R(n.get(i)??s(i,f),f),Reflect.set(r,i,f)}});this.#t=(e.hydrate?_n:le)(e.component,{target:e.target,anchor:e.anchor,props:l,context:e.context,intro:e.intro??!1,recover:e.recover}),(!e?.props?.$$host||e.sync===!1)&&un(),this.#e=l.$$events;for(const r of Object.keys(this.#t))r==="$set"||r==="$destroy"||r==="$on"||Pt(this,r,{get(){return this.#t[r]},set(i){this.#t[r]=i},enumerable:!0});this.#t.$set=r=>{Object.assign(l,r)},this.#t.$destroy=()=>{vn(this.#t)}}$set(e){this.#t.$set(e)}$on(e,n){this.#e[e]=this.#e[e]||[];const s=(...l)=>n.call(this,...l);return this.#e[e].push(s),()=>{this.#e[e]=this.#e[e].filter(l=>l!==s)}}$destroy(){this.#t.$destroy()}}let pn=null;function Dn(t){pn=t}function Sn(t){}function gn(t){const e=dn(t),n=(s,{context:l}={})=>{const r=he(t,{props:s,context:l});return{css:{code:"",map:null},head:r.head,html:r.body}};return e.render=n,e}let mn=!1;function In(){}function An(){mn=!0}function yn(t,e){pe();let{stores:n,page:s,constructors:l,components:r=[],form:i,data_0:f=null,data_1:a=null}=e;ge("__svelte__",n),n.page.set(s);const u=l[1];if(l[1]){t.out+="<!--[-->";const _=l[0];t.out+="<!---->",_(t,{data:f,form:i,children:o=>{o.out+="<!---->",u(o,{data:a,form:i}),o.out+="<!---->"},$$slots:{default:!0}}),t.out+="<!---->"}else{t.out+="<!--[!-->";const _=l[0];t.out+="<!---->",_(t,{data:f,form:i}),t.out+="<!---->"}t.out+="<!--]--> ",t.out+="<!--[!-->",t.out+="<!--]-->",me()}const wn=gn(yn),Pn={app_template_contains_nonce:!1,csp:{mode:"auto",directives:{"default-src":["self"],"connect-src":["self","plausible.io"],"font-src":["self","fonts.gstatic.com"],"img-src":["self","data:","https:"],"script-src":["self","unsafe-inline","plausible.io"],"style-src":["self","unsafe-inline","fonts.googleapis.com"],"upgrade-insecure-requests":!1,"block-all-mixed-content":!1},reportOnly:{"upgrade-insecure-requests":!1,"block-all-mixed-content":!1}},csrf_check_origin:!0,embedded:!1,env_public_prefix:"PUBLIC_",env_private_prefix:"",hash_routing:!1,hooks:null,preload_strategy:"modulepreload",root:wn,service_worker:!1,templates:{app:({head:t,body:e,assets:n,nonce:s,env:l})=>`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
      rel="stylesheet"
    />

    <!-- Favicons -->
    <link rel="icon" href="/favicon.ico" />

    <!-- Analytics (Plausible) -->
    <!-- Replace DOMAIN if needed or remove script entirely -->
    <script defer data-domain="consulting.itsfait.com" src="https://plausible.io/js/script.js"><\/script>

    `+t+`
  </head>
  <body data-sveltekit-preload-data="hover">
    <div style="display: contents">`+e+`</div>
  </body>
</html>
`,error:({status:t,message:e})=>`<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>`+e+`</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">`+t+`</span>
			<div class="message">
				<h1>`+e+`</h1>
			</div>
		</div>
	</body>
</html>
`},version_hash:"n5waoo"};async function Mn(){return{handle:void 0,handleFetch:void 0,handleError:void 0,init:void 0,reroute:void 0,transport:void 0}}export{Rt as B,ut as a,at as b,kn as c,pn as d,Pn as e,Cn as f,Mn as g,mn as h,Fn as i,On as j,Dn as k,Nn as l,In as m,Sn as n,Tn as o,be as p,An as q,Rn as r,Ee as s};
