import{r as w,j as i,a as g,c as ae,R as ke,S as Y,h as De,d as Xe,u as je,g as oe}from"./index-7gdVoRug.js";import{a as se,L as He}from"./LoadingModal-sSP2dXub.js";import{V as ze,C as Se}from"./SVG-Nj8CxP-m.js";import{O as Ce,M as Oe}from"./OpponentMessage-2dlHo39N.js";import{a as Ne,b as W}from"./config-t_5GBwir.js";import{Q as Te}from"./QuitIcon-7uLnqxpZ.js";import{C as Me}from"./Chat_bg-cAMRW75d.js";function Ve({modalConfirm:r}){const[n,s]=w.useState(null),f=a=>{s(n===a?null:a)};n!==null&&window.localStorage.setItem("mood",n);const c=n===null;return i.jsx(i.Fragment,{children:i.jsx(qe,{children:i.jsxs(Re,{children:[i.jsxs("p",{children:["오늘 하루",i.jsx("br",{}),"어떤 기분이었는지 알려줘!"]}),i.jsxs(Le,{children:[i.jsxs(F,{onClick:()=>f("angry"),$isselected:n==="angry"?"1":"0",children:[i.jsx("img",{src:"https://ifh.cc/g/a8JKwo.png",alt:""}),i.jsx("p",{children:"분노"})]}),i.jsxs(F,{onClick:()=>f("joy"),$isselected:n==="joy"?"1":"0",children:[i.jsx("img",{src:"https://ifh.cc/g/13Ktbk.png",alt:""}),i.jsx("p",{children:"기쁨"})]}),i.jsxs(F,{onClick:()=>f("sad"),$isselected:n==="sad"?"1":"0",children:[i.jsx("img",{src:"https://ifh.cc/g/pscoAZ.png",alt:""}),i.jsx("p",{children:"슬픔"})]})]}),i.jsx(Be,{onClick:r,disabled:c,children:"확인"})]})})})}const qe=g.div`
  z-index: 19;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  overflow: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(20, 22, 23, 0.4);
`,Re=g.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 1.4375rem;
  background: #fff;

  @media all and (min-width: 391px) {
    width: 30rem;
    height: 30rem;

    p {
      font-family: 'Cafe24Dongdong';
      font-size: 1.5rem;
      text-align: center;
      margin-bottom: 3rem;
      font-weight: 400;
    }
  }
  @media all and (max-width: 390px) {
    width: 21.4375rem;
    height: 24.8125rem;

    p {
      font-family: 'Cafe24Dongdong';
      font-size: 1.125rem;
      text-align: center;
      margin-bottom: 2.8rem;
      font-weight: 600;
    }
  }
`,Le=g.div`
  display: flex;
`,F=g.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  ${r=>r.$isselected==="1"?`
        img {
          transform: scale(1.2);
        }
        p {
          font-weight: bold;
        }
      `:`
        img {
          transform: scale(1);
        }
        p {
          font-weight: normal;
        }
      `}

  img {
    @media all and (min-width: 391px) {
      width: 10rem;
      height: 9rem;
    }
    @media all and (max-width: 390px) {
      width: 7rem;
      height: 7rem;
    }

    transition: transform 0.3s ease-in-out;
    &:hover {
      transition: transform 0.3s ease-in-out;
      transform: scale(1.2);
    }
  }

  p {
    transition: font-weight 0.3s ease-in-out;
  }
`,Be=g.button`
  all: unset;
  border-radius: 0.9375rem;
  background: #ff888c;
  color: white;
  font-family: 'Cafe24Dongdong';
  text-align: center;

  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;

  @media all and (min-width: 391px) {
    width: 7.125rem;
    height: 3.125rem;
    font-size: 1.25rem;
  }
  @media all and (max-width: 390px) {
    width: 6.5rem;
    height: 2.27006rem;
    font-size: 1.125rem;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 4px 5px 7px rgba(0, 0, 0, 0.25);
  }
  &:active {
    opacity: 0.3;
  }

  &:disabled {
    background-color: #ccc; 
    cursor: not-allowed;    
  }
`,We="recording spectrum_MAIN",Fe=0,Ue=488,Ee=488,Ge={g:"@lottiefiles/toolkit-js 0.26.1"},Ke=[{ty:4,nm:"Shape Layer 7",sr:1,st:0,op:60.0000024438501,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:0,k:[-73,8.5,0],ix:1},s:{a:0,k:[100,100,100],ix:6},sk:{a:0,k:0},p:{a:0,k:[360.5,249,0],ix:2},r:{a:0,k:0,ix:10},sa:{a:0,k:0},o:{a:0,k:100,ix:11}},ef:[],shapes:[{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Rectangle 1",ix:1,cix:2,np:3,it:[{ty:"rc",bm:0,hd:!1,mn:"ADBE Vector Shape - Rect",nm:"Rectangle Path 1",d:1,p:{a:0,k:[0,0],ix:3},r:{a:0,k:50,ix:4},s:{a:1,k:[{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,100],t:0},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,163],t:5},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,100],t:10},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,45],t:15},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,100],t:20},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,104],t:25},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,100],t:30},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,42],t:35},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,100],t:40},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,83],t:45},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,100],t:50},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,37],t:55},{s:[30,100],t:60.0000024438501}],ix:2}},{ty:"st",bm:0,hd:!1,mn:"ADBE Vector Graphic - Stroke",nm:"Stroke 1",lc:1,lj:1,ml:4,o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},c:{a:0,k:[.1255,.1529,.1725,1],ix:3}},{ty:"fl",bm:0,hd:!1,mn:"ADBE Vector Graphic - Fill",nm:"Fill 1",c:{a:0,k:[.1255,.1529,.1725,1],ix:4},r:1,o:{a:0,k:100,ix:5}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[-73.472,8.472],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]}],ind:1},{ty:4,nm:"Shape Layer 6",sr:1,st:0,op:60.0000024438501,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:0,k:[-73,8.5,0],ix:1},s:{a:0,k:[100,100,100],ix:6},sk:{a:0,k:0},p:{a:0,k:[300.5,249,0],ix:2},r:{a:0,k:0,ix:10},sa:{a:0,k:0},o:{a:0,k:100,ix:11}},ef:[],shapes:[{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Rectangle 1",ix:1,cix:2,np:3,it:[{ty:"rc",bm:0,hd:!1,mn:"ADBE Vector Shape - Rect",nm:"Rectangle Path 1",d:1,p:{a:0,k:[0,0],ix:3},r:{a:0,k:50,ix:4},s:{a:1,k:[{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,63],t:0},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,211],t:5},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,100],t:10},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,128],t:15},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,100],t:20},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,160],t:25},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,100],t:30},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,126],t:35},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,100],t:40},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,154],t:45},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,100],t:50},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,83],t:55},{s:[30,63],t:60.0000024438501}],ix:2}},{ty:"st",bm:0,hd:!1,mn:"ADBE Vector Graphic - Stroke",nm:"Stroke 1",lc:1,lj:1,ml:4,o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},c:{a:0,k:[.1255,.1529,.1725,1],ix:3}},{ty:"fl",bm:0,hd:!1,mn:"ADBE Vector Graphic - Fill",nm:"Fill 1",c:{a:0,k:[.1255,.1529,.1725,1],ix:4},r:1,o:{a:0,k:100,ix:5}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[-73.472,8.472],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]},{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Group 1",ix:2,cix:2,np:1,it:[{ty:"rc",bm:0,hd:!1,mn:"ADBE Vector Shape - Rect",nm:"Rectangle Path 1",d:1,p:{a:0,k:[0,0],ix:3},r:{a:0,k:0,ix:4},s:{a:0,k:[30,63],ix:2}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[0,0],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]}],ind:2},{ty:4,nm:"Shape Layer 5",sr:1,st:0,op:60.0000024438501,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:0,k:[-73,8.5,0],ix:1},s:{a:0,k:[100,100,100],ix:6},sk:{a:0,k:0},p:{a:0,k:[240.5,249,0],ix:2},r:{a:0,k:0,ix:10},sa:{a:0,k:0},o:{a:0,k:100,ix:11}},ef:[],shapes:[{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Rectangle 1",ix:1,cix:2,np:3,it:[{ty:"rc",bm:0,hd:!1,mn:"ADBE Vector Shape - Rect",nm:"Rectangle Path 1",d:1,p:{a:0,k:[0,0],ix:3},r:{a:0,k:50,ix:4},s:{a:1,k:[{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,63],t:0},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,155],t:5},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,100],t:10},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,91],t:15},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,100],t:20},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,186],t:25},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,100],t:30},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,256],t:35},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,100],t:40},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,209],t:45},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,100],t:50},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,124],t:55},{s:[30,63],t:60.0000024438501}],ix:2}},{ty:"st",bm:0,hd:!1,mn:"ADBE Vector Graphic - Stroke",nm:"Stroke 1",lc:1,lj:1,ml:4,o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},c:{a:0,k:[.1255,.1529,.1725,1],ix:3}},{ty:"fl",bm:0,hd:!1,mn:"ADBE Vector Graphic - Fill",nm:"Fill 1",c:{a:0,k:[.1255,.1529,.1725,1],ix:4},r:1,o:{a:0,k:100,ix:5}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[-73.472,8.472],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]},{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Group 1",ix:2,cix:2,np:1,it:[{ty:"rc",bm:0,hd:!1,mn:"ADBE Vector Shape - Rect",nm:"Rectangle Path 1",d:1,p:{a:0,k:[0,0],ix:3},r:{a:0,k:0,ix:4},s:{a:0,k:[30,63],ix:2}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[0,0],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]}],ind:3},{ty:4,nm:"Shape Layer 4",sr:1,st:0,op:60.0000024438501,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:0,k:[-73,8.5,0],ix:1},s:{a:0,k:[100,100,100],ix:6},sk:{a:0,k:0},p:{a:0,k:[180.5,249,0],ix:2},r:{a:0,k:0,ix:10},sa:{a:0,k:0},o:{a:0,k:100,ix:11}},ef:[],shapes:[{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Rectangle 1",ix:1,cix:2,np:3,it:[{ty:"rc",bm:0,hd:!1,mn:"ADBE Vector Shape - Rect",nm:"Rectangle Path 1",d:1,p:{a:0,k:[0,0],ix:3},r:{a:0,k:50,ix:4},s:{a:1,k:[{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,63],t:0},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,83],t:5},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,100],t:10},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,154],t:15},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,100],t:20},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,126],t:25},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,100],t:30},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,160],t:35},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,100],t:40},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,128],t:45},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,100],t:50},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,211],t:55},{s:[30,63],t:60.0000024438501}],ix:2}},{ty:"st",bm:0,hd:!1,mn:"ADBE Vector Graphic - Stroke",nm:"Stroke 1",lc:1,lj:1,ml:4,o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},c:{a:0,k:[.1255,.1529,.1725,1],ix:3}},{ty:"fl",bm:0,hd:!1,mn:"ADBE Vector Graphic - Fill",nm:"Fill 1",c:{a:0,k:[.1255,.1529,.1725,1],ix:4},r:1,o:{a:0,k:100,ix:5}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[-73.472,8.472],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]},{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Group 1",ix:2,cix:2,np:1,it:[{ty:"rc",bm:0,hd:!1,mn:"ADBE Vector Shape - Rect",nm:"Rectangle Path 1",d:1,p:{a:0,k:[0,0],ix:3},r:{a:0,k:0,ix:4},s:{a:0,k:[30,63],ix:2}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[0,0],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]}],ind:4},{ty:4,nm:"Shape Layer 3",sr:1,st:0,op:60.0000024438501,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:0,k:[-73,8.5,0],ix:1},s:{a:0,k:[100,100,100],ix:6},sk:{a:0,k:0},p:{a:0,k:[120.5,249,0],ix:2},r:{a:0,k:0,ix:10},sa:{a:0,k:0},o:{a:0,k:100,ix:11}},ef:[],shapes:[{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Rectangle 1",ix:1,cix:2,np:3,it:[{ty:"rc",bm:0,hd:!1,mn:"ADBE Vector Shape - Rect",nm:"Rectangle Path 1",d:1,p:{a:0,k:[0,0],ix:3},r:{a:0,k:50,ix:4},s:{a:1,k:[{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,100],t:0},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,37],t:5},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,100],t:10},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,83],t:15},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,100],t:20},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,42],t:25},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,100],t:30},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,104],t:35},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,100],t:40},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,45],t:45},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,100],t:50},{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[30,163],t:55},{s:[30,100],t:60.0000024438501}],ix:2}},{ty:"st",bm:0,hd:!1,mn:"ADBE Vector Graphic - Stroke",nm:"Stroke 1",lc:1,lj:1,ml:4,o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},c:{a:0,k:[.1255,.1529,.1725,1],ix:3}},{ty:"fl",bm:0,hd:!1,mn:"ADBE Vector Graphic - Fill",nm:"Fill 1",c:{a:0,k:[.1255,.1529,.1725,1],ix:4},r:1,o:{a:0,k:100,ix:5}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[-73.472,8.472],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]}],ind:5}],Qe="5.5.2",Ie=29.9700012207031,Ye=60.0000024438501,Ze=0,Je=[],_e={nm:We,ddd:Fe,h:Ue,w:Ee,meta:Ge,layers:Ke,v:Qe,fr:Ie,op:Ye,ip:Ze,assets:Je};function $e(){return i.jsx(et,{children:i.jsx(se,{animationData:_e})})}const et=g.div`
  width: 5rem;
  height: 5rem;
  /* margin-bottom: 1.5rem; */

  @media all and (max-width: 390px) {
    width: 2.84131rem;
    height: 2.47119rem;
    margin-bottom: 1.47rem;
  }
`;var tt={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Z=r=>{let n;const s=new Set,f=(h,p)=>{const y=typeof h=="function"?h(n):h;if(!Object.is(y,n)){const P=n;n=p??(typeof y!="object"||y===null)?y:Object.assign({},n,y),s.forEach(x=>x(n,P))}},c=()=>n,v={setState:f,getState:c,subscribe:h=>(s.add(h),()=>s.delete(h)),destroy:()=>{(tt?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),s.clear()}};return n=r(f,c,v),v},rt=r=>r?Z(r):Z;var de={exports:{}},le={},ce={exports:{}},fe={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T=w;function nt(r,n){return r===n&&(r!==0||1/r===1/n)||r!==r&&n!==n}var it=typeof Object.is=="function"?Object.is:nt,at=T.useState,ot=T.useEffect,st=T.useLayoutEffect,dt=T.useDebugValue;function lt(r,n){var s=n(),f=at({inst:{value:s,getSnapshot:n}}),c=f[0].inst,a=f[1];return st(function(){c.value=s,c.getSnapshot=n,U(c)&&a({inst:c})},[r,s,n]),ot(function(){return U(c)&&a({inst:c}),r(function(){U(c)&&a({inst:c})})},[r]),dt(s),s}function U(r){var n=r.getSnapshot;r=r.value;try{var s=n();return!it(r,s)}catch{return!0}}function ct(r,n){return n()}var ft=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?ct:lt;fe.useSyncExternalStore=T.useSyncExternalStore!==void 0?T.useSyncExternalStore:ft;ce.exports=fe;var mt=ce.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q=w,ut=mt;function ht(r,n){return r===n&&(r!==0||1/r===1/n)||r!==r&&n!==n}var vt=typeof Object.is=="function"?Object.is:ht,xt=ut.useSyncExternalStore,pt=q.useRef,gt=q.useEffect,At=q.useMemo,yt=q.useDebugValue;le.useSyncExternalStoreWithSelector=function(r,n,s,f,c){var a=pt(null);if(a.current===null){var d={hasValue:!1,value:null};a.current=d}else d=a.current;a=At(function(){function h(u){if(!p){if(p=!0,y=u,u=f(u),c!==void 0&&d.hasValue){var t=d.value;if(c(t,u))return P=t}return P=u}if(t=P,vt(y,u))return t;var e=f(u);return c!==void 0&&c(t,e)?t:(y=u,P=e)}var p=!1,y,P,x=s===void 0?null:s;return[function(){return h(n())},x===null?void 0:function(){return h(x())}]},[n,s,f,c]);var v=xt(r,a[0],a[1]);return gt(function(){d.hasValue=!0,d.value=v},[v]),yt(v),v};de.exports=le;var wt=de.exports;const Pt=ae(wt);var me={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{useDebugValue:bt}=ke,{useSyncExternalStoreWithSelector:kt}=Pt;let J=!1;function Dt(r,n=r.getState,s){(me?"production":void 0)!=="production"&&s&&!J&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),J=!0);const f=kt(r.subscribe,r.getState,r.getServerState||r.getState,n,s);return bt(f),f}const _=r=>{(me?"production":void 0)!=="production"&&typeof r!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const n=typeof r=="function"?rt(r):r,s=(f,c)=>Dt(n,f,c);return Object.assign(s,n),s},ue=r=>r?_(r):_,G=ue(r=>({RecordToggle:!1,isShowChar:!1,audio:"none",sendAudio:!1,plzWait:!1,exitChat:!0,setRecordToggle:n=>r({RecordToggle:n}),setIsShowChar:n=>r({isShowChar:n}),setAudio:n=>r({audio:n}),setSendAudio:n=>r({sendAudio:n}),setPlzWait:n=>r({plzWait:n}),setExitChat:n=>r({exitChat:n})}));function $(){const{RecordToggle:r,plzWait:n}=G();return i.jsxs(St,{children:[r?i.jsxs(i.Fragment,{children:[i.jsx(zt,{src:Y}),i.jsx(ee,{})]}):i.jsx(Ht,{src:Y}),n?i.jsx(jt,{children:"잠시만 기다려줘"}):i.jsx(ee,{}),r?i.jsxs(i.Fragment,{children:[i.jsx(ze,{}),i.jsx("div",{style:{height:"3.75rem"}})]}):i.jsx(i.Fragment,{children:i.jsx($e,{})})]})}const Xt=De`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`,ee=g.div`
  all: unset;
  height: 2.25rem;
`,jt=g.div`
  margin-top: 1rem;
  font-size: 1.25rem;
  text-align: center;
  font-family: 'Cafe24Dongdong';
  font-weight: bold;
`,Ht=g.img`
  animation: ${Xt} 2s ease-in-out infinite;

  /* margin-top: 5rem; */

  @media all and (max-width: 390px) {
    width: 18.60675rem;
    margin-top: 5rem;
    /* margin-top: 5.41rem; */
  }
  @media all and (min-width: 391px) {
    width: 30rem;
    margin-top: 2rem;
  }
`,zt=g.img`
  /* margin-top: 5rem; */

  @media all and (max-width: 390px) {
    width: 18.60675rem;
    margin-top: 5rem;
  }
  @media all and (min-width: 391px) {
    width: 30rem;
    margin-top: 1.5rem;
  }
`,St=g.div`
  border-radius: 1.75rem;
  background: #f3f3f3;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  flex-direction: column;
  box-shadow: 0px 14px 24px rgba(0, 0, 0, 0.13);

  @media all and (max-width: 390px) {
    width: 21.4375rem;
    height: 32.625rem;
    box-shadow: none;
  }
  @media all and (min-width: 391px) {
    width: 30rem;
    height: 43.75rem;
    box-shadow: none;
  }
`;var he={exports:{}};(function(r,n){(function(f,c){r.exports=c(w)})(Xe,function(s){return function(f){var c={};function a(d){if(c[d])return c[d].exports;var v=c[d]={i:d,l:!1,exports:{}};return f[d].call(v.exports,v,v.exports,a),v.l=!0,v.exports}return a.m=f,a.c=c,a.d=function(d,v,h){a.o(d,v)||Object.defineProperty(d,v,{enumerable:!0,get:h})},a.r=function(d){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(d,"__esModule",{value:!0})},a.t=function(d,v){if(v&1&&(d=a(d)),v&8||v&4&&typeof d=="object"&&d&&d.__esModule)return d;var h=Object.create(null);if(a.r(h),Object.defineProperty(h,"default",{enumerable:!0,value:d}),v&2&&typeof d!="string")for(var p in d)a.d(h,p,(function(y){return d[y]}).bind(null,p));return h},a.n=function(d){var v=d&&d.__esModule?function(){return d.default}:function(){return d};return a.d(v,"a",v),v},a.o=function(d,v){return Object.prototype.hasOwnProperty.call(d,v)},a.p="",a(a.s="./src/react-webcam.tsx")}({"./src/react-webcam.tsx":function(f,c,a){a.r(c);var d=a("react"),v=function(){var x=function(u,t){return x=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var l in o)o.hasOwnProperty(l)&&(e[l]=o[l])},x(u,t)};return function(u,t){x(u,t);function e(){this.constructor=u}u.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}}(),h=function(){return h=Object.assign||function(x){for(var u,t=1,e=arguments.length;t<e;t++){u=arguments[t];for(var o in u)Object.prototype.hasOwnProperty.call(u,o)&&(x[o]=u[o])}return x},h.apply(this,arguments)},p=function(x,u){var t={};for(var e in x)Object.prototype.hasOwnProperty.call(x,e)&&u.indexOf(e)<0&&(t[e]=x[e]);if(x!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(x);o<e.length;o++)u.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(x,e[o])&&(t[e[o]]=x[e[o]]);return t};(function(){typeof window>"u"||(navigator.mediaDevices===void 0&&(navigator.mediaDevices={}),navigator.mediaDevices.getUserMedia===void 0&&(navigator.mediaDevices.getUserMedia=function(u){var t=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;return t?new Promise(function(e,o){t.call(navigator,u,e,o)}):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}))})();function y(){return!!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)}var P=function(x){v(u,x);function u(t){var e=x.call(this,t)||this;return e.canvas=null,e.ctx=null,e.requestUserMediaId=0,e.unmounted=!1,e.state={hasUserMedia:!1},e}return u.prototype.componentDidMount=function(){var t=this,e=t.state,o=t.props;if(this.unmounted=!1,!y()){o.onUserMediaError("getUserMedia not supported");return}e.hasUserMedia||this.requestUserMedia(),o.children&&typeof o.children!="function"&&console.warn("children must be a function")},u.prototype.componentDidUpdate=function(t){var e=this.props;if(!y()){e.onUserMediaError("getUserMedia not supported");return}var o=JSON.stringify(t.audioConstraints)!==JSON.stringify(e.audioConstraints),l=JSON.stringify(t.videoConstraints)!==JSON.stringify(e.videoConstraints),m=t.minScreenshotWidth!==e.minScreenshotWidth,A=t.minScreenshotHeight!==e.minScreenshotHeight;(l||m||A)&&(this.canvas=null,this.ctx=null),(o||l)&&(this.stopAndCleanup(),this.requestUserMedia())},u.prototype.componentWillUnmount=function(){this.unmounted=!0,this.stopAndCleanup()},u.stopMediaStream=function(t){t&&(t.getVideoTracks&&t.getAudioTracks?(t.getVideoTracks().map(function(e){t.removeTrack(e),e.stop()}),t.getAudioTracks().map(function(e){t.removeTrack(e),e.stop()})):t.stop())},u.prototype.stopAndCleanup=function(){var t=this.state;t.hasUserMedia&&(u.stopMediaStream(this.stream),t.src&&window.URL.revokeObjectURL(t.src))},u.prototype.getScreenshot=function(t){var e=this,o=e.state,l=e.props;if(!o.hasUserMedia)return null;var m=this.getCanvas(t);return m&&m.toDataURL(l.screenshotFormat,l.screenshotQuality)},u.prototype.getCanvas=function(t){var e=this,o=e.state,l=e.props;if(!this.video||!o.hasUserMedia||!this.video.videoHeight)return null;if(!this.ctx){var m=this.video.videoWidth,A=this.video.videoHeight;if(!this.props.forceScreenshotSourceSize){var b=m/A;m=l.minScreenshotWidth||this.video.clientWidth,A=m/b,l.minScreenshotHeight&&A<l.minScreenshotHeight&&(A=l.minScreenshotHeight,m=A*b)}this.canvas=document.createElement("canvas"),this.canvas.width=(t==null?void 0:t.width)||m,this.canvas.height=(t==null?void 0:t.height)||A,this.ctx=this.canvas.getContext("2d")}var X=this,D=X.ctx,k=X.canvas;return D&&k&&(k.width=(t==null?void 0:t.width)||k.width,k.height=(t==null?void 0:t.height)||k.height,l.mirrored&&(D.translate(k.width,0),D.scale(-1,1)),D.imageSmoothingEnabled=l.imageSmoothing,D.drawImage(this.video,0,0,(t==null?void 0:t.width)||k.width,(t==null?void 0:t.height)||k.height),l.mirrored&&(D.scale(-1,1),D.translate(-k.width,0))),k},u.prototype.requestUserMedia=function(){var t=this,e=this.props,o=function(A,b){var X={video:typeof b<"u"?b:!0};e.audio&&(X.audio=typeof A<"u"?A:!0),t.requestUserMediaId++;var D=t.requestUserMediaId;navigator.mediaDevices.getUserMedia(X).then(function(k){t.unmounted||D!==t.requestUserMediaId?u.stopMediaStream(k):t.handleUserMedia(null,k)}).catch(function(k){t.handleUserMedia(k)})};if("mediaDevices"in navigator)o(e.audioConstraints,e.videoConstraints);else{var l=function(A){return{optional:[{sourceId:A}]}},m=function(A){var b=A.deviceId;return typeof b=="string"?b:Array.isArray(b)&&b.length>0?b[0]:typeof b=="object"&&b.ideal?b.ideal:null};MediaStreamTrack.getSources(function(A){var b=null,X=null;A.forEach(function(z){z.kind==="audio"?b=z.id:z.kind==="video"&&(X=z.id)});var D=m(e.audioConstraints);D&&(b=D);var k=m(e.videoConstraints);k&&(X=k),o(l(b),l(X))})}},u.prototype.handleUserMedia=function(t,e){var o=this.props;if(t||!e){this.setState({hasUserMedia:!1}),o.onUserMediaError(t);return}this.stream=e;try{this.video&&(this.video.srcObject=e),this.setState({hasUserMedia:!0})}catch{this.setState({hasUserMedia:!0,src:window.URL.createObjectURL(e)})}o.onUserMedia(e)},u.prototype.render=function(){var t=this,e=this,o=e.state,l=e.props,m=l.audio;l.forceScreenshotSourceSize;var A=l.disablePictureInPicture;l.onUserMedia,l.onUserMediaError,l.screenshotFormat,l.screenshotQuality,l.minScreenshotWidth,l.minScreenshotHeight,l.audioConstraints,l.videoConstraints,l.imageSmoothing;var b=l.mirrored,X=l.style,D=X===void 0?{}:X,k=l.children,z=p(l,["audio","forceScreenshotSourceSize","disablePictureInPicture","onUserMedia","onUserMediaError","screenshotFormat","screenshotQuality","minScreenshotWidth","minScreenshotHeight","audioConstraints","videoConstraints","imageSmoothing","mirrored","style","children"]),R=b?h(h({},D),{transform:(D.transform||"")+" scaleX(-1)"}):D,L={getScreenshot:this.getScreenshot.bind(this)};return d.createElement(d.Fragment,null,d.createElement("video",h({autoPlay:!0,disablePictureInPicture:A,src:o.src,muted:!m,playsInline:!0,ref:function(B){t.video=B},style:R},z)),k&&k(L))},u.defaultProps={audio:!1,disablePictureInPicture:!1,forceScreenshotSourceSize:!1,imageSmoothing:!0,mirrored:!1,onUserMedia:function(){},onUserMediaError:function(){},screenshotFormat:"image/webp",screenshotQuality:.92},u}(d.Component);c.default=P},react:function(f,c){f.exports=s}}).default})})(he);var Ct=he.exports;const ve=ae(Ct),Ot="4.8.0",Nt={g:"LottieFiles AE ",a:"",k:"",d:"",tc:""},Tt=25,Mt=15,Vt=51,qt=150,Rt=150,Lt="voice",Bt=0,Wt=[{id:"image_0",w:512,h:512,u:"",p:"data:image/png;base64,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",e:1}],Ft=[{ddd:0,ind:1,ty:2,nm:"6431269.png",cl:"png",refId:"image_0",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[75,75,0],ix:2},a:{a:0,k:[256,256,0],ix:1},s:{a:0,k:[7,7,100],ix:6}},ao:0,ef:[{ty:21,nm:"Fill",np:9,mn:"ADBE Fill",ix:1,en:1,ef:[{ty:10,nm:"Fill Mask",mn:"ADBE Fill-0001",ix:1,v:{a:0,k:0,ix:1}},{ty:7,nm:"All Masks",mn:"ADBE Fill-0007",ix:2,v:{a:0,k:0,ix:2}},{ty:2,nm:"Color",mn:"ADBE Fill-0002",ix:3,v:{a:0,k:[1,1,1,1],ix:3}},{ty:7,nm:"Invert",mn:"ADBE Fill-0006",ix:4,v:{a:0,k:0,ix:4}},{ty:0,nm:"Horizontal Feather",mn:"ADBE Fill-0003",ix:5,v:{a:0,k:0,ix:5}},{ty:0,nm:"Vertical Feather",mn:"ADBE Fill-0004",ix:6,v:{a:0,k:0,ix:6}},{ty:0,nm:"Opacity",mn:"ADBE Fill-0005",ix:7,v:{a:0,k:1,ix:7}}]}],ip:0,op:80,st:0,bm:0},{ddd:0,ind:2,ty:4,nm:"Shape Layer 3",sr:1,ks:{o:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},t:15,s:[50]},{t:50,s:[0]}],ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[75,75,0],ix:2},a:{a:0,k:[-.25,0,0],ix:1},s:{a:1,k:[{i:{x:[.833,.833,.833],y:[.833,.833,.833]},o:{x:[.167,.167,.167],y:[.167,.167,.167]},t:15,s:[100,100,100]},{t:50,s:[192,192,100]}],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[15.188,0],[0,-15.188],[-15.188,0],[0,15.188]],o:[[-15.188,0],[0,15.188],[15.188,0],[0,-15.188]],v:[[0,-27.5],[-27.5,0],[0,27.5],[27.5,0]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.1255,.1529,.1725,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-.25,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Ellipse 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:15,op:95,st:15,bm:0},{ddd:0,ind:3,ty:4,nm:"Shape Layer 4",sr:1,ks:{o:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},t:35,s:[50]},{t:70,s:[0]}],ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[75,75,0],ix:2},a:{a:0,k:[-.25,0,0],ix:1},s:{a:1,k:[{i:{x:[.833,.833,.833],y:[.833,.833,.833]},o:{x:[.167,.167,.167],y:[.167,.167,.167]},t:35,s:[100,100,100]},{t:70,s:[192,192,100]}],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[15.188,0],[0,-15.188],[-15.188,0],[0,15.188]],o:[[-15.188,0],[0,15.188],[15.188,0],[0,-15.188]],v:[[0,-27.5],[-27.5,0],[0,27.5],[27.5,0]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.1255,.1529,.1725,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-.25,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Ellipse 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:35,op:115,st:35,bm:0},{ddd:0,ind:4,ty:4,nm:"Shape Layer 2",sr:1,ks:{o:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},t:0,s:[50]},{t:35,s:[0]}],ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[75,75,0],ix:2},a:{a:0,k:[-.25,0,0],ix:1},s:{a:1,k:[{i:{x:[.833,.833,.833],y:[.833,.833,.833]},o:{x:[.167,.167,.167],y:[.167,.167,.167]},t:0,s:[100,100,100]},{t:35,s:[192,192,100]}],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[15.188,0],[0,-15.188],[-15.188,0],[0,15.188]],o:[[-15.188,0],[0,15.188],[15.188,0],[0,-15.188]],v:[[0,-27.5],[-27.5,0],[0,27.5],[27.5,0]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.1255,.1529,.1725,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-.25,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Ellipse 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:80,st:0,bm:0},{ddd:0,ind:5,ty:4,nm:"Shape Layer 1",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[75,75,0],ix:2},a:{a:0,k:[-.25,0,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[15.188,0],[0,-15.188],[-15.188,0],[0,15.188]],o:[[-15.188,0],[0,15.188],[15.188,0],[0,-15.188]],v:[[0,-27.5],[-27.5,0],[0,27.5],[27.5,0]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.1255,.1529,.1725,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-.25,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Ellipse 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:80,st:0,bm:0}],Ut=[],Et={v:Ot,meta:Nt,fr:Tt,ip:Mt,op:Vt,w:qt,h:Rt,nm:Lt,ddd:Bt,assets:Wt,layers:Ft,markers:Ut};function Gt(){return i.jsx(Kt,{children:i.jsx(se,{animationData:Et})})}const Kt=g.div`
  width: 5rem;
  height: 5rem;
`,Qt="/assets/BlackMic-A-gp9Any.png";function xe(){const[r,n]=w.useState(null),{RecordToggle:s,setRecordToggle:f,setAudio:c,setSendAudio:a,exitChat:d}=G(),v=()=>{f(!1),h()};w.useEffect(()=>{h()},[s]);const h=async()=>{const p=r;if(s===!0){const P=await navigator.mediaDevices.getUserMedia({audio:!0}),x=new MediaRecorder(P);n(x),x.start()}else s===!1&&p&&p.stop();let y=[];p&&(p.addEventListener("dataavailable",P=>{y.push(P.data)}),p.addEventListener("stop",()=>{const P=new Blob(y),x=new FileReader;x.onloadend=()=>{const t=x.result.split(",")[1];c(t),d===!0&&a(!0)},x.readAsDataURL(P)}))};return i.jsx(It,{onClick:v,disabled:!s,children:s?i.jsx(Gt,{}):i.jsx(Yt,{src:Qt})})}const It=g.button`
  all: unset;
  margin-bottom: 1.19rem;
  @media all and (max-width: 390px) {
    margin-bottom: 1.5rem;
    margin-top: 1.68rem;
  }
  cursor: pointer;
  &:active {
    opacity: 0.3;
  }
`,Yt=g.img`
  all: unset;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  width: 40px;
  height: 40px;
`;function te(){return i.jsxs(Zt,{children:[i.jsx(Jt,{children:i.jsx(ve,{style:{borderRadius:"1.75rem"},mirrored:!0})}),i.jsx(_t,{children:"말을 다하면 나를 눌러줘"}),i.jsx(xe,{})]})}const Zt=g.div`
  border-radius: 1.75rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 14px 24px rgba(0, 0, 0, 0.13);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media all and (min-width: 391px) {
    width: 31.25rem;
    height: 43.75rem;
  }
  @media all and (max-width: 390px) {
    width: 21.4375rem;
    height: 32.625rem;
    box-shadow: none;
  }
`,Jt=g.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.82);

  @media all and (min-width: 391px) {
    margin-top: 5rem;
    margin-bottom: 3.19rem;
    width: 26.1875rem;
    height: 25.6875rem;
  }
  @media all and (max-width: 390px) {
    margin-top: 5.31rem;
    margin-bottom: 2.87rem;
    width: 18.5625rem;
    height: 18.1875rem;
  }
`,_t=g.div`
  color: #000;
  text-align: center;
  font-family: 'Cafe24Dongdong';
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media all and (min-width: 391px) {
    font-size: 1.5rem;
  }
  @media all and (max-width: 390px) {
    margin-bottom: 0.68rem;
    font-size: 1rem;
  }
`;function re({sendChatArray:r,sendChatting:n}){const[s,f]=w.useState([]),c=w.useRef(null),[a,d]=w.useState([]);let v=[];return w.useEffect(()=>{const h=c.current;h&&(h.scrollTop=h.scrollHeight)}),w.useEffect(()=>{let h=[],p=[];r!==s&&(f(r),h=r),n!==s&&(p=n.flat()),v=p.flat(),v=v.concat(h),d(v)},[r,n]),i.jsxs($t,{children:[i.jsx(er,{ref:c,children:a.slice(0,a.length-1).map((h,p)=>h.character==="quokka"?i.jsx(Ce,{chatMessage:h.message},p):h.character==="child"?i.jsx(Oe,{chatMessage:h.message},p):null)}),i.jsx(tr,{children:"말을 다하면 나를 눌러줘"}),i.jsx(xe,{})]})}const $t=g.div`
  border-radius: 1.75rem;
  background: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media all and (min-width: 391px) {
    width: 31.25rem;
    height: 43.75rem;
    box-shadow: 0px 14px 24px rgba(0, 0, 0, 0.13);
  }
  @media all and (max-width: 390px) {
    width: 22rem;
    height: 34rem;
    background: transparent;
    box-shadow: none;
  }
`,er=g.div`
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  background: rgba(255, 255, 255, 0.82);
  flex-direction: column;

  @media all and (min-width: 391px) {
    width: 31.25rem;
    margin-top: 2.19rem;
    border-radius: 1.75rem;
  }
  @media all and (max-width: 390px) {
    width: 22rem;
    background: transparent;
  }
`,tr=g.div`
  color: #000;
  text-align: center;
  font-family: 'Cafe24Dongdong';
  font-weight: 400;

  @media all and (min-width: 391px) {
    font-size: 1.5rem;
  }
  @media all and (max-width: 390px) {
    margin-bottom: 0.68rem;
    font-size: 1rem;
  }
`;var rr={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};function nr(r,n){let s;try{s=r()}catch{return}return{getItem:c=>{var a;const d=h=>h===null?null:JSON.parse(h,n==null?void 0:n.reviver),v=(a=s.getItem(c))!=null?a:null;return v instanceof Promise?v.then(d):d(v)},setItem:(c,a)=>s.setItem(c,JSON.stringify(a,n==null?void 0:n.replacer)),removeItem:c=>s.removeItem(c)}}const M=r=>n=>{try{const s=r(n);return s instanceof Promise?s:{then(f){return M(f)(s)},catch(f){return this}}}catch(s){return{then(f){return this},catch(f){return M(f)(s)}}}},ir=(r,n)=>(s,f,c)=>{let a={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:o=>o,version:0,merge:(o,l)=>({...l,...o}),...n},d=!1;const v=new Set,h=new Set;let p;try{p=a.getStorage()}catch{}if(!p)return r((...o)=>{console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),s(...o)},f,c);const y=M(a.serialize),P=()=>{const o=a.partialize({...f()});let l;const m=y({state:o,version:a.version}).then(A=>p.setItem(a.name,A)).catch(A=>{l=A});if(l)throw l;return m},x=c.setState;c.setState=(o,l)=>{x(o,l),P()};const u=r((...o)=>{s(...o),P()},f,c);let t;const e=()=>{var o;if(!p)return;d=!1,v.forEach(m=>m(f()));const l=((o=a.onRehydrateStorage)==null?void 0:o.call(a,f()))||void 0;return M(p.getItem.bind(p))(a.name).then(m=>{if(m)return a.deserialize(m)}).then(m=>{if(m)if(typeof m.version=="number"&&m.version!==a.version){if(a.migrate)return a.migrate(m.state,m.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return m.state}).then(m=>{var A;return t=a.merge(m,(A=f())!=null?A:u),s(t,!0),P()}).then(()=>{l==null||l(t,void 0),d=!0,h.forEach(m=>m(t))}).catch(m=>{l==null||l(void 0,m)})};return c.persist={setOptions:o=>{a={...a,...o},o.getStorage&&(p=o.getStorage())},clearStorage:()=>{p==null||p.removeItem(a.name)},getOptions:()=>a,rehydrate:()=>e(),hasHydrated:()=>d,onHydrate:o=>(v.add(o),()=>{v.delete(o)}),onFinishHydration:o=>(h.add(o),()=>{h.delete(o)})},e(),t||u},ar=(r,n)=>(s,f,c)=>{let a={storage:nr(()=>localStorage),partialize:e=>e,version:0,merge:(e,o)=>({...o,...e}),...n},d=!1;const v=new Set,h=new Set;let p=a.storage;if(!p)return r((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),s(...e)},f,c);const y=()=>{const e=a.partialize({...f()});return p.setItem(a.name,{state:e,version:a.version})},P=c.setState;c.setState=(e,o)=>{P(e,o),y()};const x=r((...e)=>{s(...e),y()},f,c);let u;const t=()=>{var e,o;if(!p)return;d=!1,v.forEach(m=>{var A;return m((A=f())!=null?A:x)});const l=((o=a.onRehydrateStorage)==null?void 0:o.call(a,(e=f())!=null?e:x))||void 0;return M(p.getItem.bind(p))(a.name).then(m=>{if(m)if(typeof m.version=="number"&&m.version!==a.version){if(a.migrate)return a.migrate(m.state,m.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return m.state}).then(m=>{var A;return u=a.merge(m,(A=f())!=null?A:x),s(u,!0),y()}).then(()=>{l==null||l(u,void 0),u=f(),d=!0,h.forEach(m=>m(u))}).catch(m=>{l==null||l(void 0,m)})};return c.persist={setOptions:e=>{a={...a,...e},e.storage&&(p=e.storage)},clearStorage:()=>{p==null||p.removeItem(a.name)},getOptions:()=>a,rehydrate:()=>t(),hasHydrated:()=>d,onHydrate:e=>(v.add(e),()=>{v.delete(e)}),onFinishHydration:e=>(h.add(e),()=>{h.delete(e)})},a.skipHydration||t(),u||x},or=(r,n)=>"getStorage"in n||"serialize"in n||"deserialize"in n?((rr?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),ir(r,n)):ar(r,n),sr=or,pe=ue(sr(r=>({toggle:"0",setToggle:n=>r({toggle:n})}),{name:"toggle-StoreName"}));function dr({}){const{toggle:r,setToggle:n}=pe(),s=()=>{n(r==="1"?"0":"1")};return i.jsxs(lr,{children:[i.jsx(cr,{children:i.jsx(ur,{})}),i.jsx(mr,{onClick:s,$toggle:r,children:i.jsx(fr,{$toggle:r,children:i.jsx(Se,{})})})]})}const lr=g.div`
  /* position: absolute; */
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.7rem;

  @media all and (min-width: 391px) {
    justify-content: right;
    margin-right: 14.5rem;
    margin-bottom: 1rem;
  }
  @media all and (max-width: 390px) {
    justify-content: right;
    margin-right: 3.25rem;
  }
`,cr=g.div`
  display: flex;
  align-items: center;
  width: auto;
  height: 2rem;
  white-space: nowrap;

  /* text */
  font-family: 'Cafe24Dongdong';
  font-weight: 400;

  @media all and (min-width: 391px) {
    font-size: 1.5rem;
  }
  @media all and (max-width: 390px) {
    right: 0;
    left: 0;
    justify-content: center;
    font-size: 1.125rem;
  }
`,fr=g.div`
  background: white;
  border-radius: 50%;
  transition: transform 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  @media all and (min-width: 391px) {
    width: 1.2rem;
    height: 1.2rem;
    transform: ${r=>r.$toggle==="1"?"translateX(2.9rem)":"0"};
  }
  @media all and (max-width: 390px) {
    width: 0.97825rem;
    height: 0.97825rem;
    transform: ${r=>r.$toggle==="1"?"translateX(1.78rem)":"0"};
  }
`,mr=g.div`
  background: ${r=>r.$toggle==="1"?"#FF888C":"#949494"};
  border-radius: 5.96875rem;
  display: flex;
  align-items: center;
  justify-content: 'flex-start';
  padding: 5px;
  cursor: pointer;
  transition: background 0.5s ease-in-out;

  @media all and (min-width: 391px) {
    width: 4.75rem;
    height: 2rem;
  }
  @media all and (max-width: 390px) {
    width: 3.375rem;
    height: 1.36956rem;
  }
`,ur=()=>{const r=new Date,n=`${r.getFullYear()}년 ${r.getMonth()+1}월 ${r.getDate()}일`;return i.jsx(i.Fragment,{children:n})},ne=oe("token");function hr(){const r=je(),[n,s]=w.useState(!1),f=w.useRef(null),[c,a]=w.useState(void 0),[d,v]=w.useState(null),[h,p]=w.useState(!1),y=w.useCallback(()=>{var e;const t=(e=f.current)==null?void 0:e.getScreenshot();s(!0),t&&Ne.get(t,{responseType:"blob"}).then(o=>{const l=new File([o.data],"userCapture.jpeg",{type:"image/jpeg"});v(l),a(t)}).catch(o=>console.error("Error in fetching image:",o))},[f]),P=()=>{s(!1),v(null)},x=async()=>{p(!0);const t=window.localStorage.getItem("chat_id");if(d){const e=new FormData;e.append("picture",d),t&&e.append("chat_room_id",t);try{if((await W.post(`/apps/chat_images/${t}/`,e,{headers:{Authorization:ne}})).status===201){const l=oe("token");try{const m=await W.post("/diary/",{mood:window.localStorage.getItem("mood"),chat_room_id:window.localStorage.getItem("chat_id")},{headers:{Authorization:l}});m.data.status==="201"&&(window.localStorage.setItem("selectedDiaryId",m.data.diaryId),r("/diary"))}catch(m){console.error(m)}}}catch(o){console.error("Error during image upload:",o)}}},u=async()=>{p(!0);const t=window.localStorage.getItem("chat_id");try{const e=await W.post("/diary/",{mood:window.localStorage.getItem("mood"),chat_room_id:t},{headers:{Authorization:ne}});e.data.status==="201"&&(window.localStorage.setItem("selectedDiaryId",e.data.diaryId),r("/diary"))}catch(e){console.error(e)}};return i.jsxs(i.Fragment,{children:[i.jsx(vr,{children:i.jsxs(xr,{children:[i.jsxs(pr,{children:["오늘의 나를",i.jsx("br",{})," 기록으로 남겨보자!"]}),i.jsx(gr,{children:n?i.jsx("img",{src:c,width:"100%",height:"100%",style:{borderRadius:"1.75rem"}}):i.jsx(ve,{mirrored:!0,ref:f,width:"100%",height:"100%",screenshotFormat:"image/jpeg",style:{borderRadius:"1.75rem"}})}),n?i.jsxs(Ar,{children:[i.jsx(yr,{onClick:P,children:"다시 찍기"}),i.jsx(wr,{onClick:x,children:"확인"})]}):i.jsxs(i.Fragment,{children:[i.jsx(ge,{onClick:y,children:"찰칵!"}),i.jsx(Pr,{onClick:u,children:"카메라가 없어요 ㅠㅠ"})]})]})}),h&&i.jsx(He,{})]})}const vr=g.div`
  z-index: 19;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  overflow: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(20, 22, 23, 0.4);
`,xr=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 1.4375rem;
  background: #fff;

  @media all and (min-width: 391px) {
    width: 33.36488rem;
    height: 37.5rem;
  }
  @media all and (max-width: 390px) {
    width: 21.4375rem;
    height: 26rem;
  }
`,pr=g.div`
  color: #000;
  text-align: center;
  font-family: 'Cafe24Dongdong';
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media all and (min-width: 391px) {
    width: 17.68338rem;
    height: 4.2rem;
    margin-top: 3.5rem;
    margin-bottom: 1rem;

    font-size: 1.5rem;
  }
  @media all and (max-width: 390px) {
    width: 11.36188rem;
    height: 2.877rem;
    margin-top: 2rem;
    margin-bottom: 1rem;

    font-size: 1.125rem;
  }
`,gr=g.div`
  display: flex;
  justify-content: center;
  border-radius: 1.3125rem;

  @media all and (min-width: 391px) {
    width: 26.1875rem;
    height: 19.625rem;
  }
  @media all and (max-width: 390px) {
    width: 18.5625rem;
    height: 13.875rem;
  }
`,Ar=g.div`
  all: unset;
  display: flex;
  flex-direction: row;

  @media all and (min-width: 391px) {
    margin-top: 2.12rem;
    border-radius: 0.9375rem;
  }
  @media all and (max-width: 390px) {
    margin-top: 1.37rem;
    border-radius: 0.9375rem;
  }
`,ge=g.button`
  all: unset;
  border-radius: 0.6rem;

  cursor: pointer;
  &:active {
    opacity: 0.3;
  }

  //text
  color: #fff;
  text-align: center;
  font-family: 'Cafe24Dongdong';
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media all and (min-width: 391px) {
    width: 7.60719rem;
    height: 3.75rem;
    background: #ff888c;

    margin-top: 2.12rem;

    //text
    font-size: 1.25rem;
  }
  @media all and (max-width: 390px) {
    width: 4.88775rem;
    height: 2.56875rem;

    background: #ff888c;

    margin-top: 1rem;
  }
`,yr=g.button`
  all: unset;
  border-radius: 0.6rem;

  cursor: pointer;
  &:active {
    opacity: 0.3;
  }

  //text
  color: #fff;

  text-align: center;
  font-family: 'Cafe24Dongdong';
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media all and (min-width: 391px) {
    width: 7.60719rem;
    height: 3.75rem;
    background: #ff888c;
    margin-right: 1.64rem;
    font-size: 1.25rem;
  }
  @media all and (max-width: 390px) {
    width: 4.88775rem;
    height: 2.56875rem;
    background: #ff888c;
    margin-right: 1rem;
    font-size: 1rem;
  }
`,wr=g.button`
  all: unset;

  cursor: pointer;
  &:active {
    opacity: 0.3;
  }

  //text
  color: #fff;

  text-align: center;
  font-family: 'Cafe24Dongdong';
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 0.6rem;

  @media all and (min-width: 391px) {
    width: 7.60719rem;
    height: 3.75rem;
    background: #ff888c;
    font-size: 1.25rem;
  }
  @media all and (max-width: 390px) {
    width: 4.88775rem;
    height: 2.56875rem;
    background: #ff888c;
    font-size: 1rem;
  }
`,Pr=g(ge)`
  background: transparent;
  color: grey;
  margin-top: 0.3rem;
  margin-bottom: 0.5rem;
  min-width: 12rem;

  &:hover {
    color: #ff888c;
    text-decoration: underline;
  }
`,br="/assets/QuitIcon2-FMn8AVbn.png",kr="/assets/F5-J5iWMMgn.png";function qr(){const[r,n]=w.useState(null),[s,f]=w.useState(!1),{setPlzWait:c,setRecordToggle:a,audio:d,setSendAudio:v,sendAudio:h,setExitChat:p}=G(),[y,P]=w.useState(!0);let x=[];const[u,t]=w.useState([]),[e,o]=w.useState([]),l=async()=>{const H=window.localStorage.getItem("chat_id"),j=new WebSocket(`ws://localhost:8000/ws/chat/${H}/`);let S=new Array,C=new Array;j.onopen=()=>{p(!0),f(!0),n(j)},j.onclose=()=>{f(!1)},j.onerror=()=>{f(!1)},j.onmessage=we=>{const O=JSON.parse(we.data),Q=O.event,I=O.data.finish_reason;if(Q==="conversation"){S.push(O.data.message);const V=S.join("");if(O.data.character==="quokka"){const N={character:"quokka",message:V};C.concat(x),x.push(N),t(x),I==="stop"&&(S=[],C.push(x),o(C)),x=[]}else if(O.data.character==="child"){const N={character:"child",message:V};C.concat(x),x.push(N),t(x),I==="stop"&&(S=[],C.push(x),o(C)),x=[]}}else if(Q==="question_tts"){c(!1);const V=O.data.audioBlob;let N=new Audio(`data:audio/x-wav;base64, ${V}`);N.play(),N.addEventListener("loadedmetadata",Pe=>{const be=Pe.currentTarget.duration*1e3;setTimeout(()=>{K(!1),a(!0),P(!1)},be)})}}},m=()=>{const H=r,j=window.localStorage.getItem("mood");if(s===!0&&H){const S={event:"conversation_start",data:{mood:j}};H.send(JSON.stringify(S))}},A=()=>{const H=r;if(h===!0&&H){const j={event:"user_answer",data:{audioBlob:d}};H.send(JSON.stringify(j)),v(!1),a(!1),K(!0),P(!0),c(!0)}},{toggle:b}=pe(),[X,D]=w.useState(!0),[k,z]=w.useState(window.matchMedia("(max-width: 390px)").matches),[R,L]=w.useState(!1),B=()=>{D(!1),m()},Ae=()=>{y===!1&&(p(!1),L(!0),P(!0),a(!1))},[ye,K]=w.useState(!0);return w.useEffect(()=>{A(),setTimeout(()=>{},2e3)},[h]),w.useEffect(()=>{l();const H=window.matchMedia("(max-width: 390px)"),j=()=>z(H.matches);return H.addEventListener("change",j),j(),()=>{H.removeEventListener("change",j)}},[]),s?i.jsxs(jr,{children:[X&&i.jsx(Ve,{modalConfirm:B}),i.jsxs(Xr,{children:[i.jsx(dr,{}),k?ye&&b==="1"?i.jsx(E,{children:i.jsx($,{})}):i.jsx(E,{children:b==="1"?i.jsx(te,{}):i.jsx(re,{sendChatArray:u,sendChatting:e})}):i.jsxs(E,{children:[i.jsx($,{}),b==="1"?i.jsx(te,{}):i.jsx(re,{sendChatArray:u,sendChatting:e})]})]}),R&&i.jsx(hr,{}),i.jsxs(Hr,{onClick:Ae,disabled:y,children:["대화 끝내기",y===!0&&i.jsx(ie,{src:br}),y===!1&&i.jsx(ie,{src:Te})]})]}):i.jsx(Dr,{})}const Dr=g.div`
  background-image: url(${kr});
  background-position-x: 50%;
  background-position-y: 75%;
  /* background-size: 100%; */
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
`,Xr=g.div`
  display: flex;
  flex-direction: column;

  @media all and (min-width: 391px) {
    margin-top: 6rem;
  }
  @media all and (max-width: 390px) {
    margin-top: 3.3rem;
  }
`,jr=g.div`
  position: relative;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;

  @media all and (min-width: 391px) {
    background-image: url(${Me});
    background-position-x: 50%;
    background-position-y: 75%;
    width: 100vw;
    height: 100vh;
    margin: auto;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  @media all and (max-width: 390px) {
    background-color: #ffe79a;
    background-position: center;
    width: 100vw;
    height: 100vh;

    align-items: center;
    justify-content: center;
  }
`,E=g.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 5.3rem;
  /* margin-top: 10.5rem; */

  @media all and (min-width: 391px) {
    margin-left: 11.06rem;
    margin-right: 8.62rem;
  }
  @media all and (max-width: 390px) {
    margin-left: auto;
    margin-right: auto;
    margin-top: 4.75rem;
    margin-bottom: 10.06rem;
    height: 30rem;
  }
`,Hr=g.button`
  all: unset;

  /* background:; */

  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  color: ${r=>r.disabled?"#aeaeae":"#2c2c2c"};
  /* color: #000; */
  text-align: center;
  font-family: 'Cafe24Dongdong';
  font-weight: 400;

  @media all and (min-width: 391px) {
    bottom: 1rem;
    right: 23px;
    height: 1.5rem;
    font-size: 1.5rem;
  }
  @media all and (max-width: 390px) {
    bottom: 1rem;
    right: 23px;
    height: 1.5rem;
    font-size: 1.125rem;
  }
`,ie=g.img`
  @media all and (min-width: 391px) {
    width: 2.5rem;
    height: 2.5rem;
  }
  @media all and (max-width: 390px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;export{qr as default};