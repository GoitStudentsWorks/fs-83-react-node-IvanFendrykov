import{s as n,u as i,j as e}from"./index-4bbf951e.js";import{S as o}from"./pawprint1-694aec15.js";const a="/fs-83-react-node-IvanFendrykov/assets/notfound-img-mobile-2x-860fb928.png",s="/fs-83-react-node-IvanFendrykov/assets/notfound-img-tablet-2x-83686b8a.png",r="/fs-83-react-node-IvanFendrykov/assets/notfound-img-desctop-2x-273e2b7b.png",p=n.div`
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;

`,d=n.h2`
  margin-top: 80px;
  display: block;
  align-items: center;
  justify-content: center;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;

  @media (min-width: 768px) {
    display: flex;
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    text-align: inherit;
  }

  @media (min-width: 1280px) {
    display: flex;
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
  }
`,x=n.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;

  @media (min-width: 768px) {
    display: flex;
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    text-align: inherit;
    margin-left: 10px;
  }

  @media (min-width: 1280px) {
    display: flex;
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
  }
`,l=n.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
`,g=n.img`
  width: 280px;
  height: 123px;
  content: url('${a}');

  @media (min-width: 768px) {
    content: url('${s}');
    width: 704px;
    height: 308px;
  }
  @media (min-width: 1280px) {
    content: url('${r}');
    width: 822px;
    height: 360px;
  }
`,h=n.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;

  @media (min-width: 768px) {
    margin-top: 68px;
  }
  @media (min-width: 1280px) {
    margin-top: 18px;
  }
    :hover {
    background: ${t=>t.theme.colors.gradientBlue};
  }
  :focus {
    background-color: ${t=>t.theme.colors.gradientBlue};
  }
`,c=n.button`
  width: 248px;
  display:flex;
  align-items: center;

  padding: 8px 28px;

  background-color: ${t=>t.theme.colors.blue};
  border: none;
  border-radius: 40px;
  text-align: center;
  gap: 12px;


  font-weight: 600;
  font-size: 20px;
  line-height: 1.35;

  letter-spacing: 0.04em;

  color: ${t=>t.theme.colors.white};

  @media screen and (max-width: 767px) {
    margin-top: 41px;
    margin-bottom: 24px;
  }
  svg {
    fill: #fdf7f2;
  }

`,m=n.div`
margin:0`;function w(){const t=i();return e.jsxs(p,{children:[e.jsx(m,{children:e.jsxs(d,{children:["Ooops!",e.jsx(x,{children:" This page not found ☹"})]})}),e.jsx(l,{children:e.jsx(g,{alt:"not found"})}),e.jsx(h,{children:e.jsxs(c,{type:"button",onClick:()=>t("/"),children:["To main page",e.jsx(o,{})]})})]})}export{w as default};
