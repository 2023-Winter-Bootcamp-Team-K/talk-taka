import{j as r,a as i}from"./index-7gdVoRug.js";function b({title:t,width:e="14.24731rem",widthp:n="8.92025rem",height:a="3.69444rem",heightp:$="2.3125rem",marginl:m="0",marginlp:o="0",margint:d="0",margintp:h="0",fonts:l="1.5rem",fontsp:g="1.125rem",borderr:s="5rem",onClick:f,disabled:c=!1}){return r.jsx(u,{children:r.jsx(w,{onClick:f,$width:e,$widthp:n,$height:a,$heightp:$,$marginl:m,$marginlp:o,$margint:d,$margintp:h,$fonts:l,$fontsp:g,$borderr:s,$disabled:c,children:t})})}const u=i.div``,w=i.button`
  /* text */
  all: unset;
  color: #fff;
  text-align: center;
  font-weight: 800;

  /* button */
  background: ${t=>t.$disabled?" #aeaeae":"#2c2c2c"};

  border-radius: ${t=>t.$borderr==="normal"?"5rem":t.$borderr};

  cursor: pointer;
  &:active {
    opacity: 0.3;
  }

  @media all and (min-width: 391px) {
    font-size: ${t=>t.$fonts};
    width: ${t=>t.$width==="normal"?"14.24731rem":t.$width};
    margin-left: ${t=>t.$marginl==="normal"?"10rem":t.$marginl};
    margin-top: ${t=>t.$margint==="normal"?"10rem":t.$margint};
    height: ${t=>t.$height==="normal"?"1rem":t.$height};
  }
  @media all and (max-width: 390px) {
    font-size: ${t=>t.$fontsp};
    width: ${t=>t.$widthp};
    margin-left: ${t=>t.$marginlp};
    margin-top: ${t=>t.$margintp};
    height: ${t=>t.$heightp};
  }
`;export{b as B};
