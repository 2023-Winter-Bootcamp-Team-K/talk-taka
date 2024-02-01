import{r as t,u as xe,j as e,a as r}from"./index-7gdVoRug.js";import{L as l,a as pe,b as ue}from"./LoginPage_p_bg-ElBhZIm2.js";import{B as b}from"./Btn-UDhu5kYv.js";import{M as fe,F as we}from"./SVG-Nj8CxP-m.js";import{b as E}from"./config-t_5GBwir.js";const be=async o=>(await E.get(`/check/id/availability/?id=${o}`)).data;function Ae(){const[o,k]=t.useState(""),[d,T]=t.useState(""),[x,U]=t.useState(""),[v,Z]=t.useState(""),[I,X]=t.useState(""),[m,Y]=t.useState(null),S=m,[p,P]=t.useState(!1),[Se,L]=t.useState(!1),[_,c]=t.useState(!1),[q,$]=t.useState(!1),[H,z]=t.useState(!1),[J,i]=t.useState(!1),[K,u]=t.useState("#c42c21"),[O,M]=t.useState("#c42c21"),[Q,g]=t.useState("#c42c21"),[V,f]=t.useState("✖ 영문+숫자 조합으로 입력해주세요!"),[W,G]=t.useState("✖ 영문+숫자 조합으로 입력해주세요!"),[ee,h]=t.useState("✖ 비밀번호가 일치하지 않음!"),[te,ae]=t.useState(1),A=xe(),w=!p||!_,ne=q&&H,se=w||S==null,re=async()=>{if(p)try{(await be(o)).available?(f("✔ 사용 가능한 아이디입니다."),u("#1b8845"),i(!0)):(f("✖ 중복된 아이디입니다."),u("#c42c21"),i(!1))}catch(a){console.error("API 요청 중 에러 발생",a),alert("중복 확인 중 오류가 발생했습니다."),i(!1)}},B=()=>{A("/login")},oe=()=>{ne===!0?ge():alert("형식에 맞지 않음!")},D=a=>{Y(m===a?null:a)},ie=t.useCallback(a=>{const n=/^(?=.*[a-zA-Z])(?=.*[0-9]).{6,25}$/,s=a.target.value;k(s),n.test(s)?(P(!0),i(!1)):(f("✖ 영문+숫자 조합으로 입력해주세요."),u("#c42c21"),P(!1),i(!1))},[]),le=t.useCallback(a=>{const n=/^(?=.*[a-zA-Z])(?=.*[0-9]).{6,25}$/,s=a.target.value;T(s),n.test(s)?(G("✔ 사용가능한 비밀번호입니다."),M("#1b8845"),L(!0),s!==x?(h("✖ 비밀번호가 일치하지 않습니다."),g("#c42c21"),c(!1)):(h("✔ 비밀번호가 일치합니다."),g("#1b8845"),c(!0))):(G("✖ 영문+숫자 조합으로 입력해주세요."),M("#c42c21"),L(!1))},[x]),de=t.useCallback(a=>{const n=a.target.value;U(n),d!==n?(h("✖ 비밀번호가 일치하지 않습니다."),g("#c42c21"),c(!1)):(h("✔ 비밀번호가 일치합니다."),g("#1b8845"),c(!0))},[d]),me=t.useCallback(a=>{const n=/[0-9]{4}-[0-9]{2}-[0-9]{2}/i,s=a.target.value.replace(/[^0-9]/g,"").replace(/^(\d{0,4})(\d{0,2})(\d{0,2})$/g,"$1-$2-$3").replace(/(\-{1,2})$/g,"");X(s),n.test(s)?$(!0):$(!1)},[]),ce=t.useCallback(a=>{const n=/^[ㄱ-ㅎ|가-힣]+$/,s=a.target.value;Z(s),n.test(s)?z(!0):z(!1)},[]),ge=async()=>{const a={username:v,id:o,password:d,age:I,gender:S};try{(await E.post("/members",a)).data.status==="201"&&A("/login")}catch(n){alert("형식이 맞지 않습니다. 다시 작성해주세요"),console.error(n)}},he=()=>{!w&&J?ae(2):alert("아이디 중복 확인이 필요합니다.")};return e.jsx(Ce,{children:e.jsx(je,{children:te===1?e.jsxs(e.Fragment,{children:[e.jsx(R,{children:"회원가입"}),e.jsxs(ye,{children:[e.jsx(l,{value:o,onChange:ie,width:"19.0625rem",widthp:"11.569rem",type:"아이디",placeholder:"영문 + 숫자  6자리 이상",marginbottom:"0.47rem",marginbottomptt:"0.06rem"}),e.jsx(b,{title:"중복확인",onClick:re,disabled:!p,width:"9.1875rem",widthp:"5.8125rem",marginl:"1.31rem",marginlp:"0.76rem",margint:"1.4rem",margintp:"1.5rem",fonts:"1.125rem",fontsp:"0.875rem",borderr:"0.875rem"})]}),e.jsx(C,{children:e.jsx(j,{children:e.jsx(y,{color:K,children:V})})}),e.jsx(l,{value:d,onChange:le,type:"비밀번호",typeI:"password",placeholder:"영문 + 숫자  6자리 이상",marginbottom:"0.47rem",marginbottomp:"0.09rem",marginbottomptt:"0.06rem"}),e.jsx(C,{children:e.jsx(j,{children:e.jsx(y,{color:O,children:W})})}),e.jsx(l,{value:x,onChange:de,type:"비밀번호 확인",typeI:"password",placeholder:"한번 더 입력해주세요",marginbottom:"0.47rem",marginbottomptt:"0.06rem"}),e.jsx(C,{children:e.jsx(j,{children:e.jsx(y,{color:Q,children:ee})})}),e.jsx(b,{onClick:he,disabled:w,title:"다음",width:"14.24731rem"}),e.jsx(N,{onClick:B,children:"로그인 하러가기"})]}):e.jsxs(e.Fragment,{children:[e.jsx(R,{children:"회원가입"}),e.jsx(l,{value:v,onChange:ce,type:"이름",placeholder:"자녀분의 이름을 입력해주세요.",marginbottom:"2.25rem",marginbottomp:"2.2rem",marginbottomptt:"0.06rem"}),e.jsx(l,{value:I,onChange:me,type:"생년월일",placeholder:"EX.) 2017-01-01",marginbottom:"2.25rem",marginbottomp:"1.7rem",marginbottomptt:"0.03rem"}),e.jsx(Ie,{children:e.jsx(ve,{children:"성별"})}),e.jsxs(ke,{children:[e.jsx(F,{onClick:()=>D("male"),isselected:m==="male"?1:0,children:e.jsx(fe,{})}),e.jsx(F,{onClick:()=>D("female"),isselected:m==="female"?1:0,children:e.jsx(we,{})})]}),e.jsx(b,{title:"확인",disabled:se,onClick:oe,width:"14.24731rem",margint:"1.5rem",margintp:"0.6rem"}),e.jsx(N,{onClick:B,children:"로그인 하러가기"})]})})})}const Ce=r.div`
  z-index: 1;
  margin: auto;
  background-repeat: no-repeat;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  @media all and (min-width: 791px) {
    background-image: url(${pe});
    background-position-x: 50%;
    background-position-y: 75%;
  }
  @media all and (max-width: 790px) {
    background-position: center;
    background-image: url(${ue});
  }
`,je=r.div`
  position: absolute;
  background-color: white;
  border-radius: 0.9375rem;
  background: var(--, #fffbfb);
  box-shadow: 16.5px -10px 28.2px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media all and (min-width: 791px) {
    width: 34.75rem;
    height: 45.125rem;
  }
  @media all and (max-width: 790px) {
    width: 21.4375rem;
    height: 32.625rem;
  }
`,ye=r.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,R=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #000;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-top: 2.94rem;

  @media all and (min-width: 791px) {
    width: 11.6875rem;
    height: 3.1875rem;
    font-size: 2.75rem;
    margin-bottom: 3.44rem;
  }
  @media all and (max-width: 790px) {
    width: 4.41794rem;
    height: 1.4375rem;
    font-size: 1.125rem;
    margin-bottom: 2.5rem;
  }
`,C=r.div`
  display: flex;
  justify-content: left;
  width: 100%;
  @media all and (min-width: 791px) {
    padding-left: 2.87rem;
    margin-bottom: 0.5rem;
  }
  @media all and (max-width: 790px) {
    padding-left: 2rem;
  }
`,j=r.div`
  display: flex;

  @media all and (min-width: 791px) {
    width: 17.95856rem;
    height: 1.84725rem;
    margin-bottom: 0.76;
  }
  @media all and (max-width: 790px) {
    width: 17.95856rem;
    height: 1.84725rem;
    margin-bottom: 1rem;
  }
`,y=r.div`
  /* text */
  display: flex;
  flex-direction: row;
  justify-content: left;
  color: ${o=>o.color};

  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media all and (min-width: 791px) {
    width: 17.95856rem;
    height: 0.9375rem;
    font-size: 1.125rem;
  }
  @media all and (max-width: 790px) {
    width: 17.95856rem;
    height: 1.84725rem;
    font-size: 0.875rem;
  }
`,N=r.button`
  all: unset;

  display: flex;
  width: 13.9375rem;
  flex-direction: column;
  justify-content: center;
  color: #b2b2b2;

  text-align: center;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media all and (min-width: 791px) {
    margin-top: 0.5rem;
    margin-bottom: 2.5rem;
    font-size: 1.125rem;
  }
  @media all and (max-width: 790px) {
    margin-top: 0.7rem;
    font-size: 0.875rem;
  }

  cursor: pointer;
  text-decoration-line: underline;
  &:active {
    opacity: 0.3;
  }
`,ke=r.div`
  display: flex;
  flex-direction: row;
  width: calc(100% / 1.5);
  justify-content: space-around;
`,F=r.button`
  all: unset;

  border-radius: 3.6875rem;
  background: #fffbfb;

  @media all and (min-width: 791px) {
    width: 5.75rem;
    height: 7.4375rem;
  }
  @media all and (max-width: 790px) {
    width: 4.625rem;
    height: 5.5rem;
  }

  ${o=>o.isselected&&`
        box-shadow: 0px 0px 15px 9px rgba(0, 0, 0, 0.07);
    `}

  cursor: pointer;
  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 0px 15px 9px rgba(0, 0, 0, 0.07);
  }
  &:active {
    opacity: 0.3;
  }
`,ve=r.div`
  display: flex;
  width: 7.6875rem;
  height: 2rem;
  flex-direction: row;
  margin-left: 2.69rem;

  //text
  color: #2c2c2c;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media all and (min-width: 791px) {
    font-size: 1.25rem;
  }
  @media all and (max-width: 790px) {
    font-size: 1rem;
  }
`,Ie=r.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;export{Ae as default};
