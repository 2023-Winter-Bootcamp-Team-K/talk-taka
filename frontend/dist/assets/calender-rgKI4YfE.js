import{R as g,a as l,u as F,r as v,j as o,g as A}from"./index-7gdVoRug.js";import{b as L}from"./config-t_5GBwir.js";var O={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},C=g.createContext&&g.createContext(O),m=function(){return m=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++){n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)},R=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};function k(e){return e&&e.map(function(n,t){return g.createElement(n.tag,m({key:t},n.attr),k(n.child))})}function I(e){return function(n){return g.createElement(W,m({attr:m({},e.attr)},n),k(e.child))}}function W(e){var n=function(t){var r=e.attr,a=e.size,p=e.title,y=R(e,["attr","size","title"]),x=a||t.size||"1em",d;return t.className&&(d=t.className),e.className&&(d=(d?d+" ":"")+e.className),g.createElement("svg",m({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,y,{className:d,style:m(m({color:e.color||t.color},t.style),e.style),height:x,width:x,xmlns:"http://www.w3.org/2000/svg"}),p&&g.createElement("title",null,p),e.children)};return C!==void 0?g.createElement(C.Consumer,null,function(t){return n(t)}):n(O)}function Y(e){return I({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"}}]})(e)}function B(e){return I({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z"}}]})(e)}const H=l.div`
  width: 30rem;
  height: 32rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem;
  box-sizing: border-box;
  @media (max-width: 391px) {
    padding: 0rem;
    width: 100%;
    height: 85%;
  }
`,P=l.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 0;
  @media (max-width: 391px) {
    width: 75%;
    padding: 0;
  }
`,T=l.div`
  font-size: 1.5rem;
  text-align: center;
  @media (max-width: 391px) {
    font-size: 1rem;
  }
`,$=l.div`
  font-size: 2.5rem;
  text-align: center;
  @media (max-width: 391px) {
    font-size: 1.6rem;
  }
`,U=l.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,K=l(Y)`
  cursor: pointer;
  font-size: 2rem;
  @media (max-width: 391px) {
    font-size: 1.5rem;
  }
`,X=l(B)`
  cursor: pointer;
  font-size: 2rem;
  @media (max-width: 391px) {
    font-size: 1.5rem;
  }
`,G=l.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  @media (max-width: 391px) {
    width: 30%;
    font-size: 0.9rem;
    display: flex;
    justify-content: center;
    letter-spacing: -0.1em;
  }
`,V=l.div`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
`,Z=l.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(
    ${e=>e.rows},
    1fr
  ); // 동적으로 행 수 설정
  background-color: #ddd;
  width: 100%;

  @media (max-width: 391px) {
    width: auto;
    height: auto;
  }
`,D=l.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 4.4rem;
  border: 0.01rem solid #ddd;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: #fec0cb;
    transform: scale(1.2);
    z-index: 4;
  }

  &.not-current {
    color: lightgray;
  }

  > div {
    margin-top: 0.5rem;

    @media (max-width: 391px) {
      font-size: 0.8rem;
      margin-top: 0rem;
    }
  }

  @media (max-width: 391px) {
    width: 2.2rem;
    height: 3.2rem;
  }
`,q={joy:"https://ifh.cc/g/13Ktbk.png",sad:"https://ifh.cc/g/pscoAZ.png",angry:"https://ifh.cc/g/alvMNR.png"},J=({data:e})=>{const n=F(),[t,r]=v.useState(new Date),[a,p]=v.useState({}),y=s=>{const i=a[s];if(i&&i.length>0){const c=i[0].diaryId.toString();localStorage.setItem("selectedDiaryId",c),n("/bookcover")}else alert("해당 날짜에는 다이어리가 존재하지 않습니다.")};v.useEffect(()=>{if(e){const s=e.reduce((i,c)=>{const u=c.created_at;return u&&(i[u]=i[u]||[],i[u].push({diaryId:c.diaryId,mood:q[c.mood],imageUrl:c.imageURL,created_at:c.created_at})),i},{});p(s)}},[e]);const x=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],d=new Date(t.getFullYear(),t.getMonth()+1,0).getDate(),j=s=>{r(new Date(t.getFullYear(),t.getMonth()+s,1))},N=()=>x.map((s,i)=>o.jsx(V,{children:s},i)),b=(()=>{const s=new Date(t.getFullYear(),t.getMonth(),1).getDay(),i=new Date(t.getFullYear(),t.getMonth(),0).getDate(),c=Array.from({length:s},(M,h)=>{const f=i-s+h+1;return o.jsx(D,{className:"not-current",children:f},`prev-${f}`)}),u=Array.from({length:d},(M,h)=>{const f=h+1,w=new Date(t.getFullYear(),t.getMonth(),f+1).toISOString().split("T")[0];return o.jsxs(D,{className:"current",style:{position:"relative",overflow:"hidden"},onClick:()=>y(w),children:[a[w]&&o.jsx("img",{src:a[w][0].mood,alt:"Mood",style:{width:"130%",height:"auto",position:"absolute",top:"5px",left:"50%",transform:"translateX(-50%)"}}),o.jsx("div",{style:{position:"absolute",top:0,left:"50%",transform:"translateX(-50%)",zIndex:2,width:"100%",textAlign:"center"},children:f})]},`current-${f}`)}),z=s+d,S=Math.ceil(z/7)*7-z,E=Array.from({length:S},(M,h)=>o.jsx(D,{className:"not-current",children:h+1},`next-${h}`));return[...c,...u,...E]})(),_=Math.ceil(b.length/7);return o.jsxs(H,{children:[o.jsxs(P,{children:[o.jsx(K,{onClick:()=>j(-1)}),o.jsxs(U,{children:[o.jsx(T,{children:t.getFullYear()}),o.jsx($,{children:o.jsx("p",{children:t.toLocaleString("default",{month:"long"})})})]}),o.jsx(X,{onClick:()=>j(1)})]}),o.jsx(G,{children:N()}),o.jsx(Z,{rows:_,children:b})]})},ae=J,Q=A("token"),oe=async()=>{try{return(await L.get("/diary/diaries/",{headers:{Authorization:Q}})).data}catch(e){console.log(e)}};export{ae as C,oe as g};
