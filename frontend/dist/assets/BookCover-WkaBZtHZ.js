import{r as a,u as p,j as e,h as x,a as r}from"./index-7gdVoRug.js";import{g as f}from"./diary-YKg6ZHrm.js";import{u}from"./useQuery-BVmqMukG.js";import{C as b}from"./Chat_bg-cAMRW75d.js";import"./config-t_5GBwir.js";const w="/assets/DefaultBookCover-bszH5x-n.png",v="/assets/Cover-M2v7HySY.png",n="/assets/diaryRightSide-H20P5oq7.png";function L(){const[d,m]=a.useState(!1),[o,l]=a.useState(!1),c=p(),i=window.localStorage.getItem("selectedDiaryId"),{data:g}=u(["selectedDiaryId",i],()=>f(i||"")),t=g;a.useEffect(()=>{s()},[]);const s=()=>{m(!0),setTimeout(()=>{l(!0)},1200),setTimeout(()=>{c("/diary")},1400)},h=t!=null&&t.captureURL?{}:{height:"25rem",boxShadow:"0 0 0 0"};return e.jsx(e.Fragment,{children:e.jsxs(y,{children:[e.jsx(j,{className:d?"open":"",children:e.jsxs(Y,{children:[e.jsxs(D,{children:[e.jsx(X,{children:2024}),e.jsxs(S,{children:[t==null?void 0:t.username," 다이어리"]}),e.jsx("img",{src:(t==null?void 0:t.captureURL)||w,alt:"Book Cover",style:h}),e.jsx("button",{onClick:s,children:"함께 보러가기 "})]}),o&&e.jsx(C,{})]})}),o&&e.jsx(B,{children:e.jsx(R,{})})]})})}const k=x`
  0%, 10% {
    transform: translateX(0) rotateY(0);
  }
  20% {
    transform: translateX(10%) rotateY(0);
  }
  30% {
    transform: translateX(20%) rotateY(0);
  }
  40% {
    transform: translateX(30%) rotateY(0);
  }
  50% {
    transform: translateX(40%) rotateY(0);
  }
  60% {
    transform: translateX(50%) rotateY(0);
  }
  70% {
    transform: translateX(50%) rotateY(-90deg);
  }
  80% {
    transform: translateX(50%) rotateY(-135deg);
  }
  90% {
    transform: translateX(50%) rotateY(-170deg);
  }
  100% {
    transform: translateX(50%) rotateY(-180deg);
  }
`,y=r.div`
  background-image: url(${b});
  margin: auto;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 50%;

  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`,j=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 36.875rem;
  height: 53.125rem;
  border-radius: 0.75rem;
  transform-origin: left center;
  transition: transform 1.3s ease-in;
  transform-style: preserve-3d;

  &.open {
    animation: ${k} 1.5s ease-in-out forwards;
  }

  @media (max-width: 390px) {
    display: none;
  }

  img {
    width: 25rem;
    height: 20.625rem;
    border-radius: 1.875rem;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  button {
    all: unset;
    width: 13.5rem;
    height: 2.625rem;
    border-radius: 0.75rem;
    font-family: 'Cafe24Dongdong';
    text-align: center;
    background: #ff939c;
    margin-top: 10rem;
    transition: box-shadow 0.3s ease-in-out;
    box-shadow: 4px 4px 4px 0px rgba(78, 78, 78, 0.25);

    &:hover {
      box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.25);
    }
  }
`,Y=r.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  border-radius: 0.75rem;
`,D=r.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.75rem;
  background-image: url(${v});
`,C=r.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: white;
  transform: rotateY(180deg);
  border-radius: 0.75rem;
  background-image: url(${n});
  position: relative;
`,X=r.p`
  text-align: center;
  font-family: 'Cafe24Dongdong';
  font-size: 2rem;
  font-weight: 400;
  margin-top: 5.81rem;
`,S=r.p`
  text-align: center;
  font-family: 'Cafe24Dongdong';
  font-weight: 400;
  font-size: 2.5rem;
  margin-bottom: 2.31rem;
`,B=r.div`
  border-radius: 0.75rem;
  background: #ffc6cb;
  background-image: url(${n});
  position: absolute;
  width: 36.875rem;
  height: 53.125rem;
  left: 1273px;

  @media (max-width: 1536px) {
    width: 36.875rem;
    height: 53.125rem;
    left: 1273px;
  }
  @media (max-width: 1440px) {
    width: 36.875rem;
    height: 53.125rem;
    left: 719px;
  }
  @media (max-width: 390px) {
    display: none;
  }
`,R=r.div`
  width: 0.8125rem;
  height: 50.125rem;
  border-radius: 2.40625rem;
  background: rgba(185, 185, 185, 0.68);
  box-shadow: 1px 8px 22.1px 10px rgba(128, 128, 128, 0.25);
  z-index: 4;
  position: relative;
  left: -7px;
  top: 18px;
`;export{L as default};
