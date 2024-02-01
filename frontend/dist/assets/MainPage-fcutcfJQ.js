import{u as h,j as t,g as c,b as m,a as o}from"./index-7gdVoRug.js";import{L as u}from"./SVG-Nj8CxP-m.js";import{C as p,g as x}from"./calender-rgKI4YfE.js";import{u as f}from"./useQuery-BVmqMukG.js";import{b as g}from"./config-t_5GBwir.js";const b="/assets/Main_bg-axencLkP.png",w="/assets/mainP-p2RLuksE.png";function P(){const e=h(),a=async()=>{const r={headers:{Authorization:`${c("token")}`}};try{const n=await g.post("/apps/create_chat_room/",{},r);n.status===201&&(window.localStorage.setItem("chat_id",n.data.chat_room_id),e("/chat"))}catch(n){console.error(n)}},{data:i}=f("sales",()=>x()),d=i==null?void 0:i.data,l=async()=>{const s=c("refresh_token");m("token"),m("refresh_token");try{(await g.post("/auth/logout/",{refresh:s})).status===205&&(window.localStorage.clear(),e("/"))}catch(r){console.error(r)}};return t.jsxs(k,{children:[t.jsxs(v,{onClick:l,children:[t.jsx(u,{}),"로그아웃"]}),t.jsxs(y,{children:[t.jsx(p,{data:d}),t.jsx(j,{onClick:a,children:"대화하러 가기"})]}),t.jsxs(_,{children:["다시 돌아오지 않는 ",t.jsx(C,{})," ",t.jsx("br",{}),"하루를 기록으로 남겨보세요"]})]})}const k=o.div`
  background-image: url(${b});
  position: relative;
  margin: auto;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 75%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 391px) {
    background-image: url(${w});
    background-position: center;
    background-position-x: 50%;
    background-position-y: 30%;
  }
`,y=o.div`
  padding-top: 2rem;
  width: 36rem;
  height: 48rem;
  border-radius: 0.9375rem;
  background: #fff;
  box-shadow: 16.5px -10px 28.2px 0px rgba(0, 0, 0, 0.25);

  margin-top: 11rem;
  margin-bottom: 6rem;
  margin-left: 20%;

  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 391px) {
    margin-left: auto; // 좌측 여백 자동 조정
    margin-right: auto; // 우측 여백 자동 조정
    align-items: center; // 수평 중앙 정렬
    width: 21rem;
    height: 34rem;
    margin-bottom: 17rem;
  }
`,j=o.button`
  /* text */
  width: 16rem;
  height: 2.25rem;
  color: #fff;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 800;

  /* button */
  width: 23rem;
  height: 4.125rem;
  border-radius: 0.5625rem;
  background: #222;
  margin-top: 7rem;

  @media (max-width: 391px) {
    font-size: 1rem;
    width: 15.25rem;
    height: 3rem;
    margin-top: 0rem;
  }
`,v=o.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  top: 1rem;
  right: 1rem;
  gap: 0.5rem;
  font-weight: 500;
  font-size: 1.25rem;
  cursor: pointer;
`,_=o.div`
  display: flex;
  /* width: 28rem; */
  width: 35rem;
  line-height: 170%;
  height: 1.4375rem;
  flex-direction: column;
  justify-content: center;
  color: #ad6f1c;
  text-align: center;
  text-shadow: 2.5px 5px 4.3px rgba(0, 0, 0, 0.25);
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 16.87rem;
  margin-bottom: 45.69rem;
  margin-left: 12.06rem;
  @media (max-width: 1400px) {
    display: none;
  }
`,C=()=>{const e=new Date,a=`${e.getFullYear()}년 ${e.getMonth()+1}월 ${e.getDate()}일`;return t.jsx(t.Fragment,{children:a})};export{P as default};
