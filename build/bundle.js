var app=function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function o(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(o)}function i(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function u(t,e,n,o){if(t){const s=a(t,e,n,o);return t[0](s)}}function a(t,e,o,s){return t[1]&&s?n(o.ctx.slice(),t[1](s(e))):o.ctx}function f(t,e,n,o){if(t[2]&&o){const s=t[2](o(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|s[o];return t}return e.dirty|s}return e.dirty}function d(t,e,n,o,s,r){if(s){const i=a(e,n,o,r);t.p(i,s)}}function p(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function $(t){return null==t?"":t}const m="undefined"!=typeof window;let h=m?()=>window.performance.now():()=>Date.now(),g=m?t=>requestAnimationFrame(t):t;const v=new Set;function w(t){v.forEach((e=>{e.c(t)||(v.delete(e),e.f())})),0!==v.size&&g(w)}function y(t){let e;return 0===v.size&&g(w),{promise:new Promise((n=>{v.add(e={c:t,f:n})})),abort(){v.delete(e)}}}function b(t,e){t.appendChild(e)}function x(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function A(t){const e=C("style");return function(t,e){b(t.head||t,e)}(x(t),e),e.sheet}function B(t,e,n){t.insertBefore(e,n||null)}function k(t){t.parentNode.removeChild(t)}function C(t){return document.createElement(t)}function _(t){return document.createTextNode(t)}function q(){return _(" ")}function E(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function P(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function M(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function S(t,e){t.value=null==e?"":e}function R(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function j(t,e,n){t.classList[n?"add":"remove"](e)}function O(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}const T=new Map;let z,N=0;function D(t,e,n,o,s,r,i,c=0){const l=16.666/o;let u="{\n";for(let t=0;t<=1;t+=l){const o=e+(n-e)*r(t);u+=100*t+`%{${i(o,1-o)}}\n`}const a=u+`100% {${i(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(a)}_${c}`,d=x(t),{stylesheet:p,rules:$}=T.get(d)||function(t,e){const n={stylesheet:A(e),rules:{}};return T.set(t,n),n}(d,t);$[f]||($[f]=!0,p.insertRule(`@keyframes ${f} ${a}`,p.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${f} ${o}ms linear ${s}ms 1 both`,N+=1,f}function I(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),s=n.length-o.length;s&&(t.style.animation=o.join(", "),N-=s,N||g((()=>{N||(T.forEach((t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}})),T.clear())})))}function L(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const o=getComputedStyle(t),s="none"===o.transform?"":o.transform;t.style.transform=`${s} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}function F(t){z=t}function H(){const t=function(){if(!z)throw new Error("Function called outside component initialization");return z}();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const s=O(e,n);o.slice().forEach((e=>{e.call(t,s)}))}}}function Q(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const J=[],V=[],G=[],K=[],U=Promise.resolve();let W=!1;function X(t){G.push(t)}const Y=new Set;let Z,tt=0;function et(){const t=z;do{for(;tt<J.length;){const t=J[tt];tt++,F(t),nt(t.$$)}for(F(null),J.length=0,tt=0;V.length;)V.pop()();for(let t=0;t<G.length;t+=1){const e=G[t];Y.has(e)||(Y.add(e),e())}G.length=0}while(J.length);for(;K.length;)K.pop()();W=!1,Y.clear(),F(t)}function nt(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(X)}}function ot(){return Z||(Z=Promise.resolve(),Z.then((()=>{Z=null}))),Z}function st(t,e,n){t.dispatchEvent(O(`${e?"intro":"outro"}${n}`))}const rt=new Set;let it;function ct(){it={r:0,c:[],p:it}}function lt(){it.r||r(it.c),it=it.p}function ut(t,e){t&&t.i&&(rt.delete(t),t.i(e))}function at(t,e,n,o){if(t&&t.o){if(rt.has(t))return;rt.add(t),it.c.push((()=>{rt.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const ft={duration:0};function dt(t,e){t.f(),function(t,e){at(t,1,1,(()=>{e.delete(t.key)}))}(t,e)}function pt(t){t&&t.c()}function $t(t,e,n,s){const{fragment:c,on_mount:l,on_destroy:u,after_update:a}=t.$$;c&&c.m(e,n),s||X((()=>{const e=l.map(o).filter(i);u?u.push(...e):r(e),t.$$.on_mount=[]})),a.forEach(X)}function mt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ht(t,e){-1===t.$$.dirty[0]&&(J.push(t),W||(W=!0,U.then(et)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function gt(e,n,o,i,c,l,u,a=[-1]){const f=z;F(e);const d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:s(),dirty:a,skip_bound:!1,root:n.target||f.$$.root};u&&u(d.root);let p=!1;if(d.ctx=o?o(e,n.props||{},((t,n,...o)=>{const s=o.length?o[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=s)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](s),p&&ht(e,t)),n})):[],d.update(),p=!0,r(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(k)}else d.fragment&&d.fragment.c();n.intro&&ut(e.$$.fragment),$t(e,n.target,n.anchor,n.customElement),et()}F(f)}class vt{$destroy(){mt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function wt(e){let n;return{c(){n=C("header"),n.innerHTML='<h1 class="svelte-q3esrm">Poll Toll</h1>',P(n,"class","svelte-q3esrm")},m(t,e){B(t,n,e)},p:t,i:t,o:t,d(t){t&&k(n)}}}class yt extends vt{constructor(t){super(),gt(this,t,null,wt,c,{})}}function bt(e){let n;return{c(){n=C("footer"),n.innerHTML='<div class="copyright svelte-6xwcu5">Copyright 2022 - Alex Ramos</div>',P(n,"class","svelte-6xwcu5")},m(t,e){B(t,n,e)},p:t,i:t,o:t,d(t){t&&k(n)}}}class xt extends vt{constructor(t){super(),gt(this,t,null,bt,c,{})}}function At(t){let e,n,o,s,r;const i=t[4].default,c=u(i,t,t[3],null);return{c(){e=C("button"),c&&c.c(),P(e,"class",n=$(t[0])+" svelte-13mmubc"),j(e,"flat",t[1]),j(e,"inverse",t[2])},m(n,i){B(n,e,i),c&&c.m(e,null),o=!0,s||(r=E(e,"click",t[5]),s=!0)},p(t,[s]){c&&c.p&&(!o||8&s)&&d(c,i,t,t[3],o?f(i,t[3],s,null):p(t[3]),null),(!o||1&s&&n!==(n=$(t[0])+" svelte-13mmubc"))&&P(e,"class",n),3&s&&j(e,"flat",t[1]),5&s&&j(e,"inverse",t[2])},i(t){o||(ut(c,t),o=!0)},o(t){at(c,t),o=!1},d(t){t&&k(e),c&&c.d(t),s=!1,r()}}}function Bt(t,e,n){let{$$slots:o={},$$scope:s}=e,{type:r="primary"}=e,{flat:i=!1}=e,{inverse:c=!1}=e;return t.$$set=t=>{"type"in t&&n(0,r=t.type),"flat"in t&&n(1,i=t.flat),"inverse"in t&&n(2,c=t.inverse),"$$scope"in t&&n(3,s=t.$$scope)},[r,i,c,s,o,function(e){Q.call(this,t,e)}]}class kt extends vt{constructor(t){super(),gt(this,t,Bt,At,c,{type:0,flat:1,inverse:2})}}const Ct=[];function _t(e,n=t){let o;const s=new Set;function r(t){if(c(e,t)&&(e=t,o)){const t=!Ct.length;for(const t of s)t[1](),Ct.push(t,e);if(t){for(let t=0;t<Ct.length;t+=2)Ct[t][0](Ct[t+1]);Ct.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(i,c=t){const l=[i,c];return s.add(l),1===s.size&&(o=n(r)||t),i(e),()=>{s.delete(l),0===s.size&&(o(),o=null)}}}}const qt=_t([{id:1,question:"É biscoito ou bolacha?",answerA:"Biscoito",answerB:"Bolacha",votesA:5,votesB:2},{id:2,question:'Melhor "framework" de Javascript?',answerA:"Svelte",answerB:"Vue",votesA:9,votesB:5}]);function Et(t){let e;return{c(){e=_("Add Poll")},m(t,n){B(t,e,n)},d(t){t&&k(e)}}}function Pt(t){let e,n,o,s,i,c,l,u,a,f,d,p,$,m,h,g,v,w,y,x,A,R,j,O,T,z,N,D,I,L=t[1].question+"",F=t[1].answerA+"",H=t[1].answerB+"";return z=new kt({props:{type:"secondary",flat:!0,inverse:t[2],$$slots:{default:[Et]},$$scope:{ctx:t}}}),{c(){e=C("form"),n=C("div"),o=C("label"),o.textContent="Poll Question:",s=q(),i=C("input"),c=q(),l=C("div"),u=_(L),a=q(),f=C("div"),d=C("label"),d.textContent="Answer A:",p=q(),$=C("input"),m=q(),h=C("div"),g=_(F),v=q(),w=C("div"),y=C("label"),y.textContent="Answer B:",x=q(),A=C("input"),R=q(),j=C("div"),O=_(H),T=q(),pt(z.$$.fragment),P(o,"for","question"),P(o,"class","svelte-3ivc5w"),P(i,"type","text"),P(i,"id","question"),P(i,"class","svelte-3ivc5w"),P(l,"class","error svelte-3ivc5w"),P(n,"class","form-field svelte-3ivc5w"),P(d,"for","answer-a"),P(d,"class","svelte-3ivc5w"),P($,"type","text"),P($,"id","answer-a"),P($,"class","svelte-3ivc5w"),P(h,"class","error svelte-3ivc5w"),P(f,"class","form-field svelte-3ivc5w"),P(y,"for","answer-b"),P(y,"class","svelte-3ivc5w"),P(A,"type","text"),P(A,"id","answer-b"),P(A,"class","svelte-3ivc5w"),P(j,"class","error svelte-3ivc5w"),P(w,"class","form-field svelte-3ivc5w"),P(e,"class","svelte-3ivc5w")},m(r,k){var C;B(r,e,k),b(e,n),b(n,o),b(n,s),b(n,i),S(i,t[0].question),b(n,c),b(n,l),b(l,u),b(e,a),b(e,f),b(f,d),b(f,p),b(f,$),S($,t[0].answerA),b(f,m),b(f,h),b(h,g),b(e,v),b(e,w),b(w,y),b(w,x),b(w,A),S(A,t[0].answerB),b(w,R),b(w,j),b(j,O),b(e,T),$t(z,e,null),N=!0,D||(I=[E(i,"input",t[4]),E($,"input",t[5]),E(A,"input",t[6]),E(e,"submit",(C=t[3],function(t){return t.preventDefault(),C.call(this,t)}))],D=!0)},p(t,[e]){1&e&&i.value!==t[0].question&&S(i,t[0].question),(!N||2&e)&&L!==(L=t[1].question+"")&&M(u,L),1&e&&$.value!==t[0].answerA&&S($,t[0].answerA),(!N||2&e)&&F!==(F=t[1].answerA+"")&&M(g,F),1&e&&A.value!==t[0].answerB&&S(A,t[0].answerB),(!N||2&e)&&H!==(H=t[1].answerB+"")&&M(O,H);const n={};4&e&&(n.inverse=t[2]),256&e&&(n.$$scope={dirty:e,ctx:t}),z.$set(n)},i(t){N||(ut(z.$$.fragment,t),N=!0)},o(t){at(z.$$.fragment,t),N=!1},d(t){t&&k(e),mt(z),D=!1,r(I)}}}function Mt(t,e,n){const o=H(),s={question:"",answerA:"",answerB:""},r={question:"",answerA:"",answerB:""};let i=!1;return[s,r,i,()=>{if(n(2,i=!0),s.question.trim().length<5?(n(2,i=!1),n(1,r.question="Question must be at least 5 chars long",r)):n(1,r.question="",r),s.answerA.trim().length<1?(n(2,i=!1),n(1,r.answerA="Answer A cannot be empty",r)):n(1,r.answerA="",r),s.answerB.trim().length<1?(n(2,i=!1),n(1,r.answerB="Answer B cannot be empty",r)):n(1,r.answerB="",r),i){const t={...s,votesA:0,votesB:0,id:Math.random()};qt.update((e=>[t,...e])),o("add")}},function(){s.question=this.value,n(0,s)},function(){s.answerA=this.value,n(0,s)},function(){s.answerB=this.value,n(0,s)}]}class St extends vt{constructor(t){super(),gt(this,t,Mt,Pt,c,{})}}function Rt(t){const e=t-1;return e*e*e+1}function jt(t,{delay:n=0,duration:o=400,easing:s=e}={}){const r=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:s,css:t=>"opacity: "+t*r}}function Ot(t,{delay:e=0,duration:n=400,easing:o=Rt,start:s=0,opacity:r=0}={}){const i=getComputedStyle(t),c=+i.opacity,l="none"===i.transform?"":i.transform,u=1-s,a=c*(1-r);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${l} scale(${1-u*e});\n\t\t\topacity: ${c-a*e}\n\t\t`}}function Tt(t,{from:e,to:n},o={}){const s=getComputedStyle(t),r="none"===s.transform?"":s.transform,[c,l]=s.transformOrigin.split(" ").map(parseFloat),u=e.left+e.width*c/n.width-(n.left+c),a=e.top+e.height*l/n.height-(n.top+l),{delay:f=0,duration:d=(t=>120*Math.sqrt(t)),easing:p=Rt}=o;return{delay:f,duration:i(d)?d(Math.sqrt(u*u+a*a)):d,easing:p,css:(t,o)=>{const s=o*u,i=o*a,c=t+o*e.width/n.width,l=t+o*e.height/n.height;return`transform: ${r} translate(${s}px, ${i}px) scale(${c}, ${l});`}}}function zt(t){let e,n;const o=t[1].default,s=u(o,t,t[0],null);return{c(){e=C("div"),s&&s.c(),P(e,"class","card svelte-zaq7tl")},m(t,o){B(t,e,o),s&&s.m(e,null),n=!0},p(t,[e]){s&&s.p&&(!n||1&e)&&d(s,o,t,t[0],n?f(o,t[0],e,null):p(t[0]),null)},i(t){n||(ut(s,t),n=!0)},o(t){at(s,t),n=!1},d(t){t&&k(e),s&&s.d(t)}}}function Nt(t,e,n){let{$$slots:o={},$$scope:s}=e;return t.$$set=t=>{"$$scope"in t&&n(0,s=t.$$scope)},[s,o]}class Dt extends vt{constructor(t){super(),gt(this,t,Nt,zt,c,{})}}function It(t){return"[object Date]"===Object.prototype.toString.call(t)}function Lt(t,e){if(t===e||t!=t)return()=>t;const n=typeof t;if(n!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const n=e.map(((e,n)=>Lt(t[n],e)));return t=>n.map((e=>e(t)))}if("object"===n){if(!t||!e)throw new Error("Object cannot be null");if(It(t)&&It(e)){t=t.getTime();const n=(e=e.getTime())-t;return e=>new Date(t+e*n)}const n=Object.keys(e),o={};return n.forEach((n=>{o[n]=Lt(t[n],e[n])})),t=>{const e={};return n.forEach((n=>{e[n]=o[n](t)})),e}}if("number"===n){const n=e-t;return e=>t+e*n}throw new Error(`Cannot interpolate ${n} values`)}function Ft(t,o={}){const s=_t(t);let r,i=t;function c(c,l){if(null==t)return s.set(t=c),Promise.resolve();i=c;let u=r,a=!1,{delay:f=0,duration:d=400,easing:p=e,interpolate:$=Lt}=n(n({},o),l);if(0===d)return u&&(u.abort(),u=null),s.set(t=i),Promise.resolve();const m=h()+f;let g;return r=y((e=>{if(e<m)return!0;a||(g=$(t,c),"function"==typeof d&&(d=d(t,c)),a=!0),u&&(u.abort(),u=null);const n=e-m;return n>d?(s.set(t=c),!1):(s.set(t=g(p(n/d))),!0)})),r.promise}return{set:c,update:(e,n)=>c(e(i,t),n),subscribe:s.subscribe}}function Ht(t){let e;return{c(){e=_("×")},m(t,n){B(t,e,n)},d(t){t&&k(e)}}}function Qt(t){let e,n,o,s,i,c,l,u,a,f,d,p,$,m,h,g,v,w,y,x,A,S,j,O,T,z,N,D,I,L,F,H=t[0].question+"",Q=t[0].answerA+"",J=t[0].votesA+"",V=t[0].answerB+"",G=t[0].votesB+"";return D=new kt({props:{flat:!0,$$slots:{default:[Ht]},$$scope:{ctx:t}}}),D.$on("click",t[12]),{c(){e=C("div"),n=C("h3"),o=_(H),s=q(),i=C("p"),c=_("Total votes: "),l=_(t[1]),u=q(),a=C("div"),f=C("div"),d=q(),p=C("span"),$=_(Q),m=_(" ("),h=_(J),g=_(")"),v=q(),w=C("div"),y=C("div"),x=q(),A=C("span"),S=_(V),j=_(" ("),O=_(G),T=_(")"),z=q(),N=C("div"),pt(D.$$.fragment),P(n,"class","svelte-109xdu9"),P(i,"class","svelte-109xdu9"),P(f,"class","percent percent-a svelte-109xdu9"),R(f,"width",t[2]+"%"),P(p,"class","svelte-109xdu9"),P(a,"class","answer svelte-109xdu9"),P(y,"class","percent percent-b svelte-109xdu9"),R(y,"width",t[3]+"%"),P(A,"class","svelte-109xdu9"),P(w,"class","answer svelte-109xdu9"),P(N,"class","delete svelte-109xdu9"),P(e,"class","poll")},m(r,k){B(r,e,k),b(e,n),b(n,o),b(e,s),b(e,i),b(i,c),b(i,l),b(e,u),b(e,a),b(a,f),b(a,d),b(a,p),b(p,$),b(p,m),b(p,h),b(p,g),b(e,v),b(e,w),b(w,y),b(w,x),b(w,A),b(A,S),b(A,j),b(A,O),b(A,T),b(e,z),b(e,N),$t(D,N,null),I=!0,L||(F=[E(a,"click",t[10]),E(w,"click",t[11])],L=!0)},p(t,e){(!I||1&e)&&H!==(H=t[0].question+"")&&M(o,H),(!I||2&e)&&M(l,t[1]),(!I||4&e)&&R(f,"width",t[2]+"%"),(!I||1&e)&&Q!==(Q=t[0].answerA+"")&&M($,Q),(!I||1&e)&&J!==(J=t[0].votesA+"")&&M(h,J),(!I||8&e)&&R(y,"width",t[3]+"%"),(!I||1&e)&&V!==(V=t[0].answerB+"")&&M(S,V),(!I||1&e)&&G!==(G=t[0].votesB+"")&&M(O,G);const n={};8192&e&&(n.$$scope={dirty:e,ctx:t}),D.$set(n)},i(t){I||(ut(D.$$.fragment,t),I=!0)},o(t){at(D.$$.fragment,t),I=!1},d(t){t&&k(e),mt(D),L=!1,r(F)}}}function Jt(t){let e,n;return e=new Dt({props:{$$slots:{default:[Qt]},$$scope:{ctx:t}}}),{c(){pt(e.$$.fragment)},m(t,o){$t(e,t,o),n=!0},p(t,[n]){const o={};8207&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(ut(e.$$.fragment,t),n=!0)},o(t){at(e.$$.fragment,t),n=!1},d(t){mt(e,t)}}}function Vt(t,e,n){let o,s,r,i,c,{poll:u}=e;const a=Ft(0);l(t,a,(t=>n(2,i=t)));const f=Ft(0);l(t,f,(t=>n(3,c=t)));const d=(t,e)=>{qt.update((n=>{let o=[...n],s=o.find((t=>t.id===e));return"a"===t?s.votesA++:"b"===t&&s.votesB++,o}))},p=t=>{qt.update((e=>e.filter((e=>e.id!==t))))};return t.$$set=t=>{"poll"in t&&n(0,u=t.poll)},t.$$.update=()=>{1&t.$$.dirty&&n(1,o=u.votesA+u.votesB),3&t.$$.dirty&&n(9,s=Math.floor(100*u.votesA/o)||0),3&t.$$.dirty&&n(8,r=Math.floor(100*u.votesB/o)||0),512&t.$$.dirty&&a.set(s),256&t.$$.dirty&&f.set(r)},[u,o,i,c,a,f,d,p,r,s,()=>d("a",u.id),()=>d("b",u.id),()=>p(u.id)]}class Gt extends vt{constructor(t){super(),gt(this,t,Vt,Jt,c,{poll:0})}}function Kt(t,e,n){const o=t.slice();return o[1]=e[n],o}function Ut(n,o){let s,c,l,u,a,f,d,p=t;return c=new Gt({props:{poll:o[1]}}),{key:n,first:null,c(){s=C("div"),pt(c.$$.fragment),l=q(),this.first=s},m(t,e){B(t,s,e),$t(c,s,null),b(s,l),d=!0},p(t,e){o=t;const n={};1&e&&(n.poll=o[1]),c.$set(n)},r(){f=s.getBoundingClientRect()},f(){!function(t){const e=getComputedStyle(t);if("absolute"!==e.position&&"fixed"!==e.position){const{width:n,height:o}=e,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=o,L(t,s)}}(s),p(),L(s,f)},a(){p(),p=function(n,o,s,r){if(!o)return t;const i=n.getBoundingClientRect();if(o.left===i.left&&o.right===i.right&&o.top===i.top&&o.bottom===i.bottom)return t;const{delay:c=0,duration:l=300,easing:u=e,start:a=h()+c,end:f=a+l,tick:d=t,css:p}=s(n,{from:o,to:i},r);let $,m=!0,g=!1;function v(){p&&I(n,$),m=!1}return y((t=>{if(!g&&t>=a&&(g=!0),g&&t>=f&&(d(1,0),v()),!m)return!1;if(g){const e=0+1*u((t-a)/l);d(e,1-e)}return!0})),p&&($=D(n,0,1,l,c,u,p)),c||(g=!0),d(0,1),v}(s,f,Tt,{duration:500})},i(n){d||(ut(c.$$.fragment,n),X((()=>{a&&a.end(1),u=function(n,o,s){let r,c,l=o(n,s),u=!1,a=0;function f(){r&&I(n,r)}function d(){const{delay:o=0,duration:s=300,easing:i=e,tick:d=t,css:p}=l||ft;p&&(r=D(n,0,1,s,o,i,p,a++)),d(0,1);const $=h()+o,m=$+s;c&&c.abort(),u=!0,X((()=>st(n,!0,"start"))),c=y((t=>{if(u){if(t>=m)return d(1,0),st(n,!0,"end"),f(),u=!1;if(t>=$){const e=i((t-$)/s);d(e,1-e)}}return u}))}let p=!1;return{start(){p||(p=!0,I(n),i(l)?(l=l(),ot().then(d)):d())},invalidate(){p=!1},end(){u&&(f(),u=!1)}}}(s,jt,{}),u.start()})),d=!0)},o(n){at(c.$$.fragment,n),u&&u.invalidate(),n&&(a=function(n,o,s){let c,l=o(n,s),u=!0;const a=it;function f(){const{delay:o=0,duration:s=300,easing:i=e,tick:f=t,css:d}=l||ft;d&&(c=D(n,1,0,s,o,i,d));const p=h()+o,$=p+s;X((()=>st(n,!1,"start"))),y((t=>{if(u){if(t>=$)return f(0,1),st(n,!1,"end"),--a.r||r(a.c),!1;if(t>=p){const e=i((t-p)/s);f(1-e,e)}}return u}))}return a.r+=1,i(l)?ot().then((()=>{l=l(),f()})):f(),{end(t){t&&l.tick&&l.tick(1,0),u&&(c&&I(n,c),u=!1)}}}(s,Ot,{})),d=!1},d(t){t&&k(s),mt(c),t&&a&&a.end()}}}function Wt(t){let e,n,o=[],s=new Map,r=t[0];const i=t=>t[1].id;for(let e=0;e<r.length;e+=1){let n=Kt(t,r,e),c=i(n);s.set(c,o[e]=Ut(c,n))}return{c(){e=C("div");for(let t=0;t<o.length;t+=1)o[t].c();P(e,"class","poll-list svelte-5ar2qy")},m(t,s){B(t,e,s);for(let t=0;t<o.length;t+=1)o[t].m(e,null);n=!0},p(t,[n]){if(1&n){r=t[0],ct();for(let t=0;t<o.length;t+=1)o[t].r();o=function(t,e,n,o,s,r,i,c,l,u,a,f){let d=t.length,p=r.length,$=d;const m={};for(;$--;)m[t[$].key]=$;const h=[],g=new Map,v=new Map;for($=p;$--;){const t=f(s,r,$),c=n(t);let l=i.get(c);l?o&&l.p(t,e):(l=u(c,t),l.c()),g.set(c,h[$]=l),c in m&&v.set(c,Math.abs($-m[c]))}const w=new Set,y=new Set;function b(t){ut(t,1),t.m(c,a),i.set(t.key,t),a=t.first,p--}for(;d&&p;){const e=h[p-1],n=t[d-1],o=e.key,s=n.key;e===n?(a=e.first,d--,p--):g.has(s)?!i.has(o)||w.has(o)?b(e):y.has(s)?d--:v.get(o)>v.get(s)?(y.add(o),b(e)):(w.add(s),d--):(l(n,i),d--)}for(;d--;){const e=t[d];g.has(e.key)||l(e,i)}for(;p;)b(h[p-1]);return h}(o,n,i,1,t,r,s,e,dt,Ut,null,Kt);for(let t=0;t<o.length;t+=1)o[t].a();lt()}},i(t){if(!n){for(let t=0;t<r.length;t+=1)ut(o[t]);n=!0}},o(t){for(let t=0;t<o.length;t+=1)at(o[t]);n=!1},d(t){t&&k(e);for(let t=0;t<o.length;t+=1)o[t].d()}}}function Xt(t,e,n){let o;return l(t,qt,(t=>n(0,o=t))),[o]}class Yt extends vt{constructor(t){super(),gt(this,t,Xt,Wt,c,{})}}function Zt(t,e,n){const o=t.slice();return o[4]=e[n],o}function te(t){let e,n,o,s,r,i,c=t[4]+"";function l(){return t[3](t[4])}return{c(){e=C("li"),n=C("div"),o=_(c),s=q(),P(n,"class","svelte-1l1mpdp"),j(n,"active",t[4]===t[1]),P(e,"class","svelte-1l1mpdp")},m(t,c){B(t,e,c),b(e,n),b(n,o),b(e,s),r||(i=E(e,"click",l),r=!0)},p(e,s){t=e,1&s&&c!==(c=t[4]+"")&&M(o,c),3&s&&j(n,"active",t[4]===t[1])},d(t){t&&k(e),r=!1,i()}}}function ee(e){let n,o,s=e[0],r=[];for(let t=0;t<s.length;t+=1)r[t]=te(Zt(e,s,t));return{c(){n=C("div"),o=C("ul");for(let t=0;t<r.length;t+=1)r[t].c();P(o,"class","svelte-1l1mpdp"),P(n,"class","tabs svelte-1l1mpdp")},m(t,e){B(t,n,e),b(n,o);for(let t=0;t<r.length;t+=1)r[t].m(o,null)},p(t,[e]){if(7&e){let n;for(s=t[0],n=0;n<s.length;n+=1){const i=Zt(t,s,n);r[n]?r[n].p(i,e):(r[n]=te(i),r[n].c(),r[n].m(o,null))}for(;n<r.length;n+=1)r[n].d(1);r.length=s.length}},i:t,o:t,d(t){t&&k(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(r,t)}}}function ne(t,e,n){const o=H();let{items:s}=e,{activeItem:r}=e;return t.$$set=t=>{"items"in t&&n(0,s=t.items),"activeItem"in t&&n(1,r=t.activeItem)},[s,r,o,t=>o("tabChange",t)]}class oe extends vt{constructor(t){super(),gt(this,t,ne,ee,c,{items:0,activeItem:1})}}function se(e){let n,o;return n=new St({}),n.$on("add",e[3]),{c(){pt(n.$$.fragment)},m(t,e){$t(n,t,e),o=!0},p:t,i(t){o||(ut(n.$$.fragment,t),o=!0)},o(t){at(n.$$.fragment,t),o=!1},d(t){mt(n,t)}}}function re(e){let n,o;return n=new Yt({}),{c(){pt(n.$$.fragment)},m(t,e){$t(n,t,e),o=!0},p:t,i(t){o||(ut(n.$$.fragment,t),o=!0)},o(t){at(n.$$.fragment,t),o=!1},d(t){mt(n,t)}}}function ie(t){let e,n,o,s,r,i,c,l,u,a;e=new yt({}),s=new oe({props:{items:t[1],activeItem:t[0]}}),s.$on("tabChange",t[2]);const f=[re,se],d=[];function p(t,e){return"Current Polls"===t[0]?0:"Add New Poll"===t[0]?1:-1}return~(i=p(t))&&(c=d[i]=f[i](t)),u=new xt({}),{c(){pt(e.$$.fragment),n=q(),o=C("main"),pt(s.$$.fragment),r=q(),c&&c.c(),l=q(),pt(u.$$.fragment),P(o,"class","svelte-3yykcz")},m(t,c){$t(e,t,c),B(t,n,c),B(t,o,c),$t(s,o,null),b(o,r),~i&&d[i].m(o,null),B(t,l,c),$t(u,t,c),a=!0},p(t,[e]){const n={};1&e&&(n.activeItem=t[0]),s.$set(n);let r=i;i=p(t),i===r?~i&&d[i].p(t,e):(c&&(ct(),at(d[r],1,1,(()=>{d[r]=null})),lt()),~i?(c=d[i],c?c.p(t,e):(c=d[i]=f[i](t),c.c()),ut(c,1),c.m(o,null)):c=null)},i(t){a||(ut(e.$$.fragment,t),ut(s.$$.fragment,t),ut(c),ut(u.$$.fragment,t),a=!0)},o(t){at(e.$$.fragment,t),at(s.$$.fragment,t),at(c),at(u.$$.fragment,t),a=!1},d(t){mt(e,t),t&&k(n),t&&k(o),mt(s),~i&&d[i].d(),t&&k(l),mt(u,t)}}}function ce(t,e,n){let o="Current Polls";return[o,["Current Polls","Add New Poll"],t=>{n(0,o=t.detail)},t=>{n(0,o="Current Polls")}]}return new class extends vt{constructor(t){super(),gt(this,t,ce,ie,c,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
