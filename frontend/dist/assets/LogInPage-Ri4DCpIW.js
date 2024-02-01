import{r as g,u as f,g as b,j as e,s as d,a as o}from"./index-7gdVoRug.js";import{L as l,a as w,b as k}from"./LoginPage_p_bg-ElBhZIm2.js";import{B as y}from"./Btn-UDhu5kYv.js";import{b as j}from"./config-t_5GBwir.js";const c=t=>{const[r,n]=g.useState(t);return[r,i=>{n(i.target.value)}]},v="/assets/쿼카-sYQX3uXj.png";function D(){const[t,r]=c(""),[n,s]=c(""),i=f(),p=()=>{i("/signup")};g.useEffect(()=>{b("token")&&i("/main")});const h=!t||!n,u=async m=>{m.preventDefault();const x={id:t,password:n};try{const a=await j.post("/auth/login/",x);a.data.status===200&&(i("/main"),d("token",a.data.access,{path:"/",secure:!0,maxAge:3e3}),d("refresh_token",a.data.refresh,{path:"/",secure:!0,maxAge:3e3}))}catch(a){alert("아이디 정보가 올바르지 않습니다."),console.error(a)}};return e.jsxs(C,{children:[e.jsxs(z,{children:[e.jsx(L,{children:"로그인"}),e.jsxs("form",{onSubmit:u,children:[e.jsx(l,{value:t,onChange:r,marginbottom:"2.74rem",marginbottomp:"2.71rem",type:"아이디",placeholder:"영문 + 숫자"}),e.jsx(l,{value:n,onChange:s,marginbottom:"4.12rem",marginbottomp:"2.84rem",type:"비밀번호",typeI:"password",placeholder:"6자리 이상"}),e.jsx(y,{disabled:h,title:"로그인"})]}),e.jsx(B,{type:"submit",onClick:p,children:"회원가입 하러가기"})]}),e.jsx(I,{})]})}const C=o.div`
  z-index: 1;
  margin: auto;
  background-repeat: no-repeat;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  @media all and (min-width: 391px) {
    background-image: url(${w});
    background-position-x: 50%;
    background-position-y: 75%;
  }
  @media all and (max-width: 390px) {
    background-position: center;
    background-image: url(${k});
  }
`,z=o.div`
  position: absolute;
  z-index: 2;
  background-color: white;
  border-radius: 0.9375rem;
  background: var(--, #fffbfb);
  box-shadow: 16.5px -10px 28.2px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media all and (min-width: 391px) {
    width: 34.75rem;
    height: 41.125rem;
  }
  @media (max-width: 390px) {
    width: 21.4375rem;
    height: 32.625rem;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`,L=o.div`
  z-index: 3;
  color: #000;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media all and (min-width: 391px) {
    margin-top: 2.94rem;
    margin-bottom: 4.43rem;
    width: 8.4375rem;
    height: 3.1875rem;
    font-size: 2.75rem;
  }
  @media (max-width: 390px) {
    margin-top: 3.37rem;
    margin-bottom: 2.56rem;
    width: 8.92025rem;
    height: 2.3125rem;
    font-size: 1.5rem;
  }
`,B=o.button`
  z-index: 3;
  all: unset;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #b2b2b2;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  text-decoration-line: underline;

  @media all and (min-width: 391px) {
    margin-top: 1.06rem;
    width: 13.9375rem;
    height: 1.875rem;
    font-size: 1.125rem;
  }
  @media (max-width: 390px) {
    width: 9.77631rem;
    height: 1.48625rem;
    font-size: 0.875rem;
    margin-top: 0.47rem;
  }
  &:active {
    opacity: 0.3;
  }
`,I=o.div`
  @media all and (min-width: 391px) {
  }
  @media all and (max-width: 390px) {
    all: unset;
    position: relative;
    width: 9.9375rem;
    height: 13.875rem;

    z-index: 4;
    top: 31%;
    left: 25%;
    background-image: url(${v});
    background-repeat: no-repeat;
  }
`;export{D as default};
