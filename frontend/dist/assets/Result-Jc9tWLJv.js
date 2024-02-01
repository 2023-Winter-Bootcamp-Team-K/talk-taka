import{j as e,a as i,r as s,g as k,u as I,e as C}from"./index-7gdVoRug.js";import{H as M}from"./HeartBubble-esV3CAdD.js";import{O as z,M as B}from"./OpponentMessage-2dlHo39N.js";import{C as D,B as L}from"./SVG-Nj8CxP-m.js";import{u as $}from"./useQuery-BVmqMukG.js";import{b as E}from"./config-t_5GBwir.js";import{Q as R}from"./QuitIcon-7uLnqxpZ.js";import{C as S}from"./Chat_bg-cAMRW75d.js";const l="/assets/DefaultResultImage-HjZxILPH.png";function Q({picture:n}){const a=l,t=n||a,r=t===a;return e.jsxs(F,{children:[e.jsx(T,{src:M}),e.jsxs(H,{$isDefaultImage:r,children:[e.jsx("img",{src:t,alt:"Face or Default Image",style:{width:"100%",height:"auto"}}),r&&e.jsx(O,{children:"이 날 찍은 사진이 없어요"})]})]})}const F=i.div`
  border-radius: 1.75rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 14px 24px rgba(0, 0, 0, 0.13);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media all and (min-width: 391px) {
    width: 30rem;
    height: 33.125rem;
  }
  @media all and (max-width: 390px) {
    display: none;
  }
`,H=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${n=>n.$isDefaultImage?"none":"#ffffff"};

  img {
    margin-top: 1.37rem;
    margin-bottom: 6.12rem;
    border-radius: 1.3125rem;

    ${n=>n.$isDefaultImage&&`
        width: 20rem;
        height: auto; 
        background: none;
      `}
  }

  @media all and (max-width: 390px) {
    display: none;
  }
`,O=i.div`
  color: #000;
  text-align: center;
  font-family: 'Cafe24Dongdong';
  font-style: normal;
  line-height: normal;
  margin-top: -4rem;
  font-size: 1.5rem;
`,T=i.img`
  @media all and (min-width: 391px) {
    width: 4.6875rem;
    height: 4.6875rem;
    margin-top: 1.31rem;
  }
  @media all and (max-width: 390px) {
    display: none;
  }
`;function u({content:n}){const a=n||[];return e.jsx(U,{children:e.jsx(Y,{children:a.map((t,r)=>t.Question?e.jsx(z,{chatMessage:t.Question},r):t.child?e.jsx(B,{chatMessage:t.child},r):null)})})}const U=i.div`
  width: 35.0625rem;
  border-radius: 1.75rem;
  background: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media all and (min-width: 391px) {
    height: 43.75rem;
    box-shadow: 0px 14px 24px rgba(0, 0, 0, 0.13);
  }
  @media all and (max-width: 390px) {
    height: 42rem;
    width: 22rem;
    background: transparent;
  }
`,Y=i.div`
  flex-grow: 1;
  overflow-y: auto;
  border-radius: 1.75rem;
  background: rgba(255, 255, 255, 0.82);
  display: flex;
  flex-direction: column;

  @media all and (min-width: 391px) {
    width: 35rem;
    margin-top: 2.19rem;
    margin-bottom: 2.19rem;
  }
  @media all and (max-width: 390px) {
    width: 22rem;
    background: transparent;
  }
`;function _({picture:n}){const[a,t]=s.useState(!1);return s.useEffect(()=>{n===l&&t(!0)},[n]),e.jsx(q,{children:e.jsx(G,{children:a?e.jsxs(e.Fragment,{children:[e.jsx(A,{src:n}),e.jsx(N,{children:"이 날 찍은 사진이 없어요"})," "]}):e.jsx(W,{src:n})})})}const q=i.div`
  position: fixed;
  top: 10rem;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,G=i.div`
  width: 21.4375rem;
  height: 17.4375rem;
  border-radius: 1.75rem;
  background: #fff;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,W=i.img`
  width: 18.5625rem;
  height: 15.8125rem;
  border-radius: 1.25rem;
`,A=i.img`
  width: 13rem;
  height: auto;
  border-radius: 1.25rem;
`,N=i.div`
  margin-top: 1rem;
  text-align: center;
  font-size: 1rem;
  color: #000;
  font-family: 'Cafe24Dongdong';
  font-style: normal;
`;function P({date:n,picture:a}){const[t,r]=s.useState(!1),m=a,d=()=>{r(window.matchMedia("(max-width: 390px)").matches)};return s.useEffect(()=>(window.addEventListener("resize",d),()=>{window.removeEventListener("resize",d)}),[]),e.jsxs(Z,{children:[e.jsx(J,{children:n}),e.jsx(K,{onClick:()=>r(!t),children:e.jsx(D,{})}),t&&e.jsx(_,{picture:m})]})}const Z=i.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.4rem;

  @media all and (min-width: 391px) {
    justify-content: right;
    margin-right: 20rem;
    margin-bottom: 1rem;
  }
  @media all and (max-width: 390px) {
    justify-content: center;
    transform: translateY(-2rem);
    /* margin-right: 3.25rem; */
  }
`,J=i.div`
  display: flex;
  width: auto;
  height: 2rem;
  white-space: nowrap;
  align-items: center;

  /* text */
  font-family: 'Cafe24Dongdong';
  font-weight: 400;

  @media all and (min-width: 391px) {
    font-size: 1.5rem;
  }
  @media all and (max-width: 390px) {
    font-size: 1.125rem;
  }
`,K=i.div`
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media all and (min-width: 391px) {
    display: none;
  }
  @media all and (max-width: 390px) {
    width: 1.75rem;
    height: 1.75rem;
  }
`,V=async n=>{const a=k("token");try{const t=await E.get(`/apps/chat_list/${n}/`,{headers:{Authorization:`${a}`}});return t.status===200?t.data:null}catch(t){return console.log("에러 발생",t),null}};function le(){const n=window.localStorage.getItem("chat_id"),[a,t]=s.useState(window.matchMedia("(max-width: 390px)").matches),[r,m]=s.useState(null),d=I(),c=()=>{d("/diary")},{data:o}=$("chattings",()=>V(n)),h=o==null?void 0:o.content,w=C(),{YY:y,MM:j,DD:b}=w.state,v=`${y}년 ${j}월 ${b}일`,g=(o==null?void 0:o.picture)||l,x=()=>{t(window.matchMedia("(max-width: 390px)").matches)};return s.useEffect(()=>(o&&m(o),window.addEventListener("resize",x),()=>{window.removeEventListener("resize",x)}),[]),e.jsx(ee,{children:e.jsx(X,{children:a?e.jsxs(e.Fragment,{children:[e.jsx(P,{date:v,picture:g}),e.jsxs(p,{onClick:c,children:[e.jsx(L,{}),"뒤로가기"]}),e.jsx(f,{children:e.jsx(u,{content:h})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(f,{children:[e.jsx(Q,{picture:g}),e.jsx(u,{content:h})]}),e.jsxs(p,{onClick:c,children:["뒤로가기",e.jsx(te,{src:R})]})]})})})}const X=i.div`
  display: flex;
  flex-direction: column;

  @media all and (min-width: 391px) {
    margin-top: 6rem;
  }
  @media all and (max-width: 390px) {
    margin-top: 3.3rem;
  }
`,ee=i.div`
  position: relative;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;

  @media all and (min-width: 391px) {
    background-image: url(${S});
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
`,f=i.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* margin-top: 10.5rem; */

  @media all and (min-width: 391px) {
    flex-direction: row;
    margin-left: 11.06rem;
    margin-right: 8.62rem;
    gap: 5.3rem;
  }
  @media all and (max-width: 390px) {
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    margin-top: 4.75rem;
    margin-bottom: 3rem;
    height: 30rem;
    gap: 1rem;
  }
`,p=i.div`
  all: unset;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;

  color: #000;
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
    gap: 0.5rem;
    top: 1rem;
    left: 1rem;
    height: 1.5rem;
    font-size: 1.125rem;
  }
`,te=i.img`
  @media all and (min-width: 391px) {
    width: 2.5rem;
    height: 2.5rem;
  }
  @media all and (max-width: 390px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;export{le as default};
