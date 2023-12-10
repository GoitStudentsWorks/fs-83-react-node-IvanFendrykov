import{s as r,L as U,c as q,r as p,u as M,j as s,n as k,d as Z,b as B,e as O,V as W}from"./index-6bd703c5.js";import{F as G,a as N,S as v,b as F,c as H}from"./check-good-058f9bc6.js";import{S as b}from"./cross-smal-acb77697.js";const J=r.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,K=r.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 1.36;
  color: ${({theme:e})=>e.colors.black};
  margin-bottom: 40px;

  @media screen and (max-width: 767px) {
    font-size: 24px;
    line-height: 1.38;
  }
`,Q=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: ${({error:e})=>e?"6px":"32px"};

  @media screen and (max-width: 767px) {
    margin-bottom: ${({error:e})=>e?"1px":"24px"};
  }
`,X=r.div`
  display: flex;
  align-items: center;
  padding: 2px 16px;

  border: 1px solid
    ${({theme:e,error:n})=>n?e.colors.red:e.colors.blue};
  border-radius: 40px;
`,Y=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: ${({error:e})=>e?"6px":"32px"};

  @media screen and (max-width: 767px) {
    margin-bottom: ${({error:e})=>e?"1px":"24px"};
  }
`,ee=r.div`
  display: flex;
  align-items: center;
  padding: 2px 16px;

  border: 1px solid
    ${({theme:e,error:n})=>n?e.colors.red:e.colors.blue};
  border-radius: 40px;
`,m=r(G)`
  padding: 12px 0;
  line-height: 1.5;
  letter-spacing: 0.04em;

  width: 100%;
  height: 48px;
  border: none;
  outline: none;
`,x=r.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;

  & svg {
    stroke: ${({theme:e})=>e.colors.red};
  }
`,g=r.div`
  padding-left: 16px;
  margin-top: 4px;
  color: ${({theme:e})=>e.colors.red};
`,C=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: ${({error:e,secure:n})=>e||n?"6px":"32px"};

  @media screen and (max-width: 767px) {
    margin-bottom: ${({error:e,secure:n})=>e||n?"1px":"24px"};
  }
`,$=r.div`
  display: flex;
  align-items: center;
  padding: 2px 16px;

  border: 1px solid
    ${({theme:e,error:n,secure:f})=>n?e.colors.red:f?e.colors.green:e.colors.blue};
  border-radius: 40px;
`,E=r.span`
  display: flex;
  align-items: center;
  gap: 10px;  
flex-direction: row-reverse;
`,se=r.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
`,ie=r.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;

`,ne=r.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;

  & svg {
    stroke: ${({theme:e})=>e.colors.green};
  }
`,oe=r.div`
  padding-left: 16px;
  margin-top: 4px;
  color: ${({theme:e})=>e.colors.green};
`,ae=r.div`
  padding: 15px 16px 0 16px;
  color: ${({theme:e})=>e.colors.red};
`,re=r.button`
  margin-top: 8px;
  margin-bottom: 20px;
  width: 100%;

  padding: 10px 0 10px 0;

  background: ${({theme:e})=>e.colors.blue};
  border: none;
  border-radius: 40px;

  font-weight: 600;
  font-size: 20px;
  line-height: 1.35;

  letter-spacing: 0.04em;

  color: #ffffff;
  transition: background-color 0.4s;
  &:hover{
  background: rgb(23 107 182);
  }
  
  @media screen and (max-width: 767px) {
    margin-top: 41px;
    margin-bottom: 24px;
  }
`,te=r.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: 0.04em;
  color: ${({theme:e})=>e.colors.grey};
`,de=r(U)`
  text-decoration-line: underline;
  color: ${({theme:e})=>e.colors.blue};
  display: inline;
  cursor: pointer;
`,le={username:"",email:"",password:"",confirmPassword:""},ce=e=>{const n={};return e.username?/^\s+$/.test(e.username)&&(n.username="Username cannot be empty"):n.username="This field is required",e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(n.email="Enter a valid Email",k.error('Email must contain the "@" symbol')):n.email="This field is required",e.password?e.password.length<8&&(n.password="Password must be at least 8 characters long"):n.password="This field is required",e.confirmPassword?e.confirmPassword.length<8?n.confirmPassword="Password must be at least 8 characters long":e.password!==e.confirmPassword&&(n.confirmPassword="Passwords do not match",k.error("Please, enter correct password")):n.confirmPassword="This field is required",n},pe=()=>{const e=q(),[n,f]=p.useState(!1),[w,I]=p.useState(!1),[S,u]=p.useState(!1),[A,j]=p.useState(!0),R=M(),L=()=>{f(a=>!a)},D=()=>{I(a=>!a)},V=async(a,{setSubmitting:i,resetForm:y})=>{if(S)return;u(!0);const o={email:a.email,password:a.password,username:a.username};try{e(Z(o)).error?j(!1):(j(!0),R("/user"))}catch(t){console.error(t)}finally{u(!1),i(!1)}};return s.jsx(N,{initialValues:le,validate:ce,validateOnChange:!1,onSubmit:V,children:({values:a,errors:i,setErrors:y,touched:o,handleChange:t,handleBlur:d,handleSubmit:T,isSubmitting:_,resetForm:l})=>{const h=a.password&&a.password.length>=8,c=P=>{const{name:z}=P.target;y({...i,[z]:""}),t(P)};return s.jsxs(J,{onSubmit:T,children:[s.jsx(K,{children:"Registration"}),s.jsxs(Q,{valider:i.username&&o.username,children:[s.jsxs(X,{valider:i.username&&o.username,style:{borderColor:i.username&&o.username?"#F43F5E":"#54ADFF"},children:[s.jsx(m,{type:"string",name:"username",placeholder:"Username",value:a.username,onChange:c,onBlur:d}),i.username&&o.username&&a.username&&s.jsx(x,{onClick:()=>{l({values:{...a,username:""}})}})]}),i.username&&o.username&&s.jsx(g,{name:"username",children:i.username})]}),s.jsxs(Y,{error:i.email&&o.email,children:[s.jsxs(ee,{valider:i.email&&o.email,style:{borderColor:i.email&&o.email?"#F43F5E":"#54ADFF"},children:[s.jsx(m,{type:"string",name:"email",placeholder:"Email",value:a.email,onChange:c,onBlur:d}),i.email&&o.email&&a.email&&s.jsx(x,{onClick:()=>{l({values:{...a,email:""}})},children:s.jsx(b,{})})]}),i.email&&o.email&&s.jsx(g,{name:"email",children:i.email})]}),s.jsxs(C,{valider:i.password&&o.password,children:[s.jsxs($,{valider:i.password&&o.password,style:{borderColor:i.password&&o.password?"#F43F5E":h?"#00C3AD":"#54ADFF"},children:[s.jsx(m,{type:n?"text":"password",name:"password",placeholder:"Password",value:a.password,onChange:c,onBlur:d}),s.jsxs(E,{children:[s.jsx(se,{onClick:L,valider:i.password&&o.password,style:{stroke:n?"#54ADFF":"#888"},children:n?s.jsx(v,{}):s.jsx(F,{})}),h&&s.jsx(ne,{children:s.jsx(H,{})}),i.password&&o.password&&a.password&&s.jsx(x,{onClick:()=>{l({values:{...a,password:""}})},children:s.jsx(b,{})})]})]}),i.password&&o.password&&s.jsx(g,{children:i.password}),h&&s.jsx(oe,{children:"Password is secure"})]}),s.jsxs(C,{valider:i.confirmPassword&&o.confirmPassword,children:[s.jsxs($,{valider:i.confirmPassword&&o.confirmPassword,style:{borderColor:i.confirmPassword&&o.confirmPassword?"#F43F5E":"#54ADFF"},children:[s.jsx(m,{type:w?"text":"password",name:"confirmPassword",placeholder:"Confirm password",value:a.confirmPassword,onChange:c,onBlur:d}),s.jsxs(E,{children:[s.jsx(ie,{onClick:D,valider:i.confirmPassword&&o.confirmPassword,style:{stroke:w?"#54ADFF":"#888"},children:w?s.jsx(v,{}):s.jsx(F,{})}),i.confirmPassword&&o.confirmPassword&&a.confirmPassword&&s.jsx(x,{onClick:()=>{l({values:{...a,confirmPassword:""}})},children:s.jsx(b,{})})]})]}),i.confirmPassword&&o.confirmPassword&&s.jsx(g,{children:i.confirmPassword})]}),!A&&s.jsx(ae,{children:"This email is already in use. Please, try with another email or log in!"}),s.jsx(re,{type:"submit",disabled:_,children:"Registration"}),s.jsxs(te,{children:["Already have an account?"," ",s.jsx(de,{to:"/login",children:"Log In"})]})]})}})},me="/fs-83-react-node-IvanFendrykov/assets/bgdesktop@1x-7bac98c5.png",xe="/fs-83-react-node-IvanFendrykov/assets/bgdesktop@2x-7613eaf6.png",ge="/fs-83-react-node-IvanFendrykov/assets/bgtablet@1x-6f766e3d.png",fe="/fs-83-react-node-IvanFendrykov/assets/bgtablet@2x-3dcf1e44.png",we="/fs-83-react-node-IvanFendrykov/assets/bgmobile@1x-eee285ce.png",he="/fs-83-react-node-IvanFendrykov/assets/bgmobile@2x-40f927b2.png",be=r.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url('${me}');

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('${xe}');
  }

  @media screen and (max-width: 1279px) {
    background-image: url('${ge}');

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${fe}');
    }
  }

  @media screen and (max-width: 767px) {
    padding-top: 44px;
    background-image: url('${we}');

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${he}');
    }
  }
  `,ue=r.div`
  padding: 60px 75px;
  width: 608px;
  height: fit-content;
  background: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;

  @media screen and (max-width: 767px) {
    margin: 0 auto;
    padding: 40px 12px;
    max-width: 280px;

    box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
    border-radius: 20px;
  }
`,ke=()=>{const e=B(O);return s.jsx(be,{children:s.jsxs(ue,{children:[e&&s.jsx(W,{}),s.jsx(pe,{})]})})};export{ke as default};
