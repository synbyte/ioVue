"use strict";(self["webpackChunkionic_app_base"]=self["webpackChunkionic_app_base"]||[]).push([[775],{775:function(e,t,n){n.r(t),n.d(t,{startInputShims:function(){return D}});var o=n(74),r=n(587);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const i=new WeakMap,a=(e,t,n,o=0)=>{i.has(e)!==n&&(n?l(e,t,o):d(e,t))},s=e=>e===e.getRootNode().activeElement,l=(e,t,n)=>{const o=t.parentNode,r=t.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,o.appendChild(r),i.set(e,r);const a=e.ownerDocument,s="rtl"===a.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${s}px,${n}px,0) scale(0)`},d=(e,t)=>{const n=i.get(e);n&&(i.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},c=(e,t,n)=>{if(!n||!t)return()=>{};const o=n=>{s(t)&&a(e,t,n)},i=()=>a(e,t,!1),l=()=>o(!0),d=()=>o(!1);return(0,r.a)(n,"ionScrollStart",l),(0,r.a)(n,"ionScrollEnd",d),t.addEventListener("blur",i),()=>{(0,r.b)(n,"ionScrollStart",l),(0,r.b)(n,"ionScrollEnd",d),t.addEventListener("ionBlur",i)}},u="input, textarea, [no-blur], [contenteditable]",m=()=>{let e=!0,t=!1;const n=document,o=()=>{t=!0},i=()=>{e=!0},a=o=>{if(t)return void(t=!1);const r=n.activeElement;if(!r)return;if(r.matches(u))return;const i=o.target;i!==r&&(i.matches(u)||i.closest(u)||(e=!1,setTimeout((()=>{e||r.blur()}),50)))};return(0,r.a)(n,"ionScrollStart",o),n.addEventListener("focusin",i,!0),n.addEventListener("touchend",a,!1),()=>{(0,r.b)(n,"ionScrollStart",o,!0),n.removeEventListener("focusin",i,!0),n.removeEventListener("touchend",a,!1)}},f=.3,p=(e,t,n)=>{var o;const r=null!==(o=e.closest("ion-item,[ion-item]"))&&void 0!==o?o:e;return v(r.getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)},v=(e,t,n,o)=>{const r=e.top,i=e.bottom,a=t.top,s=Math.min(t.bottom,o-n),l=a+15,d=.75*s,c=d-i,u=l-r,m=Math.round(c<0?-c:u>0?-u:0),p=Math.min(m,r-a),v=Math.abs(p),h=v/f,w=Math.min(400,Math.max(150,h));return{scrollAmount:p,scrollDuration:w,scrollPadding:n,inputSafeY:4-(r-l)}},h=(e,t,n,o,i)=>{let a;const l=e=>{a=(0,r.p)(e)},d=l=>{if(!a)return;const d=(0,r.p)(l);E(6,a,d)||s(t)||w(e,t,n,o,i)};return e.addEventListener("touchstart",l,{capture:!0,passive:!0}),e.addEventListener("touchend",d,!0),()=>{e.removeEventListener("touchstart",l,!0),e.removeEventListener("touchend",d,!0)}},w=async(e,t,n,i,s)=>{if(!n&&!i)return;const l=p(e,n||i,s);if(n&&Math.abs(l.scrollAmount)<4)t.focus();else if(a(e,t,!0,l.inputSafeY),t.focus(),(0,r.r)((()=>e.click())),"undefined"!==typeof window){let r;const i=async()=>{void 0!==r&&clearTimeout(r),window.removeEventListener("ionKeyboardDidShow",s),window.removeEventListener("ionKeyboardDidShow",i),n&&await(0,o.c)(n,0,l.scrollAmount,l.scrollDuration),a(e,t,!1,l.inputSafeY),t.focus()},s=()=>{window.removeEventListener("ionKeyboardDidShow",s),window.addEventListener("ionKeyboardDidShow",i)};if(n){const e=await(0,o.g)(n),a=e.scrollHeight-e.clientHeight;if(l.scrollAmount>a-e.scrollTop)return"password"===t.type?(l.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",s)):window.addEventListener("ionKeyboardDidShow",i),void(r=setTimeout(i,1e3))}i()}},E=(e,t,n)=>{if(t&&n){const o=t.x-n.x,r=t.y-n.y,i=o*o+r*r;return i>e*e}return!1},y="$ionPaddingTimer",g=e=>{const t=document,n=t=>{b(t.target,e)},o=e=>{b(e.target,0)};return t.addEventListener("focusin",n),t.addEventListener("focusout",o),()=>{t.removeEventListener("focusin",n),t.removeEventListener("focusout",o)}},b=(e,t)=>{var n,r;if("INPUT"!==e.tagName)return;if(e.parentElement&&"ION-INPUT"===e.parentElement.tagName)return;if("ION-SEARCHBAR"===(null===(r=null===(n=e.parentElement)||void 0===n?void 0:n.parentElement)||void 0===r?void 0:r.tagName))return;const i=(0,o.a)(e);if(null===i)return;const a=i[y];a&&clearTimeout(a),t>0?i.style.setProperty("--keyboard-offset",`${t}px`):i[y]=setTimeout((()=>{i.style.setProperty("--keyboard-offset","0px")}),120)},S=!0,L=!0,D=e=>{const t=document,n=e.getNumber("keyboardHeight",290),i=e.getBoolean("scrollAssist",!0),a=e.getBoolean("hideCaretOnScroll",!0),s=e.getBoolean("inputBlurring",!0),l=e.getBoolean("scrollPadding",!0),d=Array.from(t.querySelectorAll("ion-input, ion-textarea")),u=new WeakMap,f=new WeakMap,p=async e=>{await new Promise((t=>(0,r.c)(e,t)));const t=e.shadowRoot||e,s=t.querySelector("input")||t.querySelector("textarea"),l=(0,o.a)(e),d=l?null:e.closest("ion-footer");if(!s)return;if(l&&a&&!u.has(e)){const t=c(e,s,l);u.set(e,t)}const m="date"===s.type||"datetime-local"===s.type;if(!m&&(l||d)&&i&&!f.has(e)){const t=h(e,s,l,d,n);f.set(e,t)}},v=e=>{if(a){const t=u.get(e);t&&t(),u.delete(e)}if(i){const t=f.get(e);t&&t(),f.delete(e)}};s&&S&&m(),l&&L&&g(n);for(const o of d)p(o);t.addEventListener("ionInputDidLoad",(e=>{p(e.detail)})),t.addEventListener("ionInputDidUnload",(e=>{v(e.detail)}))}}}]);
//# sourceMappingURL=775.09e9f023.js.map